/*amd /sample/compFunc/fn_gridView_excel_ImgDownload.xml 8451 44f50ffe49f06630d2a5fbe4892b6a9d37894d8f88807371d221684f8d892806 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/template/cm/css/all.css" type="text/css"'},{T:7,N:'xml-stylesheet',instruction:'href="/template/cm/css/contents.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_ExcelData',baseNode:'list',style:'',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'picture',name:'사진',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type',name:'종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Money',name:'가격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'manufacturer',name:'제조사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Trading',name:'거래량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Market',name:'시장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Inputdate',name:'기준일',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm',ref:'',target:'data:json,dlt_ExcelData',action:'/sample/data/excelImg.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
   
			scwin.onpageload = function() {
				
			};
			
			//조회버튼 클릭
			scwin.btn_search_onclick = function(e) {
				$p.executeSubmission( "sbm" );
			};
			
			//콜백
			scwin.sbm_submitdone = function(e) {
				
			};
			
			//그리드 -> 엑셀 다운로드
			scwin.btn_excel_onclick = function(e) {
				/*
				websquare_home -> config -> websquare.xml

		         <websquare>
		            <excel>
		                <download>
		                    <baseDir value="서비스 기준경로(ROOT)" />
		               
		                   <!--  예)
		                     <baseDir value="C:\WRM\WORKSPACE\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\wtpwebapps" />
		                     <baseDir value="C:\WRM\WORKSPACE\ws5\WebContent"/>   --> 이와같은 실제 wtp서버가 아닌 로컬경로는 넣으면 안된다. 이유는
		                   -->
		                </download>
		            </excel>
		            
		            .....
		        </websquare>
		        
		        
		          ※주의사항 : 
		    1) 대용량에서는 적합하지 않으므로 사용하지 않는다.
		    2) 이미지 경로가 was 서버에 존재해야 다운로드 할 수 있다.      
		     이클립스의 wtp서버가 아닌 로컬파일의 경로(C:\WRM\WORKSPACE\ws5\WebContent)가 아닌 wtp서버의 경로를 넣어야 한다.
                    로컬파일의 경로를 넣을 경우, 웹스퀘어 화면에서 이미지 업로드후 다운로드받을 때 새로고침을 하지 않으면 실제로 업로드가 됐다고 인식하지 않아서 이미지를 내려받을 수 없다.
                    그러므로 로컬에서 테스트할 때는 wtp서버의 경로를 넣는 것이 바람직하다.
				
				*/
				
				var options = {};
				options.fileName = "ExcelImgDownload.xlsx";
				options.headerRowHeight = 40;     // [필수] header 높이 
				options.rowHeight = "50";         // [필수] body 높이 
				options.useImage = "true";        // [필수] inputType="image"인 경우 이미지 다운로드 사용
				
				grd_Excel.advancedExcelDownload( options );
			};
			

}}}]},{T:1,N:'style',A:{type:'text/css'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:'',style:'padding:20px;'},E:[{T:1,N:'xf:group',A:{class:'section_desc pd10',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'* 대용량 데이터에서는 적합하지 않다. (메모리 사용량이 매우 크며, 속도가 느림)<br/>gridView에서 이미지를 포함한 데이터가 있는 경우에 이를 엑셀로 내려주는 방법을 가이드 한다.<br/>이를 사용하기 위해서는 advancedExcelDownload의 옵션 중 headerRowHeight, rowHeight, useImage 옵션을 필수로 주어야 하며,<br/>websquare_home -> config -> websquare.xml 의 파일에서 아래 옵션이 선언되어 있어야만 한다.(소스내 주석 참조)<br/>C:\\WRM\\RESOURCE\\WS5\\websquare_home\\config\\websquare.xml의 &nbsp;baseDir value 부분 확인 <br/>각 기능은 버튼에 연결되어 있으며 버튼의 onclick이벤트에 적용된 function을 통해 확인한다.<br/>( source : fn_gridView_excel_ImgDownload.xml )',style:'',tagname:'',escape:''}}]},{T:1,N:'xf:group',A:{class:'defaultbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:'margin-bottom: 10px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.btn_excel_onclick',id:'btn_excel',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드(이미지 포함)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.btn_search_onclick',id:'btn_search',style:'margin-right: 10px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'cm_grid',dataList:'data:dlt_ExcelData',dragStartFunction:'',fixedColumnWithHidden:'true',focusFlow:'',focusMode:'',id:'grd_Excel',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',rowNumHeaderValue:'No',rowNumStatusResize:'',rowNumVisible:'false',rowNumWidth:'30',rowStatusHeaderValue:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height:100px;',summaryAuto:'false',tooltipFormatter:'',useShiftKey:'true',visibleRowNum:'15','ev:oncellclick':'','ev:oneditend':'','ev:onfilereadend':'scwin.grd_Excel_onfilereadend',dataDragSelect:'true',copyOption:'display',defaultCellHeight:'30'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'사진',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'종류',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'가격',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'제조사',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'거래량',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'시장',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'기준일',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'image',style:'',id:'picture',value:'',blockSelect:'false',displayMode:'label',imageHeight:'30',imageWidth:'30'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'type',value:'',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'Money',value:'',blockSelect:'false',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'manufacturer',value:'',blockSelect:'false',displayMode:'label',dataType:'text',displayFormat:'',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'Trading',value:'',blockSelect:'false',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'Market',value:'',blockSelect:'false',displayMode:'label',dataType:'text',displayFormat:'',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'Inputdate',value:'',blockSelect:'false',displayMode:'label',displayFormat:'yyyy-MM-dd',dataType:'date'}}]}]}]}]}]}]}]}]})