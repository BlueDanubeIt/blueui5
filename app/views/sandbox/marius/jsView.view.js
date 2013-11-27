sap.ui.jsview("sap.hcm.jsView", {
	getControllerName: function() {
		return 'de.blue_danube_it.blueui5.controllers.sandbox.marius.MyView';
	},
	createContent: function(oController) {
		var oHeading = new de.pksoftware.bootstrapui5.controls.PageHeader({
			headerText: 'This is an JS view',
			subText: 'Just a page based on a js template'
		});
		return oHeading;
	}
});