/**
 * 
 * Bootstrap nav
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.Nav");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.Nav", {
	metadata : {

		// ---- object ----
		defaultAggregation : "content",
		
		// ---- control specific ----
		library : "de.pksoftware.bootstrapui5.controls",
		properties : { navClass : {type:"string", defaultValue:""},
						navStacked : {type:"boolean", defaultValue:false},
						navJustified : {type:"boolean", defaultValue:false},
						navInNavbar : {type:"boolean", defaultValue:false}},
		aggregations : { "content" : {singularName: "content"} }

	}
});

de.pksoftware.bootstrapui5.controls.Nav.prototype.init = function(){

};