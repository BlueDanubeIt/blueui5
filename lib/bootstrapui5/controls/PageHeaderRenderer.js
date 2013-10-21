/**
 * 
 * Bootstrap page-header renderer
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.PageHeaderRenderer");

de.pksoftware.bootstrapui5.controls.PageHeaderRenderer = {
};

de.pksoftware.bootstrapui5.controls.PageHeaderRenderer.render = function(rm, oControl) {
    rm.write("<div");
    rm.writeControlData(oControl);
    rm.addClass("page-header");
    rm.writeClasses();
    rm.write(">");
    
    rm.write("<h1>");
    
    rm.write(oControl.getHeaderText());
    
    var subText = oControl.getSubText();
    if('' !== subText){
    	rm.write("<small>");
    	rm.write(subText);
    	rm.write("</small>");
    }
    
    rm.write("</h1>");
    
    
    rm.write("</div>");
    
    
};
