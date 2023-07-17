/*amd /GridView/_General/setColumnVisibleColumn_GridView/setColumnVisibleColumn_Gridview.xml 8631 b59639945654ebfdea35391f0aa28e618ac8aa4085fd9b21226133b176bef4d9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/2019-09/Components/gridview.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Check',name:'Check',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ID',name:'ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Age',name:'Age',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Status',name:'Status',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Income',name:'Income',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Expense',name:'Expense',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Hobby',name:'Hobby',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Region',name:'Region',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Frequency',name:'Frequency',dataType:'text'}},{T:1,N:'w2:column',A:{id:'date',name:'date',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'label',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type',name:'type',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Single'}]},{T:1,N:'value',E:[{T:4,cdata:'Single'}]},{T:1,N:'type',E:[{T:4,cdata:'true'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Divorced'}]},{T:1,N:'value',E:[{T:4,cdata:'Divorced'}]},{T:1,N:'type',E:[{T:4,cdata:'true'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Married'}]},{T:1,N:'value',E:[{T:4,cdata:'Married'}]},{T:1,N:'type',E:[{T:4,cdata:'true'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'None'}]},{T:1,N:'value',E:[{T:4,cdata:'None'}]},{T:1,N:'type',E:[{T:4,cdata:'false'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'submission2',ref:'',target:'',action:'',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		$p.executeSubmission("submission1");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.trigger7_onclick = function(e) {
		var filtered = dataList1.getFilteredColData('Hobby');
		alert(filtered);
	};
	
	scwin.trigger8_onclick = function(e) {
		var full = dataList1.getColData('Hobby');
		alert(full);
	};
	
	scwin.trigger9_onclick = function(e) {
		gridview1.setColumnVisibleColumn("Status", "type", false);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width: 360px;height: 40px;margin: 30px 10px 20px 30px;font: 17px bolder;color: blue;',id:'trigger7','ev:onclick':'scwin.trigger7_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getFilteredColData'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 360px;height: 40px;margin: 30px 10px 20px 30px;font: 17px bolder;color: magenta;',id:'trigger8','ev:onclick':'scwin.trigger8_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getColData'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 360px;height: 40px;margin: 20px 10px 50px 30px;font: 17px bolder;color: green;',id:'trigger9','ev:onclick':'scwin.trigger9_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setColumnVisibleColumn'}]}]},{T:1,N:'w2:gridView',A:{id:'gridview1',style:'width: 90%;height: 300px;margin-left: 30px;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',class:'',autoFit:'allColumn',rowNumVisible:'',rowStatusVisible:'',showSortableUseFilter:'',filterShowAlways:'',showSortableImage:'',sortable:'',useFilterList:'true',columnMove:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'height: 25px;',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'checkbox',style:'height:20px;',id:'column19',value:'Check',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column17',value:'ID',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column15',value:'Age',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'select',style:'height:20px;',id:'column13',value:'Status',blockSelect:'false',displayMode:'label',allOption:'',chooseOption:'true',chooseOptionLabel:'Status',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList2'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'value'}}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column11',value:'Income',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column9',value:'Expense',blockSelect:'false',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column7',value:'Hobby',blockSelect:'false',displayMode:'label',useFilter:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column5',value:'Region',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column3',value:'Frequency',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column1',value:'date',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'checkbox',style:'height:20px',id:'Check',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'ID',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Age',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'select',style:'height:20px;',id:'Status',value:'',blockSelect:'false',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList2'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'value'}}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Income',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Expense',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Hobby',value:'',blockSelect:'false',displayMode:'label',useFilter:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'',style:'height:20px',id:'Region',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Frequency',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'date',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]})