import React from 'react'
import "../styles/LinkButton.css"

export default function Button(props) {
    return (
        <div className="wrapper">
            <a href={props.target} className="link_button_anchor">{props.link}</a>
        </div>
    )
}
