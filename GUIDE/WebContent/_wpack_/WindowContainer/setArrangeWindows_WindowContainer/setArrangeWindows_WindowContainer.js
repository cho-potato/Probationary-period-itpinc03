/*amd /WindowContainer/setArrangeWindows_WindowContainer/setArrangeWindows_WindowContainer.xml 5133 b8cbe675d6ad6c87ade9c728eab2388eeacd493b0535e9e434a320a12c19038d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		windowContainer1.createWindow({
			"title" : "Red", 
			"src" : "sub_red.xml", 
			"windowId" : "red", 
			"frameMode" : "wframe", 
			"title" : "Title_Red"
		});	
		windowContainer1.createWindow({
			"title" : "Green", 
			"src" : "sub_green.xml", 
			"windowId" : "green", 
			"frameMode" : "wframe", 
			"title" : "Title_Green"
		});	
		windowContainer1.createWindow({
			"title" : "Blue", 
			"src" : "sub_blue.xml", 
			"windowId" : "blue", 
			"frameMode" : "wframe", 
			"title" : "Title_Blue"
		});	
		windowContainer1.createWindow({
			"title" : "Yellow", 
			"src" : "sub_yellow.xml", 
			"windowId" : "yellow", 
			"frameMode" : "wframe", 
			"title" : "Title_Yellow"
		});	
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		windowContainer1.setArrangeWindows("vertical", ["red", "yellow", "green"]);
	};
	
	scwin.trigger2_onclick = function(e) {
		windowContainer1.setArrangeWindows("vertical", ["blue", "red"]);
		
	};
	
	scwin.trigger3_onclick = function(e) {
		windowContainer1.setArrangeWindows("horizontal", ["red", "yellow", "green"]);
		
	};
	
	scwin.trigger4_onclick = function(e) {
		windowContainer1.setArrangeWindows("horizontal", ["green", "red"]);
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:windowContainer',A:{sequentialArrangeColNum:'2',verticalArrangeNum:'2',controlIconPosition:'left',windowMaximizeAll:'false',id:'windowContainer1',useStatusMsg:'true',hideTitleOnMaximize:'false',spaInitCount:'0',useNameContainer:'false',useControlIconTitle:'false',tooltipDisplay:'true',style:'position: relative;width:50%;height:70%;margin: 20px;margin-left: 300px;border: gray solid 1px;',sequentialArrangeRowNum:'2',fixArrangeFullScreen:'false',useFixButton:'false',windowAutoResize:'false',windowMaxNum:'5',useCloseButton:'false',stopMinimizeOnNameLayer:'true',toolbarPosition:'bottom',stopToggleOnLast:'false',horizontalArrangeNum:'2',useCustomMsg:'false',tooltipGroupClass:'false',windowTooltipDisplay:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]},{T:1,N:'xf:group',A:{tagname:'table',style:'position: relative;width:50%;margin: 20px;margin-left: 300px;',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:25.00%'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:25.00%'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: white',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',id:'trigger1',style:'position: relative;width: 90%;height: 30px;margin: 10px;margin-left: 20px;font-weight: bolder;font-size: 15px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Vertial (Red - Yellow - Green)'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: white;',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',id:'trigger2',style:'position: relative;width: 90%;height: 30px;margin: 10px;margin-left: 20px;font-weight: bolder;font-size: 15px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Vertial (Blue- Red)'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: white;',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger3_onclick',id:'trigger3',style:'position: relative;width: 90%;height: 30px;margin: 10px;margin-left: 20px;font-weight: bolder;font-size: 15px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Horizontal (Red, Yellow, Green)'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: white;',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger4_onclick',id:'trigger4',style:'position: relative;width: 90%;height: 30px;margin: 10px;margin-left: 20px;font-weight: bolder;font-size: 15px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Horizontal (Green, Red)'}]}]}]}]}]}]}]}]})