import React from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Typography,
  Tab,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import SelectSmall from "./SelectSmall";
import CustomizedBadges from "./ShoppingBadge";
import { styled } from "@mui/system";
import "./Navbar.css";
import { useContext } from "react";
import Contact from "./Contact";
import ContextOfPro from "../../contexts/ContextOfPro";

const CustomizedLink = styled(Link)({
  textDecoration: "none",
  color: "#fff",
});

const CustomizedTab = styled(Tab)({
  color: "#fff",
  fontWeight: "500",
  fontSize: "1.2rem",
  fontFamily: "Roboto Slab, serif",
  margin: "1rem 0",
});

const CustomizedButton = styled(Button)({
  color: "#fff",
  fontWeight: "500",
  fontSize: "1.2rem",
  fontFamily: "Roboto Slab, serif",
  margin: "1rem 0",
});

function Navbar(props) {
  const { setShowCart } = useContext(ContextOfPro);
  function removeFilter() {
    props.setIsFilter(true);
  }
  return (
    <AppBar sx={{ background: "#346751" }}>
      <Toolbar>
        <CustomizedLink to="/">
          <CustomizedButton label="HOME" onClick={removeFilter}>
            HOME
          </CustomizedButton>
        </CustomizedLink>
        <CustomizedLink to="/products">
          <CustomizedButton>PRODUCTS</CustomizedButton>
        </CustomizedLink>

        {props.isFilter == false ? (
          <SelectSmall productsFilter={props.productsFilter}></SelectSmall>
        ) : null}
        <CustomizedButton onClick={() => setShowCart(true)}>
          CONTACT US
        </CustomizedButton>
        <Contact></Contact>
        <CustomizedLink
          sx={{ marginLeft: "auto" }}
          to="/cart"
          onClick={removeFilter}
        >
          <CustomizedButton>MY CART</CustomizedButton>
          <CustomizedBadges></CustomizedBadges>
        </CustomizedLink>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
