import React, { useState, forwardRef, useImperativeHandle } from "react";
import { alphabet } from "../data/alphabet";

const defaultLetters = alphabet.map(letter => {
  return { character: letter, clicked: false };
});

const Buttons = forwardRef(({ gameEnd, checkIfButtonGuessed }, ref) => {
  const [letters, setLetters] = useState(defaultLetters);

  const disableButton = e => {
    const letterClicked = e.target.id;
    const newLetters = letters.map(letter => {
      if (letter.character === letterClicked) {
        return {
          ...letter,
          clicked: true
        };
      }
      return letter;
    });
    setLetters(newLetters);
  };

  const handeOnClick = e => {
    disableButton(e);
    checkIfButtonGuessed(e.target.id);
  };

  const enableButtons = () => {
    setLetters(defaultLetters);
  };

  useImperativeHandle(ref, () => {
    return { enableButtons };
  });

  return (
    <div className="Letters">
      {letters.map(letter => (
        <button
          key={letter.character}
          id={letter.character}
          onClick={handeOnClick}
          disabled={gameEnd || letter.clicked}
        >
          {letter.character}
        </button>
      ))}
    </div>
  );
});

export default Buttons;
