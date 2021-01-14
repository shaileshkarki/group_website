import React from "react";
import "../styles/SmallCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {SmallCardWrapper} from "../styles";
export default function SmallCard(props) {
    return (
        <div className="card-wrapper rotate-in-center">
        {/* <SmallCardWrapper> */}
            <div className="font-awesome">
                <FontAwesomeIcon
                    icon={props.iconName}
                    size={"5x"}
                    color={props.color}
                />
            </div>

            <h3 className="card-title">{props.title}</h3>
            <p className="card-paragraph">{props.content}</p>
        {/* </SmallCardWrapper> */}
        </div>
    );
}
