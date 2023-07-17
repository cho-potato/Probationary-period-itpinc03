/*amd /_DataCollection/getCellData_DataList/getCellData_DataList.xml 5018 ae8e0e2b230e0b2dd79a2cf0c2f6997a738f75694704a6098e12a03edaf4fb0c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ID',name:'ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Age',name:'Age',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Region',name:'Region',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Hobby',name:'Hobby',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Status',name:'Status',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Income',name:'Income',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Frequency',name:'Frequency',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Expense',name:'Expense',dataType:'text'}},{T:1,N:'w2:column',A:{id:'date',name:'date',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		$p.executeSubmission("submission1");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.input1_onviewchange = function(info) {
		var count = dataList1.getRowCount();
		var input =  input1.getValue();
		var i=0;
		while ( i <= count) {
			var id = dataList1.getCellData(i, "ID");
			var city = dataList1.getCellData(i, "Region");
			if (id == input) {
				alert ("The user " + id + " is from " + city + ".");
				break;
			}
			i++;
		}
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 30px;'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',checkAllType:'false',dataList:'data:dataList1',style:'height: 300px;margin-top: 50px;',scrollByColumn:'false',id:'',visibleRowNum:'13',defaultCellHeight:'20',autoFit:'allColumn',rowNumVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column9',value:'ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column8',value:'Age',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column7',value:'Region',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column6',value:'Hobby',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column5',value:'Status',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column4',value:'Income',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column3',value:'Frequency',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column2',value:'Expense',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column1',value:'date',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'ID',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Age',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Region',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Hobby',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Status',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Income',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Frequency',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Expense',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'date',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'input1',style:'width:144px;height:21px;margin-top:30px;','ev:onviewchange':'scwin.input1_onviewchange'}}]}]}]}]})