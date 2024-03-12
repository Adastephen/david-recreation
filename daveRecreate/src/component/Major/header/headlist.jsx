import React from "react";

function Headlist ({ title, icon }) {
    return (
        <>
        <div className="flex flex-col items-center">
            <img src={icon} alt= {title} />
            <p>{title}</p>
        </div>
        </>
    )
}

export default Headlist;

