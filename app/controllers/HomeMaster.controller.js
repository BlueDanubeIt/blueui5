/*
 * 
 * Controller for home view (left side)
 * 
 * Author: Eva Przybyllok - http://blue-danube-it-de
 * Author: Philipp Knšller - http://pksoftware.de
 * 
 * Copyright (c) 2013 Blue Danube IT
 * 
 * http://blue-danube-it.de
 * 
 */

sap.ui.controller("de.blue_danube_it.blueui5.controllers.HomeMaster", {
	
	onInit : function () {
		var jsonModel = new sap.ui.model.json.JSONModel();
		jsonModel.loadData(jQuery.sap.getModulePath("de.blue_danube_it.blueui5") + "/model/TreeNodes.json", {}, false);
		this.getView().setModel(jsonModel, "TreeNodes");
		
		
	},
	
	onTreeNodeSelect : function (oEvent) { 
		
		var oNode=oEvent.getParameters().node;
		var oBindingContext = oNode.getBindingContext("TreeNodes");
		
		this._navToListItemTarget(oBindingContext);
		
	},
	
	_navToListItemTarget : function(oBindingContext) {
		var model = oBindingContext.getModel();
		var path = oBindingContext.getPath();
		
		//Navigate to Settings Detail View
    	sap.ui.getCore().getEventBus().publish("nav", "to", 
    			{id : model.getProperty(path + "/ViewId"),
		    		viewName : model.getProperty(path + "/ViewName"),
		    		type : model.getProperty(path + "/ViewType"),
		    		target : "Detail"
		    	});
	}
	
//	treeNodesFactory : function(sId, oContext) {
//    	//bind all properties from https://sapui5.netweaver.ondemand.com/sdk/#docs/api/symbols/sap.ui.commons.TreeNode.html#constructor
//  		//except selected (causes the factory to be rerun when a TreeNode is selected)
//    	//+ include our id from the model as CustomData to the TreeNode
//    	
//		var oTreeNode = new sap.ui.commons.TreeNode(sId)
//    		.bindProperty("text",oContext.sPath+"/text")
//    		.bindProperty("expanded",oContext.sPath+"/expanded")
//    		.bindProperty("hasExpander",oContext.sPath+"/hasExpander")
//    		.bindProperty("selectable",oContext.sPath+"/selectable")
//    		.bindProperty("icon",oContext.sPath+"/icon")
//    		.addCustomData(new sap.ui.core.CustomData({
//				key: "modelId",	
//				value: oContext.oModel.getProperty(oContext.sPath+"/id"),
//				writeToDom: true}));
//		
//		/* This code is not relevant as long as sap-icon:// not yet supported with TreeNode
//		var iconSrc = oContext.oModel.getProperty(oContext.sPath+"/icon");
//		if(iconSrc){
//			oTreeNode.setIcon(sap.ui.core.IconPool.getIconURI(iconSrc));
//		}*/
//		
//		return oTreeNode;
//	}
});
