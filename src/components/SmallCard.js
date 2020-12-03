import React from "react";
import theImage from "../../public/logo512.png";
import "../styles/SmallCard.css";

export default function SmallCard(props) {
    return (
        <div className="card-wrapper">
            <img src={theImage} alt="" className="card-image" />
            <h3 className="card-title">{props.title}</h3>
            <p className="card-paragraph">{props.content}</p>
        </div>
    );
}
