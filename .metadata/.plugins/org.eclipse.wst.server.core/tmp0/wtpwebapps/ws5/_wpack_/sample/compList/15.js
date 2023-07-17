/*amd /sample/compList/15.xml 7895 6a6a1289a3327797db19fbedd612ea7d4729878006f700b41667cb78502e5835 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_reqSearch',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'searchKey',name:'검색',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dc_resUserMapData',style:'',valueAttribute:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'name',name:'name',dataType:'text'}},{T:1,N:'w2:key',A:{id:'birthday',name:'birthday',dataType:'text'}},{T:1,N:'w2:key',A:{id:'height',name:'height',dataType:'text'}},{T:1,N:'w2:key',A:{id:'weight',name:'weight',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gender',name:'gender',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sub_getUserData',ref:'data:json,dc_reqSearch',target:'data:json,dc_resUserMapData',action:'/sample/sampleData/sampleData_json_dc_map.json',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sub_getUserData_submit','ev:submitdone':'scwin.sub_getUserData_submitdone','ev:submiterror':'scwin.sub_getUserData_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	//reqDC , resDC 가 다건인 경우 ,로 구분한다.
	scwin.fn_execAjax = function(actionUrl, reqDC, resDC) {
		if (actionUrl) {
			/*
				ajax통신용 함수
				Parameters : - Object options JSON형태 객체 
				options.action : ajax 요청주소
				options.mode : asynchronous(default)/synchronous 
				options.mediatype : application/x-www-form-urlencoded , application/json , application/xml , text/xml
				options.method : get/post/put/delete
				options.requestData : 요청본문
				options.timeout : ajax요청후 timeout 시간. 이시간이 초과해도 응답이 오지 않는 경우 error callback함수를 실행
				options.type : xml/json. xml인 경우 success callback함수의 인자객체의 responseBody속성에 xml객체가 설정되고,
							   json인 경우 자바스크립트 객체가 설정된다.나머지 경우는 text형식이 설정.
				options.beforeAjax : 요청전에 실행되는 함수로 이 함수내에서 false를 return하면 ajax요청을 하지 않는다
				options.success : 요청이 성공한 경우 실행되는 callback함수
				options.error : 요청이 실패한 경우 실행되는 callback함수
			 */
			var tmpReqDC = reqDC.split(",") || [];

			var sendOpt = {};

			sendOpt.action = actionUrl;
			sendOpt.mediatype = "application/json";
			sendOpt.method = "post";
			sendOpt.requestHeader = {
				insUserData : "w5Edu"
			};
			sendOpt.requestData = JSON.stringify($p.data.get("JSON", tmpReqDC));

			sendOpt.beforeAjax = function(e) {
				$p.log("Before");
				for ( var tmp in e) {
					$p.log("==::" + tmp);
				}
				e.requestData = '{"userInfo":' + e.requestData + '}';
				return true;
			};

			sendOpt.success = function(e) {
				ui_result.setValue( "ajax success\n" + e.responseText);
				if (resDC)
					$p.getComponentById(resDC).setJSON(e.responseJSON[resDC]);
			};

			sendOpt.error = function(e) {
				ui_result.setValue("ajax error\n" + "errorType:" + e.errorType + "\n"
						+ "statusCode:" + e.responseStatusCode);
			};

			$p.ajax(sendOpt);
		} else {
			alert("action이 정의되지 않았습니다.");
		}

	};

	scwin.trigger5_onclick = function(e) {
		$p.executeSubmission("sub_getUserData");
	};

	scwin.trigger8_onclick = function(e) {
		scwin.fn_execAjax(
				"/sample/sampleData/sampleData_json_dc_map02.json",
				"dc_reqSearch", "dc_resUserMapData");
	};

	scwin.sub_getUserData_submit = function() {

		var searchTxt = dc_reqSearch.get("searchKey");
		if (searchTxt === "") {
			alert("검색어를 입력하세요");
			input4.focus();
			return false;
		} else {
			alert(searchTxt + "로 검색하겠습니다.");
			return true;
		}

	};

	scwin.sub_getUserData_submitdone = function(e) {
		ui_result.setValue( "통신 정상 responseText :\n" + e.responseText  );
	};

	scwin.sub_getUserData_submiterror = function(e) {
		ui_result.setValue( "통신 에러 :\n" + e.responseStatusCode );
	};

	scwin.onpageload = function() {

	};


}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.w2radio_label:before{position:absolute;left:1px;top:5px;content:none;display:inline-block;width:20px;height:20px;border:1px solid #cfd5d8;box-sizing:border-box;border-radius:50%;background:#fff}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:''},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 10px;',class:'section_desc '},E:[{T:1,N:'w2:textbox',A:{id:'section',style:'',label:'웹스퀘어는 AJAX로 통신을 한다.(HTML의 Form Submit을 이용하지 않음). 제공되는 통신 모듈은 Submission과 Ajax Util (API) 모듈이 있다.<br/>( source : 15.xml )'}}]},{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'section03 dmb'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'contTitle02',label:'Submission / AJAX Util'}},{T:1,N:'xf:group',A:{id:'',style:'margin:10px;position: relative;'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding-right:200px;',class:''},E:[{T:1,N:'xf:input',A:{id:'input4',ref:'data:dc_reqSearch.searchKey',style:'width: 100%;height: 21px;'}}]},{T:1,N:'xf:trigger',A:{id:'trigger5',style:'top:0px;width: 90px;position: absolute;right:96px;',type:'button','ev:onclick':'scwin.trigger5_onclick',class:'btn_cm sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'submission'}]}]},{T:1,N:'xf:trigger',A:{id:'trigger8',style:'top:0px;width: 90px;position: absolute;right:0px;',type:'button','ev:onclick':'scwin.trigger8_onclick',class:'btn_cm sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'AJAX Util'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'margin:10px;',class:''},E:[{T:1,N:'xf:group',A:{id:'',style:'width:100%;height: 0;',class:'w2tb dmb',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'이름'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'input9',ref:'data:dc_resUserMapData.name',style:'width: 144px;height: 21px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'성별'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'radio4',ref:'data:dc_resUserMapData.gender',selectedIndex:'-1',cols:'2',appearance:'full',style:'width: 150px;height: 21px;',rows:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'남'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'M'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'생년월일'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{renderType:'component',id:'inputCalendar5',renderDiv:'true',ref:'data:dc_resUserMapData.birthday',footerDiv:'false',calendarValueType:'yearMonthDate',style:'width: 150px;height: 23px;',weekStartsOn:'0',focusOnDateSelect:'false'}}]}]}]},{T:1,N:'xf:textarea',A:{id:'ui_result',style:'width: 100%;height: 180px;',placeholder:'통신 결과를 출력합니다.'}}]}]}]}]}]}]}]})