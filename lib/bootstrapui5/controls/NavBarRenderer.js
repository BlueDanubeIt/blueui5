/**
 * 
 * Navbar renderer
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.NavBarRenderer");

de.pksoftware.bootstrapui5.controls.NavBarRenderer = {
};

de.pksoftware.bootstrapui5.controls.NavBarRenderer.render = function(rm, oControl) {
	 rm.write("<div");
	    rm.writeControlData(oControl);
	    rm.addClass("navbar navbar-default");
	    rm.writeClasses();
	    rm.write(">");
	    
	    rm.write("<div");
	    rm.addClass("navbar-header");
	    rm.writeClasses();
	    rm.write(">");
	    
	    rm.write("<a");
	    rm.addClass("navbar-brand");
	    rm.writeClasses();
	    rm.write(">");
	    rm.write(oControl.getBrand());
	    rm.write("</a>");
	    
	    rm.write("</div>");
	    
	    var navBarLeft = oControl.getNavbarLeft();
	    if(navBarLeft.length > 0){
	    	rm.write("<div");
		    rm.addClass("navbar-left");
		    rm.writeClasses();
		    rm.write(">");
	    	navBarLeft.forEach(function(e){
	    		rm.renderControl(e);
	    	});
	    	rm.write("</div>");
	    }
	    
	    oControl.getContent().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    
	    var navBarRight = oControl.getNavbarRight();
	    if(navBarRight.length > 0){
	    	rm.write("<div");
		    rm.addClass("navbar-right");
		    rm.writeClasses();
		    rm.write(">");
	    	navBarRight.forEach(function(e){
	    		rm.renderControl(e);
	    	});
	    	rm.write("</div>");
	    }
	    
	    rm.write("</div>");
};
