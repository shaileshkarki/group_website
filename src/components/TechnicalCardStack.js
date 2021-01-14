import React from "react";
import "../styles/TechnicalCardStack.css";
import {SmallCardWrapper} from "../styles";
export default function TechnicalCardStack(props) {
    console.log(props);
    return (
            <SmallCardWrapper>
        <div className="rotate-in-center">
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
        </SmallCardWrapper>
    );
}
