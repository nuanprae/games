import React from "react";
import "./Card.css";

const Card = ({ content, onClick }) => (
  <div className="card" onClick={onClick}>
    {content}
  </div>
);

export default Card;
