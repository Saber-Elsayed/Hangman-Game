export const clearCanvas = ctx => {
  ctx.clearRect(0, 0, 400, 400);
};

export const drawBase = ctx => {
  ctx.beginPath();
  ctx.moveTo(20, 380);
  ctx.lineTo(380, 380);
  ctx.moveTo(40, 380);
  ctx.lineTo(40, 20);
  ctx.lineTo(200, 20);
  ctx.lineTo(200, 80);
  ctx.stroke();
};

const drawHead = ctx => {
  ctx.beginPath();
  ctx.arc(200, 100, 20, 0, 2 * Math.PI);
  ctx.stroke();
};

const drawBody = ctx => {
  ctx.beginPath();
  ctx.moveTo(200, 120);
  ctx.lineTo(200, 220);
  ctx.stroke();
};

const drawLeftHand = ctx => {
  ctx.beginPath();
  ctx.moveTo(200, 140);
  ctx.lineTo(160, 180);
  ctx.stroke();
};

const drawRightHand = ctx => {
  ctx.beginPath();
  ctx.moveTo(200, 140);
  ctx.lineTo(240, 180);
  ctx.stroke();
};

const drawLeftFoot = ctx => {
  ctx.beginPath();
  ctx.moveTo(200, 220);
  ctx.lineTo(160, 300);
  ctx.stroke();
};

const drawRightFoot = ctx => {
  ctx.beginPath();
  ctx.moveTo(200, 220);
  ctx.lineTo(240, 300);
  ctx.stroke();
};

export const drawHangman = [
  drawHead,
  drawBody,
  drawLeftHand,
  drawRightHand,
  drawLeftFoot,
  drawRightFoot
];
