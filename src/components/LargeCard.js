import React from "react";
import "../styles/LargeCard.css";

export default function LargeCard(props) {
        // console.log(props.images)
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
                    {props.images && props.images.map((source, index)=>
                        { 
                            return <img src={source} key={index} height="50%" width="50%"/>
                        }                    
                    )}
            </div>        
        </div>
    );
}
