/*amd /$p/PopUp/isPopUp_$p/wframe_src.xml 1789 ce35bd1315bbf9ee5122b91b8b5206cd3b531aca5cc5e5384e46f0a986208cf2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var ispopup = $p.isPopup();
		alert("Am I a popup? : " + ispopup);
	};
	
	scwin.trigger2_onclick = function(e) {
		var ispopup = $p.isPopup(true);
		alert("Is my PARENT a popup? : " + ispopup);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:150px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin:20px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'isPopup()'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:150px;padding: 5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'isPopup(true)'}]}]},{T:1,N:'w2:textbox',A:{id:'text1',label:'WFrame',style:'width:328px;height:63px;margin-left:20px;font-size:20px;font-weight:bolder;font-style:italic;font-family:sans-serif;line-height:60px;'}}]}]}]})