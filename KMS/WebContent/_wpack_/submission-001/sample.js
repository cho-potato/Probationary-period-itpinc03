/*amd /submission-001/sample.xml 7655 09bed62029cb502637c5c998e6231bdfc88ffbcb0b8021fdc26f26b6a88d09e2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'accountList',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'accountNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountGroupKindCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customerNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currencyCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'openDate',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'password',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interestRate',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'availableBalance',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'passwordErrCnt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastUpdateDate',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dailyTransferLimit',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customerName',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'isValidPassword',name:'name15',dataType:'text'}}]},{T:1,N:'w2:data'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'data:json',target:'data:json,{"id":"accountList","key":"serviceReturnValue"}',action:'/KMS/TechDB/submission-001/res.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중입니다.','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
		scwin.onpageload = function() {
		
		};
		
		scwin.onpageunload = function() {
		
		};
		
		scwin.trigger1_onclick = function(e) {
			$p.executeSubmission( "submission1" );
		};
		
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.gridHeaderTableDefault th{height:30px}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'SAMPLE',style:'font-size:40px;font-weight:bold;text-align:center;'}},{T:1,N:'xf:group',A:{id:'',style:'margin:10px;'},E:[{T:1,N:'w2:gridView',A:{ignoreCellClick:'false',id:'',dataList:'accountList',ignoreToggleOnDisabled:'false',useShiftKey:'true',scrollByColumn:'false',fixedColumnWithHidden:'true',style:'height:300px;',autoFit:'allColumn',visibleRowNum:'10'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column25',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'계좌번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column23',style:'height:30px;',inputType:'text',width:'100',displayMode:'label',value:'계좌종류코드'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column21',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'고객번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column19',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'통화코드'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column17',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'개설일시'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column15',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'패스워드'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column13',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'이자율'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column11',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'상태'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'잔액'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'height:30px;',inputType:'text',width:'120',displayMode:'label',value:'패스워드오류횟수'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:30px;',width:'90',inputType:'text',displayMode:'label',value:'업데이트일시'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column27',style:'height:30px;',inputType:'text',width:'90',displayMode:'label',value:'일일이체한도'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column29',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'비고'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column31',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'고객명'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column33',style:'height:30px;',inputType:'text',width:'70',displayMode:'label',value:'패스워드검증'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'accountNo',style:'height:20px;',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'accountGroupKindCd',style:'height:20px;',inputType:'text',width:'100',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'customerNo',style:'height:20px;',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'currencyCd',style:'height:20px;',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'openDate',style:'height:20px;',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'password',style:'height:20px;',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'interestRate',style:'height:20px;',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'status',style:'height:20px;',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'availableBalance',style:'height:20px;',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'passwordErrCnt',style:'height:20px;',inputType:'text',width:'120',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'lastUpdateDate',style:'height:20px;',width:'90',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'dailyTransferLimit',style:'height:20px;',inputType:'text',width:'90',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'remark',style:'height:20px;',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'customerName',style:'height:20px;',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'isValidPassword',style:'height:20px;',inputType:'text',width:'70',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position: relative;width: 100px;height: 30px;margin-left: 8px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'데이터 조회'}]}]}]}]}]})