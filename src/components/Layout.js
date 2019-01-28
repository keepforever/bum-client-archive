import React from "react";
import Navbar from "./layout/Navbar";
import "./layout/myGrid/styles.css";

export default props => {
  return (
    <div id="content">
      <nav>
        <Navbar />
      </nav>
      <main>{props.children}</main>
      <footer>footer</footer>
    </div>
  );
};
