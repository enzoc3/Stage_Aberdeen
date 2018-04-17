var img = new Image();

img.src = "img/download.jpg"

img.onload = function(){
    dessiner(this);
    decreaseRed(this);
}

function shadeGrey(img){
    var canevasGris = document.getElementById('modify');
    var contextGris = canevasGris.getContext('2d');
    contextGris.drawImage(img, 0, 0);
    var imgData = contextGris.getImageData(0, 0, canevasGris.width, canevasGris.height);
    var data = imgData.data;
    for (var i = 0; i < data.length; i += 4) {
        var moy = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = moy;
        data[i + 1] = moy;
        data[i + 2] = moy;
    }
    contextGris.putImageData(imgData, 0, 0);
}

function invert(img){
    var canvasInvert = document.getElementById('modify');
    var contextInvert = canvasInvert.getContext('2d');
    contextInvert.drawImage(img, 0, 0);
    var imgData = contextInvert.getImageData(0, 0, canvasInvert.width, canvasInvert.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
    contextInvert.putImageData(imgData, 0, 0);
}

function decreaseRed(img){
    var canvasDecreaseRed = document.getElementById('modify');
    var contextDecreaseRed = canvasDecreaseRed.getContext('2d');
    contextDecreaseRed.drawImage(img, 0, 0);
    var imgData = contextDecreaseRed.getImageData(0, 0, canvasDecreaseRed.width, canvasDecreaseRed.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i] = data[i]*0.5;
    }
    contextDecreaseRed.putImageData(imgData, 0, 0);
}

function decreaseGreen(img){
    var canvasDecreaseGreen = document.getElementById('modify');
    var contextDecreaseGreen = canvasDecreaseGreen.getContext('2d');
    contextDecreaseGreen.drawImage(img, 0, 0);
    var imgData = contextDecreaseGreen.getImageData(0, 0, canvasDecreaseGreen.width, canvasDecreaseGreen.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i+1] = data[i+1]*0.5;
    }
    contextDecreaseGreen.putImageData(imgData, 0, 0);
}

function decreaseBlue(img){
    var canvasDecreaseBlue = document.getElementById('modify');
    var contextDecreaseBlue = canvasDecreaseBlue.getContext('2d');
    contextDecreaseBlue.drawImage(img, 0, 0);
    var imgData = contextDecreaseBlue.getImageData(0, 0, canvasDecreaseBlue.width, canvasDecreaseBlue.height);
    var data = imgData.data;
    for(var i = 0; i < data.length; i += 4){
        data[i+2] = data[i+2]*0.5;
    }
    contextDecreaseBlue.putImageData(imgData, 0, 0);
}


function dessiner(img){
    var base = document.getElementById('base');
    var context_base = base.getContext('2d');
    context_base.drawImage(img, 0, 0);
}
