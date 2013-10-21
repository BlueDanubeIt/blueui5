/**
 * 
 * Bootstrap row renderer
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.RowRenderer");

de.pksoftware.bootstrapui5.controls.RowRenderer = {
};

de.pksoftware.bootstrapui5.controls.RowRenderer.render = function(rm, oControl) {
	 rm.write("<div");
	    rm.writeControlData(oControl);
	    rm.addClass("row");
	    rm.writeClasses();
	    rm.write(">");
	    
	    oControl.getContent().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    
	    
	    rm.write("</div>");
};
