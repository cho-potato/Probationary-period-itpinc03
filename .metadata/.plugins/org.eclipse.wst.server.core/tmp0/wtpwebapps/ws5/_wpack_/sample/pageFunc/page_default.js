/*amd /sample/pageFunc/page_default.xml 28848 f242864fc05a41ad2fae1b6c3b2db81f03376be27486538440eee9e093822b49 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'title',E:[{T:3,text:'사용자 관리'}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_Member',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:ondataload':'scwin.dlt_Member_ondataload','ev:oninsertrow':'scwin.dlt_Member_oninsertrow','ev:onremoverow':'scwin.dlt_Member_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'EMP_CD',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GENDER_CD',name:'성별',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'POSITION_CD',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DUTY_CD',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ROLE_CD',name:'역할',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IMAGE_PATH',name:'이미지경로',dataType:'text',defaultValue:'/img/blank.png',importFormatter:''}},{T:1,N:'w2:column',A:{id:'CREATED_DATE',name:'생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPDATED_DATE',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'count',name:'화면 행수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'page',name:'페이지 값',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prePage',name:'이전 페이지 값',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchType',name:'검색 타입',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchParam',name:'검색 파라메터',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'page',E:[{T:4,cdata:'1'}]}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_SearchResult'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'count',name:'count',dataType:'text',defaultValue:'1'}},{T:1,N:'w2:key',A:{id:'page',name:'page',dataType:'text',defaultValue:'1'}},{T:1,N:'w2:key',A:{id:'startNum',name:'startNum',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endNum',name:'endNum',dataType:'text'}},{T:1,N:'w2:key',A:{id:'totalCount',name:'totalCount',dataType:'text',defaultValue:'0'}}]},{T:1,N:'w2:data',A:{xmlns:''}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_select',ref:'data:json,[{"id":"dma_SearchParam"}]',target:'data:json,["dlt_Member","dma_SearchResult"]',action:'/edu/selectMemberList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중입니다.','ev:submit':'scwin.sbm_select_submit','ev:submitdone':'scwin.sbm_select_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_saveMember',ref:'data:json,[{"id":"dlt_Member","action":"modified"},"dma_SearchParam"]',target:'data:json,["dlt_Member","dma_SearchResult"]',action:'/edu/saveAndSelectMember.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveMember_submitdone','ev:submiterror':''}}]},{T:1,N:'script',A:{type:'text/javascript',src:'/js/postcode.v2.js'}},{T:1,N:'script',A:{type:'text/javascript',src:'/js/eduCommon.js'}},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
 
	imports("uiplugin.popup"); 
	
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
		var modArr = dlt_Member.getModifiedIndex();
		if(modArr.length > 0 && !confirm("반영되지 않은 데이터가 존재합니다. 데이터를 새로 로딩하시겠습니까?")){
			//pageList value 원복
			pgl_member.setValue( dma_SearchParam.get( "prePage") );
			return false;
		}
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
		grd_Member.setFocusedCell( 0, 0 );
	};
	
	//데이터 조회 이전에 수정 데이터가 있는 경우
	scwin.btn_Search_confirm_callback = function(returnValue){
		if(returnValue === true){
			$p.executeSubmission( "sbm_selectAll" );
		}
	};
	
	//주소 수정 버튼 클릭 시 
	scwin.btn_ZipSearch_onclick = function() {
		var curIdx =  grd_Member.getFocusedRowIndex();
		if(curIdx < 0){
			alert("선택된 행이 없습니다.");
			return;
		}
		var dataObj = {
			type : "json",
			data : {userInfo:dlt_Member.getRowJSON( curIdx ),"popId": "ZipPop"},
			name : "param"
		};
		
		var options = {
			id : "ZipPop",
			type : "wframePopup",
			popupName : "우편번호 검색", 
			title : "주소 검색",
			modal : true,
			dataObject : dataObj,
			width : "480",
			height : "420"   
		};
		
		$p.openPopup("/sample/pageFunc/popup_zipcode.xml", options);
	};
	
	//[ZipPop]팝업의 callback
	scwin.closeCallback_ZipPop= function(returnData){
		var jsonData;
		if(returnData){
			jsonData = JSON.parse(returnData);
			dlt_Member.setRowJSON( grd_Member.getFocusedRowIndex() , JSON.parse(returnData) , true );
			//{ZIP_CD: "683210", ADDRESS1: "울산 북구 정자동", ADDRESS2: "1111"}
		}
	};
	
	//주소 수정 버튼 클릭 시 
	scwin.btn_DaumZipSearch_onclick = function() {
		var curIdx =  grd_Member.getFocusedRowIndex();
		if(curIdx < 0){
			alert("선택된 행이 없습니다.");
			return;
		}
		
        daum.postcode.load(function(){
            new daum.Postcode({
                oncomplete: function(data) {
				//dlt_Member.setCellData( curIdx, "ZIP_CD",  data.postcode1+data.postcode2);
				dlt_Member.setCellData( curIdx, "ZIP_CD",  data.zonecode);
				dlt_Member.setCellData( curIdx, "ADDRESS1", data.jibunAddress );
				dlt_Member.setCellData( curIdx, "ADDRESS2", "" );
				/* data 
					address:"부산 동구 망양로 873"
					addressEnglish:"873, Mangyang-ro, Dong-gu, Busan, Korea"
					addressType:"R"
					apartment:"N"
					autoJibunAddress:""
					autoJibunAddressEnglish:""
					autoRoadAddress:""
					autoRoadAddressEnglish:""
					bcode:"2617010400"
					bname:"범일동"
					bname1:""
					bname2:"범일동"
					buildingCode:"2617010400114300026022086"
					buildingName:""
					hname:"범일1동"
					jibunAddress:"부산 동구 범일동 1430-26"
					jibunAddressEnglish:"1430-26, Beomil-dong, Dong-gu, Busan, Korea"
					postcode:"601-810"
					postcode1:"601"
					postcode2:"810"
					postcodeSeq:"041"
					query:"범일1동"
					roadAddress:"부산 동구 망양로 873"
					roadAddressEnglish:"873, Mangyang-ro, Dong-gu, Busan, Korea"
					roadname:"망양로"
					roadnameCode:"3125011"
					sido:"부산"
					sigungu:"동구"
					sigunguCode:"26170"
					userLanguageType:"K"
					userSelectedType:"R"
					zonecode:"48702"				
				*/
				
                }
            }).open({q:dlt_Member.getCellData( curIdx , "ADDRESS1" )});
        });            		
		
	};	
	
	
	//[사진 변경]클릭시
	scwin.btn_profileImage_onclick = function() {
		var curIdx =  grd_Member.getFocusedRowIndex();
		if(curIdx < 0){
			alert("선택된 행이 없습니다.");
			return;
		}
		
		var dataObj = {
					"type" : "json",
					"data" : {"popId": "ImagePop"},
					"name" : "param"
				};
		
		var options = {
					id : "ImagePop",
					type : "wframePopup",
					popupName : "이미지 검색", 
					width : "450px",
					height : "400px",
					top : "130px",
					left : "250px",
					modal : true,
					dataObject : dataObj
				};
		$p.openPopup("/sample/pageFunc/popup_imagePreview.xml", options);
	};
	
	//[ImagePop] 팝업 callback
	scwin.closeCallback_ImagePop  = function(dataStr){
		dlt_Member.setCellData( grd_Member.getFocusedRowIndex() , "IMAGE_PATH" , dataStr );
	};
	
	scwin.setDispZipCd = function(curVal){
		if(curVal.length < 6){
			return curVal;
		}
		return curVal.replace(/(\d{3})/,"$1-");
	};
	
	//[행추가]
	scwin.btn_InsertMember_onclick = function() {
		//dlt_Member.insertRow( 0 );	//insertRow의 경우 빈 데이터가 삽입. 이런 경우 데이터 객체의 컬럼 속성 중 defaultValue를 사용해도 된다.
		dlt_Member.insertJSON( 0 , [{"GENDER_CD":"M", "JOIN_DATE":$p.getCurrentServerDate( "yyyyMMdd" )}] );
		grd_Member.setFocusedCell( 0 , "EMP_NM");
		idx_EMP_NM.focus();
	};
	
	//[행삭제]
	scwin.btn_RemoveMember_onclick = function() {
		var idx = grd_Member.getFocusedRowIndex();
		
		if(idx < 0){
			alert("삭제할 행을 선택하십시오.");
			return;
		}
		if(dlt_Member.getRowStatus( idx ) == "D"){
			dlt_Member.undeleteRow( idx );
		}else{
			dlt_Member.deleteRow( idx );
		}
		
		
	};
	
	//[저장]버튼 클릭 시
	scwin.btn_Save_onclick = function() {
		if(!confirm("저장하시겠습니까?")){return;}
		
		var modIdxArr = dlt_Member.getModifiedIndex();
		var modDataArr = dlt_Member.getModifiedJSON();
		var modDataArrLen = modDataArr.length;
		var i,j,modData,tmpVal,colNm;
		var checkArr = ["EMP_NM","EMAIL"];
		var checkArrLen = checkArr.length; 
		if(modDataArrLen === 0){
			alert("저장할 데이터가 없습니다");
			return;
		}
		
		try{
			for(i=0;i<modDataArrLen;i++){
				modData = modDataArr[i];
				if(modData.rowStatus == "D")continue;
				
				for(j=0;j<checkArrLen;j++){
					colNm = checkArr[j];
					tmpVal = modData[colNm].trim();
					if(tmpVal === ""){
						throw dlt_Member.getColumnName( colNm )+"는 필수 입력입니다.";
					}
				}
			}
			
			$p.executeSubmission( "sbm_saveMember" );
		}catch(ex){
			alert(ex);
			grd_Member.setFocusedCell( modIdxArr[i] , colNm);
			$p.comp["idx_"+colNm].focus();
		}
		
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
	
	//grid의 cell click 시
	scwin.grd_Member_oncellclick = function(row,col) {
		var colId = this.getColumnID( col );
		var rowJSON,rowStatus;
		
	};
	
	scwin.sbm_saveMember_submitdone = function(e) {
		var rsObj = e.responseJSON;
		alert(rsObj.msg);
		
		if(rsObj.msgCode == "S"){
			scwin.setPageInfo();
			//console.log(rsObj.rsObj);
		}
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
	
	//page onload event
	scwin.onpageload = function() {
		//코드 데이터 불러오기 (공통함수 이용함)
		com.setCommonCode([
				{"code":"02","compID":"sbx_MemDuty,grd_Member:DUTY_CD"},
				{"code":"01","compID":"sbx_MemPosition,grd_Member:POSITION_CD"},
				{"code":"19","compID":"ccb_MemRole,grd_Member:ROLE_CD"},
				{"code":"101","compID":"rad_MemGender,grd_Member:GENDER_CD"}
		]);
		
		//데이터 조회 
		scwin.selectMemeberList(true);
	};
	
	

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.w2radio_label:before{position:absolute;left:1px;top:5px;content:none;display:inline-block;width:20px;height:20px;border:1px solid #cfd5d8;box-sizing:border-box;border-radius:50%;background:#fff}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'section_desc dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'그리드뷰와 연계한 추가/수정/삭제 기능, 검색 기능, 팝업 연계 등이 구현되어있다.',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'searchbox dmb',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'검색&nbsp;조건'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'ofh fl'},E:[{T:1,N:'xf:select1',A:{disabledClass:'w2selectbox_disabled',appearance:'minimal',chooseOptionLabel:'-전체-',direction:'auto',chooseOption:'true',class:'fl dmr',displayMode:'label',selectedData:'true',optionOrder:'false','ev:onviewchange':'scwin.sbx_SearchType_onviewchange',id:'sbx_SearchType',ref:'data:dma_SearchParam.searchType',style:'width: 100px;',allOption:'',disabled:'false',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이름'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'name'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이메일'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'email'}]}]}]}]},{T:1,N:'xf:switch',A:{id:'swh_SearchParamBox',caseClass:'',motionDisplay:'',style:'width: 200px;height: 22px;position: relative;',class:'fl'},E:[{T:1,N:'xf:case',A:{id:'case_',style:'position:absolute;width:100%;height:100%;',class:''}},{T:1,N:'xf:case',A:{id:'case_name',style:'position:absolute;width:100%;height:100%;',class:''},E:[{T:1,N:'xf:input',A:{id:'idx_pName',style:'width:150px;'}}]},{T:1,N:'xf:case',A:{id:'case_email',style:'position:absolute;width:100%;height:100%;',class:''},E:[{T:1,N:'xf:input',A:{id:'idx_pEmail',style:'width:150px;'}}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch fr','ev:onclick':'scwin.btn_Search_onclick',id:'btn_Search',style:'width: 80px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'defaultbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.btn_Save_onclick',id:'btn_Save',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.btn_RemoveMember_onclick',id:'btn_RemoveMember',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행 삭제/취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.btn_InsertMember_onclick',id:'btn_InsertMember',style:'margin-right: 5px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행 추가'}]}]}]},{T:1,N:'xf:group',A:{class:'titlebox',id:'',style:'margin-top: 10px;'},E:[{T:1,N:'w2:textbox',A:{class:'df_tt',id:'',label:'사용자 목록',style:'',tagname:'h2'}},{T:1,N:'xf:input',A:{id:'ibx_fake',style:'width:0px;height:0px;border-style:none;'}},{T:1,N:'xf:group',A:{class:'fr ofh',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'line-height: 22px;',class:'dmr fl'},E:[{T:1,N:'w2:span',A:{id:'',ref:'data:dma_SearchResult.page',dataType:'number',style:'',class:'df_total num',label:'0',displayFormat:'#,##0'}},{T:1,N:'w2:span',A:{id:'',dataType:'text',style:'',class:'df_total dmr',label:'/',displayFormat:''}},{T:1,N:'w2:span',A:{id:'spn_TotalPage',dataType:'number',style:'',class:'df_total dmr',label:'0',displayFormat:'#,##0 페이지'}},{T:1,N:'w2:span',A:{id:'',dataType:'text',style:'',class:'df_total',label:'(총',displayFormat:''}},{T:1,N:'w2:span',A:{id:'',ref:'data:dma_SearchResult.totalCount',dataType:'number',style:'',class:'df_total num',label:'0',displayFormat:'#,##0'}},{T:1,N:'w2:span',A:{id:'span2',dataType:'',style:'',class:'df_total',label:'건)',displayFormat:''}}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'fl',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label','ev:onviewchange':'scwin.sbx_member_rowCount_onviewchange',id:'sbx_member_rowCount',ref:'data:dma_SearchParam.count',style:'width: 110px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'10건씩 보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'50건씩 보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'100건씩 보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'500건씩 보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1,000건씩 보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1000'}]}]}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'800',class:'cm_grid',dataList:'dlt_Member',fixedColumnWithHidden:'true',id:'grd_Member',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 180px;',summaryAuto:'false',useShiftKey:'true',rowNumVisible:'true',rowNumWidth:'40',rowNumHeaderValue:'번호',visibleRowNum:'10',readOnly:'true',useFilterList:'true',autoFitFilterList:'true',rowStatusVisible:'true',rowStatusWidth:'40',rowStatusHeaderValue:'상태',fixedColumn:'1',tooltipDisplay:'true',tooltipShowAlways:'',focusMode:'row','ev:oncellclick':'scwin.grd_Member_oncellclick',useCtrlKey:'false'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column27',style:'height:30px;',inputType:'text',width:'86',displayMode:'label',value:'성명',sortable:'true',class:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column25',style:'height:30px;',inputType:'text',width:'59',displayMode:'label',value:'성별',sortable:'true',class:'',useFilter:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column23',style:'height:30px;',inputType:'text',width:'91',displayMode:'label',value:'입사일',sortable:'true',class:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column21',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'직책',sortable:'true',class:'',useFilter:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column19',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'직위',sortable:'true',class:'',useFilter:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column17',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'역할',sortable:'true',class:'',useFilter:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column15',style:'height:30px;',inputType:'text',width:'82',displayMode:'label',value:'담당업무',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column13',style:'height:30px;',inputType:'text',width:'195',displayMode:'label',value:'이메일'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column28',style:'height:30px;',inputType:'text',width:'104',displayMode:'label',value:'수정일'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'EMP_NM',style:'height:30px;',inputType:'text',width:'86',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'GENDER_CD',style:'height:30px;',inputType:'select',width:'59',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'JOIN_DATE',style:'height:30px;',inputType:'calendar',width:'91',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'DUTY_CD',style:'height:30px;',inputType:'select',width:'70',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'POSITION_CD',style:'height:30px;',inputType:'select',width:'70',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ROLE_CD',style:'height:30px;',inputType:'select',width:'70',displayMode:'label',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'ASSIGNED_TASK',style:'height:30px;',inputType:'text',width:'82',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'EMAIL',style:'height:30px;',inputType:'text',width:'195',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'UPDATED_DATE',style:'height:30px',inputType:'text',width:'104',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'defaultbox dp',id:'',style:''},E:[{T:1,N:'w2:pageList',A:{displayFormat:'#',id:'pgl_member',style:'',pageSize:'10',displayButtonType:'display','ev:onviewchange':'scwin.pgl_member_onviewchange'}}]}]},{T:1,N:'xf:group',A:{class:'defaultbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt',id:'',label:'사용자 정보 상세',style:'',tagname:'h2'}}]},{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb dmb',id:'tbl_MemberForm',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'성명'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:input',A:{displaymessage:'',id:'idx_EMP_NM',mandatory:'',maxlength:'',minByteLength:'',minlength:'',placeholder:'필수입력입니다.',ref:'data:dlt_Member.EMP_NM',style:'',userData1:'chk',validator:'',class:'defSize'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'사진\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'xf:image',A:{class:'dmb',id:'img_profile',ref:'data:dlt_Member.IMAGE_PATH',src:'about:blank',style:'width: 100px;height: 100px;'}},{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch','ev:onclick':'scwin.btn_profileImage_onclick',id:'btn_profileImage',style:'width:100px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사진 변경'}]}]}]},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'입사일'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',dateValidCheck:'true',focusOnDateSelect:'false',footerDiv:'false',id:'',ref:'data:dlt_Member.JOIN_DATE',renderDiv:'true',renderType:'component',rightAlign:'false',setCurrentDate:'',style:'',weekStartsOn:'0',class:'defSize'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'성별'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',id:'rad_MemGender',ref:'data:dlt_Member.GENDER_CD',rows:'1',selectedIndex:'0',style:'min-height: 21px;min-width: 50px;'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'이메일\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{displaymessage:'',id:'idx_EMAIL',mandatory:'',placeholder:'필수입력입니다.',ref:'data:dlt_Member.EMAIL',style:'width:100%;',userData1:'chk:email'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'직위'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'sbx_MemPosition',ref:'data:dlt_Member.POSITION_CD',style:'',submenuSize:'auto',class:'defSize'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'직책'},{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'sbx_MemDuty',ref:'data:dlt_Member.DUTY_CD',style:'',submenuSize:'auto',class:'defSize'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'역할\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'ccb_MemRole',ref:'data:dlt_Member.ROLE_CD',style:'',submenuSize:'auto',chooseOptionLabel:'',class:'defSize'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'담당업무\n						'},{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'',ref:'data:dlt_Member.ASSIGNED_TASK',style:'',class:'defSize'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'주소'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:input',A:{class:'mb5 mr5',dataType:'text',displayFormat:'',displayFormatter:'scwin.setDispZipCd',displaymessage:'','ev:onclick':'scwin.btn_ZipSearch_onclick',id:'',mandatory:'',readOnly:'true',ref:'data:dlt_Member.ZIP_CD',style:'width: 60px;',userData1:'chk'}},{T:1,N:'xf:input',A:{class:'mb5 dmr ch100','ev:onclick':'scwin.btn_ZipSearch_onclick',id:'',readOnly:'true',ref:'data:dlt_Member.ADDRESS1',style:'width: 200px;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_ZipSearch_onclick',id:'btn_ZipSearch',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'우편번호'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_DaumZipSearch_onclick',id:'btn_DaumZipSearch',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Daum 우편번호'}]}]},{T:1,N:'xf:input',A:{class:'',displaymessage:'',id:'',mandatory:'',readOnly:'',ref:'data:dlt_Member.ADDRESS2',style:'width: 100%;',userData1:''}}]}]}]}]}]}]}]})