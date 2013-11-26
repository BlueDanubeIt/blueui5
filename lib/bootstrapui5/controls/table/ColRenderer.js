//Provides default renderer for control sap.ui.table.Table
jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.table.ColRenderer");

/**
 * @class Table renderer.
 * @static
 */
de.pksoftware.bootstrapui5.controls.table.ColRenderer = {};

de.pksoftware.bootstrapui5.controls.table.ColRenderer.render = function(oRm, oCol) {
	oRm.write('<td');
	oRm.writeControlData(oCol);
	oRm.write('>');
//	debugger;
//	oRm.writeElementData(oCol.getTemplate());
//	oRm.renderControl(oCol.getTemplate());
	oRm.write('lala');
	oRm.write('</td>');
};