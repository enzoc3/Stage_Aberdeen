$(document).ready(function(){
    var code = $(".codemirror-div")[0];
    var editor = CodeMirror(code, {
        lineNumbers : true,
        mode: "htmlmixed",
        value: "<!Doctype HTMl> \n<html>\n\t<head>\n\n\t</head>\n</html>",
        theme: "dracula",
        extraKeys: {"Ctrl-Space" : "autocomplete"}
    });

    $("#btn").click (function()
    {
        var code = editor.getValue();
        var content = document.getElementById("test").innerHTML;
        var iframe = document.getElementById("result");

        var frameDoc = iframe.document;
        if (iframe.contentWindow)
            frameDoc = iframe.contentWindow.document;

        frameDoc.open();
        frameDoc.writeln(code);
        frameDoc.close();

    });
    
    
});

