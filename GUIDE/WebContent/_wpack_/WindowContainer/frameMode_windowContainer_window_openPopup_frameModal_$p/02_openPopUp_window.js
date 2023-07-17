/*amd /WindowContainer/frameMode_windowContainer_window_openPopup_frameModal_$p/02_openPopUp_window.xml 4034 ac02bce51122081a176395868e05c51d36541656efec4223ba381332eea672cb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		requires("uiplugin.popup");	
		var parent = $p.parent().text1.getValue();	
		var triggerName = parent;
		trigger1.setLabel(triggerName);
		text1.hide();
		
		
		var parent2 = $p.parent().text2.getValue();	
		var triggerName2 = parent2;
		trigger2.setLabel(triggerName2);
		text2.hide();
		
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
		var top = random * 100;
		var left = random * 200;
		var name2 = trigger2.getLabel();
		var parent2 = $p.parent().text2.getValue();			
		var label2 = parent2 + "-1";
		//trigger1.setLabel(label);
		text2.setValue(label2);
		var options = {  		 
		        id : random, 
		        type : "wframePopup", // "iframePopup", "browserPopup"
		        width: "400px", 
		        height: "300px", 
		        top: top, 
		        left: left, 
		        popupName :label2,		        
		        modal : "modal",
		        frameModal : ""
		    }; 
	 
	    $p.openPopup("03_b_popUp_B.xml",  options );
		   
	};
	
	scwin.trigger3_onclick = function(e) {
		var random = Math.random();
		var top = random * 100;
		var left = random * 200;
		var options = {  		 
		        id : random, 
		        type : "iframePopup", // "iframePopup", "browserPopup"
		        width: "800px", 
		        height: "600px", 
		        top: top, 
		        left: left, 
		        popupName : "IFrame - Parent",	
		        resizable: true,	        
		        modal : "",		        
		        frameModal : ""
		    }; 
	 
	    $p.openPopup("03_c_1_parent.xml",  options );
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 5px;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'height:52px;margin:50px;margin-right:0px;width:250px;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;background-color:#FF8080;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',style:'height:52px;margin:50px;margin-right:0px;width:250px;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;background-color:#8080C0;',id:'trigger2',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger3_onclick',style:'height:52px;margin:50px;margin-right:0px;width:250px;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger3',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Main C'}]}]},{T:1,N:'w2:textbox',A:{style:'width: 150px;height: 23px;',id:'text1',label:''}},{T:1,N:'w2:textbox',A:{style:'width: 150px;height: 23px;',id:'text2',label:''}}]}]}]}]})