/**
 * 
 * Bootstrap container
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("com.twitter.bootstrap.controls.Container");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("com.twitter.bootstrap.controls.Container", {
	metadata : {

		// ---- object ----
		defaultAggregation : "content",
		
		// ---- control specific ----
		library : "com.twitter.bootstrap.controls",
		properties : { },
		aggregations : { "content" : {singularName: "content"} }

	}
});

com.twitter.bootstrap.controls.Container.prototype.init = function(){

};