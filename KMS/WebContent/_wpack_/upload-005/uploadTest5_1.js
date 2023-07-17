/*amd /upload-005/uploadTest5_1.xml 3410 5813a45cde71a165472967aac1f2bb90dbe2f09a5f86545f76104efff9359ab7 */
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
		
	
		
		
		
	scwin.trigger1_onclick = function(e) {
		var cnt = multiupload1.getFileCount();
		
		for(i=0;i<cnt;i++){
			console.log("cnt:"+i);
			multiupload1.setParam( i , "param"+i , "param"+i+"_value" );
		}
		
		multiupload1.startUpload();
		
	};
	}
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'grp1',style:'height:173px;width: 510px;float:left;'},E:[{T:1,N:'w2:textbox',A:{id:'txt1',style:'position: relative;width: 500px;height: 23px;',label:'uoload2.do controller 실행 '}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',id:'trigger1',style:'position: relative;width: 80px;height: 23px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'uploadStart'}]}]},{T:1,N:'w2:multiupload',A:{id:'multiupload1',maxcount:'',maxsize:'','ev:ondone':'multiupload1_ondone',style:'position: relative;width: 500px;height: 150px;',action:'/upload2.do',uploadButton:'false',filter:'',wmode:'false',mode:'flash'}}]},{T:1,N:'xf:group',A:{id:'grp2',style:'position:relative;height:173px;width: 510px;float:left;'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'position: relative;width: 500px;height: 23px;',label:'uploadTest.jsp 로 실행한경우'}},{T:1,N:'w2:multiupload',A:{maxcount:'',id:'multiupload2',maxsize:'','ev:ondone':'multiupload1_ondone',style:'position: relative;width: 500px;height: 150px;',action:'/test/uploadTest.jsp',uploadButton:'',wmode:'false',filter:'',mode:'flash'}}]},{T:1,N:'xf:group',A:{id:'grp3',style:'position:relative;height:304px;width:900px;float:left;'},E:[{T:1,N:'xf:textarea',A:{id:'textarea1',style:'position: relative;width: 800px;height: 300px;',invalidMessage:''}}]}]}]}]})