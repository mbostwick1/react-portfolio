import React from "react";
import { render } from "react-dom";
import "./style.css";

const Footer = () => (
  <footer className="footer" id="main-footer">
    <p>Copyright © Melanie Bostwick 2021. All Rights Reserved</p>
  </footer>
);

render([<Footer key="2" />], document.getElementById("root"));

export default Footer;
