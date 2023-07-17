/*amd /sample/compList/widgetContent/wcPage4.xml 12120 e6abfc409b794ef47807a0b8f98cb39bc3d93c595f40ea5e0ad2449eaa051120 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'title',E:[{T:3,text:'사용자 관리'}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_Member',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:ondataload':'scwin.dlt_Member_ondataload','ev:oninsertrow':'scwin.dlt_Member_oninsertrow','ev:onremoverow':'scwin.dlt_Member_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'EMP_CD',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GENDER_CD',name:'성별',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'POSITION_CD',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DUTY_CD',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ROLE_CD',name:'역할',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IMAGE_PATH',name:'이미지경로',dataType:'text',defaultValue:'/img/blank.png'}},{T:1,N:'w2:column',A:{id:'CREATED_DATE',name:'생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPDATED_DATE',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'count',name:'화면 행수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'page',name:'페이지 값',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prePage',name:'이전 페이지 값',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchType',name:'검색 타입',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchParam',name:'검색 파라메터',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'page',E:[{T:4,cdata:'1'}]}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_SearchResult'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'count',name:'count',dataType:'text',defaultValue:'1'}},{T:1,N:'w2:key',A:{id:'page',name:'page',dataType:'text',defaultValue:'1'}},{T:1,N:'w2:key',A:{id:'startNum',name:'startNum',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endNum',name:'endNum',dataType:'text'}},{T:1,N:'w2:key',A:{id:'totalCount',name:'totalCount',dataType:'text',defaultValue:'0'}}]},{T:1,N:'w2:data',A:{xmlns:''}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_select',ref:'data:json,[{"id":"dma_SearchParam"}]',target:'data:json,["dlt_Member","dma_SearchResult"]',action:'/edu/selectMemberList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중입니다.','ev:submit':'scwin.sbm_select_submit','ev:submitdone':'scwin.sbm_select_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
 

	//[조회]버튼 클릭 시
	scwin.btn_Search_onclick = function() {
		scwin.selectMemeberList(true);
	};
	
	//검색 타입에 따른 파라메터 셋팅
	scwin.setSearchParam = function(){
		var tmpType = dma_SearchParam.get("searchType");
		var tmpParam = "";
		
		if(tmpType == ""){
				
		}else if(tmpType == "name"){
			tmpParam = idx_pName.getValue();
		
		}else if(tmpType == "email"){
			tmpParam = idx_pEmail.getValue();
		}
		
		dma_SearchParam.set("searchParam",tmpParam.trim());
	};
	
	//submission 실행
	scwin.selectMemeberList = function(isFirst){
		//첫 페이지로 셋팅.
		if(isFirst === true){
			dma_SearchParam.set( "page" , 1 );
		}
		$p.executeSubmission( "sbm_select" );
	};
	
	//sbm_select 실행 전
	scwin.sbm_select_submit = function(e) {
		scwin.setSearchParam();
		return true;
	};
	
	//sbm_select 실행 후
	scwin.sbm_select_submitdone = function(e) {
		scwin.setPageInfo();
	};
	
	//PageList의 페이지 정보 셋팅
	scwin.setPageInfo = function() {
		var dataObj = dma_SearchResult.getJSON();
		var isInit = false, pageSize=0;
		if(dataObj.page == 1){
			isInit = true;
		}
		pageSize = com.getPageSize(dataObj.totalCount, dataObj.count);
		pgl_member.setCount( pageSize , !isInit );
		spn_TotalPage.setValue( pgl_member.getCount() );
		grd_Member.setStartRowNumber( dataObj.startNum );
	};
	
	//데이터 조회 이전에 수정 데이터가 있는 경우
	scwin.btn_Search_confirm_callback = function(returnValue){
		if(returnValue === true){
			$p.executeSubmission( "sbm_selectAll" );
		}
	};
	
	scwin.setDispZipCd = function(curVal){
		if(curVal.length < 6){
			return curVal;
		}
		return curVal.replace(/(\d{3})/,"$1-");
	};

	//dlt_Member에 data가 셋팅 될 때 호출
	scwin.dlt_Member_ondataload = function() {
		scwin.dlt_Member_dataChange();
	};
	
	//dlt_Member에 data가 추가 될 때 호출
	scwin.dlt_Member_oninsertrow = function(info) {
		scwin.dlt_Member_dataChange();
	};

	//dlt_Member에 data가 삭제 될 때 호출
	scwin.dlt_Member_onremoverow = function(info) {
		scwin.dlt_Member_dataChange();
	};
	
	//dlt_Member에 data가 로딩 된 후 totalCount
	scwin.dlt_Member_dataChange = function(){
		
	};
	
	
	//PageList의  value가 변경되었을때.
	scwin.pgl_member_onviewchange = function(info) {
		dma_SearchParam.set( "page" , info.newSelectedIndex );
		dma_SearchParam.set( "prePage",info.oldSelectedIndex );
		scwin.selectMemeberList();
	};
	
	//XX건씩 보기 select 변경 시
	scwin.sbx_member_rowCount_onviewchange = function(info) {
		scwin.selectMemeberList(true);
	};
	
	//[검색 조건] 변경 시
	scwin.sbx_SearchType_onviewchange = function(info) {
		var tmpType = info.newValue;
		var boxName = "case_"+tmpType;
		swh_SearchParamBox.setSelectedID( boxName );
		
		if(tmpType == "name"){
			idx_pName.focus();	
		}else if(tmpType == "email"){
			idx_pEmail.focus();
		}
	};
	
	scwin.onpageload = function() {

	};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'min-width: 350px;',id:'',class:'absBox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'widgetBox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'searchbox dmb'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:50px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'검색'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'ofh fl'},E:[{T:1,N:'xf:select1',A:{selectedData:'true',chooseOptionLabel:'',submenuSize:'auto',chooseOption:'',allOption:'',displayMode:'label',ref:'data:dma_SearchParam.searchType',appearance:'minimal',disabledClass:'w2selectbox_disabled','ev:onviewchange':'scwin.sbx_SearchType_onviewchange',optionOrder:'false',style:'width: 70px;height: 30px;',disabled:'false',id:'sbx_SearchType',class:'fl dmr',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이름'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'name'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이메일'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'email'}]}]}]}]},{T:1,N:'xf:switch',A:{motionDisplay:'',caseClass:'',style:'width: 160px;height: 30px;position: relative;',id:'swh_SearchParamBox',class:'fl'},E:[{T:1,N:'xf:case',A:{style:'position:absolute;width:100%;height:100%;',id:'case_name',class:''},E:[{T:1,N:'xf:input',A:{style:'width:150px;height: 30px;',id:'idx_pName'}}]},{T:1,N:'xf:case',A:{style:'position:absolute;width:100%;height:100%;',id:'case_email',class:''},E:[{T:1,N:'xf:input',A:{style:'width:150px;height: 30px;',id:'idx_pEmail'}}]}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_Search_onclick',style:'width: 80px;',id:'btn_Search',type:'button',class:'btn_cm sch fr'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'defaultbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titlebox'},E:[{T:1,N:'xf:input',A:{style:'width:0px;height:0px;border-style:none;',id:'ibx_fake'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'fr ofh'},E:[{T:1,N:'xf:group',A:{style:'line-height: 22px;',id:'',class:'dmr fl'},E:[{T:1,N:'w2:span',A:{ref:'data:dma_SearchResult.page',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'df_total num'}},{T:1,N:'w2:span',A:{dataType:'text',displayFormat:'',style:'',id:'',label:'/',class:'df_total dmr'}},{T:1,N:'w2:span',A:{dataType:'number',displayFormat:'#,##0 페이지',style:'',id:'spn_TotalPage',label:'0',class:'df_total dmr'}},{T:1,N:'w2:span',A:{dataType:'text',displayFormat:'',style:'',id:'',label:'(총',class:'df_total'}},{T:1,N:'w2:span',A:{ref:'data:dma_SearchResult.totalCount',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'df_total num'}},{T:1,N:'w2:span',A:{dataType:'',displayFormat:'',style:'',id:'span2',label:'건)',class:'df_total'}}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOption:'',allOption:'',displayMode:'label',ref:'data:dma_SearchParam.count',appearance:'minimal',disabledClass:'w2selectbox_disabled','ev:onviewchange':'scwin.sbx_member_rowCount_onviewchange',disabled:'false',style:'width: 110px;',id:'sbx_member_rowCount',class:'fl',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'10건씩 보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'50건씩 보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'100건씩 보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'500건씩 보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1,000건씩 보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1000'}]}]}]}]}]}]},{T:1,N:'w2:gridView',A:{tooltipShowAlways:'',rowNumVisible:'true',rowStatusWidth:'',scrollByColumn:'false',rowNumHeaderValue:'번호',autoFitFilterList:'true',focusMode:'row',rowNumWidth:'40',fixedColumn:'',autoFit:'lastColumn',id:'grd_Member',class:'cm_grid',ignoreToggleOnDisabled:'false','ev:oncellclick':'',scrollByColumnAdaptive:'false',summaryAuto:'false',useShiftKey:'true',readOnly:'true',rowStatusHeaderValue:'',rowStatusVisible:'',tooltipDisplay:'true',fixedColumnWithHidden:'true',dataList:'dlt_Member',ignoreCellClick:'false',style:'height: 270px;',visibleRowNum:'10',useFilterList:'true',useCtrlKey:'false',autoFitMinWidth:''},E:[{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'86',style:'height:26px;',inputType:'text',id:'column27',sortable:'true',value:'성명',class:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'195',style:'height:26px;',inputType:'text',id:'column13',value:'이메일',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'86',style:'height:26px;',inputType:'text',id:'EMP_NM',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'195',style:'height:26px;',inputType:'text',id:'EMAIL',blockSelect:'false',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'defaultbox'},E:[{T:1,N:'w2:pageList',A:{'ev:onviewchange':'scwin.pgl_member_onviewchange',displayFormat:'#',pageSize:'10',displayButtonType:'display',style:'',id:'pgl_member'}}]}]}]}]}]}]}]})