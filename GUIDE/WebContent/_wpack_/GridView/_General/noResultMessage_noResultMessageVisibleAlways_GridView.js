/*amd /GridView/_General/noResultMessage_noResultMessageVisibleAlways_GridView.xml 5674 65d74ba0ba7abb0d4f1e177ddda200c77f40adfa5cdccf417161cdd66bd8b9b1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'Continent'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'Country'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'Item'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'Quantity'}}]},{T:1,N:'w2:data',A:{use:'true'}}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		 var json = [
			{"col1" : "Asia", "col2" : "Korea", "col3" : "TV", "col4" : "400"},
			{"col1" : "Asia", "col2" : "Korea", "col3" : "Freezer", "col4" : "300"},
			{"col1" : "Asia", "col2" : "Korea", "col3" : "Washer", "col4" : "100"},
			{"col1" : "Asia", "col2" : "Korea", "col3" : "Heater", "col4" : "250"},
			{"col1" : "Asia", "col2" : "China", "col3" : "TV", "col4" : "400"},
			{"col1" : "Asia", "col2" : "China", "col3" : "Freezer", "col4" : "300"},
			{"col1" : "Asia", "col2" : "China", "col3" : "Washer", "col4" : "100"},
			{"col1" : "Asia", "col2" : "Japan", "col3" : "TV", "col4" : "100"},
			{"col1" : "Asia", "col2" : "Japan", "col3" : "Freezer", "col4" : "300"},
			{"col1" : "Asia", "col2" : "Japan", "col3" : "Washer", "col4" : "200"},
			{"col1" : "Europe", "col2" : "Germany", "col3" : "TV", "col4" : "100"},
			{"col1" : "Europe", "col2" : "Germany", "col3" : "Freezer", "col4" : "300"},
			{"col1" : "Europe", "col2" : "Germany", "col3" : "Washer", "col4" : "200"},
			{"col1" : "Europe", "col2" : "France", "col3" : "TV", "col4" : "100"},
			{"col1" : "Europe", "col2" : "France", "col3" : "Freezer", "col4" : "300"},
			{"col1" : "Europe", "col2" : "France", "col3" : "Washer", "col4" : "200"},
			{"col1" : "Europe", "col2" : "Denmark", "col3" : "TV", "col4" : "100"},
			{"col1" : "Europe", "col2" : "Denmark", "col3" : "Freezer", "col4" : "300"},
			{"col1" : "Europe", "col2" : "Denmark", "col3" : "Washer", "col4" : "200"},
			{"col1" : "Americas", "col2" : "Canada", "col3" : "TV", "col4" : "100"},
			{"col1" : "Americas", "col2" : "Canada", "col3" : "Freezer", "col4" : "300"},
			{"col1" : "Americas", "col2" : "Canada", "col3" : "Washer", "col4" : "200"},
			{"col1" : "Americas", "col2" : "USA", "col3" : "TV", "col4" : "100"},
			{"col1" : "Americas", "col2" : "USA", "col3" : "Freezer", "col4" : "300"},
			{"col1" : "Americas", "col2" : "USA", "col3" : "Washer", "col4" : "200"},
			{"col1" : "Americas", "col2" : "Mexico", "col3" : "TV", "col4" : "100"},
			{"col1" : "Americas", "col2" : "Mexico", "col3" : "Freezer", "col4" : "300"},
			{"col1" : "Americas", "col2" : "Mexico", "col3" : "Washer", "col4" : "200"}
			]; 
		//dataList1.setJSON(json);
	};
	
	scwin.onpageunload = function() {		
			
	};
	
	
	
	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{id:'gridView1',style:'width: 500px;height: 100px;margin: 30px;margin-top: 50px;margin-left: 100px;',checkAllType:'false',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',autoFit:'allColumn',visibleRowNum:'13',rowNumVisible:'',sortable:'',showSortableUseFilter:'',useFilterList:'true',noResultMessageVisible:'',copyOption:'',copyType:'native',useCtrlKey:'',focusMode:'cell',useShiftKey:'true',selectedCellColor:'#FF8040',showSortableImage:'',noResultMessage:'No data.',noResultMessageClass:'',noResultMessageVisibleAlways:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'height:20px',id:'column4',value:'Continent',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column3',value:'Country',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column2',value:'Item',displayMode:'label',useFilter:'',sortLabel:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column1',value:'Quantity',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'height:20px',id:'col1',value:'',displayMode:'label',embeddedInput:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList2'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'value'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'height:20px',id:'col3',value:'',displayMode:'label',validateOnInput:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList3'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'value'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col4',value:'',displayMode:'label',dataType:''}}]}]}]}]}]}]})