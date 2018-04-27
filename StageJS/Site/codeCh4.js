
window.onload = function(){
    //draw();
}

function decreaseRed(){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('decreaseRed');
    var pixel= null;
    console.log(imgCh4);
    for(var x = 0; x < imgCh4.width; x ++){
        for(var y = 0; y < imgCh4.height; y ++){
            pixel= imgCh4.getPixel(x,y);
            pixel.red*=0.5;
            imgCh4.setPixel(pixel,x,y);
        }
    }

    imgCh4.display();
    decreaseRedCode();
}

function decreaseGreen(){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('decreaseGreen');
    var pixel= null;
    console.log(imgCh4);
    for(var x = 0; x < imgCh4.width; x ++){
        for(var y = 0; y < imgCh4.height; y ++){
            pixel= imgCh4.getPixel(x,y);
            pixel.green*=0.5;
            imgCh4.setPixel(pixel,x,y);
        }
    }
    imgCh4.display();
    decreaseGreenCode();
}

function decreaseBlue(){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('decreaseBlue');
    var pixel= null;
    console.log(imgCh4);
    for(var x = 0; x < imgCh4.width; x ++){
        for(var y = 0; y < imgCh4.height; y ++){
            pixel= imgCh4.getPixel(x,y);
            pixel.blue*=0.5;
            imgCh4.setPixel(pixel,x,y);
        }
    }
    imgCh4.display();
    decreaseBlueCode();
}

function whileDecreaseRed(){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('decreaseRedWhile');
    var i=0;
    while(i<imgCh4.imgData.data.length){
        imgCh4.imgData.data[i] =imgCh4.imgData.data[i]*0.5;
        i+=4;
    }
    imgCh4.display();
    decreaseRedWhileCode();
}

function whileDecreaseGreen(){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('decreaseGreenWhile');
    var i=1;
    while(i<imgCh4.imgData.data.length){
        imgCh4.imgData.data[i] =imgCh4.imgData.data[i]*0.5;
        i+=4;
    }
    imgCh4.display();
    decreaseGreenWhileCode();
}

function whileDecreaseBlue(){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('decreaseBlueWhile');
    imgCh4.setCanvasSize(800,600);
    var i=2;
    while(i<imgCh4.imgData.data.length){
        imgCh4.imgData.data[i] =imgCh4.imgData.data[i]*0.5;
        i+=4;
    }
    imgCh4.display();
    decreaseBlueWhileCode();
}

function increaseRed(){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('increaseRed');
    for(var i = 0; i < imgCh4.imgData.data.length; i += 4){
        imgCh4.imgData.data[i] = imgCh4.imgData.data[i] *5.5;
    }
    imgCh4.display();
    increaseRedCode();
}

function clearBlue(){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('clearBlue');
    var i=2;
    while(i<imgCh4.imgData.data.length){
        imgCh4.imgData.data[i] =0;
        i+=4;
    }
    imgCh4.display();
    clearBlueCode();
}

function sunset(){
    decreaseGreen();
    decreaseBlue();
}

function changeRed(form){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('changeRed');
    var amount = form.value.value;
    for(var i = 0; i < imgCh4.imgData.data.length; i += 4){
        imgCh4.imgData.data[i] = imgCh4.imgData.data[i]*amount;
    }
    imgCh4.display();
    changeRedCode();
}

function changeColors(form){
    var redAmount = form.valueRed.value;
    var greenAmount = form.valueGreen.value;
    var blueAmount = form.valueBlue.value;
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('changeColors');
    for(var i = 0; i < imgCh4.imgData.data.length; i += 4){
        imgCh4.imgData.data[i] = imgCh4.imgData.data[i]*redAmount;
        imgCh4.imgData.data[i+1] = imgCh4.imgData.data[i+1]*greenAmount;
        imgCh4.imgData.data[i+2] = imgCh4.imgData.data[i+2]*blueAmount;
    }
    imgCh4.display();
}

function lighten(){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('lighten');
    for(var i = 0; i < imgCh4.imgData.data.length; i += 4){
        imgCh4.imgData.data[i] = imgCh4.imgData.data[i]*3.3;
        imgCh4.imgData.data[i+1] = imgCh4.imgData.data[i+1]*3.3;
        imgCh4.imgData.data[i+2] = imgCh4.imgData.data[i+2]*3.3;
    }
    imgCh4.display();
    lightenCode();
}

function darken(){//TO DO IN HTML
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('darken');
    for(var i = 0; i < imgCh4.imgData.data.length; i += 4){
        imgCh4.imgData.data[i] = imgCh4.imgData.data[i]*0.7;
        imgCh4.imgData.data[i+1] = imgCh4.imgData.data[i+1]*0.7;
        imgCh4.imgData.data[i+2] = imgCh4.imgData.data[i+2]*0.7;
    }
    imgCh4.display();
}

function invert(){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('invert');
    for(var i = 0; i < imgCh4.imgData.data.length; i += 4){
        imgCh4.imgData.data[i] = 255 - imgCh4.imgData.data[i];
        imgCh4.imgData.data[i + 1] = 255 - imgCh4.imgData.data[i + 1];
        imgCh4.imgData.data[i + 2] = 255 - imgCh4.imgData.data[i + 2];
    }
    imgCh4.display();
    InvertCode();
}

function shadeGrey(){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('grey');
    for (var i = 0; i < imgCh4.imgData.data.length; i += 4) {
        var moy = (imgCh4.imgData.data[i] + imgCh4.imgData.data[i + 1] + imgCh4.imgData.data[i + 2]) / 3;
        imgCh4.imgData.data[i] = moy;
        imgCh4.imgData.data[i + 1] = moy;
        imgCh4.imgData.data[i + 2] = moy;
    }
    imgCh4.display();
    greyCode();
}

function betterShadeGrey(){
    var imgCh4 = new Picture("img/nous.jpg");
    imgCh4.setCanvas('grey');
    var redValue=0;
    var greenValue=0;
    var blueValue=0;
    for (var i = 0; i < imgCh4.imgData.data.length; i += 4) {
        redValue=imgCh4.imgData.data[i]*0.299;
        greenValue=imgCh4.imgData.data[i+1]*0.587;
        blueValue=imgCh4.imgData.data[i+2]*0.114;
        var luminance = redValue+greenValue+blueValue;
        imgCh4.imgData.data[i] = luminance;
        imgCh4.imgData.data[i + 1] = luminance;
        imgCh4.imgData.data[i + 2] = luminance;
    }
    imgCh4.display();
    betterShadeGreyCode();
}



