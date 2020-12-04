import React from "react";
import theImage from "../images/2020.jpg";
import "../styles/LargeCard.css";

export default function LargeCard(props) {
    return (
        <div className="card-wrapper">
            <img
                src={theImage}
                height="100%"
                width="100%"
                alt=""
                className="card-image"
            />
            <h3 className="card-title">{props.title}</h3>
            <p className="card-paragraph">{props.content}</p>
        </div>
    );
}
