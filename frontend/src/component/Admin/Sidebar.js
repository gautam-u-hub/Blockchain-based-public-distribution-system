import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/"></Link>
      <br></br>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>

      <Link to="/admin/products">
        <PostAddIcon /> All Commodities
      </Link>

      <Link to="/admin/product">
        <AddIcon /> Create Commodity
      </Link>

      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/usersRequestNFT">
        <p>
          <PeopleIcon /> NFT Requests
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
