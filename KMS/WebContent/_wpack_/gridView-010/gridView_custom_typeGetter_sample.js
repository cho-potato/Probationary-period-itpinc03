/*amd /gridView-010/gridView_custom_typeGetter_sample.xml 3952 e88c873c5f070a3f763a19dd98028367638d97656a5e421561f8ce984c1eadae */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dataList2',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){ 

            scwin.getType = function ( info ) {
				
                var rowIndex = info.rowIndex;
                var colIndex = info.colIndex;
                var returnInfo;
                
					
                if (dataList1.getCellData(rowIndex, "col2") == 1) {
					returnInfo = {
		                id : "dynamic_select_" + rowIndex + "_" + colIndex,
						inputType : "select",
						options : {
							viewType: "icon"
						},
						itemSet : {
							nodeset : "data:dataList2",
							label : "col1",
							value : "col2"
						}
					};
					
                } else {
					returnInfo = {
		                id : "dynamic_text_" + rowIndex + "_" + colIndex,
						inputType : "text",
						options : {
						}
					};
					
					
                }
                 
                if(returnInfo) {
                    console.log( "[typeGetter] (" + rowIndex + ", " + colIndex + ") : " +returnInfo.inputType);
                }
				
                return returnInfo;
                
			};
 
        
	scwin.grd_onviewchange = function(info) {
		grd.refreshRow(info.rowIndex);
		
	};
	        
	scwin.onpageload = function() {
		var jsonData = [{"col2":"1"},{"col2":"2"},{"col2":"a3"}];
	    dataList1.setJSON( jsonData );
	    dataList1.insertRow(0);
	    dataList1.insertRow();
	    
		var jsonData2 = [{"col1":"a1","col2":"a1"},{"col1":"a2","col2":"a2"},{"col1":"a3","col2":"a3"}];
	    dataList2.setJSON( jsonData2 );
	};
	
	scwin.onpageunload = function() {
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{dataList:'dataList1',applyAllColumnStyle:'false',scrollByColumn:'false',id:'grd',setEmptyStringSortableOnSort:'true',style:'position: absolute;width: 500px;height: 600px;',fixedColumnWithHidden:'true',useShiftKey:'true','ev:onviewchange':'scwin.grd_onviewchange',sortable:'true'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',style:'',inputType:'text',width:'70',value:'name1'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'',inputType:'text',width:'70',value:'name2'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',style:'',width:'70',inputType:'text',value:'name3'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',style:'',inputType:'custom',width:'70',typeGetter:'scwin.getType'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',style:'',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col3',style:'',width:'70',inputType:'text'}}]}]}]}]}]}]})