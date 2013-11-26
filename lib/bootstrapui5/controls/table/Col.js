// Table Col declaration.
jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.table.Col");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Table Col extends from "sap.ui.core.Control".
 */
sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.table.Col", { metadata : {
	publicMethods : [],
	library : "de.pksoftware.bootstrapui5.controls.table",
	properties : {
		"header" : {type : "string"}
	},
	defaultAggregation : "template",
	aggregations : {
		template : {type : "sap.ui.core.Control", multiple : false}, 
	},
	associations : {},
	events : {}
}});


/**
 * 
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.init = function(){};

