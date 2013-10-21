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
	var tag = "a";
	if(oControl.getUseButtonTag())
		tag = "button";
	
	var linkClass = oControl.getUseButton() ? 'btn ' : '';
	linkClass += oControl.getLinkClass() + ' ';
	linkClass += 'btn-' + oControl.getButtonClass();
	
	
	rm.write("<" + tag);
	rm.writeControlData(oControl);
	rm.addClass(linkClass);
	rm.writeClasses();
	    
	var href = oControl.getLinkHref();
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
	    
	    
	    rm.write("</" + tag + ">");
};
