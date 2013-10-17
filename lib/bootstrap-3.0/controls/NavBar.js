/**
 * 
 * Bootstrap navbar
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("com.twitter.bootstrap.controls.NavBar");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("com.twitter.bootstrap.controls.NavBar", {
	metadata : {

		// ---- object ----
		defaultAggregation : "content",
		
		// ---- control specific ----
		library : "com.twitter.bootstrap.controls",
		properties : { brand : {type:"string", defaultValue:"Brand"} },
		aggregations : { "content" : {singularName: "content"} }

	}
});

com.twitter.bootstrap.controls.NavBar.prototype.init = function(){

};