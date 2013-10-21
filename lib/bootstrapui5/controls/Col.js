/**
 * 
 * Bootstrap col
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.Col");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.Col", {
	metadata : {

		// ---- object ----
		defaultAggregation : "content",
		
		// ---- control specific ----
		library : "de.pksoftware.bootstrapui5.controls",
		properties : { deviceType : {type:"string", defaultValue:"md"},
						colCount : {type:"int", defaultValue:12}},
		aggregations : { "content" : {singularName: "content"} }

	}
});

de.pksoftware.bootstrapui5.controls.Col.prototype.init = function(){

};