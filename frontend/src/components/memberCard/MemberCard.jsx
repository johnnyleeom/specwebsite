import React from "react";
import "./MemberCard.css"

function MemberCard(props) {

    return (
        <div className = "outter-container">
            <img src = {props.img} alt="member profile pic"/>
            <p id = "name">{props.name}</p>
            <p id = "role">{props.role}</p>
            {/* <p>{props.message}</p> */}
        </div>
    );
}

export default MemberCard