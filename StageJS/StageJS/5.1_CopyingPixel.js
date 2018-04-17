/**
 * Created by 1715844 on 17/04/2018.
 */
//Image Loadimg
var img = new Image();
img.src = "img/download.jpg"
img.onload = function(){
    drawBase();
    //ChangePixelColorNestedLoop(this);
    lighten2(this);

}
/**
 * Method to draw the image of reference
 */
function drawBase() {
    var base = document.getElementById('base');
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
    return [colorIndice, colorIndice+ 1, colorIndice+ 2, colorIndice+ 3];
}

/**
 * Method to change the color of an image with nested loops
 * @param img
 */
function ChangePixelColorNestedLoop(img){
    //init the canvas and the image
    var canevasModify = document.getElementById('modify');
    var contextModify = canevasModify.getContext('2d');
    contextModify.drawImage(img, 0, 0);
    var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);
    var data = imgData.data;
    //loop through the rows (y direction)
    for (var row = 0; row < img.height; row ++) {
        //loop through the cols (x direction)
        for (var col=0; col<img.width; col ++){
            // get the pixel
            var pixel= getPixel(col,row,img.width);
            //do something to the color
            data[pixel[0]]=0;//red
            data[pixel[1]]=0;//green
            data[pixel[2]]=0;//blue
        }
    }
    contextModify.putImageData(imgData, 0, 0);
}
/**
 * Method to get the indice of a pixel
 * @param img
 * @constructor
 */
function ChangePixelColor(img){
    //init the canvas and the image
    var canevasModify = document.getElementById('modify');
    var contextModify = canevasModify.getContext('2d');
    contextModify.drawImage(img, 0, 0);
    img.style.display = 'none';
    var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);
    var data = imgData.data;
    //loop through the pixel
    for (var i = 0; i < data.length; i += 4){
        //do something to the color
        data[pixel[0]]=0;//red
        data[pixel[1]]=0;//green
        data[pixel[2]]=0;//blue
    }
    contextModify.putImageData(imgData, 0, 0);
}
/**
 * Method to ligthen an image with nested loop
 * @param img
 */
function lighten2WithNestedLoop(img) {
    //init the canvas and the image
    var canevasModify = document.getElementById('modify');
    var contextModify = canevasModify.getContext('2d');
    contextModify.drawImage(img, 0, 0);
    var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);
    var data = imgData.data;
    //loop through the rows (y direction)
    for (var row = 0; row < img.height; row ++) {
        //loop through the cols (x direction)
        for (var col=0; col<img.width; col ++){
            // get the pixel
            var pixel= getPixel(col,row,img.width);
            //do something to the color
            data[pixel[3]]*=0.5;
        }
    }
    contextModify.putImageData(imgData, 0, 0);
}
/**
 * Method to ligthen an image
 * @param img
 */
function lighten2(img) {
    var canevasModify = document.getElementById('modify');
    var contextModify = canevasModify.getContext('2d');
    contextModify.drawImage(img, 0, 0);
    img.style.display = 'none';
    var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);
    var data = imgData.data;
    for (var i = 0; i < data.length; i += 4){
            data[i+3]*=0.5;
    }
    contextModify.putImageData(imgData, 0, 0);
}

//5.2 Copying And Transforming Pictures
/**function copyPicture(img) {
    var source=img.data;
    var newImage= new Image();

    for (var row = 0; row < img.width; row ++) {
        //loop through the cols (x direction)
        for (var col=0; col<img.height; col ++){
            // get the pixel
            var pixel= getPixel(row,col,img.width);
            newImage[]
        }
    }
}*/