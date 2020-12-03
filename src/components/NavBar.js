import React, { useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import '../styles/NavBar.css'

export default function NavBar() {
    // Get the path so we can set background colour of the current page we are on
    const route = useHistory();
    const [currentPage, setCurrentPage] = useState(route.location.pathname)

    return (
        <div className="nav-bar">
            <NavLink onClick={() => setCurrentPage("/")} className={currentPage === "/" ? "current-page" : ""} exact to="/">Home</NavLink>
            <NavLink onClick={() => setCurrentPage("/TechnicalStack")} className={currentPage === "/TechnicalStack" ? "current-page" : ""} to="/TechnicalStack">Tech-Stack</NavLink>
            <NavLink onClick={() => setCurrentPage("/Portfolio")} className={currentPage === "/Portfolio" ? "current-page" : ""} to="/Portfolio">Portfolio</NavLink>
            <NavLink onClick={() => setCurrentPage("/ContactUs")} className={currentPage === "/ContactUs" ? "current-page" : ""} to="/ContactUs">Contact</NavLink>
        </div>
    )
}