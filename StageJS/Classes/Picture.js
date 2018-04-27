/**
 * Return if the variable is correctly initialised
 * @param {String} name - the name of the variable
 * @param {int} nb - the value of the variable
 * @param {int} min - the minimal value possible of the variable
 * @param {int} max - the maximal value possible of the variable
 * @returns {boolean} the answer
 */
function isCorrect(name, nb, min, max) {
    var ok = false;
    if (nb != null) {
        if (nb >= min && nb <= max) {
            ok = true;
        }
        else {
            window.alert("Be carefull, the variable " + name + " must be between " + min + " and " + max + " !");
        }
    }
    else {
        window.alert("Be carefull, the variable " + name + " must be initialized !");
    }
    return ok;
}

/**
 * Function used to waiting
 * @param {int} ms - the time in ms to wait
 */
function wait(ms){
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}

/**
 * Return an image which have a source path and the data of this image
 * @param {String} path - the path source of the image
 * @returns {[Image, ImageData]} the image and its data
 */
function getImage(path){
    var image = new Image();
    image.src = path;
    var tab = getImageData(image);
    return [image, tab];
}

/**
 * Return the context of the data of an image
 * @param {String} image - the image which have a path source
 * @returns {ImageData} the context of the data of an image
 */
function getImageData(image){
    var canvas = document.createElement('canvas');
    canvas.id = 'source';
    canvas.setAttribute("width", image.width);
    canvas.setAttribute("height", image.height);
    document.body.appendChild(canvas);
    canvas.style.display = "none";
    var context2d = canvas.getContext('2d');
    context2d.drawImage(image, 0, 0);
    return context2d.getImageData(0, 0, image.width, image.height);
}

/**
 * Return the value of red, green, blue and alpha of the pixel
 * @param {int} x - the coordinate x of the pixel in the image between 0 and width-1
 * @param {int} y - the coordinate y of the pixel in the image between 0 and height-1
 * @param {int} width - the width of the image
 * @returns {[int, int, int, int]} the value of red, green, blue and alpha of the pixel
 */
function getPixelIndices(x, y, width){
    var colorIndice = y * (width * 4) + x * 4;
    return [colorIndice, colorIndice+1, colorIndice+2, colorIndice+3];
}

/**
 * Class Picture which create a picture with a source path and a time of waiting
 * @param {String} path - the path source of the image
 * @param {boolean} wait - if is it is necessary to wait the download of the image
 * @constructor
 */
function Picture(path, wait = true){
    if(wait == true){
        wait(500);
    }
    var promise = getImage(path);
    this.source = promise[0];
    this.height = this.source.height;
    this.width = this.source.width;
    this.imgData = promise[1];
    this.canvas = document.getElementById('source');
    this.context = this.canvas.getContext('2d');

    /**
     * Return a new pixel with a value of red, green, blue and alpha and with coordinate x and y
     * @param {int} x - the coordinate x of the pixel in the picture
     * @param {int} y - the coordinate y of the pixel in the picture
     * @returns {Pixel} the new pixel with all information
     */
    this.getPixel = function (x, y){
        var colorIndice = y * (this.width * 4) + x * 4;
        return new Pixel(this.imgData.data[colorIndice], this.imgData.data[colorIndice+1], this.imgData.data[colorIndice+2], this.imgData.data[colorIndice+3], x, y);
    };

    /**
     * Set the pixel with news values of red, green, blue, alpha, news coordinates of x and y
     * @param {int} r - the new value of red of the pixel between 0 and 255
     * @param {int} g - the new value of green of the pixel between 0 and 255
     * @param {int} b - the new value of blue of the pixel between 0 and 255
     * @param {int} a - the new value of alpha of the pixel between 0 and 255
     * @param {int} x - the new coordinate x of the pixel between 0 and width-1
     * @param {int} y - the new coordinate y of the pixel between 0 and height-1
     */
    this.setPixel = function(r, g, b, a, x, y){
        if (isCorrect(posX, x, 0, this.width)){
            if (isCorrect(posY, y, 0, this.height)){
                var pixIndice = getPixelIndices(x, y, this.width);
                this.imgData.data[pixIndice[0]] = 0;
                this.imgData.data[pixIndice[1]] = 0;
                this.imgData.data[pixIndice[2]] = 0;
                this.imgData.data[pixIndice[3]] = 0;
                if (isCorrect("red", r, 0, 255)) {
                    this.data[pixIndice[0]] = r;
                }
                if (isCorrect("green", g, 0, 255)) {
                    this.data[pixIndice[1]] = g;
                }
                if (isCorrect("blue", b, 0, 255)) {
                    this.data[pixIndice[2]] = b;
                }
                if (isCorrect("alpha", a, 0, 255)) {
                    this.data[pixIndice[3]] = a;
                }
            }
        }
    };

    /**
     * Display the picture in the canevas
     */
    this.display = function(){
        this.context.putImageData(this.imgData, 0, 0);
        this.canvas.style.display = "inline";
    };

    /**
     * Redraw the image in its canevas
     */
    this.redraw = function(){
        this.display()
    };

    /**
     * Return all information about the picture
     * @returns {string} all information about the picture
     */
    this.toString = function(){
        return "Path source : " + this.source + "\nWidth : " + this.width + "\nHeight : " + this.height;
    };
}

/**
 * Function used to load a bigger image which need more time to load
 * @param {String} path - the path source of the image
 * @returns {Promise} the load of the image
 */
function createPicture(path){
    return new Promise(function(resolve, reject)
    {
        var pic = new Picture(path, false);
        resolve(pic);
    });
}