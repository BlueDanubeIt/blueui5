/*
 * 
 * Controller for home view (right side)
 * 
 * Author: Eva Przybyllok - http://blue-danube-it-de
 * Author: Philipp Knšller - http://pksoftware.de
 * 
 * Copyright (c) 2013 Blue Danube IT
 * 
 * http://blue-danube-it.de
 * 
 */

sap.ui.controller("de.blue_danube_it.blueui5.controllers.Home", {
	
	onInit : function () {
		
	},
	
	navToSettings : function () {
    	//Navigate to Settings Master View
    	sap.ui.getCore().getEventBus().publish("nav", "to", {id : "yourapplication-settings-master",
    					viewName : "com.yourdomain.yourapplication.views.SettingsMaster",
    					type : sap.ui.core.mvc.ViewType.HTML,
    					target : 'Master'});
    	
    	//Navigate to Settings Detail View
    	sap.ui.getCore().getEventBus().publish("nav", "to", {id : "yourapplication-settings-detail",
    		viewName : "com.yourdomain.yourapplication.views.Settings",
    		type : sap.ui.core.mvc.ViewType.HTML,
    		target : 'Detail'});
    }

});
