/*amd /WindowContainer/frameMode_spaReplaceHistory_WindowContainer/frameMode_spaReplaceHistory_WindowContainer.xml 3008 14b6917a6b50c54bfd5ba62d73cf76b1cb508fbcacb96f4f4937b8516d644e1d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var idx = selectbox1.getValue();
		var obj = {
			"title" : "test_" + idx,
			"windowID" : "window_" + idx,
			"frameMode" : "iframe", 
			"src" : idx + ".xml"
		};
		windowCon1.createWindow(obj);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 20px;'},E:[{T:1,N:'w2:windowContainer',A:{sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',spaReplaceHistory:'true',fixArrangeFullScreen:'false',frameMode:'iframe',useFixButton:'false',windowAutoResize:'false',verticalArrangeNum:'2',windowMaxNum:'5',useCloseButton:'false',controlIconPosition:'left',windowMaximizeAll:'false',stopMinimizeOnNameLayer:'false',toolbarPosition:'bottom',id:'windowCon1',useStatusMsg:'true',hideTitleOnMaximize:'false',spaInitCount:'10',stopToggleOnLast:'false',useNameContainer:'false',horizontalArrangeNum:'2',useCustomMsg:'false',spaAuto:'true',useControlIconTitle:'false',tooltipDisplay:'true',tooltipGroupClass:'false',windowTooltipDisplay:'true',style:'position: relative;width: 500px;height: 300px;border-style:solid;border-color:#000000;border-width:1px;'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width:196px;height:39px;margin-top:10px;margin-right:10px;font-family:sans-serif;font-size:15px;font-size-adjust:0;font-style:italic;font-weight:bold;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'createWindow()'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',style:'width:196px;height:39px;margin-top:10px;font-size:15px;font-weight:bold;',disabled:'false',id:'selectbox1',allOption:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'11'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'22'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'22'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'33'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'33'}]}]}]}]}]}]}]}]})