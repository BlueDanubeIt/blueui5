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

de.pksoftware.bootstrapui5.controls.table.Table.iLimit = 0;



/**
 * Empty atm.
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.init = function(){
	this.jSon = false;
	this.bound = false;
	
//	if(!this._oPaginator){
//		jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Paginator");
//		this._oPaginator = new de.pksoftware.bootstrapui5.controls.Paginator(this.getId()+'-paginator');
//		this._oPaginator.attachPage(jQuery.proxy(this.lala, this));
//	}
};


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

de.pksoftware.bootstrapui5.controls.table.Table.prototype.lala = function(oLala){
	console.log(oLala.getParameters());
//	console.log('lulu');
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
 * @private
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype._createRows = function(iStartIndex) {

//	debugger;
	
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
//	debugger;
	this.getColumns().forEach(function(oColumn){
		oTemplate.addColumn(oColumn.clone('col'+colIndex));
		colIndex++;
	});
	
	this.destroyAggregation("rows");
	
	
	
	
	if (oBinding) {
//		debugger;
		this.iLimit = oBinding.getLength();
//		this.iLimit = this.getLimit() ? Math.max(iBindingLength, this.getLimit()): 0;
		aContexts = oBinding.getContexts(iStartIndex, this.iLimit, this.iLimit);
//		debugger;
	}
	var index = 0;
	
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
	
//	if (this._oPaginator) {
//		// if iStartIndex is equal or greater than the number of total rows go back to page 1
//		var iStartIndex = 1;
//		var iNewPage = 1;
//		if (iStartIndex < this.getBinding("rows").getLength()) {
//			iNewPage = Math.ceil((iStartIndex + 1) / this.getVisibleRowCount());
//		}
//		if (iNewPage !== this._oPaginator.getCurrent()) {
////			this.setProperty("firstVisibleRow", (iNewPage - 1) * this.getVisibleRowCount(), true);
//			this._oPaginator.setCurrent(iNewPage);
//			this._oPaginator.rerender();
//		}
//	}
	this.jSon = false;
	if (this.getDomRef()) {
		this._sBindingTimer = this._sBindingTimer || jQuery.sap.delayedCall(50, this, function() { 
			if(!this.bIsDestroyed) {
				this.jSon = false;
				this._updateBindingContexts();
				this._sBindingTimer = undefined;
			}
		});
		
	} else {
		this.jSon = true;
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
	    aContexts = undefined;
//	
//	this.getBinding("rows").getLength();
//	
//	debugger;
	
	if (oBinding) {
		aContexts = oBinding.getContexts(this.getFirstVisibleRow(), aRows.length, this.iLimit);
//		if(this._oPaginator){
//			var iNumberOfPages = Math.ceil((oBinding.getLength() || 0) / this.getVisibleRowCount());
//			this._oPaginator.setLast(iNumberOfPages);
//		}
	}
	var bound = false;
	for (var iIndex = aRows.length - 1; iIndex >= 0; iIndex--) {
		var oContext = aContexts ? aContexts[iIndex] : undefined;
		if(oContext){
			bound = true;
			aRows[iIndex]._updateRowBindingContext(oContext, oBindinginfo && oBindinginfo.model);
		}
	}
	if(bound){
		this.setupDataTable();
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




de.pksoftware.bootstrapui5.controls.table.Table.prototype.onAfterRendering = function(oEvent) {
	var oBinding = this.getBinding('rows'); 
	if(oBinding){
		if(oBinding.oModel instanceof sap.ui.model.ClientModel){
			this.setupDataTable();
		}
	} else {
		this.setupDataTable();
	}
};


de.pksoftware.bootstrapui5.controls.table.Table.prototype.setupDataTable = function() {
	var iVisibleRowCount = this.getVisibleRowCount();
	
	var sLocale = sap.ui.getCore().getLibraryResourceBundle().sLocale;
	var jQuerDataTablesLib = jQuery.sap.getModulePath("com.jquery.datatables");
	
	var oLanguage =  {"sUrl": jQuerDataTablesLib+"/locale/"+sLocale+"/translation.JSON"};
	try {
		$table = this.$();
//		$table.dataTable().fnDestroy();
		$table.dataTable({
			oLanguage : oLanguage
		});
	} catch (e) {
		// TODO: handle exception
	}
};
