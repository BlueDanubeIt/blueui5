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

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.BasicAppRenderer");

de.pksoftware.bootstrapui5.controls.BasicAppRenderer = {
};

de.pksoftware.bootstrapui5.controls.BasicAppRenderer.render = function(rm, oControl) {
	 rm.write("<div");
	    rm.writeControlData(oControl);
	    rm.addClass("basic-app");
	    rm.writeClasses();
	    rm.write(">");
	    
	    // Write Header
	    rm.write("<div");
	    rm.addClass("basic-app-header");
	    rm.writeClasses();
	    rm.write(">");
	    oControl.getHeader().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    rm.write("</div>");
	    
	    // Write master container
	    rm.write("<div");
	    rm.addClass("container");
	    rm.writeClasses();
	    rm.write(">");
	    
	    rm.write("<div");
	    rm.addClass("row");
	    rm.writeClasses();
	    rm.write(">");
	    
	    rm.write("<div");
	    rm.addClass("col-md-3");
	    rm.writeClasses();
	    rm.write(">");
	    oControl.getMaster().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    rm.write("</div>");
	    
    	// Write Detail container inside Master
	    rm.write("<div");
	    rm.addClass("col-md-9");
	    rm.writeClasses();
	    rm.write(">");
	    oControl.getDetail().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    rm.write("</div>");
	    
	    rm.write("</div>");
	    rm.write("</div>");
	    
	    
	    rm.write("</div>");
};
