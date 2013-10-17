/**
 * 
 * Bootstrap container renderer
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("com.twitter.bootstrap.controls.ContainerRenderer");

com.twitter.bootstrap.controls.ContainerRenderer = {
};

com.twitter.bootstrap.controls.ContainerRenderer.render = function(rm, oControl) {
	 rm.write("<div");
	    rm.writeControlData(oControl);
	    rm.addClass("container");
	    rm.writeClasses();
	    rm.write(">");
	    
	    oControl.getContent().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    
	    
	    rm.write("</div>");
};
