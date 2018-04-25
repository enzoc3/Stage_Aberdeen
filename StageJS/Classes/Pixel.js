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
            window.alert("Be carefull, the variable " + name + " of the pixel must be between " + min + " and " + max + " !");
        }
    }
    else {
        window.alert("Be carefull, the variable " + name + " of the pixel must be initialize !");
    }
    return ok;
}

/**
 * Creation of a pixel with its values of red, green, blue, alpha, its coordinates in x and y
 * @param {int} r - the value of red in the pixel between 0 and 255
 * @param {int} g - the value of green in the pixel between 0 and 255
 * @param {int} b - the value of blue in the pixel between 0 and 255
 * @param {int} a - the value of alpha in the pixel between 0 and 255
 * @param {int} x - the coordinate x of the pixel between 0 and the width-1 of the picture
 * @param {int} y - the coordinate y of the pixel between 0 and the height-1 of the picture
 * @constructor
 */
function Pixel(r, g, b, a, x, y){
    this.red = 0;
    this.green = 0;
    this.blue = 0;
    this.alpha = 0;
    if (isCorrect("red", r, 0, 255)) {
        this.red = r;
    }
    if (isCorrect("green", g, 0, 255)) {
        this.green = g;
    }
    if (isCorrect("blue", b, 0, 255)) {
        this.blue = b;
    }
    if (isCorrect("alpha", a, 0, 255)) {
        this.alpha = a;
    }
    this.posX = x;
    this.posY = y;

    /**
     * Return the values of red, green, blue of the pixel
     * @returns {[int, int, int, int]} values of red, green, blue, alpha of the pixel
     */
    this.getColor = function() {
        return [this.red, this.green, this.blue, this.alpha];
    };

    /**
     * Return the coordinates x and y of the pixel
     * @returns {[int, int]} coordinates x and y of the pixel in the picture
     */
    this.getPos = function() {
        return [this.posX, this.posY];
    };

    /**
     * Set news values of red, green, blue and alpha of the pixel
     * @param {int} newRed - the new value of red of the pixel between 0 and 255
     * @param {int} newGreen - the new value of green of the pixel between 0 and 255
     * @param {int} newBlue - the new value of blue of the pixel between 0 and 255
     * @param {int} newAlpha - the new value of alpha of the pixel between 0 and 255
     */
    this.setColor = function(newRed, newGreen, newBlue, newAlpha) {
        if (isCorrect("red", newRed, 0, 255)) {
            this.red = newRed;
        }
        if (isCorrect("green", newGreen, 0, 255)) {
            this.green = newGreen;
        }
        if (isCorrect("blue", newBlue, 0, 255)) {
            this.blue = newBlue;
        }
        if (isCorrect("alpha", newAlpha, 0, 255)) {
            this.alpha = newAlpha;
        }
    };

    /**
     * Set the news coordinates x and y of the pixel in the picture
     * @param {int} newPosX - the new coordinate x of the pixel between 0 and width-1 in the picture
     * @param {int} newPosY - the new coordinate y of the pixel between 0 and height-1 in the picture
     */
    this.setPos = function(newPosX, newPosY){
        this.posX = newPosX;
        this.posY = newPosY;
    };

    /**
     * Return all of information about the pixel
     * @returns {string} all information about the pixel
     */
    this.toString = function() {
        return "Red : " + this.red + "\nGreen : " + this.green + "\nBlue : " + this.blue + "\nAlpha : " + this.alpha + "\nX : " + this.posX + "\nY : " + this.posY;
    };
};

var p = new Pixel(255, 25, -10, 0, 400, 200);
console.log(p.toString());