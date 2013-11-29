sap.ui.controller("de.blue_danube_it.blueui5.controllers.sandbox.markus.Navigation", {


	// Connection success flag.
	success : false,
	// Reverse proxy setup to http://services.odata.org/Northwind/Northwind.svc/
	sServiceUrl : "/northwind/",
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf app.views.sandbox.markus.Navigation
*/
	onInit: function() {
		this.testJsonTable();
//		this.testJsonTable1();
//		this.testOdataTable();
//		this.testSapTable();
	},

	testSapTable : function(){
		var oStaticHelper = de.blue_danube_it.blueui5._static;
		oStaticHelper.setControllerJsonModel(this, "/model/sandbox/markus/TestTable.json", "jsonResultSap");
		var oControl = null;
		var table = this.byId("sapTable");
		oControl = new sap.ui.commons.TextView({
			text : "{jsonResultSap>text}"
		});
		
		table.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Text"
			}),
			template : oControl
		}));
		
		oControl = new sap.ui.commons.TextView({
			text : "{jsonResultSap>viewType}"
		});
		
		table.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "View Type"
			}),
			template : oControl
		}));
		
		oControl = new sap.ui.commons.TextView({
			text : "{jsonResultSap>viewId}"
		});
		
		table.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "View Id"
			}),
			template : oControl
		}));
		
		table.bindRows("jsonResultSap>/items");
	},
	
	testOdataTable : function(){
		try {
			// Set up connection.
			var oModel = new sap.ui.model.odata.ODataModel(this.sServiceUrl,
					true);
			if (oModel.getServiceMetadata()) {
				
				this.getView().setModel(oModel, "odataResult");
				this.success = true;
				var table = this.byId("boTable3");
				oControl = new sap.ui.commons.TextView({
					text : "{odataResult>CustomerID}"
				});
				table.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
					header : new sap.ui.commons.Label({
						text : "Customer Id"
					}),
					template : oControl
				}));
				
				oControl = new sap.ui.commons.TextView({
					text : "{odataResult>CompanyName}"
				});
				table.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
					header : new sap.ui.commons.Label({
						text : "Company Name"
					}),
					template : oControl
				}));
				
				oControl = new sap.ui.commons.TextView({
					text : "{odataResult>Country}"
				});
				table.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
					header : new sap.ui.commons.Label({
						text : "Country"
					}),
					template : oControl
				}));
				
				table.bindRows("odataResult>/Customers");
				
			}
		} catch (eException) {
			
		}
	},
	
	testJsonTable1 : function(){
		var oStaticHelper = de.blue_danube_it.blueui5._static;
		oStaticHelper.setControllerJsonModel(this, "/model/sandbox/markus/TestTable.json", "jsonResult");
		var oControl = null;
		var table = this.byId("boTable1");
		oControl = new sap.ui.commons.TextView({
			text : "{jsonResult>text}"
		});
		
		table.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
			header : new sap.ui.commons.Label({
				text : "Text"
			}),
			template : oControl
		}));
		
		oControl = new sap.ui.commons.TextView({
			text : "{jsonResult>viewType}"
		});
		
		table.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
			header : new sap.ui.commons.Label({
				text : "View Type"
			}),
			template : oControl
		}));
		
		oControl = new sap.ui.commons.TextView({
			text : "{jsonResult>viewId}"
		});
		
		table.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
			header : new sap.ui.commons.Label({
				text : "View Id"
			}),
			template : oControl
		}));
		
		table.bindRows("jsonResult>/items");
	},
	
	testJsonTable : function(){
		var oStaticHelper = de.blue_danube_it.blueui5._static;
		oStaticHelper.setControllerJsonModel(this, "/model/sandbox/markus/TestTable.json", "jsonResult2");
		var oControl = null;
		var table = this.byId("boTable2");
		oControl = new sap.ui.commons.TextView({
			text : "{jsonResult2>text}"
		});
		
		table.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
			header : new sap.ui.commons.Label({
				text : "Text"
			}),
			template : oControl
		}));
		
		oControl = new sap.ui.commons.TextView({
			text : "{jsonResult2>viewType}"
		});
		
		table.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
			header : new sap.ui.commons.Label({
				text : "View Type"
			}),
			template : oControl
		}));
		
		oControl = new sap.ui.commons.TextView({
			text : "{jsonResult2>viewId}"
		});
		
		table.addColumn(new de.pksoftware.bootstrapui5.controls.table.Col({
			header : new sap.ui.commons.Label({
				text : "View Id"
			}),
			template : oControl
		}));
		
		table.bindRows("jsonResult2>/items");
	},
	
//	_initModels : function(){
//		var oStaticHelper = de.blue_danube_it.blueui5._static;
//		oStaticHelper.modelifyController(this);
//		oStaticHelper.setControllerJsonModel(this, "/model/sandbox/markus/TestTable.json", "odataResult");
//	},
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf app.views.sandbox.markus.Navigation
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf app.views.sandbox.markus.Navigation
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf app.views.sandbox.markus.Navigation
*/
//	onExit: function() {
//
//	}

});