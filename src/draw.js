// 描画処理

function draw(){
  ctx.drawImage(GameBoard, 0, 0);
  ctx.drawImage(Paddle, pos_x, pos_y);
  ctx.drawImage(Ball, 0, 0);
}
