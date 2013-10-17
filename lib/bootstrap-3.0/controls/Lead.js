/**
 * 
 * Bootstrap lead
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("com.twitter.bootstrap.controls.Lead");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("com.twitter.bootstrap.controls.Lead", {
	metadata : {

		// ---- object ----
		defaultAggregation : "content",
		// ---- control specific ----
		library : "com.twitter.bootstrap.controls",
		properties : { text : {type:"string", defaultValue:"Put the page introduction here."}, },
		aggregations : { "content" : {singularName: "content"} }

	}
});

com.twitter.bootstrap.controls.Lead.prototype.init = function(){

};