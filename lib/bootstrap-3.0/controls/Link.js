/**
 * 
 * Bootstrap link
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("com.twitter.bootstrap.controls.Link");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("com.twitter.bootstrap.controls.Link", {
	metadata : {

		// ---- object ----
		defaultAggregation : "content",
		// ---- control specific ----
		library : "com.twitter.bootstrap.controls",
		properties : { text : {type:"string", defaultValue:"link text"},
						linkHref : {type:"string", defaultValue:""},
						linkClass  : {type:"string", defaultValue : ""},
						viewType : {type:"string", defaultValue:"HTML"},
						viewName : {type:"string", defaultValue:""},
						viewId : {type:"string", defaultValue:""},
						buttonClass : {type:"string", defaultValue:""},
						useButton : {type:"boolean", defaultValue : false},
						useButtonTag  : {type:"boolean", defaultValue : false}
						
						},
		aggregations : { "content" : {singularName: "content"} },
		events:{
	        "clicked":{}
	    }

	}
});

com.twitter.bootstrap.controls.Link.prototype.init = function(){
	
};

com.twitter.bootstrap.controls.Link.prototype.onclick = function(){
	this.fireClicked();
};