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
            <script type='text/javascript' src='js/Pixel.js'></script>\n\
            <script type='text/javascript' src='js/Picture.js'></script>\n\
            <script type='text/javascript' src='js/codeCh4.js'></script>\n\
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
  
    
});



