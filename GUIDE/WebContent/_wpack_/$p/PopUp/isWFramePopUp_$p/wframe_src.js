/*amd /$p/PopUp/isWFramePopUp_$p/wframe_src.xml 1851 3a1d313961799bb531327d4b5c4283325bb0ae7cc209c4f1110ebfe2b881f0be */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var iswframepopup = $p.isWFramePopup();
		alert("Am I a WFrame popup? : " + iswframepopup);
	};
	
	scwin.trigger2_onclick = function(e) {
		var iswframepopup = $p.isWFramePopup(true);
		alert("Is my PARENT a WFrame popup? : " + iswframepopup);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:150px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:13px;font-family:monospace;font-style:normal;font-weight:bolder;margin:20px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'isWFramePopup()'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:150px;padding: 5px;line-height:32px;background-color:#C0C0C0;font-size:13px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'isWFramePopup(true)'}]}]},{T:1,N:'w2:textbox',A:{id:'text1',label:'WFrame',style:'width:328px;height:63px;margin-left:20px;font-size:20px;font-weight:bolder;font-style:italic;font-family:sans-serif;line-height:60px;'}}]}]}]})