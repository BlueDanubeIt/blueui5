/**
 * 
 * Bootstrap lead renderer
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.LeadRenderer");

de.pksoftware.bootstrapui5.controls.LeadRenderer = {
};

de.pksoftware.bootstrapui5.controls.LeadRenderer.render = function(rm, oControl) {
	 rm.write("<p");
	    rm.writeControlData(oControl);
	    rm.addClass("lead");
	    rm.writeClasses();
	    rm.write(">");
	    
	    rm.write(oControl.getText());
	    
	    oControl.getContent().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    
	    rm.write("</p>");
};
