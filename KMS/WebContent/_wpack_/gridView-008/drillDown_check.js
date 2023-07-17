/*amd /gridView-008/drillDown_check.xml 18816 25592c33f1c06209facfbfe6cd4a77b21ea2cc1cbed3465a95b0491479791a01 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/websquare5/common/css/content.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{id:'dataList_menu',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CHK',name:'선택',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'MENU_ID',name:'메뉴ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_NM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'HIGHER_MENU_ID',name:'상위메뉴ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'LEVEL_CNT',name:'레벨수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SRC_PATH',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temp',name:'임시',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,"dataList_menu"',action:'getMainTreeMenuData.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'',singleMode:'true'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
			//$p.executeSubmission('submission1');
			
			var jsonArr = [{
				"MENU_ID":"Education",
				"MENU_NM":"Education",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":2,"SRC_PATH":"",
				"temp":"Education,Basic"
			},
			{
				"MENU_ID":"Education001",
				"MENU_NM":"Basic",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/edu/basic.xml",
				"temp":"Education,WebSquare5 Basic"
			},
			{
				"MENU_ID":"DataCollection",
				"MENU_NM":"DataCollection",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":2,"SRC_PATH":"",
				"temp":"DataCollection,DataMap Binding,DataList Binding,LinkedDataList Binding"
			},
			{
				"MENU_ID":"DataCollection001",
				"MENU_NM":"DataMap Binding",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/DataCollection/DataMapBinding.xml",
				"temp":"DataMap Binding,DataList Binding,LinkedDataList Binding"
			},
			{
				"MENU_ID":"DataCollection002",
				"MENU_NM":"DataList Binding",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/DataCollection/DataListBinding.xml",
				"temp":"DataMap Binding,DataList Binding,LinkedDataList Binding"
			},
			{
				"MENU_ID":"DataCollection003",
				"MENU_NM":"LinkedDataList Binding",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/DataCollection/LinkedDataListBinding.xml",
				"temp":"DataMap Binding,DataList Binding,LinkedDataList Binding"
			},
			{
				"MENU_ID":"DataCollection004",
				"MENU_NM":"Master Detail Binding",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/DataCollection/masterDetail.xml",
				"temp":"DataMap Binding,DataList Binding,LinkedDataList Binding"
			},
			{
				"MENU_ID":"TBL",
				"MENU_NM":"TableLayout",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":2,"SRC_PATH":"",
				"temp":"TableLayout,Login Layout,Search Layout,Result Layout"
			},
			{
				"MENU_ID":"TBL001",
				"MENU_NM":"Table Layout",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/tableLayout/tableLayout.xml",
				"temp":"TableLayout,Table  Layout"
			},
			{
				"MENU_ID":"TBL002",
				"MENU_NM":"Adaptive Layout",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/tableLayout/adativeTable.xml",
				"temp":"TableLayout,Adaptive Layout"
			},
			{
				"MENU_ID":"GRDV",
				"MENU_NM":"GridView",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":2,"SRC_PATH":"",
				"temp":"GridView,Basic GridView,Master-detail GridView"
			},
			{
				"MENU_ID":"GRDV001",
				"MENU_NM":"Basic GridView",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/basic.xml",
				"temp":"GridView,Basic GridView"
			},
			{
				"MENU_ID":"GRDV003",
				"MENU_NM":"DrillDown",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/drillDown.xml",
				"temp":"GridView,DrillDown"
			},
			{
				"MENU_ID":"GRDV004",
				"MENU_NM":"Column Merge",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/colMerge.xml",
				"temp":"GridView,Column Merge"
			},
			{
				"MENU_ID":"GRDV005",
				"MENU_NM":"AutoFit",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/autoFit.xml",
				"temp":"GridView,AutoFit"
			},
			{
				"MENU_ID":"GRDV006",
				"MENU_NM":"Header Filter & Sort",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/headFilter.xml",
				"temp":"GridView,Column Merge"
			},
			{
				"MENU_ID":"GRDV007",
				"MENU_NM":"Adaptive Grid",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/adaptiveGrid.xml",
				"temp":"GridView,Adaptive Grid"
			},
			{
				"MENU_ID":"GRDV008",
				"MENU_NM":"ExcelDownload",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/excelDownload.xml",
				"temp":"GridView,ExcelDownload GridView"
			},
			{
				"MENU_ID":"GRDV009",
				"MENU_NM":"ExcelUpload",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/excelUpload.xml",
				"temp":"GridView,ExcelUpload GridView"
			},
			{
				"MENU_ID":"GRDV0010",
				"MENU_NM":"Quantum Grid",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/quantumGrid.xml",
				"temp":"GridView,Quantum Grid"
			},
			{
				"MENU_ID":"GRDV011",
				"MENU_NM":"Context Menu",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/contextMenu.xml",
				"temp":"GridView, Context Menu"
			},
			{
				"MENU_ID":"GRDV012",
				"MENU_NM":"SubTotal",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/subtotal.xml",
				"temp":"GridView, SubTotal"
			},
			{
				"MENU_ID":"GRDV013",
				"MENU_NM":"Expression",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/expression.xml",
				"temp":"GridView, Expression"
			},
			{
				"MENU_ID":"GRDV014",
				"MENU_NM":"Format",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/formatter.xml",
				"temp":"GridView, Format"
			},
			{
				"MENU_ID":"GRDV015",
				"MENU_NM":"대량데이터(setData형식)",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/dsme.xml",
				"temp":"GridView, 대량데이터(setData형식)"
			},
			{
				"MENU_ID":"GRDV016",
				"MENU_NM":"PageList",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/gridView/pageList.xml",
				"temp":"GridView, PageList"
			},
			{
				"MENU_ID":"FORM",
				"MENU_NM":"FormControl",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":2,"SRC_PATH":"",
				"temp":"FormControl,gridItemSet"
			},
			{
				"MENU_ID":"FORM001",
				"MENU_NM":"GridItemSet",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/formControl/gridItemSet.xml",
				"temp":"FormControl,gridItemSet"
			},
			{
				"MENU_ID":"FORM002",
				"MENU_NM":"InputBox Property",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/formControl/inputBoxProperty.xml",
				"temp":"FormControl,inputBoxProperty"
			},
			{
				"MENU_ID":"FORM003",
				"MENU_NM":"InputBox DisplayFormat",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/formControl/displayFormat.xml",
				"temp":"FormControl,displayFormat"
			},
			{
				"MENU_ID":"CONT",
				"MENU_NM":"Container",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":2,"SRC_PATH":"",
				"temp":"Container,SPA TabControl"
			},
			{
				"MENU_ID":"CONT001",
				"MENU_NM":"SPA TabControl",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/container/spaTab.xml",
				"temp":"Container,SPA TabControl"
			},
			{
				"MENU_ID":"CONT002",
				"MENU_NM":"SPA MDI",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/container/spaWindow.xml",
				"temp":"Container,SPA MDI"
			},
			{
				"MENU_ID":"CONT003",
				"MENU_NM":"Adaptive Tabcontrol",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/container/adaptiveTabcontrol.xml",
				"temp":"Container,Adaptive Tabcontrol"
			},
			{
				"MENU_ID":"CHART",
				"MENU_NM":"Chart",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":2,"SRC_PATH":"",
				"temp":"Chart,FusionChart"
			},
			{
				"MENU_ID":"CHART001",
				"MENU_NM":"FusionChart",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/chart/fusionChartBinding.xml",
				"temp":"Chart,FusionChart"
			},
			{
				"MENU_ID":"CHART002",
				"MENU_NM":"Column & Bar",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/chart/basicFusionChart.xml",
				"temp":"Chart,Column & Bar"
			},
			{
				"MENU_ID":"CHART003",
				"MENU_NM":"Doughnut & Pie",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/chart/pie_DoughtnutChart.xml",
				"temp":"Chart,Doughnut & Pie"
			},
			{
				"MENU_ID":"CHART004",
				"MENU_NM":"Line & Area",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/chart/line_AreaChart.xml",
				"temp":"Chart,Line & Area"
			},
			{
				"MENU_ID":"CHART005",
				"MENU_NM":"Stack & Bubble",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/chart/stack_BubbleChart.xml",
				"temp":"Chart,Stack & Bubble"
			},
			{
				"MENU_ID":"CHART006",
				"MENU_NM":"Pareto & MsCombi",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/chart/pareto_MsCombi.xml",
				"temp":"Chart,Pareto & MsCombi"
			},
			{
				"MENU_ID":"SUBMISSION",
				"MENU_NM":"Submission",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":2,"SRC_PATH":"",
				"temp":"SUBMISSION, XML"
			},
			{
				"MENU_ID":"SUBMISSION001",
				"MENU_NM":"Same Id/Key (JSON)",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/submission/jsonSameId.xml",
				"temp":"SUBMISSION, Same Id/Key (JSON)"
			},
			{
				"MENU_ID":"SUBMISSION002",
				"MENU_NM":"Different Id/Key (JSON)",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/submission/jsonDiffId.xml",
				"temp":"SUBMISSION, Different Id/Key (JSON)"
			},
			{
				"MENU_ID":"SUBMISSION003",
				"MENU_NM":"Same Id/Key (XML)",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/submission/xmlSameId.xml",
				"temp":"SUBMISSION, Same Id/Key (XML)"
			},
			{
				"MENU_ID":"SUBMISSION004",
				"MENU_NM":"Different Id/Key (XML)",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/submission/xmlDiffId.xml",
				"temp":"SUBMISSION, Different Id/Key (XML)"
			},
			{
				"MENU_ID":"GENERATOR",
				"MENU_NM":"Generator",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":2,"SRC_PATH":"",
				"temp":"GENERATOR,Basic Generator"
			},
			{
				"MENU_ID":"GENERATOR001",
				"MENU_NM":"Basic Generator",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/generator/basic.xml",
				"temp":"GENERATOR,Basic Generator"
			},
			{
				"MENU_ID":"TREEVIEW",
				"MENU_NM":"TreeView",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":2,"SRC_PATH":"",
				"temp":"TREEVIEW,Basic TreeView"
			},
			{
				"MENU_ID":"TREEVIEW001",
				"MENU_NM":"Basic TreeView",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/treeview/basic.xml",
				"temp":"TREEVIEW,Basic TreeView"
			},
			{
				"MENU_ID":"TREEVIEW002",
				"MENU_NM":"API",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/treeview/api.xml",
				"temp":"TREEVIEW,API"
			},
			{
				"MENU_ID":"TREEVIEW003",
				"MENU_NM":"Drag & Drop",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/treeview/dragdrop.xml",
				"temp":"TREEVIEW,Drag & Drop"
			},
			{
				"MENU_ID":"EDITOR",
				"MENU_NM":"Editor",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":2,"SRC_PATH":"",
				"temp":"EDITOR,Basic EditorView"
			},
			{
				"MENU_ID":"EDITOR001",
				"MENU_NM":"내장에디터(CKEditor)",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/editor/ckEditor.xml",
				"temp":"EDITOR,내장에디터(CKEditor)"
			},
			{
				"MENU_ID":"EDITOR002",
				"MENU_NM":"외장에디터(NaverEditor)",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/editor/naverEditor.xml",
				"temp":"EDITOR,외장에디터(NaverEditor)"
			},
			{
				"MENU_ID":"POPUP",
				"MENU_NM":"Popup",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":2,"SRC_PATH":"",
				"temp":"POPUP,openPopup"
			},
			{
				"MENU_ID":"POPUP001",
				"MENU_NM":"popup 호출",
				"HIGHER_MENU_ID":"W5C",
				"LEVEL_CNT":3,"SRC_PATH":"/websquare5/components/popup/popup.xml",
				"temp":"POPUP,popup 호출"
			}
			];		
			dataList_menu.setJSON(jsonArr);	
		};
		
		scwin.onpageunload = function() {
			
		};


		
					
		scwin.test = function(data, displaydata, rowIdx, colIdx){
        		//console.log("fn_customFormatter");
        		if(rowIdx == "3"){
        			gridView1.setCellColor( rowIdx , colIdx , "red" );
        			return data;
        		}else{
        			return data;
        		}
        	};	
		
		



			
         
		scwin.trigger1_onclick = function(e) {
			var parent_idx = gridView1.getFocusedRealRowIndex();
			var parent_level = dataList_menu.getCellData(parent_idx, "LEVEL_CNT");
			var child_cnt = 0;
			for(var idx = parent_idx; dataList_menu.getCellData(idx+1, "LEVEL_CNT") > parent_level; idx++){
				child_cnt++;
			}
			dataList_menu.insertJSON(parent_idx + child_cnt + 1, [{
																	"MENU_ID":"test",
																	"MENU_NM":"#####",
																	"HIGHER_MENU_ID":"W5C",
																	"LEVEL_CNT":parent_level,
																	"SRC_PATH":"~~~~",
																	"temp":"~~~~"
																}]);
		};
	
	
	scwin.gridView1_onviewchange = function(info) {
		if(info.colIndex != 0){
			return;
		}
		var row = dataList_menu.getRealRowIndex(info.rowIndex);
		var cur_val = info.newValue;
		console.log(cur_val);
		var cur_depth = dataList_menu.getCellData(row, "LEVEL_CNT");
		//var row_cnt = dataList_menu.getRowCount();		//WPF-1631
		//var row_cnt = dataList_menu.getAllJSON().length;
		var row_cnt = dataList_menu.getTotalRow();
		for(var ix=1; Number(dataList_menu.getCellData(row+ix, "LEVEL_CNT")) > cur_depth; ix++){
			dataList_menu.setCellData(row+ix, 0, cur_val);
			if(row+ix > row_cnt-1){
				break;
			}
		}		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'group3',style:'display:table;width:100%;height:100%;'},E:[{T:1,N:'xf:group',A:{id:'group2',style:'vertical-align:middle;text-align:center;display:table-cell;'},E:[{T:1,N:'xf:group',A:{id:'group1',style:'display:inline-block;padding:30px;'},E:[{T:1,N:'xf:trigger',A:{id:'trigger1',style:'position: relative ;width: 80px;height: 23px;',type:'button','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'w2:textbox',A:{class:'titlebox',id:'textbox1',label:'DrillDown ',style:''}},{T:1,N:'w2:gridView',A:{id:'gridView1',dataList:'dataList_menu',rowNumHeaderValue:'',style:'width:600px;height:300px;margin-left:0px;',drilldownRealRowIndex:'true',useShiftKey:'false',scrollByColumn:'false',rowStatusVisible:'',rowStatusHeaderValue:'',rowNumVisible:'true',fixedColumnWithHidden:'',rowStatusWidth:'',visibleRowNum:'all',fixedColumn:'',autoFit:'allColumn',dragDisplayColumn:'','ev:onafteredit':'scwin.gridView1_onafteredit','ev:onviewchange':'scwin.gridView1_onviewchange'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column12',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',style:'height:20px;',inputType:'text',width:'187',value:'Menu.'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column11',style:'height:20px;',inputType:'text',width:'110',value:'메뉴ID'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'height:20px;',inputType:'text',width:'111',value:'상위메뉴ID'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',style:'height:20px;',inputType:'text',width:'45',value:'Depth',viewType:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px;',inputType:'text',width:'350',value:'FilePath.'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',style:'height:20px;',width:'70',inputType:'text',value:'temp'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'CHK',style:'height:20px',inputType:'checkbox',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'MENU_NM',style:'height:20px',inputType:'drilldown',drilldownRealRowIndex:'true',width:'187',depthColumn:'LEVEL_CNT',depthType:'div',showDepth:'2',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'MENU_ID',style:'height:20px',inputType:'text',width:'110',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'HIGHER_MENU_ID',style:'height:20px',inputType:'text',width:'111',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'LEVEL_CNT',style:'height:20px',inputType:'text',width:'59',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'SRC_PATH',style:'height:20px',inputType:'text',width:'351',textAlign:'left',customFormatter:'scwin.test'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'temp',style:'height:20px',width:'70',inputType:'text',hidden:'true'}}]}]}]}]}]}]}]}]}]})