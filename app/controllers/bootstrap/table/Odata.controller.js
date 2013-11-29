sap.ui.controller("de.blue_danube_it.blueui5.controllers.bootstrap.table.Odata", {

	// Connection success flag.
	success : false,
	// Reverse proxy setup to http://services.odata.org/Northwind/Northwind.svc/
	sServiceUrl : "/northwind/",
	
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
		this.getView().byId('controllerLink').setHref(sUris.sController);
		this.getView().byId('viewLink').setHref(sUris.sView);
	},
	
	/**
	 * Main start of demo.
	 * Setup and bind control models.
	 */
	startDemo : function(){
		this.setupModel();
		this.setupTable();
	},
	
setupModel : function(){
	try {
		// Set up connection. 
		// Reverse proxy setup to http://services.odata.org/Northwind/Northwind.svc/
		// Rewrite and redirect to /notrtwind/ on our server. (For detailed Information, see Odata Part of our documentation.)
		var oModel = new sap.ui.model.odata.ODataModel(this.sServiceUrl, true);
		if (oModel.getServiceMetadata()) {
			this.getView().setModel(oModel, "tableModel");
			this.success = true;
		}
	} catch (oException) {}
},
	
setupTable : function(){
	var oTable = this.byId("odataTable");
	
	var oCol1 = new sap.ui.commons.TextView({
		text : "{tableModel>CustomerID}"
	});
	oTable.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
		header : new sap.ui.commons.Label({
			text : "Customer Id"
		}),
		template : oCol1
	}));
	
	var oCol2= new sap.ui.commons.TextView({
		text : "{tableModel>CompanyName}"
	});
	oTable.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
		header : new sap.ui.commons.Label({
			text : "Company Name"
		}),
		template : oCol2
	}));
	
	var oCol3 = new sap.ui.commons.TextView({
		text : "{tableModel>Country}"
	});
	oTable.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
		header : new sap.ui.commons.Label({
			text : "Country"
		}),
		template : oCol3
	}));
	
	oTable.bindRows("tableModel>/Customers");
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