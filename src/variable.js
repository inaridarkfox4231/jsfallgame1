// 変数など

var i, j, k, tmp;

var canvas = $('canvas')[0];       // $('canvas')[0] でやるとDOM要素：getContext等が使える
var myCanvas = $('#myCanvas');     // $('#myCanvas')でやるとタグ要素：cssをいじったりできる
var ctx = canvas.getContext("2d"); // context要素

var GameBoard = new Image;
GameBoard.src = "./images/gameboard.png";

var Paddle = new Image;
Paddle.src = "./images/paddle.png";

var Ball = new Image;
Ball.src = "./images/ball.png";

var pos_x = 0;    // 0～560
var pos_y = 470;  // 470で固定
