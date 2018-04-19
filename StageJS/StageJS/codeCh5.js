/**
 * Created by 1715844 on 17/04/2018.
 */

var img = document.getElementById("nous");
var imgtemple = document.getElementById("temple");
window.onload = function(){
    drawBase();

}
/**
 * Method to draw the reference image
 */
function drawBase() {
    var base = document.getElementById('baseFlower');
    //normalise the caneva with the image
    base.width = img.width;
    base.height = img.height;
    var context_base = base.getContext('2d');
    context_base.drawImage(img, 0, 0);
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
    var canevasModify = document.getElementById('mirrorHoriTB');
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
    mirrorHorizontalTopToBottomCode();
}

/**
 * Method to mirror pixels in a picture along a horizontal line, bottom to top with nested loops
 * @param img
 */
function mirrorHorizontalBottomToTop(){
    //init the canvas and the image
    var canevasModify = document.getElementById('mirrorHoriBT');
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
    mirrorHorizontalBottomToTopCode();
}


function mirrorTemplePartVertical() {
    var mirrorPoint = 321;
    //init the canvas and the image
    var canevasModify = document.getElementById('templePartVertical');
    //normalise the caneva with the image
    canevasModify.width = imgtemple.width;
    canevasModify.height = imgtemple.height;
    var contextModify = canevasModify.getContext('2d');
    contextModify.drawImage(imgtemple, 0, 0);
    var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);
    var data = imgData.data;
    canevasModify.height = imgtemple.height;
    canevasModify.width = imgtemple.width;
    //loop through the height (y direction)
    for (var row = 41; row < 124; row++) {
        //loop through the cols (x direction)
        for (var col = 1; col < 320; col++){
            // get the pixel
            var pixel = getPixel(mirrorPoint-col, row, imgtemple.width);
            var target = getPixel(mirrorPoint+col, row, imgtemple.width);
            //do something to the color
            data[target[0]] = data[pixel[0]]; //red
            data[target[1]] = data[pixel[1]]; //green
            data[target[2]] = data[pixel[2]]; //blue
            data[target[3]] = data[pixel[3]]; //alpha
        }
    }
    contextModify.putImageData(imgData, 0, 0);
    mirrorTemplePartVerticalCode();
}

//5.2 Copying And Transforming Pictures

function copyPicture() {
    var base = document.getElementById('base');
    //normalise the caneva with the image
    base.width = img.width;
    base.height = img.height;
    var context_base = base.getContext('2d');
    context_base.drawImage(img, 0, 0);
    var source= context_base.getImageData(0, 0,base.width, base.height);
    var canevasModify = document.getElementById("copyP");
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var contextModify = canevasModify.getContext("2d");
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
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
    copyPictureCode();
}

/**
 *
 * @param img
 */
function copyPictureMidway() {
    var base = document.getElementById('base');
    //normalise the caneva with the image
    base.width = img.width;
    base.height = img.height;
    var context_base = base.getContext('2d');
    context_base.drawImage(img, 0, 0);
    var source= context_base.getImageData(0, 0,base.width, base.height);
    var canevasModify = document.getElementById("copyPM");
    //normalise the caneva with the image
    canevasModify.width = img.width;
    canevasModify.height = img.height;
    var contextModify = canevasModify.getContext("2d");
    //normalise the caneva with the image
    canevasModify.width +=100;
    canevasModify.height +=100;
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
    copyPictureMidwayCode();
}

function copyPictureSmallPart() {
    var base = document.getElementById('base');
    //normalise the caneva with the image
    base.width = img.width;
    base.height = img.height;
    var context_base = base.getContext('2d');
    context_base.drawImage(img, 0, 0);
    var source= context_base.getImageData(0, 0,base.width, base.height);
    var canevasModify = document.getElementById("copySM");
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
    copyPictureSmallPartCode();
}

/**
 * Method to copy an picture and rotate it left 90 degrees on the current picture
 * @param img
 */
function copyAndLeftRotation() {
    var base = document.getElementById('base');
    var context_base = base.getContext('2d');
    context_base.drawImage(img, 0, 0);
    var source = context_base.getImageData(0, 0, base.width, base.height);
    var canevasModify = document.getElementById("copyAndLeft");
    var contextModify = canevasModify.getContext("2d");
    //normalise the caneva with the image
    canevasModify.width = img.height;
    canevasModify.height = img.width;
    var target = contextModify.createImageData(canevasModify.width, canevasModify.height);
    //loop through the cols (x direction)
    for (var col = 0; col<img.width; col++){
        //loop through the cols (x direction)
        for (var row = 0; row < img.height; row++) {
            // get the pixel
            var pixel = getPixel(col, row, img.width);
            var cible = getPixel(row, canevasModify.height-1-col, canevasModify.width);
            target.data[cible[0]] = source.data[pixel[0]];
            target.data[cible[1]] = source.data[pixel[1]];
            target.data[cible[2]] = source.data[pixel[2]];
            target.data[cible[3]] = source.data[pixel[3]];
        }
    }
    contextModify.putImageData(target, 0, 0);
    copyAndLeftRotationCode();
}

/**
* Method to create a new picture that is scaled up by 10 times
*/
function scaleUp(form) {
    var time = form.scale.value;
    var base = document.getElementById('base');
    var context_base = base.getContext('2d');
    var source = context_base.getImageData(0, 0,base.width, base.height);
    var canevasModify = document.getElementById("scale");
    //normalise the caneva with the image
    canevasModify.width = img.width*time;
    canevasModify.height = img.height*time;
    var contextModify = canevasModify.getContext("2d");
    var target = contextModify.createImageData(canevasModify.width, canevasModify.height);
    //loop through the cols (x direction)
    for (var col = 0; col < img.width; col++){
        //loop through the cols (y direction)
        for (var row = 0; row < img.height; row++) {
            // get the pixel
            var pixel = getPixel(col, row, img.width);
            for (var colT = col*time; colT < (col*time)+time; colT++) {
                for (var rowT = row*time; rowT < (row*time)+time; rowT++) {
                    var pixelT = getPixel(colT, rowT, img.width*time);
                    target.data[pixelT[0]] = source.data[pixel[0]];
                    target.data[pixelT[1]] = source.data[pixel[1]];
                    target.data[pixelT[2]] = source.data[pixel[2]];
                    target.data[pixelT[3]] = source.data[pixel[3]];
                }
            }
        }
    }
    contextModify.putImageData(target, 0, 0);
    scaleUpCode();
}



