/*amd /WindowContainer/frameMode_windowContainer_window_openPopup_frameModal_$p/03_c_2_child.xml 1533 031b1f372739143b7454865ead7025a2da20279a11adb072ca2e1b6bb51545e1 */
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
		        type : "wframePopup", // "iframePopup", "browserPopup"
		        //width: "200px", 
		        //height: "200px", 
		        top: "600px", 
		        left: "1200px", 
		        popupName : "WFrame - Grand Child", 
		        modal : "",
		        frameModal : ""
		    }; 
	 
	    $p.openPopup("03_c_3_grandchild.xml",  options );		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'height:52px;margin:50px;margin-right:0px;width:250px;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Child'}]}]}]}]}]})