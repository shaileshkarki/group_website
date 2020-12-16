import React from 'react'
import "../styles/FormButton.css"
export default function FormButton({ title, width = 250, height, onSubmit, type, margin = 0 }) {
    return (
        <div className="button-wrapper" >
            <button type={type} onClick={onSubmit} style={{ color: "white", fontSize: "26px", width: "100%", height: height, backgroundColor: "#c53211", borderRadius: "20px", outline: "none" }} >{title}</button>
        </div>
    )
}
