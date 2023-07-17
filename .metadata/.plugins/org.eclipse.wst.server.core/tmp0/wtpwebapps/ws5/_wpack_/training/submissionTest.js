/*amd /training/submissionTest.xml 3480 27cafb783af3ec930c6958ee35754f44a075d9e7554c426ed2b01f4b93ff4e06 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_userInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'EMP_CD',name:'사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_NM',name:'성명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'GENDER_CD',name:'성별',dataType:'text'}},{T:1,N:'w2:key',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'POSITION_CD',name:'직급',dataType:'text'}},{T:1,N:'w2:key',A:{id:'DUTY_CD',name:'직책',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ROLE_CD',name:'역할',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ASSIGNED_TASK',name:'담당 업무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CREATED_DATE',name:'입력일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'UPDATED_DATE',name:'수정일',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_reqParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'name',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'birthday',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'name',E:[{T:4,cdata:'유해진'}]},{T:1,N:'birthday',E:[{T:4,cdata:'19700104'}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_test',ref:'data:json,dc_reqParam',target:'data:json,dc_userInfo',action:'/training/test.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_test_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

        
	scwin.btn_search_onclick = function(e) {
		$p.executeSubmission( "sbm_test" );
	};
	
	scwin.sbm_test_submitdone = function(e) {
		var str = "==============================\n";
		str += e.resourceUri;
		str += "\n==============================\n";
		str += JSON.stringify(e.responseJSON, null, "\t");
		str += "\n==============================";
		
		$p.log(str);
	};
	
	scwin.onpageload = function() {
		
	};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{class:'section_title',id:'',label:'이 화면은 서버와의 통신 시 Request, Response 데이터를 확인하기 위한 페이지다.<br/>Submission에 연결된 reference와 Request, target과 Response의 연관 관계를 이해한다.<br/>조회버튼을 클릭 후 WAS의 로그와 웹스퀘어 로그를 통해 Request, Response 데이터를 확인한다.',style:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_search_onclick',style:'width: 80px;',id:'btn_search',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]}]}]})