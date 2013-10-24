/**
 * 
 * Common template
 * 
 * @author Markus Bittner <mb@blue-danube-it.de>
 * 
 * Copyright (c) 2013 Blue Danube It
 * 
 * http://www.blue-danube-it.de
 * 
 */

jQuery.sap.declare("app.controls.templates.Common");

jQuery.sap.require("sap.ui.core.Control");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Container");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.PageHeader");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Lead");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Row");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Col");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Nav");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.NavItem");
jQuery.sap.require("de.pksoftware.bootstrapui5.controls.Link");

sap.ui.core.Control.extend("app.controls.templates.Common", {
	// ---- META ----
	metadata : {
		
		// ---- object ----
		defaultAggregation : "header",
		
		// ---- control specific ----
		library : "app.controls.templates",
		properties : {
			header : {type:"string"},
			headerSub : {type:"string"},
			leadText : {type:"string"},
		},
		aggregations : {
			"demos" : {
				singularName : "demo",
				multiple : true
			},
			"header" : {
				singularName : "header"
			},
			"navigations" : {
				singularName : "navigation",
				multiple : true,
				type : "de.pksoftware.bootstrapui5.controls.Link"
			},
			"descriptions" : {
				singularName : "desctiption",
				multiple : true
			}
		}
	},
	
	// ---- Private helper ----
	_fetchLead: function(){
		return new de.pksoftware.bootstrapui5.controls.Lead({
			text: this.getLeadText()
		});
	},
	_fetchHeader: function(){
		return oHeader = new de.pksoftware.bootstrapui5.controls.PageHeader({
	   		headerText : this.getHeader(),
	   		subText : this.getHeaderSub()
	   	});
	},	
	_fetchDemoNavRow: function() {
		var aColumnsTop = Array();
		
		// Demos
		var oColumnDemo = new de.pksoftware.bootstrapui5.controls.Col({
			deviceType : "md",
			colCount : 9,
			content : this.getDemos()
		});
		aColumnsTop.push(oColumnDemo);
		
		// Navigations
		aNavigations = this.getNavigations();
		aNavigationsItems = Array();
		aNavigations.forEach(function(e){
			e.setUseButton(true);
			e.setButtonClass("default");
			var oNavItem = new de.pksoftware.bootstrapui5.controls.NavItem({
				content : e
			});
			aNavigationsItems.push(oNavItem);
		});
		
		var oNavigationContent = new de.pksoftware.bootstrapui5.controls.Nav({
			navStacked : true,
			content : aNavigationsItems
		});
		var oColumnNavigation = new de.pksoftware.bootstrapui5.controls.Col({
			deviceType : "md",
			colCount : 3,
			content : oNavigationContent
		});
		aColumnsTop.push(oColumnNavigation);
		
		
		return new de.pksoftware.bootstrapui5.controls.Row({
			content : aColumnsTop
		});
	},
	_fetchDescriptionsRow: function(){

		var aColumnDescription = new de.pksoftware.bootstrapui5.controls.Col({
			deviceType : "md",
			colCount : 12,
			content : this.getDescriptions()
		});
		
		return new de.pksoftware.bootstrapui5.controls.Row({
			content : aColumnDescription
		});
	},
	_fetchFormatedContainer: function(){
		var aContent = Array();
		
		aContent.push(this._fetchHeader());
		aContent.push(this._fetchLead());
		aContent.push(this._fetchDemoNavRow());
		aContent.push(this._fetchDescriptionsRow());
		
		// Container fill
		return new de.pksoftware.bootstrapui5.controls.Container({
			content : aContent
		});
	}
});

app.controls.templates.Common.prototype.init = function() {
	
};