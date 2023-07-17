/*amd /WindowContainer/frameMode_windowContainer_window_openPopup_frameModal_$p/01_wframe_frameModal.xml 1180 2fb6d68de39adc0cf55a2e9f88a53fb8d45558c0a8558d7c810b2c44d0708328 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		requires("uiplugin.popup");	
		text1.hide();		
		text2.hide();
		wframe1.setSrc("02_openPopUp.xml");
	};
	
	scwin.onpageunload = function() {
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:wframe',A:{frameModal:'true',style:'width: 1700px;height: 600px;border-color:black;border-style:solid;margin: 10px;margin: 50px;',id:'wframe1'}},{T:1,N:'w2:textbox',A:{id:'text1',label:'Main A',style:'width: 150px;height: 23px;'}},{T:1,N:'w2:textbox',A:{id:'text2',label:'Main B',style:'width: 150px;height: 23px;'}}]}]}]})