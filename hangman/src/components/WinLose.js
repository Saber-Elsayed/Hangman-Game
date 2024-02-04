import React from "react";

const WinLose = ({ gameEnd, lives }) => {
  return gameEnd ? (
    lives > 0 ? (
      <div className="WinLose win">
        <h2> You win! </h2>
      </div>
    ) : (
      <div className="WinLose lose">
        <h2> You lose! </h2>
      </div>
    )
  ) : null;
};

export default WinLose;
