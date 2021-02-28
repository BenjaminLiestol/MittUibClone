import "./navbar.css";
import Logo from "./Images/uib_logo.png";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12,
  },
  logo: {
    marginRight: 16,
    marginLeft: -12,
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div class="nav">
      <AppBar style={{ background: "#e60e10" }} position="static">
        <Toolbar>
          <img
            a
            href="/"
            classname={classes.logo}
            alt="logo"
            src={Logo}
            className="logo"
          />
          <section className={classes.rightToolbar}>
            <Link to="/">
              <IconButton>
                <HomeIcon style={{ fontSize: 40 }} a href="/" />
              </IconButton>
            </Link>
            <IconButton>
              <MenuIcon style={{ fontSize: 40 }} />
            </IconButton>
          </section>
        </Toolbar>
      </AppBar>
    </div>
  );
}
