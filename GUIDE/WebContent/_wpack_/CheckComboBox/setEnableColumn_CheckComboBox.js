/*amd /CheckComboBox/setEnableColumn_CheckComboBox.xml 2936 30636d5b6111c4461ecdd8379761936a941e5ce2c22cbde27512ed75a76ff2ee */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'Code',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'City',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Country',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Type',name:'name4'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
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
		checkcombobox1.setEnableColumn("Type", "Overseas");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:checkcombobox',A:{id:'checkcombobox1',displayAllOptionLabel:'false',chooseOption:'',displayMode:'label',style:'width:148px;height:21px;margin-right: 30px;margin:100px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',ref:'',class:'',enableColumn:'',enableColumnFalseValue:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:125px;height:23px;line-height:25px;padding:1px;background-color:#C0C0C0;font-size:10px;font-family:monospace;font-style:normal;font-weight:bolder;margin-left:0px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setEnableColumn()'}]}]}]}]}]})