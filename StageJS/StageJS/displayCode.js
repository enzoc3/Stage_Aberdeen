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

function decreaseGreenCode(){
    document.getElementById('headDecreaseGreen').innerHTML = 'function decreaseGreen()';
    document.getElementById('codeDecreaseGreen').innerHTML = 
    "<pre>\
        <code>\
    function decreaseGreen(){<br>\
            var canvasDecreaseGreen = document.getElementById('decreaseGreen');<br>\
            var contextDecreaseGreen = canvasDecreaseGreen.getContext('2d');<br>\
            contextDecreaseGreen.drawImage(img, 0, 0);<br>\
            var imgData = contextDecreaseGreen.getImageData(0, 0, canvasDecreaseGreen.width, canvasDecreaseGreen.height);<br>\
            var data = imgData.data;<br>\
            for(var i = 0; i < data.length; i += 4){<br>\
                data[i+1] = data[i+1]*0.5;<br>\
            }<br>\
            contextDecreaseGreen.putImageData(imgData, 0, 0);<br>\
    } <br>\
        </code>\
    </pre>";
}

function decreaseBlueCode(){
    document.getElementById('headDecreaseBlue').innerHTML = 'function decreaseBlue()';
    document.getElementById('codeDecreaseBlue').innerHTML = 
    "<pre>\
        <code>\
    function decreaseBlue(){<br>\
            var canvasDecreaseBlue = document.getElementById('decreaseBlue');<br>\
            var contextDecreaseBlue = canvasDecreaseBlue.getContext('2d');<br>\
            contextDecreaseBlue.drawImage(img, 0, 0);<br>\
            var imgData = contextDecreaseBlue.getImageData(0, 0, canvasDecreaseBlue.width, canvasDecreaseBlue.height);<br>\
            var data = imgData.data;<br>\
            for(var i = 0; i < data.length; i += 4){<br>\
                data[i+2] = data[i+2]*0.5;<br>\
            }<br>\
            contextDecreaseBlue.putImageData(imgData, 0, 0);<br>\
    } <br>\
        </code>\
    </pre>";
}

function decreaseRedWhileCode(){
    document.getElementById('headDecreaseRedWhile').innerHTML = 'function whileDecreaseRed()';
    document.getElementById('codeDecreaseRedWhile').innerHTML = 
    "<pre>\
        <code>\
    function whileDecreaseRed(){<br>\
            var canvasWhileDecreaseRed = document.getElementById('decreaseRedWhile');<br>\
            var contextWhileDecreaseRed = canvasWhileDecreaseRed.getContext('2d');<br>\
            contextWhileDecreaseRed.drawImage(img, 0, 0);<br>\
            var imgData = contextWhileDecreaseRed.getImageData(0, 0, canvasWhileDecreaseRed.width, canvasWhileDecreaseRed.height);<br>\
            var data = imgData.data;<br>\
            var i=0;<br>\
            while(i<data.length){<br>\
                data[i] = data[i]*0.5;<br>\
                i+=4;<br>\
            }<br>\
            contextWhileDecreaseRed.putImageData(imgData, 0, 0);<br>\
    } <br>\
        </code>\
    </pre>";
}

function decreaseGreenWhileCode(){
    document.getElementById('headDecreaseGreenWhile').innerHTML = 'function whileDecreaseGreen()';
    document.getElementById('codeDecreaseGreenWhile').innerHTML = 
    "<pre>\
        <code>\
    function whileDecreaseGreen(){<br>\
            var canvasWhileDecreaseGreen = document.getElementById('decreaseGreenWhile');<br>\
            var contextWhileDecreaseGreen = canvasWhileDecreaseGreen.getContext('2d');<br>\
            contextWhileDecreaseGreen.drawImage(img, 0, 0);<br>\
            var imgData = contextWhileDecreaseGreen.getImageData(0, 0, canvasWhileDecreaseGreen.width, canvasWhileDecreaseGreen.height);<br>\
            var data = imgData.data;<br>\
            var i=1;<br>\
            while(i<data.length){<br>\
                data[i] = data[i]*0.5;<br>\
                i+=4;<br>\
            }<br>\
            contextWhileDecreaseGreen.putImageData(imgData, 0, 0);<br>\
    } <br>\
        </code>\
    </pre>";
}

function decreaseBlueWhileCode(){
    document.getElementById('headDecreaseBlueWhile').innerHTML = 'function whileDecreaseBlue()';
    document.getElementById('codeDecreaseBlueWhile').innerHTML = 
    "<pre>\
        <code>\
    function whileDecreaseBlue(){<br>\
            var canvasWhileDecreaseBlue = document.getElementById('decreaseBlueWhile');<br>\
            var contextWhileDecreaseBlue = canvasWhileDecreaseBlue.getContext('2d');<br>\
            contextWhileDecreaseBlue.drawImage(img, 0, 0);<br>\
            var imgData = contextWhileDecreaseBlue.getImageData(0, 0, canvasWhileDecreaseBlue.width, canvasWhileDecreaseBlue.height);<br>\
            var data = imgData.data;<br>\
            var i=2;<br>\
            while(i<data.length){<br>\
                data[i] = data[i]*0.5;<br>\
                i+=4;<br>\
            }<br>\
            contextWhileDecreaseBlue.putImageData(imgData, 0, 0);<br>\
    } <br>\
        </code>\
    </pre>";
}

function increaseRedCode(){
    document.getElementById('headIncreaseRed').innerHTML = 'function increaseRed()';
    document.getElementById('codeIncreaseRed').innerHTML = 
    "<pre>\
        <code>\
    function IncreaseRed(){<br>\
            var canvasIncreaseRed = document.getElementById('increaseRed');<br>\
            var contextIncreaseRed = canvasIncreaseRed.getContext('2d');<br>\
            contextIncreaseRed.drawImage(img, 0, 0);<br>\
            var imgData = contextIncreaseRed.getImageData(0, 0, canvasIncreaseRed.width, canvasIncreaseRed.height);<br>\
            var data = imgData.data;<br>\
            for(var i = 0; i < data.length; i += 4){<br>\
                data[i] = data[i]*2.5;<br>\
            }<br>\
            contextIncreaseRed.putImageData(imgData, 0, 0);<br>\
    } <br>\
        </code>\
    </pre>";
}

function clearBlueCode(){
    document.getElementById('headClearBlue').innerHTML = 'function clearBlue()';
    document.getElementById('codeClearBlue').innerHTML = 
    "<pre>\
        <code>\
    function clearBlue(){<br>\
            var canvasClearBlue = document.getElementById('clearBlue');<br>\
            var contextClearBlue = canvasClearBlue.getContext('2d');<br>\
            contextClearBlue.drawImage(img, 0, 0);<br>\
            var imgData = contextClearBlue.getImageData(0, 0, canvasClearBlue.width, canvasClearBlue.height);<br>\
            var data = imgData.data;<br>\
            var i=2;<br>\
            while(i<data.length){<br>\
                data[i] = 0;<br>\
                i+=4;<br>\
            }<br>\
            contextClearBlue.putImageData(imgData, 0, 0);<br>\
    } <br>\
        </code>\
    </pre>";
}