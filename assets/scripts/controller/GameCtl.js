
var brickLay = require("BrickLay");
var ball = require("Ball");
var gameModel = require("GameModel");
const gameView = require("GameView");
var overPan = require("OverLay");
var paddle = require("Paddle");

cc.Class({
    extends: cc.Component,

    properties: {
        ball: ball,
        brickLay: brickLay,
        gameView: gameView,
        overPan: overPan,
        paddle: paddle,
    },

    onBallContactBrick(ballNode, brickNode){
        brickNode.parent = null;
        this.gameModel.addScore(1);
        this.gameModel.minuBrickNum(1);
        this.gameView.updateScore(this.gameModel.score);
        cc.log("碰到砖块");

        if ( this.gameModel.brickNum <= 0 ){
            cc.log("恭喜过关");
            this.youWin();
        }
    },
    
    youWin(){
        this.physicsManager.enabled = false;
        this.overPan.showResult(this.gameModel.score,true);
    },

    youLost(){
        this.physicsManager.enabled = false;
        this.overPan.showResult(this.gameModel.score,false);
    },

    onBallContactGround(ballNode, brickNode){
        cc.log("碰到地面,您输了");
        this.youLost();
    },

    onBallContactPaddle(ballNode, brickNode){
    },

    onBallContactWall(ballNode, brickNode){
    },

    onLoad(){
        this.physicsManager = cc.director.getPhysicsManager();
        this.gameModel = new gameModel();
        this.startGame();
    },

    startGame(){
        this.init();
        this.gameModel.init();
        this.paddle.init();
        this.overPan.init(this);
        this.gameView.init();
    },

    init(){
        this.physicsManager.enabled = true;
        this.ball.init(this);
        this.brickLay.init(50);
    },

});
