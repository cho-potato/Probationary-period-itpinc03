/*amd /$p/Submission/executeSubmission_$p/executeSubmission_$p.xml 6327 d3ddf5e8af7ff91c5dbec6fe7875576538a17ef86c07cb551a9c6e82071306f4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'Status',name:'Status'}},{T:1,N:'w2:column',A:{dataType:'text',id:'date',name:'date'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Expense',name:'Expense'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Income',name:'Income'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Hobby',name:'Hobby'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Region',name:'Region'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Frequency',name:'Frequency'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ID',name:'ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Age',name:'Age'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'Submission being processed...','ev:submit':'scwin.submission1_submit','ev:submitdone':'scwin.submission1_submitdone','ev:submiterror':'scwin.submission1_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'submission2',ref:'',target:'data:json,dataList1',action:'datal.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'Submission being processed...','ev:submit':'scwin.submission2_submit','ev:submitdone':'scwin.submission2_submitdone','ev:submiterror':'scwin.submission2_submiterror',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.submission1_submit = function(e) {
		alert("Submission is about to start!");
	};
	
	scwin.submission1_submitdone = function(e) {
		alert("Submission successful.");
	};
	
	scwin.submission1_submiterror = function(e) {
		alert("Submission failed.");
	};
	
	scwin.trigger1_onclick = function(e) {
		$p.executeSubmission("submission1");		
	};
	
	scwin.submission2_submit = function(e) {
		alert("Submission is about to start!");
	};
	
	scwin.submission2_submitdone = function(e) {
		alert("Submission successful.");
	};
	
	scwin.submission2_submiterror = function(e) {
		alert("Submission failed.");
	};
	
	scwin.trigger2_onclick = function(e) {
		$p.executeSubmission("submission2");	
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',dataList:'data:dataList1',defaultCellHeight:'20',id:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'margin:100px;margin-bottom: 20px;width: 80%;height: 50%;border: solid black 1px;'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'height:20px',value:'Status',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column8',inputType:'text',style:'height:20px',value:'date',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'height:20px',value:'Expense',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',style:'height:20px',value:'Income',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'height:20px',value:'Hobby',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',style:'height:20px',value:'Region',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'height:20px',value:'Frequency',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',style:'height:20px',value:'ID',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'height:20px',value:'Age',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'Status',inputType:'text',style:'height:20px',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'date',inputType:'text',style:'height:20px',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Expense',inputType:'text',style:'height:20px',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Income',inputType:'text',style:'height:20px',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Hobby',inputType:'text',style:'height:20px',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Region',inputType:'text',style:'height:20px',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Frequency',inputType:'text',style:'height:20px',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ID',inputType:'text',style:'height:20px',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Age',inputType:'text',style:'height:20px',value:'',width:'70'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'display: block;width: 320px;padding: 10px;line-height:32px;height:45px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin-left: 100px;margin-top:0px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'submission1'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 320px;padding: 10px;line-height:32px;height:45px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin: 100px;margin-top:20px;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'submission2'}]}]}]}]}]})