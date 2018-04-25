function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}
function getImage(path) {
    var image=new Image();
    image.src=path;
    var tab= getImageData(image);
    return [image,tab];
    /*return new Promise(function(resolve,reject)
    {
        image.onload = function(){
            var tab= getImageData(this);
            resolve([this, tab]);
        };
    }
    );*/
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


function Picture(path,wait = true ){
    if(wait== true){
        wait(500);
    }
    var promise = getImage(path);
    //thus=this;
    this.source=promise[0];
    this.height=this.source.height;
    this.width=this.source.width;
    this.imgData=promise[1];
    this.canvas=document.getElementById('source');
    this.context=this.canvas.getContext('2d');

    this.getPixel= function (x,y) {
        var colorIndice = y * (this.width * 4) + x * 4;
        return new Pixel(this.imgData.data[colorIndice],this.imgData.data[colorIndice+1],this.imgData.data[colorIndice+2],this.imgData.data[colorIndice+3],x,y);
    };
    this.setPixel=function(r,g,b,a,x,y){
        var pixIndice=getPixelIndices(x,y,this.width);
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
}

function createPicture(path){
    return new Promise(function(resolve,reject)
    {
        var pic= new Picture(path,false);
        resolve(pic);
    });
}

