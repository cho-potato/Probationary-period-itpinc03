/*amd /WindowContainer/changeActiveWindow_WindowContainer.xml 2102 c160bbaec475a5e00f6e87d18161af438fa3c83a588f426ca19ebb34e9090519 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	var i;
        for (i=0; i<10; i++) {
	        var num = JSON.stringify(i+1);  
	        var title = "windowTitle_" + num;
	        var windowId = num;
	        var windowName = "window_" + num;
	        windowContainer1.createWindow( title , "" , "" , windowName , windowId ,"newWindow");
	        windowContainer1.setArrangeWindows("cascade");
	        }   
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:windowContainer',A:{sequentialArrangeColNum:'2',verticalArrangeNum:'2',controlIconPosition:'left',windowMaximizeAll:'false',id:'windowContainer1',useStatusMsg:'true',hideTitleOnMaximize:'false',spaInitCount:'0',nameLayerRearrange:'false',useNameContainer:'false',useControlIconTitle:'false',tooltipDisplay:'true',style:'position: relative;height: 400px;width: 640px;margin: 50px;border: gray solid 1px;',sequentialArrangeRowNum:'2',fixArrangeFullScreen:'false',useFixButton:'false',windowAutoResize:'false',useCloseButton:'false',stopMinimizeOnNameLayer:'false',toolbarPosition:'bottom',stopToggleOnLast:'false',horizontalArrangeNum:'2',useCustomMsg:'false',tooltipGroupClass:'false',windowTooltipDisplay:'true',windowMaxNum:'10',changeActiveWindow:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]})