import React from 'react';
import './Module.css';

const Module = (props) => {
    const { cr } = props;
    return (
        <div className="col m-1 bg-color ">
            <p className="mx-3 my-1 text-dark fw-semibold"><i className="fas fa-check-circle text-success"></i> {cr}</p>
        </div >
    );
};

export default Module;