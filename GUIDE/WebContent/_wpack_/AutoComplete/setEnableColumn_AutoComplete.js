/*amd /AutoComplete/setEnableColumn_AutoComplete.xml 2939 7005d0692c1e9bf8002560f79db308b4e98c94fa1b0b5eee5f7ee9c2b2bb9f6d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'City',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Country',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Type',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var json = [
			{"Code" : "SEL", "City" : "Seoul", "Country" : "Korea", "Type" : "Domestic"},
			{"Code" : "BSN", "City" : "Busan", "Country" : "Korea", "Type" : "Domestic"},
			{"Code" : "ICN", "City" : "Incheon", "Country" : "Korea", "Type" : "Domestic"},
			{"Code" : "DJN", "City" : "Daejeon", "Country" : "Korea", "Type" : "Domestic"},
			{"Code" : "DGU", "City" : "Daegu", "Country" : "Korea", "Type" : "Domestic"},
			{"Code" : "OTW", "City" : "Ottawa", "Country" : "Canada", "Type" : "Overseas"},
			{"Code" : "LDN", "City" : "Toronto", "Country" : "Canada", "Type" : "Overseas"},
			{"Code" : "BRN", "City" : "Berlin", "Country" : "Germany", "Type" : "Overseas"},
			{"Code" : "BJG", "City" : "Beijing", "Country" : "China", "Type" : "Overseas"},
			{"Code" : "LDN", "City" : "London", "Country" : "UK", "Type" : "Overseas"},
			];
		dataList1.setJSON(json);		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		autoComplete1.setEnableColumn("Country", "Korea");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:252px;line-height:25px;padding:1px;background-color:#C0C0C0;font-size:10px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align:left;margin:30px;margin-left:100px;margin-bottom:0px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setEnableColumn("Country", "Korea")'}]}]},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'autoComplete1',useKeywordHighlight:'false',style:'width: 148px;height: 25px;margin-top: 30px;',submenuSize:'auto',search:'start',useLocale:'false',allOption:'',chooseOption:'',ref:'',enableColumn:'',enableColumnFalseValue:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'w2:label',A:{ref:'City'}},{T:1,N:'w2:value',A:{ref:'Code'}}]}]}]}]}]}]})