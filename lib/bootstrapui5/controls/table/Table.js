// Provides control sap.ui.table.Table.
jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.table.Table");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.table.library");
jQuery.sap.require("sap.ui.core.Control");


sap.ui.core.Control.extend("de.pksoftware.bootstrapui5.controls.table.Table", { metadata : {
	// ---- object ----
	publicMethods : [
         //	methods
//		"getSelectedIndices", "addSelectionInterval", "setSelectionInterval", "removeSelectionInterval", "isIndexSelected", "clearSelection", "selectAll", "getContextByIndex", "sort", "filter"
	],

	// ---- control specific ----
	library : "de.pksoftware.bootstrapui5.controls.table",
	properties : {
//		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
//		"rowHeight" : {type : "int", group : "Appearance", defaultValue : null},
//		"columnHeaderHeight" : {type : "int", group : "Appearance", defaultValue : null},
//		"columnHeaderVisible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"visibleRowCount" : {type : "int", group : "Appearance", defaultValue : 10},
		"firstVisibleRow" : {type : "int", group : "Appearance", defaultValue : 0},
//		"selectionMode" : {type : "sap.ui.table.SelectionMode", group : "Behavior", defaultValue : sap.ui.table.SelectionMode.Multi},
//		"selectionBehavior" : {type : "sap.ui.table.SelectionBehavior", group : "Behavior", defaultValue : sap.ui.table.SelectionBehavior.RowSelector},
//		"selectedIndex" : {type : "int", group : "Appearance", defaultValue : -1},
//		"allowColumnReordering" : {type : "boolean", group : "Behavior", defaultValue : true, deprecated: true},
//		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
//		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
//		"navigationMode" : {type : "sap.ui.table.NavigationMode", group : "Behavior", defaultValue : sap.ui.table.NavigationMode.Scrollbar},
		"threshold" : {type : "int", group : "", defaultValue : 100},
//		"enableColumnReordering" : {type : "boolean", group : "Behavior", defaultValue : true},
//		"enableGrouping" : {type : "boolean", group : "Behavior", defaultValue : false},
//		"showColumnVisibilityMenu" : {type : "boolean", group : "Misc", defaultValue : false},
//		"showNoData" : {type : "boolean", group : "Misc", defaultValue : true},
//		"visibleRowCountMode" : {type : "sap.ui.table.VisibleRowCountMode", group : "Appearance", defaultValue : sap.ui.table.VisibleRowCountMode.Fixed},
//		"fixedColumnCount" : {type : "int", group : "Appearance", defaultValue : 0},
//		"fixedRowCount" : {type : "int", group : "Appearance", defaultValue : 0},
//		"minAutoRowCount" : {type : "int", group : "Appearance", defaultValue : 5}
	},
	defaultAggregation : "columns",
	aggregations : {
//    	"title" : {type : "sap.ui.core.Control", altTypes : ["string"], multiple : false}, 
//    	"footer" : {type : "sap.ui.core.Control", altTypes : ["string"], multiple : false}, 
//    	"toolbar" : {type : "sap.ui.commons.Toolbar", multiple : false}, 
//    	"extension" : {type : "sap.ui.core.Control", multiple : true, singularName : "extension"}, 
    	"columns" : {type : "de.pksoftware.bootstrapui5.controls.table.Col", multiple : true, singularName : "column", bindable : "bindable"}, 
    	"rows" : {type : "de.pksoftware.bootstrapui5.controls.table.Row", multiple : true, singularName : "row", bindable : "bindable"}, 
    	"noData" : {type : "sap.ui.core.Control", multiple : false}
	},
	associations : {
//		"groupBy" : {type : "sap.ui.table.Column", multiple : false}
	},
	events : {
//		"rowSelectionChange" : {}, 
//		"columnSelect" : {allowPreventDefault : true}, 
//		"columnResize" : {allowPreventDefault : true}, 
//		"columnMove" : {allowPreventDefault : true}, 
//		"sort" : {allowPreventDefault : true}, 
//		"filter" : {allowPreventDefault : true}, 
//		"group" : {allowPreventDefault : true}, 
//		"columnVisibility" : {allowPreventDefault : true}
	}
}});




/**
 * 
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.init = function(){
	
};


//enable calling 'bindAggregation("rows")' without a factory
de.pksoftware.bootstrapui5.controls.table.Table.getMetadata().getAllAggregations()["rows"]._doesNotRequireFactory = true;

/**
 * 
 * @param oBindingInfo
 * @param vTemplate
 * @param oSorter
 * @param aFilters
 * @returns
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.bindRows = function(oBindingInfo, vTemplate, oSorter, aFilters) {
	return this.bindAggregation("rows", oBindingInfo, vTemplate, oSorter, aFilters);
};

/**
 * @private Private Call of bindAggregation.
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype._bindAggregation = function(sName, sPath, oTemplate, oSorter, aFilters) {
	sap.ui.core.Element.prototype._bindAggregation.apply(this, arguments);
	var oBinding = this.getBinding("rows");
	if (sName === "rows" && oBinding) {
		oBinding.attachChange(this._onBindingChange, this);
	}
	return this;
};


/**
 * handler for change events of the binding
 * @param {sap.ui.base.Event} oEvent change event
 * @private
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype._onBindingChange = function(oEvent) {
	debugger;
	var sReason = oEvent.getParameter("reason");
	if (sReason === "sort" || sReason === "filter") {
//		this.clearSelection();
//		this.setFirstVisibleRow(0);
	}
};






/**
 * creates the rows for the rows aggregation
 * @private
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype._createRows = function(iStartIndex) {

	var iFirstVisibleRow = this.getFirstVisibleRow();
	var iVisibleRowCount = this.getVisibleRowCount();

	// by default the start index is the first visible row
	iStartIndex = iStartIndex === undefined ? iFirstVisibleRow : iStartIndex;
//
//	// create the new template
//	debugger;
	var oTemplate = new de.pksoftware.bootstrapui5.controls.table.Row(this.getId() + "-rows");
	var aCols = this.getColumns();
	var iCellIndex = 0;
	for (var i = 0, l = aCols.length; i < l; i++) {
//		if (aCols[i].getVisible()) {
			var oColTemplate = aCols[i].clone('col'+i);
//			debugger;
			oTemplate.addColumn(oColTemplate);
//			if (oColTemplate) {
//				var oClone = oColTemplate.clone("col" + i);
//				// inherit the editable property if required to the child controls
////				if (this._bInheritEditableToControls && !this.getEditable() && oClone.setEditable) {
////					oClone.setEditable(false);
////				}
//				oClone.data("sap-ui-colindex", i);
//				oTemplate.addColumn(oClone);
////				this._aIdxCols2Cells[i] = iCellIndex++;
//			}
//		}
	}

	// initially called without iStartIndex and iLength
	this.destroyAggregation("rows");
	var aContexts = undefined;
	var oBinding = this.getBinding("rows");
	var oBindingInfo = this.mBindingInfos["rows"];
	
	
//	debugger;
	if (oBinding) {
		// if thresholding is 0 then it is disabled and we forward 0 to the binding
		var iThreshold = this.getThreshold() ? Math.max(this.getVisibleRowCount(), this.getThreshold()): 0;
		aContexts = oBinding.getContexts(iStartIndex, iVisibleRowCount, iThreshold);
	}
	for (var i = 0; i < iVisibleRowCount; i++) {
		var oClone = oTemplate.clone("row" + i); // TODO: Isn't the following required! + "-" + this.getId());
		if (aContexts && aContexts[i]) {
			oClone.setBindingContext(aContexts[i], oBindingInfo.model);
			oClone._bHidden = false;
		} else {
			oClone._bHidden = true;
		}
		this.addAggregation("rows", oClone, true);
	}

	// destroy the template
	oTemplate.destroy();

};



/**
 * updates the rows - called internally by the updateAggregation function when
 * anything in the model has been changed.
 * @private
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.updateRows = function() {

//	// by default the start index is the first visible row
//	var iStartIndex = this.getFirstVisibleRow();
//
//	// calculate the boundaries (at least 0 - max the row count - visible row count)
//	iStartIndex = Math.max(iStartIndex, 0);
//	if (this.getNavigationMode() === sap.ui.table.NavigationMode.Scrollbar) {
//		iStartIndex = Math.min(iStartIndex, Math.max(this._getRowCount() - this.getVisibleRowCount(), 0));
//	}
//	this.setProperty("firstVisibleRow", iStartIndex, true);
//	
//	// when not scrolling we update also the scroll position of the scrollbar
//	if (this._oVSb.getScrollPosition() !== iStartIndex) {
//		this._oVSb.setScrollPosition(iStartIndex);
//	} 
//	
//	// update the paginator
//	if (this._oPaginator && this.getNavigationMode() === sap.ui.table.NavigationMode.Paginator) {
//		// if iStartIndex is equal or greater than the number of total rows go back to page 1
//		var iNewPage = 1;
//		if (iStartIndex < this.getBinding("rows").getLength()) {
//			iNewPage = Math.ceil((iStartIndex + 1) / this.getVisibleRowCount());
//		}
//		if (iNewPage !== this._oPaginator.getCurrentPage()) {
//			this.setProperty("firstVisibleRow", (iNewPage - 1) * this.getVisibleRowCount(), true);
//			this._oPaginator.setCurrentPage(iNewPage);
//			this._oPaginator.rerender();
//		}
//	}

	// update the bindings only once the table is rendered
	if (this.getDomRef()) {

		// update the bindings by using a delayed mechanism to avoid to many update
		// requests: by using the mechanism below it will trigger an update each 50ms
		this._sBindingTimer = this._sBindingTimer || jQuery.sap.delayedCall(50, this, function() {
			// update only if control not marked as destroyed (could happen because updateRows is called during destorying the table) 
			if(!this.bIsDestroyed) {
//				this._determineVisibleCols();
//				this._updateVSb(); // due to boundary check this needs to be done before the binding contexts are applied
//				this._updateBindingContexts();
//				this._updateTableContent();
				this._sBindingTimer = undefined;
			}
		});
	}
};

/**
 * Rerendering handling
 * @private
 */
de.pksoftware.bootstrapui5.controls.table.Table.prototype.onAfterRendering = function() {

//	debugger;
	
//	this._bOnAfterRendering = true;
//
//	var $this = this.$();
//
//	this._updateVSb();
//	this._updateTableContent();
//	this._handleResize();
//	this._attachEvents();
//
//	// restore the column icons
//	var aCols = this.getColumns();
//	for (var i = 0, l = aCols.length; i < l; i++) {
//		if (aCols[i].getVisible()) {
//			aCols[i]._restoreIcons();
//		}
//	}
//	
//	// enable/disable text selection for column headers
//	if (!this._bAllowColumnHeaderTextSelection) {
//		this._disableTextSelection($this.find(".sapUiTableColHdrCnt"));
//	} 
//
//	this._bOnAfterRendering = false;
//
//	this._initItemNavigation();

};


