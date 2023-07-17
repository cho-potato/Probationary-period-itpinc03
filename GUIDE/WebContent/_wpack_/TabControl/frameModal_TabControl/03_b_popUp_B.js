/*amd /TabControl/frameModal_TabControl/03_b_popUp_B.xml 1985 40c019c52b90577abd68de11abfa5cfd67ac166e93bf6b9149a1da65385f5852 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		requires("uiplugin.popup");			
		
		var parent2 = $p.parent().text2.getValue();	
		var triggerName2 = parent2;
		trigger2.setLabel(triggerName2);
		text2.hide();
	};
	
	scwin.onpageunload = function() {
		
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
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'height:52px;margin:50px;margin-top: 20px;margin-right:0px;width:250px;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;background-color:#8080C0;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{id:'text2',label:'',style:'width: 150px;height: 23px;'}}]}]}]})