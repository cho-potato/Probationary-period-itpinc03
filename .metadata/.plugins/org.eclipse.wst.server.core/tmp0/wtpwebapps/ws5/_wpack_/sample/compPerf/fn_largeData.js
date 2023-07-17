/*amd /sample/compPerf/fn_largeData.xml 21590 e6ace05777838026c16b527a5c091b5cbf36f0ea48e00faafee9ee5349b4be26 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_ZipCodeStreet',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'SEQ_NO',name:'SEQ_NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SIGUNGUCODE',name:'SIGUNGUCODE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STREETNUM',name:'STREETNUM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STREET',name:'STREET',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STREETENG',name:'STREETENG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DONGSEQ',name:'DONGSEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SIDO',name:'SIDO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SIGUNGU',name:'SIGUNGU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DONGTYPE',name:'DONGTYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DONGCODE',name:'DONGCODE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DONG',name:'DONG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENTSTREETNUM',name:'PARENTSTREETNUM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENTSTREET',name:'PARENTSTREET',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ISUSE',name:'ISUSE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CHANGEREASON',name:'CHANGEREASON',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CHANGEHISTORY',name:'CHANGEHISTORY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SIDOENG',name:'SIDOENG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SIGUNGUENG',name:'SIGUNGUENG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DONGENG',name:'DONGENG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'OPENDATE',name:'OPENDATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CLOSEDATE',name:'CLOSEDATE',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'SEQ_NO',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'type',name:'데이터 타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'typeKey',name:'데이터 타입 키',dataType:'text'}},{T:1,N:'w2:column',A:{id:'row',name:'행 개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col',name:'열 개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cell',name:'셀 개수',dataType:'number',importFormatter:'edu.ifm_setCellData'}},{T:1,N:'w2:column',A:{id:'serverTime',name:'서버 통신 시간',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clientTime',name:'화면 랜더링 시간',dataType:'number'}},{T:1,N:'w2:column',A:{id:'resSize',name:'데이터 사이즈',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totCnt',name:'횟수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startTime',name:'시작 시각',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Default',ref:'data:json,dma_Search',target:'',action:'/edu/selectLargeDataDefault.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중입니다.','ev:submit':'','ev:submitdone':'scwin.sbm_Default_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Array',ref:'data:json,dma_Search',target:'',action:'/edu/selectLargeDataArray.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중입니다.','ev:submit':'','ev:submitdone':'scwin.sbm_Array_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'style',A:{type:'text/css'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function(){

			scwin.onpageload = function() {
				
			};
	
			scwin.btn_SearchDefault_onclick = function(e) {
				dlt_ZipCodeStreet.setJSON( [] );
				$p.executeSubmission("sbm_Default", null, this.id);
			};
			
			scwin.btn_SearchLargeHander_onclick = function(e) {
				dlt_ZipCodeStreet.setJSON( [] );
				$p.executeSubmission("sbm_Array", null, this.id);
			};
			
			scwin.btn_removeAll_onclick = function(e) {
				dlt_ZipCodeStreet.setJSON( [] );
			};
			
			scwin.sbm_Default_submitdone = function(e) {
				scwin.setResultDataList.apply(this,["JSON",e]);
			};
			
			scwin.sbm_Array_submitdone = function(e) {
				scwin.setResultDataList.apply(this,["Array",e]);
			};
			
			scwin.setResultDataList = function(typeNm,e){
				var sTime = new Date();
				dlt_ZipCodeStreet["set"+typeNm]( e.responseJSON.dlt_ZipCodeStreet );
				var eTime = new Date();
				console.log("done");
				var rowCnt = dlt_ZipCodeStreet.getRowCount();
				
				var txtObj = {
					type : typeNm,
					typeKey : typeNm+"-"+rowCnt,
					row : dlt_ZipCodeStreet.getRowCount(),
					col : dlt_ZipCodeStreet.getTotalCol(),
					serverTime : this.endTime-this.startTime,
					clientTime : eTime-sTime,
					//resSize : scwin.getMBSize( e.responseText),
					startTime : WebSquare.date.getFormattedDate( this.startTime , "HH:mm:ss" ) 
				};
				dlt_result.setJSON( [txtObj] , true );
				
				grd_log.setFocusedCell( grd_log.getTotalRow()-1 , 0 );
				
				console.log("last");
				console.log("time"+(eTime-sTime));
			};
			
			
			scwin.getMBSize = function(str){
				return (WebSquare.util.getStringByteSize( str )/1048576).toFixed(2);
			};
			
			scwin.setResultData = function(type,serverTime,clientTime,resSize){
				
			};
			
			scwin.ifm_setCellData = function(rowData){
				return rowData.col * rowData.row;
			};
		
			scwin.btn_ExcelDownLoad_Basic_onclick = function(e) {
				option = {};
				option.fileName ="data.xlsx";
				var rowCnt = dlt_ZipCodeStreet.getRowCount();
				if ( rowCnt > 50000 ) {
					if ( confirm ("그리드 엑셀 표현 건수가 5만건을 초과 합니다.\nWAS의 Heap영역의 메모리를 과하게 사용하므로 Out Of Memory 가 발생할 수 있습니다. \n오류 발생시 WAS를 재기동 해야 할 수도 있습니다.\n그래도 진행 하시겠습니까?")){
						grd_data.advancedExcelDownload( option  );
					}
				} else {
				
					grd_data.advancedExcelDownload( option  );
				}
			};
		
			scwin.btn_ExcelDownload_Provider_onclick = function(e) {
		
				option = {};
				option.fileName ="data.xlsx";
				// 기존 Service 호출방식
				option.dataProvider="com.inswave.edu.provider.ExcelDown";
				// SQL ID를 이용한 직접 db 호출 방식 
				//option.dataProvider="com.inswave.edu.provider.ExcelDown_directDBCall";
				
				option.showProcess = "true";
				option.providerRequestXml = scwin.setProviderData(dma_Search, "com.inswave.edu.dao.EduDao.selectZipCodeStreet");
				grd_data.advancedExcelDownload(option);				
				
			};
		
			scwin.setProviderData = function( data, sqlId) {
			
				var dataStr = "<jsonData>"+JSON.stringify(data.getJSON())+"</jsonData>";
				var sqlIdStr = "<sqlId>"+sqlId+"</sqlId>";
				var seqNoStr = "<seqNo>"+sbx_row.getValue()+"</seqNo>";
				
				return "<data>"+dataStr+sqlIdStr+seqNoStr+"</data>";
			};
			
			// split Provider 
			scwin.btn_ExcelDownload_SplitProvider_onclick = function(e) {
				option = {};
				option.fileName ="data.xlsx";
				// Service 호출방식
				option.splitProvider = "com.inswave.edu.provider.ExcelDownSplit";
				option.showProcess = "true";
				option.providerRequestXml = scwin.setProviderData(dma_Search, "");
				grd_data.advancedExcelDownload(option);	
			};
		
}
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:''},E:[{T:1,N:'xf:group',A:{class:'section_desc',id:'',style:'padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'데이터 타입에 따른 화면 랜더링 속도 및 네트워크 구간 속도를 비교할 수 있다.<br/>JSON Format은 기본 데이터 포맷이며 ARRAY Format은 대용량 데이터 처리 시 권장 포맷이다.<br/>데이터가 10만 셀 이상인 경우 대용량 데이터로 판단한다.(해당 기준은 ie8 이하 브라우저를 포함하여 측정된 결과이다.)<br/>데이터 타입별 포맷은 <a class="txt_b_blue" target="_blank" href="ws5.do?w2xPath=/sample/compFunc/fn_dataFormat.xml">fn_dataFormat.xml</a>을 참고한다.<br/>( source : fn_largeData.xml )',style:'margin-top:0px;',tagname:''}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dmb'},E:[{T:1,N:'w2:span',A:{style:'',label:'이 페이지는 DB에서 데이터를 가져오기 때문에 실행 환경이 구성되어야한다.',id:'',class:'warningTxt'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'mb20'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'searchbox dmb'},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n								조회&nbsp;건수&nbsp;:&nbsp;\n								'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'mr5 dm',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'sbx_row',optionOrder:'false',ref:'data:dma_Search.SEQ_NO',selectedData:'true',style:'width:120px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'10,000'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'50,000'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'50000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'100,000'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'100000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'200,000'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'200000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'300,000'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'300000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'500000'}]}]}]}]},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch','ev:onclick':'scwin.btn_SearchDefault_onclick',id:'',style:'width:120px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'JSON 타입 조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch','ev:onclick':'scwin.btn_SearchLargeHander_onclick',id:'',style:'width:120px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ARRAY 타입 조회'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'dmb ofh'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'fr'},E:[{T:1,N:'xf:trigger',A:{id:'btn_ExcelDownLoad_Basic',style:'','ev:onclick':'scwin.btn_ExcelDownLoad_Basic_onclick',class:'btn_cm',type:'button',disabled:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Excel DownLoad ( Basic )'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_ExcelDownload_Provider',style:'','ev:onclick':'scwin.btn_ExcelDownload_Provider_onclick',class:'btn_cm',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Excel DownLoad ( Provider )'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_ExcelDownload_SplitProvider_onclick',id:'btn_ExcelDownload_SplitProvider',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Excel DownLoad ( Split Provider )'}]}]}]},{T:1,N:'w2:textbox',A:{id:'',style:'',class:'df_tt fl dm',label:'조회 결과 데이터',tagname:'h2'}}]},{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',rowNumVisible:'',summaryAuto:'false',useShiftKey:'true',rowNumHeaderValue:'',scrollByColumn:'false',fixedColumnWithHidden:'true',rowNumWidth:'',dataList:'dlt_ZipCodeStreet',ignoreCellClick:'false',style:'height:150px;',id:'grd_data',visibleRowNum:'',class:'cm_grid',ignoreToggleOnDisabled:'false'},E:[{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'SEQ_NO',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'SIGUNGUCODE',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'STREETNUM',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'STREET',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'STREETENG',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'DONGSEQ',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'SIDO',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'SIGUNGU',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'DONGTYPE',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'DONGCODE',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'DONG',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'PARENTSTREETNUM',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'PARENTSTREET',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'ISUSE',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'CHANGEREASON',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'CHANGEHISTORY',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'SIDOENG',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'SIGUNGUENG',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'DONGENG',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'OPENDATE',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column40',inputType:'text',width:'70',value:'CLOSEDATE',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'SEQ_NO',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'SIGUNGUCODE',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'STREETNUM',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'STREET',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'STREETENG',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'DONGSEQ',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'SIDO',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'SIGUNGU',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'DONGTYPE',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'DONGCODE',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'DONG',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'PARENTSTREETNUM',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'PARENTSTREET',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'ISUSE',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'CHANGEREASON',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'CHANGEHISTORY',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'SIDOENG',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'SIGUNGUENG',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'DONGENG',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'OPENDATE',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'CLOSEDATE',inputType:'text',width:'70',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'defaultbox dmb'},E:[{T:1,N:'w2:textbox',A:{label:'데이터 타입별 속도 측정 결과',style:'',id:'',tagname:'h1',class:'mb20'}},{T:1,N:'w2:textbox',A:{class:'df_tt dmb',id:'',label:'서버 통신 로그',style:'',tagname:'h2'}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',dataList:'dlt_result',fixedColumnWithHidden:'true',id:'grd_log',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',readOnly:'true',scrollByColumn:'false',scrollByColumnAdaptive:'false',sortable:'true',style:'height: 110px;',summaryAuto:'false',summaryOnlyAuto:'false',useFilterList:'false',useShiftKey:'true',class:'dmb',focusMode:'row',selectedRowColor:'orange',rowMouseOver:'false',autoFitMinWidth:'600'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',style:'height:20px;',value:'데이터 타입',width:'91'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px;',id:'column11',blockSelect:'false',displayMode:'label',value:'행 수'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',style:'height:20px;',value:'셀 개수',width:'117'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'height:20px;',value:'화면 랜더링(ms)',width:'122'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',style:'height:20px;',value:'서버 통신(ms)',width:'105'}},{T:1,N:'w2:column',A:{width:'109',inputType:'text',style:'height:20px;',id:'column12',blockSelect:'false',displayMode:'label',value:'실행 시각'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'type',inputType:'text',style:'height:20px',width:'91',colMerge:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'row',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'#,###',displayMode:'label',expression:'',id:'cell',inputType:'text',style:'height:20px',textAlign:'right',width:'117',colMerge:''}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'clientTime',inputType:'text',style:'height:20px',textAlign:'right',width:'122'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'serverTime',inputType:'text',style:'height:20px',textAlign:'right',width:'105'}},{T:1,N:'w2:column',A:{width:'109',inputType:'text',style:'height:20px',id:'startTime',blockSelect:'false',displayMode:'label'}}]}]}]},{T:1,N:'w2:textbox',A:{class:'df_tt dmb',id:'',label:'데이터 타입별 측정 결과 평균',style:'',tagname:'h2'}},{T:1,N:'xf:group',A:{id:'',class:'pivotTableBox'},E:[{T:1,N:'w2:pivot',A:{style:'position: relative;min-height: 320px;',dataList:'data:dlt_result',vals:'clientTime,serverTime,totCnt',rows:'type',cols:'row',id:'ui_pivot',valuesAxis:'col',autoFit:'allColumn',autoFitMinWidth:'',hiddenHeaderList:'',showZero:'',excludeHiddenList:'',sortFunction:''},E:[{T:1,N:'w2:fieldInfo',E:[{T:1,N:'w2:field',A:{name:'데이터 타입',id:'type',sortOrder:'JSON,Array'}},{T:1,N:'w2:field',A:{name:'행 개수',id:'row'}},{T:1,N:'w2:field',A:{name:'열 개수',id:'col'}},{T:1,N:'w2:field',A:{name:'셀 개수',id:'cell'}},{T:1,N:'w2:field',A:{name:'구분 키',id:'typeKey'}},{T:1,N:'w2:field',A:{name:'횟수',id:'totCnt',aggregator:'Count'}},{T:1,N:'w2:field',A:{name:'Average:서버 통신(ms)',id:'serverTime'}},{T:1,N:'w2:field',A:{name:'Average:화면 랜더링(ms)',id:'clientTime'}}]}]}]}]}]}]}]}]})