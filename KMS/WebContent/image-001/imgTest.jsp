<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%><%@ page import="java.io.*"%><%
    
    String dFileName = request.getParameter("param1");
    System.out.println("dFileName:"+dFileName);
    
	response.setHeader("Content-Type","image/jpg");
	
	String filename2 = new String(dFileName.getBytes("8859_1"),"euc-kr");
	
	String path = "/Users/inswave/upload/";
	//java.io.File file = new java.io.File(path+"test.jpg");
	java.io.File file = new java.io.File(path+dFileName);
	byte b[] = new byte[(int)file.length()];
	
	System.out.println("size:"+b.length);
	System.out.println("filename2:"+filename2);
	System.out.println("path:"+path);
	
	response.setHeader("Content-Disposition","attachement:filename="+new String(dFileName.getBytes("euc-kr"))+";");
	if(file.isFile()){
		BufferedInputStream fin = new BufferedInputStream(new FileInputStream(file));
		BufferedOutputStream outs = new BufferedOutputStream(response.getOutputStream());
		int read = 0;
		while ((read=fin.read(b))!=-1){
			outs.write(b,0,read);
		}
		outs.close();
		fin.close();
	}
	
%>