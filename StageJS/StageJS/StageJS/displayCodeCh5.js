function changePixelColorNestedLoopCode(){
    document.getElementById('headPixelColor').innerHTML = 'function changePixelColorNestedLoopCode()';
    document.getElementById('codePixelColor').innerHTML = 
    "<pre>\
        <code>\
    function ChangePixelColorNestedLoop(){<br>\
            //init the canvas and the image<br>\
            var canevasModify = document.getElementById('changePixelColor');<br>\
            //normalise the caneva with the image<br>\
            canevasModify.width = img.width;<br>\
            canevasModify.height = img.height;<br>\
            var contextModify = canevasModify.getContext('2d');<br>\
            contextModify.drawImage(img, 0, 0);<br>\
            var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);<br>\
            var data = imgData.data;<br>\
            //loop through the rows (y direction)<br>\
            for (var row = 0; row < img.height; row++) {<br>\
                //loop through the cols (x direction)<br>\
                for (var col = 0; col<img.width; col++){<br>\
                    // get the pixel<br>\
                    var pixel = getPixel(col, row, img.width);<br>\
                    //do something to the color<br>\
                    data[pixel[0]] = 0; //red<br>\
                    data[pixel[1]] = 0; //green<br>\
                    data[pixel[2]] = 0; //blue<br>\
                }<br>\
            }<br>\
            contextModify.putImageData(imgData, 0, 0);<br>\
            changePixelColorNestedLoopCode();<br>\
        }<br>\
    } <br>\
        </code>\
    </pre>";
}

function lighten2WithNestedLoopCode(){
    document.getElementById('headLighten2').innerHTML = 'function lighten2WithNestedLoop()';
    document.getElementById('codeLighten2').innerHTML = 
    "<pre>\
        <code>\
    function lighten2WithNestedLoop() {<br>\
            //init the canvas and the image<br>\
            var canevasModify = document.getElementById('lighten2');<br>\
            //normalise the caneva with the image<br>\
            canevasModify.width = img.width;<br>\
            canevasModify.height = img.height;<br>\
            var contextModify = canevasModify.getContext('2d');<br>\
            contextModify.drawImage(img, 0, 0);<br>\
            var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);<br>\
            var data = imgData.data;<br>\
            //loop through the rows (y direction)<br>\
            for (var row = 0; row < img.height; row++) {<br>\
                //loop through the cols (x direction)<br>\
                for (var col = 0; col<img.width; col++){<br>\
                    // get the pixel<br>\
                    var pixel= getPixel(col, row, img.width);<br>\
                    //do something to the color<br>\
                    data[pixel[3]]*=0.5;<br>\
                }<br>\
            }<br>\
            contextModify.putImageData(imgData, 0, 0);<br>\
            lighten2WithNestedLoopCode();<br>\
        }<br>\
    } <br>\
        </code>\
    </pre>";
}

function mirrorVertialCode(){
    document.getElementById('headMirrorV').innerHTML = 'function mirrorVertial()';
    document.getElementById('codeMirrorV').innerHTML = 
    "<pre>\
        <code>\
    function mirrorVertial() {<br>\
            //init the canvas and the image<br>\
            var canevasModify = document.getElementById('mirrorVert');<br>\
            //normalise the caneva with the image<br>\
            canevasModify.width = img.width;<br>\
            canevasModify.height = img.height;<br>\
            var contextModify = canevasModify.getContext('2d');<br>\
            contextModify.drawImage(img, 0, 0);<br>\
            var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);<br>\
            var data = imgData.data;<br>\
            //loop through the rows (y direction)<br>\
            for (var row = 0; row < img.height; row++) {<br>\
                //loop through the cols (x direction)<br>\
                for (var col = 0; col<img.width/2; col++){<br>\
                    // get the pixel<br>\
                    var pixel = getPixel(col, row, img.width);<br>\
                    var target = getPixel(img.width-col, row, img.width);<br>\
                    //do something to the color<br>\
                    data[target[0]] = data[pixel[0]]; //red<br>\
                    data[target[1]] = data[pixel[1]]; //green<br>\
                    data[target[2]] = data[pixel[2]]; //blue<br>\
                    data[target[3]] = data[pixel[3]]; //alpha<br>\
                }<br>\
            }<br>\
            contextModify.putImageData(imgData, 0, 0);<br>\
            mirrorVertialCode();<br>\
        }<br>\
    } <br>\
        </code>\
    </pre>";
}

function mirrorHorizontalCode(){
    document.getElementById('headMirrorH').innerHTML = 'function mirrorHorizontal()';
    document.getElementById('codeMirrorH').innerHTML = 
    "<pre>\
        <code>\
    function mirrorHorizontal(){<br>\
            //init the canvas and the image<br>\
            var canevasModify = document.getElementById('mirrorHori');<br>\
            //normalise the caneva with the image<br>\
            canevasModify.width = img.width;<br>\
            canevasModify.height = img.height;<br>\
            var contextModify = canevasModify.getContext('2d');<br>\
            contextModify.drawImage(img, 0, 0);<br>\
            var imgData = contextModify.getImageData(0, 0, canevasModify.width, canevasModify.height);<br>\
            var data = imgData.data;<br>\
            canevasModify.height = img.height;<br>\
            canevasModify.width = img.width;<br>\
            //loop through the height (y direction)<br>\
            for (var row = 0; row < img.height/2; row++) {<br>\
                //loop through the cols (x direction)<br>\
                for (var col = 0; col<img.width; col++){<br>\
                    // get the pixel<br>\
                    var pixel = getPixel(col, row, img.width);<br>\
                    var target = getPixel(col, img.height-row, img.width);<br>\
                    //do something to the color<br>\
                    data[target[0]] = data[pixel[0]]; //red<br>\
                    data[target[1]] = data[pixel[1]]; //green<br>\
                    data[target[2]] = data[pixel[2]]; //blue<br>\
                    data[target[3]] = data[pixel[3]]; //alpha<br>\
                }<br>\
            }<br>\
            contextModify.putImageData(imgData, 0, 0);<br>\
            mirrorHorizontalCode();<br>\
        }<br>\
    } <br>\
        </code>\
    </pre>";
}

