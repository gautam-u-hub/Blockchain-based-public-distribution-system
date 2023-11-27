import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { getAllUsers, clearErrors, deleteUser } from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";
import LaunchIcon from "@material-ui/icons/Launch";

import axios from "axios";

const UserRequestNFT = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

   const [rows,setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/v1/nftRequests`);

        console.log(data.nft);
          let r = [];
        data.nft &&
            data.nft.forEach((item) => {
              console.log(item);
            r.push({
              id: item._id, // Assuming there is a unique identifier like _id
              Name: item.name,
              email: item.Email,
              Aadhar: item.Aadhar,
              Pan: item.Pan,
              MetamaskAddress:item.MetamaskAddress,
            });
            });
          setRows(r);
        
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Handle errors if needed
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const columns = [
    { field: "id", headerName: "ID", minWidth: 180, flex: 0.3 },
    {
      field: "Name",
      headerName: "Name",
      minWidth: 200,
      flex: 0.3,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 0.3,
    },
    {
      field: "Aadhar",
      headerName: "Aadhar No.",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "Pan",
      headerName: "Pan Card No.",
      minWidth: 150,
      flex: 0.5,
    },
    // {
    //   field: "Documents",
    //   headerName: "Documents",
    //   minWidth: 150,
    //   flex: 0.5,
    // },
    {
      field: "MetamaskAddress",
      flex: 1,
      headerName: "Metamask Address",
      minWidth: 150,
      sortable: false,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Documents",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/admin/requests/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];

  return (
    <Fragment>
      <MetaData title={`ALL USERS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">Users Requesting NFT:-</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default UserRequestNFT;