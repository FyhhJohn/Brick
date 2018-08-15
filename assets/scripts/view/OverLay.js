

cc.Class({
    extends: cc.Component,

    properties: {
        resultLay: cc.Label,
        scoreLab: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:
    init(gameCtl){
        this.gameCtl = gameCtl;
        this.node.active = false;
    },

    showResult: function(score,isWin){
        this.node.active = true;
        if (isWin){
            this.resultLay.string = "棒呆！你过关了！";
        }else{
            this.resultLay.string = "您输了！继续加油哦！"
        }
        this.scoreLab.string = "得分："+score;
    },

    restartClicked () {
        this.gameCtl.startGame();
    },

    // update (dt) {},
});
