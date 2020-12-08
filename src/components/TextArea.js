import React from 'react'

import "../styles/TextArea.css";

export default function TextArea({ width = 199, height, error, errorTextColor = "red", margin = 10, placeholder, fontSize = 15, onChange, color = "black" }) {
    return (
        <div style={{ width: "100%" }}>
            <textarea className="text-area" onChange={onChange} placeholder={placeholder} type="text" style={{ height: height, fontFamily: "sans- serif", fontSize: fontSize, color: color }} />
            {error && <div style={{ color: errorTextColor }}>{error}</div>}
        </div>
    )
}
