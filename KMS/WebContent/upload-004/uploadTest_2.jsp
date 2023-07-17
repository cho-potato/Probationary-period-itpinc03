<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><% 
	String callbackFn = request.getParameter("callbackFunction"); 
	String param1 = request.getParameter("param1"); 

System.out.println("callbackFn:"+callbackFn);
System.out.println("param1:"+param1);


	if(callbackFn == null || callbackFn.trim().length() == 0 ) {
		callbackFn = "uploadCallback";
	}
%><script>window.onload = doInit;function doInit() {parent.<%=callbackFn%>("<ret><key>/Users/inswave/upload</key><storedFileList>after1_null.png</storedFileList><localfileList>after1.png</localfileList><fileSizeList>34637</fileSizeList><maxUploadSize>20000000</maxUploadSize><subSize></subSize><deniedList></deniedList><deniedCodeList></deniedCodeList></ret>");}</script>

