/**
 * 
 * Bootstrap col renderer
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.ColRenderer");

de.pksoftware.bootstrapui5.controls.ColRenderer = {
};

de.pksoftware.bootstrapui5.controls.ColRenderer.render = function(rm, oControl) {
	 rm.write("<div");
	    rm.writeControlData(oControl);
	    rm.addClass("col-" + oControl.getDeviceType() + '-' + oControl.getColCount());
	    rm.writeClasses();
	    rm.write(">");
	    
	    oControl.getContent().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    
	    
	    rm.write("</div>");
};
