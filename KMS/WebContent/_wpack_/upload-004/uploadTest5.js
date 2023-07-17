/*amd /upload-004/uploadTest5.xml 2954 19276e8052fe193567c41a9044be27d5c531052eee3ce99e302736ae4a8e866c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function(){ 
		function multiupload1_ondone(data) {
		debugger;
		var str = "";
		
			for (var i=0; i<data.length; i++) {
    			console.log(i+"번째 deniedFile==="+data[i].deniedCode);
    			console.log(i+"번째 deniedFile==="+data[i].deniedFile);
    			console.log(i+"번째 file==="+data[i].file);
    			console.log(i+"번째 key==="+data[i].key);
    			console.log(i+"번째 localFile==="+data[i].localFile);
    			console.log(i+"번째 maxUploadSize==="+data[i].maxUploadSize);
    			console.log(i+"번째 size==="+data[i].size);
    			
				str = str + "\r\n"+i+"번째 deniedFile==="+data[i].deniedCode;
    			str = str + "\r\n"+i+"번째 deniedFile==="+data[i].deniedFile;
    			str = str + "\r\n"+i+"번째 file==="+data[i].file;
    			str = str + "\r\n"+i+"번째 key==="+data[i].key;
    			str = str + "\r\n"+i+"번째 localFile==="+data[i].localFile;
    			str = str + "\r\n"+i+"번째 maxUploadSize==="+data[i].maxUploadSize;
    			str = str + "\r\n"+i+"번째 size==="+data[i].size;
    					
    		}	
    		
    		textarea1.setValue( textarea1.getValue() +str );	
		}
		
	
		
		
		}
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'grp1',style:'height:173px;width: 510px;float:left;'},E:[{T:1,N:'w2:textbox',A:{id:'txt1',style:'position: relative;width: 500px;height: 23px;',label:'uoload2.do controller 실행 '}},{T:1,N:'w2:multiupload',A:{id:'multiupload1',maxcount:'',maxsize:'','ev:ondone':'multiupload1_ondone',style:'position: relative;width: 500px;height: 150px;',action:'/upload2.do',uploadButton:'',filter:'',wmode:'false',mode:'flash'}}]},{T:1,N:'xf:group',A:{id:'grp2',style:'position:relative;height:173px;width: 510px;float:left;'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'position: relative;width: 500px;height: 23px;',label:'uploadTest.jsp 로 실행한경우'}},{T:1,N:'w2:multiupload',A:{maxcount:'',id:'multiupload2',maxsize:'','ev:ondone':'multiupload1_ondone',style:'position: relative;width: 500px;height: 150px;',action:'/test/uploadTest.jsp',uploadButton:'',wmode:'false',filter:'',mode:'flash'}}]},{T:1,N:'xf:group',A:{id:'grp3',style:'position:relative;height:304px;width:900px;float:left;'},E:[{T:1,N:'xf:textarea',A:{id:'textarea1',style:'position: relative;width: 800px;height: 300px;',invalidMessage:''}}]}]}]}]})