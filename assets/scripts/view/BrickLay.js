
cc.Class({
    extends: cc.Component,

    properties: {
        padding: 0,
        spacing: 0,
        cols: 0,
        brickPrefab: cc.Prefab,
        brickNumber: 0,
    },

    init(brickNumber){
        this.node.removeAllChildren();
        this.brickNumber = brickNumber;
        for ( let i=0; i<this.brickNumber; i++ ){
            let brickNode = cc.instantiate(this.brickPrefab);
            brickNode.parent = this.node;
            brickNode.x = ( 1+i % (this.cols) ) * (brickNode.width+this.padding) - (brickNode.width+this.padding)/2 ;
            brickNode.y = -this.padding-Math.floor(i/this.cols)*(brickNode.height+this.spacing)-brickNode.height / 2;
        }
    },
});
