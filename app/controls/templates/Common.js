/**
 * 
 * Common template
 * 
 * @author Markus Bittner <mb@blue-danube-it.de>
 * 
 * Copyright (c) 2013 Blue Danube It
 * 
 * http://www.blue-danube-it.de
 * 
 */

jQuery.sap.declare("app.controls.templates.Common");

jQuery.sap.require("sap.ui.core.Control");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Container");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.PageHeader");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Lead");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Row");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Col");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Nav");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.NavItem");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Link");



sap.ui.core.Control.extend("app.controls.templates.Common", {
	// ---- META ----
	metadata : {
		
		// ---- object ----
		defaultAggregation : "content",
		
		// ---- control specific ----
		library : "app.controls.templates",
		properties : {
			header : {type:"string"},
			headerSub : {type:"string"},
			leadText : {type:"string"},
		},
		aggregations : {
			"content" : {
				singularName : "content",
				multiple : false,
			},
			"demos" : {
				singularName : "demo"
			},
			"navigations" : {
				singularName : "navigation",
				type : "de.pksoftware.bootstrapui5.controls.Link"
			},
			"descriptions" : {
				singularName : "desctiption"
			}
		},
		events : {}
	}
});

//app.controls.templates.Common.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

//app.controls.templates.Common = function (sId, mSettings) {
//	sap.ui.core.Control.apply(this, arguments);
//	
////	var tv = new com.sap.prototyping.thingVisualizations.ThingVisualization();
////	tv.setLayout(this.getLayout());
////	this.setThingVisualization(tv);
////	
////	
////	this.attachBrowserEvent("dblclick", function() {debugger;});
//};

app.controls.templates.Common.prototype.init = function() {
//	sap.ui.core.Control.apply(this, arguments);
};