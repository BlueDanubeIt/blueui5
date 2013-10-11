/**
 * Main controller for oData display.
 * 
 * Purpose of this controller is to fetch oData data 
 * and display it inside a predefined table.
 * 
 * @author Markus Bittner <mb@blue-danube-it.de>
 * 
 * @version 2013-10-10
 * 
 * @param {string} controller
 * @param {json} object
 */
sap.ui.controller("de.blue_danube_it.blueui5.controllers.odata.Display", {
    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * 
     * Here we are initialising an oDataModel and set it as core model, using json as response.
     */
    onInit: function() {
        // localhost/northwind is a reverse proxy setup to 
        
        // needs understanding first.
//        jQuery.sap.require("sap.ui.app.MockServer");
//        var mServer = new sap.ui.app.MockServer();
//        mServer.setRootUri("http://services.odata.org");
//        var sServiceUrl = "http://services.odata.org/Northwind/Northwind.svc/";
//        debugger;
        
        var sServiceUrl = "/northwind/";
        var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
        sap.ui.getCore().setModel(oModel);
        this.byId("Customers").bindRows({
            path: "/Customers"
        });
    },
    onRowSelect: function(oEvent) {
        var rowIndex = oEvent.getParameter('rowIndex');
        var entityPath = oEvent.getParameter('rowContext').sPath;
        alert('Row ' + rowIndex + '\n\nPath to Entity: "' + entityPath + '"');
    },
    onOpen: function(oEvent) {
        alert('open!');
    }
});