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

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.Link");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.Link", {
	metadata : {

		// ---- object ----
		defaultAggregation : "content",
		// ---- control specific ----
		library : "de.pksoftware.bootstrapui5.controls",
		properties : { text : {type:"string", defaultValue:"link text"},
						linkHref : {type:"string", defaultValue:""},
						linkClass  : {type:"string", defaultValue : ""},
						linkTarget  : {type:"string", defaultValue : ""},
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

de.pksoftware.bootstrapui5.controls.Link.prototype.init = function(){
	
};

de.pksoftware.bootstrapui5.controls.Link.prototype.onclick = function(){
	this.fireClicked();
};