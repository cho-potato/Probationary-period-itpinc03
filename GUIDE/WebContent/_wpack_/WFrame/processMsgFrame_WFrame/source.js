/*amd /WFrame/processMsgFrame_WFrame/source.xml 2741 643d70821be1a8151173b9c5a33916b3d0e56979e66f6871b6b0b28c91529012 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'testdata.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'Loading...','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:'true'}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		$p.executeSubmission("submission1");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;margin: 20px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Submit'}]}]},{T:1,N:'w2:gridView',A:{id:'',style:'width: 500px;height: 90%;margin: 20px;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',rowNumVisible:'true',visibleRowNum:'',rowNumHeaderValue:'No.'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'column1',value:'name1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',id:'column2',value:'name2',style:''}},{T:1,N:'w2:column',A:{width:'70',id:'column3',value:'name3',style:''}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'col1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',id:'col2'}},{T:1,N:'w2:column',A:{width:'70',id:'col3'}}]}]}]}]}]}]})