function Pixel(r, g, b, a, x, y){
    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a;
    this.posX = x;
    this.posY = y;
    this.getColor = function() {
        return [this.red, this.green, this.blue];
    };
    this.getPos = function() {
        return [this.posX, this.posY];
    };
    this.setColor = function(newRed,newGreen,newBlue) {
        this.red=newRed;
        this.green=newGreen;
        this.blue=newBlue;
    };
    this.setPos = function(newPosX,newPosY){
        this.posX=newPosX;
        this.posY=newPosY;
    };
    this.toString=function () {
        return "Red: "+ this.red + " Green: " + this.green + " Blue: " + this.blue + " Alpha: " + this.alpha;
    }
};