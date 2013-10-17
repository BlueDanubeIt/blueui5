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

jQuery.sap.declare("com.twitter.bootstrap.controls.Col");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("com.twitter.bootstrap.controls.Col", {
	metadata : {

		// ---- object ----
		defaultAggregation : "content",
		
		// ---- control specific ----
		library : "com.twitter.bootstrap.controls",
		properties : { deviceType : {type:"string", defaultValue:"md"},
						colCount : {type:"int", defaultValue:12}},
		aggregations : { "content" : {singularName: "content"} }

	}
});

com.twitter.bootstrap.controls.Col.prototype.init = function(){

};