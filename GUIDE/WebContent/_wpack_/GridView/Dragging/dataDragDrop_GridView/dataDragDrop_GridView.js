/*amd /GridView/Dragging/dataDragDrop_GridView/dataDragDrop_GridView.xml 8631 948de9a53fad4d38ab8d52f7097fe3f09558d8480452318bc16e08963f8b9062 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'Status',name:'Status'}},{T:1,N:'w2:column',A:{dataType:'date',id:'Date',name:'Date'}},{T:1,N:'w2:column',A:{dataType:'number',id:'Expense',name:'Expense'}},{T:1,N:'w2:column',A:{dataType:'number',id:'Income',name:'Income'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Hobby',name:'Hobby'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Region',name:'Region'}},{T:1,N:'w2:column',A:{dataType:'number',id:'Frequency',name:'Frequency'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ID',name:'ID'}},{T:1,N:'w2:column',A:{dataType:'number',id:'Age',name:'Age'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList11',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'Status',name:'Status'}},{T:1,N:'w2:column',A:{dataType:'date',id:'Date',name:'Date'}},{T:1,N:'w2:column',A:{dataType:'number',id:'Expense',name:'Expense'}},{T:1,N:'w2:column',A:{dataType:'number',id:'Income',name:'Income'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Hobby',name:'Hobby'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Region',name:'Region'}},{T:1,N:'w2:column',A:{dataType:'number',id:'Frequency',name:'Frequency'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ID',name:'ID'}},{T:1,N:'w2:column',A:{dataType:'number',id:'Age',name:'Age'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		$p.executeSubmission("submission1");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'dataDragDrop="true"',style:'width:309px;line-height:32px;padding: 5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align: left;margin: 30px;'}},{T:1,N:'w2:gridView',A:{id:'gridView1',style:'width: 90%;height: 230px;margin: 30px;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',autoFit:'allColumn',visibleRowNum:'',rowNumVisible:'true',dataDragSelect:'',useShiftKey:'true',dataDragDrop:'true',focusMode:'both',useCtrlKey:'',useCtrlOnMultisort:'',selectedRowColor:'#FF8040',selectedCellColor:'#408080'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column2',value:'ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'Status',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column8',value:'Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'Expense',displayMode:'label',colSpan:'',rowSpan:''}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column10',value:'Income',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'Hobby',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'Region',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'Frequency',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'Age',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'ID',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Status',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Date',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Expense',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Income',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Hobby',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Region',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Frequency',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Age',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{id:'gridView2',style:'width: 90%;height: 230px;margin: 30px;margin-top: 0px;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList11',autoFit:'allColumn',rowNumVisible:'true',showSortableImage:'',sortEvent:'',hideHeader:'',dataDragSelect:'',dataDragDrop:'true',useShiftKey:'true',focusMode:'both',selectedCellColor:'#8080FF',selectedRowColor:'#808080'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column2',value:'ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'Status',displayMode:'label',colSpan:'',rowSpan:'',sortable:''}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column10',value:'Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'Expense',displayMode:'label',colSpan:'',rowSpan:'',sortable:'',orderByColumn:'Income'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column11',value:'Income',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'Hobby',displayMode:'label',colSpan:'',rowSpan:'',sortable:'',orderByColumn:'Region'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column12',value:'Region',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column13',value:'Frequency',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'Age',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'ID',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Status',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Date',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Expense',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Income',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Hobby',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Region',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Frequency',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Age',value:'',displayMode:'label'}}]}]}]}]}]}]})