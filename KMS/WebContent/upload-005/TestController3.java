package sample.spring.controller;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

@Controller
public class TestController3 {
/*
	@RequestMapping("/hello1.do")
	public ModelAndView hello3() {
		System.out.println("111");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("hello");
		mv.addObject("message", "Hello Spring MVC");
		return mv;
	}

*/
	@RequestMapping(value = "/websquare/helloWebSquare.do", method = RequestMethod.GET)
	@ResponseBody
	public void WebSquareStartApplication(HttpServletRequest req, HttpServletResponse res) throws Exception{
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
		StringBuilder stb1 = new StringBuilder();
		stb1.append("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http;//www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">");
		stb1.append("<html xmlns='http;//www.w3.org/1999/xhtml' xmlns;ev='http;//www.w3.org/2001/xml-events' xmlns;w2='http;//www.inswave.com/websquare' xmlns;xf='http;//www.w3.org/2002/xforms'>");
		stb1.append("	<head>");
		stb1.append("		<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />");
		stb1.append("		<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />");
		stb1.append("		<title>	WebSquare </title>");
		stb1.append("		<script type=\"text/javascript\" src=\"javascript.wq?q=/bootloader\"></script>");
		stb1.append("		<script type=\"text/javascript\">");
		stb1.append("			window.onload = init;");
		stb1.append(" ");
		stb1.append("			function init() {");
		stb1.append("				try{");
		stb1.append("					WebSquare.startApplication();");
		stb1.append("				} catch(e) {");
		stb1.append("					alert(e.message);");
		stb1.append("				}");
		stb1.append("			}");
		stb1.append("		</script>");
		stb1.append("	</head>");
		stb1.append("<body></body>");
		stb1.append("</html>");


		HttpServletResponseWrapper wrapper = new HttpServletResponseWrapper(res);
		wrapper.setContentType("text/html;charset=UTF-8");
		wrapper.setHeader("Content-length", "" + stb1.toString().getBytes().length);

		res.getWriter().print(stb1.toString());
	}


		@RequestMapping("/upload.do")
		@ResponseBody
		public void upload(HttpServletRequest req, HttpServletResponse res) throws Exception{
			System.out.println("xxxxxxxxxx");
			StringBuilder stb1 = new StringBuilder();
			
			stb1.append("<script>window.onload = doInit;function doInit() {");
			stb1.append("parent.uploadCallback(\"<ret>");
			stb1.append("<key>C:/temp/upload01/up</key>");
			stb1.append("<storedFileList>한글테스트</storedFileList>");
			stb1.append("<localfileList></localfileList>");
			stb1.append("<fileSizeList></fileSizeList>");
			stb1.append("<maxUploadSize>200000000</maxUploadSize>");
			stb1.append("<deniedList></deniedList>");
			stb1.append("<deniedCodeList>101</deniedCodeList>");
			stb1.append("</ret>\");}</script>");
			

		
			HttpServletResponseWrapper wrapper = new HttpServletResponseWrapper(res);
			wrapper.setContentType("text/html;charset=UTF-8");
			wrapper.setHeader("Content-length", "" + stb1.toString().getBytes().length);
		
			res.getWriter().print(stb1.toString());
		}
		
		@RequestMapping("/upload2.do")
		@ResponseBody
		public void upload2(HttpServletRequest request, HttpServletResponse res) throws Exception{
			System.out.println("upload2.do start===================");
			
			SimpleDateFormat mSimpleDateFormat = new SimpleDateFormat ("yyyyMMddHHmmssSSS", Locale.KOREA );
			Date currentTime = new Date ();
			  
			String uploadPath = "/Users/inswave/upload/";
			String saveFileName = null;
			String uploadFileName = null;
			long uploadFileSize = 0;			
			String OriginalfileName = null;
					
			 MultipartHttpServletRequest multiPartRequest = (MultipartHttpServletRequest) request;
			 
			 //param 확인 
			 Enumeration<String> e = multiPartRequest.getParameterNames();
			 
			 String name = null;
			 while (e.hasMoreElements()){
			 name = e.nextElement().toString();
			 
			 System.out.println(name +":"+request.getParameter(name));
			 
			 }
			 
			 Iterator<String> iter = multiPartRequest.getFileNames();

			int i = 1;
			   while(iter.hasNext()) {
			    
				   String sNewFileName = mSimpleDateFormat.format ( currentTime ) + String.valueOf(i);
				    
				    uploadFileName = iter.next();
				    MultipartFile mfile = (MultipartFile) multiPartRequest.getFile(uploadFileName);
				    
				    uploadFileSize = mfile.getSize();
				    OriginalfileName = mfile.getOriginalFilename();
				    OriginalfileName = new String(OriginalfileName.getBytes("8859_1"),"utf-8");
				    
				    int index=OriginalfileName.lastIndexOf(".");
			        String fileExtension="." + OriginalfileName.substring(index + 1);
			        String fileName = OriginalfileName.substring(0,index);
					
					System.out.println("fileExtension="+fileExtension);
					System.out.println("fileName="+fileName);
					
				    saveFileName = uploadPath + fileName + "_" +sNewFileName + fileExtension;
				    i++;
				    System.out.println("saveFileName="+saveFileName);
				    
				    mfile.transferTo(new File(saveFileName));
			   }			
			
			StringBuilder stb1 = new StringBuilder();
			
			stb1.append("<script>window.onload = doInit;function doInit() {");
			stb1.append("parent.uploadCallback(\"<ret>");
			stb1.append("<key>"+uploadPath+"</key>");
			stb1.append("<storedFileList>"+saveFileName+"</storedFileList>");
			stb1.append("<localfileList>"+OriginalfileName+"</localfileList>");
			stb1.append("<fileSizeList>"+uploadFileSize+"</fileSizeList>");
			stb1.append("<maxUploadSize></maxUploadSize>");
			stb1.append("<deniedList></deniedList>");
			stb1.append("<deniedCodeList></deniedCodeList>");
			stb1.append("</ret>\");}</script>");
		
			HttpServletResponseWrapper wrapper = new HttpServletResponseWrapper(res);
			wrapper.setContentType("text/html;charset=UTF-8");
			wrapper.setHeader("Content-length", "" + stb1.toString().getBytes().length);
		
			res.getWriter().print(stb1.toString());
		}		
}
