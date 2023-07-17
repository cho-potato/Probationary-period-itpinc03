/*amd /$p/Submission/executeSubmission_$p_DataMap/executeSubmission_$p_DataMap.xml 6724 ac87ed7975aefa93146974df55948178576bec2fd4c1c713f7ffbb8cc5f70070 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'Name',name:'Name',dataType:'text'}},{T:1,N:'w2:key',A:{id:'Gender',name:'Gender',dataType:'text'}},{T:1,N:'w2:key',A:{id:'Date',name:'Date',dataType:'text'}},{T:1,N:'w2:key',A:{id:'City',name:'City',dataType:'text'}},{T:1,N:'w2:key',A:{id:'Email',name:'Email',dataType:'text'}},{T:1,N:'w2:key',A:{id:'Title',name:'Title',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'City',name:'City',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Gender',name:'Gender',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,["dataList1","dataList2"]',action:'code.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'submission2',ref:'',target:'data:json,dataMap1',action:'data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		$p.executeSubmission("submission1");
	};
	
	scwin.trigger2_onclick = function(e) {		
		$p.executeSubmission("submission2");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'margin: 20px;',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:25.00%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:25.00%'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:25.00%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:25.00%'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'padding: 10px;background-color: white',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',style:'float: right;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width: 80px;height: 23px;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Get Code'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',style:'width: 80px;height: 23px;margin-left: 20px;',id:'trigger2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Get Data'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\r\n    				Name\r\n    				'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'padding: 10px;',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',style:'width: 144px;height: 21px;',ref:'data:dataMap1.Name'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Gender'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'padding: 10px;',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{id:'',selectedIndex:'-1',appearance:'full',style:'width: 150px;height: 21px;',ref:'data:dataMap1.Gender',cols:'',rows:'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList2'},E:[{T:1,N:'xf:label',A:{ref:'Gender'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\r\n    				Sign-up&nbsp;Date\r\n    				'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'padding: 10px;',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',id:'',style:'width: 150px;height: 23px;',renderDiv:'true',focusOnDateSelect:'false',calendarValueType:'yearMonthDate',rightAlign:'false',renderType:'component',ref:'data:dataMap1.Date'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'City'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'padding: 10px;',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{id:'',chooseOption:'',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'data:dataMap1.City',chooseOptionLabel:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\r\n    				E-mail\r\n    				'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'padding: 10px;',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',style:'width: 144px;height: 21px;',ref:'data:dataMap1.Email'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\r\n    				Title\r\n    				'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'padding: 10px;',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',style:'width: 144px;height: 21px;',ref:'data:dataMap1.Title'}}]}]}]}]}]}]})