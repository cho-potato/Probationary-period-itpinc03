/*amd /sample/compFunc/fn_drilldownDragDrop.xml 18442 3649bb96479d82c73f043124f23b91d358ca935df7cf1eafb6003978accfd6ca */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_list',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'column1',name:'displayRowIndex',dataType:'text'}},{T:1,N:'w2:column',A:{id:'d_level',name:'LVL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'column2',name:'content',dataType:'text'}},{T:1,N:'w2:column',A:{id:'column3',name:'depth',dataType:'text'}},{T:1,N:'w2:column',A:{id:'column4',name:'h_col4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	scwin.onpageload = function() {
		var _json = [{"column1":"", "d_level":"1", "column2":"[1depth] 가", "column3":"1", "column4":"1_1"}
					,{"column1":"", "d_level":"2", "column2":"가_A", "column3":"2", "column4":"1_2"}
					,{"column1":"", "d_level":"3", "column2":"가_A_1", "column3":"3", "column4":"1_3"}
					,{"column1":"", "d_level":"4", "column2":"가_A_1_i", "column3":"4", "column4":"1_4_1"}
					,{"column1":"", "d_level":"5", "column2":"가_A_1_i_test", "column3":"5", "column4":"1_5_1"}
					,{"column1":"", "d_level":"3", "column2":"가_A_2", "column3":"3", "column4":"1_4"}
					,{"column1":"", "d_level":"4", "column2":"가_A_1_ii", "column3":"4", "column4":"1_4_1"}
					,{"column1":"", "d_level":"3", "column2":"가_A_3", "column3":"3", "column4":"1_5"}
					,{"column1":"", "d_level":"4", "column2":"가_A_1_iii", "column3":"4", "column4":"1_5_1"}
					,{"column1":"", "d_level":"2", "column2":"가_B", "column3":"2","column4":"2_1"}
					,{"column1":"", "d_level":"3", "column2":"가_B_1", "column3":"3", "column4":"2_2"}
					,{"column1":"", "d_level":"3", "column2":"가_B_2", "column3":"3", "column4":"2_3"}
					,{"column1":"", "d_level":"3", "column2":"가_B_3", "column3":"3", "column4":"2_4"}
					,{"column1":"", "d_level":"4", "column2":"가_B_3_i", "column3":"4", "column4":"2_4_1"}
					,{"column1":"", "d_level":"5", "column2":"가_B_3_i_test", "column3":"5", "column4":"2_5_1"}
					,{"column1":"", "d_level":"4", "column2":"가_B_3_ii", "column3":"4", "column4":"2_4_2"}
					,{"column1":"", "d_level":"5", "column2":"가_B_3_ii_test", "column3":"5", "column4":"2_5_2"}
					,{"column1":"", "d_level":"2", "column2":"가_C", "column3":"2", "column4":"3_1"}
					,{"column1":"", "d_level":"3", "column2":"가_C_1", "column3":"3", "column4":"3_2"}
					,{"column1":"", "d_level":"3", "column2":"가_C_2", "column3":"3", "column4":"3_3"}
					,{"column1":"", "d_level":"3", "column2":"가_C_3", "column3":"3", "column4":"3_4"}
					,{"column1":"", "d_level":"4", "column2":"가_C_3_i", "column3":"4", "column4":"3_5"}
					,{"column1":"", "d_level":"1", "column2":"[1depth] 나", "column3":"1", "column4":"A_1"}
					,{"column1":"", "d_level":"2", "column2":"나_A", "column3":"2", "column4":"A_2"}
					,{"column1":"", "d_level":"3", "column2":"나_A_1", "column3":"3", "column4":"A_3"}
					,{"column1":"", "d_level":"3", "column2":"나_A_2", "column3":"3", "column4":"A_4"}
					,{"column1":"", "d_level":"3", "column2":"나_A_3", "column3":"3", "column4":"A_5"}
					,{"column1":"", "d_level":"2", "column2":"나_B", "column3":"2", "column4":"A_6"}
					,{"column1":"", "d_level":"3", "column2":"나_B_1", "column3":"3", "column4":"A_7"}
					,{"column1":"", "d_level":"3", "column2":"나_B_2", "column3":"3", "column4":"A_8"}
					,{"column1":"", "d_level":"3", "column2":"나_B_3", "column3":"3", "column4":"A_9"}
					,{"column1":"", "d_level":"2", "column2":"나_C", "column3":"2", "column4":"A_10"}
					,{"column1":"", "d_level":"3", "column2":"나_C_1", "column3":"3", "column4":"A_11"}
					,{"column1":"", "d_level":"3", "column2":"나_C_2", "column3":"3", "column4":"A_12"}
					,{"column1":"", "d_level":"3", "column2":"나_C_3", "column3":"3", "column4":"A_13"}
					,{"column1":"", "d_level":"1", "column2":"[1depth] 다", "column3":"1", "column4":"B_1"}
					,{"column1":"", "d_level":"2", "column2":"다_A", "column3":"2", "column4":"B_2"}
					,{"column1":"", "d_level":"3", "column2":"다_A_1", "column3":"3", "column4":"B_3"}
					,{"column1":"", "d_level":"3", "column2":"다_A_2", "column3":"3", "column4":"B_4"}
					,{"column1":"", "d_level":"3", "column2":"다_A_3", "column3":"3", "column4":"B_5"}
					,{"column1":"", "d_level":"2", "column2":"다_B", "column3":"2", "column4":"B_6"}
					,{"column1":"", "d_level":"3", "column2":"다_B_1", "column3":"3", "column4":"B_7"}
					,{"column1":"", "d_level":"3", "column2":"다_B_2", "column3":"3", "column4":"B_8"}
					,{"column1":"", "d_level":"3", "column2":"다_B_3", "column3":"3", "column4":"B_9"}
					,{"column1":"", "d_level":"2", "column2":"다_C", "column3":"2", "column4":"B_10"}
					,{"column1":"", "d_level":"3", "column2":"다_C_1", "column3":"3", "column4":"B_11"}
					,{"column1":"", "d_level":"3", "column2":"다_C_2", "column3":"3", "column4":"B_12"}
					,{"column1":"", "d_level":"3", "column2":"다_C_3", "column3":"3", "column4":"B_13"}
					,{"column1":"", "d_level":"1", "column2":"[1depth] 라", "column3":"1", "column4":"C_1"}
					,{"column1":"", "d_level":"2", "column2":"라_A", "column3":"2", "column4":"C_2"}
					,{"column1":"", "d_level":"3", "column2":"라_A_1", "column3":"3", "column4":"C_3"}
					,{"column1":"", "d_level":"3", "column2":"라_A_2", "column3":"3", "column4":"C_4"}
					,{"column1":"", "d_level":"3", "column2":"라_A_3", "column3":"3", "column4":"C_5"}
					,{"column1":"", "d_level":"2", "column2":"라_B", "column3":"2", "column4":"C_6"}
					,{"column1":"", "d_level":"3", "column2":"라_B_1", "column3":"3", "column4":"C_7"}
					,{"column1":"", "d_level":"3", "column2":"라_B_2", "column3":"3", "column4":"C_8"}
					,{"column1":"", "d_level":"3", "column2":"라_B_3", "column3":"3", "column4":"C_9"}
					,{"column1":"", "d_level":"2", "column2":"라_C", "column3":"2", "column4":"C_10"}
					,{"column1":"", "d_level":"3", "column2":"라_C_1", "column3":"3", "column4":"C_11"}
					,{"column1":"", "d_level":"3", "column2":"라_C_2", "column3":"3", "column4":"C_12"}
					,{"column1":"", "d_level":"3", "column2":"라_C_3", "column3":"3", "column4":"C_13"}
					,{"column1":"", "d_level":"1", "column2":"[1depth] 마", "column3":"1", "column4":"C_14"}
					,{"column1":"", "d_level":"2", "column2":"마_A", "column3":"2", "column4":"D_1"}
					,{"column1":"", "d_level":"3", "column2":"마_A_1", "column3":"3", "column4":"D_2"}
					,{"column1":"", "d_level":"3", "column2":"마_A_2", "column3":"3", "column4":"D_3"}
					,{"column1":"", "d_level":"3", "column2":"마_A_3", "column3":"3", "column4":"D_4"}
					,{"column1":"", "d_level":"2", "column2":"마_B", "column3":"2", "column4":"D_5"}
					,{"column1":"", "d_level":"3", "column2":"마_B_1", "column3":"3", "column4":"D_6"}
					,{"column1":"", "d_level":"3", "column2":"마_B_2", "column3":"3", "column4":"D_7"}
					,{"column1":"", "d_level":"3", "column2":"마_B_3", "column3":"3", "column4":"D_8"}
					,{"column1":"", "d_level":"2", "column2":"마_C", "column3":"2", "column4":"D_9"}
					,{"column1":"", "d_level":"3", "column2":"마_C_1", "column3":"3", "column4":"D_10"}
					,{"column1":"", "d_level":"3", "column2":"마_C_2", "column3":"3", "column4":"D_11"}
					,{"column1":"", "d_level":"3", "column2":"마_C_3", "column3":"3", "column4":"D_12"}
					,{"column1":"", "d_level":"1", "column2":"[1depth] 바", "column3":"1", "column4":"E_1"}
					,{"column1":"", "d_level":"2", "column2":"바_A", "column3":"2", "column4":"E_2"}
					,{"column1":"", "d_level":"3", "column2":"바_A_1", "column3":"3", "column4":"E_3"}
					,{"column1":"", "d_level":"3", "column2":"바_A_2", "column3":"3", "column4":"E_4"}
					,{"column1":"", "d_level":"3", "column2":"바_A_3", "column3":"3", "column4":"E_5"}
					,{"column1":"", "d_level":"2", "column2":"바_B", "column3":"2", "column4":"E_6"}
					,{"column1":"", "d_level":"3", "column2":"바_B_1", "column3":"3", "column4":"E_7"}
					,{"column1":"", "d_level":"3", "column2":"바_B_2", "column3":"3", "column4":"E_8"}
					,{"column1":"", "d_level":"3", "column2":"바_B_3", "column3":"3", "column4":"E_9"}
					,{"column1":"", "d_level":"2", "column2":"바_C", "column3":"2", "column4":"E_6"}
					,{"column1":"", "d_level":"3", "column2":"바_C_1", "column3":"3", "column4":"E_11"}
					,{"column1":"", "d_level":"3", "column2":"바_C_2", "column3":"3", "column4":"E_12"}
					,{"column1":"", "d_level":"3", "column2":"바_C_3", "column3":"3", "column4":"E_12"}
					,{"column1":"", "d_level":"3", "column2":"바_C_4", "column3":"3", "column4":"E_12"}
					,{"column1":"", "d_level":"2", "column2":"바_D", "column3":"2", "column4":"E_6"}
					,{"column1":"", "d_level":"3", "column2":"바_D_1", "column3":"3", "column4":"E_51"}
					,{"column1":"", "d_level":"3", "column2":"바_D_2", "column3":"3", "column4":"E_52"}
					,{"column1":"", "d_level":"3", "column2":"바_D_3", "column3":"3", "column4":"E_53"}
					,{"column1":"", "d_level":"3", "column2":"바_D_4", "column3":"3", "column4":"E_54"}
					,{"column1":"", "d_level":"2", "column2":"바_E", "column3":"2", "column4":"E_6"}
					,{"column1":"", "d_level":"3", "column2":"바_E_1", "column3":"3", "column4":"F_51"}
					,{"column1":"", "d_level":"3", "column2":"바_E_2", "column3":"3", "column4":"F_52"}
					,{"column1":"", "d_level":"3", "column2":"바_E_3", "column3":"3", "column4":"F_53"}
					,{"column1":"", "d_level":"3", "column2":"바_E_4", "column3":"3", "column4":"F_54"}
		            ];
		            
		dlt_list.setJSON( _json );
		
		grd_list.setDrillDownDragDrop( true );      
	};
	
	// dragDrop 활성화 
	scwin.btn_able_onclick = function(e) {
		grd_list.setDrillDownDragDrop(true);
	};
	
	// dragDrop 비활성화
	scwin.btn_diable_onclick = function(e) {
		grd_list.setDrillDownDragDrop(false);
	};
	
	// dragStart Function
	scwin.start = function( info ) {
    	//debugger ; 
    	//alert("000 ==>>" + info.parentRowData ); 
    	//alert("### ==>>" + info.parentRowIndex ); 
		//alert("111 ==>>" + info.beforeRemoveData); 
	 	// 데이터 '바_B' 를 선택하여 dragDrop한 경우 혹은  depth가 "1" 인 데이터를 dragDrop한 경우 혹은 붙여넣으려는 정보의 row depthrk "2" 인 경우 return 처리 
	 	if(info.beforeRemoveData[1] == "1") {
	 		alert("drag&drop 할 수 없습니다.");
	 		return false;
	 	}
	 	
	 	//debugger 
	 	return true;
	};
	
	// dragEnd Function
	scwin.end = function(fromIndex, doc, info ) {
		// info.removedData        drag&drop으로 삭제되는 data 
	 	// info.removedRowIndex    drag&drop으로 삭제되는 index 
	 	// info.insertedData       drag&drop으로 입력되는 data 
	 	// info.insertedRowIndex   drag&drop으로 입력되는 index 
		
		// 다 건일 경우에(하위 노드 포함) ... 부모 row 정보가 맨 마지막 배열에 있으므로 
		var len = info.removedData.length - 0;
		len = len -3; // 끝에서 3번째 컬럼 값을 지정함 
		
		if(info.removedData[len] == "바_A"){
			var i_idx = grd_list.getMatchedIndex( "column4" , "E_6" );
			var a_idx = 0;
			var b_idx = info.insertedRowIndex[0] - 0;
			var c_idx = 0;
			
			if (info.removedRowIndex > info.insertedRowIndex){
				a_idx = i_idx[i_idx.length-1];
				var r_idx = grd_list.getRealRowIndex(a_idx) -0;
				for(var i=i_idx.length; i>0; i--){
					if(i == 1){
						r_idx = r_idx + 1;
					}
					//r_idx = r_idx + c_idx;
					//var r_idx2 = info.insertedRowIndex[0] - 0;
					
					var r_obj = grd_list.drilldown.moveNode(r_idx, b_idx);
					//var dis_r_idx = grid1.getDisplayRowIndex(r_idx);
				    //grd_list.toggle( dis_r_idx );
		 			// 함께 이동되는 정보의 삭제정보 
			 		//alert(r_obj.detachedData);
			 		// 함께 이동되는 정보의 insert 정보 
			 		//alert(r_obj.insertedData);
		 			//alert(r_obj.insertedRowIndex);
		 			
		 			//c_idx = r_obj.insertedData.length;
		 			//c_idx = c_idx/grd_list.getTotalCol();
	 				
	 				// moveNode 로 딸려 이동한 데이터의 LVL 값 셋팅 
	 				for(var j1=0; j1< info.removedRowIndex.length; j1++ ){
			 			var  to_idx = info.insertedRowIndex[0] - 0;
			 			to_idx = to_idx + j1;
			 				
			 			grd_list.setCellData( to_idx , "d_level" , grd_list.getCellData( to_idx , "column3" ) );
			 		}
	 			}
			}else{
				for(var i=i_idx.length; i>0; i--){
					a_idx = i_idx[i_idx.length-1];
					var r_idx = grd_list.getRealRowIndex(a_idx) -0;
					
					if(i == i_idx.length){
						b_idx = b_idx;
					}else if(i == i_idx.length -1){
						b_idx = b_idx - c_idx;
						r_idx = r_idx - c_idx;
					}else{
						b_idx = b_idx - c_idx;
						r_idx = r_idx - c_idx - 1;
					}
					
					var r_obj = grd_list.drilldown.moveNode(r_idx, b_idx);
		 			c_idx = r_obj.insertedData.length;
		 			c_idx = c_idx/grd_list.getTotalCol();
		 			//var dis_r_idx = grid1.getDisplayRowIndex(r_idx);
				    //grid1.toggle( dis_r_idx );
					// moveNode 로 딸려 이동한 데이터의 LVL 값 셋팅 
		 			for(var j2=0; j2< c_idx; j2++ ){
			 			var  to_idx = r_obj.insertedRowIndex - 0;
			 			to_idx = to_idx + j2;
			 				
			 			grd_list.setCellData( to_idx , "d_level" , grd_list.getCellData( to_idx , "column3" ) );
			 		}
			 	}
			}
			var last_dis_idx = grd_list.getMatchedIndex( "column2" , "바_A" );
		 	var last_real_idx = grd_list.getRealRowIndex(last_dis_idx) -0;
		 	
	 		b_idx = b_idx - c_idx;
		 	var last_obj = grd_list.drilldown.moveNode(last_real_idx, b_idx);
		 	
		 	//var ii_idx = grid1.getMatchedIndex( "column4" , "E_6" );
		 	//alert(ii_idx);
		 	//grid1.toggle( ii_idx );
			
	 		// 함께 이동되는 정보의 삭제정보 
	 		//alert(r_obj.detachedData);
	 		// 함께 이동되는 정보의 insert 정보 
	 		//alert(r_obj.insertedData);
		}
	};
	
	scwin.grd_list_oncellclick = function(row,col) {
		console.log(" row : " + row + " , col : " + col  );
		console.log(" grd_list.getRealRowIndex() : " + grd_list.getRealRowIndex(row));
		console.log(" grd_list.getDisplayRowIndex() : " + grd_list.getDisplayRowIndex(row));
	};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc',id:'',style:'padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'drilldown 기능이 적용된 gridview에서 dataNode간의 drag&drop 기능을 구현하였다.<br/>( source : fn_drilldownDragDrop.xml )',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'dmb ofh',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tit fl',id:'',label:'DrillDown gridview 사용시 노드 이동',style:''}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_able',style:'margin-right: 10px;',type:'button','ev:onclick':'scwin.btn_able_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'활성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_diable',style:'',type:'button','ev:onclick':'scwin.btn_diable_onclick',anchorWithGroupClass:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비활성'}]}]}]}]},{T:1,N:'xf:group',A:{class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{dataList:'data:dlt_list',summaryAuto:'false',useFilterList:'false',scrollByColumn:'false',showSortableUseFilter:'false',scrollByColumnAdaptive:'false',id:'grd_list',style:'height: 250px;',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',summaryOnlyAuto:'false',useShiftKey:'true',autoFit:'allColumn',class:'',rowStatusWidth:'50',rowStatusVisible:'',rowStatusHeaderValue:'',rowNumWidth:'50',rowNumVisible:'true',rowNumStatusUniqueId:'true',rowNumHeaderValue:'No',keepDefaultColumnWidth:'true',visibleRowNum:'20',dragStartFunction:'scwin.start','ev:oncellclick':'scwin.grd_list_oncellclick',dragEndFunction:'scwin.end',dataDragDrop:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',removeBorderStyle:'false',footerDiv:'false',style:'',inputType:'text',width:'150',value:'displayRowIndex',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',removeBorderStyle:'false',footerDiv:'false',style:'',inputType:'text',width:'70',value:'LVL',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',removeBorderStyle:'false',footerDiv:'false',style:'',inputType:'text',width:'350',value:'content',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',removeBorderStyle:'false',footerDiv:'false',style:'',inputType:'text',width:'100',value:'depth',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',removeBorderStyle:'false',footerDiv:'false',style:'',width:'70',inputType:'text',value:'h_col4',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',removeBorderStyle:'false',footerDiv:'false',style:'',inputType:'expression',width:'70',value:'',displayMode:'label',expression:'rowIndex()'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'d_level',removeBorderStyle:'false',footerDiv:'false',style:'',inputType:'drilldown',width:'70',value:'',displayMode:'label',depthColumn:'column3',showDepth:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column2',removeBorderStyle:'false',footerDiv:'false',style:'',inputType:'drilldown',width:'70',value:'',displayMode:'label',depthColumn:'column3',depthType:'div',showDepth:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',removeBorderStyle:'false',footerDiv:'false',style:'',inputType:'text',width:'100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column4',removeBorderStyle:'false',footerDiv:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label',hidden:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'exe_box mt10',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'※ DrillDown Gridview에서 Mouse로 원하는 노드를 선택하면 Node 전체가 이동될 수 있습니다.',style:''}}]}]}]}]}]})