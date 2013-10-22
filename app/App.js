/*
 * 
 * Controller for home view (right side)
 * 
 * Author: Eva Przybyllok - http://blue-danube-it-de
 * Author: Philipp Knöller - http://pksoftware.de
 * 
 * Copyright (c) 2013 Blue Danube IT
 * 
 * http://blue-danube-it.de
 * 
 */

jQuery.sap.declare("de.blue_danube_it.blueui5.App");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.NavBar");

sap.ui.base.ManagedObject.extend("de.blue_danube_it.blueui5.App", {
	metadata : {
		publicMethods : [],
		
		properties : {}
	}
});

/*
 * Initializes the Managed object
 * TODO Ensure its allowed to override init method
 */
de.blue_danube_it.blueui5.App.prototype.init = function(){
	//Tell SAPUI5 where to find pks5application
	jQuery.sap.registerModulePath("de.pksoftware.pks5", "./lib/pks5");
	
	//Tell SAPUI5 where to find utils5
	jQuery.sap.registerModulePath("de.blue_danube_it.utils5", "./lib/utils5");
	
	//Include Bootstrap Css
	jQuery.sap.registerModulePath("com.twitter.bootstrap", "./lib/bootstrap-3.0");
	var bootstrapLibrary = jQuery.sap.getModulePath("com.twitter.bootstrap");
	jQuery.sap.includeStyleSheet(bootstrapLibrary + "/css/bootstrap.min.css", "bootstrap-min-css");
	
	//Require pks5application
	jQuery.sap.require("de.pksoftware.pks5.BootstrapUi5App");
	
	//Create a new PKS5Application
	var pks5 = new de.pksoftware.pks5.BootstrapUi5App({
        root : "doc-content"
    });
	
	
	this._modulePath = jQuery.sap.getModulePath("de.blue_danube_it.blueui5");

	//Blue UI5 Css
	jQuery.sap.includeStyleSheet(this._modulePath + "/css/blueui5.css", "blueui5css");
	
	//Localization
	this._localization = new sap.ui.model.resource.ResourceModel({
		bundleUrl : this._modulePath + "/i18n/i18n.properties"
	});
	sap.ui.getCore().setModel(this._localization, "i18n");
	
	
	document.title = this._localization.getProperty("HTML_TITLE");
	
	//Navigate to Home Master View
	sap.ui.getCore().getEventBus().publish("nav", "to", {id : "blueui5-home-master",
					viewName : "de.blue_danube_it.blueui5.views.HomeMaster",
					type : sap.ui.core.mvc.ViewType.HTML,
					target : 'Master',
					writeHistory : true});
	
	//Navigate to Home Detail View
	sap.ui.getCore().getEventBus().publish("nav", "to", {id : "blueui5-home-detail",
		viewName : "de.blue_danube_it.blueui5.views.Home",
		type : sap.ui.core.mvc.ViewType.HTML,
		target : 'Detail',
		writeHistory : true});
	
	//Navigate to Home Detail View
	sap.ui.getCore().getEventBus().publish("nav", "to", {id : "blueui5-header",
		viewName : "de.blue_danube_it.blueui5.views.Header",
		type : sap.ui.core.mvc.ViewType.HTML,
		target : 'Header',
		writeHistory : true});
	
	sap.ui.getCore().getEventBus().publish("nav", "to", {id : "blueui5-sandbox",
		viewName : "de.blue_danube_it.blueui5.views.Sandbox",
		type : sap.ui.core.mvc.ViewType.HTML,
		target : 'Sandbox',
		writeHistory : true});
};

de.blue_danube_it.blueui5._static = {};