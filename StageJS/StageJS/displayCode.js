function greyCode(){
    document.getElementById('headGrey').innerHTML = 'function shadeGrey()';
    document.getElementById('codeGrey').innerHTML = 
    "<pre>\
        <code>\
    function shadeGrey(){<br>\
                var canevasGris = document.getElementById('grey');<br>\
                var contextGris = canevasGris.getContext('2d');<br>\
                contextGris.drawImage(img, 0, 0);<br>\
                var imgData = contextGris.getImageData(0, 0, canevasGris.width, canevasGris.height);<br>\
                var data = imgData.data;<br>\
                for (var i = 0; i < data.length; i += 4) {<br>\
                    var moy = (data[i] + data[i + 1] + data[i + 2]) / 3;<br>\
                    data[i] = moy;<br>\
                    data[i + 1] = moy;<br>\
                    data[i + 2] = moy;<br>\
                }<br>\
                contextGris.putImageData(imgData, 0, 0);<br>\
    } <br>\
        </code>\
    </pre>";
}

function InvertCode(){
    document.getElementById('headInvert').innerHTML = 'function invert()';
    document.getElementById('codeInvert').innerHTML = 
    "<pre>\
        <code>\
    function invert(){<br>\
        var canvasInvert = document.getElementById('invert');<br>\
        var contextInvert = canvasInvert.getContext('2d');<br>\
        contextInvert.drawImage(img, 0, 0);<br>\
        var imgData = contextInvert.getImageData(0, 0, canvasInvert.width, canvasInvert.height);<br>\
        var data = imgData.data;<br>\
        for(var i = 0; i < data.length; i += 4){<br>\
            data[i] = 255 - data[i];<br>\
            data[i + 1] = 255 - data[i + 1];<br>\
            data[i + 2] = 255 - data[i + 2];<br>\
        }<br>\
        contextInvert.putImageData(imgData, 0, 0);<br>\
    } <br>\
        </code>\
    </pre>";
}

function decreaseRedCode(){
    document.getElementById('headDecreaseRed').innerHTML = 'function decreaseRed()';
    document.getElementById('codeDecreaseRed').innerHTML = 
    "<pre>\
        <code>\
    function decreaseRed(){<br>\
            var canvasDecreaseRed = document.getElementById('decreaseRed');<br>\
            var contextDecreaseRed = canvasDecreaseRed.getContext('2d');<br>\
            contextDecreaseRed.drawImage(img, 0, 0);<br>\
            var imgData = contextDecreaseRed.getImageData(0, 0, canvasDecreaseRed.width, canvasDecreaseRed.height);<br>\
            var data = imgData.data;<br>\
            for(var i = 0; i < data.length; i += 4){<br>\
                data[i] = data[i]*0.5;<br>\
            }<br>\
            contextDecreaseRed.putImageData(imgData, 0, 0);<br>\
    } <br>\
        </code>\
    </pre>";
}