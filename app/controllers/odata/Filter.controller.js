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
sap.ui.controller("de.blue_danube_it.blueui5.controllers.odata.Filter", {
    oDataMeta: null,
    sPathEntitySet: "/dataServices/schema/1/entityContainer/0/entitySet",
    /**
     * Called when a controller is instantiated and its View 
     * controls (if available) are already created.
     * Can be used to modify the View before it is displayed, 
     * to bind event handlers and do other one-time initialization.
     *
     * Here we are initialising an oDataModel and set it as core model, 
     * using json as response.
     * @todo Documentation
     */
    onInit: function() {
        // needs understanding first.
//        jQuery.sap.require("sap.ui.app.MockServer");
//        var mServer = new sap.ui.app.MockServer();
//        mServer.setRootUri("http://services.odata.org");
//        var sServiceUrl = "http://services.odata.org/Northwind/Northwind.svc/";

        // localhost/northwind is a reverse proxy setup to 
        var sServiceUrl = "/northwind/";
        var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
        this.getView().setModel(oModel, "results");
        
        // reading oData meta data.
        this.oDataMeta = oModel.getServiceMetadata();
        var oMetaModel = new sap.ui.model.json.JSONModel(this.oDataMeta);
        var drop = this.byId("drop");
        drop.setModel(oMetaModel);
        
        var oItemTemplateList = new sap.ui.core.ListItem({
            text: "{name}", 
            key: "{entityType}"
        });
        // Binding  oData entity set to DropdownBox.
        drop.bindItems(this.sPathEntitySet, oItemTemplateList);
    },
    /**
     * @todo Documentation
     * @param {string} sEntityType Entity type of entity set to fetch entity 
     * informations for.
     */
    fetchEntityType: function(sEntityType) {
        var oSchema = this.oDataMeta.dataServices.schema[0];
        var oEntityTypes = oSchema.entityType;
        var aEntityType = sEntityType.split('.');
        var oEntityType = {};
        if (aEntityType[1]) {
            sEntityType = aEntityType[1];
            jQuery.each(oEntityTypes, function() {
                if (this.name === sEntityType) {
                    oEntityType = this;
                    return;
                }
            });
        }
        return oEntityType;
    },
    /**
     * @todo Documentation
     * @param {object} oEvent Select change event.
     */
    onFilter: function(oEvent) {
        var oSelectedItem = oEvent.getParameter('selectedItem');
        var sNavigationProperty = oSelectedItem.getProperty('text');
        var sEntityType = oSelectedItem.getProperty('key');
        var oEntityType = this.fetchEntityType(sEntityType);
        try {
            var table = this.byId("Customers");
            table.destroyColumns();
            table.unbindRows();
            jQuery.each(oEntityType.property, function() {
                var sPath = "{results>" + this.name + "}";
                var oControl = new sap.ui.commons.TextView({
                    text: 'not implemented'
                });
                switch (this.type) {
                    case 'Edm.Binary':
                        break;
                    case 'Edm.Int32':
                    default:
                        oControl = new sap.ui.commons.TextView({
                            text: sPath
                        });
                    	break;
                }

                table.addColumn(new sap.ui.table.Column({
                    label: new sap.ui.commons.Label({text: this.name}),
                    template: oControl
                }));
            });
            table.bindRows({
                path: "results>/" + sNavigationProperty
            });
        } catch (oException) {

        }
    },
    /**
     * @todo Documentation
     * @param {object} oEvent Row select change event.
     */
    onRowSelect: function(oEvent) {
        var rowIndex = oEvent.getParameter('rowIndex');
        var entityPath = oEvent.getParameter('rowContext').sPath;
        alert('Row ' + rowIndex + '\n\nPath to Entity: "' + entityPath + '"');
    },
    /**
     * @todo Documentation
     * @param {object} oEvent Button click event.
     */
    onOpen: function(oEvent) {
        alert('open!');
    }
});