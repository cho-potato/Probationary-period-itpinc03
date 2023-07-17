/*amd /gridView-012/gridView_setCellInput_sample3.xml 5337 d7f962a39c607073ce9fdcc42b9863553e0a3b062e802267132a7d939bbb48e4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:ondataload':'scwin.dataList1_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_select',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'sel_sample',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
			scwin.init();
		};
		
		scwin.onpageunload = function() {
			
		};
		
		scwin.init = function(){
			var jsonData = [
				{"label":"input","code":"input"},
				{"label":"calendar","code":"calendar"},
				{"label":"checkbox","code":"checkbox"},
				{"label":"select","code":"select"},
				{"label":"radio","code":"radio"}
			];
			dlt_select.setJSON(jsonData);
			
			var sel_sampleData = [
				{"col1":"축구", "col2":"1"},
				{"col1":"농구", "col2":"2"},
				{"col1":"야구", "col2":"3"},
				{"col1":"배구", "col2":"4"}
			];
			
			sel_sample.setJSON(sel_sampleData);
			
			var arr = [
				{"col1":"input","col2":"","col3":""},
				{"col1":"calendar","col2":"","col3":""},
				{"col1":"checkbox","col2":"","col3":""},
				{"col1":"select","col2":"","col3":""}
			];
			dataList1.setJSON(arr);
		};
		
		//inputType 에 따라 미리 property 를 정의한다
		scwin.inputTypeCustomObj = {
			calendar : {inputType : "calendar", options : {viewType : "icon"}},
			radio: {inputType : "radio"},
			checkbox : {inputType :"checkbox"},
			input : {inputType : "text"},
			select : {inputType : "select",
				options : {viewType :"icon"},
				itemSet : {
					nodeset:"data:sel_sample",
					label : "col1",
					value : "col2"
				}
			}
		};
		
		//값 변경 시 col2의 inputType을 동적으로 변경한다.
		scwin.grd_onviewchange = function(info) {
			var inputType = info.newValue;
			var obj = scwin.inputTypeCustomObj[inputType];
			
			grd.setCellInputType( info.rowIndex , "col2" , obj );
		};
		
		//최초 데이터 setJSON 시 inputType 설정이 필요할때 ondataload 에서 설정
		scwin.dataList1_ondataload = function() {
			for (var i=0;i<dataList1.getTotalRow();i++) {
				var inputype = dataList1.getCellData(i,"col1");
				var typeJSON = {"rowIndex":i,"newValue":inputype};
				scwin.grd_onviewchange(typeJSON);
			}
		};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{label:'gridView.setCellInputType();',id:'',style:'width: 500px;height: 30px;font-size:200%;padding:5px;'}},{T:1,N:'w2:gridView',A:{dataList:'data:dataList1',summaryAuto:'false',applyAllColumnStyle:'false',scrollByColumn:'false',defaultCellHeight:'20',setCellInputTypeCustom:'true',scrollByColumnAdaptive:'false',id:'grd',style:'width: 500px;height: 150px;',ignoreCellClick:'false',syncScroll:'false',ignoreToggleOnDisabled:'false',summaryOnlyAuto:'false',useShiftKey:'true','ev:onviewchange':'scwin.grd_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',style:'',inputType:'text',width:'100',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'',inputType:'text',width:'100',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',style:'',width:'100',inputType:'text',value:'name3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',style:'',inputType:'select',width:'100',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',viewType:'icon'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_select'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',style:'',inputType:'custom',width:'100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col3',style:'',width:'100',inputType:'custom',value:'',displayMode:'label'}}]}]}]}]}]}]})