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

function mirrorHorizontalTopToBottomCode(){
    document.getElementById('headMirrorHTB').innerHTML = 'function mirrorHorizontalTopToBottom()';
    document.getElementById('codeMirrorHTB').innerHTML = 
    "<pre>\
        <code>\
    function mirrorHorizontalTopToBottom(){<br>\
            //init the canvas and the image<br>\
            var canevasModify = document.getElementById('mirrorHoriTB');<br>\
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
            for (var row = 0; row < img.height/2; row++){<br>\
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
            mirrorHorizontalTopToBottomCode();<br>\
        }<br>\
    } <br>\
        </code>\
    </pre>";
}

function mirrorHorizontalBottomToTopCode(){
    document.getElementById('headMirrorHBT').innerHTML = 'function mirrorHorizontalBottomToTop()';
    document.getElementById('codeMirrorHBT').innerHTML = 
    "<pre>\
        <code>\
    function mirrorHorizontalBottomToTop(img){<br>\
            //init the canvas and the image<br>\
            var canevasModify = document.getElementById('modify');<br>\
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
                    var pixel = getPixel(col, img.height-row, img.width);<br>\
                    var target = getPixel(col, row, img.width);<br>\
                    //do something to the color<br>\
                    data[target[0]] = data[pixel[0]]; //red<br>\
                    data[target[1]] = data[pixel[1]]; //green<br>\
                    data[target[2]] = data[pixel[2]]; //blue<br>\
                    data[target[3]] = data[pixel[3]]; //alpha<br>\
                }<br>\
            }<br>\
            contextModify.putImageData(imgData, 0, 0);<br>\
        }<br>\
    } <br>\
        </code>\
    </pre>";
}

function mirrorTemplePartVerticalCode(){
    document.getElementById('headMirrorTVertical').innerHTML = 'function mirrorTemplePartVertical()';
    document.getElementById('codeMirrorTVertical').innerHTML = 
    "<pre>\
        <code>\
    function mirrorTemplePartVertical() {<br>\
            var mirrorPoint = 768;<br>\
            //init the canvas and the image<br>\
            var canevasModify = document.getElementById('templePartVertical');<br>\
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
            for (var row = 110; row < 310; row++) {<br>\
                //loop through the cols (x direction)<br>\
                for (var col = 1; col < 770; col++){<br>\
                    // get the pixel<br>\
                    var pixel = getPixel(mirrorPoint-col, row, img.width);<br>\
                    var target = getPixel(mirrorPoint+col, row, img.width);<br>\
                    //do something to the color<br>\
                    data[target[0]] = data[pixel[0]]; //red<br>\
                    data[target[1]] = data[pixel[1]]; //green<br>\
                    data[target[2]] = data[pixel[2]]; //blue<br>\
                    data[target[3]] = data[pixel[3]]; //alpha<br>\
                }<br>\
            }<br>\
            contextModify.putImageData(imgData, 0, 0);<br>\
            mirrorTemplePartVerticalCode();<br>\
        }<br>\
    } <br>\
        </code>\
    </pre>";
}

function copyPictureCode(){
    document.getElementById('headCopyPicture').innerHTML = 'function copyPicture()';
    document.getElementById('codeCopyPicture').innerHTML = 
    "<pre>\
        <code>\
    function copyPicture() {<br>\
            var base = document.getElementById('copyP');<br>\
            //normalise the caneva with the image<br>\
            base.width = img.width;<br>\
            base.height = img.height;<br>\
            var context_base = base.getContext('2d');<br>\
            context_base.drawImage(img, 0, 0);<br>\
            var source= context_base.getImageData(0, 0,base.width, base.height);<br>\
            var canevasModify = document.getElementById(\"modify\");<br>\
            //normalise the caneva with the image<br>\
            canevasModify.width = img.width;<br>\
            canevasModify.height = img.height;<br>\
            var contextModify = canevasModify.getContext(\"2d\");<br>\
            //normalise the caneva with the image<br>\
            canevasModify.width = img.width;<br>\
            canevasModify.height = img.height;<br>\
            var target= contextModify.createImageData(img.width, img.height);<br>\
            for (var row = 0; row < img.height; row ++) {<br>\
                //loop through the cols (x direction)<br>\
                for (var col=0; col<img.width; col ++){<br>\
                    // get the pixel<br>\
                    var pixel= getPixel(col,row,img.width);<br>\
                    target.data[pixel[0]]=source.data[pixel[0]];<br>\
                    target.data[pixel[1]]=source.data[pixel[1]];<br>\
                    target.data[pixel[2]]=source.data[pixel[2]];<br>\
                    target.data[pixel[3]]=source.data[pixel[3]];<br>\
                    contextModify.putImageData(target, 0, 0);<br>\
                }<br>\
            }<br>\
        }<br>\
    } <br>\
        </code>\
    </pre>";
}

function copyPictureMidwayCode(){
    document.getElementById('headCopyPM').innerHTML = 'function copyPictureMidway()';
    document.getElementById('codeCopyPM').innerHTML = 
    "<pre>\
        <code>\
    function copyPictureMidway() {<br>\
            var base = document.getElementById('base');<br>\
            //normalise the caneva with the image<br>\
            base.width = img.width;<br>\
            base.height = img.height;<br>\
            var context_base = base.getContext('2d');<br>\
            context_base.drawImage(img, 0, 0);<br>\
            var source= context_base.getImageData(0, 0,base.width, base.height);<br>\
            var canevasModify = document.getElementById(\"copyPM\");<br>\
            //normalise the caneva with the image<br>\
            canevasModify.width = img.width;<br>\
            canevasModify.height = img.height;<br>\
            var contextModify = canevasModify.getContext(\"2d\");<br>\
            //normalise the caneva with the image<br>\
            canevasModify.width = 1000;<br>\
            canevasModify.height = 1000;<br>\
            var target= contextModify.createImageData(img.width, img.height);<br>\
            for (var row = 0; row < img.height; row ++) {<br>\
                //loop through the cols (x direction)<br>\
                for (var col=0; col<img.width; col ++){<br>\
                    // get the pixel<br>\
                    var pixel= getPixel(col,row,img.width);<br>\
                    target.data[pixel[0]]=source.data[pixel[0]];<br>\
                    target.data[pixel[1]]=source.data[pixel[1]];<br>\
                    target.data[pixel[2]]=source.data[pixel[2]];<br>\
                    target.data[pixel[3]]=source.data[pixel[3]];<br>\
                }<br>\
            }<br>\
            contextModify.putImageData(target, 100, 100);<br>\
            copyPictureMidwayCode();<br>\
        }<br>\
    } <br>\
        </code>\
    </pre>";
}

function copyPictureSmallPartCode(){
    document.getElementById('headCopySP').innerHTML = 'function copyPictureSmallPart()';
    document.getElementById('codeCopySP').innerHTML = 
    "<pre>\
        <code>\
    function copyPictureSmallPart() {<br>\
            var base = document.getElementById('base');<br>\
            //normalise the caneva with the image<br>\
            base.width = img.width;<br>\
            base.height = img.height;<br>\
            var context_base = base.getContext('2d');<br>\
            context_base.drawImage(img, 0, 0);<br>\
            var source= context_base.getImageData(0, 0,base.width, base.height);<br>\
            var canevasModify = document.getElementById(\"copySM\");<br>\
            //normalise the caneva with the image<br>\
            canevasModify.width = img.width;<br>\
            canevasModify.height = img.height;<br>\
            var contextModify = canevasModify.getContext(\"2d\");<br>\
            //normalise the caneva with the image<br>\
            canevasModify.width = img.width;<br>\
            canevasModify.height = img.height;<br>\
            var target= contextModify.createImageData(img.width, img.height);<br>\
            for (var row = 0; row < 170; row ++) {<br>\
                //loop through the cols (x direction)<br>\
                for (var col=70; col<260; col ++){<br>\
                    // get the pixel<br>\
                    var pixel= getPixel(col,row,img.width);<br>\
                    target.data[pixel[0]]=source.data[pixel[0]];<br>\
                    target.data[pixel[1]]=source.data[pixel[1]];<br>\
                    target.data[pixel[2]]=source.data[pixel[2]];<br>\
                    target.data[pixel[3]]=source.data[pixel[3]];<br>\
                }<br>\
            }<br>\
            contextModify.putImageData(target, 0, 0);<br>\
            copyPictureSmallPartCode();<br>\
        }<br>\
    } <br>\
        </code>\
    </pre>";
}


function copyAndLeftRotationCode(){
    document.getElementById('headCopyAndLeft').innerHTML = 'function copyAndLeftRotation()';
    document.getElementById('codeCopyAndLeft').innerHTML = 
    "<pre>\
        <code>\
    function copyAndLeftRotation() {<br>\
            var base = document.getElementById('base');<br>\
            var context_base = base.getContext('2d');<br>\
            context_base.drawImage(img, 0, 0);<br>\
            var source = context_base.getImageData(0, 0, base.width, base.height);<br>\
            var canevasModify = document.getElementById(\"copyAndLeft\");<br>\
            var contextModify = canevasModify.getContext(\"2d\");<br>\
            //normalise the caneva with the image<br>\
            canevasModify.width = img.width;<br>\
            canevasModify.height = img.height;<br>\
            var target = contextModify.createImageData(img.width, img.height);<br>\
            //loop through the cols (x direction)<br>\
            for (var col = 0; col<img.width; col++){<br>\
                //loop through the cols (x direction)<br>\
                for (var row = 0; row < img.height; row++) {<br>\
                    // get the pixel<br>\
                    var pixel = getPixel(col, row, img.width);<br>\
                    var cible = getPixel(row, img.width-1-col, img.width);<br>\
                    target.data[cible[0]] = source.data[pixel[0]];<br>\
                    target.data[cible[1]] = source.data[pixel[1]];<br>\
                    target.data[cible[2]] = source.data[pixel[2]];<br>\
                    target.data[cible[3]] = source.data[pixel[3]];<br>\
                }<br>\
            }<br>\
            contextModify.putImageData(target, 0, 0);<br>\
            copyAndLeftRotationCode();<br>\
        }<br>\
    } <br>\
        </code>\
    </pre>";
}


function scaleUpCode(){
    document.getElementById('headScale').innerHTML = 'function scaleUp()';
    document.getElementById('codeScale').innerHTML = 
    "<pre>\
        <code>\
    function scaleUp() {<br>\
            var time = 2;<br>\
            var factor = 1/time;<br>\
            var base = document.getElementById('base');<br>\
            var context_base = base.getContext('2d');<br>\
            var source = context_base.getImageData(0, 0,base.width, base.height);<br>\
            var canevasModify = document.getElementById(\"scale\");<br>\
            console.log(canevasModify.width, ' -  ', canevasModify.height);<br>\
            //normalise the caneva with the image<br>\
            canevasModify.width = img.width*time;<br>\
            canevasModify.height = img.height*time;<br>\
            console.log(canevasModify.width, ' -  ', canevasModify.height);<br>\
            var contextModify = canevasModify.getContext(\"2d\");<br>\
            var target = contextModify.createImageData(canevasModify.width, canevasModify.height);<br>\
            //loop through the cols (x direction)<br>\
            for (var col = 0; col < img.width; col++){<br>\
                //loop through the cols (y direction)<br>\
                for (var row = 0; row < img.height; row++) {<br>\
                    // get the pixel<br>\
                    var pixel = getPixel(col, row, img.width);<br>\
                    for (var colT = col*time; colT < (col*time)+time; colT++) {<br>\
                        for (var rowT = row*time; rowT < (row*time)+time; rowT++) {<br>\
                            var pixelT = getPixel(colT, rowT, img.width*time);<br>\
                            target.data[pixelT[0]] = source.data[pixel[0]];<br>\
                            target.data[pixelT[1]] = source.data[pixel[1]];<br>\
                            target.data[pixelT[2]] = source.data[pixel[2]];<br>\
                            target.data[pixelT[3]] = source.data[pixel[3]];<br>\
                        }<br>\
                    }<br>\
                }<br>\
            }<br>\
            contextModify.putImageData(target, 0, 0);<br>\
            scaleUpCode();<br>\
        }<br>\
    } <br>\
        </code>\
    </pre>";
}
