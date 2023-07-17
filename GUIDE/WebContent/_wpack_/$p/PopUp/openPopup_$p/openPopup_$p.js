/*amd /$p/PopUp/openPopup_$p/openPopup_$p.xml 2912 1347af6a13ac5951b146574bd3439afa7ac90a3d340de0e7b41c3277cbd63e3a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		requires("uiplugin.popup");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.trigger2_onclick = function(e) {
		
	
		var options = {  
		 
		        id : "popPsnlCertiInq", 
		        type : "wframePopup", 
		        width: "400px", 
		        height: "250px", 
		        top: "130px", 
		        left: "200px", 
		        popupName : "WFrame Popup", 
		        modal : true, 
		        resizable : true
		    }; 
	 
	    $p.openPopup("for_wframe.xml",  options );
	};
	
	scwin.trigger3_onclick = function(e) {
		var options = {  
		 
		        id : "popPsnlCertiInq", 
		        type : "iframePopup", 
		        width: "400px", 
		        height: "250px", 
		        top: "130px", 
		        left: "200px", 
		        popupName : "IFrame Popup", 
		        modal : true, 
		        resizable : true
		    }; 
	 
	    $p.openPopup("for_iframe.xml",  options );
	};
	

	
	scwin.trigger4_onclick = function(e) {
		var options = {  
		 
		        id : "popBrowser", 
		        type : "browserPopup", 
		        width: "400px", 
		        height: "250px", 
		        top: "130px", 
		        left: "200px", 
		        popupName : "Browser Popup", 
		        modal : true, 
		        resizable : true
		    }; 
	 
	    $p.openPopup("for_browser.xml",  options );
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 20px;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',style:'width:300px;height:50px;padding: 10px;font: 20px bolder;color: white;background-color: red;display: block;',id:'trigger2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.openPopup wframePopup'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger3_onclick',style:'width:300px;height:50px;padding: 10px;font: 20px bolder;color: white;background-color: blue;margin: 10px 0 10px 0;display: block;',id:'trigger3',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.openPopup iframePopup'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger4_onclick',style:'width:300px;height:50px;padding: 10px;font: 20px bolder;color: white;background-color: black;display: block;',id:'trigger4',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.openPopup browserPopup'}]}]}]}]}]}]})