/*amd /GridView/_General/load_add_remove_delete_initilize_view_GridView/load_add_remove_delete_initilize_view_GridView.xml 8027 7e582b5021f8dfed33e5de2f09d3827240129c5ad2f92b10d374833ac69a03dd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/Guide/GridView/color.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true','ev:oncelldatachange':'scwin.dataList1_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Change',name:'Change',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'Status',name:'Status',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Date',name:'Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Expense',name:'Expense',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Income',name:'Income',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Hobby',name:'Hobby',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Region',name:'Region',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Frequency',name:'Frequency',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ID',name:'ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Age',name:'Age',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};	
	
	scwin.trigger1_onclick = function(e) {
		$p.executeSubmission("submission1");
	};
	
	
	scwin.trigger2_onclick = function(e) {
		var focus = gridView1.getFocusedRowIndex();
		dataList1.insertRow(focus);
	};
	
	scwin.trigger3_onclick = function(e) {		
		var focus = gridView1.getCheckedIndex("Change");
		dataList1.removeRows(focus);
	};
	
	scwin.trigger4_onclick = function(e) {
		var focus = gridView1.getCheckedIndex("Change");
		dataList1.deleteRows(focus);
	};
	
	
	scwin.trigger5_onclick = function(e) {
		dataList1.setData([]);
	};
	
	scwin.trigger6_onclick = function(e) {
		var show = dataList1.getAllJSON();
		var real = JSON.stringify(show);
		alert(real);
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;margin:30px;margin-bottom:0;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Submit'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;margin:30px;margin-left:0;margin-bottom:0;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Insert'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;margin:30px;margin-left:0;margin-bottom:0;',id:'trigger3','ev:onclick':'scwin.trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Remove'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;margin:30px;margin-bottom:0;margin-left:0;',id:'trigger4','ev:onclick':'scwin.trigger4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Delete'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;margin:30px;margin-bottom:0;margin-left:0;',id:'trigger5','ev:onclick':'scwin.trigger5_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Initialize'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;margin:30px;margin-bottom:0;margin-left:0;',id:'trigger6','ev:onclick':'scwin.trigger6_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'View'}]}]},{T:1,N:'w2:gridView',A:{id:'gridView1',style:'width:90%;margin:30px;height: 200px;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',visibleRowNum:'9',rowNumVisible:'true',autoFit:'allColumn',contextMenu:'true','ev:oncelldblclick':'',footerCaptionAuto:'',footerSummaryAuto:'',sortable:'true','ev:onsort':'','ev:onaftercolumnmove':'','ev:onaftercolumnresize':'','ev:onbeforecolumnmove':'',rowStatusHeaderValue:'',captionTitle:'',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'checkbox',style:'height:20px',id:'column10',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column9',value:'Status',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column8',value:'Date',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column7',value:'Expense',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column6',value:'Income',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column5',value:'Hobby',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column4',value:'Region',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column3',value:'Frequency',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column2',value:'ID',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column1',value:'Age',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'checkbox',style:'height:20px',id:'Change',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Status',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Date',value:'',blockSelect:'false',displayMode:'label',adaptiveStyle:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Expense',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Income',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Hobby',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Region',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Frequency',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'ID',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Age',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]})