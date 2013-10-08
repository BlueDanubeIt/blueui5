/*
 * 
 * PKS5SplitApp
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

jQuery.sap.declare("de.pksoftware.pks5.PKS5SplitApp");

sap.ui.base.ManagedObject.extend("de.pksoftware.pks5.PKS5SplitApp", {
	metadata : {
		publicMethods : [],
		
		properties : {
			"root" : {type : "string", group : "Misc", defaultValue : "sapUiBody"}
		}
	}
});

/*
 * Initializes the Managed object
 * TODO Ensure its allowed to override init method
 */
de.pksoftware.pks5.PKS5SplitApp.prototype.init = function(){
	this._pages = {};
	
	
	this._createUi5App();

	this._setInitialPages();

    this._placeUi5App();
    
    this._registerNavHandlers();
};

/*
 * Creates the ui5 app control
 */
de.pksoftware.pks5.PKS5SplitApp.prototype._createUi5App = function(){
	this._app = new sap.m.SplitApp();
	
	//Set default page transition. Possible values are show, slide and fade
	this._app.setDefaultTransitionNameDetail("slide");
};

/*
 * Sets the initial pages
 */
de.pksoftware.pks5.PKS5SplitApp.prototype._setInitialPages = function(){
	this._addPage({id : "pks5-page-empty-detail",
					viewName : "de.pksoftware.pks5.views.Empty",
					type : sap.ui.core.mvc.ViewType.HTML,
					target : 'Detail'});

	this._addPage({id : "pks5-page-empty-master",
					viewName : "de.pksoftware.pks5.views.Empty",
					type : sap.ui.core.mvc.ViewType.HTML,
					target : 'Master'});
		
	this._app.setInitialDetail("pks5-page-empty-detail");
	this._app.setInitialMaster("pks5-page-empty-master");
};

/*
 * Places the ui5 app control in DOM
 */
de.pksoftware.pks5.PKS5SplitApp.prototype._placeUi5App = function(){
	this._app.placeAt(this.getRoot());
};

/*
 * Registers the navigation handlers
 */
de.pksoftware.pks5.PKS5SplitApp.prototype._registerNavHandlers = function(){
	var oBus = sap.ui.getCore().getEventBus();
	
	oBus.subscribe("nav", "to", jQuery.proxy(this._navTo, this));
	oBus.subscribe("nav", "back", jQuery.proxy(this._navBack, this));
};

/*
 * Evemt handler for back events
 */
de.pksoftware.pks5.PKS5SplitApp.prototype._navBack = function (channelId, eventId, data) {
	
	if(data.target === 'Master' || data.target === 'MasterDetail')
		this._app.backMaster();
	
	if(data.target === 'Detail' || data.target === 'MasterDetail')
		this._app.backDetail();
};

/*
 * Evemt handler for nav-to events
 */
de.pksoftware.pks5.PKS5SplitApp.prototype._navTo = function (channelId, eventId, data) {
	var page = this._addPage(data);
	
	if(data.parameters)
		page.setModel(new sap.ui.model.json.JSONModel(data.parameters), "parameters");
	
	if(data.target === 'Master')
		this._app.toMaster(page, data.transitionName, data.parameters);
	else if(data.target === 'Detail')
		this._app.toDetail(page, data.transitionName, data.parameters);
};

/*
 * Adds a new page to the ui5 app control
 */
de.pksoftware.pks5.PKS5SplitApp.prototype._addPage = function(pageProperties){
	if(this._pages[pageProperties.id])
		return this._pages[pageProperties.id];
	
	var page = new sap.ui.view(pageProperties);
		
	if(pageProperties.target === 'Master')
		this._app.addMasterPage(page);
	else if(pageProperties.target === 'Detail')
		this._app.addDetailPage(page);
	
	this._pages[pageProperties.id] = page;
	
	return page;
};	
