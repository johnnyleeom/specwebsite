import React from "react";
import './SponsorLogo.css'

function SponsorLogo(props) {

    return (
        <div className = "sponsor-sponsorLogo">
            <a href={props.website}
            target="_blank"
            rel="noopener noreferrer"
            ><img src={props.logo} alt="" />
            </a>
        </div>
    );
}

export default SponsorLogo