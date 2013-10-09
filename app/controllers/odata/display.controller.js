/**
 * Main controller for oData display.
 * 
 * Purpose of this controller is to fetch oData data 
 * and display it inside a predefined table.
 * 
 * @author Markus Bittner <mb@blue-danube-it.de>
 * 
 * @version 2013-10-09
 * 
 * @param {string} controller
 * @param {json} object
 */
sap.ui.controller("de.blue_danube_it.blueui5.controllers.odata.display", {
    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * 
     * Here we are initialising an oDataModel and set it as core model, using json as response.
     */
    onInit: function() {
        // localhost/northwind is a reverse proxy setup to 
        var sServiceUrl = "/northwind/";
        var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
        sap.ui.getCore().setModel(oModel);
    },
    /**
     * Called after onInit and before the browser renders our table.
     * 
     * We are binding Customers of the oData service to our table.
     * Call to 
     */
    onBeforeRendering: function() {
        this.byId("Customers").bindRows({
            path: "/Customers"
        });
    },
    onAfterRendering: function() {
//        debugger;
    },
    /**
     * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * (NOT before the first rendering! onInit() is used for that one!).
     */
//   onBeforeRendering: function() {
//      
//   },

    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.
     */
//   onAfterRendering: function() {
//
//   },

    /**
     * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
     */
//   onExit: function() {
//
//   }

});