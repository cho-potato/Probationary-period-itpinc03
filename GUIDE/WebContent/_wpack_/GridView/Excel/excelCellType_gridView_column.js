/*amd /GridView/Excel/excelCellType_gridView_column.xml 6665 30428630a27c3049b2c83443e160914e38e89bb2bb76de03c9d54988f5457c4c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'number',name:'number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bigDecimal',name:'bigDecimal',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text',name:'text',dataType:'text'}},{T:1,N:'w2:column',A:{id:'date',name:'date',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'number',E:[{T:4,cdata:'11'}]},{T:1,N:'bigDecimal',E:[{T:4,cdata:'1.1'}]},{T:1,N:'text',E:[{T:4,cdata:'11'}]},{T:1,N:'date',E:[{T:4,cdata:'20210101'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'number',E:[{T:4,cdata:'12'}]},{T:1,N:'bigDecimal',E:[{T:4,cdata:'1.2'}]},{T:1,N:'text',E:[{T:4,cdata:'12'}]},{T:1,N:'date',E:[{T:4,cdata:'20210102'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'number',E:[{T:4,cdata:'13'}]},{T:1,N:'bigDecimal',E:[{T:4,cdata:'1.3'}]},{T:1,N:'text',E:[{T:4,cdata:'13'}]},{T:1,N:'date',E:[{T:4,cdata:'20210103'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'number',E:[{T:4,cdata:'14'}]},{T:1,N:'bigDecimal',E:[{T:4,cdata:'1.4'}]},{T:1,N:'text',E:[{T:4,cdata:'14'}]},{T:1,N:'date',E:[{T:4,cdata:'20210104'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'number',E:[{T:4,cdata:'15'}]},{T:1,N:'bigDecimal',E:[{T:4,cdata:'1.5'}]},{T:1,N:'text',E:[{T:4,cdata:'15'}]},{T:1,N:'date',E:[{T:4,cdata:'20210105'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var options = {
			useDataFormat: true,
			useSubTotal: true,
			useFooter: true
		};
		gridView1.advancedExcelDownload(options);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 50px;'},E:[{T:1,N:'w2:textbox',A:{style:'width:600px;padding:5px;line-height:32px;height:28px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin-bottom:30px;',id:'',label:'excelCellType = "number" / "bigDecimal" / "text" / "date"',escape:'false'}},{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',dataList:'data:dataList1',style:'width: 600px;height: 150px;',scrollByColumn:'false',id:'gridView1',defaultCellHeight:'20',autoFit:'allColumn',visibleRowNum:'5'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column4',value:'number',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column3',value:'bigDecimal',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column2',value:'text',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column1',value:'date',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',dataType:'',width:'70',excelCellType:'number',inputType:'text',style:'height:20px',id:'number',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',dataType:'',width:'70',excelCellType:'bigDecimal',inputType:'text',style:'height:20px',id:'bigDecimal',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',dataType:'',width:'70',excelCellType:'text',inputType:'text',style:'height:20px',id:'text',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',dataType:'',width:'70',excelCellType:'date',inputType:'text',style:'height:20px',id:'date',value:'',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{expression:'SUM("number")',removeBorderStyle:'false',width:'70',excelCellType:'number',inputType:'expression',style:'height:20px',id:'column12',value:'',excelExpression:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column11',value:'',blockSelect:'false',displayMode:'label',excelCellType:'number',expression:'SUM("bigDecimal")'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column10',value:'',blockSelect:'false',displayMode:'label',excelCellType:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column9',value:'',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column16',value:'',blockSelect:'false',displayMode:'label',expression:'SUM("number")',excelCellType:'number'}},{T:1,N:'w2:column',A:{expression:'SUM("bigDecimal")',removeBorderStyle:'false',width:'70',excelCellType:'bigDecimal',inputType:'expression',style:'height:20px',id:'column15',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column14',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column13',value:'',blockSelect:'false',displayMode:'label'}}]}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width:286px;height:43px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin-top:30px;text-align: left;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'advancedExcelDownload();'}]}]}]}]}]}]})