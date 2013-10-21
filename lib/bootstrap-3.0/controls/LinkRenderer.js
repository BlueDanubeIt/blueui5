/**
 * 
 * Bootstrap link renderer
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("com.twitter.bootstrap.controls.LinkRenderer");

com.twitter.bootstrap.controls.LinkRenderer = {
};

com.twitter.bootstrap.controls.LinkRenderer.render = function(rm, oControl) {
	 rm.write("<a");
	    rm.writeControlData(oControl);
	    //rm.addClass("container");
	    rm.writeClasses();
	    var href = oControl.getHref();
	    if('' !== href)
	    	rm.writeAttribute('href', href);
	    rm.write(">");
	    console.log(rm);
	    var subText = oControl.getText();
	    if('' !== subText){
	    	rm.write(subText);
	    }
	    
	    oControl.getContent().forEach(function(e){
	    	rm.renderControl(e);
	    });
	    
	    
	    rm.write("</a>");
};
