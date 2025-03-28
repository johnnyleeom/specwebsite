import React from "react";
import { useEffect, useState } from 'react';
import "./AboutImg.css"

function AboutImg() {

    const photoList = [
        '/specImg/specImgTwo.png',
        '/specImg/specImgThree.png'
      ];

      const [current, setCurrent] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % photoList.length);
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);


    return (
        <>
        <div id = "AboutImg" className = "fade-in">
            <img id = "specImg" src={photoList[current]} alt={`SPEC group photo ${current + 1}`} />
        </div>
        </>
    );
}

export default AboutImg