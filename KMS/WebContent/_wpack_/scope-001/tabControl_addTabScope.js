/*amd /scope-001/tabControl_addTabScope.xml 1907 7845b6fb78a6bd6d89e7cee4a29becc4893f6c1c1e27c5606f65cac00856bdc3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		//tab01 생성
		//debugger;
		var tabOpt = { 
		     label : "요청서1", 
		     closable : true,
		 }; 
		 var contOpt = { 
		     wframe : true, 
		     src : "tab2.xml", 
		     title : "iframe title",
		     alwaysDraw : "false",
		     scope: "true"
		 }; 
		 
		tabControl1.addTab('tab01', tabOpt, contOpt);
		tabControl1.setSelectedTabIndex(1);
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'group1',style:'height:251px;width:186px;float:left;'},E:[{T:1,N:'w2:textbox',A:{id:'textbox1',label:'tabControl addTab(wframe scope) 후 <br/>팝업(iframe) 생성<br/>팝업에서 부모 함수 호출하는법 문의',style:'width:175px;height:178px;float:left;'}}]},{T:1,N:'w2:tabControl',A:{useTabKeyOnly:'true',id:'tabControl1',useMoveNextTabFocus:'false',useConfirmMessage:'false',confirmTrueAction:'exist',confirmFalseAction:'new',alwaysDraw:'false',style:'width: 500px;height: 200px;float:left;',selectedIndex:''},E:[{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height:170px',id:'content1'}},{T:1,N:'w2:tabs',A:{label:'',disabled:'false',style:'width:70px;height:30px;',id:'tabs1'}}]}]}]}]})