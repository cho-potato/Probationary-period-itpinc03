/*amd /WindowContainer/frameMode_windowContainer_window_openPopup_frameModal_$p/13_popUp_02A.xml 1602 e9a66b863c200f8eee82caa7a12926a1a98ffba08054788a49ee888fdb2edb06 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		requires("uiplugin.popup");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var frameId = $p.getFrame().getParentFrame().getParentFrame().id;
		
		var options = {  		 
		        id : "modal", 
		        type : "wframePopup", // "iframePopup"
		        width: "400px", 
		        height: "200px", 
		        top: "100px", 
		        left: "200px", 
		        popupName : "Frame Modal Popup", 
		        modal : "true",
		        frameModal : frameId // "frame" "parent" "top"  framdId
		    }; 
	 
	    $p.openPopup("14_popUp_02A_src.xml",  options );
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'height:52px;margin:30px;margin-right:0px;width:250px;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'frameModal popUp'}]}]}]}]}]})