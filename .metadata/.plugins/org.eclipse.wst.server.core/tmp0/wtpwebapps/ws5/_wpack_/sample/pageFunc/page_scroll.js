/*amd /sample/pageFunc/page_scroll.xml 12631 dae96a494084d86fd6314b4c61fe73206aaa2c271a9bcaa02c908c8e3025f8e5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'title',E:[{T:3,text:'사용자 관리'}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_Member',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:ondataload':'scwin.dlt_Member_ondataload','ev:oninsertrow':'','ev:onremoverow':''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'EMP_CD',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GENDER_CD',name:'성별',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'POSITION_CD',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DUTY_CD',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ROLE_CD',name:'역할',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IMAGE_PATH',name:'이미지경로',dataType:'text',defaultValue:'/ws5/img/blank.png'}},{T:1,N:'w2:column',A:{id:'CREATED_DATE',name:'생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPDATED_DATE',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'TOTAL_YN',name:'총건수 조회여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'startNum',name:'시작 순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endNum',name:'끝 순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'count',name:'화면 행수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchParam',name:'검색 파라메터',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchType',name:'검색 타입',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_select',ref:'data:json,dma_Search',target:'',action:'/edu/selectMemberListScroll.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_select_submit','ev:submitdone':'scwin.sbm_select_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{src:'http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false'}},{T:1,N:'script',A:{type:'text/javascript',src:'/js/eduCommon.js'}},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
 
	scwin.append = false;
	scwin.totalCnt = 0;
	
	//[조회]버튼 클릭 시
	scwin.btn_Search_onclick = function() {
		scwin.append = false;
		scwin.searchMain(0, "Y");
	};
	
	/**
	 * 조회 (현재 샘플은 100개씩 조회할 경우 기준) 
	 * param1 - 조회 시작 순번
	 * param2 - 총 건수 조회 여부 
	 */
	scwin.searchMain = function(idx, strYn){
		dma_Search.set("TOTAL_YN" , strYn);
		dma_Search.set("startNum", idx);
		dma_Search.set("endNum", 100);
		dma_Search.set("count" , 100);
		$p.executeSubmission( "sbm_select" );
	};
	
	//page onload event
	scwin.onpageload = function() {
		//코드 데이터 불러오기
		com.setCommonCode([
			{"code":"02","compID":"grd_Member:DUTY_CD"},
			{"code":"01","compID":"grd_Member:POSITION_CD"},
			{"code":"19","compID":"grd_Member:ROLE_CD"},
			{"code":"101","compID":"grd_Member:GENDER_CD"}
		]);
	};
	
	//검색 타입에 따른 파라메터 셋팅
	scwin.setSearchParam = function(){
		var tmpType = dma_Search.get("searchType");
		var tmpParam = "";
		
		if(tmpType == ""){
				
		}else if(tmpType == "name"){
			tmpParam = idx_pName.getValue();
		
		}else if(tmpType == "email"){
			tmpParam = idx_pEmail.getValue();
		}
		
		dma_Search.set("searchParam",tmpParam.trim());
	};
	
	//sbm_select 실행 후
	scwin.sbm_select_submitdone = function(e) {
		if(e.responseJSON.msgCode == "S"){
			var firstYn = dma_Search.get( "TOTAL_YN" );
				
			// 최초 조회일 경우에만 전체 건수를 구하여 전역변수에 담는다.
			if (firstYn == "Y") {
				scwin.totalCnt = e.responseJSON.TOTAL_CNT;
			}
			dlt_Member.setJSON( e.responseJSON.dlt_Member, scwin.append );
		}
		
	};
	
	//데이터 조회 이전에 수정 데이터가 있는 경우
	scwin.btn_Search_confirm_callback = function(returnValue){
		if(returnValue === true){
			$p.executeSubmission( "sbm_selectAll" );
		}
	};
	
	//grid의 cell click 시
	scwin.grd_Member_oncellclick = function(row,col) {
		var colId = this.getColumnID( col );
		var rowJSON,rowStatus;
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
	
	// scroll end 시 추가 내용 조회 
	scwin.grd_Member_onscrollend = function() {
		var startRow = dlt_Member.getRowCount();
			
		// 전체 건수보다 조회된 건수가 작을 경우에만 추가 조회를 한다.
		if (scwin.totalCnt > startRow) {
			scwin.append = true;
			scwin.searchMain(startRow, "N");
		}
	};
	
	scwin.dlt_Member_ondataload = function() {
		spnTotal.setLabel( dlt_Member.getRowCount() );
	};
	
	scwin.sbm_select_submit = function(e) {
		scwin.setSearchParam();
	};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'section_desc dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'그리드뷰에서 ScrollEnd 방식의 조회가 구현되어있다.',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'searchbox dmb',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'검색&nbsp;조건'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'ofh fl'},E:[{T:1,N:'xf:select1',A:{disabledClass:'w2selectbox_disabled',appearance:'minimal',chooseOptionLabel:'-전체-',direction:'auto',chooseOption:'true',class:'fl dmr',displayMode:'label',selectedData:'true',optionOrder:'false','ev:onviewchange':'scwin.sbx_SearchType_onviewchange',id:'sbx_SearchType',ref:'data:dma_Search.searchType',style:'width: 100px;',allOption:'',disabled:'false',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이름'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'name'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이메일'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'email'}]}]}]}]},{T:1,N:'xf:switch',A:{id:'swh_SearchParamBox',caseClass:'',motionDisplay:'',style:'width: 200px;height: 22px;position: relative;',class:'fl'},E:[{T:1,N:'xf:case',A:{id:'case_',style:'position:absolute;width:100%;height:100%;',class:''}},{T:1,N:'xf:case',A:{id:'case_name',style:'position:absolute;width:100%;height:100%;',class:''},E:[{T:1,N:'xf:input',A:{id:'idx_pName',style:'width:150px;'}}]},{T:1,N:'xf:case',A:{id:'case_email',style:'position:absolute;width:100%;height:100%;',class:''},E:[{T:1,N:'xf:input',A:{id:'idx_pEmail',style:'width:150px;'}}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch fr','ev:onclick':'scwin.btn_Search_onclick',id:'btn_Search',style:'width: 80px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'defaultbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titlebox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt',id:'',label:'사용자 목록',style:'',tagname:'h2'}},{T:1,N:'xf:input',A:{id:'ibx_fake',style:'width:0px;height:0px;border-style:none;'}},{T:1,N:'xf:group',A:{class:'fr ofh',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'line-height: 22px;',class:'dmr fl'},E:[{T:1,N:'w2:span',A:{id:'',dataType:'text',style:'',class:'df_total',label:'총',displayFormat:''}},{T:1,N:'w2:span',A:{id:'spnTotal',ref:'',dataType:'number',style:'',class:'df_total num',label:'0',displayFormat:'#,##0'}},{T:1,N:'w2:span',A:{id:'span2',dataType:'',style:'',class:'df_total',label:'건',displayFormat:''}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'800',class:'cm_grid',dataList:'dlt_Member',fixedColumnWithHidden:'true',id:'grd_Member',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 300px;',summaryAuto:'false',useShiftKey:'true',rowNumVisible:'true',rowNumWidth:'40',rowNumHeaderValue:'번호',visibleRowNum:'10',readOnly:'true',useFilterList:'true',autoFitFilterList:'true',rowStatusVisible:'true',rowStatusWidth:'40',rowStatusHeaderValue:'상태',fixedColumn:'1',tooltipDisplay:'true',tooltipShowAlways:'',focusMode:'row','ev:oncellclick':'scwin.grd_Member_oncellclick',useCtrlKey:'false','ev:onscrollend':'scwin.grd_Member_onscrollend'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column27',style:'height:30px;',inputType:'text',width:'86',displayMode:'label',value:'성명',sortable:'true',class:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column25',style:'height:30px;',inputType:'text',width:'59',displayMode:'label',value:'성별',sortable:'true',class:'',useFilter:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column23',style:'height:30px;',inputType:'text',width:'91',displayMode:'label',value:'입사일',sortable:'true',class:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column21',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'직책',sortable:'true',class:'',useFilter:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column19',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'직위',sortable:'true',class:'',useFilter:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column17',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'역할',sortable:'true',class:'',useFilter:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column15',style:'height:30px;',inputType:'text',width:'82',displayMode:'label',value:'담당업무',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column13',style:'height:30px;',inputType:'text',width:'195',displayMode:'label',value:'이메일'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column28',style:'height:30px;',inputType:'text',width:'104',displayMode:'label',value:'수정일'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'EMP_NM',style:'height:30px;',inputType:'text',width:'86',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'GENDER_CD',style:'height:30px;',inputType:'select',width:'59',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'JOIN_DATE',style:'height:30px;',inputType:'calendar',width:'91',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'DUTY_CD',style:'height:30px;',inputType:'select',width:'70',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'POSITION_CD',style:'height:30px;',inputType:'select',width:'70',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ROLE_CD',style:'height:30px;',inputType:'select',width:'70',displayMode:'label',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ASSIGNED_TASK',style:'height:30px;',inputType:'text',width:'82',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'EMAIL',style:'height:30px;',inputType:'text',width:'195',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'UPDATED_DATE',style:'height:30px',inputType:'text',width:'104',displayMode:'label'}}]}]}]}]}]}]}]}]})