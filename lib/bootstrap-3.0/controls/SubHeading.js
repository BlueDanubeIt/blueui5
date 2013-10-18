/**
 * 
 * Bootstrap sub-header
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("com.twitter.bootstrap.controls.SubHeading");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("com.twitter.bootstrap.controls.SubHeading", {
	metadata : {

		// ---- object ----
		defaultAggregation : "content",
		// ---- control specific ----
		library : "com.twitter.bootstrap.controls",
		properties : {	headerType :  {type:"string", defaultValue:"h4"},
					headerText : {type:"string", defaultValue:"Sub Header"},
						icon : {type:"string", defaultValue:""},
			subText : {type:"string", defaultValue:"Maecenas sed diam eget risus varius blandit sit amet non magna."}},
		aggregations : {"content" : {singularName: "content"}}

	}
});

com.twitter.bootstrap.controls.SubHeading.prototype.init = function(){

};