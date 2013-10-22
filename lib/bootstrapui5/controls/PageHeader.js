/**
 * 
 * Bootstrap page-header
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.PageHeader");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.PageHeader", {metadata : {

	// ---- object ----
	
	// ---- control specific ----
	library : "de.pksoftware.bootstrapui5.controls",
	properties : { headerText : {type:"string", defaultValue:"Header"},
		subText : {type:"string", defaultValue:""}},
	aggregations : {}

}});

de.pksoftware.bootstrapui5.controls.PageHeader.prototype.init = function(){

};