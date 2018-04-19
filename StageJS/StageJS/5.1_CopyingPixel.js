/**
 * Created by 1715844 on 17/04/2018.
 */
//Image Loadimg
var img = new Image();
img.src = "img/download.jpg"
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

/**
 * Method to change the color of an image with nested loops
 * @param img
 */
function mirrorHorizontal(){
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
    console.log(img.width, " - ", img.height);
    console.log(canevasModify.width, " - ", canevasModify.height);
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


//5.2 Copying And Transforming Pictures
