/**
 * @author Markus Bittner <mb@blue-danube-it.de>
 * @version 2013-10-22
 * 
 */
sap.ui.controller("de.blue_danube_it.blueui5.controllers.sandbox.odata.Testing", {					
//Connection success flag.
success : false,
// Reverse proxy setup to
// http://services.odata.org/Northwind/Northwind.svc/
sServiceUrl : "/northwind/",
/**
 * Called when a controller is instantiated and its View
 * controls (if available) are already created. Can be used
 * to modify the View before it is displayed, to bind event
 * handlers and do other one-time initialization.
 * 
 * @memberOf app.controllers.odata.Testing
 */
onInit : function() {
	try {
		// Set up connection.
		var oModel = new sap.ui.model.odata.ODataModel(
				this.sServiceUrl, true);

		if (oModel.getServiceMetadata()) {
			var serviceMeta = oModel.getServiceMetadata();
			var oServiceModel = new sap.ui.model.json.JSONModel(
					serviceMeta);

			var schema0 = oServiceModel
					.getProperty('/dataServices/schema/0');
			var schema1 = oServiceModel
					.getProperty('/dataServices/schema/1');

			var oSchemaModel0 = new sap.ui.model.json.JSONModel(
					schema0);
			var oSchemaModel1 = new sap.ui.model.json.JSONModel(
					schema1);

			this.getView().setModel(oModel, "results");
			this.getView().setModel(oSchemaModel0,
					"schema0");
			this.getView().setModel(oSchemaModel1,
					"schema1");

			this.success = true;
		}
	} catch (oException) {
	}

	this.setUpPrettyContent();
},
onBind : function(oEvent) {
	if (!this.checkConnection()) return;
	
	
	var oDropdownBox = this.byId('odata-dropdown_box_entity_type');
	
    var sNavigationProperty = oDropdownBox.getValue();
    var sEntityType = oDropdownBox.getSelectedKey();
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

onUnBind : function() {
	if (!this.checkConnection()) return;
	// do unBinding!
},

checkConnection:function(){
	if (!this.success) {
		sap.ui.commons.MessageBox
			.show(
			"Unfortunatelly connection to oData service is not setup propperly.",
			"ERROR", "Connettion failed",
			"CLOSE", null, "CLOSE");
	}
	return this.success;
},

setUpPrettyContent : function() {
	var oContentModel = new sap.ui.model.json.JSONModel(
			this);
	this.getView().setModel(oContentModel, 'pretty');
	// oContentModel.loadData(this);
	// debugger;
},
/**
 * @todo Documentation
 * @param {string} sEntityType Entity type of entity set to fetch entity 
 * informations for.
 */
fetchEntityType: function(sEntityType) {
	var oSchema = this.getView().getModel('schema0');
	
	debugger;
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
 * Similar to onAfterRendering, but this hook is invoked before
 * the controller's View is re-rendered (NOT before the first
 * rendering! onInit() is used for that one!).
 * 
 * @memberOf app.controllers.odata.Testing
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part
 * of the document). Post-rendering manipulations of the HTML
 * could be done here. This hook is the same one that SAPUI5
 * controls get after being rendered.
 * 
 * @memberOf app.controllers.odata.Testing
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free
 * resources and finalize activities.
 * 
 * @memberOf app.controllers.odata.Testing
 */
// onExit: function() {
//
// }
});