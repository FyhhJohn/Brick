
cc.Class({
    extends: cc.Component,

    properties: {
        scoreLab: cc.Label,
    },

    init () {
        this.scoreLab.string = 0;
    },

    updateScore: function(score){
        this.scoreLab.string = score;
    },

    start () {

    },

    // update (dt) {},
});
