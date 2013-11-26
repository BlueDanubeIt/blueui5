// Provides control sap.ui.table.Table.
jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.table.Row");
//jQuery.sap.require("de.pksoftware.bootstrapui5.controls.table.library");
jQuery.sap.require("sap.ui.core.Control");

sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.table.Row", { metadata : {
	// ---- object ----
	publicMethods : [],

	// ---- control specific ----
	library : "de.pksoftware.bootstrapui5.controls.table",
	properties : {},
//	defaultAggregation : "columns",
	aggregations : {
		"columns" : {type : "de.pksoftware.bootstrapui5.controls.table.Col", multiple : true, singularName : "column", bindable : "bindable"}, 
	},
	associations : {},
	events : {}
}});




/**
 * 
 */
de.pksoftware.bootstrapui5.controls.table.Row.prototype.init = function(){
	
};


