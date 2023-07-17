/*amd /WindowContainer/createWindow_defaultWidth_defaultHeight_WindowContainer/createWindow_defaultWidth_defaultHeight_WindowContainer.xml 3162 bbe3ac89db55089146b1a7f8b4d58393090101036779ec4d3495fc86ba920e92 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var winObj = {
			title: "600x300",
			src: "window_src.xml",
			windowTitle: "600x300_Title",
			windowId: "600x300_Id",
			frameMode: "wframe",
			defaultWidth: "600",
			defaultHeight: "300"
			}
		windowContainer1.createWindow(winObj);
	};
	
	scwin.trigger2_onclick = function(e) {
		var winObj = {
			title: "200x200",
			src: "window_src.xml",
			windowTitle: "200x200_Title",
			windowId: "200x200_Id",
			frameMode: "wframe",
			defaultWidth: "200",
			defaultHeight: "200"
			}
		windowContainer1.createWindow(winObj);		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'padding: 10px;line-height:32px;height:45px;width: 250px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin: 50px;margin-bottom: 0px;text-align: left;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'createWindow() - 600x300'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'padding: 10px;line-height:32px;height:45px;width: 250px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin: 50px;margin-bottom: 0px;text-align: left;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'createWindow() - 200X200'}]}]},{T:1,N:'w2:windowContainer',A:{autoArrange:'true',controlIconPosition:'allright',fixArrangeFullScreen:'false',hideTitleOnMaximize:'false',horizontalArrangeNum:'2',id:'windowContainer1',sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',spaInitCount:'0',stopMinimizeOnNameLayer:'false',stopToggleOnLast:'false',style:'position: relative;height: 70%;width: 80%;margin: 50px;border: gray solid 1px;',toolbarPosition:'top',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'false',useControlIconTitle:'true',useCustomMsg:'false',useFixButton:'false',useNameContainer:'true',useStatusMsg:'true',useWindowScrollButton:'true',verticalArrangeNum:'2',windowAutoResize:'false',windowMaxNum:'20',windowMaximizeAll:'true',windowScrollVisibleRowNum:'',windowTooltipDisplay:'true',defaultHeight:'',defaultWidth:''},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]})