/*amd /_DataCollection/setUserData_getUserData_DataList.xml 5457 c569e6bf225e574c42d7cf34045aa980859566353bd44fea7bcb28a7b3589e9d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true',userData1:'Default userData1',userData2:'12345',userData3:'67890'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var json1 = [
	            {"col1": "1", "col2": "3", "col3": "8", "col4": "2", "col5": "4"},
	            {"col1": "3", "col2": "5", "col3": "7", "col4": "3", "col5": "5"},
	            {"col1": "2", "col2": "7", "col3": "6", "col4": "2", "col5": "1"},
	            {"col1": "4", "col2": "9", "col3": "5", "col4": "3", "col5": "5"},
	            {"col1": "5", "col2": "1", "col3": "4", "col4": "4", "col5": "5"},
	            {"col1": "6", "col2": "2", "col3": "3", "col4": "5", "col5": "1"}
	            ];
	     dataList1.setJSON( json1 );
	   };
	
	
	scwin.onpageunload = function() {
		
	};
	
	
	
	scwin.trigger1_onclick = function(e) {
		 dataList1.setUserData("userData3", "This is userData3.");
	};
	
	scwin.trigger2_onclick = function(e) {
		alert(dataList1.getUserData("userData3"));			
	};
	
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.gridBodyDefault button{width:50px!important}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 50px;'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gridView1_oncellclick',scrollByColumnAdaptive:'false',editModeEvent:'onclick',rowNumVisible:'true',scrollByColumn:'false',sortable:'true',ignoreNonEditableCellTabEnter:'',userData1:'gridView userData1 : 1111',defaultCellHeight:'30',editModeEventIcon:'',setCellInputTypeCustom:'',rowStatusVisible:'',contextMenu:'true',dataList:'data:dataList1',keyMoveEditMode:'true',style:'width:547px;height:231px;',moveKeyEditModeAll:'',enterKeyMove:'down',id:'gridView1',ignoreNonEditableCell:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column9',value:'col1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column7',value:'col2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column5',value:'col3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column3',value:'col4',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column1',sortable:'',value:'col5',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',dataType:'',width:'70',inputType:'button',style:'height:20px',id:'col1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'',style:'height:20px',imageSrc:'',userData2:'',id:'col2',userData1:'',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'',style:'height:20px',imageSrc:'',id:'col3',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'',style:'height:20px',imageSrc:'',id:'col4',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'col1\', \'col2\', \'col3\', \'col4\')',removeBorderStyle:'false',dataType:'number',width:'70',displayFormat:'#,###,###',inputType:'expression',style:'height:20px',id:'col5',sortable:'true',value:'',blockSelect:'false',displayMode:'label'}}]}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width:248px;height:32px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin-top: 10px;display: block',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setUserData()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',style:'width:248px;height:32px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin-top: 10px;',id:'trigger2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getUserData()'}]}]}]}]}]}]})