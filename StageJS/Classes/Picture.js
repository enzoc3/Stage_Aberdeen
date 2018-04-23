var image=new Image();
image.src="resources/download.jpg";

function Picture(src){
    this.source=src;
    //document.getElementById('ladiv').innerHTML = '<canvas id="test"></canvas>';
    
    this.canvasdeTest= document.createElement("canvas");
    var contextdeTest=canvasdeTest.getContext('2d');
    contextdeTest.drawImage(src,0,0);
    src.style.display='none';
    this.height=src.height;
    this.width=src.width;
    this.arrayPixel=[];
    for(var i=0;i<width*4;i++){
        /* premier tableau */ 
        for(var j=0;j<width;j++){
            /*second tableau*/
            tab[j] = [];
            for(var k=0;k<height;k++){
                tab[j][k]=tab[i];
            }
        }
    }
};

var test = new Picture(image);

console.log(test.height);