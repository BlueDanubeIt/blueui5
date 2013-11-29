/**
 * 
 * Bootstrap Paginator default
 * 
 * Author: Markus Bittner <www.blue-danube-it.de>
 * 
 * Copyright (c) 2013 PKSoftware.de, Blue Danube IT
 * 
 * http://pksoftware.de,
 * http://blue-danube-it.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.Paginator");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.Paginator", {metadata : {
	// ---- object ----
//	defaultAggregation : "content",
	// ---- control specific ----
	library : "de.pksoftware.bootstrapui5.controls",
	properties : {
		"current" : {type : "int", group : "Misc", defaultValue : 1},
		"last" : {type : "int", group : "Misc", defaultValue : null},
		'maxPages' : {type : "int", group : "Misc", defaultValue : 5},
		
	},
	aggregations : {},
	events : {
		"page" : {}
	}
}});


de.pksoftware.bootstrapui5.controls.Paginator.SIZE = {
	DEFAULT : '',
	SMALL : 'pagination-lg',
	LARGE : 'pagination-sm'
};

de.pksoftware.bootstrapui5.controls.Paginator.prototype.init = function(){};

de.pksoftware.bootstrapui5.controls.Paginator.prototype.onclick = function(oClick){
	// TODO: Identify selected page.
	this.firePage({
		srcPage:this.getCurrent(),
		targetPage:this.getLast()
	});
};