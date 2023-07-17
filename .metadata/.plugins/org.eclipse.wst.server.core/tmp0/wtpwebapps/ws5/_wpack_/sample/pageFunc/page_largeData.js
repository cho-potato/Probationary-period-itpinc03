/*amd /sample/pageFunc/page_largeData.xml 10824 933722818599fc201ee7902a563859bc99e085201b364223f965901eb135ec20 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_Member',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:ondataload':'scwin.dlt_Member_ondataload','ev:oninsertrow':'scwin.dlt_Member_oninsertrow','ev:onremoverow':'scwin.dlt_Member_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name16',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'EMP_CD',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GENDER_CD',name:'성별',dataType:'text'}},{T:1,N:'w2:column',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'POSITION_CD',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DUTY_CD',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ROLE_CD',name:'역할',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IMAGE_PATH',name:'이미지경로',dataType:'text',defaultValue:'/img/blank.png'}},{T:1,N:'w2:column',A:{id:'CREATED_DATE',name:'생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPDATED_DATE',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'daoType',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_selectAll_json',ref:'data:json,[{"id":"dma_SearchParam"}]',target:'data:json,dlt_Member',action:'/edu/selectAllMemberList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중입니다.','ev:submit':'scwin.sbm_selectAll_json_submit','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_selectAll_array',ref:'data:json,[{"id":"dma_SearchParam"}]',target:'data:array,dlt_Member',action:'/edu/selectAllMemberList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중입니다.','ev:submit':'scwin.sbm_selectAll_array_submit','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',src:'/js/eduCommon.js'}},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
    //page onload event
	scwin.onpageload = function() {
		com.setCommonCode([
			{"code":"02","compID":"grd_Member:DUTY_CD"},
			{"code":"01","compID":"grd_Member:POSITION_CD"},
			{"code":"19","compID":"grd_Member:ROLE_CD"},
			{"code":"101","compID":"grd_Member:GENDER_CD"}
		]);
	};
	
	//[조회]버튼 클릭 시
	scwin.btn_Search_onclick = function() {
		var modLen = (dlt_Member.getModifiedIndex()).length;
		var msg;
		if(modLen > 0 && !confirm("반영되지 않은 데이터가 존재합니다. 데이터를 새로 로딩하시겠습니까?")){
			return;
		}
		
		$p.executeSubmission( "sbm_selectAll" );
	};
	
	//데이터 조회 이전에 수정 데이터가 있는 경우
	scwin.btn_Search_confirm_callback = function(returnValue){
		if(returnValue === true){
			$p.executeSubmission( "sbm_selectAll" );
		}
	};
	
	//data type에 따라 request 값 변경.  
	scwin.sbm_selectAll_json_submit = function(e) {
		dma_SearchParam.set( "daoType", "json" );
	};
	
	//data type에 따라 request 값 변경.
	scwin.sbm_selectAll_array_submit = function(e) {
		dma_SearchParam.set( "daoType", "array" );
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
		spn_MemCount.setValue( dlt_Member.getRowCount() );
	};
	
	scwin.btn_SearchDefault_onclick = function(e) {
		$p.executeSubmission( "sbm_selectAll_json" );
	};
	
	scwin.btn_SearchLargeHander_onclick = function(e) {
		$p.executeSubmission( "sbm_selectAll_array" );
	};
	
	
	
	
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'section_desc dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'기본 데이터 포맷(JSON)과 대용량 데이터 포맷(Array)을 DataList에 셋팅하기 위한 Submission의 설정 예시이다.',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'searchbox dmb ofh',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_SearchDefault_onclick',id:'btn_SearchDefault',style:'width:150px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'JSON 타입 조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_SearchLargeHander_onclick',id:'btn_SearchLargeHander',style:'width:150px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ARRAY 타입 조회'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'defaultbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titlebox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt',id:'',label:'사용자 목록',style:'',tagname:'h2'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'df_total dmr',dataType:'text',displayFormat:'',id:'',label:'열 : 11건, ',style:''}},{T:1,N:'w2:span',A:{class:'df_total',dataType:'text',displayFormat:'',id:'',label:'행 :',style:''}},{T:1,N:'w2:span',A:{class:'df_total num',id:'spn_MemCount',label:'0',style:'',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:span',A:{class:'df_total',id:'',label:'건',style:'',dataType:'text',displayFormat:''}}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'1200',class:'cm_grid',dataList:'dlt_Member',fixedColumnWithHidden:'true',id:'grd_Member',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 250px;',summaryAuto:'false',useShiftKey:'true',rowNumVisible:'true',rowNumWidth:'40',rowNumHeaderValue:'번호',visibleRowNum:'15',readOnly:'',useFilterList:'true',autoFitFilterList:'true',rowStatusVisible:'',rowStatusWidth:'',rowStatusHeaderValue:'','ev:onscrollend':'scwin.grd_Member_onscrollend'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column27',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'성명',sortable:'true',class:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column25',style:'height:30px;',inputType:'text',width:'53',displayMode:'label',value:'성별',sortable:'true',class:'',useFilter:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column23',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'등록일',sortable:'true',class:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column21',style:'height:30px;',inputType:'text',width:'62',displayMode:'label',value:'직책',sortable:'true',class:'',useFilter:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column19',style:'height:30px;',inputType:'text',width:'62',displayMode:'label',value:'직위',sortable:'true',class:'',useFilter:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column17',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'역할',sortable:'true',class:'',useFilter:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column15',style:'height:30px;',inputType:'text',width:'64',displayMode:'label',value:'담당업무',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column13',style:'height:30px;',inputType:'text',width:'176',displayMode:'label',value:'이메일'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column11',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'우편번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',style:'height:30px;',inputType:'text',width:'252',displayMode:'label',value:'주소1'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'height:30px;',inputType:'text',width:'104',displayMode:'label',value:'주소2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'EMP_NM',style:'height:30px;',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'GENDER_CD',style:'height:30px;',inputType:'select',width:'53',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'JOIN_DATE',style:'height:30px;',inputType:'calendar',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'POSITION_CD',style:'height:30px;',inputType:'select',width:'62',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'DUTY_CD',style:'height:30px;',inputType:'select',width:'62',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ROLE_CD',style:'height:30px;',inputType:'select',width:'70',displayMode:'label',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ASSIGNED_TASK',style:'height:30px;',inputType:'text',width:'64',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'EMAIL',style:'height:30px;',inputType:'text',width:'176',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ZIP_CD',style:'height:30px;',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ADDRESS1',style:'height:30px;',inputType:'text',width:'252',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ADDRESS2',style:'height:30px;',inputType:'text',width:'104',displayMode:'label'}}]}]}]}]}]}]}]}]})