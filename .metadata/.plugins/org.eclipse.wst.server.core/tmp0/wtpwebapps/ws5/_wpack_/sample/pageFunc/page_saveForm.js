/*amd /sample/pageFunc/page_saveForm.xml 11902 9c8d35b81ca18de4b4d04bd00fca8351e1c6c9d3bb3413e6a737adf34bd2b1db */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{id:'dma_Member',baseNode:'map',saveRemovedData:'true',repeatNode:'map','ev:oncelldatachange':'scwin.dlt_Member_oncelldatachange'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'EMP_CD',name:'코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_NM',name:'성명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'GENDER_CD',name:'성별',dataType:'text'}},{T:1,N:'w2:key',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'POSITION_CD',name:'직위',dataType:'text'}},{T:1,N:'w2:key',A:{id:'DUTY_CD',name:'직책',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ROLE_CD',name:'역할',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IMAGE_PATH',name:'이미지경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CREATED_DATE',name:'생성일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'UPDATED_DATE',name:'수정일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',ref:'data:json,dma_Member',target:'',action:'/edu/saveMember.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_save_submit','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':''}}]},{T:1,N:'script',A:{type:'text/javascript',src:'/js/eduCommon.js'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	imports("uiplugin.popup");
	
	scwin.setDispZipCd = function(curVal){
		if(curVal.length < 6){
			return curVal;
		}
		return curVal.replace(/(\d{3})/,"$1-");
	};
	        
	scwin.btn_profileImage_onclick = function() {
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
					height : "360px",
					top : "130px",
					left : "250px",
					modal : true,
					dataObject : dataObj
				};
		$p.openPopup("popup_imagePreview.xml", options);
	};
	
	scwin.closeCallback_ImagePop  = function(dataStr){
		Promise.resolve().then(function() {
        	return img_profile.setSrc( dataStr );
   	     
   	   	});
		
	};
	
	//주소 수정 버튼 클릭 시 
	scwin.btn_ZipSearch_onclick = function() {
		var dataObj = {
			type : "json",
			data : {"popId": "ZipPop"},
			name : "param"
		};
		
		var options = {
			id : "ZipPop",
			type : "wframePopup",
			popupName : "우편번호 검색",
			title : "주소 검색",
			modal : true,
			width : "480",
			height : "420",
			dataObject : dataObj   
		};
		
		$p.openPopup("popup_zipcode.xml", options);
	};
	
	scwin.closeCallback_ZipPop= function(returnData){
		var jsonData;
		if(returnData){
			jsonData = JSON.parse(returnData);
			dma_Member.setJSON( jsonData );
			//{ZIP_CD: "683210", ADDRESS1: "울산 북구 정자동", ADDRESS2: "1111"}
		}
	};
	
	//[저장]버큰 클릭
	scwin.btn_save_onclick = function(e) {
		$p.executeSubmission( "sbm_save" );
	};
	
	scwin.validateForm = function(compObj){
		compObj.removeClass("warningBox");
		if(scwin.val_stopFlow === true){return;}
		var chkStr = compObj.getUserData("userData1");
		
		try{
			var typeStr, compVal, format;
			if(chkStr && chkStr.indexOf("chk") == 0){
				compVal = compObj.getValue();
				
				if(compVal == ""){
					throw "필수 입력 항목입니다.";
				}
				
				typeStr = chkStr.split(":")[1] || "";
				if(typeStr.toLowerCase() === "email" ){
					format = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			        if ( !format.test(compVal)) {
			            throw "이메일 형식이 맞지 않습니다.";
			        }
				}
			}
		}catch(ex){
			scwin.val_stopFlow = true;
			alert(ex);
			compObj.addClass("warningBox");
			compObj.focus();
		}
	};
	
	scwin.sbm_save_submit = function(e) {
		scwin.val_stopFlow = false;
		tbl_MemberForm.invoke( "assert", scwin.validateForm );
		if(scwin.val_stopFlow === false){
			dma_Member.set( "IMAGE_PATH" , img_profile.getSrc() );
			return true;
		}
		return false;
	};
	
	scwin.sbm_save_submitdone = function(e) {
		var rsObj = e.responseJSON;
		alert(rsObj.msg);
	};
	
	//page onload event
	scwin.onpageload = function() {
		com.setCommonCode([
			{"code":"02","compID":"sbx_MemDuty"},
			{"code":"01","compID":"sbx_MemPosition"},
			{"code":"19","compID":"ccb_MemRole"},
			{"code":"101","compID":"rad_MemGender"}
		]);
		idx_EMP_NM.focus();
	};
	
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'section_desc dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'단건 저장에 대한 예시로 필수값 체크, 팝업 연계가 구현되어있다.',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'titlebox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt',id:'',label:'사용자 등록',style:'',tagname:'h2'}}]},{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb dmb',id:'tbl_MemberForm',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'성명'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'idx_EMP_NM',placeholder:'필수입력입니다.',ref:'data:dma_Member.EMP_NM',style:'',mandatory:'',displaymessage:'',minlength:'',maxlength:'',userData1:'chk',minByteLength:'',validator:'',class:'defSize'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n    					사진\n    					'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'xf:image',A:{id:'img_profile',style:'width: 100px;height: 100px;',src:'',class:'dmb',ref:''}},{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'btn_profileImage',style:'width:100px;','ev:onclick':'scwin.btn_profileImage_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사진 변경'}]}]}]},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'등록일'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{weekStartsOn:'0',rightAlign:'false',calendarValueType:'yearMonthDate',renderType:'component',id:'',renderDiv:'true',style:'',focusOnDateSelect:'false',footerDiv:'false',ref:'data:dma_Member.JOIN_DATE',dateValidCheck:'true',setCurrentDate:'true',class:'defSize'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'성별'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',id:'rad_MemGender',ref:'data:dma_Member.GENDER_CD',rows:'1',selectedIndex:'0',style:'min-height: 21px;min-width: 50px;',renderType:'radiogroup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n    					이메일\n    					'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{displaymessage:'',id:'',mandatory:'',placeholder:'필수입력입니다.',ref:'data:dma_Member.EMAIL',style:'width:100%;',userData1:'chk:email'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'직책'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'sbx_MemDuty',ref:'data:dma_Member.DUTY_CD',style:'',submenuSize:'auto',class:'defSize'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'직위'},{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'sbx_MemPosition',ref:'data:dma_Member.POSITION_CD',style:'',submenuSize:'auto',class:'defSize'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n    					역할\n    					'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'ccb_MemRole',ref:'data:dma_Member.ROLE_CD',style:'',submenuSize:'auto',class:'defSize'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n    					담당업무\n    					'},{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'',ref:'data:dma_Member.ASSIGNED_TASK',style:'',class:'defSize'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'주소'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:input',A:{class:'mb5 mr5',dataType:'text',displayFormat:'',displayFormatter:'scwin.setDispZipCd',id:'',readOnly:'true',ref:'data:dma_Member.ZIP_CD',style:'width: 60px;',mandatory:'',displaymessage:'',userData1:'chk','ev:onclick':'scwin.btn_ZipSearch_onclick'}},{T:1,N:'xf:input',A:{class:'mb5 dmr ch100',id:'',readOnly:'true',ref:'data:dma_Member.ADDRESS1',style:'width: 200px;','ev:onclick':'scwin.btn_ZipSearch_onclick'}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_ZipSearch_onclick',id:'btn_ZipSearch',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'우편번호'}]}]},{T:1,N:'xf:input',A:{class:'',id:'',readOnly:'true',ref:'data:dma_Member.ADDRESS2',style:'width: 100%;',mandatory:'',displaymessage:'',userData1:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:'text-align: center;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_save_onclick',id:'btn_save',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})