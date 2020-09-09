import React from "react";
import "./index.css";
import StatusBar from "../StatusBar";
import Card from "./Card";

const Thai = () => {
  const graphemes = ["ก", "จ", "ด", "ต", "บ", "ป", "อ", "ฎ", "ฏ"];
  return (
    <div className="thai-container">
      <div className="phonemes-grid"></div>
      <div className="graphemes-grid">
        {graphemes.map((graph) => (
          <Card
            key={graph}
            content={graph}
            onClick={() => console.log(graph)}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Thai;
