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

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.SubHeading");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.SubHeading", {
	metadata : {

		// ---- object ----
		defaultAggregation : "content",
		// ---- control specific ----
		library : "de.pksoftware.bootstrapui5.controls",
		properties : {	headerType :  {type:"string", defaultValue:"h4"},
//			headerText : {type:"string", defaultValue:"Sub Header"},
						icon : {type:"string", defaultValue:""},
			subText : {type:"string", defaultValue:""}},
		aggregations : {
			"content" : {singularName: "content"},
			"headerText" : {type : "sap.ui.core.Control", altTypes : ["string"], multiple : false, defaultValue:"Sub Header"}
		}

	}
});

de.pksoftware.bootstrapui5.controls.SubHeading.prototype.DEFAULT_SUB_HEADER = "Sub Header";

de.pksoftware.bootstrapui5.controls.SubHeading.prototype.init = function(){
	
};

