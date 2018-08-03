$(function(){
  "use strict";  // おまじない
  $.ajax({url: "./src/variable.js", dataType: "script", async: false});
  $.ajax({url: "./src/update.js", dataType: "script", async: false});
  $.ajax({url: "./src/draw.js", dataType: "script", async: false});
  $.ajax({url: "./src/keyevent.js", dataType: "script", async: false});
  $.ajax({url: "./src/mouseevent.js", dataType: "script", async: false});

  init();  // initialize
  function gameLoop(){
    update();  // update functions
    draw();    // draw functions
  };

  setInterval(gameLoop, 17);  // フレーム更新スピード（60fps）
});
