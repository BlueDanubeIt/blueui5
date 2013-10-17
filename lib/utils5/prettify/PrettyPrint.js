/**
 * 
 * Pretty print control
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 Blue Danube IT
 * 
 * http://blue-danube-it.de
 * 
 */

jQuery.sap.declare("de.blue_danube_it.utils5.prettify.PrettyPrint");
jQuery.sap.require("sap.ui.core.Control");
jQuery.sap.require("de.blue_danube_it.utils5.prettify.run_prettify");

sap.ui.core.Control.extend("de.blue_danube_it.utils5.prettify.PrettyPrint", {metadata : {

	// ---- object ----
	defaultAggregation : "content",
	// ---- control specific ----
	library : "de.blue_danube_it.utils5.prettify",
	properties : {},
	aggregations : {
		content: {singularName: "content"}
	}

}});

de.blue_danube_it.utils5.prettify.PrettyPrint.prototype.init = function(){

};

de.blue_danube_it.utils5.prettify.PrettyPrint.prototype.onAfterRendering = function(){
	PR.prettyPrint();
};

