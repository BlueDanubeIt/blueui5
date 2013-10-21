/**
 * 
 * Bootstrap paragraph renderer
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.ParagraphRenderer");

de.pksoftware.bootstrapui5.controls.ParagraphRenderer = {
};

de.pksoftware.bootstrapui5.controls.ParagraphRenderer.render = function(rm, oControl) {
	 rm.write("<p");
	    rm.writeControlData(oControl);
	    //rm.addClass("container");
	    //rm.writeClasses();
	    rm.write(">");
	    
	    var subText = oControl.getText();
	    if('' !== subText){
	    	rm.write(subText);
	    	
	    }
	    
	    oControl.getContent().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    
	    
	    rm.write("</p>");
};
