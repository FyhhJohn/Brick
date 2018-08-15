

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.parent.on("touchmove",(event)=>{
            let touchPoint = this.node.parent.convertToNodeSpace(event.getLocation());
            // this.node.x = touchPoint.x;
            let delta = event.getDelta();
            this.node.x += delta.x;
        });
    },

    init () {
        this.node.x = 300
    },

    // update (dt) {},
});
