/**
 * 
 * Bootstrap Paginator Renderer default
 * 
 * Author: Markus Bittner <www.blue-danube-it.de>
 * 
 * Copyright (c) 2013 PKSoftware.de, Blue Danube IT
 * 
 * http://pksoftware.de,
 * http://blue-danube-it.de
 * 
 */

jQuery.sap.declare("de.pksoftware.bootstrapui5.controls.PaginatorRenderer");

de.pksoftware.bootstrapui5.controls.PaginatorRenderer = {};

de.pksoftware.bootstrapui5.controls.PaginatorRenderer.render = function(oRm, oPaginator) {
	
	oRm.write('<ul');
	oRm.writeControlData(oPaginator);
	oRm.addClass('pagination');
	oRm.writeClasses();
	oRm.write('>');
	this.renderPages(oRm, oPaginator);
	oRm.write('</ul>');
	
};

de.pksoftware.bootstrapui5.controls.PaginatorRenderer.renderPages = function(oRm, oPaginator) {
	var currentPage = oPaginator.getCurrent();
	var lastPage = oPaginator.getLast();
	
	oRm.write('<li');
	if(currentPage == 1){
		oRm.addClass('disabled');
		oRm.writeClasses();
	}
	oRm.write('>');
	oRm.write('<a');
	oRm.writeAttribute("href", "javascript:void(0);");
	oRm.write('>');
	oRm.write('&laquo;');
	oRm.write('</a>');
	oRm.write('</li>');
	
	this.renderPagesNum(oRm, oPaginator);

	oRm.write('<li');
	if(currentPage == lastPage){
		oRm.addClass('disabled');
		oRm.writeClasses();
	}
	oRm.write('>');
	oRm.write('<a');
	oRm.writeAttribute("href", "javascript:void(0);");
	oRm.write('>');
	oRm.write('&raquo;');
	oRm.write('</a>');
	oRm.write('</li>');
};

de.pksoftware.bootstrapui5.controls.PaginatorRenderer.renderPagesNum = function(oRm, oPaginator) {
	var maxPagesNum = oPaginator.getMaxPages();
	
	var currentPage = oPaginator.getCurrent();
	var lastPage = oPaginator.getLast();
	
	for (var i = 1; i < maxPagesNum+1; i++) {
		oRm.write('<li');
		if(currentPage == i){
			oRm.addClass('active');
			oRm.writeClasses();
		}
		if(i > lastPage && currentPage != i){
			oRm.addClass('disabled');
			oRm.writeClasses();
		}
		oRm.write('>');
		oRm.write('<a');
		oRm.writeAttribute("href", "javascript:void(0);");
		oRm.write('>');
		oRm.write(i);
		oRm.write('</a>');
		oRm.write('</li>');
	}
};



