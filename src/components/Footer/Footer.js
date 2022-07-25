import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://github.com/GiladYehuda">
          <LinkedInIcon
            sx={{ pr: 4, fontSize: "50px", color: "#346751" }}
          ></LinkedInIcon>
        </a>
        <a href="https://www.facebook.com/secure.accounts13">
          <FacebookIcon
            sx={{ pr: 4, fontSize: "50px", color: "#346751" }}
          ></FacebookIcon>
        </a>
        <a href="https://www.linkedin.com/in/gilad-yehuda-a9824b214/">
          {" "}
          <GitHubIcon
            sx={{ pr: 4, fontSize: "50px", color: "#346751" }}
          ></GitHubIcon>
        </a>
      </div>
      <div className="images-footer">
        <img src="./pictures/picFooter1.png"></img>
        <img src="./pictures/picFooter2.png"></img>
      </div>
    </div>
  );
}

export default Footer;
