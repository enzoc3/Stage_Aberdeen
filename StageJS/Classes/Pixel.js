function Pixel(r, g, b, a, x, y){
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.x = x;
    this.y = y;
}

var pix = new Pixel(10,10,10,0,0,0);

console.log(pix);