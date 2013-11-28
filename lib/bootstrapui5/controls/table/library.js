/**
 * 
 * Bootstrap Table library
 * 
 * Author: Markus Bittner <www.blue-danube-it.de>
 * 
 * Copyright (c) 2013 PKSoftware.de, Blue Danube IT
 * 
 * http://pksoftware.de,
 * http://blue-danube-it.de
 * 
 */
jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.table.library");
jQuery.sap.require("sap.ui.core.Core");

jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require('com.jquery.datatables.js.jQueryDataTablesMin');

var jQuerDataTablesLib = jQuery.sap.getModulePath("com.jquery.datatables");
jQuery.sap.includeStyleSheet(jQuerDataTablesLib + "/css/jquery.dataTables.css", "jquery-dataTables-css");

sap.ui.getCore().initLibrary({
  name : "de.pksoftware.bootstrapui5.controls.table",
  dependencies : ["sap.ui.core","de.pksoftware.bootstrapui5.controls"],
  types: [],
  interfaces: [],
  controls: [
	"de.pksoftware.bootstrapui5.controls.table.Table",
    "de.pksoftware.bootstrapui5.controls.table.Row",
    "de.pksoftware.bootstrapui5.controls.table.Col"
  ],
  elements: [],
  version: "0.1.5"});

