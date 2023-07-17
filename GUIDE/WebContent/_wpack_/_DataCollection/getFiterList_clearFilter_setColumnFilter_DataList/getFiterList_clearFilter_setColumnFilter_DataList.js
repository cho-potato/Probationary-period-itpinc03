/*amd /_DataCollection/getFiterList_clearFilter_setColumnFilter_DataList/getFiterList_clearFilter_setColumnFilter_DataList.xml 9325 650198e6dcd5aef9f9fe82c04c78f3bfc27f5438866b5261657622bc58bc53b3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/2019-09/Components/gridview.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Check',name:'Check',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ID',name:'ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Age',name:'Age',dataType:'text'}},{T:1,N:'w2:column',A:{id:'date',name:'date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Status',name:'Status',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Income',name:'Income',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Expense',name:'Expense',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Hobby',name:'Hobby',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Region',name:'Region',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Frequency',name:'Frequency',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'label',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Single'}]},{T:1,N:'value',E:[{T:4,cdata:'Single'}]},{T:1,N:'col3',E:[{T:4,cdata:'true'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Divorced'}]},{T:1,N:'value',E:[{T:4,cdata:'Divorced'}]},{T:1,N:'col3',E:[{T:4,cdata:'true'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Married'}]},{T:1,N:'value',E:[{T:4,cdata:'Married'}]},{T:1,N:'col3',E:[{T:4,cdata:'true'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'None'}]},{T:1,N:'value',E:[{T:4,cdata:'None'}]},{T:1,N:'col3',E:[{T:4,cdata:'false'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		$p.executeSubmission("submission1");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.tempFilter = [];
	
	
	scwin.trigger1_onclick = function(e) {
		scwin.tempFilter = dataList1.getFilterList();
		alert("Filter saved.");
	};
	
	
	scwin.trigger4_onclick = function(e) {
		dataList1.clearFilter();
	};
	
	
	scwin.trigger5_onclick = function(e) {		
		for(var i = 0; i < scwin.tempFilter.length; i++) {
			dataList1.setColumnFilter(scwin.tempFilter[i]);
		alert("Filter loaded.");
		}
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{label:'GridView',style:'height: 30px;margin: 30px 10px 20px 30px;font: 20px bolder;',id:''}},{T:1,N:'xf:group',A:{id:'',style:'margin: 30px 10px 20px 30px;padding: 10px 10px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width: 150px;padding: 10px;margin-right: 10px;font-family: consolas;color: red;',id:'trigger3',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getFilterList();'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger4_onclick',style:'width: 150px;font-family: consolas;color: blue;margin-right: 10px;padding: 10px;font-weight: bolder;',id:'trigger4',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'clearFilter();'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 150px;font-family: consolas;color: green;padding: 10px;font-weight: bolder;',id:'trigger5','ev:onclick':'scwin.trigger5_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setColumnFilter();'}]}]}]},{T:1,N:'w2:gridView',A:{id:'gridview1',style:'width: 90%;height: 40%;margin-left: 30px;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',class:'',autoFit:'allColumn',rowNumVisible:'true',rowStatusVisible:'true',showSortableUseFilter:'',sortable:'true',showSortableImage:'',sortedIconPosition:'left',useCtrlOnMultisort:'',columnMove:'true',tooltipDisplay:'',tooltipHeader:'true',tooltipPositionX:'10',tooltipPositionY:'-20',tooltipShowAlways:'',tooltipDisplayColumn:'',tooltipHeaderShowAlways:'',rowNumHeaderValue:'No.',rowNumWidth:'30',rowNumBackgroundColor:'',rowStatusHeaderValue:'Edit',rowStatusWidth:'',sortEvent:'onclick',sortOrderReverse:'true',preventMultisort:'',editModeEvent:'',keyMoveEditMode:'',moveKeyEditMode:'',moveKeyEditModeAll:'',editModeEventIcon:'',focusMode:'both',selectedRowColor:'#C0C0C0',selectedRowOverColor:'',focusFlow:'linear',selectedCellColor:'#408080',selectedCellOverColor:'',filterBoxvisibleRowNum:'0',visibleRowNum:'15',useFilterList:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'height: 25px;',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column19',value:'Check',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column17',value:'ID',blockSelect:'false',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column15',value:'Age',blockSelect:'false',displayMode:'label',sortable:'',useFilter:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column13',value:'Status',blockSelect:'false',displayMode:'label',sortable:'',viewType:'',useFilter:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',style:'height:20px;',id:'column11',value:'Income',blockSelect:'false',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'height:20px;',id:'column9',value:'Expense',blockSelect:'false',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column7',value:'Hobby',blockSelect:'false',displayMode:'label',sortable:'false',useFilter:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column5',value:'Region',blockSelect:'false',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'75',inputType:'text',style:'height:20px;',id:'column3',value:'Frequency',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'height:20px;',id:'column1',value:'Date',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'checkbox',style:'height:20px',id:'Check',value:'',blockSelect:'false',displayMode:'label',viewType:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'ID',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'spinner',style:'height:20px',id:'Age',value:'',blockSelect:'false',displayMode:'label',viewType:'icon',useFilter:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'',style:'height:20px;',id:'Status',value:'',blockSelect:'false',displayMode:'label',allOption:'',chooseOption:'',ref:'',sortLabel:'',viewType:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList2'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'value'}}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Income',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Expense',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Hobby',value:'',blockSelect:'false',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'',style:'height:20px',id:'Region',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'75',inputType:'text',style:'height:20px',id:'Frequency',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'calendar',style:'height:20px',id:'date',value:'',blockSelect:'false',displayMode:'label',dataType:'',calendarValueType:'',viewType:'icon'}}]}]}]}]}]}]})