import React, { useEffect } from "react";

const Guess = ({ randomWord, guessedLetters, gameEnd, setGameEnd }) => {
  const randomWordArray = randomWord.toLowerCase().split("");

  const toDisplay = gameEnd
    ? randomWord
    : randomWordArray.map((letter, i) => {
        if (guessedLetters.includes(letter)) {
          return i === 0 ? letter.toUpperCase() : letter;
        }
        return " _ ";
      });

  const isWordGuesed = toDisplay => {
    if (!toDisplay.includes(" _ ")) {
      setGameEnd(true);
    }
  };

  useEffect(() => {
    isWordGuesed(toDisplay);
  }, [guessedLetters, toDisplay]);

  return (
    <div className="Guess">
      <div>{toDisplay} </div>
    </div>
  );
};

export default Guess;
