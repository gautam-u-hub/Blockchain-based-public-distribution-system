import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.jpg";

const options = {
  burgerColorHover: "#f99333",
  logo,
  logoWidth: "20vmax",
  navColor1: "#ffa756",
  logoHoverSize: "10px",
  logoHoverColor: "white",
  link1Text: "Home",
  link2Text: "Commodities",
  link3Text: "Your Profile",
  link4Text: "Request for NFT",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/account",
  link4Url: "/requestNft",
  link1Size: "1.3vmax",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "black",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
