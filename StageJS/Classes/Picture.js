function getImage(path) {
    var image=new Image();
    image.src=path;
    image.onload = function(){
        return getImageData(this);
    }
    var data = image.onload();
    return [image, data];
}

function getImageData(image) {
    var canvas = document.createElement('canvas');
    canvas.id='source';
    canvas.setAttribute("width",image.width);
    canvas.setAttribute("height",image.height);
    document.body.appendChild(canvas);
    canvas.style.display="none";
    var context2d=canvas.getContext('2d');
    context2d.drawImage(image,0,0);
    return context2d.getImageData(0,0,image.width,image.height);
}

function getPixelInices(x, y, width) {
    var colorIndice = y * (this.width * 4) + x * 4;
    return new [colorIndice ,colorIndice +1,colorIndice+2,colorIndice +3];
}


function Picture(path){
    var tab = getImage(path);
    this.source= tab[0];
    this.height=this.source.height;
    this.width=this.source.width;
    this.data=tab[1];
    this.canvas=document.getElementById('source');
    this.context=this.canvas.getContext('2d');
    this.getPixel= function (x,y) {
        var colorIndice = y * (this.width * 4) + x * 4;
        return new Pixel(this.data[colorIndice],this.data[colorIndice+1],this.data[colorIndice+2],this.data[colorIndice+3],x,y);
    };
    this.setPixel=function(r,g,b,a,x,y){
        var pixIndice=getPixelInices(x,y);
        this.data[pixIndice[0]]=r;
        this.data[pixIndice[1]]=g;
        this.data[pixIndice[2]]=b;
        this.data[pixIndice[3]]=a;
    };
    this.display= function(){
        this.context.putImageData(this.data,0,0);
        this.canvas.style.display="inline";
    };
    this.redraw= function(){
        this.display()
    };

};

var pic= new Picture("resources/flower1.png");
pic.display()