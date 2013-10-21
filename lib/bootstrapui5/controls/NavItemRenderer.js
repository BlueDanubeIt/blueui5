/**
 * 
 * Bootstrap nav item renderer
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.NavItemRenderer");

de.pksoftware.bootstrapui5.controls.NavItemRenderer = {
};

de.pksoftware.bootstrapui5.controls.NavItemRenderer.render = function(rm, oControl) {
	 rm.write("<li");
	 rm.writeControlData(oControl);
	    
	    if(oControl.getNavActive())
	    	rm.addClass("active");
	    
	    rm.writeClasses();
	    rm.write(">");
	    
	    oControl.getContent().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    
	    
	    rm.write("</li>");
};
