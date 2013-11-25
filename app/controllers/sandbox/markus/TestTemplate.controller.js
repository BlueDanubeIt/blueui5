sap.ui.controller("de.blue_danube_it.blueui5.controllers.sandbox.markus.TestTemplate", {

	/**
	* Called when a controller is instantiated and its View controls (if available) are already created.
	* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	* @memberOf app.views.sandbox.markus.TestTemplate
	*/
	onInit: function() {
		this._initModels();
	},

	_initModels : function(){
		var oStaticHelper = de.blue_danube_it.blueui5._static;
		oStaticHelper.modelifyController(this);
		oStaticHelper.setControllerJsonModel(this, "/model/sandbox/markus/TestingNavigation.json", "navigation");
	},
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
}
});