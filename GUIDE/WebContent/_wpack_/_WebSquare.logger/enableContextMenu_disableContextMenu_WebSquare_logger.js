/*amd /_WebSquare.logger/enableContextMenu_disableContextMenu_WebSquare_logger.xml 1804 caaafafe89bdba49afe743150a7b8247fa9949d076e826f31162ff536a84623c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		WebSquare.logger.disableContextMenu();
		alert("Context menus will not be shown.");
	};
	
	scwin.trigger2_onclick = function(e) {
		WebSquare.logger.enableContextMenu();
		alert("Context menus will be available.");
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:188px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align:left;margin-bottom:0px;margin-left:100px;margin-top:50px;display: block',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'disableContextMenu()'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:188px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align:left;margin-bottom:0px;margin-left:100px;margin-top:20px;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick',disabled:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'enableContextMenu()'}]}]}]}]}]})