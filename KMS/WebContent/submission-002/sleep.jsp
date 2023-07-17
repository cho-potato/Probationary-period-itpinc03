<%@ page language="java" contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8" import="java.lang.Thread.*"%>
<%
try {
	Thread.sleep(2000);
} catch (Exception e) {
	e.printStackTrace();
}%>
{
	"dataMap1": {
	   "key1": "SampleValue_0",
	   "key2": "SampleValue_1",
	   "key3": "SampleValue_2"
	},
	"dataMap2": {
	   "key1": "SampleValue_0",
	   "key2": "SampleValue_1",
	   "key3": "SampleValue_2"
	}
}
