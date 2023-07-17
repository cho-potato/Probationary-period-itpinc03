/*amd /CheckComboBox/BindItemSet_allOption_chooseOption_chooseOptionLabel_CheckComboBox/BindItemSet_allOption_chooseOption_chooseOptionLabel_CheckComboBox.xml 2028 52d754671994188d46a401c75b022212dcd064cf903dfabe87e9c87539dc834e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'C_Code',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'City',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Country',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Airport',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'A_Code',name:'name5'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'citycode.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		$p.executeSubmission("submission1");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:checkcombobox',A:{id:'',displayAllOptionLabel:'false',chooseOption:'true',displayMode:'label',style:'width: 200px;height: 21px;margin: 50px;',submenuSize:'auto',allOption:'true',disabled:'false',direction:'auto',appearance:'minimal',ref:'',chooseOptionLabel:'Choose airport(s).'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'Airport'}},{T:1,N:'xf:value',A:{ref:'A_Code'}}]}]}]}]}]}]})