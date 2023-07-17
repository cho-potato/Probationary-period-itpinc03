/*amd /_DataCollection/setJSON_DataList/setJSON_DataList.xml 4950 2c793ae026bb3c51f2e4d66c654b0d7fd0166f45119168a5d85b005aada7d955 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/2019-09/Components/WebSquare.css" type="text/css"'},{T:7,N:'xml-stylesheet',instruction:'href="/2019-09/Components/gridview.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name6',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'City',name:'City',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Airport',name:'Airport',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Country',name:'Country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'C_Code',name:'C_Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'A_Code',name:'A_Code',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'citycode.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		$p.executeSubmission("submission1");
	};
	
	scwin.onpageunload = function() {
		
	};

	

	scwin.trigger1_onclick = function(e) {
		var data = [{
				"C_Code": "MAB",
		   	   	"Airport": "Maraba",
		      	"Country": "Brazil",
		      	"City": "Maraba",
		      	"A_Code": "MAB"
			   	},
			   	{
 				"C_Code": "JJU",
				"Airport": "Jeju",
	      		"Country": "Korea",
 	     		"City": "Jeju",
	      		"A_Code": "CJU"
		   		}]
   
   		dataList1.setJSON(data, true);
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'margin: 50px 10px 10px 50px;width: 80px;height: 23px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setJSON'}]}]},{T:1,N:'w2:gridView',A:{id:'gridview1',style:'margin: 50px 10px 10px 50px;width: 800px;height: 900px;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',autoFit:'allColumn',rowNumVisible:'true',rowStatusVisible:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'checkbox',style:'height:20px',id:'chk1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column9',value:'City',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column7',value:'Airport',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column5',value:'Country',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column3',value:'C_Code',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column1',value:'A_Code',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'checkbox',style:'height:20px',id:'chk',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'City',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Airport',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Country',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'C_Code',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'A_Code',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]})