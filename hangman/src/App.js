import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

import Letters from "./components/Letters";
import Guess from "./components/Guess";
import WinLose from "./components/WinLose";
import { cities, defaultLives } from "./data/defaultGameData";
import Hangman from "./components/Hangman";
import PlayAgainBtn from "./components/PlayAgainBtn";

const selectRandomWord = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

export default function App() {
  const [randomWord, setRandomWord] = useState(selectRandomWord());
  const [lives, setLives] = useState(defaultLives);
  const [gameEnd, setGameEnd] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const ref = useRef(null);

  const updateRandomWord = () => {
    const newRandomWord = selectRandomWord();
    if (newRandomWord === randomWord) return updateRandomWord();
    setRandomWord(newRandomWord);
  };

  const playAgain = () => {
    setGameEnd(false);
    setGuessedLetters([]);
    setLives(defaultLives);

    updateRandomWord();
    ref.current.enableButtons();
  };

  const checkIfButtonGuessed = letter => {
    if (randomWord.toLowerCase().indexOf(letter) !== -1) {
      const newGuessedLetters = [...guessedLetters, letter];
      setGuessedLetters(newGuessedLetters);
    } else {
      setLives(lives - 1);
    }
  };

  useEffect(() => {
    if (lives === 0) {
      setGameEnd(true);
    }
  }, [lives]);

  return (
    <div className="App">
      <h1> Guess the capital </h1>
      <Guess
        gameEnd={gameEnd}
        setGameEnd={setGameEnd}
        guessedLetters={guessedLetters}
        randomWord={randomWord}
      />
      <Letters
        checkIfButtonGuessed={checkIfButtonGuessed}
        ref={ref}
        gameEnd={gameEnd}
      />
      <div className="container">
        <Hangman lives={lives} />
        <WinLose gameEnd={gameEnd} lives={lives} />
      </div>
      <PlayAgainBtn playAgain={playAgain} gameEnd={gameEnd} />
    </div>
  );
}
