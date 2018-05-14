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
        console.log(this.audioCxt);
        if(this.audioCxt.state == "suspended"){
            this.audioCxt.resume();
        }
        else{
            if(this.source == null){
                this.source=this.audioCxt.createBufferSource();
            }
            this.source.loop=loop;
            this.source.buffer = this.soundBuffer;
            this.source.connect(this.audioCxt.destination);
            this.source.start(0);
            console.log(this.audioCxt);
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
            thus.play();
        };
        var stopButton= document.createElement("BUTTON");
        var t1= document.createTextNode("Stop")
        stopButton.appendChild(t1);
        document.body.appendChild(stopButton);
        stopButton.onclick=function () {
            thus.audioCxt.suspend();
        };
        var loopButton= document.createElement("BUTTON");
        var t= document.createTextNode("Loop")
        loopButton.appendChild(t);
        document.body.appendChild(loopButton);
        loopButton.onclick=function () {
            thus.play(true);
        };
    }
}