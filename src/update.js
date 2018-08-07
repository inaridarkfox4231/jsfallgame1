// 更新処理

function init(){
    makeBall(0, 0, 0, 5);
    makeBall(50, 0, 0, 6);
    makeBall(100, 0, 0, 7);
    makeBall(150, 0, 0, 8);
    makeBall(200, 0, 0, 9);
}

function update(){
    updateAllBall();
    kill();
}

function makeBall(x, y, vx, vy){
    var ball = new Ball(x, y, vx, vy);
    Balls.push(ball);
}

function updateAllBall(){
    for(i = 0; i < Balls.length; i++){
        Balls[i].move();
    }
}

function kill(){
    for(i = Balls.length - 1; i >= 0; i--){
        if(Balls[i].x > 640 || Balls[i].y > 480){ Balls.splice(i, 1); }
        else if(Balls[i].x < 0 || Balls[i].y < 0){ Balls.splice(i, 1); }
    }
}
