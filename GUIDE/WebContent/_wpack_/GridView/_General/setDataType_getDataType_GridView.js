/*amd /GridView/_General/setDataType_getDataType_GridView.xml 4082 b382e088a3d479932b3e290afa43064d2370e755bca1e01a0031a08b169dbf3a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'col3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var jsonData = [{"col1":"1111","col2":"2222","col3":"3333"}
		    			   ,{"col1":"2222","col2":"4444","col3":"6666"}
		    			   ,{"col1":"1111","col2":"2222","col3":"3333"}
		    			   ,{"col1":"2222","col2":"4444","col3":"6666"}
		    			   ,{"col1":"1111","col2":"2222","col3":"3333"}
		    			   ,{"col1":"2222","col2":"4444","col3":"6666"}];
    	dataList1.setJSON( jsonData );
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		gridView1.setDataType("col1", "float");  
		gridView1.setDataType("col2", "number"); 
		
	};
	
	scwin.trigger2_onclick = function(e) {
		var first = gridView1.getDataType("col1");
		var second = gridView1.getDataType("col2");
		var third = gridView1.getDataType("col3");
		alert("col1 : " + first + " , col2 : " +  second + " , col3 : " + third + " ");	
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{id:'gridView1',style:'width: 500px;height:200px;margin-top:0%;margin:20px;margin-bottom:0px;font-family:sans-serif;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',rowNumVisible:'true',rowStatusVisible:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1',columnClass:'',class:'',width:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'height:40px;color:blue;',id:'column3',value:'col1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'height:40px;color:blue;',id:'column2',value:'col2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'height:40px;color:blue;',id:'column1',value:'col3',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'col1',value:'',blockSelect:'false',displayMode:'label',dataType:'text'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'col2',value:'',blockSelect:'false',displayMode:'label',dataType:'text'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'col3',value:'',blockSelect:'false',displayMode:'label',dataType:'text'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:177px;height:38px;display:;margin:20px;font-family:sans-serif;font-size:20px;font-style:italic;padding:5px;color:green;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setDataType'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:177px;height:39px;margin:20px;margin-top:20px;font-family:sans-serif;font-size:20px;font-style:italic;padding:5px;color:#800000;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getDataType'}]}]}]}]}]})