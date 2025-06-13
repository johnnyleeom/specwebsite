import React from "react";
import './SponsorVideoCard.css'

function SponsorVideoCard(props) {
    return (
      <>
        <div id = "videocard-outterbox">
            <video controls poster={props.image}>
              <source src={props.video} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

        </div>
        <div>
          
        </div>
      </>
      
    );
  }
 export default SponsorVideoCard;  