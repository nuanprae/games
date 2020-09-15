import React from "react";
import "./Card.css";

const Card = ({ isClicked, onClick, content }) => {
  return (
    <div
      className={isClicked ? "card" + " " + "true" : "card"}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default Card;
