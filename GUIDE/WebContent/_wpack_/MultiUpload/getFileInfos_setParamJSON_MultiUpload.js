/*amd /MultiUpload/getFileInfos_setParamJSON_MultiUpload.xml 1765 26ebc7c881b46fe1458ac1f2b9cdf66b733e27087181cc502b468b690d60fd10 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var fileInfos = multi1.getFileInfos();
			var paramJSON = {};
			for (var i = 0; i < fileInfos.length; i++) {
				var fileName = fileInfos[i].name;
				var fileSize = fileInfos[i].size;
				paramJSON[fileName] = {
					"index": i,
					"name" :  fileName,
					"value": fileSize
				}
			}
			multi1.setParamJSON(paramJSON);				
			alert(JSON.stringify(paramJSON));
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:multiupload',A:{action:'',filter:'',id:'multi1',maxcount:'5',maxsize:'',mode:'flash',style:'position:relative;width:446px;height:180px;margin:50px;margin-bottom: 0;',uploadButton:'',userData1:'',wmode:'false'}},{T:1,N:'xf:trigger',A:{type:'button',style:'width:372px;text-align:center;line-height:32px;height:32px;margin:50px;margin-bottom:30px;background-color:#C0C0C0;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getFileInfos() for setParamJSON()'}]}]}]}]}]})