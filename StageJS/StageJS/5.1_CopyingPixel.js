/**
 * Created by 1715844 on 17/04/2018.
 */
//Image Loadimg

//var img = new Image();
//img.src = "img/download.jpg";
var bird= new Image();
bird.src = "img/bird.jpg";
/*var temple = new Image();
temple.src = "img/temple.jpg";
var flower1 = new Image();
flower1.src = "img/flower1.png";
var flower2 = new Image();
flower2.src = "img/flower2.png";*/
window.onload = function(){
    drawBase();
    //mirrorVertial(this);

}
/**
 * Method to draw the image of reference
 */
function drawBase() {
    var base = document.getElementById('base');
    //normalise the caneva with the image
    base.width = bird.width;
    base.height = bird.height;
    var context_base = base.getContext('2d');
    img.style.display = 'none';
}

/**
 * Method to get the indice of a pixel
 * @param x
 * @param y
 * @param width of the image
 * @returns {[the indice of the red componet of the pixel, same for green, same for blue, same for alpha]}
 */
function getPixel(x, y, width) {
    var colorIndice = y * (width * 4) + x * 4;
    return [colorIndice, colorIndice+1, colorIndice+2, colorIndice+3];
    getPixelCode();
}

/**
 * Method to change the color of an image with nested loops
 * @param img
 */

function ChangePixelColorNestedLoop(){
    //init the canvas and the image
    var canevasModify = document.getElementById('changePixelColor');
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var contextModify = canevasModify.getContext('2d');
    contextModify.drawImage(img, 0, 0);
    var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);
    var data = imgData.data;
    //loop through the rows (y direction)
    for (var row = 0; row < img.height; row++) {
        //loop through the cols (x direction)
        for (var col = 0; col<img.width; col++){
            // get the pixel
            var pixel = getPixel(col, row, img.width);
            //do something to the color
            data[pixel[0]] = 0; //red
            data[pixel[1]] = 0; //green
            data[pixel[2]] = 0; //blue
        }
    }
    contextModify.putImageData(imgData, 0, 0);
    changePixelColorNestedLoopCode();
}

/**
 * Method to ligthen an image with nested loop
 * @param img
 */
function lighten2WithNestedLoop(){
    //init the canvas and the image
    var canevasModify = document.getElementById('lighten2');
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var contextModify = canevasModify.getContext('2d');
    contextModify.drawImage(img, 0, 0);
    var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);
    var data = imgData.data;
    //loop through the rows (y direction)
    for (var row = 0; row < img.height; row++) {
        //loop through the cols (x direction)
        for (var col = 0; col<img.width; col++){
            // get the pixel
            var pixel= getPixel(col, row, img.width);
            //do something to the color
            data[pixel[3]]*=0.5;
        }
    }
    contextModify.putImageData(imgData, 0, 0);
    lighten2WithNestedLoopCode();
}

function mirrorVertial() {
    //init the canvas and the image
    var canevasModify = document.getElementById('mirrorVert');
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var contextModify = canevasModify.getContext('2d');
    contextModify.drawImage(img, 0, 0);
    var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);
    var data = imgData.data;
    //loop through the rows (y direction)
    for (var row = 0; row < img.height; row++) {
        //loop through the cols (x direction)
        for (var col = 0; col<img.width/2; col++){
            // get the pixel
            var pixel = getPixel(col, row, img.width);
            var target = getPixel(img.width-col, row, img.width);
            //do something to the color
            data[target[0]] = data[pixel[0]]; //red
            data[target[1]] = data[pixel[1]]; //green
            data[target[2]] = data[pixel[2]]; //blue
            data[target[3]] = data[pixel[3]]; //alpha
        }
    }
    contextModify.putImageData(imgData, 0, 0);
    mirrorVertialCode();
}

function mirrorHorizontalTopToBottom(){
    //init the canvas and the image
    var canevasModify = document.getElementById('mirrorHori');
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var contextModify = canevasModify.getContext('2d');
    contextModify.drawImage(img, 0, 0);
    var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);
    var data = imgData.data;
    canevasModify.height = img.height;
    canevasModify.width = img.width;
    //loop through the height (y direction)
    for (var row = 0; row < img.height/2; row++) {
        //loop through the cols (x direction)
        for (var col = 0; col<img.width; col++){
            // get the pixel
            var pixel = getPixel(col, row, img.width);
            var target = getPixel(col, img.height-row, img.width);
            //do something to the color
            data[target[0]] = data[pixel[0]]; //red
            data[target[1]] = data[pixel[1]]; //green
            data[target[2]] = data[pixel[2]]; //blue
            data[target[3]] = data[pixel[3]]; //alpha
        }
    }
    contextModify.putImageData(imgData, 0, 0);
    mirrorHorizontalCode();
}

/**
 * Method to mirror pixels in a picture along a horizontal line, bottom to top with nested loops
 * @param img
 */
function mirrorHorizontalBottomToTop(img){
    //init the canvas and the image
    var canevasModify = document.getElementById('modify');
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var contextModify = canevasModify.getContext('2d');
    contextModify.drawImage(img, 0, 0);
    var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);
    var data = imgData.data;
    canevasModify.height = img.height;
    canevasModify.width = img.width;
    //loop through the height (y direction)
    for (var row = 0; row < img.height/2; row++) {
        //loop through the cols (x direction)
        for (var col = 0; col<img.width; col++){
            // get the pixel
            var pixel = getPixel(col, img.height-row, img.width);
            var target = getPixel(col, row, img.width);
            //do something to the color
            data[target[0]] = data[pixel[0]]; //red
            data[target[1]] = data[pixel[1]]; //green
            data[target[2]] = data[pixel[2]]; //blue
            data[target[3]] = data[pixel[3]]; //alpha
        }
    }
    contextModify.putImageData(imgData, 0, 0);
}

/**
 * Method to mirror part of the picture around a verticalline at a mirror point
 * @param img
 */
function mirrorTemplePartVertical(img) {
    var mirrorPoint = 768;
    img.src = "img/temple.jpg";
    //init the canvas and the image
    var canevasModify = document.getElementById('modify');
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var contextModify = canevasModify.getContext('2d');
    contextModify.drawImage(img, 0, 0);
    var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);
    var data = imgData.data;
    canevasModify.height = img.height;
    canevasModify.width = img.width;
    //loop through the height (y direction)
    for (var row = 110; row < 310; row++) {
        //loop through the cols (x direction)
        for (var col = 1; col < 770; col++){
            // get the pixel
            var pixel = getPixel(mirrorPoint-col, row, img.width);
            var target = getPixel(mirrorPoint+col, row, img.width);
            //do something to the color
            data[target[0]] = data[pixel[0]]; //red
            data[target[1]] = data[pixel[1]]; //green
            data[target[2]] = data[pixel[2]]; //blue
            data[target[3]] = data[pixel[3]]; //alpha
        }
    }
    contextModify.putImageData(imgData, 0, 0);
}

//5.2 Copying And Transforming Pictures

/**
 *
 * @param img
 */
function copyPicture() {
    var base = document.getElementById('base');
    //normalise the caneva with the image
    base.width = img.width;
    base.height = img.height;
    var context_base = base.getContext('2d');
    context_base.drawImage(img, 0, 0);
    var source= context_base.getImageData(0, 0,base.width, base.height);
    var canevasModify = document.getElementById("changePixelColor");
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var contextModify = canevasModify.getContext("2d");
    var target= contextModify.createImageData(img.width, img.height);
    for (var row = 0; row < img.height; row ++) {
        //loop through the cols (x direction)
        for (var col=0; col<img.width; col ++){
            // get the pixel
            var pixel= getPixel(col,row,img.width);
            target.data[pixel[0]]=source.data[pixel[0]];
            target.data[pixel[1]]=source.data[pixel[1]];
            target.data[pixel[2]]=source.data[pixel[2]];
            target.data[pixel[3]]=source.data[pixel[3]];
        }
    }
    contextModify.putImageData(target, 0, 0);
}

/**
 *
 * @param img
 */
function copyPictureMidway(img) {
    var base = document.getElementById('base');
    //normalise the caneva with the image
    base.width = img.width;
    base.height = img.height;
    var context_base = base.getContext('2d');
    var source= context_base.getImageData(0, 0,base.width, base.height);
    var canevasModify = document.getElementById("modify");
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var contextModify = canevasModify.getContext("2d");
    //normalise the caneva with the image
    canevasModify.width = 1000;
    canevasModify.height = 1000;
    var target= contextModify.createImageData(img.width, img.height);
    for (var row = 0; row < img.height; row ++) {
        //loop through the cols (x direction)
        for (var col=0; col<img.width; col ++){
            // get the pixel
            var pixel= getPixel(col,row,img.width);
            target.data[pixel[0]]=source.data[pixel[0]];
            target.data[pixel[1]]=source.data[pixel[1]];
            target.data[pixel[2]]=source.data[pixel[2]];
            target.data[pixel[3]]=source.data[pixel[3]];
        }
    }
    contextModify.putImageData(target, 100, 100);
}

function copyPictureSmallPart(img) {
    var base = document.getElementById('base');
    //normalise the caneva with the image
    base.width = img.width;
    base.height = img.height;
    var context_base = base.getContext('2d');
    var source= context_base.getImageData(0, 0,base.width, base.height);
    var canevasModify = document.getElementById("modify");
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var contextModify = canevasModify.getContext("2d");
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var target= contextModify.createImageData(img.width, img.height);
    for (var row = 0; row < 170; row ++) {
        //loop through the cols (x direction)
        for (var col=70; col<260; col ++){
            // get the pixel
            var pixel= getPixel(col,row,img.width);
            target.data[pixel[0]]=source.data[pixel[0]];
            target.data[pixel[1]]=source.data[pixel[1]];
            target.data[pixel[2]]=source.data[pixel[2]];
            target.data[pixel[3]]=source.data[pixel[3]];
        }
    }
    contextModify.putImageData(target, 0, 0);
}

/**
 * Method to copy an picture and rotate it left 90 degrees on the current picture
 * @param img
 */
function copyAndLeftRotation(img) {
    var base = document.getElementById('base');
    var context_base = base.getContext('2d');
    var source = context_base.getImageData(0, 0, base.width, base.height);
    var canevasModify = document.getElementById("modify");
    var contextModify = canevasModify.getContext("2d");
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var target = contextModify.createImageData(img.width, img.height);
    //loop through the cols (x direction)
    for (var col = 0; col<img.width; col++){
        //loop through the cols (x direction)
        for (var row = 0; row < img.height; row++) {
            // get the pixel
            var pixel = getPixel(col, row, img.width);
            var cible = getPixel(row, img.width-1-col, img.width);
            target.data[cible[0]] = source.data[pixel[0]];
            target.data[cible[1]] = source.data[pixel[1]];
            target.data[cible[2]] = source.data[pixel[2]];
            target.data[cible[3]] = source.data[pixel[3]];
        }
    }
    contextModify.putImageData(target, 0, 0);
}

function copyFlowers(img,img2) {
    var base = document.getElementById('base');
    var context_base = base.getContext('2d');
    var source= context_base.getImageData(0, 0,base.width, base.height);

    var base2 = document.getElementById('base2');
    var context_base2 = base2.getContext('2d');
    var source2= context_base2.getImageData(0, 0,base2.width, base2.height);
    var canevasModify = document.getElementById("modify");
    var contextModify = canevasModify.getContext("2d");
    //normalise the caneva with the image
    canevasModify.width = 10000;
    canevasModify.height = 400;
    var target= contextModify.createImageData(canevasModify.width, canevasModify.height);

    for (var row = 0; row< img.height; row ++) {
    //loop through the cols (x direction)
        for (var col=0; col<img.width; col ++){
            // get the pixel
            var pixelSource= getPixel(col,row,img.width);
            var pixelTarget=getPixel(col,row,canevasModify.width);
            target.data[pixelTarget[0]]=source.data[pixelSource[0]];
            target.data[pixelTarget[1]]=source.data[pixelSource[1]];
            target.data[pixelTarget[2]]=source.data[pixelSource[2]];
            target.data[pixelTarget[3]]=source.data[pixelSource[3]];
        }
    }

    for (var row = 0; row< img2.height; row ++) {
        //loop through the cols (x direction)
        for (var col=0; col<img2.width; col ++){
            // get the pixel
            var pixelSource= getPixel(col,row,img2.width);
            var pixelTarget=getPixel(col+img2.width+1,row,canevasModify.width);
            target.data[pixelTarget[0]]=source2.data[pixelSource[0]];
            target.data[pixelTarget[1]]=source2.data[pixelSource[1]];
            target.data[pixelTarget[2]]=source2.data[pixelSource[2]];
            target.data[pixelTarget[3]]=source2.data[pixelSource[3]];
        }
    }
    //retire blue and copy flower1
    for (var row = 0; row< img.height; row ++) {
    //loop through the cols (x direction)
        for (var col=0; col<img.width; col ++){
            // get the pixel
            var pixelSource= getPixel(col,row,img.width);
            var pixelTarget=getPixel(col+img.width*2+1,row,canevasModify.width);
            target.data[pixelTarget[0]]=source.data[pixelSource[0]];
            target.data[pixelTarget[1]]=source.data[pixelSource[1]];
            target.data[pixelTarget[2]]=0;
            target.data[pixelTarget[3]]=source.data[pixelSource[3]];
        }
    }
    //negate and copy flower2
    for (var row = 0; row< img2.height; row ++) {
        //loop through the cols (x direction)
        for (var col=0; col<img2.width; col ++){
            // get the pixel
            var pixelSource= getPixel(col,row,img2.width);
            var pixelTarget=getPixel(col+img2.width*3+1,row,canevasModify.width);
            target.data[pixelTarget[0]]=255-source2.data[pixelSource[0]];
            target.data[pixelTarget[1]]=255-source2.data[pixelSource[1]];
            target.data[pixelTarget[2]]=255-source2.data[pixelSource[2]];
            target.data[pixelTarget[3]]=source2.data[pixelSource[3]];
        }
    }
    contextModify.putImageData(target, 0, (canevasModify.height)-img.height-5);
}
// a copier pour mise en commun
function copyPictureHalfAsBig() {
    var base = document.getElementById('base');
    //normalise the caneva with the image
    base.width = img.width;
    base.height = img.height;
    var context_base = base.getContext('2d');
    context_base.drawImage(img, 0, 0);
    var source= context_base.getImageData(0, 0,base.width, base.height);
    var canevasModify = document.getElementById("test");
    //normalise the caneva with the image
    canevasModify.width = img.width/2;
    canevasModify.height = img.height/2;
    var contextModify = canevasModify.getContext("2d");
    var target= contextModify.createImageData(img.width/2, img.height/2);
    var rowT=0
    for (var row = 0; row < img.height; row +=2) {
        var colT=0
        //loop through the cols (x direction)
        for (var col=0; col<img.width; col +=2){
            // get the pixel
            var pixel= getPixel(col,row,img.width);
            var pixelT=getPixel(colT,rowT,img.width/2);
            target.data[pixelT[0]]=source.data[pixel[0]];
            target.data[pixelT[1]]=source.data[pixel[1]];
            target.data[pixelT[2]]=source.data[pixel[2]];
            target.data[pixelT[3]]=source.data[pixel[3]];

            colT++;
        }
        rowT++;
    }
    contextModify.putImageData(target, 0, 0);
}

function copyFlowerTO(xStart,ySart) {
    var base = document.getElementById('base');
    //normalise the caneva with the image
    base.width = img.width;
    base.height = img.height;
    var context_base = base.getContext('2d');
    context_base.drawImage(img, 0, 0);
    var source= context_base.getImageData(0, 0,base.width, base.height);
    var canevasModify = document.getElementById("test");
    //normalise the caneva with the image
    canevasModify.width = 1000;
    canevasModify.height = 1000;
    var contextModify = canevasModify.getContext("2d");
    var target= contextModify.createImageData(img.width, img.height);
    for (var row = 0; row < img.height; row ++) {
        //loop through the cols (x direction)
        for (var col=0; col<img.width; col ++){
            // get the pixel
            var pixel= getPixel(col,row,img.width);
            target.data[pixel[0]]=source.data[pixel[0]];
            target.data[pixel[1]]=source.data[pixel[1]];
            target.data[pixel[2]]=source.data[pixel[2]];
            target.data[pixel[3]]=source.data[pixel[3]];
        }
    }
    contextModify.putImageData(target, xStart, ySart);
}

function blendPicture() {
    var base = document.getElementById('base');
    base.height=img.height;
    base.width=img.width;
    var context_base = base.getContext('2d');
    context_base.drawImage(img,0,0);
    var source= context_base.getImageData(0, 0,base.width, base.height);

    var base2 = document.getElementById('base2');
    base2.height=bird.height;
    base2.width=bird.width;
    var context_base2 = base2.getContext('2d');
    context_base2.drawImage(bird,0,0);
    var source2= context_base2.getImageData(0, 0,base2.width, base2.height);

    var canevasModify = document.getElementById("test");
    var contextModify = canevasModify.getContext("2d");
    //normalise the caneva with the image
    canevasModify.width = 2000;
    canevasModify.height = 1000;
    var target= contextModify.createImageData(canevasModify.width, canevasModify.height);
    var targetX=0;
    for(var sourceX=0;sourceX<img.width/2; sourceX++){
        for(var sourceY=0;sourceY<img.height; sourceY++){
            var pixelS1= getPixel(sourceX,sourceY,img.width);
            var pixelT= getPixel(sourceX,sourceY,canevasModify.width);
            target.data[pixelT[0]]=source.data[pixelS1[0]];
            target.data[pixelT[1]]=source.data[pixelS1[1]];
            target.data[pixelT[2]]=source.data[pixelS1[2]];
            target.data[pixelT[3]]=source.data[pixelS1[3]];
        }
    }
    var source2X=0;
    for(var sourceX;sourceX<img.width; sourceX++){
        for(var sourceY=0;sourceY<img.height; sourceY++){
            pixelS1= getPixel(sourceX,sourceY,img.width);
            var pixelS2= getPixel(source2X,sourceY,bird.width);
            pixelT= getPixel(sourceX,sourceY,bird.width+img.width/2);

            target.data[pixelT[0]]=parseInt(source.data[pixelS1[0]]*0.5+source2.data[pixelS2[0]]*0.5,10);
            target.data[pixelT[1]]=parseInt(source.data[pixelS1[1]]*0.5+source2.data[pixelS2[1]]*0.5,10);
            target.data[pixelT[2]]=parseInt(source.data[pixelS1[2]]*0.5+source2.data[pixelS2[2]]*0.5,10);
            target.data[pixelT[3]]=parseInt(source.data[pixelS1[3]]*0.5+source2.data[pixelS2[3]]*0.5,10);
        }
        source2X++;
    }

    for(var source2X;source2X<bird.width; source2X++){
        for(var sourceY=0;sourceY<bird.height; sourceY++){
            pixelS2= getPixel(source2X,sourceY,bird.width);
            pixelT= getPixel(source2X,sourceY,canevasModify.width);

            target.data[pixelT[0]]=source2.data[pixelS2[0]];
            target.data[pixelT[1]]=source2.data[pixelS2[1]];
            target.data[pixelT[2]]=source2.data[pixelS2[2]];
            target.data[pixelT[3]]=source2.data[pixelS2[3]];
        }
    }
    contextModify.putImageData(target, 0,0);
}