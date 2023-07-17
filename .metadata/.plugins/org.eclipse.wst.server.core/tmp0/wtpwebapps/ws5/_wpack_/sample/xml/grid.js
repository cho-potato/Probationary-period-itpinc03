/*amd /sample/xml/grid.xml 8500 a2405e075eafc3f5bb2492679a2585473df3531456fbee9feb995e65e689495b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'xf:instance',_xml:'<xf:instance xmlns:xf="http://www.w3.org/2002/xforms">\n                <data xmlns="">\n                	<res>\n                		<map>\n	                		<vector>\n		                		<map index="0">\n		                			<number value="one">1</number>\n		                			<dept value="insa">인사</dept>\n		                			<age value="17">17</age>\n		                			<name value="hong">홍길동</name>\n		                			<address value="seoul dongjak">서울 동작구</address>\n		                		</map>\n		                 		<map index="1">\n		                			<number value="two">2</number>\n		                			<dept value="insa">홍보</dept>\n		                			<age value="24">24</age>\n		                			<name value="heo">허준</name>\n		                			<address value="seoul Kangseo">서울 강서구</address>\n		                		</map>\n		                 		<map index="2">\n		                			<number value="three">3</number>\n		                			<dept value="insa">인사</dept>\n		                			<age value="37">37</age>\n		                			<name value="jeon">전우치</name>\n		                			<address value="seoul mapo">서울 마포구</address>\n		                		</map>\n		                 		<map index="3">\n		                			<number value="four">4</number>\n		                			<dept value="dev">개발</dept>\n		                			<age value="32">32</age>\n		                			<name value="na">나이름</name>\n		                			<address value="seoul seocho">서울 서초구</address>\n		                		</map>\n	                		</vector>\n                		</map>\n                	</res>\n                </data>\n            </xf:instance>'},{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				scwin.btnRefresh_onclick();
			};
			
			// 새로고침 
			scwin.btnRefresh_onclick = function(e) {
				var xmlObj = WebSquare.ModelUtil.findInstanceNode( "res/map/vector" );
				grid1.setXML( xmlObj );
			};
			
			// 입력
			scwin.btnInsert_onclick = function(e) {
				var focusIdx = grid1.getFocusedRowIndex();
				grid1.insertRow( focusIdx );
			};
	
			// 삭제 (delete)	
			scwin.btnDelete_onclick = function(e) {
				var focusIdx = grid1.getFocusedRowIndex();
				grid1.deleteRow( focusIdx );	
			};
			
			// 삭제 (remove)
			scwin.btnRemove_onclick = function(e) {
				var focusIdx = grid1.getFocusedRowIndex();
				var obj = grid1.removeRow( focusIdx );
				console.log(obj);
			};
			
			// 다중 삭제(removeRows)
			scwin.btnRemoveRows_onclick = function(e) {
				var chkArr = grid1.getCheckedIndex( "chk" );
				var objs = grid1.removeRows( chkArr );
				console.log(objs);
			};
			
			// 초기화
			scwin.btnInit_onclick = function(e) {
				var objAll = grid1.removeAll();
				console.log(objAll);
			};
			
			// Excel down
			scwin.btnExcelDown_onclick = function(e) {
				grid1.advancedExcelDownload( [] );
			};
			
			// Excel up
			scwin.btnExcelUp_onclick = function(e) {
				grid1.advancedExcelUpload( {"headerExist":"1"} );
			};
			
			// 이름을 double click 하였을 경우에만 동작
			scwin.grid1_oncelldblclick = function(row,col) {
				var colId = grid1.getColumnID( col );
				if(colId == "name"){
					alert(grid1.getCellData( row , "address" ));
				}
			};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px',id:'',class:''},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;margin-bottom: 10px;border: 1px solid gray',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'',label:'* Grid 활용하기',id:'',tagname:'h2'}}]},{T:1,N:'xf:group',A:{style:'margin-bottom: 10px;',id:'',class:'btnbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnInsert_onclick',id:'btnInsert',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입력'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnDelete_onclick',id:'btnDelete',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제(delete)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnRemove_onclick',id:'btnRemove',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제(remove)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnRemoveRows_onclick',id:'btnRemoveRows',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다중삭제(removeRows)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnInit_onclick',id:'btnInit',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnExcelDown_onclick',id:'btnExcelDown',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ExcelDown'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnExcelUp_onclick',id:'btnExcelUp',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ExcelUp'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'float : right;',id:'btnRefresh','ev:onclick':'scwin.btnRefresh_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]}]},{T:1,N:'w2:grid',A:{baseNode:'vector',fixedColumnWithHidden:'true',repeatNode:'map',useShiftKey:'true',style:'height: 200px;',id:'grid1',autoFit:'allColumn',autoFitMinWidth:'800',sortable:'true',rowNumVisible:'true',rowNumHeaderValue:'순번',rowStatusHeaderValue:'상태',rowStatusVisible:'true','ev:oncelldblclick':'scwin.grid1_oncelldblclick',keyMoveEditMode:'true',editModeEvent:'onclick',focusFlow:'linear',focusMode:'row',useFilterList:'true',readOnly:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'30',inputType:'checkbox',style:'height:20px;',id:'column11',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'height:20px;',id:'column1',value:'번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'height:20px;',id:'column9',value:'부서',blockSelect:'false',displayMode:'label',useFilter:'',upperColumn:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column7',value:'나이',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'height:20px;',id:'column5',value:'이름',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',style:'height:20px;',id:'column3',value:'주소',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'30',inputType:'checkbox',style:'',id:'chk',value:'',blockSelect:'false',displayMode:'label',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'number',blockSelect:'false',displayMode:'label',readOnly:'true',editModeEvent:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'dept',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'age',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'name',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'address',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]}]})