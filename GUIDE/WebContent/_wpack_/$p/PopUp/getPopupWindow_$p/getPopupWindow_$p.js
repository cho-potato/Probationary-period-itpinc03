/*amd /$p/PopUp/getPopupWindow_$p/getPopupWindow_$p.xml 3154 c84c420fe973d607481d534ff6e0746aa22ace44ab24a69cef9ac5e7e877549e */
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
		  popupName : "PopUp ID = pop1",
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
		  popupName : "PopUp ID = pop2",
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
		  popupName : "PopUp ID = pop3",
		  width: "300px",
		  height: "200px",
		  top: "250px",
		  left: "300px"
		}; 
		
		$p.openPopup("pop3.xml",  options2 );
		
	};
	
	scwin.trigger4_onclick = function(e) {
		var window = $p.getPopupWindow("pop3");
		var value = window.text1.getValue();
		alert(value);
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:';margin:20px;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width:80px;height:32px;font-weight:bolder;color:white;background-color:blue;font-family:sans-serif;border-style:none;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PopUp1'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',style:'width:80px;height:32px;margin-left:40px;font-weight:bolder;color:white;background-color:green;font-family:sans-serif;border-style:none;',id:'trigger2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PopUp2'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger3_onclick',style:'width:80px;height:32px;margin-left:40px;font-weight:bolder;color:white;background-color:orange;font-family:sans-serif;font-style:normal;border-style:none;',id:'trigger3',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PopUp3'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger4_onclick',style:'width:199px;height:35px;display:block;margin-top:20px;font-family:monospace;font-style:italic;font-weight:bolder;border-style:none;background-color:#C0C0C0;',id:'trigger4',type:'button',nextTabID:'',tabIndex:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getPopupWindow();'}]}]}]}]}]}]})