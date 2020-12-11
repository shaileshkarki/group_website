import React from "react";
import "../styles/TechnicalCardStack.css";

export default function TechnicalCardStack(props) {
    console.log(props);
    return (
        <div className="card-wrapper rotate-in-center">
            <img
                className="card-image"
                src={props.src}
                // height="30%"
                // width="30%"
                alt=""
            />
            <h3 className="card-title">{props.title}</h3>
            <p className="card-content">{props.content}</p>

        </div>
    );
}
