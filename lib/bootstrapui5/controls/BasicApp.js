/**
 * 
 * Bootstrap Basic App
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.BasicApp");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.BasicApp", {
	metadata : {

		// ---- object ----
		
		// ---- control specific ----
		library : "de.pksoftware.bootstrapui5.controls",
		properties : { },
		aggregations : { 
			
			"header" : {singularName: "header"}, 
			"master" : {singularName: "master"},
			"detail" : {singularName: "detail"} 
		}

	}
});

de.pksoftware.bootstrapui5.controls.BasicApp.prototype.init = function(){

};