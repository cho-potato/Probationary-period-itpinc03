/*amd /WindowContainer/getSelectedIndex_WindowContainer.xml 2964 cac31befc852f864e88642952f93a5d14e222e24e21b35ccb2397f30152d993b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		windowContainer1.createWindow( "aaa" , "" , "" , "window aaa" , 000 ,"newWindow", null,null,null,null,"wframe" );
		windowContainer1.createWindow( "bbb" , "" , "" , "window bbb" , 001 ,"newWindow", null,null,null,null,"wframe" );
		windowContainer1.createWindow( "ccc" , "" , "" , "window ccc" , 002 ,"newWindow", null,null,null,null,"wframe" );
		windowContainer1.createWindow( "ddd" , "" , "" , "window ddd" , 003 ,"newWindow", null,null,null,null,"wframe" );
		windowContainer1.createWindow( "eee" , "" , "" , "window eee" , 004 ,"newWindow", null,null,null,null,"wframe" );	
	};
	
	scwin.onpageunload = function() {
		
	};
	scwin.trigger1_onclick = function(e) {
		var index = windowContainer1.getSelectedIndex();
		alert(index);
	};
	
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.w2window_selected{border:solid 2px green}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:200px;line-height:32px;padding: 5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align: left;margin-bottom: 0px;margin-left: 50px;margin-top: 50px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getSelectedIndex()'}]}]},{T:1,N:'w2:windowContainer',A:{autoArrange:'true',controlIconPosition:'allright',fixArrangeFullScreen:'false',hideTitleOnMaximize:'false',horizontalArrangeNum:'2',id:'windowContainer1',sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',spaInitCount:'0',stopMinimizeOnNameLayer:'false',stopToggleOnLast:'false',style:'position: relative;height: 350px;width: 700px;margin: 50px;border: gray solid 1px;',toolbarPosition:'top',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'false',useControlIconTitle:'true',useCustomMsg:'false',useFixButton:'false',useNameContainer:'true',useStatusMsg:'true',useWindowScrollButton:'true',verticalArrangeNum:'2',windowAutoResize:'false',windowMaxNum:'20',windowMaximizeAll:'true',windowScrollVisibleRowNum:'',windowTooltipDisplay:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]})