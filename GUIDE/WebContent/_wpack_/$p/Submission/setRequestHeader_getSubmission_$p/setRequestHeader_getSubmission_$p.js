/*amd /$p/Submission/setRequestHeader_getSubmission_$p/setRequestHeader_getSubmission_$p.xml 8243 f11dd1e4e9c34bfb6c6a4a407b1d976c97d2a72694111fceb6830bd8ee7a3ac5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'C_Code',name:'C_Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Airport',name:'Airport',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Country',name:'Country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'City',name:'City',dataType:'text'}},{T:1,N:'w2:column',A:{id:'A_Code',name:'A_Code',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList2',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'ID',name:'ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Age',name:'Age'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Region',name:'Region'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Hobby',name:'Hobby'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Status',name:'Status'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Income',name:'Income'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Frequency',name:'Frequency'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Expense',name:'Expense'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Date',name:'Date'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'citycode.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'submission2',ref:'',target:'data:json,dataList2',action:'data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	scwin.onpageload = function() {

	};

	scwin.onpageunload = function() {

	};

	scwin.trigger1_onclick = function(e) {
		$p.executeSubmission("submission1");
		var subObj = $p.getSubmission("submission1");
		subObj.setRequestHeader({
			"userKey" : "1_userValue"
		});
		var header = subObj.requestHeader;
		var real = JSON.stringify(header);
		alert("requestHeader : " + real);
	};

	scwin.trigger2_onclick = function(e) {
		$p.executeSubmission("submission2");
		var subObj = $p.getSubmission("submission2");
		subObj.setRequestHeader({
			"userKey" : "2_userValue"
		});
		var header = subObj.requestHeader;
		var real = JSON.stringify(header);
		alert("requestHeader : " + real);

	};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 30px;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width:476px;height:32px;text-align:center;line-height:32px;margin-bottom:30px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.executeSubmission() & subObj.setRequestHeader()'}]}]},{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',checkAllType:'false',dataList:'data:dataList1',style:'width: 700px;height: 150px;',scrollByColumn:'false',id:'',defaultCellHeight:'20',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column5',value:'C_Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column4',value:'Airport',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column3',value:'Country',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column2',value:'City',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column1',value:'A_Code',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'C_Code',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Airport',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Country',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'City',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'A_Code',value:'',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'margin-left: 30px;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',style:'width:476px;height:32px;text-align:center;line-height:32px;margin-bottom:30px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.executeSubmission() & subObj.setRequestHeader()'}]}]},{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',checkAllType:'false',dataList:'data:dataList2',style:'width: 700px;height: 150px;',scrollByColumn:'false',id:'gridView2',defaultCellHeight:'20',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column9',value:'ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column8',value:'Age',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column7',value:'Region',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column6',value:'Hobby',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column5',value:'Status',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column4',value:'Income',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column3',value:'Frequency',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column2',value:'Expense',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column1',value:'Date',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'ID',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Age',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Region',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Hobby',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Status',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Income',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Frequency',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Expense',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Date',value:'',displayMode:'label'}}]}]}]}]}]}]}]})