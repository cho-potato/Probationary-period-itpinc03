<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%
	String contextStr = request.getContextPath();
	String ws5Root = contextStr+"/websquare/";
%><!DOCTYPE html>
<html xmlns='http://www.w3.org/1999/xhtml' xmlns:ev='http://www.w3.org/2001/xml-events' xmlns:w2='http://www.inswave.com/websquare' xmlns:xf='http://www.w3.org/2002/xforms'>
	<head>
		<link rel="shortcut icon" type="image/x-icon" href="<%=contextStr%>/favicon.ico" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
		<title>	</title>
		<script type="text/javascript">
			function i18nUrl (url){
			    var locale = WebSquare.cookie.getCookie( "locale" );
			    if( locale == null || locale == '' ) {
			    	return "/websquare/I18N.do?w2xPath="+url;
			    } else {
			        return "/websquare/I18N.do?locale="+unescape(locale)+"&w2xPath="+url;
			    }
			}
			
			var WebSquareExternal = {"baseURI": "<%=ws5Root%>" };
		</script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/websquare/_websquare_/javascriptLoader.wq"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/websquare/popup.js"></script>
	</head>
	<body>
	</body>
</html>