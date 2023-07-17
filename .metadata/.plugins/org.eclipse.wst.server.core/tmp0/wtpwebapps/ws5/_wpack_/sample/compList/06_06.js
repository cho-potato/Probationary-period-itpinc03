/*amd /sample/compList/06_06.xml 9339 097e2efc0459dc0134cd8673da4f43126d67eef7123900149e352e2ef0118aed */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

        
	scwin.onpageload = function() {
		scwin.trigger1_onclick();
	};
	
	// data 조회
	scwin.trigger1_onclick = function(e) {
		var arr = [];
		
		for(var i=0;i<4;i++) {
			if(i==0) {
				arr.push("A");
			} else if(i==1) {
				arr.push("B");
			} else if(i==2) {
				arr.push("C");
			} else if(i==3) {
				arr.push("D");
			}
			
			for(var j=0;j<4;j++) {
				  arr.push( Math.floor(Math.random() * 1000) );
			}
		}
		
		dataList1.setData(arr);
		console.log("data 조회 완료....");
	};

	// data 초기화
	scwin.trigger2_onclick = function(e) {
		dataList1.removeAll();
		console.log("data 초기화 완료...");
	};

	// line chart
	scwin.trigger3_onclick = function(e) {
		var options = {};
  		options.fileName = "line.xlsx";
		options.type  = "1";
		options.showProcess = false;
		options.chart = {
			"chartName": "line",
			"chartType": "",
			"title": "차트 타이틀",
			"yTitle": "Y 타이틀",
			"xTitle": "X 타이틀",
			"startRowIndex": 0,
			"startColIndex": 5,
			"endRowIndex": 20,
			"endColIndex": 15,
			"serAxis": "true",
			"catAxis": "true",
			"catAxisRange": {
				"startColIndex": 1,  
				"startRowIndex": 0,
				"endColIndex": 4,
				"endRowInex": 0
			},
			"serAxisRange": {
				"startColIndex": 0,
				"startRowIndex": 1,
				"endColIndex": 0,
				"endRowIndex": 4
			},
			"dataAxisRange": {
				"startColIndex": 1,
				"startRowIndex": 1,
				"endColIndex": 4,
				"endRowIndex": 4
			},
			"catGridLines": "true",    // 가로
			"serGridLines": "true",    // 세로
			"legend": "true",          // 범례
			"legendPosition": "bottom" // 범례위치
		};

		var infoArr = [];
  		gridView1.advancedExcelDownload(options , infoArr);
	};
	
	// bar chart
	scwin.trigger4_onclick = function(e) {
		var options = {};
  		options.fileName = "bar.xlsx";
		options.type  = "1";
		options.showProcess = false;
		options.chart = {
			"chartName": "bar",
			"chartType": "",
			"title": "차트 타이블",
			"yTitle": "Y 타이틀",
			"xTitle": "X 타이틀",
			"startRowIndex": 0,
			"startColIndex": 5,
			"endRowIndex": 20,
			"endColIndex": 15,
			"serAxis": "true",
			"catAxis": "true",
			"catAxisRange": {
				"startColIndex": 1,  
				"startRowIndex": 0,
				"endColIndex": 4,
				"endRowIndex": 0
			},
			"serAxisRange": {
				"startColIndex": 0,
				"startRowIndex": 1,
				"endColIndex": 0,
				"endRowIndex": 4
			},
			"dataAxisRange": {
				"startColIndex": 1,
				"startRowIndex": 1,
				"endColIndex": 4,
				"endRowIndex": 1
			},
			"catGridLines": "true",     // 가로
			"serGridLines": "true",     // 세로
			"legend": "true",           // 범례
			"legendPosition": "bottom", //범례위치
		};

		var infoArr = [];
  		gridView1.advancedExcelDownload(options , infoArr);
	};

	// area chart
	scwin.trigger5_onclick = function(e) {
		var options = {};
  		options.fileName = "area.xlsx";
		options.type  = "1";
		options.showProcess = false;
		options.chart = {
			"chartName": "area",
			"chartType": "",
			"title": "차트 타이틀",
			"yTitle": "Y 타이틀",
			"xTitle": "X 타이틀",
			"startRowIndex": 0,
			"startColIndex": 5,
			"endRowIndex": 20,
			"endColIndex": 15,
			"serAxis": "true",
			"catAxis": "true",
			"catAxisRange": {
				"startColIndex": 1,  
				"startRowIndex": 0,
				"endColIndex": 4,
				// "endRowIndex": 0 필요없을듯
			},
			"serAxisRange": {
				"startColIndex": 0,
				"startRowIndex": 1,
				// "endColIndex": 0, 필요없을듯
				"endRowIndex": 4
			},
			"dataAxisRange": {
				"startColIndex": 1,
				"startRowIndex": 1,
				"endColIndex": 4,
				"endRowIndex": 4
			},
			"catGridLines": "true",    // 가로
			"serGridLines": "true",    // 세로
			"legend": "true",          // 범례
			"legendPosition": "bottom" // 범례위치
		};

		var infoArr = [];
  		gridView1.advancedExcelDownload(options , infoArr);
	};
	
	// pie chart
	scwin.trigger6_onclick = function(e) {
		var options = {};
  		options.fileName = "pie.xlsx";
		options.type  = "1";
		options.showProcess = false;
		options.chart = {
			"chartName": "pie",
			"chartType": "",
			"title": "차트 타이틀",
			"yTitle": "y 타이틀",
			"xTitle": "x 타이틀",
			"startRowIndex": 0,
			"startColIndex": 5,
			"endRowIndex": 20,
			"endColIndex": 15,
			"serAxis": "true",
			"catAxis": "true",
			"catAxisRange": {
				"startColIndex": 1,  
				"startRowIndex": 0,
				"endColIndex": 4,
			},
			"serAxisRange": {
				"startColIndex": 0,
				"startRowIndex": 1,
				"endColIndex": 0,
				"endRowIndex": 1
			},
			"dataAxisRange": {
				"startColIndex": 1,
				"startRowIndex": 1,
				"endColIndex": 4,
				"endRowIndex": 1
			},
			"catGridLines": "true",    // 가로
			"serGridLines": "true",    // 세로
			"legend": "true",          // 범례
			"legendPosition": "bottom" // 범례위치
		};

		var infoArr = [];
  		gridView1.advancedExcelDownload(options , infoArr);
	};

	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc',id:'',style:'padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'GridView의 ExcelDownload 기능 중 chart 를 포함한 download 기능을 구현한 화면이다.<br/>* 본 샘플은 이미지를 엑셀로 내려주는 기능이라 속도가 느리며, 대용량 건수에는 적합하지 않다.<br/>( source : 06_06.xml )',style:''}}]},{T:1,N:'xf:group',A:{style:'margin-bottom: 10px',id:'',class:'btnbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger3_onclick',style:'width:150px;height:30px;margin-right:10px;',id:'trigger3',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Line chart Download'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger4_onclick',style:'width:150px;height:30px;margin-right:10px;',id:'trigger4',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Bar chart Download'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger5_onclick',style:'width:160px;height:30px;margin-right:10px;',id:'trigger5',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Area chart Download'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger6_onclick',style:'width:150px;height:30px;margin-right:10px;',id:'trigger6',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Pie chart Download'}]}]}]},{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',syncScroll:'false',summaryAuto:'false',useShiftKey:'true',scrollByColumn:'false',summaryOnlyAuto:'false',defaultCellHeight:'20',applyAllColumnStyle:'false',dataList:'data:dataList1',style:'height:300px;',ignoreCellClick:'false',id:'gridView1',ignoreToggleOnDisabled:'false',autoFit:'allColumn',autoFitMinWidth:'800'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column9',value:'-',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column7',value:'Field1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column5',value:'Field2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column3',value:'Field3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column1',value:'Field4',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{dataType:'number',width:'70',style:'',inputType:'text',id:'col1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'number',width:'70',style:'',inputType:'text',id:'col2',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'number',width:'70',style:'',inputType:'text',id:'col3',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'number',width:'70',style:'',inputType:'text',id:'col4',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'number',width:'70',style:'',inputType:'text',id:'col5',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]}]})