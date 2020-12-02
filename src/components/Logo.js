import React from 'react'
import logo from '../images/group-avatar.png'
import '../styles/Logo.css'

export default function Logo() {
    return (
        <div className="wrapper">
            <img src={logo} alt="" className="round-image"/>
        </div>
    )
}

