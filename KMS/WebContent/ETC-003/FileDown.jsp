<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR" 
    import="org.w3c.dom.*, java.net.*, websquare.util.*, org.json.simple.*,org.json.simple.parser.*" %><%	
	request.setCharacterEncoding("UTF-8");
	String req = URLDecoder.decode(HttpUtil.getBase64Parameter(request, "xmlValue"), "UTF-8");
	application.log(req);
	System.out.println(req);
  	JSONParser jsonParser = new JSONParser();
	//JSONParser�� �̿��ؼ� ���� ���ڿ� ��ȯ dataList�� ��쿡�� [{},{},{}] �ش����·� ��ȯ�ϱ� ������ JSONArray���·� �޾ƾ���.
	//���� dataMap�� ������쿡�� JSONObject�� �޾Ƶ� ���� WebSquare������ WebSquare.text.BASE64Encoder�� ��������
  	JSONArray jsonArray = (JSONArray)jsonParser.parse(req);
	
 	// JSONObject���� ���ϴ� ������ �̾ƿ���.
   	for(int i = 0; i < jsonArray.size(); i++) {
 	 	JSONObject jsonObject = (JSONObject)jsonArray.get(i);
 	 	String col = (String)jsonObject.get("col1");
 		application.log(col);
 		System.out.println(col);
  	}
  	
  	// XML�� ������ JSON ����
	// jsp �󿡼� xmlValue��� ��带 �ٿ��� ���� ����
	// Document xmlValueDoc = XMLUtil.getDocument(URLDecoder.decode(HttpUtil.getParameter(request, "xmlValue"), "UTF-8"));
	// String name = XMLUtil.getText(xmlValueDoc, "name");
	// application.log(name);
%>