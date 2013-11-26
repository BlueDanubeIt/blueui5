/**
 * 
 * Bootstrap Table Row
 * 
 * Author: Markus Bittner <mb@blue-danube-it.de>
 * 
 * Copyright (c) 2013 PKSoftware.de, Blue Danube IT
 * 
 * http://pksoftware.de,
 * http://www.blue-danube-it.de
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.table.Row");
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
de.pksoftware.bootstrapui5.controls.table.Row.prototype.init = function(){};


/**
 * @private
 */
de.pksoftware.bootstrapui5.controls.table.Row.prototype._updateRowBindingContext = function(oContext, sModelName) {
	if (oContext && oContext instanceof sap.ui.model.Context) {
		this.getColumns().forEach(function(oCell){
			oCell.getTemplate().setBindingContext(oContext, sModelName);
		});
	}
};