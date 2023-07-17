/*amd /SelectBox/tooltipDisplay_itemToolTipDisplay_SelectBox.xml 2893 dfa490c2f6ec59513430e64fb69f23d0d2296c97464f41b9038eb1c96aea69cf */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:'margin: 100px;'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'Code',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'City',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Country',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Type',name:'name4'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var json = [
			{"Code" : "SEL", "City" : "Seoul, the largest city in Korea", "Country" : "Korea", "Type" : "Domestic"},
			{"Code" : "BSN", "City" : "Busan, the second largest city in Korea", "Country" : "Korea", "Type" : "Domestic"},
			{"Code" : "ICN", "City" : "Incheon, the gateway to Korea", "Country" : "Korea", "Type" : "Domestic"},
			{"Code" : "DJN", "City" : "Daejeon, the government city of Korea", "Country" : "Korea", "Type" : "Domestic"},
			{"Code" : "DGU", "City" : "Jeju, the largest island in Korea", "Country" : "Korea", "Type" : "Domestic"},
			{"Code" : "OTW", "City" : "Ottawa in Canada", "Country" : "Canada", "Type" : "Overseas"},
			{"Code" : "LDN", "City" : "Toronto in Canada", "Country" : "Canada", "Type" : "Overseas"},
			{"Code" : "BRN", "City" : "Berlin in Germany", "Country" : "Germany", "Type" : "Overseas"},
			{"Code" : "BJG", "City" : "Beijing in China", "Country" : "China", "Type" : "Overseas"},
			{"Code" : "LDN", "City" : "London in GB", "Country" : "UK", "Type" : "Overseas"},
			];
		dataList1.setJSON(json);	
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding-left: 200px;padding-top: 50px;'},E:[{T:1,N:'xf:select1',A:{enableColumn:'',tooltipShowAlways:'',submenuSize:'auto',useItemLocale:'',labelWidthAuto:'',chooseOption:'',tooltip:'',allOption:'',itemTooltipDisplay:'true',ref:'',appearance:'minimal',enableColumnFalseValue:'',tooltipDisplay:'true',disabledClass:'w2selectbox_disabled',itemTooltipFormatter:'',style:'width: 100px;height: 30px;',disabled:'false',id:'select1',class:'',direction:'auto',tooltipLocaleRef:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]}]}]}]})