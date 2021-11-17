class MessageBox{

    constructor(ctx,cvsHeight,cvsWidth,messages,speed,font){
        this._ctx = ctx;
        this._messages = messages;
        this._speed = speed;
        this._font = font;
        this._cvsHeight = cvsHeight;
        this._cvsWidth = cvsWidth;
        this.checkArguments();
    }

    checkArguments(){
        if(this.setSpeed(this._speed) == -1){
            console.log("speed is high, medium, low, or max. this instance could not be work.");
        }
    }

    setSpeed(newSpeed){this._speed = newSpeed;}
    setFont(newFont){this._font = newFont;}

    openWindow(){
        
    }

    disp(){
        
    }

    //setIntervalを使って文字送りを実装すれば非同期処理に引っかからなそう？
};

class Button_Branch{
    constructor(cvs,branchNumber,text){
        this._cvs = cvs;
        this._branchNumber = branchNumber;
        this._text = text;
        this._height = 30;
        this._width = 80; 
        this._dy = 30 +((this._height*1.2)*this._branchNumber);;
        this._dx = 40;
        this._selected = 0;
    }

    isPushed(x,y){
        if(x >= this._dx && x <= (this._dx + this._width)){
            if(y >= this._dy && y <= (this._dy + this._height)){
                return true;
            }
        }
        return false;
    }

    draw(){
        let ctx = this._cvs.context;

        //fontSizeによってボタンのx_offsetを合わせられるようにする。
        ctx.font = `${this._height*0.6}px serif`;
        ctx.fillStyle = '#4169e1';
        ctx.globalAlpha = 1.0;
        ctx.fillRect(this._dx,this._dy,this._width,this._height);
        ctx.fillStyle = "#ffffff";
        ctx.fillText(this._text,this._dx+(this._width/10), this._dy+((this._height*1.2)/2),this._width);

    }

}

class Branch{
    constructor(cvs){
        this._cvs = cvs;
        this._NumOfBranch = 0;
        this._Branches = [];
    }

    addBranch(text){
        this._Branches[this._NumOfBranch] = new Button_Branch(this._cvs,this._NumOfBranch,text);
        this._NumOfBranch++;
    }

    detectSelect(x,y){
        for(let i=0; i<this._NumOfBranch; i++){
            if(this._Branches[i].isPushed(x,y)){return i;}
        }
    }

    disp(){
        for(let i=0; i<this._NumOfBranch; i++){
            this._Branches[i].draw();
        }
    }
}

class Canvas_Novel extends Canvas_Basic{
    constructor(canvasID, height, width){
        super(canvasID,height,width);
        this.msgBox = null;
    }

    message(dispStr,spd,font){
        msgBox = new MessageBox(this.context,this.getHeight,this.getWidth,dispStr,spd,font);

        this.msgBox.openWindow(this.context).then(() => {
            disp(this.context);
        });
    }

    requestNewFrame(){

    }


}