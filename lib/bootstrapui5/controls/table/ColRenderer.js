/**
 * 
 * Bootstrap Table RowRenderer
 * 
 * Author: Markus Bittner <mb@blue-danube-it.de>
 * 
 * Copyright (c) 2013 PKSoftware.de, Blue Danube IT
 * 
 * http://pksoftware.de,
 * http://www.blue-danube-it.de
 */

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
	oRm.renderControl(oCol.getTemplate());
	oRm.write('</td>');
};