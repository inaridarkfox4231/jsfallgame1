// マウスイベント

canvas.addEventListener("mousemove", move, false);

function move(e){
  var rect = e.target.getBoundingClientRect();
  pos_x = e.clientX - rect.left;
  if(pos_x < 0){ pos_x = 0; }
  if(pos_x > 560){ pos_x = 560; }
}
