sap.ui.controller("de.blue_danube_it.blueui5.controllers.bootstrap.table.Default", {

	/**
	* Controller initialization.
	* Called one time on initialization.
	* @memberOf app.views.bootstrap.table.Default
	*/
	onInit: function() {
		this._initModels();
		this.startDemo();
	},

	/**
	 * Not important for demo.
	 * @private Function to setup needed Models.
	 */
	_initModels : function(){
		var oStaticHelper = de.blue_danube_it.blueui5._static;
		oStaticHelper.modelifyController(this);
		oStaticHelper.setControllerJsonModel(this, "/model/bootstrap/table/Navigation.json", "navigation");
		var sUris = oStaticHelper.fetchGitHubUrls(this);
		
		debugger;
//		var sViewUri = oStaticHelper.fetchGitHubUrl(this, 'controller');
		
	},
	
	/**
	 * Main start of demo.
	 * Setup and bind control models.
	 */
	startDemo : function(){
//		debugger;
		this.setupModel();
		this.setupTable();
	},
	
	setupModel : function(){
		var oModel = new sap.ui.model.json.JSONModel(this.tableModel);
		this.getView().setModel(oModel, 'tableModel');
	},
	
	setupTable : function(){
		var oTable = this.byId("defaultTable");
		
		var oColText1 = new sap.ui.commons.TextView({
			text : "{tableModel>col1}"
		});
		
		oTable.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
			header : new sap.ui.commons.Label({
				text : "Col 1 Header"
			}),
			template : oColText1
		}));
		
		var oColText2 = new sap.ui.commons.TextView({
			text : "{tableModel>col2}"
		});
		
		oTable.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
			header : new sap.ui.commons.Label({
				text : "Col 2 Header"
			}),
			template : oColText2
		}));
		
		var oColText3 = new sap.ui.commons.TextView({
			text : "{tableModel>col3}"
		});
		
		oTable.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
			header : new sap.ui.commons.Label({
				text : "Col 3 Header"
			}),
			template : oColText3
		}));
		
		oTable.bindRows("tableModel>/items");
	},
	
	/**
	 * Table Model, used for setup of demo table.
	 * 
	 * Items Array is our setup of Rows.
	 * Each object entry in items represents one row and it's cell content.
	 */
	tableModel : {
		"items" : [
           {
	   			"col1" : "Link 1",
	   			"col2" : "HTML",
	   			"col3" : "de.blue_danube_it.blueui5.views.sandbox.markus.Navigation"
	   		},	   		
	   		{
	   			"col1" : "Link 1",
	   			"col2" : "HTML",
	   			"col3" : "de.blue_danube_it.blueui5.views.sandbox.markus.Navigation"
	   		},	   		
	   		{
	   			"col1" : "Link 1",
	   			"col2" : "HTML",
	   			"col3" : "de.blue_danube_it.blueui5.views.sandbox.markus.Navigation"
	   		},	   		
	   		{
	   			"col1" : "Link 1",
	   			"col2" : "HTML",
	   			"col3" : "de.blue_danube_it.blueui5.views.sandbox.markus.Navigation"
	   		},	   		
	   		{
	   			"col1" : "Link 1",
	   			"col2" : "HTML",
	   			"col3" : "de.blue_danube_it.blueui5.views.sandbox.markus.Navigation"
	   		},	   		
	   		{
	   			"col1" : "Link 1",
	   			"col2" : "HTML",
	   			"col3" : "de.blue_danube_it.blueui5.views.sandbox.markus.Navigation"
	   		},	   		
	   		{
	   			"col1" : "Link 1",
	   			"col2" : "HTML",
	   			"col3" : "de.blue_danube_it.blueui5.views.sandbox.markus.Navigation"
	   		},	   		
	   		{
	   			"col1" : "Link 1",
	   			"col2" : "HTML",
	   			"col3" : "de.blue_danube_it.blueui5.views.sandbox.markus.Navigation"
	   		},	   		
	   		{
	   			"col1" : "Link 1",
	   			"col2" : "HTML",
	   			"col3" : "de.blue_danube_it.blueui5.views.sandbox.markus.Navigation"
	   		},
	   	]
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf app.views.sandbox.markus.TestTemplate
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf app.views.sandbox.markus.TestTemplate
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf app.views.sandbox.markus.TestTemplate
*/
//	onExit: function() {
//
//	}
});