/*amd /TabControl/getParameter_$p_addTab_TabControl/getParameter_$p_addTab_TabControl.xml 2082 f1661e92fe589c9c4c7e620f17887c8663e701edd4e8d39f2b3d56fab0f3f7c2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger2_onclick = function(e) {
		var rowJSON = {
		"Product Info" : {"Origin" : "Korea", "Manufacturer" : "Inswave", "Type" : "Software"},
		"Region": "Seoul",
		"Carrier" : true
		};
		
		var dataObject = {
		"type" : "json", 
		"name" : "param",
		"data" : rowJSON
		};
		
		tabControl1.addTab("tab_01", 
		{
			"label" : "New",
			"title" : "dataObject", 
			"openAction" : "exist", 
			"closable" : "true"
		},
		{
		"src" : "src.xml",
		"frameMode" : "wframePreload",
		"scope" : "true",
		"dataObject" : dataObject}
		);
		
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:248px;height:39px;margin:50px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;text-align:left;font-style:normal;font-weight:bolder;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'addTab()'}]}]},{T:1,N:'w2:tabControl',A:{useTabKeyOnly:'true',id:'tabControl1',useMoveNextTabFocus:'false',useConfirmMessage:'false',confirmTrueAction:'exist',confirmFalseAction:'new',alwaysDraw:'false',style:'width: 500px;height: 200px;margin-left: 50px;'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px;',id:'tabs1',label:'Tab 00'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height:170px;',id:'content1'}}]}]}]}]})