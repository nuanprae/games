import React, { useState } from "react";
import "./index.css";
import StatusBar from "../StatusBar";
import Card from "./Card";

const generatePhonemes = () => {
  const audio = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const phonemes = audio.map((phoneme) => ({
    key: phoneme,
    isClicked: false,
  }));
  return phonemes.sort(() => Math.random() - 0.5);
};

const generateGraphemes = () => {
  const highClass = ["ก", "จ", "ด", "ต", "บ", "ป", "อ", "ฎ", "ฏ"];
  const graphemes = highClass.map((graph) => ({
    key: graph,
    isClicked: false,
  }));
  return graphemes.sort(() => Math.random() - 0.5);
};

// for loop version
// const generateCards = () => {
//   const highClass = ["ก", "จ", "ด", "ต", "บ", "ป", "อ", "ฎ", "ฏ"];
//   const graphemes = [];
//   for (let i = 0; i < highClass.length; i++) {
//     graphemes.push({ key: highClass[i] });
//   }
//   return graphemes.sort(() => Math.random() - 0.5);
// };

const Thai = () => {
  const [phonemes, setPhonemes] = useState(generatePhonemes());
  const [graphemes, setGraphemes] = useState(generateGraphemes());

  const onPhonemeClick = (phoneme) => {
    setPhonemes((oldPhonemes) =>
      oldPhonemes.map((oldPhoneme) => {
        if (oldPhoneme.key === phoneme.key)
          return { ...oldPhoneme, isClicked: true };
        return oldPhoneme;
      })
    );
  };

  const onGraphemeClick = (grapheme) => {
    setGraphemes((oldGraphemes) =>
      oldGraphemes.map((oldGrapheme) => {
        if (oldGrapheme.key === grapheme.key)
          return { ...oldGrapheme, isClicked: true };
        return oldGrapheme;
      })
    );
  };
  return (
    <div className="thai-container">
      <div className="phonemes-grid">
        {phonemes.map((phoneme) => (
          <Card
            key={phoneme.key}
            content={phoneme.key}
            isClicked={phoneme.isClicked}
            onClick={() => onPhonemeClick(phoneme)}
          ></Card>
        ))}
      </div>
      <div className="graphemes-grid">
        {graphemes.map((grapheme) => (
          <Card
            key={grapheme.key}
            content={grapheme.key}
            isClicked={grapheme.isClicked}
            onClick={() => onGraphemeClick(grapheme)}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Thai;
