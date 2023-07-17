/*amd /AutoComplete/enableColumn_enableColumnFalseValue_AutoComplete.xml 2482 e9f83f746a1a8739b921101a45effac7da4a1a09204e0577677c34ade9a40b40 */
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
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'autoComplete1',useKeywordHighlight:'false',style:'width: 148px;height: 21px;margin-left: 200px;margin-top: 100px;',submenuSize:'auto',search:'start',useLocale:'false',allOption:'',chooseOption:'',ref:'',enableColumn:'Type',enableColumnFalseValue:'Overseas'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'w2:label',A:{ref:'City'}},{T:1,N:'w2:value',A:{ref:'Code'}}]}]}]}]}]}]})