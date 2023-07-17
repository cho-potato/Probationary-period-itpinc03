/*amd /$p/PopUp/openPopup_closeAction_$p.xml 1543 0ca9b53a3ebb89373c3a8b997f16b6f5a5300f8ab456b932668a7bb517ce5490 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		requires("uiplugin.popup");
		var options = {
			id: "popup1",
			type: "wframePopup",
			height: "300px",
			width: "300px",
			closeAction: "scwin.closeAction"
		};
		$p.openPopup("", options);
	};
	
	
	scwin.closeAction = function (id, info) {
		if (!info.isCloseButtonClick) {
			return true;
			}
			alert("To be closed by scwin.closeAction...");
			return  true;
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:248px;height:39px;margin-top:30px;margin-left: 100px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;text-align:left;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'openPopup()'}]}]}]}]}]})