/**
 * 
 * Bootstrap sub-heading renderer
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("com.twitter.bootstrap.controls.SubHeadingRenderer");

com.twitter.bootstrap.controls.SubHeadingRenderer = {
};

com.twitter.bootstrap.controls.SubHeadingRenderer.render = function(rm, oControl) {
    rm.write("<div");
    rm.writeControlData(oControl);
    rm.addClass("sub-heading");
    rm.writeClasses();
    rm.write(">");
    
    var headerType = oControl.getHeaderType();
    rm.write("<" + headerType + ">");
    
    var icon = oControl.getIcon();
    if('' !== icon){
    	rm.write("<span");
    	rm.addClass(icon);
    	rm.writeClasses();
    	rm.write("></span> ");
    }
    
    rm.write(oControl.getHeaderText());
    
    rm.write("</" + headerType +  ">");
    
    var subText = oControl.getSubText();
    if('' !== subText){
    	rm.write("<p>");
    	rm.write(subText);
    	rm.write("</p>");
    }
    
    oControl.getContent().forEach(function(e){
    	rm.renderControl(e);
    });
    
    rm.write("</div>");
    
    
};
