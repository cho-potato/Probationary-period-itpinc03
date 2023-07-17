/*amd /WFrame/frameModal_WFrame/01_wframe_frameModal.xml 1530 ddde10c474d47637a83703cb9d5317bab86ac81f593fff484662836b621570b3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		requires("uiplugin.popup");	
		text1.hide();
		
		text2.hide();
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
	    wframe1.setSrc("02_openPopUp.xml");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'height:52px;margin:50px;margin-right:0px;width:348px;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'WFrame (frameModal="true")'}]}]},{T:1,N:'w2:textbox',A:{id:'text1',label:'Main A',style:'width: 150px;height: 23px;'}},{T:1,N:'w2:textbox',A:{id:'text2',label:'Main B',style:'width: 150px;height: 23px;'}},{T:1,N:'w2:wframe',A:{frameModal:'true',style:'width: 1700px;height: 600px;border-color:black;border-style:solid;margin: 10px;margin: 50px;',id:'wframe1'}}]}]}]})