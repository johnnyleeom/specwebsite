import React from "react";
import './SponsorVideoCard.css'

function SponsorVideoCard(props) {

    return (
        <div className = "vidCard-outter-container">
        <iframe 
          src={props.video}
          title="Sponsor Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe> 
            <div className="vidDescription">
                <img src={props.sponsor} alt="" />
                <p>{props.eventName}</p>
            </div>
            {/* <p>{props.message}</p> */}
        </div>
    );
}

export default SponsorVideoCard