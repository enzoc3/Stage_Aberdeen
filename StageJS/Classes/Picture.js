function getImage(path) {
    var image=new Image();
    image.src=path;
    return image;
}

function getImageData(image) {
    var canvas = document.createElement('canvas');
    canvas.setAttribute("width",image.width);
    canvas.setAttribute("height",image.height);
    document.body.appendChild(canvas);
    canvas.style.display="none";
    var context2d=canvas.getContext('2d');
    context2d.drawImage(image,0,0);
    return context2d.getImageData(0,0,image.width,image.height);
}
/*var image=new Image();
image.src="resources/flower1.png";*/

function getPixelData(x, y, width) {
    var colorIndice = y * (width * 4) + x * 4;
    return [colorIndice, colorIndice+1, colorIndice+2, colorIndice+3];
}

function createCanvas(image){
    var canvas=document.createElement("canvas");
    canvas.setAttribute("width",image.width);
    canvas.setAttribute("height",image.height);
    document.body.appendChild(canvas);
    return canvas;
}

function Picture(path){
    this.source=getImage(path);
    this.height=this.source.height;
    this.width=this.source.width;
    this.data=getImageData(this.source);
    this.canvas=createCanvas(this.source);
    this.context=this.canvas.getContext('2d');
    this.getPixel= function (x,y) {
        return getPixelData(x,y,this.width);
    };
    this.display= function(){
        this.context.putImageData(this.data,0,0);
    };

};

var pic= new Picture("resources/flower1.png");
pic.display()