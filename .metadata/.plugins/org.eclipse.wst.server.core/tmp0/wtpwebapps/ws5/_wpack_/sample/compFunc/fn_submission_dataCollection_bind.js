/*amd /sample/compFunc/fn_submission_dataCollection_bind.xml 16054 d9d515961976cdef8b304bb48399099222c859603f3f7a0ca52ce33b77771d8a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_reqCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'userID'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'userID',E:[{T:3,text:'EDU001'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_reqInfo',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'pageNm'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'pageNm',E:[{T:3,text:'fn_submission_dataCollection_dataTypes.xml'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_resMessage',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'code',name:'상태코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'msg',name:'메세지'}},{T:1,N:'w2:key',A:{dataType:'text',id:'rsCount',name:'검색건수'}}]}]},{T:1,N:'w2:dataList',A:{id:'dc_resUserListData',baseNode:'list',repeatNode:'map',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'birthday',name:'birthday',dataType:'text'}},{T:1,N:'w2:column',A:{id:'height',name:'height',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weight',name:'weight',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_resUserMapData'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'name'}},{T:1,N:'w2:key',A:{id:'birthday',dataType:'text'}},{T:1,N:'w2:key',A:{id:'height',dataType:'text'}},{T:1,N:'w2:key',A:{id:'weight',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dc_sbxType',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'desc',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'ref와 target을 설정하지 않은 예시'}]},{T:1,N:'value',E:[{T:4,cdata:'json_dataMap_noRef_noTarget'}]},{T:1,N:'desc',E:[{T:4,cdata:'\n이 예시는 submission의 속성중 ref와 target을 설정하지 않았다.\nref의 설정값이 없기 때문에 화면에서 전송되는 request는 없다.\n통신 후 response데이터가 있지만 target의 설정값이 없기 때문에 response데이터가 dataCollection에 셋팅되지 않는다.\n\nid="json_dataMap_noRef_noTarget"\nref=""\ntarget=""\naction="/sample/sampleData/sampleData_json_dc_map.json"							\n							'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'ref와 target 설정 예시01'}]},{T:1,N:'value',E:[{T:4,cdata:'json_dataList'}]},{T:1,N:'desc',E:[{T:4,cdata:'\nid="json_dataList"\nref="data:json,dc_reqCode"\ntarget="data:json,dc_resUserListData"\naction="/sample/sampleData/sampleData_json_dc_list.json"\n							'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'ref와 target 설정 예시02'}]},{T:1,N:'value',E:[{T:4,cdata:'json_dataListWithMessge_01'}]},{T:1,N:'desc',E:[{T:4,cdata:'\nid="json_dataListWithMessge_01"\nref="data:json,[\'dc_reqCode\',\'dc_reqInfo\']"\ntarget="data:json,[\'dc_resUserListData\',\'dc_resMessage\']"\naction="/sample/sampleData/sampleData_json_dc_combination.json"\n							'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'singleMode 설정 예시'}]},{T:1,N:'value',E:[{T:4,cdata:'json_dataList_singleMode'}]},{T:1,N:'desc',E:[{T:4,cdata:'\n:: response data singleMode::\nid="json_dataList_singleMode"\nsingleMode="true"\ntarget="data:json,dc_resUserListData"\naction="/sample/sampleData/sampleData_json_dc_list_singleMode.json"\n							'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'response 데이터와 dataCollection 자동 매칭 설정'}]},{T:1,N:'value',E:[{T:4,cdata:'json_dataList_autoBind'}]},{T:1,N:'desc',E:[{T:4,cdata:'\n:: 자동매칭 - 비권장(성능저하) ::\nid="json_dataList_autoBind"\ntarget="data:json"\naction="/sample/sampleData/sampleData_json_dc_combination.json"\n							'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'ref를 설정하고 requestData를 동적으로 할당한 경우'}]},{T:1,N:'value',E:[{T:4,cdata:'json_dataListWithMessge_02'}]},{T:1,N:'desc',E:[{T:4,cdata:'\n:: request data 동적 할당:: \nid="json_dataListWithMessge_02"\nref="data:json,[\'dc_reqCode\',\'dc_reqInfo\']"\ntarget="data:json,[\'dc_resUserListData\']"\naction="/sample/sampleData/sampleData_json_dc_map_singleMode.json"							\n							'}]}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_defInfoMap'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'defDesc',name:'name1',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'defDesc',E:[{T:4,cdata:'\n이 화면은 Submission의 ref속성과 target속성의 설정에 따른 예시를 담고 있다.\nref속성은 request data와 연관있고 target속성은 response data와 연관이 있다.  \ntarget속성의 설정값에 따라 통신 후 내려온 response data를 dataCollection에 셋팅된다.\n예시를 실행하는 방법은 다음과 같다.\n1. [Submission의 ref와 target 설정 예시]에 있는 selectbox에 항목을 선택한다.\n	선택된 항목의 설명이 selectbox의 하위에 표현된다.\n2. [실행]버튼을 클릭한다.\n	선택된 항목과 연관이 있는 submission(항목의 설명부분의 id를 참조)이 실행된다.\n3. [Request, Response 정보]하위에 있는 textare에 출력된 데이터를 확인한다.\n	출력된 데이터는 통신 이후 서버에 호출한 url과 서버로 전송된 request data와 서버에서 받은 response data를 표현한다.\n4. [이전/이후 DataCollection 정보]하위에 있는 textare에 출력된 통신 이전/이후의 데이터를 비교한다.\n	위에 있는 textare에는 초기화시킨 통신 이전의 dataCollection 전체가 출력된다.\n	아래에 있는 textare에는  통신 이후의 dataCollection 전체가 출력된다.\n	target에 설정된 정보에 따라 변경된 dataCollection의 데이터를 비교해본다.\n						'}]}]}]}]},{T:1,N:'xf:submission',A:{id:'json_dataMap_noRef_noTarget',ref:'',target:'',action:'/sample/sampleData/sampleData_json_dc_map.json',mediatype:'application/json',method:'post',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.json_dataMap_noRef_noTarget_submitdone','ev:submiterror':'scwin.json_dataMap_noRef_noTarget_submiterror','ev:submit':'scwin.resetDataCollection',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'json_dataList',ref:'data:json,dc_reqCode',target:'data:json,dc_resUserListData',action:'/sample/sampleData/sampleData_json_dc_list.json',mediatype:'application/json',method:'post',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.json_dataList_submitdone','ev:submiterror':'scwin.json_dataList_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'','ev:submit':'scwin.resetDataCollection'}},{T:1,N:'xf:submission',A:{id:'json_dataListWithMessge_01',ref:'data:json,[\'dc_reqCode\',\'dc_reqInfo\']',target:'data:json,[\'dc_resUserListData\',\'dc_resMessage\']',action:'/sample/sampleData/sampleData_json_dc_combination.json',mediatype:'application/json',method:'post',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.json_dataListWithMessge_01_submitdone','ev:submiterror':'scwin.json_dataListWithMessge_01_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'','ev:submit':'scwin.resetDataCollection'}},{T:1,N:'xf:submission',A:{id:'json_dataListWithMessge_02',ref:'data:json,[\'dc_reqCode\',\'dc_reqInfo\']',target:'data:json,[\'dc_resUserListData\']',action:'/sample/sampleData/sampleData_json_dc_combination2.json',mediatype:'application/json',method:'post',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.json_dataListWithMessge_02_submitdone','ev:submiterror':'scwin.json_dataListWithMessge_02_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'','ev:submit':'scwin.resetDataCollection'}},{T:1,N:'xf:submission',A:{id:'json_dataList_singleMode',ref:'',target:'data:json,dc_resUserListData',singleMode:'true',action:'/sample/sampleData/sampleData_json_dc_list_singleMode.json',mediatype:'application/json',method:'post',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.json_dataList_singleMode_submitdone','ev:submiterror':'scwin.json_dataList_singleMode_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'','ev:submit':'scwin.resetDataCollection'}},{T:1,N:'xf:submission',A:{id:'json_dataList_autoBind',ref:'',target:'data:json',action:'/sample/sampleData/sampleData_json_dc_combination.json',mediatype:'application/json',method:'post',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.json_dataList_autoBind_submitdone','ev:submiterror':'scwin.json_dataList_autoBind_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'','ev:submit':'scwin.resetDataCollection'}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.w2textarea{font-size:13px}.w2anchor2{padding:10px;text-decoration:none;background-color:#f5fffa;border:1px solid #ddd;margin-bottom:6px;display:inline-block;width:350px;margin-right:6px}pre{margin:0;line-height:1.5em}'}]},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
		var eduObj = {
			fn_setResData : function(reqTxt,submissionID,resTxt,dataType){
				//var dcTxt = JSON.stringify($p.data.get("JSON"),null,"\t") ;
				scwin.rsTxt = "::: submission ID :"+submissionID+"\n\n::: Reqeust Data\n"+reqTxt+"\n\n::: Response Data\n"+resTxt;
				textarea1.setValue( scwin.rsTxt );
				textarea2.setValue( "::: 이후 DataCollection :::\n"+JSON.stringify($p.data.get("JSON",["dc_reqCode","dc_reqInfo","dc_resMessage","dc_resUserMapData","dc_resUserListData"]),null,"\t") );
			},
			fn_setOrgData : function(){
				var dataObj = this.fn_getOrgData();
				textarea3.setValue( "::: 이전 DataCollection :::\n"+JSON.stringify(dataObj,null,"\t") );
				$p.data.set( "json" , dataObj);
			},
			fn_getOrgData : function(){
				return {"dc_reqCode":{"userID":"EDU001"},"dc_reqInfo":{"pageNm":"fn_submission_dataCollection_dataTypes.xml"},"dc_resMessage":{"code":"","msg":"","rsCount":""},"dc_resUserMapData":{"name":"","birthday":"","height":"","weight":""},"dc_resUserListData":[]};
			}
		};
		
		scwin.anchor2_onclick = function(){
		    $p.executeSubmission( "json_dataMap_noRef_noTarget" );
		};
		
		scwin.btn_dataList_json_onclick = function(){
	    	$p.executeSubmission( "json_dataList" );
		};
		
		scwin.btn_combination_json_onclick = function(){
		    $p.executeSubmission( "json_dataListWithMessge_01" );
		
		};
		
		scwin.btn_dynamicRequestData_json_onclick = function(){
		    // json 데이터를 전송하기 위해서는 mediaType을 application/json으로 설정을 해야 합니다.
		    $p.executeSubmission( "json_dataListWithMessge_02" , {"req_info":{"userID":"Dynamic_EDU003"}});

		};
		
		scwin.btn_dataList_singleMode_json_onclick = function(){
	    	$p.executeSubmission( "json_dataList_singleMode");		
		};
		
		scwin.btn_dataList_autoBind_json_onclick = function(){
			$p.executeSubmission( "json_dataList_autoBind");
		};
		
		scwin.json_dataMap_noRef_noTarget_submitdone = function(e){
			eduObj.fn_setResData(e.requestBody, e.id, e.responseText, "json");
		};
		
		scwin.json_dataMap_noRef_noTarget_submiterror = function(e){
			alert("ERROR::"+ e.responseStatusCode);
		};
		
		scwin.json_dataList_submitdone = function(e){
			eduObj.fn_setResData(e.requestBody, e.id, e.responseText, "json");
		};
		
		scwin.json_dataList_submiterror = function(e){
			alert("ERROR::"+ e.responseStatusCode);
		};
		
		scwin.json_dataListWithMessge_01_submitdone = function(e){
			eduObj.fn_setResData(e.requestBody, e.id, e.responseText, "json");
		};
		
		scwin.json_dataListWithMessge_01_submiterror = function(e){
			alert("ERROR::"+ e.responseStatusCode);
		};
		
		scwin.json_dataListWithMessge_02_submitdone = function(e){
			eduObj.fn_setResData(e.requestBody, e.id, e.responseText, "json");
		};
		
		scwin.json_dataListWithMessge_02_submiterror = function(e){
			alert("ERROR::"+ e.responseStatusCode);
		};	
		
		scwin.json_dataList_singleMode_submitdone = function(e){
			eduObj.fn_setResData(e.requestBody, e.id, e.responseText, "json");
		};
		
		scwin.json_dataList_singleMode_submiterror = function(e){
			alert("ERROR::"+ e.responseStatusCode);
		};
		
		scwin.json_dataList_autoBind_submitdone = function(e){
			eduObj.fn_setResData(e.requestBody, e.id, e.responseText, "json");
		};
		
		scwin.json_dataList_autoBind_submiterror = function(e){
			alert("ERROR::"+ e.responseStatusCode);
		};
		
		scwin.resetDataCollection = function(e) {
			eduObj.fn_setOrgData();
		};
		
	scwin.ui_sbxType_onviewchange = function(info) {
		var curVal = info.newValue;
		if(curVal){
			ui_desc.setValue( dc_sbxType.getMatchedColumnData( "value" , curVal , "desc" )[0] );
		}else{
			ui_desc.setValue("");
		}
	};
	
	scwin.ui_desc_formatter = function(tmpVal){
		return "<pre>"+tmpVal+"</pre>";
	};
	
	scwin.ui_btnExecSbm_onclick = function(e) {
		var sbmId = ui_sbxType.getValue();
		if(sbmId){
			/*
			if(sbmId === "json_dataListWithMessge_02"){
			}else{
				$p.executeSubmission( sbmId );
			}
			*/
			$p.executeSubmission( sbmId );
		}else{
			alert("선택된 항목이 없습니다.");
		}
	};
	
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		eduObj = null;
	};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'',style:'',tagname:'',ref:'data:dc_defInfoMap.defDesc',displayFormatter:'scwin.ui_desc_formatter'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Submission의 ref와 target 설정 예시',style:'',class:'df_tt dmb'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'dmb'},E:[{T:1,N:'xf:select1',A:{disabledClass:'w2selectbox_disabled',appearance:'minimal',direction:'auto',chooseOption:'true',id:'ui_sbxType',style:'width: 360px;height: 24px;',displayMode:'label',selectedData:'true',optionOrder:'false',allOption:'',disabled:'false',submenuSize:'auto',textAlign:'left',class:'dmr','ev:onviewchange':'scwin.ui_sbxType_onviewchange',chooseOptionLabel:'- 선택하세요 -',labelWidthAuto:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dc_sbxType'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'value'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'ui_btnExecSbm',style:'width: 80px;','ev:onclick':'scwin.ui_btnExecSbm_onclick',class:'btn_cm sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]}]},{T:1,N:'w2:textbox',A:{label:'',id:'ui_desc',style:'',displayFormatter:'scwin.ui_desc_formatter',class:'txtDesc'}},{T:1,N:'xf:group',A:{id:'ui_jsonBox',style:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'ofh'},E:[{T:1,N:'xf:group',A:{id:'',style:'width:calc(50% - 3px);margin-right:6px;float: left;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Request, Response 정보',style:'',class:'df_tt dmb'}},{T:1,N:'xf:textarea',A:{id:'textarea1',style:'width:100%;height:310px;',class:'boxSize'}}]},{T:1,N:'xf:group',A:{id:'',style:'width:calc(50% - 3px);float: left;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'이전/이후 DataCollection 정보',style:'',class:'df_tt dmb'}},{T:1,N:'xf:textarea',A:{id:'textarea3',style:'width:100%;height:150px;',class:'boxSize dmb'}},{T:1,N:'xf:textarea',A:{class:'boxSize',id:'textarea2',style:'width:100%;height:150px;'}}]}]}]}]}]}]}]})