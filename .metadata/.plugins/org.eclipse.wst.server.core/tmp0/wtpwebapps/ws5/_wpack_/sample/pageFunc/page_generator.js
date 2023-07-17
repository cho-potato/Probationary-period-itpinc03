/*amd /sample/pageFunc/page_generator.xml 22046 ad8b79ca10559551757108193823fd5941c43d93b578a6b5009438185fb0dd2a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_Member',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:oncelldatachange':'scwin.dlt_Member_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name16',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'EMP_CD',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GENDER_CD',name:'성별',dataType:'text'}},{T:1,N:'w2:column',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DUTY_CD',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'POSITION_CD',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ROLE_CD',name:'역할',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IMAGE_PATH',name:'이미지경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CREATED_DATE',name:'생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPDATED_DATE',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'count',name:'화면 행수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'page',name:'페이지 수',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'page',E:[{T:4,cdata:'1'}]}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_SearchResult'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'count',name:'count',dataType:'text',defaultValue:'1'}},{T:1,N:'w2:key',A:{id:'page',name:'page',dataType:'text',defaultValue:'1'}},{T:1,N:'w2:key',A:{id:'startNum',name:'startNum',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endNum',name:'endNum',dataType:'text'}},{T:1,N:'w2:key',A:{id:'totalCount',name:'totalCount',dataType:'text',defaultValue:'0'}}]},{T:1,N:'w2:data',A:{xmlns:''}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_select',ref:'data:json,[{"id":"dma_SearchParam"}]',target:'data:json,["dlt_Member","dma_SearchResult"]',action:'/edu/selectMemberList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중입니다.','ev:submit':'scwin.sbm_select_submit','ev:submitdone':'scwin.sbm_select_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',src:'/js/eduCommon.js'}},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
 
	imports("uiplugin.popup");

	scwin.selectMemeberList = function(){
		$p.executeSubmission( "sbm_select" );
	};
	
	//[조회]버튼 클릭 시
	scwin.btn_Search_onclick = function() {
		//첫 페이지로 셋팅.
		dma_SearchParam.set( "page" , 1 );
		scwin.selectMemeberList();	
	};
	
	//sbm_select 실행 전  
	scwin.sbm_select_submit = function(e) {
	};
	
	//sbm_select 실행 후
	scwin.sbm_select_submitdone = function(e) {
		scwin.setPageInfo();
		scwin.createMemeberTabel();
	};
	
	//주소 수정 버튼 클릭 시 
	scwin.btn_ZipSearch_onclick = function() {
		var curIdx =  dlt_Member.getRowPosition();
		if(curIdx === null){
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
		
		$p.openPopup("popup_zipcode.xml", options);
	};
	
	//[ZipPop]팝업의 callback
	scwin.closeCallback_ZipPop = function(returnData){
		if(returnData){
			var rowIdx = dlt_Member.getRowPosition();
			var zipData =  JSON.parse(returnData);
			dlt_Member.setRowJSON( rowIdx , zipData , true );
			//{ZIP_CD: "683210", ADDRESS1: "울산 북구 정자동", ADDRESS2: "1111"}
			
			//setRowJSON의 경우 dataList의 oncelldatachange이 발생하지 않기 때문에 상태 설정 function 호출
			scwin.setCompValue(rowIdx, dlt_Member.getRowStatus(rowIdx), "ZIP_CD", zipData.ZIP_CD );
			scwin.setCompValue(rowIdx, null, "ADDRESS1", zipData.ADDRESS1 );
			scwin.setCompValue(rowIdx, null, "ADDRESS2", zipData.ADDRESS2 );
		}
	};
	
	//우편번호 포맷
	scwin.setDispZipCd = function(curVal){
		if(curVal.length < 6){
			return curVal;
		}
		return curVal.replace(/(\d{3})/,"$1-");
	};
		
	//dlt_Member에 data가 로딩 된 후 totalCount
	scwin.createMemeberTabel = function(){
		gen_member.removeAll();
		var totCount = dlt_Member.getRowCount();
		var allData = dlt_Member.getAllJSON();
		var curDataObj = null, i, j, fieldNm;
		var dispArr = ["EMP_NM","GENDER_CD","JOIN_DATE","DUTY_CD","POSITION_CD","ROLE_CD","ASSIGNED_TASK","EMAIL","ZIP_CD","ADDRESS1","ADDRESS2"];
		var dispArrLen = dispArr.length;
		var startNum = dma_SearchResult.get("startNum");
		
		for(i=0;i<totCount;i++){
			gen_member.insertChild();
			curDataObj = allData[i];
			
			scwin.setCompValue(i, null, "NUM", ++startNum);
			
			for(j=0;j<dispArrLen;j++){
				fieldNm = dispArr[j];
				scwin.setCompValue(i, null, fieldNm, curDataObj[fieldNm]);
			}
		}
	};
	
	//Generator 하위 컴포넌트의 value와 title 설정.
	scwin.setCompValue = function(rowIdx,rowStatus,fieldNm,compValue){
		var idPrefix = "gen_member_";
		
		if(rowStatus){
			if(rowStatus === "U"){
				gen_member.getChild( rowIdx , idPrefix+"ROW_STATUS").addClass("w2grid_rowStatus_U");
			}else if(rowStatus === "R"){
				gen_member.getChild( rowIdx , idPrefix+"ROW_STATUS").removeClass("w2grid_rowStatus_U");
			}
		}
		
		if(!fieldNm){ return; }
		var compObj = gen_member.getChild( rowIdx , idPrefix+fieldNm);
		var compType = compObj.getPluginName();
		
		compObj.setValue(compValue);
		
		if(compType === "selectbox"){
			compObj.setTitle(compObj.getText());
		}else{
			//compObj.setTitle(compValue);
			compObj.setTitle(compObj.getFormatValue());
		}
	};
	
	//PageList의  value가 변경되었을때.
	scwin.pgl_member_onviewchange = function(info) {
		dma_SearchParam.set( "page" , info.newSelectedIndex );
		scwin.selectMemeberList();
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
		
	};
	
	//Generator의 row가 클릭되었을 때.
	scwin.gen_memberRow_onclick = function(e) {
		var idx = this.getGeneratedIndex();
		
		dlt_Member.setRowPosition( idx );
		
		//selected style 처리.
		var preRowId = gen_member.getUserData("preRowId"); 
		if(preRowId){ window[preRowId].removeClass("cm_genSelected"); }
		this.addClass("cm_genSelected");
		gen_member.setUserData("preRowId",this.getID());
	};
	
	scwin.dlt_Member_oncelldatachange = function(info) {
	    scwin.setCompValue(info.rowIndex, dlt_Member.getRowStatus( info.rowIndex ), info.colID, info.newValue);
	};
	
	//page onload event
	scwin.onpageload = function() {
		com.setCommonCode([
				{"code":"01","compID":"sbx_MemPosition"},
				{"code":"02","compID":"sbx_MemDuty"},
				{"code":"19","compID":"ccb_MemRole"},
				{"code":"101"}
		]);
		
		scwin.selectMemeberList();
	};
	
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'section_desc dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'GridView의 기능을 Generator로 구현한 예시이다.',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'searchbox dmb',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table',adaptive:'',adaptiveThreshold:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'조회&nbsp;건수'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'',style:'',submenuSize:'auto',ref:'data:dma_SearchParam.count',class:'defSize'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'10건'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'50건'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'100건'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'500건'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1,000건'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1000'}]}]}]}]},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch','ev:onclick':'scwin.btn_Search_onclick',id:'btn_Search',style:'width: 80px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'defaultbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titlebox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt',id:'',label:'사용자 목록',style:'',tagname:'h2'}},{T:1,N:'xf:input',A:{id:'ibx_fake',style:'width:0px;height:0px;border-style:none;'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'df_total num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',ref:'data:dma_SearchResult.page',style:''}},{T:1,N:'w2:span',A:{class:'df_total dmr',dataType:'text',displayFormat:'',id:'',label:'/',style:''}},{T:1,N:'w2:span',A:{class:'df_total dmr',dataType:'number',displayFormat:'#,##0 페이지',id:'spn_TotalPage',label:'0',style:''}},{T:1,N:'w2:span',A:{class:'df_total',dataType:'text',displayFormat:'',id:'',label:'(총',style:''}},{T:1,N:'w2:span',A:{class:'df_total num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',ref:'data:dma_SearchResult.totalCount'}},{T:1,N:'w2:span',A:{class:'df_total',dataType:'',displayFormat:'',id:'span2',label:'건)',style:''}}]}]},{T:1,N:'xf:group',A:{id:'',style:'min-height:180px;height: 350px;overflow: auto;',class:'defaultbox'},E:[{T:1,N:'xf:group',A:{id:'',style:'width: 100%;min-width: 1000px;',class:'w2tb',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:7.69%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:7.69%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:7.69%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:7.69%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:7.69%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:7.69%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:7.69%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'thead'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n									번호\n									'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n									상태\n									'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n									성명\n									'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n									성별\n									'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'등록일'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'직위'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'직책'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n									역할\n									'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n									담당업무\n									'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n									이메일\n									'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n									우편번호\n									'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n									주소1\n									'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n									주소2\n									'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]}]}]},{T:1,N:'w2:generator',A:{id:'gen_member',style:'',tagname:'tbody',class:'cm_genTbody'},E:[{T:1,N:'xf:group',A:{style:'cursor: pointer;',tagname:'tr',id:'gen_memberRow','ev:onclick':'scwin.gen_memberRow_onclick',class:'cm_genTr'},E:[{T:1,N:'w2:textbox',A:{id:'gen_member_NUM',style:'',class:'w2tb_td',label:'',tagname:'td'}},{T:1,N:'w2:textbox',A:{id:'gen_member_ROW_STATUS',class:'w2tb_td',tagname:'td'}},{T:1,N:'w2:textbox',A:{id:'gen_member_EMP_NM',style:'',class:'w2tb_td',label:'',tagname:'td'}},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',direction:'auto',disabled:'true',disabledClass:'cm_genSelectbox_disabled',displayMode:'label',id:'gen_member_GENDER_CD',style:'width:auto;',submenuSize:'auto',tooltipDisplay:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_CmCode101'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]},{T:1,N:'w2:textbox',A:{id:'gen_member_JOIN_DATE',style:'',class:'w2tb_td',label:'',tagname:'td',displayFormat:'yyyy-MM-dd',dataType:'date'}},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'',direction:'auto',disabled:'true',disabledClass:'cm_genSelectbox_disabled',displayMode:'label',id:'gen_member_POSITION_CD',ref:'',style:'width:auto;',submenuSize:'auto',tooltipDisplay:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_CmCode01'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'',direction:'auto',disabled:'true',disabledClass:'cm_genSelectbox_disabled',displayMode:'label',id:'gen_member_DUTY_CD',labelWidthAuto:'',ref:'',style:'width:auto;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_CmCode02'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',direction:'auto',disabled:'true',disabledClass:'cm_genSelectbox_disabled',displayMode:'label',id:'gen_member_ROLE_CD',style:'width:auto;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_CmCode19'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]},{T:1,N:'w2:textbox',A:{id:'gen_member_ASSIGNED_TASK',style:'',class:'w2tb_td',label:'',tagname:'td'}},{T:1,N:'w2:textbox',A:{id:'gen_member_EMAIL',style:'',class:'w2tb_td longTxt tal',label:'',tagname:'td'}},{T:1,N:'w2:textbox',A:{id:'gen_member_ZIP_CD',style:'',class:'w2tb_td',label:'',tagname:'td',dataType:'text',displayFormat:'',displayFormatter:'scwin.setDispZipCd'}},{T:1,N:'w2:textbox',A:{id:'gen_member_ADDRESS1',style:'',class:'w2tb_td longTxt tal',label:'',tagname:'td'}},{T:1,N:'w2:textbox',A:{id:'gen_member_ADDRESS2',style:'',class:'w2tb_td longTxt tal',label:'',tagname:'td'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding:10px;'},E:[{T:1,N:'w2:pageList',A:{displayButtonType:'display',displayFormat:'#','ev:onviewchange':'scwin.pgl_member_onviewchange',id:'pgl_member',pageSize:'10',style:''}}]}]},{T:1,N:'xf:group',A:{class:'titlebox',id:'',style:'',tagname:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt',id:'',label:'사용자 정보 상세',style:'',tagname:'h2'}}]},{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'width:100%;',tagname:'table',adaptive:'layout',adaptiveThreshold:'600'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'성명'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_FormMemberName',style:'',ref:'data:dlt_Member.EMP_NM',placeholder:'필수입력입니다.',class:'defSize'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'등록일'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'false',id:'',renderDiv:'true',renderType:'component',style:'',weekStartsOn:'0',ref:'data:dlt_Member.JOIN_DATE',class:'defSize'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'직위'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'',class:'defSize',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'sbx_MemPosition',ref:'data:dlt_Member.POSITION_CD',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'직책'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'',class:'defSize',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'sbx_MemDuty',ref:'data:dlt_Member.DUTY_CD',style:'',submenuSize:'auto',labelWidthAuto:''},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'역할'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'ccb_MemRole',style:'',submenuSize:'auto',ref:'data:dlt_Member.ROLE_CD',chooseOptionLabel:'',class:'defSize'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'담당업무'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'',style:'',ref:'data:dlt_Member.ASSIGNED_TASK',class:'defSize'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'이메일'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{id:'',style:'width:100%;',ref:'data:dlt_Member.EMAIL'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'주소'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:input',A:{id:'',style:'width: 60px;',class:'mb5 mr5',ref:'data:dlt_Member.ZIP_CD',readOnly:'true',dataType:'text',displayFormat:'',displayFormatter:'scwin.setDispZipCd'}},{T:1,N:'xf:input',A:{id:'',style:'width: 200px;',class:'mb5 dmr ch100',ref:'data:dlt_Member.ADDRESS1',readOnly:'true'}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_ZipSearch_onclick',id:'btn_ZipSearch',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'우편번호'}]}]},{T:1,N:'xf:input',A:{id:'',style:'width: 100%;',class:'',ref:'data:dlt_Member.ADDRESS2',readOnly:'true'}}]}]}]}]}]}]}]})