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
            <script type='text/javascript' src='js/Movie.js'></script>\n\
            <!-- Please do not remove -->\n\
            </head>\n\
            <body>\n\
                <script>\n\
                    var frame2=new Picture('resources/star3.png');\n\
                    var frame3=new Picture('resources/star4.png');\n\
                    var frame4=new Picture('resources/star5.png');\n\
                    var frame5=new Picture('resources/star6.png');\n\
                    var canvas = document.createElement('canvas');\n\
                    var gif= new Gif(canvas);\n\
                    for(var i=0;i<30*0.5;i++){\n\
                        gif.addFrame(frame2);\n\
                    }\n\
                    for(var i=0;i<30*0.5;i++){\n\
                        gif.addFrame(frame3);\n\
                    }\n\
                    for(var i=0;i<30*0.5;i++){\n\
                        gif.addFrame(frame4);\n\
                    }\n\
                    for(var i=0;i<30*0.5;i++){\n\
                        gif.addFrame(frame5);\n\
                    }\n\
                    gif.playInLoop();\n\
                </script>\n\
            </body>\n\
        </html>\n",
        theme: "dracula",
        extraKeys: {"Ctrl-Space" : "autocomplete"}
    });

    $("#btn").click (function()
    {
        var code = editor.getValue();
        var iframe = document.getElementById("modified");

        var frameDoc = iframe.document;
        if (iframe.contentWindow)
            frameDoc = iframe.contentWindow.document;

        frameDoc.open();
        frameDoc.writeln("");
        frameDoc.writeln("<!Doctype HTMl>\n\
        <html>\n\
        <head>\n\
        <!-- PRELOAD -->\n\
        <img src='resources/star3.png' style='display: none;'>\n\
        <img src='resources/star4.png' style='display: none;'>\n\
        <img src='resources/star5.png' style='display: none;'>\n\
        <img src='resources/star6.png' style='display: none;'>\n\
        <!-- End of Preload -->\n\
        </head>\n\
        </html>\n\
        ");
        frameDoc.writeln(code);
        frameDoc.close();

    });

});



//$(window).on("load", function(){ });