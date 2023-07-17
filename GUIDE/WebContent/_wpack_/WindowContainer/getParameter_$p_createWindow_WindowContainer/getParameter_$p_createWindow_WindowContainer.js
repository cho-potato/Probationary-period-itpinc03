/*amd /WindowContainer/getParameter_$p_createWindow_WindowContainer/getParameter_$p_createWindow_WindowContainer.xml 2581 53c232f8d408d7238e34e59d846e5466cde0e19db347002728653748a3e54371 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var rowJSON = {
		"Product Info" : {"Origin" : "Korea", "Manufacturer" : "Inswave", "Type" : "Software"},
		"Region": "Seoul",
		"Carrier" : true
		};
		
		var dataObject = {
		"type" : "json", 
		"name" : "param",
		"data" : rowJSON
		};
		
		var obj = {
			"title" : "Test",
			"windowID" : "001",
			"frameMode" : "wframe",
			"src" : "src.xml",
			"dataObject" : dataObject
		};
		
		windowContainer1.createWindow(obj);
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:248px;height:39px;margin:50px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;text-align:left;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'createWindow()'}]}]},{T:1,N:'w2:windowContainer',A:{sequentialArrangeColNum:'2',verticalArrangeNum:'2',controlIconPosition:'left',windowMaximizeAll:'false',id:'windowContainer1',useStatusMsg:'true',hideTitleOnMaximize:'false',spaInitCount:'0',nameLayerRearrange:'false',useNameContainer:'false',useControlIconTitle:'false',tooltipDisplay:'true',style:'position: relative;width: 500px;height: 300px;margin-left: 50px;border: solid black 1px;',sequentialArrangeRowNum:'2',fixArrangeFullScreen:'false',useFixButton:'false',windowAutoResize:'false',windowMaxNum:'5',useCloseButton:'false',stopMinimizeOnNameLayer:'false',toolbarPosition:'bottom',stopToggleOnLast:'false',horizontalArrangeNum:'2',useCustomMsg:'false',tooltipGroupClass:'false',windowTooltipDisplay:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]})