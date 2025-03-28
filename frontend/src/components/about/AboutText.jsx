import React from "react";
import "./AboutText.css";

function AboutText() {
  return (
    <div id="aboutText" className="fade-in">
        <div id = "headerContainer"><p id="aboutHeader"> What Do We Do?</p></div>
      <p id="aboutDescription">
        SPEC (Sports and Enhancement Club) 은 스포츠 활동을 중심으로, 건강한
        라이프스타일과 친목을 도모하는 동아리 입니다. <br />
        <br />
        SPEC 과 함께 하이킹, 스키, 스케이트 등 계절에 맞는 다양한 야외 운동을
        하며 활력을 얻고, MT, 술자리 이벤트 등 자유롭고 즐거운 분위기 속에서 새
        친구도 사귀어 보아요. <br />
        <br />
        그리고, 함께 웃으며 2배로 행복한 대학생활을 즐기고 싶다면 SPEC이
        제격입니다.
      </p>
    </div>
  );
}

export default AboutText;
