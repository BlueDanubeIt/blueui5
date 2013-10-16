sap.ui.controller("de.blue_danube_it.blueui5.controllers.odata.Testing", {
	// Connection success flag.
    success: false,
    // Reverse proxy setup to http://services.odata.org/Northwind/Northwind.svc/
    sServiceUrl: "/northwind/",
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf app.controllers.odata.Testing
*/
	onInit: function() {
		 try {
            // Set up connection.
            var oModel = new sap.ui.model.odata.ODataModel(this.sServiceUrl, true);
            if(oModel.getServiceMetadata()){
                this.getView().setModel(oModel, "results");
                this.success = true;
            }
        } catch(eException){}
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf app.controllers.odata.Testing
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf app.controllers.odata.Testing
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf app.controllers.odata.Testing
*/
//	onExit: function() {
//
//	}

});