import React, { useState } from "react";
import MemoryCard from "./MemoryCard";
import StatusBar from "./StatusBar";
import "./index.css";

const colors = [
  "pink",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "purple",
];

function generateCards() {
  const cards = [];
  for (let i = 0; i < colors.length; i++) {
    cards.push({
      key: i * 2,
      color: colors[i],
      isFlipped: false,
    });
    cards.push({
      key: i * 2 + 1,
      color: colors[i],
      isFlipped: false,
    });
  }
  return cards.sort(() => Math.random() - 0.5);
}

function Memory() {
  const [cards, setCards] = useState(generateCards());
  const status = "Time: 0s";

  function onCardClicked(clickedCard) {
    setCards((oldCards) => {
      return oldCards.map((card) => {
        if (card.key === clickedCard.key) {
          return { ...card, isFlipped: !card.isFlipped };
        }
        return card;
      });
    });
  }

  function onRestart() {
    setCards(generateCards());
  }

  return (
    <div>
      <div className="game-container">
        <StatusBar status={status} onRestart={onRestart}></StatusBar>
        <div className="memory-grid">
          {cards.map((card) => (
            <MemoryCard
              key={card.key}
              color={card.color}
              isFlipped={card.isFlipped}
              onClick={() => onCardClicked(card)}
            ></MemoryCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Memory;
