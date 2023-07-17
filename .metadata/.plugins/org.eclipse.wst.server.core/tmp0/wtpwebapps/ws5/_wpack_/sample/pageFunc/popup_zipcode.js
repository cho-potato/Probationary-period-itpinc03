/*amd /sample/pageFunc/popup_zipcode.xml 6754 21672baa9f424d2eb1f72e23356877e315d997b7811901a938208941b4ea18ff */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'title',E:[{T:3,text:'우편번호 검색'}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{id:'dma_Return',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:ondataload':'scwin.dlt_Member_ondataload'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_ZipCd',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ZIP_CD',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ZIP_NM',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BUILDING',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FROM_NO',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DISP',name:'name5',dataType:'text',importFormatter:'scwin.dlt_ZipCd_Disp_ImportFormat'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'town',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_SelectZipCd',ref:'data:json,dma_SearchParam',target:'data:json,dlt_ZipCd',action:'/edu/searchZipcode.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중입니다.','ev:submit':'scwin.sbm_SelectZipCd_submit','ev:submitdone':'','ev:submiterror':''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	
	scwin.dlt_ZipCd_Disp_ImportFormat = function(rowObj, rowIdx){
		var rs, tmpVal;
		rs = "(" + rowObj.ZIP_CD + ") " + rowObj.ZIP_NM;
		
		tmpVal = rowObj.BUILDING;
		if(tmpVal){
			rs += " ";
			rs += tmpVal;
		}
		
		tmpVal = rowObj.FROM_NO;
		if(tmpVal){
			rs += " ";
			rs += tmpVal;
		}
		
		return rs;
	};
	
	scwin.spn_ZIPCD_DispFormatter = function(curVal){
		return "("+curVal+")";
	};
	
	scwin.grd_ZipCd_onrowindexchange = function(row,oldRow) {
		var curObj = dlt_ZipCd.getRowJSON( row );
		dma_Return.set("ZIP_CD", curObj.ZIP_CD);
		dma_Return.set("ADDRESS1", curObj.ZIP_NM);
	};
	
	scwin.btn_SearchZipcd_onclick = function() {
		$p.executeSubmission( "sbm_SelectZipCd" );
	};
	
	
	scwin.btn_Save_onclick = function() {
		var paramObj = $p.getParameter("param");
		var fnStr;
		try{
			fnStr = "closeCallback_"+paramObj.popId;
			$p.parent().scwin[fnStr](JSON.stringify(dma_Return.getJSON())); 
		}catch(ex){
			opener.$p.log(ex);
		}
		$p.closePopup();
	};
	
	scwin.btn_ClosePopup_onclick = function() {
		$p.closePopup();
	};
	
	scwin.sbm_SelectZipCd_submit = function(e) {
		var param = dma_SearchParam.get("town");
		param = param.trim();
		dma_SearchParam.set("town",param);
		if(!param){
			alert("찾으시려는 동(읍/면/리)을 입력해 주세요.");
			ibx_SearchTown.focus();
			return false;
		}
	};
	
	//page onload event
	scwin.onpageload = function() {
		ibx_SearchTown.focus();
	};
	
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'popWrapper',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titlebox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt',id:'',label:'지번 주소 검색',style:'',tagname:'h2'}}]},{T:1,N:'xf:group',A:{class:'borderbox mb5',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{label:'찾으시려는 동(읍/면/리)을 입력해 주세요.',id:'',style:'',class:'mb5'}},{T:1,N:'xf:input',A:{id:'ibx_SearchTown',style:'width:80%;',placeholder:'예) 정자동',class:'mr5',ref:'data:dma_SearchParam.town','ev:onkeyup':'','ev:onkeydown':''}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_SearchZipcd_onclick',id:'btn_SearchZipcd',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'',class:'dmb',dataList:'dlt_ZipCd','ev:onrowindexchange':'scwin.grd_ZipCd_onrowindexchange',fixedColumnWithHidden:'true',hideHeader:'true',id:'grd_ZipCd',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',readOnly:'true',rowNumHeaderValue:'',rowNumVisible:'',rowNumWidth:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 120px;',summaryAuto:'false',useShiftKey:'true',visibleRowNum:'5',tooltipDisplay:'true',tooltipShowAlways:''},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',style:'height:30px;',value:'주소',width:'265'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'DISP',inputType:'text',style:'height:24px;',textAlign:'left',width:'265'}}]}]}]},{T:1,N:'xf:group',A:{class:'titlebox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt',id:'',label:'주소 입력',style:'',tagname:'h2'}}]},{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'주소'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',style:'min-height: 1em;',class:'mb5'},E:[{T:1,N:'w2:span',A:{id:'',ref:'data:dma_Return.ZIP_CD',style:'',class:'mr5',label:'',displayFormatter:'scwin.spn_ZIPCD_DispFormatter'}},{T:1,N:'w2:span',A:{id:'',ref:'data:dma_Return.ADDRESS1',style:'',class:'',label:''}}]},{T:1,N:'xf:input',A:{class:'',id:'',readOnly:'',ref:'data:dma_Return.ADDRESS2',style:'width: 100%;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_fix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tac',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_Save_onclick',id:'btn_Save',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_ClosePopup_onclick',id:'btn_ClosePopup',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})