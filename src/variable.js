// 変数など

var i, j, k, tmp;

var canvas = $('canvas')[0];       // $('canvas')[0] でやるとDOM要素：getContext等が使える
var myCanvas = $('#myCanvas');     // $('#myCanvas')でやるとタグ要素：cssをいじったりできる
var ctx = canvas.getContext("2d"); // context要素

var GameBoard_img = new Image;
GameBoard_img.src = "./images/gameboard.png";

var Paddle_img = new Image;
Paddle_img.src = "./images/paddle.png";

var Ball_img = new Image;
Ball_img.src = "./images/ball.png";

var pos_x = 0;    // 0～560
var pos_y = 470;  // 470で固定

var Balls = [];

class Ball{
    constructor(x, y, vx, vy){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }
    draw(){
        ctx.drawImage(Ball_img, this.x, this.y);
    }
    move(){
        this.x += this.vx;
        this.y += this.vy;
    }
}
