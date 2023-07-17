/*amd /$p/PopUp/getPopupWindowList_$p/getPopupWindowList_$p.xml 3298 07df32951a60623aa636eb406de893568ddf96481c85a8ae786e92d0a68e7c98 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		requires("uiplugin.popup");
		var options1 = { 
		  id : "pop1",		
		  type : "wframePopup", 
		  popupName : "PopUp1",
		  width: "300px",
		  height: "200px",
		  top: "50px",
		  left: "300px"
		}; 
		
		$p.openPopup("pop1.xml",  options1 );
	};
	
	scwin.trigger2_onclick = function(e) {
		requires("uiplugin.popup");
		var options2 = { 
		  id : "pop2",		
		  type : "wframePopup", 	 
		  popupName : "PopUp2",
		  width: "300px",
		  height: "200px",
		  top: "50px",
		  left: "600px"
		}; 
		
		$p.openPopup("pop2.xml",  options2 );
		
	};
	
	scwin.trigger3_onclick = function(e) {
		requires("uiplugin.popup");
		var options2 = { 
		  id : "pop3",		
		  type : "wframePopup", 	 
		  popupName : "PopUp3",
		  width: "300px",
		  height: "200px",
		  top: "250px",
		  left: "300px"
		}; 
		
		$p.openPopup("pop3.xml",  options2 );
		
	};
	
	scwin.trigger4_onclick = function(e) {
		
		var popUps = $p.getPopupWindowList();
		var eachValue;
		var allValues = "";
		var i;
		for (i = 0; i < popUps.length; i++) {
			eachValue = popUps[i].text1.getValue();
			allValues += eachValue + " ";
		}
		alert(allValues);
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:';margin:20px;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width:80px;height:32px;font-weight:bolder;color:white;background-color:blue;font-family:sans-serif;border-style:none;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PopUp1'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',style:'width:80px;height:32px;margin-left:40px;font-weight:bolder;color:white;background-color:green;font-family:sans-serif;border-style:none;',id:'trigger2',type:'button',class:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PopUp2'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger3_onclick',style:'width:80px;height:32px;margin-left:40px;font-weight:bolder;color:white;background-color:orange;font-family:sans-serif;font-style:normal;border-style:none;',id:'trigger3',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PopUp3'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger4_onclick',style:'width:199px;height:35px;display:block;margin-top:20px;font-weight:bolder;font-family:monospace;font-style:italic;border-style:none;background-color:#C0C0C0;',id:'trigger4',type:'button',nextTabID:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getPopupWindowList();'}]}]}]}]}]}]})