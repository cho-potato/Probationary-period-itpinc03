package test.download.dataConvertor;

import websquare.http.controller.grid.excel.write.IDataXMLProvider;

public class testDataConvertor implements IDataXMLProvider {
	@Override
	public String convertXML(String strData) throws Exception {
		// TODO Auto-generated method stub
		String returnData = strData.replaceAll( "\u0000", "");
		returnData = returnData.replaceAll( "\u0001", "");
		returnData = returnData.replaceAll( "\u0002", "");
		returnData = returnData.replaceAll( "\u0003", "");
		return returnData;
	}
}