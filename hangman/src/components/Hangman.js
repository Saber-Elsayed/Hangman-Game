import React, { useEffect, useRef } from "react";
import { clearCanvas, drawBase, drawHangman } from "../util/drawHangman";
import { defaultLives } from "../data/defaultGameData";

const Hangman = ({ lives }) => {
  const canvas = useRef(null);

  useEffect(() => {
    const c = canvas.current;
    const ctx = c.getContext("2d");

    clearCanvas(ctx);
    drawBase(ctx);

    const toDraw = defaultLives - lives;
    for (let i = 0; i < toDraw; i++) {
      drawHangman[i](ctx);
    }
  }, [lives]);

  return <canvas ref={canvas} className="Hangman" width="400" height="400" />;
};

export default Hangman;
