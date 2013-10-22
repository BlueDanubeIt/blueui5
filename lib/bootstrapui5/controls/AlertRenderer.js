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

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.AlertRenderer");

de.pksoftware.bootstrapui5.controls.AlertRenderer = {
};

de.pksoftware.bootstrapui5.controls.AlertRenderer.render = function(rm, oControl) {
	 rm.write("<div");
	    rm.writeControlData(oControl);
	    rm.addClass("alert alert-" + oControl.getAlertClass() );
	    rm.writeClasses();
	    rm.write(">");
	    
	    rm.write(oControl.getText());
	    
	    oControl.getContent().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    
	    rm.write("</div>");
};
