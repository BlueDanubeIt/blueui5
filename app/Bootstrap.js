/*
 * 
 * Bootstrap file for your application
 * 
 * Author: Eva Przybyllok - http://blue-danube-it-de
 * Author: Philipp Knšller - http://pksoftware.de
 * 
 * Copyright (c) 2013 Blue Danube IT
 * 
 * http://blue-danube-it.de
 * 
 */


/*
 * 
 * Basically, the Bootstrap file is just an extension of the index.html file.
 * The intend is to keep the index.html as small as possible.
 * It's wrapped into an auto executing function to avoid name conflicts.
 *
 */
;(function(){
	var header = new sap.ui.commons.ApplicationHeader({logoSrc : "http://www.blue-danube-it.de/templates/blue-danube-it/logo.png"});
	header.placeAt('doc-header');
	
	jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath("de.blue_danube_it.blueui5")
			+ "/css/blueui5.css", "blueui5css");
	
	//Require App
	jQuery.sap.require("de.blue_danube_it.blueui5.App");
	
	//Create a new App
	var app = new de.blue_danube_it.blueui5.App();
	
	
})();