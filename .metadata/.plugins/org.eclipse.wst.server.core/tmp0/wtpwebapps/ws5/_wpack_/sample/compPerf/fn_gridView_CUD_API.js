/*amd /sample/compPerf/fn_gridView_CUD_API.xml 23576 78a2ae926e3b1fd8af0a9a9cd3abf4ec797585ba02153a44d1fdb8af2479e048 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_member',saveRemovedData:'true','ev:ondataload':'scwin.dlt_member_ondataload','ev:oncelldatachange':''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'EMP_CD',name:'사번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GENDER_CD',name:'성별',dataType:'text'}},{T:1,N:'w2:column',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'POSITION_CD',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DUTY_CD',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ROLE_CD',name:'역할',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ASSIGNED_TASK',name:'업무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IMAGE_PATH',name:'이미지 경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CREATED_DATE',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPDATED_DATE',name:'수정일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_CmCode01'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'GRP_CD',name:'GRP_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_CD',name:'CODE_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_NM',name:'CODE_NM',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:'',use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'임원'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'03'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'팀원'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'04'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'협력'}]}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_CmCode02'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'GRP_CD',name:'GRP_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_CD',name:'CODE_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_NM',name:'CODE_NM',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:'',use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'이사'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'03'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'08'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'부장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'04'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'차장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'05'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'과장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'06'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'대리'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'07'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'사원'}]}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_CmCode19'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'GRP_CD',name:'GRP_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_CD',name:'CODE_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_NM',name:'CODE_NM',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:'',use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'19'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'PM'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'19'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'PL'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'19'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'03'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'분석/설계'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'19'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'04'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'개발'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'19'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'05'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'퍼블리셔'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'19'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'06'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'컨설팅'}]}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_CmCode101'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'GRP_CD',name:'GRP_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_CD',name:'CODE_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_NM',name:'CODE_NM',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:'',use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'101'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'M'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'남'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'101'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'F'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'여'}]}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_execLog',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'desc',name:'실행한 API',dataType:'text'}},{T:1,N:'w2:column',A:{id:'timeTaken',name:'소요 시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startTime',name:'시작 시각',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type',name:'타입 고유값',dataType:'text'}},{T:1,N:'w2:column',A:{id:'typeNm',name:'타입명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'getUserData',ref:'',target:'data:array,{"id":"dlt_member","key":"dlt_Member"}',action:'/sample/compList/data/largeData.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'','ev:submit':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	scwin.onpageload = function() {
		$p.executeSubmission( "getUserData" )	
	};
	
	scwin.dlt_member_ondataload = function() {
		this.sort( "EMP_CD" , 0);
	};
	
	scwin.fn_getLogDataObj = function(e){
		var arrTmpDate = ($p.getCurrentServerDate( "yyyyMMdd-HHmmss" )).split("-");
		
		return {
			"strCurDate" : arrTmpDate[0], 
			"strStartTime" : arrTmpDate[1],
			"startDate" : new Date(),
			"endDate" : null
		};
	};
	
	scwin.fn_getTotCount = function(){
		var totCount = ui_rowCount.getValue();
		
		if(!totCount){
			alert("반복할 행의 수를 입력하세요");
			ui_rowCount.focus();
			return 0;
		}
		
		return totCount;
	};
	
	
	//insertRow 버튼 클릭 시
	scwin.btn_insertRow_onclick = function(e) {
		var idx, 
			logDefData = scwin.fn_getLogDataObj(),
			totCount = scwin.fn_getTotCount();
			
		if(!totCount){ return; }
		for(var i=1;i<=totCount;i++){
			idx = dlt_member.insertRow( );
			dlt_member.setCellData( idx , "EMP_NM" , "inserRow"+i);
			dlt_member.setCellData( idx , "GENDER_CD" , "M" );
			dlt_member.setCellData( idx , "ROLE_CD" , "03" );
			dlt_member.setCellData( idx , "JOIN_DATE" , logDefData.strCurDate );
		}
		logDefData.endDate = new Date();
		scwin.fn_printLog(1, logDefData, totCount);
	};
	
	//insertJSON 버튼 클릭 시
	scwin.btn_insertJSON_onclick = function(e) {
		var idx, arrData = [], 
			logDefData = scwin.fn_getLogDataObj(),
			totCount = scwin.fn_getTotCount();
			
		if(!totCount){ return; }
			
		for(var i=1;i<=totCount;i++){
			arrData.push({"EMP_NM" : "insertJSON"+i, "GENDER_CD" : "F", "ROLE_CD" : "03", "JOIN_DATE" : logDefData.strCurDate});
		}
		idx = dlt_member.getRowCount();
		dlt_member.insertJSON( idx, arrData );
		ui_grid.setFocusedCell( idx , 0 , false );
		
		logDefData.endDate = new Date();
		scwin.fn_printLog(2, logDefData, totCount);
	};
	
	//insertRow(BroadCast) 버튼 클릭 시
	scwin.btn_insertRowBroadCast_onclick = function(e) {
		var idx, 
			logDefData = scwin.fn_getLogDataObj(),
			totCount = scwin.fn_getTotCount();
			
		if(!totCount){ return; }
		dlt_member.setBroadcast( false );
		for(var i=1;i<=totCount;i++){
			idx = dlt_member.insertRow( );
			dlt_member.setCellData( idx , "EMP_NM" , "inserRow"+i);
			dlt_member.setCellData( idx , "GENDER_CD" , "M" );
			dlt_member.setCellData( idx , "ROLE_CD" , "03" );
			dlt_member.setCellData( idx , "JOIN_DATE" , logDefData.strCurDate );
		}
		dlt_member.setBroadcast(true);  // data적용이 끝난후 화면에 갱신한다.
		logDefData.endDate = new Date();
		scwin.fn_printLog(1, logDefData, totCount);
	};
	
	//removeRow 버튼 클릭 시 
	scwin.btn_removeRow_onclick = function(e) {
		var i, idxArr = [], idxArrLen,  
			logDefData = scwin.fn_getLogDataObj(),
			totCount = scwin.fn_getTotCount();
		
		if(!totCount){ return; }
		
		//삭제할 index가 담긴 array 생성	
		for(i=0;i<totCount;i++){
			idxArr[i] = i;
		}
		
		for(i=totCount;i>=0;i--){
			dlt_member.removeRow( idxArr[i] );
		}
		
		logDefData.endDate = new Date();
		scwin.fn_printLog(3, logDefData, totCount);
	};
	
	//removeRows 버튼 클릭 시
	scwin.btn_removeRows_onclick = function(e) {
		var i, idxArr = [], 
			logDefData = scwin.fn_getLogDataObj(),
			totCount = scwin.fn_getTotCount();
		
		if(!totCount){ return; }
		
		//삭제할 index가 담긴 array 생성	
		for(i=0;i<totCount;i++){
			idxArr[i] = i;
		}
		
		dlt_member.removeRows( idxArr );
		
		logDefData.endDate = new Date();
		scwin.fn_printLog(4, logDefData, totCount);
	};
	
	//setCellData 버튼 클릭 시
	scwin.btn_setCellData_onclick = function(e) {
		var i,
			idx = dlt_member.getRowCount()-1, 
			logDefData = scwin.fn_getLogDataObj(),
			totCount = scwin.fn_getTotCount();
			
		if(!totCount){ return; }
			
		for(i=0;i<totCount;i++){
			dlt_member.setCellData(i, "EMP_CD",80000000+i+1);
			dlt_member.setCellData(i, "EMP_NM","setCellData");
			dlt_member.setCellData(i, "GENDER_CD","M");
			dlt_member.setCellData(i, "JOIN_DATE", logDefData.strCurDate);
			dlt_member.setCellData(i, "POSITION_CD","02");
			dlt_member.setCellData(i, "DUTY_CD","02");
			dlt_member.setCellData(i, "ROLE_CD","02");
			dlt_member.setCellData(i, "EMAIL","setCellData@inswave.com");
			dlt_member.setCellData(i, "ASSIGNED_TASK", "배정 필요");
			dlt_member.setCellData(i, "CREATED_DATE", logDefData.strCurDate);
			dlt_member.setCellData(i, "UPDATED_DATE", logDefData.strCurDate);
		}
		
		logDefData.endDate = new Date();
		scwin.fn_printLog(5, logDefData, totCount);
	};
	
	//setRowJSON 버튼 클릭 시
	scwin.btn_setRowJSON_onclick = function(e) {
		var logDefData = scwin.fn_getLogDataObj(),
			totCount = scwin.fn_getTotCount();
			
		if(!totCount){ return; }
			
		for(i=0;i<totCount;i++){
			tmpData = {
				"EMP_CD":700000000+i+1,
				"EMP_NM":"setRowJSON",
				"GENDER_CD":"F",
				"JOIN_DATE": logDefData.strCurDate,
				"POSITION_CD":"04",
				"DUTY_CD":"04",
				"ROLE_CD":"04",
				"EMAIL":"setRowJSON@inswave.com",
				"ASSIGNED_TASK": "배정 필요",
				"CREATED_DATE": logDefData.strCurDate,
				"UPDATED_DATE": logDefData.strCurDate
			};
			
			dlt_member.setRowJSON( 0 , tmpData, true);
		}
		
		logDefData.endDate = new Date();
		scwin.fn_printLog(6, logDefData, totCount);
		
	};
	
	scwin.btn_getCellData_onclick = function(e) {
		var logDefData = scwin.fn_getLogDataObj(), 
			tmpStr="",
			totCount = scwin.fn_getTotCount();
			
		if(!totCount){ return; }
			
		for(i=0;i<totCount;i++){
			tmpStr += dlt_member.getCellData( i , "EMP_NM" );
			tmpStr += dlt_member.getCellData( i , "EMP_CD" );
			tmpStr += dlt_member.getCellData( i , "EMAIL" );
			tmpStr += dlt_member.getCellData( i , "GENDER_CD" );
			tmpStr += dlt_member.getCellData( i , "JOIN_DATE" );
			tmpStr += dlt_member.getCellData( i , "UPDATE_DATE" );
		}
		//console.log(tmpStr);
		logDefData.endDate = new Date();
		scwin.fn_printLog(7, logDefData, totCount);
	};
	
	scwin.btn_getRowJSON_onclick = function(e) {
		var logDefData = scwin.fn_getLogDataObj(), 
			tmpData, tmpStr="",
			totCount = scwin.fn_getTotCount();
			
		if(!totCount){ return; }
			
		for(i=0;i<totCount;i++){
			tmpData = dlt_member.getRowJSON( i );
			
			tmpStr += tmpData.EMP_NM;
			tmpStr += tmpData.EMP_CD;
			tmpStr += tmpData.EMAIL;
			tmpStr += tmpData.GENDER_CD;
			tmpStr += tmpData.JOIN_DATE;
			tmpStr += tmpData.UPDATE_DATE;
		}
		//console.log(tmpStr);
		logDefData.endDate = new Date();
		scwin.fn_printLog(8, logDefData, totCount);
	};
	
	scwin.fn_printLog = function(execType, defLogObj, rowCount){
		var rowJSON = {
				"desc" : "",
				"timeTaken" : defLogObj.endDate - defLogObj.startDate,
				"startTime" : defLogObj.strStartTime,
				"type" : execType
			},
			lastIdx = dlt_execLog.getRowCount();
		
		
		switch(execType){
			case 1 :
				rowJSON.desc = "insertRow "+rowCount+"행";
				rowJSON.typeNm = "insertRow";
			break;
			case 2 :
				rowJSON.desc = "insertJSON "+rowCount+"행";
				rowJSON.typeNm = "insertJSON";
			break;
			case 3 :
				rowJSON.desc = "removeRow "+rowCount+"행";
				rowJSON.typeNm = "removeRow";
			break;
			case 4 :
				rowJSON.desc = "removeRows "+rowCount+"행";
				rowJSON.typeNm = "removeRows";
			break;
			case 5 :
				rowJSON.desc = "setCellData "+rowCount+"행";
				rowJSON.typeNm = "setCellData";
			break;
			case 6 :
				rowJSON.desc = "setRowJSON "+rowCount+"행";
				rowJSON.typeNm = "setRowJSON";
			break;
			case 7 :
				rowJSON.desc = "getCellData "+rowCount+"행";
				rowJSON.typeNm = "getCellData";
			break;
			case 8 :
				rowJSON.desc = "getRowJSON "+rowCount+"행";
				rowJSON.typeNm = "getRowJSON";
			break;
			default : return;
		}
		
		dlt_execLog.insertJSON( lastIdx , [rowJSON] );
		grd_log.setFocusedCell( lastIdx , 0 );
	};
	
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{id:'group4',style:'padding: 10px;',class:'section_desc'},E:[{T:1,N:'w2:textbox',A:{id:'section',style:'',label:'DataList에서 제공하는 insert, remove에 관련된 method의 속도를 측정할 수 있다.<br/>각 버튼을 클릭하여 로직이 수행되는 시간을 하단의 그리드뷰에서 확인할 수 있다.<br/>( source : fn_gridView_CUD_API.xml )',localeRef:''}}]},{T:1,N:'w2:textbox',A:{id:'',style:'',class:'df_tt dmb',label:'DataList의 API별 속도 측정 예시',tagname:'h2'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'defLineHeight dmb'},E:[{T:1,N:'w2:span',A:{label:'반복할 행의 수 :',id:'',style:'',class:'dmr'}},{T:1,N:'xf:input',A:{id:'ui_rowCount',style:'width: 60px;display: inline;',adjustMaxLength:'false',type:'number',dataType:'number',initValue:'100','ev:onviewchange':''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'btnbox'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'btn_insertRow',style:'width:130px;',class:'btn_cm','ev:onclick':'scwin.btn_insertRow_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'insertRow'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_insertJSON_onclick',id:'btn_insertJSON',style:'width:130px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'insertJSON'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_insertRowBroadCast_onclick',id:'btn_insertRowBroadCast',style:'width:160px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'insertRow(BroadCast)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_removeRow_onclick',id:'btn_removeRow',style:'width:130px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'removeRow'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_removeRows_onclick',id:'btn_removeRows',style:'width:130px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'removeRows'}]}]},{T:1,N:'w2:tag',A:{id:'',style:'',tagname:'br'}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_setCellData_onclick',id:'btn_setCellData',style:'width:130px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setCellData'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_setRowJSON_onclick',id:'btn_setRowJSON',style:'width:130px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setRowJSON'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_getCellData_onclick',id:'btn_getCellData',style:'width:130px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getCellData'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_getRowJSON_onclick',id:'btn_getRowJSON',style:'width:130px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getRowJSON'}]}]}]},{T:1,N:'w2:gridView',A:{ignoreCellClick:'false',summaryAuto:'false',autoFit:'allColumn',ignoreToggleOnDisabled:'false',summaryOnlyAuto:'false',visibleRowNum:'10',class:'dmb cm_grid',defaultCellHeight:'24',rowNumVisible:'true',scrollByColumnAdaptive:'false',dataList:'data:dlt_member',id:'ui_grid',applyAllColumnStyle:'false',readOnly:'true',style:'height: 280px;margin-top: 10px;',useShiftKey:'true',scrollByColumn:'false',senseReader:'false','ev:onviewchange':''},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column29',style:'',inputType:'text',width:'70',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column27',style:'',inputType:'text',width:'70',value:'성명',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column25',style:'',inputType:'text',width:'105',value:'성별',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column23',style:'',inputType:'text',width:'114',value:'입사일',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column21',style:'',inputType:'text',width:'70',value:'직위',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column19',style:'',inputType:'text',width:'70',value:'직책',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column17',style:'',inputType:'text',width:'70',value:'역할',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column13',style:'',inputType:'text',width:'175',value:'이메일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'EMP_CD',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'EMP_NM',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'GENDER_CD',style:'',inputType:'select',width:'105',value:'',displayMode:'label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'미선택'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_CmCode101'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'JOIN_DATE',style:'',inputType:'text',width:'114',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy.MM.dd'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'POSITION_CD',style:'',inputType:'select',width:'70',value:'',displayMode:'label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'미선택'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_CmCode02'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'DUTY_CD',style:'',inputType:'select',width:'70',value:'',displayMode:'label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'미선택'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_CmCode19'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ROLE_CD',style:'',inputType:'select',width:'70',value:'',displayMode:'label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'미선택'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_CmCode01'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'EMAIL',style:'',inputType:'text',width:'175',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:textbox',A:{class:'df_tt dmb',id:'',label:'API별 실행 로그',style:'',tagname:'h2'}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'400',class:'cm_grid',dataList:'data:dlt_execLog',fixedColumnWithHidden:'true',focusMode:'row',id:'grd_log',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',readOnly:'true',rowMouseOver:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',selectedRowColor:'orange',sortable:'true',style:'height: 150px;',summaryAuto:'false',summaryOnlyAuto:'false',useFilterList:'false',useShiftKey:'true',rowNumVisible:'true',visibleRowNum:'5'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column13',style:'',inputType:'text',width:'116',value:'실행 타입',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',style:'',value:'호출 API ',width:'227'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',style:'',value:'실행 시각',width:'109'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'',value:'소요 시간(ms)',width:'109'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'typeNm',style:'',inputType:'text',width:'116',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'desc',inputType:'text',style:'height:20px',width:'227',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'startTime',inputType:'text',style:'height:20px',width:'109',dataType:'time',displayFormat:'HH:mm:ss'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'#,##0 ms',displayMode:'label',id:'timeTaken',inputType:'text',style:'height:20px',textAlign:'right',width:'109'}}]}]},{T:1,N:'w2:subTotal',A:{id:'subTotal1',style:'',targetColumnID:'typeNm'},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column18',style:'height:29px;',width:'452',inputType:'expression',value:'',displayMode:'label',colSpan:'3',rowSpan:'',expression:'targetColValue() + \' (총 \' +count(\'row_total\') + \'건)\'',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column19',style:'height:27px',hidden:'false',width:'109',inputType:'expression',value:'',displayMode:'label',displayFormat:'#,###.#[round] ms',expression:'avg(\'timeTaken\')',dataType:'number',textAlign:'right'}}]}]}]}]}]}]}]})