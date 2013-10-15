/**
 * Main controller for oData display.
 * 
 * Purpose of this controller is to fetch oData data 
 * and display it inside a predefined table.
 * 
 * @author Markus Bittner <mb@blue-danube-it.de>
 * 
 * @version 2013-10-11
 * 
 * @param {string} controller
 * @param {json} object
 */
sap.ui.controller("de.blue_danube_it.blueui5.controllers.odata.Display", {
    // Connection success flag.
    success: false,
    // Reverse proxy setup to http://services.odata.org/Northwind/Northwind.svc/
    sServiceUrl: "/northwind/",
    /**
     * Set up connection to our oData service.
     * ODataModel retrieves metadata information from OData.
     * 
     * Set view model with namespace "results".
     * 
     * Flag success if connection was successful.
     * 
     * @todo: Set up connection using new MockServer class
     * //        jQuery.sap.require("sap.ui.app.MockServer");
     * //        var mServer = new sap.ui.app.MockServer();
     * //        mServer.setRootUri("http://services.odata.org");
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
        // Custom Control to render source code follows.
        this.renderFunctionsContent();
    },
    /**
     * When table row selection changes, we display binding information's 
     * of this row.
     * @param {object} oEvent Event triggered by table on row selection change.
     */
    onRowSelect: function(oEvent) {
        var rowIndex = oEvent.getParameter('rowIndex');
        var entityPath = oEvent.getParameter('rowContext').sPath;
        alert('Row ' + rowIndex + '\n\nPath to Entity: "' + entityPath + '"');
    },
    /**
     * If odata connection was set up propperly, we bind Customers to our table.
     * As binding is done, odata result is rendered.
     * 
     * Request to http://services.odata.org/Northwind/Northwind.svc/Customers
     * 
     * @param {object} oEvent Event triggered if button is pressed. (not Used)
     */
    onBind: function(oEvent) {
        if(!this.success) {
            alert('Loading of Data failed or reverseproxy is not setup.');
            return; // Break here, connection to service failed.
        }
        // Bind Customers to our Table + send request to oData.
        this.byId("Customers").bindRows({
            path: "results>/Customers"
        });
    },
    /**
     * Calls unbindRows to our table, to erase content.
     * 
     * @param {object} oEvent Event triggered if button is pressed. (not Used)
     */
    onUnbind:function(oEvent){
        this.byId("Customers").unbindRows();
    },
    
    // ====================
    // == Unimportant... ==
    // ====================
    
    /**
     * Used to display content of this controller functions.
     * 
     * Displays:
     * <code>this.onInit();</code>
     * <code>this.onBind();</code>
     * <code>this.onUnbind();</code>
     * <code>this.onRowSelect();</code>
     * <code>this.sTableXml;</code>
     */
    renderFunctionsContent: function(){
        this.byId("text_onInit").setText(this.onInit);
        this.byId("text_onBind").setText(this.onBind);
        this.byId("text_onUnbind").setText(this.onUnbind);  
        this.byId("text_onRowSelect").setText(this.onRowSelect);
        this.byId("text_table").setText(this.sTableXml);
    },
    sTableXml: "<table:Table id=\"Customers\" title=\"Customers\" \n"+
                 "selectionMode=\"Single\" rowSelectionChange=\"onRowSelect\">\n"+
        "<table:toolbar>\n"+
            "<Toolbar>\n"+
                "<!-- Buttons to execute onBind and onUnbind. -->\n"+
                "<items>\n"+
                    "<Button text=\"Bind\" press=\"onBind\"></Button>\n"+
                    "<Button text=\"Unbind\" press=\"onUnbind\"></Button>\n"+
                "</items>\n"+
            "</Toolbar>\n"+
        "</table:toolbar>\n\n"+
        
        "<!-- Collumn to bind CustomerID of Customers -->\n"+
        "<table:Column width=\"100px\" sortProperty=\"CustomerID\">\n"+
            "<Label text=\"Customer ID\"></Label>\n"+
            "<table:template>\n"+
                "<TextView text=\"{results>CustomerID}\"></TextView>\n"+
            "</table:template>\n"+
        "</table:Column>\n\n"+
        
        "<!-- Collumn to bind CompanyName of Customers -->\n"+
        "<table:Column sortProperty=\"CompanyName\">\n"+
            "<Label text=\"Company Name\"></Label>\n"+
            "<table:template>\n"+
                "<TextView text=\"{results>CompanyName}\"></TextView>\n"+
            "</table:template>\n"+
        "</table:Column>\n\n"+
        
        "<!-- Collumn to bind ContactName of Customers -->\n"+
        "<table:Column hAlign=\"Center\">\n"+
            "<Label text=\"Contact Name\"></Label>\n"+
            "<table:template>\n"+
                "<TextView text=\"{results>ContactName}\"></TextView>\n"+
            "</table:template>\n"+
        "</table:Column>\n\n"+
        
        "<!-- Collumn to bind ContactTitle of Customers -->\n"+
        "<table:Column>\n"+
            "<Label text=\"Contact Title\"></Label>\n"+
            "<table:template>\n"+
                "<TextField value=\"{results>ContactTitle}\"></TextField>\n"+
            "</table:template>\n"+
        "</table:Column>\n"+
    "</table:Table>"
            
});