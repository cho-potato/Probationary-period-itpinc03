<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><% 
	String callbackFn = request.getParameter("callbackFunction"); 
	if(callbackFn == null || callbackFn.trim().length() == 0 ) {
		callbackFn = "uploadCallback";
	}
%><script>window.onload = doInit;function doInit() {parent.uploadCallback("<ret><key>C:/temp/upload01/up</key><storedFileList>test_1.png</storedFileList><localfileList>test.png</localfileList><fileSizeList></fileSizeList><maxUploadSize></maxUploadSize><deniedList></deniedList><deniedCodeList></deniedCodeList></ret>");}</script>
