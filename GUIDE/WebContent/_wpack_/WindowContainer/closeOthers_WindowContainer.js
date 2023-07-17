/*amd /WindowContainer/closeOthers_WindowContainer.xml 3379 a814a9df107e5e3f258e55241dca2a264cfb75229568066e293afe77a8128bbd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

        	    
	scwin.onpageload = function() {
		var i;
        for (i=0; i<4; i++) {
	        var num = JSON.stringify(i+1);  
	        var title = "title_" + num;
	        var windowId = num;
	        var windowName = "name_" + num;
	        windowContainer1.createWindow( title , "" , "" , windowName , windowId ,"newWindow");
	        windowContainer1.setArrangeWindows("sequential");
	        }       
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var title = input1.getValue();		
		var uniqueid = windowContainer1.getUniqueIdByTitle( title );
		windowContainer1.closeOthers(uniqueid);
	};
	
	scwin.trigger2_onclick = function(e) {
		var windowId = input1.getValue();
		windowContainer1.closeOthers(windowId);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:windowContainer',A:{autoArrange:'true',controlIconPosition:'allright',fixArrangeFullScreen:'false',hideTitleOnMaximize:'false',horizontalArrangeNum:'',id:'windowContainer1',sequentialArrangeColNum:'',sequentialArrangeRowNum:'',spaInitCount:'0',stopMinimizeOnNameLayer:'false',stopToggleOnLast:'false',style:'position: relative;height: 300px;width: 800px;margin: 30px;border: gray solid 1px;',toolbarPosition:'top',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'false',useControlIconTitle:'',useCustomMsg:'false',useFixButton:'false',useNameContainer:'true',useStatusMsg:'true',verticalArrangeNum:'',windowAutoResize:'false',windowMaxNum:'20',windowMaximizeAll:'true',windowTooltipDisplay:'true',useWindowScrollButton:'',windowScrollVisibleRowNum:''},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'input1',style:'width:200px;display: block;height:32px;padding:5px;line-height:32px;margin: 30px;margin-top: 0px;height: 21px;',placeholder:'Title or ID'}},{T:1,N:'xf:trigger',A:{type:'button',style:'width:350px;height:35px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin:30px;margin-top:0px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'closeOthers ( getUniqueIDbyTitle( title ) )'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:248px;margin: 30px;margin-top: 0px;height:35px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'closeOthers( windowID )'}]}]}]}]}]})