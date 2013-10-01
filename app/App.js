/*
 * 
 * Main module for your application
 * 
 * Author: Your Name
 * 
 * Copyright (c) 2013 Your Company
 * 
 * http://yourdomain.com
 * 
 */

jQuery.sap.declare("de.blue_danube_it.blueui5.App");

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
	
	//Require pks5application
	jQuery.sap.require("de.pksoftware.pks5.PKS5SplitterApplication");
	
	//Create a new PKS5Application
	var pks5 = new de.pksoftware.pks5.PKS5SplitterApplication({
        root : "doc-content"
    });
	
	
	this._modulePath = jQuery.sap.getModulePath("de.blue_danube_it.blueui5");

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
					target : 'Master'});
	
	//Navigate to Home Detail View
	sap.ui.getCore().getEventBus().publish("nav", "to", {id : "blueui5-home-detail",
		viewName : "de.blue_danube_it.blueui5.views.Home",
		type : sap.ui.core.mvc.ViewType.HTML,
		target : 'Detail'});
};