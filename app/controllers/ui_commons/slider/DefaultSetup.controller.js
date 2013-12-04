sap.ui.controller("de.blue_danube_it.blueui5.controllers.ui_commons.slider.DefaultSetup", {

	/**
	* Controller initialization.
	* Called one time on initialization.
	* @memberOf app.views.ui_commons.slider.DefaultSetup
	*/
	onInit: function() {
		this._initModels();
	},

	/**
	 * Not important for demo.
	 * @private Function to setup needed Models.
	 */
	_initModels : function(){
		var oStaticHelper = de.blue_danube_it.blueui5._static;
		oStaticHelper.modelifyController(this);
		oStaticHelper.setControllerJsonModel(this, "/model/ui_commons/slider/Navigation.json", "navigation");
//		debugger;
		var sUris = oStaticHelper.fetchGitHubUrls(this);
		this.getView().byId('controllerLink').setHref(sUris.sController);
		this.getView().byId('viewLink').setHref(sUris.sView);
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
});