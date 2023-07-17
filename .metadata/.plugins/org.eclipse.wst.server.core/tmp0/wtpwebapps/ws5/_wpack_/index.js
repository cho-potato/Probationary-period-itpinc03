/*amd /index.xml 15058 d92e5f7efa87bbac7ae31d20942788c7f2a38f7747badb618296d2a202e8ab7b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_sample',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'disp',name:'타이틀',dataType:'text'}},{T:1,N:'w2:column',A:{id:'url',name:'이동 경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'desc',name:'설명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_site',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'disp',name:'타이틀'}},{T:1,N:'w2:column',A:{dataType:'text',id:'url',name:'이동 경로'}},{T:1,N:'w2:column',A:{dataType:'text',id:'desc',name:'설명'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_site_webDev',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'disp',name:'타이틀'}},{T:1,N:'w2:column',A:{dataType:'text',id:'url',name:'이동 경로'}},{T:1,N:'w2:column',A:{dataType:'text',id:'desc',name:'설명'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_widgetID'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'id',name:'위젯 id',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_init',ref:'',target:'data:json,["dlt_sample","dlt_site","dlt_site_webDev"]',action:'/sample/dashboard/data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_init_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	scwin.onpageload = function() {
		$p.executeSubmission( "sbm_init" );
		ui_chkWgList.setItemDisabled( 0 , true );
		ui_chkWgList.setValue("C01,C02,C03,C04");
	};
	
	scwin.sbm_init_submitdone = function(e) {
		if(scwin.info_widgets.getLocalWidgetInfo()){
			scwin.fn_widgetHandler("import");
		}else{
			scwin.fn_widgetHandler("init");
		}
	};
	
	scwin.fn_getDataObject = function(dataObjectId){
		var dataObj = window[dataObjectId];
		
		if(dataObj && dataObj.getAllJSON){
			return dataObj.getAllJSON();
		}else{
			$p.log("at scwin.fn_getData : [" + dataObjectId + "]는 데이터 객체가 아닙니다.");
			return null;
		}
	};
	
	
	scwin.info_widgets = {
		"C01": {
				title : "교육 샘플 목록",
				src : "/sample/dashboard/wf_P0001.xml",
				//params : "dlt_sample",
                params : "",
				x : 0,
				y : 0,
				unitWidth : 3,
				unitHeight : 6,
				className : "widget_coral"
		},
		"C02": {
				title : "웹스퀘어 개발 참고 사이트 목록",
				src : "/sample/dashboard/wf_P0001.xml",
				//params : "dlt_site",
                params : "",
				x : 0,
				y : 6,
				unitHeight : 6,
				className : "widget_seagreen"
		},
		"C03": {
				title : "웹 개발 참고 사이트 목록",
				src : "/sample/dashboard/wf_P0001.xml",
				//params : "dlt_site_webDev",
                params : "",
				x : 3,
				y : 7,
				unitWidth : 3,
				className : "widget_green"
				
		},
		"C04": {
				title : "교육용 프로젝트 개발 환경",
				src : "/sample/dashboard/wf_P0002.xml",
				params : "",
				x : 3,
				y : 0,
				unitWidth : 3,
				unitHeight : 6,
				hasTitleBar : false,
				fixed : true,
				className : "widget_notitle"
		},
		"getInitWidgetId" : function(){
			return "C01,C02,C03,C04";
		},
		"getOptions" : function(wInfoObj, wcId){
			var paramStr = "";
			wInfoObj = wInfoObj || {};
			if(wInfoObj.params){
				paramStr = "?wcParam="+$p.URLEncoder( wInfoObj.params );
			}
			
			return {
				id : wInfoObj.id || wcId || null,
				src : wInfoObj.src+paramStr,
				title : wInfoObj.title || "",
				x : wInfoObj.x || 0,
				y : wInfoObj.y || 0,
				scope : true,
				unitWidth : wInfoObj.unitWidth || 3,
	    		unitHeight : wInfoObj.unitHeight || 6,
	    		params : wInfoObj.params,
	    		hasTitleBar : wInfoObj.hasTitleBar === false ? false : true,
	    		fixed : wInfoObj.fixed === true ? true : false,
	    		className : wInfoObj.className || ""
			};
		},
		"getLocalWidgetInfo" : function(){
			return $p.local.getItem( "ws5_edu_wgcInfo" );
		},
		"removeLocalWidgetInfo" : function(){
			$p.local.removeItem( "ws5_edu_wgcInfo" );
		},
		"setLocalWidgetInfo" : function(){
			$p.local.setItem("ws5_edu_wgcInfo",JSON.stringify(ui_wgc_main.exportWidgets()));
		}
	};
	
	
	scwin.fn_widgetHandler = function(controlType, widgetId, setCheckbox){
		if(!controlType){ 
			com.log("at scwin.fn_widgetHandler : 파라메터를 확인하세요!\n" + arguments,"E");
			return;
		}
		
		if(controlType === "init" || controlType === "import"){
			widgetId = "";
		}else if(!widgetId){
			com.log("at scwin.fn_widgetHandler : 파라메터를 확인하세요!\n" + arguments,"E");
			return;
		}
		
		var wgIdArr = widgetId.trim().split(","), 
			wgIdArrLen = wgIdArr.length,
			wgId,
			i,  
			optArr=[], 
			wInfoObj, 
			infoObj = scwin.info_widgets, 
			wg;
		
		switch(controlType){
			
			case "init" :
				widgetId = scwin.info_widgets.getInitWidgetId();
				wgIdArr = widgetId.split(","); 
				wgIdArrLen = wgIdArr.length;
				//init인 경우 초기셋팅id로 바꿔주고 break없이 add 실행.
			case "add" :
				for(i=0;i<wgIdArrLen;i++){
					wgId = wgIdArr[i];
					wInfoObj = infoObj.getOptions(infoObj[wgId], wgId);
					
					if(ui_wgc_main.getWidgetById( wgId )){
						ui_wgc_main.moveWidget( wgId , wInfoObj.x , wInfoObj.y );	
					}else{
						optArr.push(wInfoObj);
					}
				}
				
				ui_wgc_main.addWidgets(optArr);
			break;
			
			case "import" :
				 wInfoObj = infoObj.getLocalWidgetInfo();
				 if(wInfoObj){
				 	ui_wgc_main.importWidgets( JSON.parse(wInfoObj) , true );
				 }else if(confirm("저장된 위젯 정보가 없습니다. 기본값으로 로딩하시겠습니까?")){
				 	scwin.fn_widgetHandler("init");
				 }
			break;
			
			case "remove" :
				ui_wgc_main.removeWidgets(wgIdArr);
			break;
			
			case "onload" :
				for(i=0;i<wgIdArrLen;i++){
					wgId = wgIdArr[i];
					wg = ui_wgc_main.getWidgetById( wgId );
					
					var _wqDataObj = $p.getComponentById(wg.params);
					
					if(wgId === "C01" || wgId === "C02" || wgId === "C03"){
						//wg.getObj("scwin").fn_init( _wqDataObj.getAllJSON() );
						//wg.getWindow().scwin.fn_init( _wqDataObj.getAllJSON() );
					}else if(wgId === "C04"){
						//wg.getObj("scwin").fn_init(false);
						//wg.getWindow().scwin.fn_init(false);
					}
				}
			break;
			
			default:
			break;
		}
	};
	
	scwin.ui_chkWgList_onviewchange = function(info) {
		//index: "0", checked: false, value: "C01"
		if(info.checked === true){ 
			scwin.fn_widgetHandler("add", info.value);
		}else{
			scwin.fn_widgetHandler("remove", info.value);
		}
	};
	
	scwin.fn_chkWigetHandler = function(status, val){
		var chkValDel = ",",
			chkVal = ui_chkWgList.getValue( chkValDel ) || "";
			
		if(status === "add" && val){
				chkVal = chkVal + "," + val 
		}else if(status === "remove" && val){
			chkVal = chkValDel + chkVal + chkValDel;
			chkVal = chkVal.replace(chkValDel + val + chkValDel,",");
		}else{
			com.log("필수값이 누락되었습니다. at : scwin.fn_chkWigetHandler", "E");
			return;
		}
		
		ui_chkWgList.setValue( chkVal );
	};
	
	scwin.fn_tootleTitleClick = function(){
		this.toggleClass("hide_content");
	};
	
	scwin.ui_btnExportWidget_onclick = function(e) {
		scwin.info_widgets.setLocalInfo();
		alert("위젯 정보가 저장이 완료되었습니다");
	};
	
	scwin.ui_btnImportWidget_onclick = function(e) {
		scwin.fn_widgetHandler("import");
	};
	
	
	scwin.ui_btnResetWidgetInfo_onclick = function(e) {
		scwin.fn_widgetHandler("init");
		
		if(scwin.info_widgets.getLocalWidgetInfo() && confirm("저장된 위젯 정보가 있습니다. 삭제하시겠습니까?")){
			scwin.info_widgets.removeLocalWidgetInfo();
		}
	};
	
	scwin.ui_btnRemoveWidgetInfo_onclick = function(e) {
		scwin.info_widgets.removeLocalWidgetInfo();
		alert("위젯 정보가 삭제되었습니다.");
	};
	
	
	scwin.ui_wgc_main_onwidgetload = function(runtimeId, wgId) {
		//scwin.fn_widgetHandler("onload", wgId);
		//scwin.fn_chkWigetHandler("add",wgId);
	};
	
	scwin.ui_wgc_main_onbeforewidgetclose = function(id) {
		//widget의 addWidgets 시 넣어 준 id를 반환 받기 위한 작업.
		//2017.12.20 개발자가 설정한 id를 바로 반환 받을 수 있는 api가 없어 info값을 참조.
		var wgId = this.getWidgetById( id ).getWidgetInfo().id;
		scwin.fn_chkWigetHandler("remove",wgId);
	};
	
	scwin.ui_btnConfigureWidget_onclick = function(e) {
		ui_boxWgList.toggleClass( "show" );
	};
	
	scwin.ui_ccbConfigureWidget_onviewchange = function(info) {
		console.log(info);
	};
	
	/*
	scwin.ui_wgc_main_onload = function() {
		
		var _widgetId = scwin.info_widgets.getInitWidgetId();
		var _wgIdArr = _widgetId.split(","); 
		var _wgIdArrLen = _wgIdArr.length;
		var i=0;
		
		for(i=0;i<_wgIdArrLen;i++){
			var _wgId = _wgIdArr[i];
			var _wg = ui_wgc_main.getWidgetById( _wgId );
			
			var _wqDataObj = $p.getComponentById(_wg.params);
			
			if(_wgId === "C01" || _wgId === "C02" || _wgId === "C03"){
				_wg.getWindow().scwin.fn_init( _wqDataObj.getAllJSON() );
			}else if(_wgId === "C04"){
				_wg.getWindow().scwin.fn_init(false);
			}
		}
	};
	*/
	

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.toggleBox{margin-bottom:4px}.toggleBox .toggleTitle{text-indent:6px;font-weight:700;font-size:14px;color:#444;background-color:#eee}.toggleBox .toggleTitle:AFTER{content:"_";color:#eee;font-weight:700;font-size:14px;padding:0 8px;background:url(/img/accordion_close01.png) center 50%/14px no-repeat;float:right}.toggleBox .toggleTitle.hide_content:AFTER{background:url(/img/accordion_open01.png) center 50%/14px no-repeat}.toggleBox div.toggleTitle.hide_content+div.toggleCont{display:none}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'main_wrapper',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/sample/comm/wf_headerWithMenu.xml',style:'',class:'main_header'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'main_content'},E:[{T:1,N:'xf:group',A:{id:'',style:'position: absolute;top:0px;left:0px;bottom: 0px;width: 275px;padding: 5px;overflow-y:auto;overflow-x:hidden;',class:'boxSize mainLeftBox'},E:[{T:1,N:'xf:group',A:{id:'',style:'min-height: 20px;',class:'toggleBox'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'','ev:onclick':'scwin.fn_tootleTitleClick',class:'toggleTitle',label:'내 정보'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'dp toggleCont'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'line-height: 100px;text-align: center;',label:'사용자 정보 표현란'}}]}]},{T:1,N:'xf:group',A:{id:'',style:'min-height: 20px;',class:'toggleBox'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'','ev:onclick':'scwin.fn_tootleTitleClick',class:'toggleTitle',label:'달력'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'toggleCont'},E:[{T:1,N:'w2:calendar',A:{delimiter:'.',id:'',footerDiv:'true',style:'width: 100%;',useMonthSelect:'',calendarClass:''}}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'position: absolute;top:0px;left:270px;right: 0px;bottom: 0px;padding: 2px 4px;',class:'boxSize mainContBox'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'height: 40px;'},E:[{T:1,N:'xf:group',A:{class:'ofh',id:'',style:'min-height: 10px;padding: 0px 10px;'},E:[{T:1,N:'xf:group',A:{class:'tar',id:'',style:'line-height: 40px;'},E:[{T:1,N:'xf:trigger',A:{class:'btnRud01 dmr','ev:onclick':'scwin.ui_btnConfigureWidget_onclick',id:'ui_btnConfigureWidget',style:'width: 100px;background-color: #bbb',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'위젯 설정'}]}]}]}]}]},{T:1,N:'w2:widgetContainer',A:{widgetMove:'true',minUnitWidth:'',cols:'6','ev:onload':'',horizontalMargin:'6',verticalMargin:'6',params:'false',widgetResize:'true',threshold:'700',mode:'pushpull',id:'ui_wgc_main',style:'position: absolute;top: 40px;left: 0px;right: 0px;bottom: 0px;overflow-y:scroll;','ev:onwidgetload':'scwin.ui_wgc_main_onwidgetload',unitHeightPixel:'50','ev:onbeforewidgetclose':'scwin.ui_wgc_main_onbeforewidgetclose'}},{T:1,N:'xf:group',A:{id:'ui_boxWgList',style:'position: absolute;top:40px;right: 10px;width: 180px;background-color: #fff;border:1px solid #bbb;padding: 6px 10px;display: none;'},E:[{T:1,N:'w2:textbox',A:{class:'dmb','ev:onclick':'scwin.fn_tootleTitleClick',id:'',label:'위젯 배치 설정',style:'line-height: 30px;border-bottom: 1px solid #aaa;font-weight: bold;color: #444;font-size: 14px;'}},{T:1,N:'xf:select',A:{appearance:'full',class:'chbox_list dmb',cols:'','ev:onviewchange':'scwin.ui_chkWgList_onviewchange',id:'ui_chkWgList',ref:'',renderType:'checkboxgroup',rows:'1',selectedindex:'-1',separator:',',style:'min-height: 10px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'교육 실습 환경 정보'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'교육 샘플 목록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'웹스퀘어 참고 사이트'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'웹 개발 참고 사이트'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C03'}]}]}]}]},{T:1,N:'xf:group',A:{class:'ofh',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btnRud01 mb5 fl','ev:onclick':'scwin.ui_btnExportWidget_onclick',id:'ui_btnExportWidget',style:'width:48%;',toolTip:'위젯의 현재 배치 상태를 브라우저에 저장합니다. 화면이 로딩 시 저장된 정보가 있는 경우 해당 정보를 참조하여 위젯을 배치합니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btnRud01 fr mb5','ev:onclick':'scwin.ui_btnImportWidget_onclick',id:'ui_btnImportWidget',style:'width:48%;',toolTip:'브라우저에 저장된 위젯의 정보를 불러와 위젯을 배치합니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가져오기'}]}]},{T:1,N:'xf:trigger',A:{class:'btnRud01 fl','ev:onclick':'scwin.ui_btnRemoveWidgetInfo_onclick',id:'ui_btnRemoveWidgetInfo',style:'width:48%;',toolTip:'브라우저에 저장된 위젯의 배치 정보를 삭제합니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btnRud01 fr','ev:onclick':'scwin.ui_btnResetWidgetInfo_onclick',id:'ui_btnResetWidgetInfo',style:'width:48%;',toolTip:'위젯의 배치를 기본 셋팅값으로 초기화합니다. 초기화 진행 시 브라우저에 저장된 위젯 정보가 있는 경우 삭제 여부를 확인하여 진행합니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]}]}]}]}]}]}]}]}]})