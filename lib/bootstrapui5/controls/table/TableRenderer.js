/**
 * 
 * Bootstrap TableRenderer
 * 
 * Author: Markus Bittner <mb@blue-danube-it.de>
 * 
 * Copyright (c) 2013 PKSoftware.de, Blue Danube IT
 * 
 * http://pksoftware.de,
 * http://www.blue-danube-it.de
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.table.TableRenderer");

/**
 * @class Table renderer.
 * @static
 */
de.pksoftware.bootstrapui5.controls.table.TableRenderer = {};

/**
 * Main entry for rendering control 
 * @param oRm
 * @param {de.pksoftware.bootstrapui5.controls.table.Table} oTable
 */
de.pksoftware.bootstrapui5.controls.table.TableRenderer.render = function(oRm, oTable) {
	oTable._createRows();
	
	// @TODO: Implement Responsive Table Control, Remove from Table.
	if(oTable.getResponsive()){
		oRm.write('<div');
		oRm.addClass('table-responsive');
		oRm.writeClasses();
		oRm.write('>');
		this.renderTable(oRm, oTable);
		oRm.write('</div>');
	} else {
		this.renderTable(oRm, oTable);
	}
};

/**
 * Rendering of table content. 
 * @param oRm
 * @param {de.pksoftware.bootstrapui5.controls.table.Table} oTable
 */
de.pksoftware.bootstrapui5.controls.table.TableRenderer.renderTable = function(oRm, oTable) {
	oRm.write('<table');
	oRm.writeControlData(oTable);
	this.renderTableClasses(oRm, oTable);
	oRm.write('>');
	this.renderHeader(oRm, oTable);
	this.renderFooter(oRm, oTable);
	oRm.write('<tbody>');
	oTable.getRows().forEach(function(oControl){
		oRm.renderControl(oControl);
	});
	oRm.write('</tbody>');
	oRm.write('</table>');	
};

/**
 * Rendering of table classes.
 * @param oRm
 * @param {de.pksoftware.bootstrapui5.controls.table.Table} oTable
 */
de.pksoftware.bootstrapui5.controls.table.TableRenderer.renderTableClasses = function(oRm, oTable) {
	oRm.addClass('table');
	if(oTable.getStriped()){
		oRm.addClass('table-striped');
	}
	if(oTable.getBordered()){
		oRm.addClass('table-bordered');
	}
	if(oTable.getHover()){
		oRm.addClass('table-hover');
	}
	if(oTable.getCondensed()){
		oRm.addClass('table-condensed');
	}
	oRm.writeClasses();
};

/**
 * Rendering of table header. 
 * @param oRm
 * @param {de.pksoftware.bootstrapui5.controls.table.Table} oTable
 */
de.pksoftware.bootstrapui5.controls.table.TableRenderer.renderHeader = function(oRm, oTable) {
	oRm.write('<thead><tr>');
	oTable.getColumns().forEach(function(oCol){
		oRm.write('<th>');
		oRm.write(oCol.getHeader());
		oRm.write('</th>');
	});
	oRm.write('</tr></thead>');
};

/**
 * Rendering of table footer.
 * @todo: implement this.
 * @param oRm
 * @param {de.pksoftware.bootstrapui5.controls.table.Table} oTable
 */
de.pksoftware.bootstrapui5.controls.table.TableRenderer.renderFooter = function(oRm, oTable) {
	oRm.write('<tfoot><tr>');
//  <tfoot>
//    <tr>
//      <td><i>betroffen:<br>4 Mio. Menschen</i></td>
//      <td><i>betroffen:<br>2 Mio. Menschen</i></td>
//      <td><i>betroffen:<br>1 Mio. Menschen</i></td>
//    </tr>
//  </tfoot>
	oRm.write('</tr></tfoot>');
};