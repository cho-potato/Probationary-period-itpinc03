/*amd /GridView/Excel/advancedExcelUpload_trim_GridView/advancedExcelUpload_trim_GridView.xml 2882 33b2cb5effd7e701895c4a4290be437ee30a2be834cd93b704e0fdd3ee17e24f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'Capital',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'Country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'Continent',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var options = {
			headerExist: 1,			
			trim: 1
		};
		gridView1.advancedExcelUpload(options);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 100px;'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',dataList:'data:dataList1',style:'width: 600px;padding: 5px;height: 150px;border: solid gray 1px;',scrollByColumn:'false',id:'gridView1',defaultCellHeight:'20',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column18',value:'Capital',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column17',value:'Country',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column16',value:'Continent',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col1',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col2',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col3',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width:248px;height:32px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin-top: 10px;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'advancedExcelUpload()'}]}]}]}]}]}]})