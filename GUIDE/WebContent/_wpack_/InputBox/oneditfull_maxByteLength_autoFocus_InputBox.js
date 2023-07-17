/*amd /InputBox/oneditfull_maxByteLength_autoFocus_InputBox.xml 1493 2e9ee88aa45bad509e8e9628aa6f78998dce1cc5e2901116882b2f984709495c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};	
	
	scwin.input1_oneditfull = function() {
		alert("oneditfull - Maximum length reached.");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Event - oneditfull',style:'width:354px;padding: 5px;line-height:32px;height:32px;margin:20px;margin-top: 100px;margin-left: 150px;margin-bottom:30px;background-color:#C0C0C0;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'input1',style:'width:338px;padding: 10px;line-height:32px;height:32px;margin:50px;margin-top: 0px;margin-left: 150px;margin-bottom: 0px;margin-bottom:30px;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;','ev:oneditfull':'scwin.input1_oneditfull',maxByteLength:'7',autoFocus:'true'}}]}]}]})