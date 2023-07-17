/*amd /_DataCollection/setCondition_LinkedDataList_Radio/setCondition_LinkedDataList_Radio.xml 3015 144b2ba80cf7808f3e89e1bc1b6e23fa185bce2f612977fee2bc9a7a663dfb17 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:linkedDataList',A:{bind:'dataList1',id:'linkedDataList1'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'Status=="Single"'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list','ev:oncelldatachange':'scwin.dataList1_oncelldatachange',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'Change',ignoreStatus:'true',name:'Change'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Status',name:'Status'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Date',name:'Date'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Expense',name:'Expense'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Income',name:'Income'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Hobby',name:'Hobby'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Region',name:'Region'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Frequency',name:'Frequency'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ID',name:'ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Age',name:'Age'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
    	$p.executeSubmission("submission1");
    };
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		//linkedDataList1.setCondition("sort", "DESC('ID')");
		linkedDataList1.setCondition("filter", "Region == 'Seoul'");
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:188px;height:44px;margin-left:100px;margin-top: 20px;margin-bottom: 20px;font-family:sans-serif;font-style:italic;font-weight:bolder;font-size:12px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setCondition'}]}]},{T:1,N:'xf:select1',A:{id:'',selectedIndex:'-1',appearance:'full',style:'width: 200px;height:400px;margin-left: 100px;line-height:25px;max-height:20px;display:block;',cols:'',rows:'',ref:'',class:'',nextTabID:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:linkedDataList1'},E:[{T:1,N:'xf:label',A:{ref:'ID'}},{T:1,N:'xf:value',A:{ref:'Age'}}]}]}]}]}]}]})