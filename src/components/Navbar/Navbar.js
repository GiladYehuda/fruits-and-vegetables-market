import React from "react";
import { AppBar, Toolbar, Tabs, Typography, Tab, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SelectSmall from "./SelectSmall";
import TemporaryDrawer from "./TemporaryDrawer";
import CustomizedBadges from "./ShoppingBadge";
import "./Navbar.css";

function Navbar(props) {
  function removeFilter() {
    props.setIsFilter(true);
  }
  return (
    <AppBar sx={{ background: "#346751" }}>
      <Toolbar>
        <Tabs textColor="inherit">
          <Link to="/">
            <Tab label="HOME" onClick={removeFilter}></Tab>
          </Link>
          <Link to="/products">
            <Tab label="PRODUCTS"></Tab>
          </Link>
        </Tabs>
        <TemporaryDrawer></TemporaryDrawer>
        <Link to="/cart">
          <CustomizedBadges />
        </Link>
        {props.isFilter == false ? (
          <SelectSmall productsFilter={props.productsFilter}></SelectSmall>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
