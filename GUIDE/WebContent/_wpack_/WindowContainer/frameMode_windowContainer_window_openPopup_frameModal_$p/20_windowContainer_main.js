/*amd /WindowContainer/frameMode_windowContainer_window_openPopup_frameModal_$p/20_windowContainer_main.xml 2499 3d807a02b7800b99284f21a676421aed5a0b94bc87bdd0a7650d5c092b40d18b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
		text1.hide();
		text2.hide();
		trigger1.hide();
		
		windowContainer1.createWindow({
			"title" : "PopUp Closing", 
			"windowTitle" : "PopUp Closing",
			"src" : "01_wframe_frameModal.xml", 
			"windowId" : "window01", 
			"frameMode" : "wframe",
			"frameModal" : "true"
		});	
		windowContainer1.createWindow({
			"title" : "frameModal", 
			"windowTitle" : "frameModal",
			"src" : "11_wframe_01.xml", 
			"windowId" : "window02", 
			"frameMode" : "wframe",
			"frameModal" : "true"
		});	
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:windowContainer',A:{sequentialArrangeColNum:'2',verticalArrangeNum:'2',controlIconPosition:'left',windowMaximizeAll:'false',id:'windowContainer1',useStatusMsg:'true',hideTitleOnMaximize:'false',spaInitCount:'0',useNameContainer:'false',useControlIconTitle:'false',tooltipDisplay:'true',style:'position: relative;width: 95%;height: 95%;border: gray solid 1px;',sequentialArrangeRowNum:'2',fixArrangeFullScreen:'false',useFixButton:'false',windowAutoResize:'false',windowMaxNum:'5',useCloseButton:'false',stopMinimizeOnNameLayer:'false',toolbarPosition:'bottom',stopToggleOnLast:'false',horizontalArrangeNum:'2',useCustomMsg:'false',tooltipGroupClass:'false',windowTooltipDisplay:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]},{T:1,N:'w2:textbox',A:{id:'text1',label:'Main A',style:'width: 150px;height: 23px;'}},{T:1,N:'w2:textbox',A:{id:'text2',label:'Main 2',style:'width: 150px;height: 23px;'}},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;',id:'trigger1'},E:[{T:1,N:'xf:label'}]}]}]}]})