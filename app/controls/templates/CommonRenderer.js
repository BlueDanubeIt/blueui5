/**
 * 
 * Common template renderer
 * 
 * @author Markus Bittner <mb@blue-danube-it.de>
 * 
 * Copyright (c) 2013 Blue Danube It
 * 
 * http://www.blue-danube-it.de
 * 
 */

jQuery.sap.declare("app.controls.templates.CommonRenderer");

app.controls.templates.CommonRenderer = {};

app.controls.templates.CommonRenderer.render = function(oRm,
		oControl) {
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("template-common");
	oRm.writeClasses();
	oRm.write(">");
	oRm.renderControl(oControl._fetchFormatedContainer());
	oRm.write("</div>");
};
