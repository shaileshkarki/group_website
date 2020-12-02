import React from 'react';
import '../styles/InformationPara.css'

export default function InformationPara(props) {
    return (
        <div className="wrapper">
            <p className="information_para_title">{props.title}</p>
            <p className="information_para_body">{props.body}</p>
        </div>
    )
}
