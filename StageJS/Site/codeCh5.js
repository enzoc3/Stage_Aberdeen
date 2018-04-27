/**
 * Method to change the color of an image with nested loops
 */
function ChangePixelColorNestedLoop(){
    var pict = new Picture("img/nous.jpg", true);
    pict.setCanvas("base");
    //init the canvas of the image
    pict.setCanvas("changePixelColor");
    //loop through the rows (y direction)
    for (var row = 0; row < pict.height; row++){
        //loop through the cols (x direction)
        for (var col = 0; col < pict.width; col++){
            //do something to the color
            pixel.setColor(0, 0, 0, 255);
            pict.setPixel(pixel , col, row);
        }
    }
    pict.display();
    changePixelColorNestedLoopCode();
}

/**
 * Method to ligthen an image with nested loop
 */
function lighten2WithNestedLoop(){
    var pict = new Picture("img/nous.jpg", true);
    pict.setCanvas("base");
    //init the canvas of the image
    pict.setCanvas("lighten2");
    //loop through the rows (y direction)
    for (var row = 0; row < pict.height; row++){
        //loop through the cols (x direction)
        for (var col = 0; col < pict.width; col++){
            // get the pixel
            var pixel = pict.getPixel(col, row);
            //do something to the color
            pixel.alpha*=0.5;
            pict.setPixel(pixel, col, row);
        }
    }
    pict.display();
    lighten2WithNestedLoopCode();
}

/**
 * Method to mirror pixels in a picture along a vertical line, with nested loops
 */
function mirrorVertial() {
    var pict = new Picture("img/nous.jpg", true);
    pict.setCanvas("base");
    //init the canvas of the image
    pict.setCanvas("mirrorVert");
    //loop through the rows (y direction)
    for (var row = 0; row < pict.height; row++){
        //loop through the cols (x direction)
        for (var col = 0; col < pict.width/2; col++){
            // get the pixel
            var pixel = pict.getPixel(col, row);
            //do something to the color
            pict.setPixel(pixel, pict.width-col, row);
        }
    }
    pict.display();
    mirrorVertialCode();
}

/**
 * Method to mirror pixels in a picture along a horizontal line, top to bottom with nested loops
 */
function mirrorHorizontalTopToBottom(){
    var pict = new Picture("img/nous.jpg", true);
    pict.setCanvas("base");
    //init the canvas of the image
    pict.setCanvas("mirrorHoriTB");
    //loop through the height (y direction)
    for (var row = 0; row < pict.height/2; row++){
        //loop through the cols (x direction)
        for (var col = 0; col < pict.width; col++){
            // get the pixel
            var pixel = pict.getPixel(col, row);
            //do something to the color
            pict.setPixel(pixel, col, pict.height-row);
        }
    }
    pict.display();
    mirrorHorizontalTopToBottomCode();
}

/**
 * Method to mirror pixels in a picture along a horizontal line, bottom to top with nested loops
 */
function mirrorHorizontalBottomToTop(){
    var pict = new Picture("img/nous.jpg", true);
    pict.setCanvas("base");
    //init the canvas of the image
    pict.setCanvas("mirrorHoriBT");
    //loop through the height (y direction)
    for (var row = 0; row < pict.height/2; row++){
        //loop through the cols (x direction)
        for (var col = 0; col < pict.width; col++){
            // get the pixel
            var pixel = pict.getPixel(col, pict.height-1-row);
            //do something to the color
            pict.setPixel(pixel, col, row);
        }
    }
    pict.display();
    mirrorHorizontalBottomToTopCode();
}

/**
 * Method to mirror pixels in a picture to build the broken part of the temple
 */
function mirrorTemplePartVertical() {
    var pict = new Picture("img/temple.jpg", true);
    pict.setCanvas("base");
    var mirrorPoint = 321;
    //init the canvas of the image
    pict.setCanvas("templePartVertical");
    //loop through the height (y direction)
    for (var row = 41; row < 124; row++){
        //loop through the cols (x direction)
        for (var col = 1; col < 320; col++){
            // get the pixel
            var pixel = pict.getPixel(mirrorPoint-col, row);
            //do something to the color
            pict.setPixel(pixel, mirrorPoint+col, row);
        }
    }
    pict.display();
    mirrorTemplePartVerticalCode();
}

/**
 * Method to copy pixels in a picture in an other picture with nested loops
 */
function copyPicture() {
    var pict = new Picture("img/nous.jpg", true);
    pict.setCanvas("base");
    //init the canvas of the image
    var target = new Picture("img/white.png", true);
    target.setCanvas("copyP");
    target.setCanvasSize(pict.width, pict.height);
    //loop through the row (y direction)
    for (var row = 0; row < pict.height; row++) {
        //loop through the cols (x direction)
        for (var col = 0; col < pict.width; col++){
            // get the pixel
            var pixel = pict.getPixel(col, row);
            target.setPixel(pixel, col, row);
        }
    }
    target.display();
    copyPictureCode();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//A FAIRE
/**
 * Method to copy pixels in a picture in an other picture at the coordinate 100, 100 with nested loops
 */
function copyPictureMidway() {
    var pict = new Picture("img/nous.jpg", true);
    pict.setCanvas("base");
    console.log(pict.width, pict.height);
    //init the canvas of the image
    var target = new Picture("img/white.png", true);
    target.setCanvas("copyPM");
    var x = pict.width+100;
    var y = pict.height+100;
    console.log(x, y);
    target.setCanvasSize(x, y);
    target.display();
    console.log(target.width, target.height);
    //loop through the row (y direction)
    for (var row = 0; row < pict.height; row++) {
        //loop through the cols (x direction)
        for (var col = 0; col < pict.width; col++){
            // get the pixel
            var pixel = pict.getPixel(col, row);
            target.setPixel(pixel, col+100, row+100);
        }
    }
    target.display();
    copyPictureCode();
}

/**
 * Method to copy a small part of a picture in an other picture with nested loops
 */
function copyPictureSmallPart() {
    var xMax = 190;
    var yMax = 170;
    var pict = new Picture("img/nous.jpg", true);
    pict.setCanvas("base");
    //init the canvas of the image
    var target = new Picture("img/white.png", true);
    target.setCanvas("copySM");
    target.setCanvasSize(xMax, yMax);
    //loop through the row (y direction)
    for (var row = 0; row < yMax; row++) {
        //loop through the cols (x direction)
        for (var col = 0; col < xMax; col++){
            // get the pixel
            var pixel = pict.getPixel(col+70, row);
            target.setPixel(pixel, col, row);
        }
    }
    target.display();
    copyPictureSmallPartCode();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TO DO
/**
 * Method to copy an picture and rotate it left 90 degrees on the current picture
 */
function copyAndLeftRotation() {
    var pict = new Picture("img/nous.jpg", true);
    pict.setCanvas("base");
    //init the canvas of the image
    var target = new Picture("img/white.png", true);
    target.setCanvas("copyAndLeft");
    target.setCanvasSize(pict.height, pict.width);
    target.setImageSize(pict.height, pict.width);
    console.log(target.width, target.height);
    //loop through the row (y direction)
    for (var col = 0; col < pict.width; col++){
        //loop through the cols (x direction)
        for (var row = 0; row < pict.height; row++) {
            // get the pixel
            var pixel = pict.getPixel(col, row);
            target.setPixel(pixel.red, row, target.height-1-col);
        }
    }
    target.display();
    copyAndLeftRotationCode();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TO DO
/**
* Method to create a new picture that is scaled up by 2 times
*/
function scaleUp() {
    var time = 2;
    var pict = new Picture("img/nous.jpg", true);
    pict.setCanvas("base");
    //init the canvas of the image
    var target = new Picture("img/white.png", true);
    target.setCanvas("scale");
    target.setCanvasSize(pict.width*time, pict.height*time);
    target.setImageSize(pict.width*time, pict.height*time);
    //loop through the cols (x direction)
    for (var col = 0; col < pict.width; col++){
        //loop through the cols (y direction)
        for (var row = 0; row < pict.height; row++) {
            // get the pixel
            var pixel = pict.getPixel(col, row);
            //loop through the cols (x direction)
            for (var colT = col*time; colT < (col*time)+time; colT++) {
                //loop through the cols (y direction)
                for (var rowT = row*time; rowT < (row*time)+time; rowT++) {
                    target.setPixel(pixel, colT, rowT);
                }
            }
        }
    }
    pict.display();
    scaleUpCode();
}

/**
 * Method to create a new picture that is small by 2 times
 */
function copyPictureHalfAsBig() {
    var pict = new Picture("img/nous.jpg", true);
    pict.setCanvas("base");
    //init the canvas of the image
    var target = new Picture("img/white.png", true);
    target.setCanvas("copyPictureHAB");
    target.setCanvasSize(pict.width/2, pict.height/2);
    //target.setImageSize(pict.width/2, pict.height/2);
    var rowT = 0;
    for (var row = 0; row < pict.height; row+=2) {
        var colT = 0;
        //loop through the cols (x direction)
        for (var col = 0; col < pict.width; col+=2){
            // get the pixel
            var pixel = pict.getPixel(col, row);
            target.setPixel(pixel, colT, rowT);
            colT++;
        }
        rowT++;
    }
    target.display();
    copyPictureHalfAsBigCode();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TO DO
/**
 * Move a picture in the position x and y choose in the form
 * @param {form} form - use to get the different values about the position to show the picture
 */
function copyFlowerTO(form) {
    var xStart = form.x.value;
    var yStart = form.y.value;
    var pict = new Picture("img/flower1.png", true);
    pict.setCanvas("base");
    //init the canvas of the image
    var target = new Picture("img/white.png", true);
    target.setCanvas("copyFlowerT");
    target.setCanvasSize(1000, 1000);
    var contextModify = canevasModify.getContext("2d");
    var target= contextModify.createImageData(imgflower1.width, imgflower1.height);
    for (var row = 0; row < imgflower1.height; row ++) {
        //loop through the cols (x direction)
        for (var col=0; col<imgflower1.width; col ++){
            // get the pixel
            var pixel= getPixel(col,row,imgflower1.width);
            target.data[pixel[0]]=source.data[pixel[0]];
            target.data[pixel[1]]=source.data[pixel[1]];
            target.data[pixel[2]]=source.data[pixel[2]];
            target.data[pixel[3]]=source.data[pixel[3]];
        }
    }
    contextModify.putImageData(target, xStart, yStart);
    copyFlowerTOCode();
}