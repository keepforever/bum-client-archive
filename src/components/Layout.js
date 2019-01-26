import React from "react";
import Navbar from "./layout/Navbar";

export default props => {
  return (
    <div style={{backgroundColor: 'grey', minHeight: '100vh'}}>
      <Navbar />
        {props.children}
    </div>
  );
};
