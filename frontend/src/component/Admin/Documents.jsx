import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./Documents.css";

import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";

import axios from "axios";

const Documents = ({ match }) => {
  const [images, setImages] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get(`/api/v1/nftRequests`);
      const foundItem = data.nft.find((item) => item._id === match.params.id);
      setImages(foundItem.images);
    } catch (error) {}
  }, []);

  return (
    <Fragment>
      {false ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${""} -- ECOMMERCE`} />
          <div className="documents-header">
            Documents Uploaded By The user:-
          </div>
          <div className="ImageDetails">
            <div className="CarouselContainer">
              <Carousel autoPlay={false}>
                {images &&
                  images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                      />
                      
                  ))}
              </Carousel>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Documents;