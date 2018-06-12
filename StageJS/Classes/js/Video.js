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
});
function animate(picture){
    window.requestAnimationFrame(function(){
        picture.display();
    });
}

function FatalError(){ Error.apply(this, arguments); this.name = "FatalError"; }
FatalError.prototype = Object.create(Error.prototype);

function Gif(canvas,adapt=true,width=500,height=500){
    this.frame=[];
    this.canvas=canvas;
    document.body.appendChild(this.canvas);
    if(adapt !=true){
        this.canvas.setAttribute("width",width);
        this.canvas.setAttribute("height",height);
    }
    this.canvas.style.display = "inline";
    this.isPlaying=false;
    this.addFrame=function(picture){
        try{

            if(typeof picture.source=="undefined" || typeof picture!= "object" ){
                const err= new FatalError("The frame must be a Picture");
                throw err;
            }
            picture.setCanvas(this.canvas,adapt);
            this.frame.push(picture);
        }catch(err){
            window.alert("The frame must be a Picture");
            if(err instanceof FatalError) throw err;
        }
    };
    this.getFrame=function(){
        var res=this.frame;
        return res;
    };
    this.play=function (framePerSecond) {
        try{
            var numErr=0;
            var err;
            if(this.frame.length==0){
                err= new FatalError("No frame loaded.");
                numErr=1;
                throw err;
            }

            if(typeof framePerSecond != "number" ){
               err= new FatalError("framePerSecond must be a number and cannot be null");
               numErr=2;
               throw err;
            }
            this.isPlaying=true
            var delay=(1/framePerSecond)*1000;
            var frame= this.frame;
            animate(frame[0]);
            var i=1;
            var run=setInterval(function(){
                animate(frame[i]);
                i++;
                if(i==frame.length-1 || this.isPlaying == false){
                    frame[i].clearCanvas();
                    clearInterval(run);
                }
            },delay);
        }catch (err){
            switch(numErr) {
                case 1:
                    window.alert("No frame loaded.");
                    break;
                case 2:
                    window.alert("framePerSecond must be a number and cannot be null.");
                    break;
                default:
                    window.alert("Unkmown Error try lookink at the console.");
            }
            if(err instanceof FatalError) throw err;
        }
    };
    this.playInLoop=function (framePerSecond) {
        try{
            var numErr=0;
            var err;
            if(this.frame.length==0){
                err= new FatalError("No frame loaded.");
                numErr=1;
                throw err;
            }

            if(typeof framePerSecond != "number" ){
                err= new FatalError("framePerSecond must be a number and cannot be null");
                numErr=2;
                throw err;
            }
            this.isPlaying=true;
            thus=this;
            var delay=(1/framePerSecond)*1000;
            this.frame;

            var i=0;
            var runInLoop=setInterval(function(){
                animate(thus.frame[i]);
                i++;
                if(i==thus.frame.length-1){
                    i=0;
                }
                if (thus.isPlaying==false){
                    thus.frame[i].clearCanvas();
                    clearInterval(runInLoop);
                }
            },delay);
        }catch (err){
            switch(numErr) {
                case 1:
                    window.alert("No frame loaded.");
                    break;
                case 2:
                    window.alert("framePerSecond must be a number and cannot be null.");
                    break;
                default:
                    window.alert("Unkmown Error try lookink at the console.");
            }
            if(err instanceof FatalError) throw err;
        }
    };
    this.playFor=function (framePerSecond, time) {
        try{
            var numErr=0;
            var err;
            if(this.frame.length==0){
                err= new Error("No frame loaded.");
                numErr=1;
                throw err;
            }
            if(typeof framePerSecond != "number" ){
                err= new Error("framePerSecond must be a number and cannot be null");
                numErr=2;
                throw err;
            }
            if(typeof time!= "number" ){
                err= new Error("time must be a number and cannot be null");
                numErr=3;
                throw err;
            }
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
                if (thus.isPlaying==false || now - start >= time*1000){
                    frame[i].clearCanvas();
                    clearInterval(runFor);
                }
                now=Date.now();
            },delay);
        }catch (err){
            switch(numErr) {
                case 1:
                    window.alert("No frame loaded.");
                    break;
                case 2:
                    window.alert("framePerSecond must be a number and cannot be null.");
                    break;
                case 3:
                    window.alert("time must be a number and cannot be null.");
                    break;
                default:
                    window.alert("Unkmown Error try lookink at the console.");
            }
            if(err instanceof FatalError) throw err;
        }
    };
    this.stop=function () {
        this.isPlaying=false;
    };
}