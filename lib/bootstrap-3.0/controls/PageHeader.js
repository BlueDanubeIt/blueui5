/**
 * 
 * Bootstrap page-header
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("com.twitter.bootstrap.controls.PageHeader");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("com.twitter.bootstrap.controls.PageHeader", {metadata : {

	// ---- object ----
	
	// ---- control specific ----
	library : "com.twitter.bootstrap.controls",
	properties : { headerText : {type:"string", defaultValue:"Header"},
		subText : {type:"string", defaultValue:""}},
	aggregations : {}

}});

com.twitter.bootstrap.controls.PageHeader.prototype.init = function(){

};