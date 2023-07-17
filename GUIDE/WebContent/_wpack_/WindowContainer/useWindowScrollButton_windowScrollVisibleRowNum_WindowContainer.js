/*amd /WindowContainer/useWindowScrollButton_windowScrollVisibleRowNum_WindowContainer.xml 2038 7195e72110ab15a32bf289ec0b4cbc06691027961029f8c7228fbf3a514d7421 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {		
        var i;
        for (i=0; i<10; i++) {
	    var num = JSON.stringify(i+1);   
	    var title = "_win_" + num + "_"; 
        windowContainer1.createWindow( title, null, null);
    }
        windowContainer1.setArrangeWindows("sequential");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:windowContainer',A:{autoArrange:'true',controlIconPosition:'left',fixArrangeFullScreen:'false',hideTitleOnMaximize:'false',horizontalArrangeNum:'2',id:'windowContainer1',sequentialArrangeColNum:'',sequentialArrangeRowNum:'',spaInitCount:'0',stopMinimizeOnNameLayer:'false',stopToggleOnLast:'false',style:'position: relative;height: 350px;width: 800px;margin: 50px;border: gray solid 1px;',toolbarPosition:'',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'false',useControlIconTitle:'false',useCustomMsg:'false',useFixButton:'false',useNameContainer:'false',useStatusMsg:'true',verticalArrangeNum:'2',windowAutoResize:'false',windowMaxNum:'20',windowMaximizeAll:'true',windowTooltipDisplay:'true',useWindowScrollButton:'true',windowScrollVisibleRowNum:'4'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]})