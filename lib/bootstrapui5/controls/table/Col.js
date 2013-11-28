/**
 * 
 * Bootstrap Col
 * 
 * Author: Markus Bittner <www.blue-danube-it.de>
 * 
 * Copyright (c) 2013 PKSoftware.de, Blue Danube IT
 * 
 * http://pksoftware.de,
 * http://blue-danube-it.de
 * 
 */
jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.table.Col");
jQuery.sap.require("sap.ui.core.Control");

sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.table.Col", { metadata : {
	publicMethods : [],
	library : "de.pksoftware.bootstrapui5.controls.table",
	properties : {
//		sorting : {type : "de.pksoftware.bootstrapui5.controls.table.Col.Sorting", defaultValue:de.pksoftware.bootstrapui5.controls.table.Col.Sorting.DAFAULT}
	},
	defaultAggregation : "template",
	aggregations : {
		header : {type : "sap.ui.core.Control", multiple : false},
		template : {type : "sap.ui.core.Control", multiple : false}
	},
	associations : {},
	events : {}
}});

de.pksoftware.bootstrapui5.controls.table.ColSorting = {
	DAFAULT : null
};

de.pksoftware.bootstrapui5.controls.table.Col.prototype.init = function(){};

