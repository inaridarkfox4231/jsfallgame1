// 描画処理

function draw(){
  ctx.drawImage(GameBoard_img, 0, 0);
  ctx.drawImage(Paddle_img, pos_x, pos_y);
  drawAllBall();
}

function drawAllBall(){
  for(i = 0; i < Balls.length; i++){
     Balls[i].draw();
  }
}
