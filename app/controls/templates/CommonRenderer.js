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
	
	var aContent = Array();
	
	// Header set up
	var oHeader = new de.pksoftware.bootstrapui5.controls.PageHeader({
   		headerText : oControl.getHeader(),
   		subText : oControl.getHeaderSub()
   	});
	aContent.push(oHeader);
	
	// Lead set up
	var oLead = new de.pksoftware.bootstrapui5.controls.Lead({
		text: oControl.getLeadText()
	});
	aContent.push(oLead);
	
	var aColumnsTop = Array();
	
	var oColumnDemo = new de.pksoftware.bootstrapui5.controls.Col({
		deviceType : "md",
		colCount : 9,
		content : oControl.getDemos()
	});
	
	aColumnsTop.push(oColumnDemo);
	
//	var aNavigations = oControl.getNavigations();
	
	
//	jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Nav");
//	jQuery.sap.require("de.pksoftware.bootstrapui5.controls.NavItem");
	
	var oColumnNavigation = new de.pksoftware.bootstrapui5.controls.Col({
		deviceType : "md",
		colCount : 3,
		content : oControl.getNavigation()
	});
	aColumnsTop.push(oColumnNavigation);
	
	
//	<div data-sap-ui-type="de.pksoftware.bootstrapui5.controls.Col" data-col-count="2" data-device-type="md">
	var oRowDemoNavi = new de.pksoftware.bootstrapui5.controls.Row({
		content : aColumnsTop
	});
	aContent.push(oRowDemoNavi);
	
	
	var aColumnDescription = new de.pksoftware.bootstrapui5.controls.Col({
		deviceType : "md",
		colCount : 12,
		content : oControl.getDescriptions()
	});
	
	var oRowDescription = new de.pksoftware.bootstrapui5.controls.Row({
		content : aColumnDescription
	});
	
	aContent.push(oRowDescription);
	
//	<div data-sap-ui-type="de.pksoftware.bootstrapui5.controls.Row">
	
	// Container fill
	var oContainer = new de.pksoftware.bootstrapui5.controls.Container({
		content : aContent
	});
	
//	debugger;

	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("template-common");
	oRm.writeClasses();
	oRm.write(">");
	
	oRm.renderControl(oContainer);

	oRm.write("</div>");
};
