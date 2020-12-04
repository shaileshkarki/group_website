import React from 'react';
import '../styles/InformationPara.css'

export default function InformationPara(props) {
    return (
        <div className="wrapper">
            <p className="information_para_title"style={{fontSize:props.titleFontSize}}>{props.title}</p>
            <p className="information_para_body" style={{fontSize:props.bodyFontSize}} >{props.body}</p>
        </div>
    )
}
