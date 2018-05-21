/**
 * Created by 1715844 on 09/05/2018.
 */

function Sound() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCxt = new AudioContext()
    this.source = null;
    this.soundBuffer  = null;
    this.nbChannels=null;
    this.duration=null;
    this.sampleRate=null;
    this.length=null;
    this.play = function (loop=false) {
        if(this.audioCxt.state == "suspended"){
            this.audioCxt.resume();
        }
        else{
            if (this.audioCxt.state =="closed"){
                this.audioCxt=new AudioContext();
                this.source=this.audioCxt.createBufferSource();
                this.source.loop=loop;
                this.source.buffer = this.soundBuffer;
                this.source.connect(this.audioCxt.destination);
                this.source.start(0);
            }
            if(this.source == null){
                this.source=this.audioCxt.createBufferSource();
                this.source.loop=loop;
                this.source.buffer = this.soundBuffer;
                this.source.connect(this.audioCxt.destination);
                this.source.start(0);
            }

        }
    };
    this.startAt = function(time){
        this.source=this.audioCxt.createBufferSource();
        this.source.buffer = this.soundBuffer;
        this.source.connect(this.audioCxt.destination);
        this.source.start(time);
    };
    this.setBuffer=function (buffer) {
        this.soundBuffer=buffer;
        this.nbChannels=this.soundBuffer.numberOfChannels;
        this.duration=this.soundBuffer.duration;
        this.sampleRate=this.soundBuffer.sampleRate;
        this.length=this.soundBuffer.length;
    };
    this.getSample=function (channelNb,sampleIndex){
        var chan=this.soundBuffer.getChannelData(channelNb);
        return chan[sampleIndex];
    }
    this.setSample=function (channelNb,sampleIndex,value){
        var chan=this.soundBuffer.getChannelData(channelNb);
        chan[sampleIndex]=value;
    }
    this.getChannel=function (channelNb) {
        return this.soundBuffer.getChannelData(channelNb);
    }
    this.setChannel=function (channelNb, array) {
        this.soundBuffer.copyToChannel(array,channelNb);
    }
    this.generatePlayer= function () {
        thus=this;
        var playButton= document.createElement("BUTTON");
        var t= document.createTextNode("Play")
        playButton.appendChild(t);
        document.body.appendChild(playButton);
        playButton.onclick=function () {
            if(playButton.style.backgroundColor==null){
                thus.play();
                playButton.style.backgroundColor="MediumSeaGreen";
                stopButton.style.backgroundColor=null;
                pauseButton.disabled=false;
                stopButton.disabled=false;
                stopButton.style.backgroundColor=null;
            }else if(pauseButton.style.backgroundColor="orange"){
                thus.play();
                loopButton.style.backgroundColor=null;
                playButton.style.backgroundColor="MediumSeaGreen";
                pauseButton.style.backgroundColor=null;
                pauseButton.disabled=false;
                stopButton.disabled=false;
                stopButton.style.backgroundColor=null;
            }
        };
        var stopButton= document.createElement("BUTTON");
        var t1= document.createTextNode("Stop")
        stopButton.appendChild(t1);
        document.body.appendChild(stopButton);
        stopButton.onclick=function () {
            thus.audioCxt.close();
            playButton.style.backgroundColor=null;
            loopButton.style.backgroundColor=null;
            stopButton.style.backgroundColor="tomato";
            pauseButton.disabled=true;
            stopButton.disabled=true;
        };
        var pauseButton= document.createElement("BUTTON");
        var t2= document.createTextNode("Pause")
        pauseButton.appendChild(t2);
        document.body.appendChild(pauseButton);
        pauseButton.onclick=function () {
            thus.audioCxt.suspend();
            console.log(thus.audioCxt);
            playButton.style.backgroundColor=null;
            loopButton.style.backgroundColor=null;
            pauseButton.style.backgroundColor="orange";
            pauseButton.disabled=true;
            stopButton.disabled=true;
        };
        var loopButton= document.createElement("BUTTON");
        var t= document.createTextNode("Loop")
        loopButton.appendChild(t);
        document.body.appendChild(loopButton);
        loopButton.onclick=function () {
            thus.play(true);
            playButton.style.backgroundColor=null;
            loopButton.style.backgroundColor="MediumSeaGreen";
            stopButton.style.backgroundColor=null;
            pauseButton.style.backgroundColor=null;
            pauseButton.disabled=false;
            stopButton.disabled=false;
        };
        pauseButton.disabled=true;
        stopButton.disabled=true;

    }
}