/*
 * 
 * PKS5SplitterApplication
 * 
 * Author: Jan Philipp Knöller
 * 
 * Copyright (c) 2013 PKSoftware.de
 * 
 * http://pksoftware.de
 * 
 * Released under Apache2 license: http://www.apache.org/licenses/LICENSE-2.0.txt
 * 
 */

jQuery.sap.declare("de.pksoftware.pks5.PKS5SplitterApplication");

sap.ui.base.ManagedObject.extend("de.pksoftware.pks5.PKS5SplitterApplication", {
	metadata : {
		publicMethods : [],
		
		properties : {
			"root" : {type : "string", group : "Misc", defaultValue : "doc-content"} //sapUiBody
		}
	}
});

var HISTORY_PATH_MASTER = "master";
var HISTORY_PATH_DETAIL = "detail";
var HISTORY_PATH_HEADER = "header";
var HISTORY_PATH_SANDBOX = "sandbox";

/*
 * Initializes the Managed object
 * TODO Ensure its allowed to override init method
 */
de.pksoftware.pks5.PKS5SplitterApplication.prototype.init = function(){
	this._pages = {};
	
	this._createUi5App();

	this._placeUi5App();
    
    this._registerNavHandlers();
    
    this._initHistory();
};

/*
 * Creates the ui5 app control
 */
de.pksoftware.pks5.PKS5SplitterApplication.prototype._createUi5App = function(){
	this._app = new sap.ui.commons.layout.VerticalLayout();
	//this._app.setHeight('100%');
	this._app.setWidth('100%');
	
	//Header
	var header = new de.pksoftware.bootstrapui5.controls.NavBar({brand : "Blue Danube IT"});
	this._app.addContent(header);
	
	
	
	var splitter = new sap.ui.commons.Splitter();
	splitter.setSplitterBarVisible(false);
	splitter.setSplitterPosition('25%');
	splitter.setHeight('100%');
	
	this._app.addContent(splitter);
	this._splitter = splitter;
};


/*
 * Places the ui5 app control in DOM
 */
de.pksoftware.pks5.PKS5SplitterApplication.prototype._placeUi5App = function(){
	this._app.placeAt(this.getRoot());
};

/*
 * Registers the navigation handlers
 */
de.pksoftware.pks5.PKS5SplitterApplication.prototype._registerNavHandlers = function(){
	var oBus = sap.ui.getCore().getEventBus();
	
	oBus.subscribe("nav", "to", jQuery.proxy(this._navTo, this));
	oBus.subscribe("nav", "back", jQuery.proxy(this._navBack, this));
};

/*
 * Evemt handler for back events
 * @TODO to be implemented
 */
de.pksoftware.pks5.PKS5SplitterApplication.prototype._navBack = function (channelId, eventId, data) {
	
	
};

/*
 * Evemt handler for nav-to events
 */
de.pksoftware.pks5.PKS5SplitterApplication.prototype._navTo = function (channelId, eventId, data) {
	var page = this._addPage(data);
	
	if(data.parameters)
		page.setModel(new sap.ui.model.json.JSONModel(data.parameters), "parameters");
	
	var historyPath = null;
	if(data.target === 'Master'){
		this._splitter.removeAllFirstPaneContent();
		this._splitter.addFirstPaneContent(page);
		historyPath = HISTORY_PATH_MASTER;
	}
	else if(data.target === 'Detail'){
		this._splitter.removeAllSecondPaneContent();
		this._splitter.addSecondPaneContent(page);
		historyPath = HISTORY_PATH_DETAIL;
	}
	
	// write browser history
	if (historyPath && data.writeHistory) {
		var bookmarkable = false;
		jQuery.sap.history.addHistory(historyPath, data, bookmarkable);
	}
};

de.pksoftware.pks5.PKS5SplitterApplication.prototype._initHistory = function () {

	_self = this;
	jQuery.sap.require("jquery.sap.history");
	jQuery.sap.history({
		routes : [
			{
				path : HISTORY_PATH_MASTER,
				handler : function (params, navType) {
					
					if (navType === jQuery.sap.history.NavType.Back) {
							
						}
					params.writeHistory = false;
					_self._navTo("nav", "to", params);
				}
			},
			{
				path : HISTORY_PATH_DETAIL,
				handler : function (params, navType) {
					
					if (navType === jQuery.sap.history.NavType.Back) {
							
						}
					params.writeHistory = false;
					_self._navTo("nav", "to", params);
				}
			}
		],
		defaultHandler : function (navType) {

			if (navType === jQuery.sap.history.NavType.Back) {
				
			}
			console.log("route");
		}
	});
};


/*
 * Adds a new page to the ui5 app control
 */
de.pksoftware.pks5.PKS5SplitterApplication.prototype._addPage = function(pageProperties){
	if(this._pages[pageProperties.id])
		return this._pages[pageProperties.id];
	
	var page = new sap.ui.view(pageProperties);
		
	this._pages[pageProperties.id] = page;
	
	return page;
};	
