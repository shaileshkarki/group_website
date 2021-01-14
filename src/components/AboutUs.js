import React from "react";
import theImage from "../images/2020.jpg";
import "../styles/AboutUs.css";
import {AboutUsWrapper} from "../styles";
export default function AboutUs(props) {
    return (
        <AboutUsWrapper>
            <div className="card-aboutus-wrapper">
                <img className="card-aboutus-image" src={theImage} alt="" />
                <h3 className="card-aboutus-personName">{props.personName}</h3>
                <h3 className="card-aboutus-jobTitle">{props.jobTitle}</h3>

            </div>
            <div className="div-wrapper">
                <p className="card-aboutus-content">{props.content}</p>
            </div>
        </AboutUsWrapper>
    );
}
