/*amd /GridView/Dragging/setDrillDownDragDrop_GridView/setDrillDownDragDrop_GridView.xml 9220 5bdbfecfa54916770813ce4a6504fc23c0a99b8fd29f48ea33cc9778e68df786 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Depth',name:'Depth',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Region',name:'Region',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Population',name:'Population',dataType:'text',valueType:''}},{T:1,N:'w2:column',A:{id:'Area',name:'Area',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GDP',name:'GDP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Literacy',name:'Literacy',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Phones',name:'Phones',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Birthrate',name:'Birthrate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Deathrate',name:'Deathrate',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Depth',name:'Depth',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Region',name:'Region',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Population',name:'Population',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Area',name:'Area',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GDP',name:'GDP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Literacy',name:'Literacy',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Phones',name:'Phones',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Birthrate',name:'Birthrate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Deathrate',name:'Deathrate',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'population.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:'',style:'margin: 10px;'}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		$p.executeSubmission("submission1");		
	};
	
	scwin.onpageunload = function() {
		
	};	
	
	scwin.trigger1_onclick = function(e) {
		gridView1.setDrillDownDragDrop(true);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:309px;line-height:32px;padding: 5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align: left;margin: 20px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setDrillDownDragDrop(true);'}]}]},{T:1,N:'w2:gridView',A:{id:'gridView1',style:'width: 95%;margin: 20px;height: 30%;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',autoFit:'allColumn',visibleRowNumFix:'',visibleRowNum:'',rowNumVisible:'',dataDragSelect:'true',useShiftKey:'true',focusMode:'both',dataDragSelectAutoScroll:'true',contextMenu:'true',dataDragDrop:'true',ignoreCellClick:'false',columnMove:'true',readOnlyTabIgnore:'',ignoreToggleOnDisabled:'false',overflowY:'scroll',useFilterList:'true',copyOption:'dataList',selectedCellColor:'#FF8080',selectedRowColor:'#FF8040'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',id:'column19',value:'Depth'}},{T:1,N:'w2:column',A:{width:'70',id:'column20',value:'Region'}},{T:1,N:'w2:column',A:{width:'70',id:'column21',value:'Population'}},{T:1,N:'w2:column',A:{width:'70',id:'column22',value:'Area'}},{T:1,N:'w2:column',A:{width:'70',id:'column23',value:'GDP'}},{T:1,N:'w2:column',A:{width:'70',id:'column24',value:'Literacy'}},{T:1,N:'w2:column',A:{width:'70',id:'column25',value:'Phones'}},{T:1,N:'w2:column',A:{width:'70',id:'column26',value:'Birthrate'}},{T:1,N:'w2:column',A:{width:'70',id:'column27',value:'Deathrate'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',id:'Depth'}},{T:1,N:'w2:column',A:{width:'70',id:'Region',style:'text-align: left;',inputType:'drilldown',depthColumn:'Depth',showDepth:'3',depthType:'',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',id:'Population'}},{T:1,N:'w2:column',A:{width:'70',id:'Area'}},{T:1,N:'w2:column',A:{width:'70',id:'GDP'}},{T:1,N:'w2:column',A:{width:'70',id:'Literacy'}},{T:1,N:'w2:column',A:{width:'70',id:'Phones',copyOption:'dataList'}},{T:1,N:'w2:column',A:{width:'70',id:'Birthrate'}},{T:1,N:'w2:column',A:{width:'70',id:'Deathrate'}}]}]}]},{T:1,N:'w2:gridView',A:{id:'gridView2',style:'width: 95%;margin: 20px;height:30%;',scrollByColumn:'false',defaultCellHeight:'',scrollByColumnAdaptive:'false',dataList:'data:dataList2',dataDragSelect:'true',autoFit:'allColumn',rowNumVisible:'',contextMenu:'',focusMode:'row',rowStatusVisible:'',visibleRowNum:'',dataDragSelectAutoScroll:'true',dataDragDrop:'true',overflowY:'scroll',fixedColumnWithHidden:'true',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',readOnly:'false',loadCount:'1',useShiftKey:'true',useFilterList:'true',summaryAuto:'false',summaryOnlyAuto:'false',tooltipDisplay:'true',tooltipShowAlwaysColumns:'',tooltipShowAlways:'',preventAddRowOnPaste:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column9',value:'Depth',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column8',value:'Region',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column7',value:'Population',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column6',value:'Area',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column5',value:'GDP',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column4',value:'Literacy',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column3',value:'Phones',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column2',value:'Birthrate',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column1',value:'Deathrate',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Depth',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'',width:'70',inputType:'drilldown',style:'height:20px',id:'Region',value:'',blockSelect:'false',displayMode:'label',depthColumn:'Depth',showDepth:'3',depthType:'',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Population',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Area',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'GDP',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Literacy',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Phones',value:'',blockSelect:'false',displayMode:'label',copyOption:'dataList'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Birthrate',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Deathrate',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]})