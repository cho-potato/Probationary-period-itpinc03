/*amd /GridView/inputType/inputType_checkbox_checkHeaderOnviewchange_gridView_column.xml 3645 4e1e01ea1bc502181ba1606524e9637d11d9d8024bbbd6fa5a066fb64152c15c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'name5'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		for (var i = 0; i < 5 ; i ++) {
			 dataList1.insertRow();
		}		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.gridView1_onviewchange = function(info) {
		
		rowIndex = info.rowIndex+1;
		alert("Row " + rowIndex + " status to be changed.");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{applyAllColumnStyle:'false',checkAllType:'include',checkOnCellClick:'true',dataDragSelect:'true',dataList:'data:dataList1',defaultCellHeight:'20',id:'gridView1',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',rowNumVisible:'true',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'width: 90%;height: 230px;margin: 30px;',summaryAuto:'false',summaryOnlyAuto:'false',syncScroll:'false',useShiftKey:'true',visibleRowNum:'10',useFilterList:'true',showSortableImage:'true','ev:onviewchange':'scwin.gridView1_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',excelLabel:'선택',id:'column1',inputType:'checkbox',style:'',value:'name1',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',style:'',value:'A',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'',value:'B',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column4',inputType:'text',style:'',value:'C',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',style:'',value:'D',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',checkAlways:'false',checkboxLabel:'',displayMode:'label',falseValue:'N',id:'col1',inputType:'checkbox',style:'',trueValue:'Y',value:'',valueType:'other',width:'70',partialCheckNextClick:'check',checkHeaderOnviewchange:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col2',inputType:'',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col3',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col4',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col5',inputType:'text',style:'',value:'',width:'70'}}]}]}]}]}]}]})