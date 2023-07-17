/*amd /Accordion/getOpenPanelInfo_Accordion.xml 2942 2ee8cff433c85b7766a05bfce79239cbba6e8b1b3760997366c47761646a5738 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var openPanel = accordion1.getOpenPanelInfo(2);
		var openPanelInfo = JSON.stringify(openPanel);
		alert(openPanelInfo); 
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:20%;height:35px;margin:20px;margin-top:30px;background-color:#C0C0C0;font-size:15px;padding:10px;font-family:monospace;font-style:normal;font-weight:bolder;margin-left: 50px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getOpenPanelInfo()'}]}]},{T:1,N:'w2:accordion',A:{id:'accordion1',unCollapseAll:'true',collapseAll:'',style:'width: 60%;height: 80%;margin-top: 0px;margin-left: 50px;',collapsible:'',selectedPanel:'',class:'',titleDivTag:'',panelMoveSpeed:''},E:[{T:1,N:'w2:panels',A:{id:'panel1',style:'',class:''},E:[{T:1,N:'w2:panelTitle',A:{id:'panelTitle1',style:'',class:'',label:'1'}},{T:1,N:'w2:panelContent',A:{id:'panelContent1',style:'height:80%;width: 90%;',class:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Panel 1',style:'width: 150px;height: 23px;margin: 50px;background-color:#C0C0C0;font-size:15px;padding: 10px;font-family:monospace;font-style:normal;font-weight:bolder;'}}]}]},{T:1,N:'w2:panels',A:{id:'panel2',style:'',class:''},E:[{T:1,N:'w2:panelTitle',A:{id:'panelTitle2',style:'',class:'',label:'2'}},{T:1,N:'w2:panelContent',A:{id:'panelContent2',style:'height:80%;width: 90%;',class:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Panel 2',style:'width: 150px;height: 23px;margin: 50px;background-color:#C0C0C0;font-size:15px;padding: 10px;font-family:monospace;font-style:normal;font-weight:bolder;'}}]}]},{T:1,N:'w2:panels',A:{id:'panel3',style:'',class:''},E:[{T:1,N:'w2:panelTitle',A:{id:'panelTitle3',style:'',class:'',label:'3'}},{T:1,N:'w2:panelContent',A:{id:'panelContent3',style:'height:80%;width: 90%;',class:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',id:'select1',style:'position: absolute ;left:589px;top:91px;width: 54px;height: 25px;',selectedIndex:'-1'}},{T:1,N:'w2:textbox',A:{id:'',label:'Panel 3',style:'width: 150px;height: 23px;margin: 50px;background-color:#C0C0C0;font-size:15px;padding: 10px;font-family:monospace;font-style:normal;font-weight:bolder;'}}]}]}]}]}]}]})