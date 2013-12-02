/**
 * 
 * Bootstrap Table
 * 
 * Author: Markus Bittner <www.blue-danube-it.de>
 * 
 * Copyright (c) 2013 PKSoftware.de, Blue Danube IT
 * 
 * http://pksoftware.de,
 * http://blue-danube-it.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.table.Table");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.table.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Setup of meta intormation for this Table.
 * @use This class uses DataTables as Table restructure.
 */
sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.table.Table", { metadata : {
	// ---- object ----
	publicMethods : [
	    "bindRows"
	],

	// ---- control specific ----
	library : "de.pksoftware.bootstrapui5.controls.table",
	properties : {
		"striped"  : {type:"boolean", defaultValue : true},
		"bordered"  : {type:"boolean", defaultValue : true},
		"hover"  : {type:"boolean", defaultValue : true},
		"condensed"  : {type:"boolean", defaultValue : true},
		"responsive"  : {type:"boolean", defaultValue : true},
		"visibleRowCount" : {type : "int", group : "Appearance", defaultValue : 10},
		"firstVisibleRow" : {type : "int", group : "Appearance", defaultValue : 0},
		"limit" : {type : "int", group : "", defaultValue : 100}
	},
	defaultAggregation : "columns",
	aggregations : {
		"columns" : {type : "de.pksoftware.bootstrapui5.controls.table.Col", multiple : true, singularName : "column", bindable : "bindable"},
    	"rows" : {type : "de.pksoftware.bootstrapui5.controls.table.Row", multiple : true, singularName : "row", bindable : "bindable"},
    	"noData" : {type : "sap.ui.core.Control", multiple : false}
	},
	associations : {},
	events : {}
}});

/**
 * 
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.iLimit = 0;

/**
 * Constant definition of default locale.
 * @constant
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.DAFAULT_LOCALE = 'en';

/**
 * Local usage of variable.
 * Identifies if binding using ajax was done.
 * On true, DataTables is initialized.
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.bBind = false;

/**
 * Local localization setup.
 * Setup for files stored in datatables_root/locale.
 * @see this.getDataTableLocalizationfile() 
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.dataTableLocalizations = {
	de : "/de/translation.JSON",
	en : "/en/translation.JSON",
	de_DE :  "/de/translation.JSON",
	en_EN : "/en/translation.JSON"
};


/**
 * Init of Bootstrap Table class.
 * set bBind to false on init.
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.init = function(){
	this.bBind = false;
};

/**
 * Allows setup of bindRows without implementation of a factory.
 */
de.pksoftware.bootstrapui5.controls.table.Table.getMetadata().getAllAggregations()["rows"]._doesNotRequireFactory = true;

/**
 * Public function for binding rows operations.
 * Implements binding for shortcut for bindAggregation "rows"
 * 
 * @param oBindingInfo 
 * @param vTemplate
 * @param oSorter
 * @param aFilters
 * @returns de.pksoftware.bootstrapui5.controls.table.Table
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.bindRows = function(oBindingInfo, vTemplate, oSorter, aFilters) {
	return this.bindAggregation("rows", oBindingInfo, vTemplate, oSorter, aFilters);
};

/**
 * @private Private Call of bindAggregation.
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype._bindAggregation = function(sName, sPath, oTemplate, oSorter, aFilters) {
	sap.ui.core.Element.prototype._bindAggregation.apply(this, arguments);
	return this;
};

/**
 * Table Row creator.
 * Map of columns to each row.
 * Id Rewrite
 * @param {int} iStartIndex Index to start table row creation.
 * @private
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype._createRows = function(iStartIndex) {
	
	var iFirstVisibleRow = this.getFirstVisibleRow();
	
	var aContexts = undefined;
	var oBinding = this.getBinding("rows");
	var oBindingInfo = this.mBindingInfos["rows"];
	
	if(!oBinding) {
		var that = this;
		this.getRows().forEach(function(oRow){
			var colIndex = 0;
			that.getColumns().forEach(function(oCol){
				oRow.addColumn(oCol.clone(oRow.getId()+'col'+colIndex));
				colIndex++;
			});
		});
		return;
	}
	
	
	iStartIndex = iStartIndex === undefined ? iFirstVisibleRow : iStartIndex;
	var oTemplate = new de.pksoftware.bootstrapui5.controls.table.Row(this.getId() + "-rows");
	var colIndex = 0;
	this.getColumns().forEach(function(oColumn){
		oTemplate.addColumn(oColumn.clone('col'+colIndex));
		colIndex++;
	});
	
	this.destroyAggregation("rows");
	
	
	
	
	if (oBinding) {
		this.iLimit = oBinding.getLength();
//		this.iLimit = this.getLimit() ? Math.max(iBindingLength, this.getLimit()): 0;
		aContexts = oBinding.getContexts(iStartIndex, this.iLimit, this.iLimit);
	}
//	var index = 0;
	
	for (var i = 0; i < this.iLimit; i++) {
		var oClone = oTemplate.clone("row" + i);
		if (aContexts && aContexts[i]) {
			oClone.setBindingContext(aContexts[i], oBindingInfo.model);
			oClone._bHidden = false;
		} else {
			oClone._bHidden = true;
		}
		this.addAggregation("rows", oClone, true);
	}
	oTemplate.destroy();

};



/**
 * Updating of Rows using an jQuery.sap.delayedCall.
 * @TODO: Check if delayCall if exiting.
 * @private
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.updateRows = function() {
	if (this.getDomRef()) {
		this._sBindingTimer = this._sBindingTimer || jQuery.sap.delayedCall(50, this, function() { 
			if(!this.bIsDestroyed) {
				this._updateBindingContexts();
				this._sBindingTimer = undefined;
			}
		});
	} else {
		this._updateBindingContexts();
	}
};




/**
 * Binding of Contexts.
 * @todo: find better solution (for loop)
 * @private
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype._updateBindingContexts = function() {
	
	
	var aRows = this.getRows(),
	    oBinding = this.getBinding("rows"),
	    oBindinginfo = this.mBindingInfos["rows"],
	    aContexts = undefined,
	    bound = false;
	
	if (oBinding) {
		aContexts = oBinding.getContexts(this.getFirstVisibleRow(), aRows.length, this.iLimit);
	}
	for (var iIndex = aRows.length - 1; iIndex >= 0; iIndex--) {
		var oContext = aContexts ? aContexts[iIndex] : undefined;
		if(oContext){
			bound = true;
			aRows[iIndex]._updateRowBindingContext(oContext, oBindinginfo && oBindinginfo.model);
		}
	}
	if(bound){
		this.setupDataTable();
		this.bBind = true;
	}
};


/**
 * 
 * @param sName
 * @param bSuppressReset
 * @returns
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.unbindAggregation = function(sName, bSuppressReset) {
	var oBinding = this.getBinding("rows");
	if (sName === "rows" && oBinding) {
		bSuppressReset = true;
	}
	this.updateRows();
	return sap.ui.core.Element.prototype.unbindAggregation.apply(this, [sName, bSuppressReset]);
};

/**
 * Called after Rendering was done.
 * Main purpose is to set up DataTables.
 * @param oEvent
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.onAfterRendering = function(oEvent) {
	var oBinding = this.getBinding('rows');
	
	if(this.bBind){ // Rows bound and rendered. (Used for rerender functionality.)
		this.setupDataTable();
		return;
	}
	
	if(oBinding){
		if(oBinding.oModel instanceof sap.ui.model.ClientModel){
			this.setupDataTable();
		} else if (!oBinding.oModel instanceof sap.ui.model.ClientModel && this.bBind){
			this.setupDataTable();	
		}
	} else {
		this.setupDataTable();
	}
};

/**
 * Getter for browser locale.
 * Default if no translation exists. (en)
 * @returns {String} file location of browser locale.
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.getDataTableLocalizationfile = function (){
	var jQuerDataTablesLib = jQuery.sap.getModulePath("com.jquery.datatables");
	var sLocale = sap.ui.getCore().getLibraryResourceBundle().sLocale;
	var sReturn = jQuerDataTablesLib+"/locale";
	
	var sLocaleFile = this.dataTableLocalizations[sLocale];
	
	if(sLocaleFile){
		sReturn += sLocaleFile;
	} else {
		sReturn += this.dataTableLocalizations[this.DAFAULT_LOCALE];
	}
	
	return sReturn;
};


/**
 * Main entry of DataTable setup.
 * @TODO: Implement more functionality and flexibility.
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.setupDataTable = function() {
	var iVisibleRowCount = this.getVisibleRowCount(); // not used atm. Setup of default row display on init?
	var dataTableSetup = {
		oLanguage :  {"sUrl": this.getDataTableLocalizationfile()}
	};
	
	try {
		$table = this.$();
		$table.dataTable(dataTableSetup);
	} catch (e) {
		// TODO: handle exception
	}
};
