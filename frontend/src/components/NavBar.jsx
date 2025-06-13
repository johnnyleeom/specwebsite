import React from "react";
import "./NavBar.css";

function NavBar() {
    return (
        <div id = "NavBar">
            <div id = 'specLogo'>
                <a id = "specHomeLogo" href="#home"><img id = "spec"src="/logo/specLogo.png" alt="SPEC Logo" /></a>
                <p>UBC SPEC</p>
            </div>
            <nav>
                <a id = "logo" href = "https://www.instagram.com/spec_ubc/" target="_blank" rel="noopener noreferrer"><img src="/logo/insta.png" alt="Instagram Logo" /></a>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#calendar">Calendar</a>
                <a href="#team">Team</a>
                <a href="#sponsors">Sponsors</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
}
export default NavBar;