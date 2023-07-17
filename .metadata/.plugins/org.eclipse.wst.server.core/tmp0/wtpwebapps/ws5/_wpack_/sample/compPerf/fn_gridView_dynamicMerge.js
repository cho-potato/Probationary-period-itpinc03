/*amd /sample/compPerf/fn_gridView_dynamicMerge.xml 25110 0fa1c61f61d2b9c6d084247efc001488d73af8958c7cbfdfa20f63b64fc24aef */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_member',saveRemovedData:'true','ev:ondataload':'scwin.dlt_member_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'EMP_CD',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GENDER_CD',name:'성별',dataType:'text'}},{T:1,N:'w2:column',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'POSITION_CD',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DUTY_CD',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ROLE_CD',name:'역할',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ASSIGNED_TASK',name:'업무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IMAGE_PATH',name:'이미지 경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CREATED_DATE',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPDATED_DATE',name:'수정일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_CmCode01'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'GRP_CD',name:'GRP_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_CD',name:'CODE_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_NM',name:'CODE_NM',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:'',use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'임원'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'03'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'팀원'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'04'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'협력'}]}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_CmCode02'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'GRP_CD',name:'GRP_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_CD',name:'CODE_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_NM',name:'CODE_NM',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:'',use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'이사'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'03'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'팀장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'08'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'부장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'04'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'차장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'05'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'과장'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'06'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'대리'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'07'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'사원'}]}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_CmCode19'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'GRP_CD',name:'GRP_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_CD',name:'CODE_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_NM',name:'CODE_NM',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:'',use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'19'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'PM'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'19'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'PL'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'19'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'03'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'분석/설계'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'19'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'04'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'개발'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'19'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'05'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'퍼블리셔'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'19'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'06'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'컨설팅'}]}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_CmCode101'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'GRP_CD',name:'GRP_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_CD',name:'CODE_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_NM',name:'CODE_NM',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:'',use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'101'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'M'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'남'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'GRP_CD',E:[{T:4,cdata:'101'}]},{T:1,N:'CODE_CD',E:[{T:4,cdata:'F'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'여'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_statistic',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'category1',name:'대분류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'category2',name:'중분류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_1',name:'1월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_2',name:'2월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_3',name:'3월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_4',name:'4월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_5',name:'5월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_6',name:'6월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_7',name:'7월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_8',name:'8월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_9',name:'9월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_10',name:'10월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_11',name:'11월'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_12',name:'12월'}}]},{T:1,N:'w2:data',A:{use:'true',xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'소설'}]},{T:1,N:'category2',E:[{T:4,cdata:'한국소설'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_3',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_4',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_5',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_6',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_7',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_8',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_9',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_10',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_11',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_12',E:[{T:4,cdata:'100'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'소설'}]},{T:1,N:'category2',E:[{T:4,cdata:'한국소설'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_3',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_4',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_5',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_6',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_7',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_8',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_9',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_10',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_11',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_12',E:[{T:4,cdata:'300'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'소설'}]},{T:1,N:'category2',E:[{T:4,cdata:'한국소설'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_3',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_4',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_5',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_6',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_7',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_8',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_9',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_10',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_11',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_12',E:[{T:4,cdata:'300'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'소설'}]},{T:1,N:'category2',E:[{T:4,cdata:'영미소설'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_3',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_4',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_5',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_6',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_7',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_8',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_9',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_10',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_11',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_12',E:[{T:4,cdata:'400'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'소설'}]},{T:1,N:'category2',E:[{T:4,cdata:'영미소설'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'500'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_3',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_4',E:[{T:4,cdata:'500'}]},{T:1,N:'row3_5',E:[{T:4,cdata:'500'}]},{T:1,N:'row3_6',E:[{T:4,cdata:'500'}]},{T:1,N:'row3_7',E:[{T:4,cdata:'500'}]},{T:1,N:'row3_8',E:[{T:4,cdata:'500'}]},{T:1,N:'row3_9',E:[{T:4,cdata:'500'}]},{T:1,N:'row3_10',E:[{T:4,cdata:'500'}]},{T:1,N:'row3_11',E:[{T:4,cdata:'500'}]},{T:1,N:'row3_12',E:[{T:4,cdata:'500'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'시/에세이'}]},{T:1,N:'category2',E:[{T:4,cdata:'에세이'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'600'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'600'}]},{T:1,N:'row3_3',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_4',E:[{T:4,cdata:'700'}]},{T:1,N:'row3_5',E:[{T:4,cdata:'600'}]},{T:1,N:'row3_6',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_7',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_8',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_9',E:[{T:4,cdata:'600'}]},{T:1,N:'row3_10',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_11',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_12',E:[{T:4,cdata:'600'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'시/에세이'}]},{T:1,N:'category2',E:[{T:4,cdata:'에세이'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_3',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_4',E:[{T:4,cdata:'800'}]},{T:1,N:'row3_5',E:[{T:4,cdata:'700'}]},{T:1,N:'row3_6',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_7',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_8',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_9',E:[{T:4,cdata:'700'}]},{T:1,N:'row3_10',E:[{T:4,cdata:'100'}]},{T:1,N:'row3_11',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_12',E:[{T:4,cdata:'700'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'시/에세이'}]},{T:1,N:'category2',E:[{T:4,cdata:'시'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_3',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_4',E:[{T:4,cdata:'800'}]},{T:1,N:'row3_5',E:[{T:4,cdata:'800'}]},{T:1,N:'row3_6',E:[{T:4,cdata:'500'}]},{T:1,N:'row3_7',E:[{T:4,cdata:'500'}]},{T:1,N:'row3_8',E:[{T:4,cdata:'800'}]},{T:1,N:'row3_9',E:[{T:4,cdata:'900'}]},{T:1,N:'row3_10',E:[{T:4,cdata:'900'}]},{T:1,N:'row3_11',E:[{T:4,cdata:'800'}]},{T:1,N:'row3_12',E:[{T:4,cdata:'800'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'시/에세이'}]},{T:1,N:'category2',E:[{T:4,cdata:'시'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'500'}]},{T:1,N:'row3_3',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_4',E:[{T:4,cdata:'800'}]},{T:1,N:'row3_5',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_6',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_7',E:[{T:4,cdata:'600'}]},{T:1,N:'row3_8',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_9',E:[{T:4,cdata:'900'}]},{T:1,N:'row3_10',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_11',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_12',E:[{T:4,cdata:'100'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'getUserData',ref:'',target:'data:array,{"id":"dlt_member","key":"dlt_Member"}',action:'/sample/compList/data/largeData.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'','ev:submit':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
			scwin.onpageload = function() {
				$p.executeSubmission( "getUserData" );
			};
			
			scwin.dlt_member_ondataload = function() {
				this.multisort( {"sortIndex" : "GENDER_CD POSITION_CD DUTY_CD ROLE_CD", "sortOrder": "1 1 1 1"} );		
			};
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{id:'group4',style:'padding: 10px;',class:'section_desc'},E:[{T:1,N:'w2:textbox',A:{id:'section',style:'',label:'그리드뷰에서 제공하는 동적 병합 기능을 표현한 샘플이다.<br/>이 화면은 기능별 브라우저에 표현되는 방식과 성능을 비교하기 위해 만들어졌다.<br/>성능은 그리드뷰의 스크롤링을 할 때 표현되는 속도로 비교한다.<br/>브라우저의 표현 속도를 기준으로 권장하는 기능은 body column의 colMerge속성이다.<br/>( source : fn_gridView_dynamicMerge.xml )',localeRef:''}}]},{T:1,N:'w2:textbox',A:{class:'infoTxt dmb',id:'',label:'',localeRef:'INFO_TITLE_TOOLTIP',style:''}},{T:1,N:'w2:textbox',A:{id:'',style:'',class:'df_tt dmb',label:'GridView의 body column의 colMerge="true" 속성을 사용한 예시',tagname:'h2',toolTip:'이 기능은 컬럼이 실제로 병합되지 않은 각 tr간의 선을 보이지 않게 구현한 기능이다. 병합 데이터는 화면에 보여지는 첫번(top)째 행에 표현된다.세로 스크롤이 이동될 때 데이터만 변경되는 구조이다.'}},{T:1,N:'w2:gridView',A:{ignoreCellClick:'false',summaryAuto:'false',autoFit:'allColumn',ignoreToggleOnDisabled:'false',summaryOnlyAuto:'false',visibleRowNum:'15',class:'dmb cm_grid',defaultCellHeight:'24',rowNumVisible:'true',scrollByColumnAdaptive:'false',dataList:'data:dlt_member',id:'',applyAllColumnStyle:'false',readOnly:'true',style:'height: 280px;',useShiftKey:'true',scrollByColumn:'false',senseReader:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{id:'column25',blockSelect:'false',width:'70',inputType:'text',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column23',blockSelect:'false',width:'70',inputType:'text',value:'성명',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column26',blockSelect:'false',width:'166',inputType:'text',value:'이메일',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column21',blockSelect:'false',width:'70',inputType:'text',value:'성별',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column17',blockSelect:'false',width:'71',inputType:'text',value:'직급',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column15',blockSelect:'false',width:'94',inputType:'text',value:'역할',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column13',blockSelect:'false',width:'81',inputType:'text',value:'직책',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{id:'EMP_CD',blockSelect:'false',width:'70',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'EMP_NM',blockSelect:'false',width:'70',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'EMAIL',blockSelect:'false',width:'166',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'GENDER_CD',blockSelect:'false',ref:'',width:'70',inputType:'select',chooseOption:'',displayMode:'label',allOption:'',colMerge:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_CmCode101'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{id:'POSITION_CD',blockSelect:'false',ref:'',width:'71',inputType:'select',chooseOption:'',displayMode:'label',allOption:'',colMerge:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_CmCode02'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{id:'DUTY_CD',blockSelect:'false',ref:'',chooseOptionLabel:'미정',width:'94',inputType:'select',chooseOption:'true',displayMode:'label',allOption:'',colMerge:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_CmCode19'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{id:'ROLE_CD',blockSelect:'false',ref:'',chooseOptionLabel:'미정',width:'81',inputType:'select',chooseOption:'true',displayMode:'label',allOption:'',colMerge:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_CmCode01'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]}]}]}]},{T:1,N:'w2:textbox',A:{id:'',style:'',class:'df_tt dmb',label:'GridView의 mergeCells="bycol" 속성을 사용한 예시',tagname:'h2',toolTip:'이 기능은 컬럼이 실제로 병합된 기능이다. 병합 데이터는 화면에 병합된 행의 중앙(middle)에 표현된다. 세로 스크롤이 이동될 때 레이아웃과 데이터가 변경되는 구조이다.'}},{T:1,N:'w2:gridView',A:{ignoreCellClick:'false',summaryAuto:'false',autoFit:'allColumn',ignoreToggleOnDisabled:'false',summaryOnlyAuto:'false',visibleRowNum:'15',class:'dmb cm_grid',defaultCellHeight:'24',rowNumVisible:'true',mergeCells:'bycol',scrollByColumnAdaptive:'false',dataList:'data:dlt_member',id:'',applyAllColumnStyle:'false',readOnly:'true',style:'height: 280px;',useShiftKey:'true',scrollByColumn:'false',senseReader:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{id:'column25',blockSelect:'false',width:'70',inputType:'text',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column23',blockSelect:'false',width:'70',inputType:'text',value:'성명',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column26',blockSelect:'false',width:'166',inputType:'text',value:'이메일',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column21',blockSelect:'false',width:'70',inputType:'text',value:'성별',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column17',blockSelect:'false',width:'71',inputType:'text',value:'직급',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column15',blockSelect:'false',width:'94',inputType:'text',value:'역할',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column13',blockSelect:'false',width:'81',inputType:'text',value:'직책',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{id:'EMP_CD',blockSelect:'false',width:'70',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'EMP_NM',blockSelect:'false',width:'70',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'EMAIL',blockSelect:'false',width:'166',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'GENDER_CD',blockSelect:'false',width:'70',inputType:'select',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_CmCode101'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{id:'POSITION_CD',blockSelect:'false',width:'71',inputType:'select',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_CmCode02'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{id:'DUTY_CD',blockSelect:'false',ref:'',chooseOptionLabel:'미정',chooseOption:'true',width:'94',inputType:'select',allOption:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_CmCode19'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{id:'ROLE_CD',blockSelect:'false',ref:'',chooseOptionLabel:'미정',chooseOption:'true',width:'81',inputType:'select',allOption:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_CmCode01'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]}]}]}]},{T:1,N:'w2:textbox',A:{id:'',style:'',class:'df_tt dmb',label:'GridView의 mergeCells="byrowrec" 속성을 사용한 예시',tagname:'h2',toolTip:'동일한 데이터가 좌우/상하로 존재할 때 해당 셀을 동적으로 병합해주는 기능에 대한 예시이다.'}},{T:1,N:'w2:gridView',A:{ignoreCellClick:'false',summaryAuto:'false',autoFit:'allColumn',ignoreToggleOnDisabled:'false',summaryOnlyAuto:'false',defaultCellHeight:'24',rowNumVisible:'true',mergeCells:'byrowrec',scrollByColumnAdaptive:'false',dataList:'data:dlt_statistic',id:'',applyAllColumnStyle:'false',style:'height: 250px;',scrollByColumn:'false',useShiftKey:'true',class:'cm_grid'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header3',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{id:'column59',blockSelect:'false',style:'',width:'99',inputType:'text',value:'대분류',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column57',blockSelect:'false',style:'',width:'115',inputType:'text',value:'중분류',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column55',blockSelect:'false',style:'',width:'70',inputType:'text',value:'1월',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column53',blockSelect:'false',style:'',width:'70',inputType:'text',value:'2월',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column51',blockSelect:'false',style:'',width:'70',inputType:'text',value:'3월',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column49',blockSelect:'false',style:'',width:'70',inputType:'text',value:'4월',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column47',blockSelect:'false',style:'',width:'70',inputType:'text',value:'5월',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column45',blockSelect:'false',style:'',width:'70',inputType:'text',value:'6월',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column43',blockSelect:'false',style:'',width:'70',inputType:'text',value:'7월',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column41',blockSelect:'false',style:'',width:'70',inputType:'text',value:'8월',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column39',blockSelect:'false',style:'',width:'70',inputType:'text',value:'9월',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column37',blockSelect:'false',style:'',width:'70',inputType:'text',value:'10월',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column35',blockSelect:'false',style:'',width:'70',inputType:'text',value:'11월',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'column33',blockSelect:'false',style:'',inputType:'text',width:'70',value:'12월',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody3',style:''},E:[{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{id:'category1',blockSelect:'false',style:'',width:'99',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'category2',blockSelect:'false',style:'',width:'115',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'row3_1',blockSelect:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'row3_2',blockSelect:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'row3_3',blockSelect:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'row3_4',blockSelect:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'row3_5',blockSelect:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'row3_6',blockSelect:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'row3_7',blockSelect:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'row3_8',blockSelect:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'row3_9',blockSelect:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'row3_10',blockSelect:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'row3_11',blockSelect:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'row3_12',blockSelect:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}}]}]}]}]}]}]}]})