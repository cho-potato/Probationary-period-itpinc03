/*amd /GridView/gridView.column/customFormatter_gridView_column.xml 6505 23d617ecd198d4366b4ddd3cb04d6408f8df052361063a36369f966a28a95510 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/Guide/GridView/color.css" type="text/css"'},{T:7,N:'xml-stylesheet',instruction:'href="/Guide/GridView/style.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true','ev:oncelldatachange':'scwin.dataList1_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Status',name:'Status',dataType:'text',importFormatter:'scwin.statusFormatter'}},{T:1,N:'w2:column',A:{id:'Date',name:'Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Expense',name:'Expense',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Income',name:'Income',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Hobby',name:'Hobby',dataType:'text',importFormatter:''}},{T:1,N:'w2:column',A:{id:'Region',name:'Region',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Frequency',name:'Frequency',dataType:'text',importFormatter:''}},{T:1,N:'w2:column',A:{id:'ID',name:'ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Age',name:'Age',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		$p.executeSubmission("submission1");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.IdFormatter = function(data){
	return data.substring(0,3) + "-" + data.substring(3,5);

	}
	
	scwin.custom = function(data, formattedData, rowIndex, colIndex){
		if (data == "Movie") {
			gridView1.setCellColor(rowIndex, "Hobby", "red");
			gridView1.setCellBackgroundColor(rowIndex, "Region", "orange");
		}
		return formattedData;
	}
	
	scwin.statusFormatter = function (rowJson, rowIndex, colIndex) {
		data = rowJson.Status;
		return data.substring(0,1);
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{id:'gridView1',style:'width: 90%;margin: 30px;height: 200px;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',visibleRowNum:'9',rowNumVisible:'true',autoFit:'allColumn',contextMenu:'true','ev:oncelldblclick':'scwin.gridView1_oncelldblclick',autoFitMinWidth:'0'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column9',value:'Status',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column8',value:'Date',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column7',value:'Expense',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column6',value:'Income',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column5',value:'Hobby',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column4',value:'Region',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column3',value:'Frequency',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column2',value:'ID',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column1',value:'Age',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Status',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'',style:'height:20px',id:'Date',value:'',blockSelect:'false',displayMode:'label',displayFormatFunc:'',displayFormat:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Expense',value:'',blockSelect:'false',displayMode:'label',displayFormat:'#,###',displayFormatter:'',displayFormatFunc:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Income',value:'',blockSelect:'false',displayMode:'label',displayFormat:'#,###,###.00',calendarClass:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Hobby',value:'',blockSelect:'false',displayMode:'label',displayFormat:'',customFormatter:'scwin.custom'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Region',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Frequency',value:'',blockSelect:'false',displayMode:'label',displayFormatter:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'ID',value:'',blockSelect:'false',displayMode:'label',displayFormatter:'scwin.IdFormatter',escapeFormatter:'',customFormatter:'',calendarClass:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Age',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]})