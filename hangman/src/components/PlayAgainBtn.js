import React from "react";

const PlayAgainBtn = ({ playAgain, gameEnd }) => {
  return (
    <div className="PlayAgainBtn">
      <button onClick={playAgain}>{gameEnd ? "Play again" : "New word"}</button>
    </div>
  );
};

export default PlayAgainBtn;
