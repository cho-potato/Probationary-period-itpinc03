/*amd /GridView/inputType/inputType_autoComplete_directOpen_gridView_column.xml 4468 a5c5b236a42b8dbddf66fa81ea1dbcb0487ec4a7e3ba59a0d2a7d72092aee904 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'Continent'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'Country'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'Item'}},{T:1,N:'w2:column',A:{dataType:'number',id:'col4',name:'Quantity'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'Asia'}]},{T:1,N:'col2',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'Europe'}]},{T:1,N:'col2',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'Americas'}]},{T:1,N:'col2',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var json = [
			{"col1" : "Asia", "col2" : "Korea", "col3" : "13452", "col4" : "37.2"},
			{"col1" : "Asia", "col2" : "China", "col3" : "20392", "col4" : "40.3"},
			{"col1" : "Asia", "col2" : "Japan", "col3" : "45993", "col4" : "35.0"},
			{"col1" : "Europe", "col2" : "Germany", "col3" : "19034", "col4" : "39.8"},
			{"col1" : "Europe", "col2" : "France", "col3" : "58922", "col4" : "41.2"},
			{"col1" : "Europe", "col2" : "Denmark", "col3" : "43267", "col4" : "38.7"},
			{"col1" : "Americas", "col2" : "Canada", "col3" : "32012", "col4" : "36.9"},
			{"col1" : "Americas", "col2" : "USA", "col3" : "18290", "col4" : "38.1"},
			{"col1" : "Americas", "col2" : "Mexico", "col3" : "34102", "col4" : "39.5"}
			];
		dataList1.setJSON(json);
	};
	
	scwin.onpageunload = function() {		
			
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 90px;margin-left: 100px;'},E:[{T:1,N:'w2:gridView',A:{showSortableUseFilter:'',scrollByColumnAdaptive:'false',rowNumVisible:'',useShiftKey:'true',scrollByColumn:'false',sortable:'',defaultCellHeight:'20',noResultMessageVisible:'',focusMode:'cell',selectedCellColor:'#FF8040',checkAllType:'false',dataList:'data:dataList1',copyType:'native',style:'width: 500px;height: 150px;',id:'gridView1',autoFit:'allColumn',visibleRowNum:'18',useFilterList:'',useCtrlKey:'',copyOption:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column4',value:'Continent',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column3',value:'Country',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column2',value:'ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column1',value:'Record',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{ref:'',directOpen:'true',chooseOption:'',width:'70',viewType:'icon',inputType:'autoComplete',style:'height:20px',id:'col1',allOption:'',viewTypeIconImage:'true',value:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList2'},E:[{T:1,N:'w2:label',A:{ref:'col1'}},{T:1,N:'w2:value',A:{ref:'col2'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col4',value:'',displayMode:'label'}}]}]}]}]}]}]}]})