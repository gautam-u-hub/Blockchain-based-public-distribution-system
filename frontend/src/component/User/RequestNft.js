import React, { Fragment, useEffect, useState } from "react";
import "./askForNft.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";

import axios from "axios";

import { NEW_PRODUCT_RESET } from "../../constants/productConstants";

const RequestNft = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [Email, setEmail] = useState(0);
  const [Aadhar, setAadhar] = useState("");
  const [Pan, setPan] = useState("");
  const [MetamaskAddress, setMetamaskAddress] = useState("");

  const [Ration, setRation] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Data submitted to Admin Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createProductSubmitHandler = async (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("Email", Email);
    myForm.set("Aadhar", Aadhar);
    myForm.set("Pan", Pan);
    myForm.set("Ration", Ration);
    myForm.set("MetamaskAddress",MetamaskAddress);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    const config = {
      headers: { "Content-Type": "multipart/form-data" }, // Set the correct content type for FormData
    };

    try {

      console.log("i am in try catch");
      const { data } = await axios.post(
        `/api/v1/requestNft`,
        myForm,
        config,
      );

      console.log("Submitted: ", data);

    } catch (error) {
      console.error("Error Submiting Data:", error.message);

    }
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Request NFT" />
      <div className="newProductContainer">
        <form
          className="createProductForm"
          encType="multipart/form-data"
          onSubmit={createProductSubmitHandler}
        >
          <h1>Request for NFT:</h1>

          <div>
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Aadhar Card Number"
              required
              onChange={(e) => setAadhar(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Pan Card Number"
              required
              onChange={(e) => setPan(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Ration Card Number"
              required
              onChange={(e) => setRation(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Metamak Address"
              required
              onChange={(e) => setMetamaskAddress(e.target.value)}
            />
          </div>

          <div id="createProductFormFile">
            <label htmlFor="documents">
              Upload Documents (Aadhar, Pan Card)
            </label>
            <input
              type="file"
              id="documents"
              name="documents"
              accept="image/*"
              onChange={createProductImagesChange}
              multiple
            />
          </div>

          <div id="createProductFormImage">
            {imagesPreview.map((image, index) => (
              <img key={index} src={image} alt="Product Preview" />
            ))}
          </div>

          <Button
            id="createProductBtn"
            type="submit"
            disabled={loading ? true : false}
          >
            Create
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default RequestNft;
