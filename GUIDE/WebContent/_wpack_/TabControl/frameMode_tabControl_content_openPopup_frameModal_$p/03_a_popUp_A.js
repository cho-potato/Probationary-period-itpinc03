/*amd /TabControl/frameMode_tabControl_content_openPopup_frameModal_$p/03_a_popUp_A.xml 2754 17362757b87ca59b7abd575fe7c06beb1873456c22e788fc3529afdfdf6e8b30 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		requires("uiplugin.popup");	
		var parent = $p.parent().text1.getValue();	
		var triggerName = parent;
		trigger1.setLabel(triggerName);
		text1.hide();
		
		
		var parent = $p.parent().text2.getValue();	
		var triggerName = parent;
		trigger2.setLabel(triggerName);
		text2.hide();
		
		trigger2.hide();
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {	
		var random = Math.random();
		var top = random * 100;
		var left = random * 200;
		var name = trigger1.getLabel();
		var parent = $p.parent().text1.getValue();			
		var label = parent + "-1";
		//trigger1.setLabel(label);
		text1.setValue(label);
		var options = {  		 
		        id : random, 
		        type : "wframePopup", // "iframePopup", "browserPopup"
		        width: "400px", 
		        height: "300px", 
		        top: top, 
		        left: left, 
		        popupName :label,		        
		        modal : "modal",
		        frameModal : ""
		    }; 
	 
	    $p.openPopup("03_a_popUp_A.xml",  options );
	};
	
	scwin.trigger2_onclick = function(e) {
		
		var random = Math.random();
		var name = trigger2.getLabel();
		var parent = $p.parent().text2.getValue();			
		var label = parent + "-1";
		//trigger1.setLabel(label);
		text1.setValue(label);
		var options = {  		 
		        id : random, 
		        type : "wframePopup", // "iframePopup", "browserPopup"
		        width: "400px", 
		        height: "300px", 
		        //top: "0px", 
		        //left: "0px", 
		        popupName :label,		        
		        modal : "modal",
		        frameModal : ""
		    }; 
	 
	    $p.openPopup("grand_parent2.xml",  options );
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'height:52px;margin:10px;margin-right:0px;width:250px;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;background-color:#FF8080;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{id:'text1',label:'',style:'width: 150px;height: 23px;'}}]}]}]})