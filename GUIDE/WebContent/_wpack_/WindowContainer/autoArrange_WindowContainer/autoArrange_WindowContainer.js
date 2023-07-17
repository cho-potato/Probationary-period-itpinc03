/*amd /WindowContainer/autoArrange_WindowContainer/autoArrange_WindowContainer.xml 2113 4a1e4206ae0e000c3246f278f952e84d17ef7f02ffedda348c87a8495ba527b6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
		windowContainer1.createWindow({"title" : "Red", "src" : "sub_red.xml", "windowId" : "window1", "frameMode" : "wframe"});
		
		windowContainer1.createWindow({"title" : "Blue", "src" : "sub_blue.xml", "windowId" : "window2", "frameMode" : "wframe"});
		
		windowContainer1.createWindow({"title" : "Green", "src" : "sub_green.xml", "windowId" : "window3", "frameMode" : "wframe"});
	
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:windowContainer',A:{sequentialArrangeColNum:'',verticalArrangeNum:'2',controlIconPosition:'left',windowMaximizeAll:'false',id:'windowContainer1',useStatusMsg:'true',hideTitleOnMaximize:'false',spaInitCount:'0',useNameContainer:'false',useControlIconTitle:'false',tooltipDisplay:'true',style:'position: relative;height: 450px;margin: 30px;border: gray solid 1px;',sequentialArrangeRowNum:'',fixArrangeFullScreen:'false',useFixButton:'false',windowAutoResize:'false',windowMaxNum:'5',useCloseButton:'false',stopMinimizeOnNameLayer:'false',toolbarPosition:'bottom',stopToggleOnLast:'false',horizontalArrangeNum:'2',useCustomMsg:'false',tooltipGroupClass:'false',windowTooltipDisplay:'true',autoArrange:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]})