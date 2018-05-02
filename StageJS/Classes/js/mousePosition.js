function getElementPosition(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function getEventLocation(element,event){

    var pos = getElementPosition(element);
    
    return {
    	x: (event.pageX - pos.x),
      	y: (event.pageY - pos.y)
    };
}

