import React from "react";
import "./MemoryCard.css";

function MemoryCard({ isFlipped, color, onClick }) {
  let className = "memory-card";
  if (isFlipped) {
    className = className + " " + color;
  }
  return <div className={className} onClick={onClick}></div>;
}

export default MemoryCard;
