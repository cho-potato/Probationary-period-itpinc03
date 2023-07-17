/*amd /gridView-023/gridView_top_footer_003.xml 5927 0b9c6cdca78e0d9cdc476b228d4606940e0786a99113556794375936b71e0b0b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var jsonData = [
			{"col1":"aa","col2":"","col3":"","col4":"1000"}
			,{"col1":"aa","col2":"","col3":"","col4":"10000"}
			,{"col1":"bb","col2":"","col3":"","col4":"500"}
			,{"col1":"bb","col2":"","col3":"","col4":"500"}
			,{"col1":"cc","col2":"","col3":"","col4":"50000"}
		];
		dataList1.setJSON(jsonData);
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var options = {};
		options.fileName = "test.xlsx";
		options.type = "1";
//		options.removeHeaderRows = "1";
		options.useStyle = "true";
		options.useSubTotal = scwin.subTotalVisibleFlag != "false" ? "true" : "false";
		gridView1.advancedExcelDownload(options);
	};
	
	scwin.trigger2_onclick = function(e) {
		gridView1.setSubtotalVisible(false);
		scwin.subTotalVisibleFlag = "false";
	};
	
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.w2grid th.gridHeaderTDDefault.headerColor{background:url(\'\');background-color:#e3fbf2!important}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{id:'gridView1',style:'width:447px;height:315px;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column4',value:'name1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column3',value:'name2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column2',value:'name3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column1',value:'name4',blockSelect:'false',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column8',value:'',blockSelect:'false',displayMode:'label',class:'headerColor'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column7',value:'',blockSelect:'false',displayMode:'label',class:'headerColor'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column6',value:'합계',blockSelect:'false',displayMode:'label',class:'headerColor'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column5',value:'',blockSelect:'false',displayMode:'label',expression:'sum(\'col4\')',dataType:'number',displayFormat:'#,###',class:'headerColor',textAlign:'right'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'col1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'col2',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'col3',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'col4',value:'',blockSelect:'false',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'col1',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column12',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column11',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column10',value:'소계',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column9',value:'',blockSelect:'false',displayMode:'label',expression:'sum(\'col4\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'excel'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:125px;height:23px;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setSubtotalVisible'}]}]}]}]}]})