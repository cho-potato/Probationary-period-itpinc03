/*amd /TabControl/frameMode_tabControl_content_openPopup_frameModal_$p/20_tabControl_main.xml 1878 deb521a35b5ea50d73bbbed8a6e35d695eaa840147b5cd1ba4e1cee3a598338c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		text1.hide();
		text2.hide();
		trigger1.hide();
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:tabControl',A:{frameModal:'true',alwaysDraw:'false',closable:'true',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tabControl1',processMsgFrame:'true',style:'width: 98%;height: 900px;padding:20px; top:150px;',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true',userData3:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'PopUp',style:'width:155px;height:30px;'}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'frameModal',style:'width:155px;height:30px;'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',frameMode:'wframe',id:'content1',scope:'',src:'02_openPopUp_tab.xml',style:'height: 100%;'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',frameMode:'wframePreload',id:'content2',scope:'',src:'11_wframe_01.xml',style:'height: 100%'}}]},{T:1,N:'w2:textbox',A:{id:'text1',label:'Main A',style:'width: 150px;height: 23px;'}},{T:1,N:'w2:textbox',A:{id:'text2',label:'Main B',style:'width: 150px;height: 23px;'}},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;',id:'trigger1'},E:[{T:1,N:'xf:label'}]}]}]}]})