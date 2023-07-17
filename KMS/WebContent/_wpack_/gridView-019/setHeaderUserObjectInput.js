/*amd /gridView-019/setHeaderUserObjectInput.xml 3450 835551fdcf4b23aee6de420480cf92bc812981077da66cf11aab8e7e09585a1b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
	        dataList1.setData( [1,2,3,4] );
			scwin.setInputBoxInGridHeader(gridView1, "column3", "inputHeader2", "text", "", 13, "", "center");			
		};
		
		scwin.onpageunload = function() {
			
		};
		
        scwin.setInputBoxInGridHeader = function(gridObj, headerColumnId, inputBoxId, dataType, allowChar, maxLength, displayFormat, textAlign) {debugger;
				var inputBoxObj = {
					input : $p.dynamicCreate(inputBoxId, "input", { 
						style : "width:100%; height:100%;text-align:" + textAlign,
						dataType: dataType,
						focusCalcSize : false,
						allowChar : allowChar, 
						displayFormat : displayFormat
					}, gridView1),
					getContent : function() {
						return this.input.render;
					},
					setValue : function( value ) {
						this.input.setValue(value);
					},
					setMaxLength : function (maxLength) {debugger;
						this.input.setMaxLength(maxLength);
					},
					getValue : function() {
						return this.input.getValue();
					},
					valueChange : function(e) {
					}
				}
				inputBoxObj.input.setMaxLength(maxLength);
				inputBoxObj.input.bind("onfocus", function() { gridView1.removeFocusedCell(); });
				gridObj.setHeaderUserObject(headerColumnId, inputBoxObj);
        	};
        
        
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{dataList:'dataList1',summaryAuto:'false',useFilterList:'false',scrollByColumn:'false',showSortableUseFilter:'false',scrollByColumnAdaptive:'false',id:'gridView1',style:'position: relative;width: 500px;height: 150px;',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',summaryOnlyAuto:'false',fixedColumnWithHidden:'true',useShiftKey:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px',inputType:'text',width:'70',displayMode:'label',value:'name1'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',style:'height:20px',width:'70',inputType:'text',displayMode:'label',value:'name2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',style:'height:20px',width:'70',inputType:'text',displayMode:'label'}}]}]}]}]}]}]})