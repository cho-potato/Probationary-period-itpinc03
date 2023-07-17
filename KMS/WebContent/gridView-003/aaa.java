package com.inswave.test;

import websquare.http.controller.grid.excel.read.ICellDataProvider;

public class aaa implements ICellDataProvider {
	
	public String convertValue( String cellvalue ) throws Exception
	{
		
		return cellvalue.replace( "\\", "\\\\");
		
	}

}
