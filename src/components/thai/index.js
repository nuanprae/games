import React from "react";
import "./index.css";
import StatusBar from "../StatusBar";
import Card from "./Card";

const generateCards = () => {
  const highClass = ["ก", "จ", "ด", "ต", "บ", "ป", "อ", "ฎ", "ฏ"];
  const graphemes = [];
  for (let i = 0; i < highClass.length; i++) {
    graphemes.push({ key: highClass[i] });
  }
  return graphemes.sort(() => Math.random() - 0.5);
};

const Thai = () => {
  const graphemes = generateCards();
  return (
    <div className="thai-container">
      <div className="phonemes-grid"></div>
      <div className="graphemes-grid">
        {graphemes.map((graph) => (
          <Card
            key={graph.key}
            content={graph.key}
            onClick={() => console.log(graph.key)}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Thai;
