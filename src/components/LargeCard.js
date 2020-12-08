import React from "react";
import "../styles/LargeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LargeCard(props) {
    return (
        <div className="ls-card-wrapper ">
            <a href={props.link}><img
                src={props.image}
                height="100%"
                width="100%"
                alt=""
                className="ls-card-image"
            /></a>
            <h3 className="ls-card-title">{props.title}</h3>
            <p className="ls-card-paragraph">{props.content}</p>
       
            <div className="ls-technology">
            <FontAwesomeIcon
                    icon="dog"
                    size={"2x"}
                    color="red"
            />
            <FontAwesomeIcon
                    icon="dog"
                    size={"2x"}
                    color="red"
            />
            <FontAwesomeIcon
                    icon="dog"
                    size={"2x"}
                    color="red"
            />
            <FontAwesomeIcon
                    icon="dog"
                    size={"2x"}
                    color="red"
            />
            <FontAwesomeIcon
                    icon="dog"
                    size={"2x"}
                    color="red"
            />
            <FontAwesomeIcon
                    icon="dog"
                    size={"2x"}
                    color="red"
            />            
            </div>        
        </div>
    );
}
