package com.inswave.test;

import websquare.http.controller.grid.excel.write.ICellDataProvider;

public class bbb implements ICellDataProvider {
	
	public String convertValue( String cellvalue ) throws Exception
	{
		
		return cellvalue.replace( "&nbsp;", " ");
		
	}

}
