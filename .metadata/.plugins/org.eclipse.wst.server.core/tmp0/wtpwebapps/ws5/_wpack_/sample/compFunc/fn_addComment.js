/*amd /sample/compFunc/fn_addComment.xml 19721 6f42d7645638e4a040b62c9db48075ff27dd6afea2081b84ffaf6f52ed1492a4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_bmt03Cont',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'NTT_NO',name:'NTT_NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UP_NTT_NO',name:'UP_NTT_NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'LEV',name:'LEV',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NTT_IPCR_YN',name:'NTT_IPCR_YN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NTT_TITLE',name:'NTT_TITLE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NTT_CNTS',name:'NTT_CNTS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'NTT_CNTS_DESC',name:'NTT_CNTS_DESC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'READ_CNT',name:'READ_CNT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GOOD_CNT',name:'GOOD_CNT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'USER_NM',name:'USER_NM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PSTN_NM',name:'PSTN_NM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DEPT_NM',name:'DEPT_NM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'INPUT_DATETIME',name:'INPUT_DATETIME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'REPLY_CNT',name:'REPLY_CNT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'REL_CNT',name:'REL_CNT',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_bmt03Reply',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'NTT_NO',name:'NTT_NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'REPLY',name:'REPLY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'INPUT_DATETIME',name:'INPUT_DATETIME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'USER_NM',name:'USER_NM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PSTN_NM',name:'PSTN_NM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DEPT_NM',name:'DEPT_NM',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'NTT_NO',name:'NTT_NO',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_SNSCont',ref:'',target:'data:json,{"id":"dlt_bmt03Cont","key":"dlt_bmt03Cont"}',action:'/sample/data/addComment_MasterData.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_SNSCont_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SNSReply',ref:'data:json,dma_Search',target:'data:json,{"id":"dlt_bmt03Reply","key":"dlt_bmt03Reply"}',action:'/sample/data/addComment_DetatilData.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_SNSReply_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
			
			scwin.onpageload = function() {
				$p.executeSubmission("sbm_SNSCont");
			};
			
			// 본문 조회 콜백 함수.
			scwin.sbm_SNSCont_submitdone = function(e) {
				var cnt = dlt_bmt03Cont.getRowCount();
				
				for(var i=0; i<cnt; i++){
					gen_replyM.insertChild( i );
					gen_replyM.getChild( i, "txt_title" ).setValue(dlt_bmt03Cont.getCellData( i , "NTT_TITLE" ));   // 제목
					gen_replyM.getChild( i, "txt_goodCnt" ).setValue(dlt_bmt03Cont.getCellData( i , "GOOD_CNT" )); // 좋아요
					gen_replyM.getChild( i, "txt_readCnt" ).setValue(dlt_bmt03Cont.getCellData( i , "READ_CNT" )); //조회
					gen_replyM.getChild( i, "txt_userNm" ).setValue(dlt_bmt03Cont.getCellData( i , "USER_NM" ) + " " + dlt_bmt03Cont.getCellData( i , "PSTN_NM" ) + " " + dlt_bmt03Cont.getCellData( i , "DEPT_NM" )); //사원명    
					gen_replyM.getChild( i, "txt_replyCnt" ).setValue(dlt_bmt03Cont.getCellData( i , "REPLY_CNT" )); //의견
					gen_replyM.getChild( i, "txt_inputDatetime" ).setValue(dlt_bmt03Cont.getCellData( i , "INPUT_DATETIME" )); //수정일시
					gen_replyM.getChild( i, "txt_relCnt" ).setValue(dlt_bmt03Cont.getCellData( i , "REL_CNT" )); //연관글
					gen_replyM.getChild( i, "txt_cnts" ).setValue(dlt_bmt03Cont.getCellData( i , "NTT_CNTS" ) + dlt_bmt03Cont.getCellData( i , "NTT_CNTS_DESC" )); //축약내용
					//gen_replyM.getChild( i, "txt_cnts_s" ).setValue(dlt_bmt03Cont.getCellData( i , "NTT_CNTS" ) ); //전체내용
					
					var lvl = dlt_bmt03Cont.getCellData( i , "LEV" );
					var ipcr_yn = dlt_bmt03Cont.getCellData( i , "NTT_IPCR_YN");
					gen_replyM.getChild( i, "txt_ipcrYn" ).addClass("snsIpcr" + ipcr_yn);
					gen_replyM.getChild( i, "txt_ipcrYn" ).setUserData("IPCR_YN", ipcr_yn);
					
					if (lvl > 0 ){
						var grpObj = gen_replyM.getChild( i, "grp_reply" );
						grpObj.addClass("ml30sns" );
						
						var markObj = gen_replyM.getChild( i, "grp_snsMark" );
						markObj.addClass("snsOnMark" +lvl );
					}
				}
			};
			
			// 댓글 조회 콜백 함수.
			scwin.sbm_SNSReply_submitdone = function(e) {
				var repIdx = gen_replyM.getUserData('reply_idx');
				var genS = gen_replyM.getChild(repIdx, "gen_replyS");
				
				var cnt = dlt_bmt03Reply.getRowCount();
				gen_replyM.getChild(repIdx, "txt_repCnt").setValue(cnt);
				
				for(var i=0; i<cnt; i++){
					genS.insertChild();
					genS.getChild( i, "txt_repUser" ).setValue(dlt_bmt03Reply.getCellData( i , "USER_NM" ) + " " + dlt_bmt03Reply.getCellData( i , "PSTN_NM" ) + " " +dlt_bmt03Reply.getCellData( i , "DEPT_NM" ));
					genS.getChild( i, "txt_repDate" ).setValue(dlt_bmt03Reply.getCellData( i , "INPUT_DATETIME" ));
					genS.getChild( i, "txt_repCont" ).setValue(dlt_bmt03Reply.getCellData( i , "REPLY" ));
				}
			};
			
			// 본문 타이틀 클릭 이벤트.
			scwin.txt_title_onclick = function(e) {
				var index = this.getGeneratedIndex();
				var grpObj = gen_replyM.getChild( index , "grp_reply" );
				
				gen_replyM.setUserData("reply_idx", index);
				
				if( !grpObj.hasClass('unit_sns_open') ){
					gen_replyM.getChild(index, "tr_repCnt").show("");
					gen_replyM.getChild(index, "tr_repIpt").show("");
					var contHeight= $("#gen_replyM_"+index+"_txt_cnts").get(0).scrollHeight ;
					$("#gen_replyM_"+index+"_txt_cnts").animate({height: contHeight},500 , function(){grpObj.toggleClass('unit_sns_open'); } );
				}
				else {
					gen_replyM.getChild(index, "tr_repCnt").hide();
					gen_replyM.getChild(index, "tr_repIpt").hide();
					grpObj.toggleClass('unit_sns_open'); 
					$("#gen_replyM_"+index+"_txt_cnts").animate({height: "44px"},500  );
				}
				
				
				if ( this.getUserData("compSchYn") != "Y"){
					dma_Search.set( "NTT_NO" , dlt_bmt03Cont.getCellData( this.getGeneratedIndex() , "NTT_NO" ) );
					common.executeSubmission("sbm_SNSReply");
					this.setUserData("compSchYn","Y");
				}
				else {
					var genS = gen_replyM.getChild(index, "gen_replyS");
					genS.removeAll();
					this.setUserData("compSchYn","N");
				}
			};
			
			// 중요도(별) 클릭 이벤트.
			scwin.txt_ipcrYn_onclick = function(e) {
				var ipcr_yn = this.getUserData("IPCR_YN");
				if( ipcr_yn == "N"){
					this.removeClass("snsIpcrN");
					this.addClass("snsIpcrY");
					this.setUserData("IPCR_YN", "Y");
				}
				else {
					this.removeClass("snsIpcrY");
					this.addClass("snsIpcrN");
					this.setUserData("IPCR_YN", "N");
				}
			};
			
	

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.btn_gcm3{position:relative;float:left;padding:0 2px 0 0;margin:0 0 0 3px;background:#989898;border:1px solid #828282;vertical-align:top;-o-border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px}.btn_gcm3 a{padding:0;height:auto;min-height:15px;line-height:normal;position:relative;display:inline-block;color:#fff}.btn_gcm3.reg a{line-height:25px}.sns_tb.w2tb .w2tb_td,.sns_tb.w2tb .w2tb_th{border:0!important}.sns_close>*{color:#aaa}.unit_sns_open>*{color:initial}.unit_sns_open .sns_cnts{height:auto!important}.ml30sns{margin-left:30px}.snsIpcrN{background:url(/kcc/images/kcc/icon_mailMark_off.png) center center no-repeat!important}.snsIpcrY{background:url(/kcc/images/kcc/icon_mailMark_on.png) center center no-repeat!important}.snsOnMark1 .snsRply div{display:none!important}.snsOnMark1 .snsRply img{display:block!important}.snsOnMark1 .snsRply{display:block!important}.snsOnMark1 .snsRply{display:block!important}.snsOnMark1 .snsIpcrN,.snsOnMark1 .snsIpcrY{margin-left:-1px!important}.snsOnMark2 .snsRply div{display:block!important}.snsOnMark2 .snsRply img{display:block!important}.snsOnMark2 .snsRply{display:block!important}.snsOnMark2 .snsIpcrN,.snsOnMark2 .snsIpcrY{margin-left:-5px!important}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc',id:'',style:'padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Generator를 이용하여 구현한 화면으로 댓글 기능을 구성하였다.<br/>( source : fn_addComment.xml )',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'contentbox'},E:[{T:1,N:'xf:group',A:{style:'margin-bottom:10px;',id:'',class:'defaultbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'댓글 입력',class:'df_tt fl'}}]},{T:1,N:'w2:generator',A:{style:'',id:'gen_replyM',class:'sns_close'},E:[{T:1,N:'xf:group',A:{style:'padding:10px;border: 1px solid #a9a7a7;margin-bottom:5px;',id:'grp_reply'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:100.00%;',id:'',class:'w2tb sns_tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:50px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:40px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:30px;'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'text-align:center;',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_snsMark',class:'snsOffMark'},E:[{T:1,N:'xf:group',A:{style:'display:none;',id:'',class:'snsRply'},E:[{T:1,N:'w2:textbox',A:{style:'width: 4px;height: 24px;float:left;background:url(/kcc/images/kcc/replyLine.png)left center repeat-x;',id:'',label:'',class:''}},{T:1,N:'xf:image',A:{src:'/kcc/images/kcc/replyMark.png',style:'width: 17px;height: 24px;float:left;',id:'',class:''}}]},{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.txt_ipcrYn_onclick',style:'width:25px;height:25px;margin-left:14px;display:inline-block;background:url(/kcc/images/kcc/icon_mailMark_off.png) center center no-repeat;cursor:pointer;',label:'',id:'txt_ipcrYn',class:'snsIpcrN'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{org_label:'모바일 보안 App 전산실 테스트','ev:onclick':'scwin.txt_title_onclick',style:'height: 23px;font-size:15px;line-height: 23px;cursor:pointer;text-overflow: ellipsis;white-space: nowrap;word-wrap: normal;overflow: hidden;font-weight: bold;',id:'txt_title',label:'모바일 보안 App 전산실 테스트'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'background: url(/kcc/images/kcc/icon_recomend.png) left center no-repeat;',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{org_label:'0',style:'line-height: 23px;height: 23px;text-align: right;color:#666;width:100%;cursor:pointer;',id:'txt_goodCnt',label:'0'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{org_label:'조회',style:'line-height:23px;height: 23px;text-align:right;color:#666;font-size:10px;width:100%;font-weight:bold;',id:'',label:'조회'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{org_label:'0',style:'line-height: 23px;height: 23px;text-align: right;color:#666;width:100%;',id:'txt_readCnt',label:'0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'text-align:center;',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:image',A:{src:'/img/addComment/profile_basic.png',style:'width:45px;left:0px;top:0px;margin-left:14px;',id:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{org_label:'이재용 사원 IT 보안팀',style:'padding-left: 20px ;line-height: 20px;height: 20px;',id:'txt_userNm',label:'이재용 사원 IT 보안팀'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{org_label:'의견',style:'line-height:23px;height: 23px;text-align:right;color:#666;font-size:10px;width:100%;font-weight:bold;',id:'',label:'의견'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{org_label:'0',style:'line-height: 23px;height: 23px;text-align: right;color:#666;width:100%;',id:'txt_replyCnt',label:'0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{org_label:'수정함',style:'padding-left: 20px ;line-height: 20px;height: 20px;float:left;',id:'',label:'수정함'}},{T:1,N:'w2:span',A:{org_label:'-',style:'float:left;padding:3px;',id:'',label:'-'}},{T:1,N:'w2:textbox',A:{org_label:'20160819',style:'line-height: 20px;height: 20px;float:left;',id:'txt_inputDatetime',label:'20160819'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{org_label:'연관글',style:'line-height:23px;height: 23px;text-align:right;color:#666;font-size:10px;width:100%;font-weight:bold;',id:'',label:'연관글'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{org_label:'0',style:'line-height: 23px;height: 23px;text-align: right;color:#666;width:100%;',id:'txt_relCnt',label:'0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'padding: 40px 20px 10px 20px;',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{org_label:'전체 본문 내용을 펼쳐서 보여줌 <br/>(애니메이션 효과) &nbsp;<br/>의견란을 조회하여 보여줌 &nbsp;<br/>(의견등록란은 실제 등록은 하지 않음) &nbsp;',style:'height:44px;text-overflow: ellipsis;white-space: nowrap;word-wrap: normal;overflow: hidden;    font-weight: bold;',label:'전체 본문 내용을 펼쳐서 보여줌 <br/>(애니메이션 효과) &nbsp;<br/>의견란을 조회하여 보여줌 &nbsp;<br/>(의견등록란은 실제 등록은 하지 않음) &nbsp;',id:'txt_cnts',class:'sns_cnts'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'display:none;',id:'tr_repCnt'},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{org_label:'0',dataType:'number',displayFormat:'의견 #,### 개',style:'width:100%;height: 20px;text-decoration: underline;',label:'0',id:'txt_repCnt'}},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'height:0px;',id:'td_reply',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:generator',A:{style:'',id:'gen_replyS'},E:[{T:1,N:'xf:group',A:{style:'margin-right:80px;border-bottom:1px solid #e0e0e0;',id:''},E:[{T:1,N:'xf:image',A:{src:'/img/addComment/profile_basic.png',style:'width:35px;height:35px;left:0px;top:0px;margin-left:14px;float:left;',id:''}},{T:1,N:'xf:group',A:{style:'overflow:hidden;',id:''},E:[{T:1,N:'w2:textbox',A:{style:'line-height: 20px;height: 20px;color:#3c3c3c;font-size:11px;margin-left:30px;float:left;',id:'txt_repUser',label:'김성은 대리 IT 보안팀'}},{T:1,N:'w2:textbox',A:{dataType:'',displayFormat:'',style:'line-height: 20px;height: 20px;color:#3c3c3c;font-size:11px;margin-left: 20px;float:left;',id:'txt_repDate',label:'201611090754'}},{T:1,N:'w2:textbox',A:{style:'clear:both;line-height: 20px;margin-left:30px;font-weight:bold;',id:'txt_repCont',label:'안녕하세요'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'display:none;',id:'tr_repIpt'},E:[{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:image',A:{src:'/img/addComment/profile_basic.png',style:'width:35px;height:35px;left:0px;top:0px;margin-left:14px;float:left;',id:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'overflow:hidden;left:0px;top:0px;',id:''},E:[{T:1,N:'w2:textbox',A:{org_label:'김성은 대리 IT 보안팀',style:'height: 20px;line-height: 20px;float:left;color:#aaa;font-size:11px;',id:'',label:'김성은 대리 IT 보안팀'}},{T:1,N:'xf:textarea',A:{style:'height: 25px;width:97%;line-height: 20px;clear:both;padding: 0px;',id:'',placeholder:'의견을 입력하세요'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:anchor',A:{'ev:onclick':'',style:'font-size:9px;padding:0px;width:100%;text-align:center;background: #399bca;border:1px solid #399bca;',id:'',class:'btn_gcm3'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'연관글 등록'}]}]},{T:1,N:'w2:anchor',A:{'ev:onclick':'',style:'font-size:10px;padding:0px;width:100%;text-align:center;margin-top:2px;height:25px;line-height: 25px;',id:'',class:'btn_gcm3 reg'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'의견 등록'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;display:none;',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:40px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:40px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:40px;'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'width:100%'},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:image',A:{src:'/img/addComment/profile_basic.png',style:'width:35px;height:35px;left:0px;top:0px;margin-left:14px;float:left;',id:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'overflow:hidden;',id:''},E:[{T:1,N:'w2:textbox',A:{style:'line-height: 20px;height: 20px;float:left;',id:'',label:'김성은 대리 IT 보안팀'}},{T:1,N:'w2:textbox',A:{dataType:'date',displayFormat:'yyyy-MM-dd HH:mm',style:'height: 20px;line-height: 20px;float:left;margin-left: 20px;',id:'',label:'201611090754'}},{T:1,N:'w2:textbox',A:{style:'clear:both;line-height: 20px;height: 20px;',id:'',label:'안녕하세요'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}}]}]}]}]}]}]}]})