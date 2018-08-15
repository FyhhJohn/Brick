
cc.Class({
    extends: cc.Component,

    properties: {
        score: 0,
        brickNum: 0,
    },

    init(){
        this.score = 0;
        this.brickNum = 50;
    },

    addScore: function(score){
        this.score += score;
    },

    minuBrickNum: function(brickNum){
        this.brickNum -= brickNum;
    },
});
