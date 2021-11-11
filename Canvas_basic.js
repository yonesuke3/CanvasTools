class Canvas_basic{
    /*
    ---------------------------
    Canvas class の基礎になっているクラスです。
    このクラス自体にはあまり意味はありませんが、
    Canvas_basicの継承クラスを使う際は必ずscriptタグでインポート
    してください。

    @param canvasId 生成するcanvasのidを引数として受け取っています。(ex) xxx = new Canvas_basic("#canvas1",100,200);
    @param canvasElement 基本的にcanvas自体のwidthやheightを変更するのに使用しています。
    @param ctx canvasに何か描写するときはこれを使ってください。(ex) this.ctx.fillRect(xx,xx,xx,xx);
    ---------------------------
    */ 

    constructor(canvasId, height, width){
        this.canvasId = canvasId;
        this.height = height;
        this.width = width;
        this.CanvasElement = document.querySelector(this.canvasId);
        this.util = document.body.querySelector(this.canvasId);
        this.ctx = this.util.getContext('2d');
        this.CanvasElement.style.width = this.width + 'px';
        this.CanvasElement.style.height = this.height + 'px';
    }

    get context(){return this.ctx;}
    get Element(){return this.CanvasElement;}
    get Height(){return this.height;}
    get width(){return this.width;}

    initialize(){
        // May be overloaded.
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(0,0,this.width,this.height);
    }


}