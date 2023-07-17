/*amd /WindowContainer/windowMoveType_WindowContainer/windowMoveType_WindowContainer.xml 2071 eb289dae249e08256720169a23ec930c034f262455087abc9e8312db50346141 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var winObj = {
			title: "Window",
			src: "window_src.xml",
			windowTitle: "_windowTitle",
			windowId: "_windowId",
			frameMode: "wframe",
			defaultWidth: "200",
			defaultHeight: "200"
			}
		windowContainer1.createWindow(winObj);
	};
	
	scwin.onpageunload = function() {
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:windowContainer',A:{autoArrange:'true',controlIconPosition:'allright',fixArrangeFullScreen:'false',hideTitleOnMaximize:'false',horizontalArrangeNum:'2',id:'windowContainer1',sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',spaInitCount:'0',stopMinimizeOnNameLayer:'false',stopToggleOnLast:'false',style:'position: relative;height: 70%;width: 80%;margin: 50px;border: gray solid 1px;',toolbarPosition:'top',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'false',useControlIconTitle:'true',useCustomMsg:'false',useFixButton:'false',useNameContainer:'true',useStatusMsg:'true',useWindowScrollButton:'true',verticalArrangeNum:'2',windowAutoResize:'false',windowMaxNum:'20',windowMaximizeAll:'true',windowScrollVisibleRowNum:'',windowTooltipDisplay:'true',defaultHeight:'',defaultWidth:'',windowMoveType:'restrict'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]})