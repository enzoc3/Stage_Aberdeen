$(document).ready(function(){
    var code = $(".codemirror-div")[0];
    var elem = document.querySelector('.tooltipped');
    var instance = M.Tooltip.init(elem);
    var editor = CodeMirror(code, {
        lineNumbers : true,
        mode: "htmlmixed",
        value: "<!Doctype HTMl>\n\
        <html>\n\
            <head>\n\
            <!-- Please do not remove -->\n\
            <script type='text/javascript' src='js/Pixel.js'></script>\n\
            <script type='text/javascript' src='js/Picture.js'></script>\n\
            <script type='text/javascript' src='js/codeCh4.js'></script>\n\
            <script type='text/javascript' src='js/mousePosition.js'></script>\n\
            <!-- Please do not remove -->\n\
            </head>\n\
            <body>\n\
                <script>\n\
                    var pic=new Picture('resources/nous.jpg');\n\
                    pic.display();\n\
                </script>\n\
            </body>\n\
        </html>\n",
        theme: "dracula",
        extraKeys: {"Ctrl-Space" : "autocomplete"}
    });
    
    $('select').formSelect();

    $('#selectBtn').click(function(){
        var choice = document.getElementById("select");
        console.log(choice);
        var img = "resources/";
        if(choice = "group"){
            img += "nous.jpg";
        }
        if(choice = "magnificent temple"){
            img += "temple.jpg";
        }
        if(choice = "flower"){
            img += "download.jpg";
        }
        document.getElementById('origin').src = img;    
    });

    $("#btn").click (function()
    {
        var code = editor.getValue();
        var content = document.getElementById("editor").innerHTML;
        var iframe = document.getElementById("modified");

        M.toast({html: 'Generating...', classes: 'rounded', displayLength : 10})

        var frameDoc = iframe.document;
        if (iframe.contentWindow)
            frameDoc = iframe.contentWindow.document;




        frameDoc.open();
        frameDoc.writeln(code);
        frameDoc.close();

    });

    $("#modified").mouseover(function(e)
    {
        $(this).contents().find("canvas").mousemove(function(e){
            
            var eventLocation = getEventLocation(this,e);
            var coord = "x=" + eventLocation.x + ", y=" + eventLocation.y;
            
            var context = this.getContext("2d");
            var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1);
            var red = pixelData.data[0];
            var green = pixelData.data[1];
            var blue = pixelData.data[2];
            var res = "red: " +red + ", green: " + green + ", blue: " + blue + " " + coord;
            document.getElementById("affiche").innerHTML = res;
        });
    });
});


/**/