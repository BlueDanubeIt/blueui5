/**
 * 
 * Pretty print renderer
 * 
 * @author Philipp Knöller <info@http://pksoftware.de>
 * @author Markus Bittner <mb@blue-danube-it.de>
 * 
 * Copyright (c) 2013 Blue Danube IT
 * 
 * http://blue-danube-it.de
 * @version 2013-10-21
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
    
    var source = oControl.getSource();
    if(source){
//    	debugger;
    	var oBinding = oControl.getBinding('source');
    	if(oBinding){
    		if(typeof oBinding.oValue === "object"){
    			var sObject = JSON.stringify(oBinding.oValue);
    			bufferString += sObject;
    		} else {
    			bufferString += oBinding.oValue;
    		}
    	} else {
    		bufferString += source;
    	}
    	
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
        	}
        });
    }
    
    
    
    
    
    
    var buffer = jQuery(document.createElement("textarea"));
    buffer.html(bufferString);
    
    rm.write(buffer.html());
    
    rm.write("</pre>");
    
    
};
