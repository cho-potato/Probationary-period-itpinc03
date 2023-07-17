<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR" 
    import="org.w3c.dom.*, java.net.*, websquare.util.*, org.json.simple.*,org.json.simple.parser.*" %><%	
	request.setCharacterEncoding("UTF-8");
	String req = URLDecoder.decode(HttpUtil.getBase64Parameter(request, "xmlValue"), "UTF-8");
	application.log(req);
	System.out.println(req);
  	JSONParser jsonParser = new JSONParser();
	//JSONParser를 이용해서 던진 문자열 반환 dataList일 경우에는 [{},{},{}] 해당형태로 반환하기 때문에 JSONArray형태로 받아야함.
	//만약 dataMap을 던질경우에는 JSONObject로 받아도 가능 WebSquare에서는 WebSquare.text.BASE64Encoder로 던져야함
  	JSONArray jsonArray = (JSONArray)jsonParser.parse(req);
	
 	// JSONObject에서 원하는 데이터 뽑아오기.
   	for(int i = 0; i < jsonArray.size(); i++) {
 	 	JSONObject jsonObject = (JSONObject)jsonArray.get(i);
 	 	String col = (String)jsonObject.get("col1");
 		application.log(col);
 		System.out.println(col);
  	}
  	
  	// XML로 던지는 JSON 구조
	// jsp 상에서 xmlValue라는 노드를 붙여서 전달 받음
	// Document xmlValueDoc = XMLUtil.getDocument(URLDecoder.decode(HttpUtil.getParameter(request, "xmlValue"), "UTF-8"));
	// String name = XMLUtil.getText(xmlValueDoc, "name");
	// application.log(name);
%>