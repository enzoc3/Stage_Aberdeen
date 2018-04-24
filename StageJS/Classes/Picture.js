function getImage(path) {
    var image=new Image();
    image.src=path;
    return new Promise(function(resolve,reject)
    {
        image.onload = function(){
            console.log("coucou")
            var tab= getImageData(this);
            console.log(tab);
            resolve([this, tab]);
        };
    }
    );
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

function getPixelIndices(x, y, width) {
    var colorIndice = y * (width * 4) + x * 4;
    return [colorIndice ,colorIndice +1,colorIndice+2,colorIndice +3];
}


function Picture(path){
    var promise = getImage(path);
    thus=this;
    promise.then(function(tab){
        thus.source=tab[0];
        thus.height=thus.source.height;
        thus.width=thus.source.width;
        thus.imgData=tab[1];
        thus.canvas=document.getElementById('source');
        thus.context=thus.canvas.getContext('2d');
    });

    this.getPixel= function (x,y) {
        var colorIndice = y * (this.width * 4) + x * 4;
        return new Pixel(this.imgData.data[colorIndice],this.imgData.data[colorIndice+1],this.imgData.data[colorIndice+2],this.imgData.data[colorIndice+3],x,y);
    };
    this.setPixel=function(r,g,b,a,x,y){
        var pixIndice=getPixelIndices(x,y);
        this.imgData.data[pixIndice[0]]=r;
        this.imgData.data[pixIndice[1]]=g;
        this.imgData.data[pixIndice[2]]=b;
        this.imgData.data[pixIndice[3]]=a;
    };
    this.display= function(){
        this.context.putImageData(this.imgData,0,0);
        this.canvas.style.display="inline";
    };
    this.redraw= function(){
        this.display()
    };

};
var pic= new Picture("resources/flower1.png");
//pic.display();
console.log(pic.imgData);
var test = getPixelIndices(127,97,pic.width);
//console.log("test: "+pic.imgData.data[test[0]],pic.imgData.data[test[1]],pic.imgData.data[test[2]]);
var pix= pic.getPixel(127,97);
console.log(pix);