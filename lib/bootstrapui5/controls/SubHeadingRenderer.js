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

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.SubHeadingRenderer");

de.pksoftware.bootstrapui5.controls.SubHeadingRenderer = {
};

de.pksoftware.bootstrapui5.controls.SubHeadingRenderer.render = function(rm, oControl) {
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
    
//    debugger;
    
    var headerText = oControl.getHeaderText();
    
    if(headerText){
    	if(typeof headerText === "string"){
        	rm.write(headerText);
        } else {
        	rm.renderControl(headerText);
        }
    } else {
    	rm.write(oControl.DEFAULT_SUB_HEADER);
    }
    
    
    
    
    rm.write("</" + headerType +  ">");
    
    rm.write("<p>");
    var subText = oControl.getSubText();
    if('' !== subText){
    	rm.write(subText);
    }
    
    oControl.getContent().forEach(function(e){
    	rm.renderControl(e);
    });
    rm.write("</p>");
    
    
    rm.write("</div>");
    
    
};
