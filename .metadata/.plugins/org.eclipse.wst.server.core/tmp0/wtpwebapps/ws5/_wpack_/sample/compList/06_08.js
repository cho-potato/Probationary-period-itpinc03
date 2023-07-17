/*amd /sample/compList/06_08.xml 11356 331d767916741d0e699dacb2641c39d65c6e7a15c7bcfc07d1654755f10d7361 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dl_person',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'IMGURL',name:'이미지'}},{T:1,N:'w2:column',A:{dataType:'text',id:'NAME',name:'이름'}},{T:1,N:'w2:column',A:{dataType:'text',id:'MARRIED',name:'결혼여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'WEDDINGDAY',name:'결혼기념일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'BLOOD_TYPE',name:'혈액형'}},{T:1,N:'w2:column',A:{dataType:'text',id:'GENDER',name:'성별'}},{T:1,N:'w2:column',A:{dataType:'text',id:'MILITARY',name:'병역여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'MILITARYINFO',name:'병역정보'}},{T:1,N:'w2:column',A:{dataType:'text',id:'EDUCATION',name:'학력'}},{T:1,N:'w2:column',A:{dataType:'text',id:'AGENCY',name:'소속사'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dl_military',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'CODE',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'CODENM',name:'name2'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'01'}]},{T:1,N:'CODENM',E:[{T:4,cdata:'육군'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'02'}]},{T:1,N:'CODENM',E:[{T:4,cdata:'해군'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'03'}]},{T:1,N:'CODENM',E:[{T:4,cdata:'공군'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'04'}]},{T:1,N:'CODENM',E:[{T:4,cdata:'해병대'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dcm_married',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'CODE',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'CODENM',name:'name2'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'N'}]},{T:1,N:'CODENM',E:[{T:4,cdata:' 아니오'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'Y'}]},{T:1,N:'CODENM',E:[{T:4,cdata:'예'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dcm_military',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'CODE',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'CODENM',name:'name2'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'fulfilled'}]},{T:1,N:'CODENM',E:[{T:4,cdata:'군필'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'unfulfilled'}]},{T:1,N:'CODENM',E:[{T:4,cdata:'미필'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'exempted'}]},{T:1,N:'CODENM',E:[{T:4,cdata:'면제'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/sample/compList/data/customInputType.json',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchPerson_submitdone','ev:submiterror':'',id:'sbm_searchPerson',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'',replace:'',target:'data:json,["dl_person"]',style:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

			scwin.onpageload = function() {
				$p.executeSubmission( "sbm_searchPerson" );
			};
		
			scwin.getCustomType = function(info){
				//console.log(info);
				var rowIndex = info.rowIndex;
		        var colIndex = info.colIndex;
		        var returnInfo ;
				switch( info.colID ){
					case "MILITARYINFO" : if( dl_person.getCellData( rowIndex ,'MILITARY' ) == 'fulfilled' ){
											returnInfo = {
											 	id : "dynamic_select_" + rowIndex + "_" + colIndex,
					                            inputType : "select",
					                            options : {
					                               viewType : "icon",
					                               chooseOption : "true"
					                               //,renderType : "native" // native로 표현 안됨 ??? 
					                               // ,embeddedInput :"true" // itemSet 안됨.??? 
					                            },
					                            itemSet : {
					                                nodeset: "data:dl_military", 
					                                label: "CODENM",
					                                value: "CODE"
					                            }
											}
											
										}
										else if( dl_person.getCellData( rowIndex ,'MILITARY' ) == 'exempted' ){
											returnInfo = {
											 	id : "dynamic_textarea_" + rowIndex + "_" + colIndex,
					                            inputType : "textarea",
					                            options : {
					                                
					                            }
											}
											
										}
										else {
											returnInfo = {
												id : "dynamic_checkbox_" + rowIndex + "_" + colIndex,
					                            inputType : "checkbox",
					                            options : {
					                               checkboxLabel : "해당없음"
					                            }
											}
										}
										
										break;
				
				}
				
				return returnInfo;
				
			};
			
			scwin.gridView1_onafteredit = function(row,col,value) {
				//console.log(value);
				var colId = this.getColumnID( col );
				if (colId == "MILITARY"){
					this.refreshCell( row , "MILITARYINFO" );
					dl_person.setCellData( row , "MILITARYINFO" , "" );
					
				}
			};
			

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'input[type=checkbox]:checked+.w2checkbox_label:before{display:none}input[type=checkbox]:checked+.w2checkbox_label:after{display:none}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{id:'group4',style:'padding: 10px;',class:'section_desc'},E:[{T:1,N:'w2:textbox',A:{id:'section',style:'',label:'그리드뷰의 inputType을 동적으로 변경하기 위해 작성된 화면이다.<br/>병역 여부값에 따라 병역정보의 inputType이 변경되는 것을 확인한다.<br/>( source : 06_08.xml )',localeRef:''}}]},{T:1,N:'w2:gridView',A:{adaptive:'',adaptiveThreshold:'',autoFit:'allColumn',class:'dmb cm_grid',columnMove:'true',dataDragDrop:'',dataDragSelect:'',dataList:'data:dl_person',defaultCellHeight:'','ev:onafteredit':'scwin.gridView1_onafteredit','ev:onbeforeedit':'','ev:oncellclick':'','ev:oneditend':'','ev:onrightbuttonclick':'','ev:onscrolly':'','ev:onviewchange':'',fixedColumnWithHidden:'true',focusMode:'row',id:'gridView1',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',mergeCells:'',oddEvenColorDisplay:'false',readOnly:'',rowNumHeaderValue:'No',rowNumStatusUniqueId:'true',rowNumVisible:'true',rowNumWidth:'',rowStatusVisible:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',senseReader:'',style:'height:370px;',summaryAuto:'false',tooltipDisplay:'true',tooltipDisplayColumn:'INFO',useCtrlOnMultisort:'',useShiftKey:'true',visibleRowNum:'8',editModeEvent:'onclick',keyMoveEditMode:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column19',inputType:'text',style:'',value:'이미지',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column17',inputType:'text',style:'',value:'이름',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column15',inputType:'text',style:'',value:'결혼여부',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'',value:'혈액형',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',style:'',value:'성별',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',style:'',value:'병역여부',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',style:'',toolTip:'병역여부에 따른 Custom Input Type',value:'* 병역정보',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'',value:'학력',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',style:'',value:'소속사',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'IMGURL',imageHeight:'40',imageWidth:'',inputType:'image',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'NAME',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{allOption:'',blockSelect:'false',chooseOption:'true',chooseOptionLabel:'',displayMode:'label',id:'MARRIED',inputType:'select',ref:'',style:'',value:'',width:'70',viewType:'icon'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'BLOOD_TYPE',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'GENDER',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:'',viewType:'icon'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'남'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'M'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'여'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]}]}]},{T:1,N:'w2:column',A:{allOption:'',blockSelect:'false',chooseOption:'true',chooseOptionLabel:'',displayMode:'label',id:'MILITARY',inputType:'select',ref:'',style:'',value:'',width:'70',viewType:'icon'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'군필'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'fulfilled'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미필'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'unfulfilled'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'면제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'exempted'}]}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'',displayMode:'label',falseValue:'0',id:'MILITARYINFO',inputType:'custom',style:'',trueValue:'$blank',typeGetter:'scwin.getCustomType',value:'',valueType:'other',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'EDUCATION',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'AGENCY',inputType:'text',style:'',value:'',width:'100'}}]}]}]}]}]}]}]})