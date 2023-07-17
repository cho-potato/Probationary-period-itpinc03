<%@ page contentType="application/json; charset=utf-8" language="java" errorPage="" import="websquare.util.*,org.w3c.dom.*,java.util.*,java.net.*,java.io.BufferedReader,java.io.*,org.json.simple.*"
%><%
		String webroot = application.getRealPath("/");
		File file    =  new File(webroot + "server/sJsonData.json"); //경로

		BufferedReader br  =  new BufferedReader(new InputStreamReader(new FileInputStream(file),"UTF-8"));
		String line = null;
		String jsonstr = "";
		while((line=br.readLine())!=null){
			jsonstr += line;
		}

		JSONObject obj = (JSONObject) JSONValue.parse(jsonstr);
		JSONArray arr = (JSONArray)obj.get("jsondata");

		int arrsize = arr.size();

		ServletInputStream in = null;
		java.io.BufferedInputStream bin = null;
		in = request.getInputStream();
		bin = new java.io.BufferedInputStream( in );
		String args = StreamUtil.getString( bin , "UTF-8" );		
		JSONObject obj2 = (JSONObject) JSONValue.parse(args);
		JSONObject param = (JSONObject) obj2.get("jsondata");
		int start = Integer.parseInt((String)param.get("start"));
		int cnt = Integer.parseInt((String)param.get("cnt"));
		int sum = start + cnt;

		if(sum > arrsize){
			out.println("{\"errmsg\":\"유효범위 초과\"}");

		}else{
			JSONArray resarr = new JSONArray();
			for(int ix=0; ix<cnt; ix++){
				resarr.add(arr.get(start++));
			}
			response.setHeader("Content-Type", "application/json;charset=utf-8");
			out.println("{\"jsondata\":"+ resarr.toJSONString()+"}");
		}
%>