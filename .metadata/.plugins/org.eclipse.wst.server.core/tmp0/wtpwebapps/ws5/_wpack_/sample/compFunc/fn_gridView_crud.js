/*amd /sample/compFunc/fn_gridView_crud.xml 16462 6d86e2c3c069cb8296b42c03e051bfced2707fe049fa7b3c402231de4be94a25 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{id:'dc_gridViewData',baseNode:'list',style:'',repeatNode:'map',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'dept',dataType:'text',ignoreStatus:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dept',name:'dept',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:'',use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'dept',E:[{T:4,cdata:'인사'}]},{T:1,N:'name',E:[{T:4,cdata:'손예진'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'dept',E:[{T:4,cdata:'홍보'}]},{T:1,N:'name',E:[{T:4,cdata:'송강호'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'dept',E:[{T:4,cdata:'IT'}]},{T:1,N:'name',E:[{T:4,cdata:'전지현'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'dept',E:[{T:4,cdata:'인사'}]},{T:1,N:'name',E:[{T:4,cdata:'류승룡'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'dept',E:[{T:4,cdata:'홍보'}]},{T:1,N:'name',E:[{T:4,cdata:'이광수'}]}]}]}]}]},{T:1,N:'xf:submission',A:{id:'sub_save01',ref:'data:json,[{"id":"dc_gridViewData","action":"inserted","key":"insertParam"},{"id":"dc_gridViewData","action":"deleted","key":"deleteParam"},{"id":"dc_gridViewData","action":"updated","key":"updateParam"}]',target:'',action:'/save01.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'scwin.sub_save01_submiterror'}},{T:1,N:'xf:submission',A:{id:'sub_save02',ref:'data:json,{"id":"dc_gridViewData","action":"modified"}',target:'',action:'/save01.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'scwin.sub_save02_submiterror'}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	scwin.btn_trigger9_onclick = function(e){
			//data 초기화
			dc_gridViewData.undoAll();
			
			alert("0번째 행에 행 추가(insertRow)\n1번째 행의 name을 수정(setCellData)\n2번째 행을 삭제 상태로 변경(deleteRow)\n3번째 행을 삭제(removeRow)");
			
			dc_gridViewData.insertRow(0);
			//dc_gridViewData.insertJSON( 0 , [{"name":"NEW"}] );
			
			dc_gridViewData.setCellData( 1 , "name" , "WebSquare" );
				
			//2번째행(Num:3)을 삭제 상태로 변경
			dc_gridViewData.deleteRow( 2 );
				
			//3번째행(Num:4)을 삭제
			dc_gridViewData.removeRow( 3 );
					
	};
	
	scwin.btn_getInsertedJSON_onclick = function(e){
		var tmpJSON = dc_gridViewData.getInsertedJSON();
		alert(JSON.stringify(tmpJSON,null,"\t"));
	};
	
	scwin.btn_getUpdatedJSON_onclick = function(e){
 			var tmpJSON = dc_gridViewData.getUpdatedJSON();
			alert(JSON.stringify(tmpJSON,null,"\t"));
	};
	
	scwin.btn_getDeletedJSON_onclick = function(e){
		var tmpJSON = dc_gridViewData.getDeletedJSON();
		alert(JSON.stringify(tmpJSON,null,"\t"));
	};
	
	scwin.btn_getModifiedJSON_onclick = function(e){
 			var tmpJSON = dc_gridViewData.getModifiedJSON();
		alert(JSON.stringify(tmpJSON,null,"\t"));
	};
	
	scwin.btn_getAllJSON_onclick = function(e){
		var tmpJSON = dc_gridViewData.getAllJSON();
		alert(JSON.stringify(tmpJSON,null,"\t"));
	};

	scwin.btn_actionInserted_onclick = function(e){
		var tmpGetOpt = {
			id : "dc_gridViewData"
			, action : "inserted"
		};
		var tmpJSON = $p.data.get("JSON",[tmpGetOpt]);
 				alert(JSON.stringify(tmpJSON,null,"\t"));
	};
	
	scwin.btn_actionUpdated_onclick = function(e){
			var tmpGetOpt = {
			id : "dc_gridViewData"
			, action : "updated"
		};
		var tmpJSON = $p.data.get("JSON",[tmpGetOpt]);
				alert(JSON.stringify(tmpJSON,null,"\t"));
		};
	
	scwin.btn_actionDeleted_onclick = function(e){
 			var tmpGetOpt = {
			id : "dc_gridViewData"
			, action : "deleted"
		};
		var tmpJSON = $p.data.get("JSON",[tmpGetOpt]);
 			alert(JSON.stringify(tmpJSON,null,"\t"));
	};
	
	scwin.btn_actionModified_onclick = function(e){
			var tmpGetOpt = {
			id : "dc_gridViewData"
			, action : "modified"
		};
		var tmpJSON = $p.data.get("JSON",[tmpGetOpt]);
			alert(JSON.stringify(tmpJSON,null,"\t"));
	};
	
	scwin.btn_actionAll_onclick = function(e){
		var tmpGetOpt = {
			id : "dc_gridViewData"
			//, action : "all"
		};
		var tmpJSON = $p.data.get("JSON",[tmpGetOpt]);
		alert(JSON.stringify(tmpJSON,null,"\t"));
	};
	
	
	scwin.btn_reinitializePage_onclick = function(e){
		$p.reinitialize();
	};
	
	scwin.btn_setJSON012_onclick = function(e){
		dc_gridViewData.insertRow(0);
	};
	
	scwin.btn_setJSON013_onclick = function(e){
		var chArr = gridView1.getCheckedIndex( "chk" );
		if(chArr.length < 1){
			alert("선택 된 항목이 없습니다.");
		}else{
			dc_gridViewData.removeRows( chArr );
		}
	};

	scwin.gridView1_oncellclick = function(row,col){
		var tmpID = gridView1.getColumnID( col );
		if(tmpID === "deleteBtn"){
			dc_gridViewData.deleteRow( row );
		}else if(tmpID === "removeBtn"){
			dc_gridViewData.removeRow( row );
		}
	};
		
	scwin.btn_reset_onclick = function(e) {
		dc_gridViewData.reset();
		
	};
	
	scwin.btn_sub_save01_onclick = function(e) {
		$p.executeSubmission( "sub_save01" );
	};
	
	scwin.btn_sub_save02_onclick = function(e) {
		$p.executeSubmission( "sub_save02" );
	};
	
	scwin.sub_save01_submiterror = function(e) {
		alert(e.requestBody);
	};
	
	scwin.sub_save02_submiterror = function(e) {
		alert(e.requestBody);
	};
	
	scwin.onpageload = function() {
		scwin.orgGridData = dc_gridViewData.getAllJSON();
	};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'section_desc pd10'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',label:'DataList의 상태별 데이터(추가/수정/삭제)를 제어하는 기본 method를 소개한다.<br/>사용자가 GridView를 통해 데이터를 수정하거나 스크립트에서 데이터를 추가/삭제한 경우 모두 GridView와 연동된 DataList의 method를 통해 데이터를 꺼내온다.<br/>일반적으로 수정된 데이터는 서버로 전송하여 DB에 적용하기 때문에 Submission 설정의 reference의 action 옵션과 연결된다.<br/>각 기능은 버튼에 연결되어 있으며 버튼의 onclick이벤트에 적용된 function을 통해 확인한다.<br/>( source : fn_gridView_crud.xml )',tagname:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:'text-align:right;margin-bottom: 10px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_trigger9_onclick',id:'btn_trigger9',style:'',toolTip:'데이터를 추가,수정,삭제한다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상태별 데이터 셋팅 - setCRUDData'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_reset_onclick',id:'btn_reset',style:'',toolTip:'초기 데이터로 복원한다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'데이터 복원'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_reinitializePage_onclick',id:'btn_reinitializePage',style:'',toolTip:'화면을 갱신한다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화면 갱신'}]}]}]},{T:1,N:'xf:group',A:{class:'dmb ofh',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fl',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_setJSON012_onclick',id:'btn_setJSON012',style:'margin-right:6px;',toolTip:'0번째행에 행을 추가한다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가 - insertRow'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_setJSON013_onclick',id:'btn_setJSON013',style:'',toolTip:'GridView의 체크박스에 체크된 행을 삭제한다.',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택 삭제 - removeRows'}]}]}]},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_sub_save01_onclick',id:'btn_sub_save01',style:'',toolTip:'버튼을 클릭하기 전 GridView에 데이터의 상태를 변경하거나 [상태별 데이터 셋팅 - setCRUDData]버튼을 클릭하여 상태를 변경한다.<br/>GridView에 연결된 dc_gridViewData객체의 데이터를 상태별로 서버로 전송하는 예시로 sub_save01 submission의 Reference 설정을 확인한다.<br/>버튼을 클릭하면 서버로 전송된 requestBody가 alert으로 표현된다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상태별 데이터 전송'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_sub_save02_onclick',id:'btn_sub_save02',style:'',toolTip:'버튼을 클릭하기 전 GridView에 데이터의 상태를 변경하거나 [상태별 데이터 셋팅 - setCRUDData]버튼을 클릭하여 상태를 변경한다.<br/>GridView에 연결된 dc_gridViewData객체의 데이터중 변경된 모든 데이터를 한번에 서버로 전송하는 예시로 sub_save02 submission의 Reference 설정을 확인한다.<br/>버튼을 클릭하면 서버로 전송된 requestBody가 alert으로 표현된다.',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'modified 데이터 전송'}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',dataList:'dc_gridViewData','ev:oncellclick':'scwin.gridView1_oncellclick',focusMode:'row',id:'gridView1',rowNumHeaderValue:'NO',rowNumVisible:'true',rowNumWidth:'25',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'34',scrollByColumn:'false',selectedRowColor:'#9ADDE4',sortEvent:'ondblclick',sortable:'true',style:'height: 140px;margin-bottom:6px;',visibleRowNum:'all'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column16',inputType:'checkbox',style:'height:30px;',value:'chk',width:'30'}},{T:1,N:'w2:column',A:{id:'column7',inputType:'text',style:'height:30px;',value:'이름',width:'104'}},{T:1,N:'w2:column',A:{id:'column3',inputType:'text',style:'height:30px;',value:'부서',width:'120'}},{T:1,N:'w2:column',A:{id:'column11',inputType:'text',style:'height:30px;',value:'삭제 상태로 변경',width:'118'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column12',inputType:'text',style:'height:30px;',value:'데이터 삭제',width:'131'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'chk',inputType:'checkbox',style:'height:30px;',width:'31'}},{T:1,N:'w2:column',A:{id:'name',inputType:'text',style:'height:30px;',width:'104'}},{T:1,N:'w2:column',A:{id:'dept',inputType:'text',style:'height:30px;',width:'120'}},{T:1,N:'w2:column',A:{id:'deleteBtn',inputType:'button',style:'height:30px;',value:'deleteRow',width:'118',class:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'removeBtn',inputType:'button',style:'height:30px;',value:'removeRow',width:'131'}}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''}}]},{T:1,N:'xf:group',A:{class:'dl_code',id:'',style:'',tagname:'dl'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Submission의 ref(reference) 속성에 정의하기',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'상태별 데이터는 일반적으로 서버로 보낼 때 많이 사용된다.<br/>그래서 Submission의 reference속성에 각 상태별 데이터만 보낼수 있는 기능을 제공한다.',style:''}},{T:1,N:'w2:textbox',A:{class:'dp',id:'',label:'&lt;xf:submission id="sub_save01" action="/save01.do" <br/>&nbsp;&nbsp;&nbsp;ref=\'data:json,[{"id":"dc_gridViewData","action":"modified","key":"modifiedParam"}]\'&gt;<br/>&lt;/xf:submission&gt;',style:'',tagname:'samp'}},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_actionInserted_onclick',id:'btn_actionInserted',style:'',toolTip:'전체 데이터 객체(DataCollection)에서 dc_gridViewData 객체에 추가된 데이터를 가져온다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'action - inserted'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_actionUpdated_onclick',id:'btn_actionUpdated',style:'',toolTip:'전체 데이터 객체(DataCollection)에서 dc_gridViewData 객체에 수정된 데이터를 가져온다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'action - updated'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_actionDeleted_onclick',id:'btn_actionDeleted',style:'',toolTip:'전체 데이터 객체(DataCollection)에서 dc_gridViewData 객체에 삭제된 데이터를 가져온다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'action - deleted'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_actionModified_onclick',id:'btn_actionModified',style:'',toolTip:'전체 데이터 객체(DataCollection)에서 dc_gridViewData 객체에 추가/수정/삭제된 데이터를 가져온다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'action - modified'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_actionAll_onclick',id:'btn_actionAll',style:'',toolTip:'전체 데이터 객체(DataCollection)에서 dc_gridViewData 객체에 전체 데이터를 가져온다. 단, removeRow로 데이터가 삭제된 경우는 제외된다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'action - all 또는 action 미정의'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DataList 객체의 Method를 이용하여 data 가져오기',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'DataList의 Method들 중 get[상태][데이터타입](getAllJSON)의 형식을 가진 Method가 해당된다.<br/>대표적으로 JSON을 꺼내오는 주요 method는 다음과 같다.<br/>getInsertedJSON, getUpdatedJSON, getDeletedJSON, getModifiedJSON, getAllJSON',style:''}},{T:1,N:'w2:textbox',A:{class:'dp',id:'',label:'var modiArr = dataList1.getModifiedJSON( ); //추가, 삭제, 업데이트 상태의 데이터를 반환한다.',style:'',tagname:'samp'}},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_getInsertedJSON_onclick',id:'btn_getInsertedJSON',style:'',toolTip:'dc_gridViewData에서 추가된 데이터를 가져온다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getInsertedJSON'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_getUpdatedJSON_onclick',id:'btn_getUpdatedJSON',style:'',toolTip:'dc_gridViewData에서 수정된 데이터를 가져온다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getUpdatedJSON'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_getDeletedJSON_onclick',id:'btn_getDeletedJSON',style:'',toolTip:'dc_gridViewData에서 삭제된 데이터를 가져온다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getDeletedJSON'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_getModifiedJSON_onclick',id:'btn_getModifiedJSON',style:'',toolTip:'dc_gridViewData에서 추가/수정/삭제된 데이터를 가져온다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getModifiedJSON'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_getAllJSON_onclick',id:'btn_getAllJSON',style:'',toolTip:'dc_gridViewData의 데이터를 가져온다. 단, removeRow로 데이터가 삭제된 경우는 제외된다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getAllJSON'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DataCollection 객체의 Method를 이용하여 data 가져오기',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'',tagname:'dd'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'여러개의 DataList의 값을 꺼내올 때 사용한다.',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'var tmpGetOpt = {<br/> &nbsp;id : "dc_gridViewData"<br/> &nbsp;, action : "updated"<br/>};<br/>var dataArr = $p.data.get("JSON",[tmpGetOpt]);',style:'',tagname:'samp'}}]}]}]}]}]}]})