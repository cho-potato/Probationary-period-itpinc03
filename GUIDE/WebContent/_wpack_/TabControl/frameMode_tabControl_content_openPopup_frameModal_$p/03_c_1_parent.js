/*amd /TabControl/frameMode_tabControl_content_openPopup_frameModal_$p/03_c_1_parent.xml 1569 df384884d1539d36984c637d69bf3db8e45d0d292cf4775c09a97198232c590f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		requires("uiplugin.popup");	
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var random = Math.random();
		var options = {  		 
		        id : random, 
		        type : "browserPopup", // "iframePopup", "browserPopup"
		        //width: "400px", 
		        //height: "300px", 
		        //top: "200px", 
		        //left: "1100px", 
		        popupName : "Browser - Child",	
		        resizable : true,	        
		        modal : "",
		        frameModal : ""
		    }; 
	 
	    $p.openPopup("03_c_2_child.xml",  options );
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'height:52px;margin:50px;margin-right:0px;width:250px;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Parent'}]}]}]}]}]})