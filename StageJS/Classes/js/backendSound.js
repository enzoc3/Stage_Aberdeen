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
            <script type='text/javascript' src='js/Sound.js'></script>\n\
            <!-- Please do not remove -->\n\
            </head>\n\
            <body>\n\
                <script>\n\
                var son = new Sound();\n\
                for(var i = 0; i<son.nbChannels; i++){\n\
                  for(var j = 0; j <son.length; j++){\n\
                    son.setSample(i, j, son.getSample(i, j)*10);\n\
                  }\n\
                }\n\
                son.generatePlayer();\n\
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
        code = modifyCode(code);
        frameDoc.writeln(code);
        frameDoc.close();

    });

    function modifyCode(code){
        var tab = code.split("\n");
        var rqst = "request";
        var choice = $('select').val();
        for(var i = 0; i < tab.length; i++){
            var tmp = tab[i].split(" ");
            for(j = 0; j < tmp.length; j++){
                if(tmp[j] == "Sound();"){
                    rqst += j;
                    var k=0;
                    while(tmp[j-k] != ""){
                        k++;
                    }
                    tmp[j-k] = "var "+rqst+" = new XMLHttpRequest(); \n\
                    "+rqst+".open('GET', '"+choice+"', true); \n\
                    "+rqst+".responseType = 'arraybuffer'; \n\
                    "+rqst+".onload = function() { \n"
                    k= 0;
                    while(tmp[j - k] != "var"){
                        k++
                    }
                    var name = tmp[j-k+1];
                    tmp[j+1] = name+".audioCxt.decodeAudioData("+rqst+".response, function(buffer) { \n"+
                        name+".setBuffer(buffer); ";
                    tab[i] = tmp.join(" ");
                }
            }
            if(tab[i].includes("play();") || tab[i].includes("startAt") || tab[i].includes("generatePlayer")){
                var str = "});\
            }\n\
            "+rqst+".send();";
                if(/([A-Z, a-z])/g.test(tab[i+1])){
                    tab[i+1] = str + tab[i+1];
                }
                else{tab[i+1] = tab[i+1] + str; }
            }

        }
        code = tab.join(" ");
        console.log(code);
        return code;
    };

    $('select').formSelect();
    jQuery('select').on('change', function() {
        var choice = $('select').val();
        var code = "<!Doctype HTMl>\n\
        <html>\n\
            <head>\n\
                <script type='text/javascript' src='js/Sound.js'></script>\n\
            </head>\n\
            <body>\n\
                <script>\n\
                    var request = new XMLHttpRequest();\
                    request.open('GET', '"+choice+"', true); \
                    request.responseType = 'arraybuffer'; \
                    request.onload = function() { \
                        var sound = new Sound();\
                        sound.audioCxt.decodeAudioData(request.response, function(buffer) { \
                            sound.setBuffer(buffer);\
                            sound.generatePlayer();\
                        });\
                    }\n\
                    request.send();\
                </script>\n\
            </body>\n\
        </html>"
        var iframe = document.getElementById("origin");
        

        var frameDoc = iframe.document;
        if (iframe.contentWindow)
            frameDoc = iframe.contentWindow.document;

        frameDoc.open();
        frameDoc.writeln("");
        frameDoc.writeln(code);
        frameDoc.close();
    });


});