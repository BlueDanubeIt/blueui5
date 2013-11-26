//Provides default renderer for control sap.ui.table.Table
jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.table.RowRenderer");

/**
 * @class Table renderer.
 * @static
 */
de.pksoftware.bootstrapui5.controls.table.RowRenderer = {};

de.pksoftware.bootstrapui5.controls.table.RowRenderer.render = function(oRm, oRow) {
	oRm.write('<tr');
	oRm.writeControlData(oRow);
	oRm.write('>');
	oRow.getColumns().forEach(function(oCol){
		oRm.renderControl(oCol);
	});
	oRm.write('</tr>');
};