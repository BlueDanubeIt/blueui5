/**
 * 
 * Bootstrap Row Renderer
 * 
 * Author: Markus Bittner <www.blue-danube-it.de>
 * 
 * Copyright (c) 2013 PKSoftware.de, Blue Danube IT
 * 
 * http://pksoftware.de,
 * http://blue-danube-it.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.table.RowRenderer");

/**
 * @class Row Renderer
 * @static
 */
de.pksoftware.bootstrapui5.controls.table.RowRenderer = {};

/**
 * Main entry for rendering control 
 * @param oRm
 * @param {de.pksoftware.bootstrapui5.controls.table.Row} oRow
 */
de.pksoftware.bootstrapui5.controls.table.RowRenderer.render = function(oRm, oRow) {
	oRm.write('<tr');
	oRm.writeControlData(oRow);
	oRm.write('>');
	oRow.getColumns().forEach(function(oCol){
		oRm.renderControl(oCol);
	});
	oRm.write('</tr>');
};