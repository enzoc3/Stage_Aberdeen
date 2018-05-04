/**
 * Created by 1715844 on 01/05/2018.
 */
function wait(ms){
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}
window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
function animate(picture){
    window.requestAnimationFrame(function(){
        picture.display();
    });
}

function gif(canvas,adapt=true,width=500,height=500){
    this.frame=[];
    this.canvas=canvas;
    if(adapt !=true){
        this.canvas.setAttribute("width",width);
        this.canvas.setAttribute("height",height);
    }
    this.canvas.style.display = "inline";
    this.isPlaying=false;
    this.addFrame=function(picture){
        picture.setCanvas(this.canvas,adapt);
        this.frame.push(picture);
    };
    this.getFrame=function(){
        var res=this.frame;
        return res;
    };
    this.play=function (framePerSecond) {
        this.isPlaying=true
        var delay=(1/framePerSecond)*1000;
        var frame= this.frame;
        animate(frame[0]);
        var i=1
        var run=setInterval(function(){
            animate(frame[i]);
            i++;
            if(i==frame.length-1 || this.isPlaying == false){
                frame[i].clearCanvas();
                clearInterval(run);
            }
        },delay);

    };
    this.playInLoop=function (framePerSecond) {
        this.isPlaying=true;
        thus=this;
        var delay=(1/framePerSecond)*1000;
        var frame= this.frame;
        var i=0
        var runInLoop=setInterval(function(){
            animate(frame[i]);
            i++;
            if(i==frame.length-1){
                i=0;
            }
            if (thus.isPlaying==false){
                frame[i].clearCanvas();
                clearInterval(runInLoop);
            }
        },delay);
    };
    this.playFor=function (framePerSecond, time) {
        this.isPlaying=true;
        thus=this;
        var delay=(1/framePerSecond)*1000;
        var frame= this.frame;
        var i=0
        var start = Date.now();
        var now = start;
        var runFor=setInterval(function(){
            animate(frame[i]);
            i++;
            if(i==frame.length-1){
                i=0;
            }
            if (thus.isPlaying==false || now - start >= time){
                frame[i].clearCanvas();
                clearInterval(runFor);
            }
            now=Date.now();
        },delay);
    };
    this.stop=function () {
        this.isPlaying=false;
    }
}