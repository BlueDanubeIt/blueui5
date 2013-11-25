/**
 * 
 * Common template renderer
 * 
 * @author Markus Bittner <mb@blue-danube-it.de>
 * 
 * Copyright (c) 2013 Blue Danube It
 * 
 * http://www.blue-danube-it.de
 * 
 */

jQuery.sap.declare("app.controls.templates.CommonRenderer");

app.controls.templates.CommonRenderer = {
		oControlInstance : null,
		
		//---- Private helper ----
		_fetchLead: function(){
			return new de.pksoftware.bootstrapui5.controls.Lead({
				text: this.oControlInstance.getLeadText()
			});
		},
		_fetchHeader: function(){
			return oHeader = new de.pksoftware.bootstrapui5.controls.PageHeader({
		   		headerText : this.oControlInstance.getHeader(),
		   		subText : this.oControlInstance.getHeaderSub()
		   	});
		},	
		_fetchDemoNavRow: function() {
			var aColumnsTop = Array();
			
			// Demos
			var oColumnDemo = new de.pksoftware.bootstrapui5.controls.Col({
				deviceType : "md",
				colCount : 9,
				content : this.oControlInstance.getDemos()
			});
			aColumnsTop.push(oColumnDemo);
			
			// Navigations
			aNavigations = this.oControlInstance.getNavigations();
//			debugger;
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
				content : this.oControlInstance.getDescriptions()
			});
			
			return new de.pksoftware.bootstrapui5.controls.Row({
				content : aColumnDescription
			});
		},
		_fetchFormatedContainer: function(oControl){
			this.oControlInstance = oControl;
			var content = this.oControlInstance.getContent();
//			debugger;
			if(content){
				this.oControlInstance.setContent(content);
				return;
			}
			var aContent = Array();
			
			aContent.push(this._fetchHeader());
			aContent.push(this._fetchLead());
			aContent.push(this._fetchDemoNavRow());
			aContent.push(this._fetchDescriptionsRow());
			
			
			
			this.oControlInstance.setContent(new de.pksoftware.bootstrapui5.controls.Container({
				content : aContent
			}));
			
//			return new sap.ui.commons.layout.VerticalLayout({
//		        content: oControl.getDescriptions()
//			});
			
//			// Container fill
//			return ;
		}
};

app.controls.templates.CommonRenderer.render = function(oRm,
		oControl) {
//	debugger;
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("template-common");
	oRm.writeClasses();
	oRm.write(">");
	this._fetchFormatedContainer(oControl);
	oRm.renderControl(this.oControlInstance.getContent());
//	oRm.renderControl(this._fetchFormatedContainer(oControl));
//	oRm.renderControl(this._fetchFormatedContainer(oControl));
	oRm.write("</div>");
};