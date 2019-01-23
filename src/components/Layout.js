import React from 'react';
import Navbar from './layout/Navbar'


export default (props) => {
    return <div>
        <Navbar />
        {props.children}
      </div>;
};
