import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import StatusBar from "../StatusBar";
import ResultModal from "../ResultModal";
import "./index.css";
import * as utils from "../../utils";

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

function flipCard(cards, cardToFlip) {
  return cards.map((card) => {
    if (card.key === cardToFlip.key) {
      return { ...card, isFlipped: !card.isFlipped };
    }
    return card;
  });
}

function Memory() {
  /*
  utils
    .fetchLeaderboard("memory")
    .then((leaderboard) => console.log(leaderboard));
  */

  // const startTime = Date.now();
  // const interval = setInterval(() => console.log(Date.now() - startTime, 1000)); clearInterval(interval);

  const [game, setGame] = useState({
    cards: generateCards(),
    firstCard: undefined,
    secondCard: undefined,
  });

  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [win, setWin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (startTime !== 0 && !win) {
      const intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [startTime, win]);

  useEffect(() => {
    if (win) {
      setShowModal(true);
    }
  }, [win]);

  function onCardClicked(clickedCard) {
    // If the card is already flipped there is nothing we need to do (write an if-statement with a return; inside)
    if (clickedCard.isFlipped) {
      return;
    }

    setGame(({ cards, firstCard, secondCard }) => {
      // The { cards, firstCard, secondCard } above is the decomposed game object.
      // These three variables represent the previous state, before a card was clicked.
      // We should return the new state, depending on the previous one and on the card that was clicked.
      // There are 4 different cases.
      // 1. If both firstCard and secondCard from the previous state are undefined =>
      // we should flip the clicked card and set it as the firstCard

      if (!firstCard) {
        return {
          cards: flipCard(cards, clickedCard),
          firstCard: clickedCard,
        };
      }
      // 2. Else, if firstCard is defined, but secondCard isn't =>
      // we should flip the clicked card, keep the firstCard as is, but set the secondCard
      else if (!secondCard) {
        let newCards = flipCard(cards, clickedCard);
        let isAllCardsFlipped = newCards.every((card) => card.isFlipped);
        if (isAllCardsFlipped) {
          setWin(true);
          console.log("You won!");
        }
        return {
          cards: newCards,
          firstCard: firstCard,
          secondCard: clickedCard,
        };
      }
      // 3. Else, if the previous two clicked cards have the same color =>
      // we should flip the clicked card, set the new firstCard and remove secondCard from the state
      else if (firstCard.color === secondCard.color) {
        return {
          cards: flipCard(cards, clickedCard),
          firstCard: clickedCard,
        };
      }
      // 4. Else, if the previous two clicked cards have different colors =>
      // we should flip the clicked card and flip back firstCard and secondCard,
      // we should also set the new firstCard and remove secondCard from the state
      else {
        let newCards = flipCard(cards, firstCard);
        newCards = flipCard(newCards, secondCard);
        newCards = flipCard(newCards, clickedCard);
        {
          return {
            cards: newCards,
            firstCard: clickedCard,
          };
        }
      }
    });
    setStartTime((oldStartTime) =>
      oldStartTime === 0 ? Date.now() : oldStartTime
    );
  }

  function onRestart() {
    setGame({
      cards: generateCards(),
      firstCard: undefined,
      secondCard: undefined,
    });
    setStartTime(0);
    setElapsedTime(0);
    setWin(false);
  }

  return (
    <div>
      <div className="game-container">
        <StatusBar
          status={"Time: " + elapsedTime}
          onRestart={onRestart}
        ></StatusBar>
        <div className="memory-grid">
          {game.cards.map((card) => (
            <MemoryCard
              key={card.key}
              color={card.color}
              isFlipped={card.isFlipped}
              onClick={() => onCardClicked(card)}
            ></MemoryCard>
          ))}
        </div>
      </div>
      <ResultModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        header={"Congrats, you won!"}
        body={"Your time was " + elapsedTime + " ms."}
      ></ResultModal>
    </div>
  );
}

export default Memory;
