/**
 * 
 * Pretty print renderer
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 Blue Danube IT
 * 
 * http://blue-danube-it.de
 * 
 */

jQuery.sap.declare("de.blue_danube_it.utils5.prettify.PrettyPrintRenderer");

de.blue_danube_it.utils5.prettify.PrettyPrintRenderer = {
};



de.blue_danube_it.utils5.prettify.PrettyPrintRenderer.render = function(rm, oControl) {
    rm.write("<pre");
    rm.writeControlData(oControl);
    rm.addClass("prettyprint");
    rm.writeClasses();
    rm.write(">");
    
    var bufferString = '';
    
    var source = oControl.getProperty('source');
    if(source){
    	bufferString += source;
    } else {
    	var content = oControl.getContent();
    	content.forEach(function(e){
        	if(e._xContent){
        		//XML Views
        		
        		bufferString += e._xContent.innerText.replace(/^\s+|\s+$/g, '');
        	}
        	else{
        		//HTML Views
        		bufferString += jQuery(e.getDomRef()).html();
        		debugger;
        	}
        });
    }
    
    
    
    
    
    
    var buffer = jQuery(document.createElement("textarea"));
    buffer.html(bufferString);
    
    rm.write(buffer.html());
    
    rm.write("</pre>");
    
    
};
