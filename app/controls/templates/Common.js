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

sap.ui.core.Control.extend("app.controls.templates.Common", {
	metadata : {
		
		// ---- object ----
		defaultAggregation : "header",
		
		// ---- control specific ----
		library : "app.controls.templates",
		properties : {
			header : {type:"string"},
			headerSub : {type:"string"},
			leadText : {type:"string"},
		},
		aggregations : {
			"demos" : {
				singularName : "demo"
			},
			"header" : {
				singularName : "header"
			},
			"navigation" : {
				singularName : "navigation"
			},
			"descriptions" : {
				singularName : "desctiption"
			}
		}
	}
});

app.controls.templates.Common.prototype.init = function() {
	
};