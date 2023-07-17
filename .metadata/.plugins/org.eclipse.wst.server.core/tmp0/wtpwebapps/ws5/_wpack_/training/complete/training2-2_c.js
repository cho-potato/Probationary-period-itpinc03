/*amd /training/complete/training2-2_c.xml 19404 93c4d2806ca369303b1523af4d3fd2527c3bd2efef16c9bc0aad64cbf885e260 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dc_userInfoList',saveRemovedData:'true','ev:oninsertrow':'scwin.dc_userInfoList_oninsertrow','ev:onremoverow':'scwin.dc_userInfoList_onremoverow','ev:ondataload':'scwin.dc_userInfoList_ondataload','ev:onbeforecelldatachange':'scwin.dc_userInfoList_onbeforecelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CHK',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'EMP_CD',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GENDER_CD',name:'성별',dataType:'text'}},{T:1,N:'w2:column',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'POSITION_CD',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ROLE_CD',name:'역할',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDR',name:'통합주소',dataType:'text',importFormatter:'scwin.fnImp'}},{T:1,N:'w2:column',A:{id:'CREATED_DATE',name:'생성일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPDATED_DATE',name:'수정일',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_searchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'GENDER_CD',name:'성별',dataType:'text'}},{T:1,N:'w2:key',A:{id:'POSITION_CD',name:'직급',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_reqCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'GRP_CD',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dc_code02'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'GRP_CD',name:'GRP_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_CD',name:'CODE_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_NM',name:'CODE_NM',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:''}}]},{T:1,N:'w2:dataList',A:{id:'dc_code101',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'GRP_CD',name:'GRP_CD'}},{T:1,N:'w2:column',A:{dataType:'text',id:'CODE_CD',name:'CODE_CD'}},{T:1,N:'w2:column',A:{dataType:'text',id:'CODE_NM',name:'CODE_NM'}}]},{T:1,N:'w2:data',A:{xmlns:''}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_code',ref:'data:json,dc_reqCode',target:'data:json,["dc_code101","dc_code02"]',action:'/training/getCodeList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_code_submit','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',ref:'data:json,dc_searchParam',target:'data:json,dc_userInfoList',action:'/training/searchMember.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중..','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',ref:'data:json,{"id":"dc_userInfoList","action":"modified"}',target:'',action:'/training/saveMember.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'studio console log를 확인','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	scwin.sbm_code_submit = function(e) {
		dc_reqCode.set( "GRP_CD" , "02,101" );
		
	};
	
	scwin.onpageload = function() {
		$p.executeSubmission( "sbm_code" );
	};
	
	scwin.ui_btnSearch_onclick = function(e) {
		$p.executeSubmission( "sbm_search" );
	};
	
	scwin.dc_userInfoList_oninsertrow = function(info) {
		scwin.dispRowCount();
	};
	
	scwin.dc_userInfoList_onremoverow = function(info) {
		scwin.dispRowCount();
	};
	
	scwin.dc_userInfoList_ondataload = function() {
		scwin.dispRowCount();
	};
	
	//display total count
	scwin.dispRowCount = function(){
		ui_totRowCount.setValue( dc_userInfoList.getRowCount() );
	};
	
	//display total count
	scwin.dispRowCount = function(){
		ui_totRowCount.setValue( dc_userInfoList.getRowCount() );
	};
	
	scwin.ui_btnSave_onclick = function(e) {
		// 실제 저장을 수행하는 것은 아님 - 상태값이 변경된 data만 전달 됨을 확인 
		$p.executeSubmission( "sbm_save" );
		// 수행 결과는 studio의 console에서 확인 
	};
	
	scwin.ui_memberList_oncellclick = function(row,col) {
		var colId = ui_memberList.getColumnID( col );
		// 사번을 클릭 했을 경우에만 주소 색상이 붉은색으로 표시, 그 외에는 검정색으로 변경
		if(colId == "EMP_CD"){
			ui_memberList.setCellColor( row , "ADDRESS1", "red" );
		}else{
			ui_memberList.setCellColor( row , "ADDRESS1", "black" );
		}
	};
	
	scwin.sbm_search_submitdone = function(e) {
		if(e.responseJSON.msgCode == "S"){
			ui_memberList.setFocusedCell( 0, 0 );
		}
	};
	
	// 입력
	scwin.btnInsert_onclick = function(e) {
		var focusIdx = ui_memberList.getFocusedRowIndex();
		dc_userInfoList.insertRow( focusIdx );
	};
	
	// 삭제 - 상태값 변경
	scwin.btnDelete_onclick = function(e) {
		var focusIdx = ui_memberList.getFocusedRowIndex();
		dc_userInfoList.deleteRow( focusIdx );
	};
	
	// 삭제 - 실제 삭제 수행
	scwin.btnRemove_onclick = function(e) {
		var focusIdx = ui_memberList.getFocusedRowIndex();
		var removeObj = dc_userInfoList.removeRow( focusIdx );
		console.log(removeObj);
	};
	
	// 다중삭제 - 상태값 변경
	scwin.btnDeleteRows_onclick = function(e) {
		var chkArr = ui_memberList.getCheckedIndex( "CHK" );
		dc_userInfoList.deleteRows( chkArr );
		
	};
	
	// 다중삭제 - 실제 삭제 수행
	scwin.btnRemoveRows_onclick = function(e) {
		var chkArr = ui_memberList.getCheckedIndex( "CHK" );
		var removeObjs = dc_userInfoList.removeRows( chkArr );
		console.log(removeObjs);
	};
	
	// 초기화
	scwin.btnInit_onclick = function(e) {
		dc_userInfoList.removeAll();
	};
	
	// excel download
	scwin.btnExcelDown_onclick = function(e) {
		var options = {};
		options.type = "1";
		options.removeColumns = "0";
		ui_memberList.advancedExcelDownload( options );
	};
	
	// excel upload
	scwin.btnExcelUp_onclick = function(e) {
		var options = {};
		options.type = "1";
		options.insertColumns =  [{ columnIndex:0, columnValue:"0"}];
		options.headerExist = "1";
		// 이 페이지에서 다운로드 받은 엑셀 파일을 이용하세요. 형식이 틀리면 업로드 되지 않습니다. 
		ui_memberList.advancedExcelUpload( options );
	};
	
	// import formatter 사용
	scwin.fnImp = function(rowJson, rowIdx, colId){
		return rowJson.ADDRESS1 + rowJson.ADDRESS2;
	};
	
	// display formatter 사용
	scwin.fnDis = function(value){
		return value.substring(0,3) + "-" + value.substring(3,6);
	};
	
	// custom formatter 사용
	scwin.fnCus = function(data, formattedData, rowIndex, colIndex){
		// 성별이 여자인 경우에만 이름의 색상을 변경한다.
		if(data == "F"){
			ui_memberList.setCellColor( rowIndex , "EMP_NM" , "orange" );
		} 
		return formattedData;
	};
	
	scwin.dc_userInfoList_onbeforecelldatachange = function(info) {
		if(info.colID == "EMP_NM"){
			if(info.newValue == ""){
				return false;
			}
		}
	};
	
	

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.w2radio_label:before{position:absolute;left:1px;top:5px;content:none;display:inline-block;width:20px;height:20px;border:1px solid #cfd5d8;box-sizing:border-box;border-radius:50%;background:#fff}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{class:'section_title',id:'',label:'이 화면은 코드를 가져오기 위한 submission을 하나로 등록한 예시이다.<br/>(성별 코드, 직위 코드)',style:'margin-bottom: 10px;'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'border: 1px solid gray;overflow: hidden;margin-bottom: 10px;padding: 10px 0px 0px 10px;'},E:[{T:1,N:'xf:group',A:{style:'width:180px;float: right;margin: 0px 10px 10px 0px;text-align: right;',id:''},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.ui_btnSearch_onclick',style:'width: 80px;',id:'ui_btnSearch',type:'button',class:'btn_cm sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.ui_btnSave_onclick',id:'ui_btnSave',style:'margin-left: 10px;width: 80px;',type:'button',class:'btn_cm sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]},{T:1,N:'xf:group',A:{style:'width:220px;float: left;margin: 0px 10px 10px 0px;',id:'',class:''},E:[{T:1,N:'w2:span',A:{style:'',label:'성별 : ',id:''}},{T:1,N:'xf:select1',A:{selectedData:'true',submenuSize:'auto',chooseOption:'',allOption:'true',displayMode:'label',ref:'data:dc_searchParam.GENDER_CD',appearance:'minimal',disabledClass:'w2selectbox_disabled',optionOrder:'false',disabled:'false',style:'width: 148px;height: 23px;',id:'ui_search_gender',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dc_code101'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'width:220px;float: left;margin: 0px 10px 10px 0px;',class:''},E:[{T:1,N:'w2:span',A:{id:'',label:'직급 :',style:''}},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'ui_search_position',optionOrder:'false',ref:'data:dc_searchParam.POSITION_CD',selectedData:'true',style:'width: 148px;height: 23px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dc_code02'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'margin-bottom: 10px',id:'',class:'btnbox'},E:[{T:1,N:'w2:span',A:{label:'0',style:'float: right;',id:'ui_totRowCount',dataType:'number',displayFormatter:'',displayFormat:'#,##0건'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnInsert_onclick',id:'btnInsert',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입력'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnDelete_onclick',id:'btnDelete',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제(delete)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnRemove_onclick',id:'btnRemove',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제(remove)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnDeleteRows_onclick',id:'btnDeleteRows',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다중삭제(deleteRows)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnRemoveRows_onclick',id:'btnRemoveRows',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다중삭제(removeRows)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnInit_onclick',id:'btnInit',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnExcelDown_onclick',id:'btnExcelDown',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ExcelDown'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnExcelUp_onclick',id:'btnExcelUp',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ExcelUp'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'1400',backgroundColorMode:'always',contextMenu:'true',dataList:'dc_userInfoList',editModeEvent:'onclick','ev:oncellclick':'scwin.ui_memberList_oncellclick',fastScroll:'',fixedColumnWithHidden:'true',focusMode:'row',id:'ui_memberList',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',keyMoveEditMode:'true',rowNumHeaderValue:'NO',rowNumVisible:'true',rowNumWidth:'50',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'50',scrollByColumn:'false',scrollByColumnAdaptive:'false',selectedRowColor:'#00FF40',sortable:'true',style:'height: 250px;margin-bottom: 10px;',summaryAuto:'false',summaryOnlyAuto:'false',useFilterList:'true',useShiftKey:'true',visibleRowNum:'10',fixedColumn:'2'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column28',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'30'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column27',inputType:'text',style:'',value:'사번',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column25',inputType:'text',style:'',useFilter:'true',value:'이름',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column23',inputType:'text',style:'',value:'성별',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column21',inputType:'text',style:'',value:'입사일',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column19',inputType:'text',style:'',value:'직급',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'',value:'이메일',width:'171'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',style:'',value:'우편번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',style:'',value:'주소1',width:'148'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',style:'',value:'주소2',width:'138'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'CHK',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'30'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayMode:'label',id:'EMP_CD',inputType:'text',readOnly:'true',style:'height:28px;',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'EMP_NM',inputType:'text',style:'height:28px;',width:'70'}},{T:1,N:'w2:column',A:{allOption:'',blockSelect:'false',chooseOption:'true',chooseOptionLabel:'',customFormatter:'scwin.fnCus',displayMode:'label',id:'GENDER_CD',inputType:'select',ref:'',style:'height:28px;',viewType:'icon',width:'70'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dc_code101'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'date',displayMode:'label',id:'JOIN_DATE',inputType:'text',style:'height:28px;',viewType:'icon',width:'100'}},{T:1,N:'w2:column',A:{allOption:'',blockSelect:'false',chooseOption:'true',chooseOptionLabel:'',displayMode:'label',id:'POSITION_CD',inputType:'select',ref:'',style:'height:28px;',viewType:'icon',width:'70'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dc_code02'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'EMAIL',inputType:'text',style:'height:28px;',width:'171'}},{T:1,N:'w2:column',A:{blockSelect:'false',customFormatter:'',displayFormat:'',displayFormatter:'scwin.fnDis',displayMode:'label',id:'ZIP_CD',inputType:'text',style:'height:28px;',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ADDRESS1',inputType:'text',style:'height:28px;',width:'148'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ADDRESS2',inputType:'text',style:'height:28px;',width:'138'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;',id:'',class:'w2tb',adaptive:'layout',adaptiveThreshold:'700'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n    					이름\n    					'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{id:'',style:'width: 144px;height: 23px;',ref:'data:dc_userInfoList.EMP_NM'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n    					성별\n    					'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{id:'ui_form_gender',selectedIndex:'0',appearance:'full',style:'min-width: 150px;min-height: 21px;',ref:'data:dc_userInfoList.GENDER_CD',rows:'1',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dc_code101'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n    					입사일\n    					'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',id:'',weekStartsOn:'0',style:'width: 150px;height: 23px;',renderDiv:'true',focusOnDateSelect:'false',calendarValueType:'yearMonthDate',rightAlign:'false',renderType:'component',ref:'data:dc_userInfoList.JOIN_DATE'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n    					직급\n    					'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'ui_form_position',optionOrder:'false',selectedData:'true',style:'width: 148px;height: 21px;',submenuSize:'auto',ref:'data:dc_userInfoList.POSITION_CD',chooseOptionLabel:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dc_code02'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]}]}]}]}]}]}]})