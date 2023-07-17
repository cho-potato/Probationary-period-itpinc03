/*amd /gridView-026/gridView_select_linkedDatalist.xml 7909 16348140583547a73e5122c4c1b5bfe26864be2ea089715f6358f600127f11e4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'gridViewData',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'대분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'중분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'소분류',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'categoryData',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'label',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'value',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'subCategoryData',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'subCategoryGubun',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{id:'linkedSubCategoryData',style:'',bind:'subCategoryData'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'\r\n            			 subCategoryGubun ==  ref(\'data:gridViewData.col1\')\r\n            		'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:dataList',A:{id:'subSubCategoryData',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'subSubCategoryGubun',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{id:'linkedSubSubCategoryData',style:'',bind:'subSubCategoryData'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'\r\n            			 subSubCategoryGubun ==  ref(\'data:gridViewData.col2\')\r\n            		'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]}]}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
	        	categoryData.setJSON([{"label":"A","value":"A"},{"label":"B","value":"B"}]);
	
	        	var selectBoxObj2 = [{"subCategoryGubun":"A","value":"A1","label":"A중분류-1"},{"subCategoryGubun":"A","value":"A2","label":"A중분류-2"},{"subCategoryGubun":"B","value":"B1","label":"B중분류-1"},{"subCategoryGubun":"B","value":"B2","label":"B중분류-2"}];
	        	subCategoryData.setJSON(selectBoxObj2);
	        	
				var selectBoxObj3 = [{"subSubCategoryGubun":"A1","value":"AA1-1","label":"A중분류-1-소분류1"},{"subSubCategoryGubun":"A1","value":"AA1-2","label":"A중분류-1-소분류2"}
				,{"subSubCategoryGubun":"A2","value":"AA2-1","label":"A중분류-2-소분류1"},{"subSubCategoryGubun":"A2","value":"AA2-2","label":"A중분류-2-소분류2"}
				,{"subSubCategoryGubun":"B1","value":"BB1-1","label":"B중분류-1-소분류1"},{"subSubCategoryGubun":"B1","value":"BB1-2","label":"B중분류-1-소분류2"}
				,{"subSubCategoryGubun":"B2","value":"BB2-1","label":"B중분류-2-소분류1"},{"subSubCategoryGubun":"B2","value":"BB2-2","label":"B중분류-2-소분류2"}
				
				];
	        	subSubCategoryData.setJSON(selectBoxObj3);        	
	
	
	        	var gridDataObj = [
								    {
								        "col1": "A",
								        "col2": "A1",
								        "col3": "AA1-1"
								    },
								    {
								        "col1": "B",
								        "col2": "B1",
								        "col3": "BB1-1"
								    },
								    {
								        "col1": "A",
								        "col2": "A2",
								        "col3": "AA2-1"
								    },
								    {
								        "col1": "B",
								        "col2": "B2",
								        "col3": "BB2-1"
								    }
								];
	
	        	gridViewData.setJSON(gridDataObj);				
			};
			
			scwin.onpageunload = function() {
				
			};

		
			scwin.gridView1_onafteredit = function(row,col,value) {
                if(col==0){
                    // 0번 컬럼이 바뀌면 1번 컬럼이 바뀌고, 1번 컬럼이 바뀌면 2번 컬럼이 바뀜.
                    // 즉, 0번 컬럼이 바뀌면 1번, 2번 컬럼이 바뀌므로 둘 다 갱신 필요.
                    // linkedSubCategoryData.getCellData(0, "value")의 의미는 linkedCategoryData이 가진 첫번째 selectbox값을 의미한다.
                    gridViewData.setCellData(row, "col2", linkedSubCategoryData.getCellData(0,"value")); 
                    gridViewData.setCellData(row, "col3", linkedSubSubCategoryData.getCellData(0,"value"));
                }
                if(col==1){ 
                    // 1번 컬럼이 바뀌면 2번 컬림이 바뀜. 2번 컬럼에 대한 갱신 필요.
                    // linkedSubSubCategoryData.getCellData(0, "value")의 의미는 linkedDataList2가 가진 첫번째 selectbox값을 의미한다.
                    gridViewData.setCellData(row, "col3", linkedSubSubCategoryData.getCellData(0,"value"));
                } 				
			};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'group2',style:'height:370px;width:1038px;float:left;'},E:[{T:1,N:'w2:textbox',A:{id:'textbox1',style:'position: relative;width:928px;height:103px;float:left;',label:'- 대분류 컬럼과 중분류,소분류 컬럼은 selectBox 입니다.<br/>- 대분류는 categoryData(DataList) 을 노드셋으로 사용합니다.<br/>- 중분류는 linkedSubCategoryData(linkedDataList)을 노드셋으로 사용하며 filter Condition은 gridViewData.col1 == subCategoryGubun 정의하였습니다. <br/>- 소분류는 linkedSubSubCategoryData(linkedDataList)을 노드셋으로 사용하며 filter Condition은 gridViewData.col2 == subSubCategoryGubun 정의하였습니다. '}},{T:1,N:'w2:gridView',A:{id:'gridView1',dataList:'gridViewData',style:'position: relative;width:433px;height:164px;',useShiftKey:'false',scrollByColumn:'false',fixedColumnWithHidden:'true','ev:onafteredit':'scwin.gridView1_onafteredit'},E:[{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{id:'column8',blockSelect:'false',style:'height:20px;',width:'126',inputType:'text',value:'대분류(Category)'}},{T:1,N:'w2:column',A:{id:'column6',blockSelect:'false',style:'height:20px;',width:'137',inputType:'text',value:'중분류(sub-Category)'}},{T:1,N:'w2:column',A:{id:'column4',blockSelect:'false',style:'height:20px;',inputType:'text',width:'164',value:'소분류(sub-sub category)'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{id:'col1',blockSelect:'false',style:'height:20px',chooseOption:'',width:'126',inputType:'select',allOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:categoryData'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'value'}}]}]}]},{T:1,N:'w2:column',A:{id:'col2',blockSelect:'false',style:'height:20px',chooseOption:'',width:'137',inputType:'select',allOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:linkedSubCategoryData'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'value'}}]}]}]},{T:1,N:'w2:column',A:{id:'col3',blockSelect:'false',style:'height:20px',chooseOption:'',inputType:'select',width:'164',allOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:linkedSubSubCategoryData'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'value'}}]}]}]}]}]}]}]}]}]}]})