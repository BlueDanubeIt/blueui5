/**
 * 
 * Bootstrap paragraph
 * 
 * Author: Philipp Knöller <info@http://pksoftware.de>
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.Paragraph");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.Paragraph", {
	metadata : {

		// ---- object ----
		defaultAggregation : "content",
		// ---- control specific ----
		library : "de.pksoftware.bootstrapui5.controls",
		properties : { text : {type:"string", defaultValue:"Put the page introduction here."}, },
		aggregations : { "content" : {singularName: "content"} }

	}
});

de.pksoftware.bootstrapui5.controls.Paragraph.prototype.init = function(){

};