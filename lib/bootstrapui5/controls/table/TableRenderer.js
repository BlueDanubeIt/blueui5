//Provides default renderer for control sap.ui.table.Table
jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.table.TableRenderer");

/**
 * @class Table renderer.
 * @static
 */
de.pksoftware.bootstrapui5.controls.table.TableRenderer = {};

de.pksoftware.bootstrapui5.controls.table.TableRenderer.render = function(oRm, oTable) {
//	debugger;
	oTable._createRows();
	
	oRm.write('<table');
	oRm.writeControlData(oTable);
	oRm.addClass('table');
	oRm.writeClasses();
	oRm.write('>');
	oTable.getRows().forEach(function(oControl){
		oRm.renderControl(oControl);
	});
	oRm.write('</table>');
//	debugger;
};