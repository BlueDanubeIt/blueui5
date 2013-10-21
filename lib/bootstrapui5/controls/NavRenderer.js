/**
 * 
 * Bootstrap nav renderer
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.NavRenderer");

de.pksoftware.bootstrapui5.controls.NavRenderer = {
};

de.pksoftware.bootstrapui5.controls.NavRenderer.render = function(rm, oControl) {
	var navClass = "nav";
	
	var controlClass = oControl.getNavClass();
	if('' !== controlClass)
		navClass += ' nav-' + controlClass;
	
	if(oControl.getNavStacked())
		navClass += ' nav-stacked';
	
	if(oControl.getNavJustified())
		navClass += ' nav-justified';
	
	if(oControl.getNavInNavbar())
		navClass += ' navbar-nav';
	
	 rm.write("<ul");
	    rm.writeControlData(oControl);
	    rm.addClass(navClass);
	    rm.writeClasses();
	    rm.write(">");
	    
	    oControl.getContent().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    
	    
	    rm.write("</ul>");
};
