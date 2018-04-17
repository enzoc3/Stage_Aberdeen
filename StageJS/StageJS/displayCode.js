
document.getElementById('codeGrey').innerHTML = 
"<pre>\
    <code>\
        function shadeGrey(){\
        var canevasGris = document.getElementById('grey');\
        var contextGris = canevasGris.getContext('2d');\
        contextGris.drawImage(img, 0, 0);\
        var imgData = contextGris.getImageData(0, 0, canevasGris.width, canevasGris.height);\
        var data = imgData.data;\
        for (var i = 0; i < data.length; i += 4) {\
            var moy = (data[i] + data[i + 1] + data[i + 2]) / 3;\
            data[i] = moy;\
            data[i + 1] = moy;\
            data[i + 2] = moy;\
        }\
        contextGris.putImageData(imgData, 0, 0);\
        } \
    </code>\
</pre>";