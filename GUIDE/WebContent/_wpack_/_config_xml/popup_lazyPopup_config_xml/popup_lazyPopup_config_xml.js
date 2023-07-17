/*amd /_config_xml/popup_lazyPopup_config_xml/popup_lazyPopup_config_xml.xml 1679 d0a29c8396432be19956a9ca6a3916c820795fa1efe5b8b81b0190e1e45e6d1f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		requires("uiplugin.popup"); 
		 var options = {  
	 
	        id : "popup1", 
	        type : "wframePopup", 
	        width: "700px", 
	        height: "500px", 
	        top: "100px", 
	        left: "200px", 
	        popupName : "Test Popup", 
	        modal : false, 
	        resizable : true, 
	        status : true, 
	        menubar : false, 
	        scrollbars : false, 
	        title : "false",
	        processMsgFrame : "true"
	    };

	   
	    $p.openPopup("popup_src.xml",  options );		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:309px;line-height:32px;padding: 5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align: left;margin: 30px;margin-left: 200px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'openPopup()'}]}]}]}]}]})