function errorColorValue(){
    document.getElementById("error").innerHTML = "<p>Error: values for colors have to be between 0 and 255</p>";
}

function errorSize(){
    document.getElementById("error").innerHTML = "<p>Error: You asked for a pixel that is not in the image (x & y values)</p>";
}

