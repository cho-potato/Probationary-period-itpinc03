/*amd /gridView-005/gridView_contextmenu.xml 5258 99722af8a1a3de69b36cdbb7d505c319c906b7495a857912103958b06e0966d5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
			
		};
		
		scwin.onpageunload = function() {
			
		};
		
		scwin.trigger1_onclick = function(e) {
			var json = [
				{
					col1:'Name1',
					col2:'Value1',
					col3:'Option1'
				},
				{
					col1:'Name2',
					col2:'Value2',
					col3:'Option2'
				},
				{
					col1:'Name3',
					col2:'Value3',
					col3:'Option3'
				}
			];
			dataList1.setJSON( json );
		};
		
		// SysteMenu
		// - ColumnHide : 선택 컬럼 숨기기
		// - ColumnShowAll : 전체 컬럼 숨기기 해제
		// - ColumnFix : 선택 컬럼 틀고정
		// - ColumnUnfixAll : 전체 컬럼 틀고정 취소
		// - ColumnAdjustWidth : 선택 컬럼 크기 자동 맞추기
		// - ColumnAdjustAuto : 전체 컬럼 크기 자동 맞추기
		// - FoldAll : 전체 그룹 접기
		// - UnfoldAll : 전체 그룹 펼치기
		// - Group : 전체 그룹 해제
		// - Ungroup : 선택 컬럼 그룹 해제
		// - UngroupAll : 선택 컬럼 그룹

		// 컨텍스트 메뉴를 열기 전에 호출되어, 컨텍스트 메뉴를 구성할 수있게 합니다.
		// result
		// - false : 컴텍스트 메뉴가 열리지 않습니다.
		// - hideSystemMenu
		scwin.gridView1_oncontextopen = function(row,col) {
			// return false; // 컨텍스트 메뉴를 보여주지 않습니다.
			// return { hideSystemMenu: false } // 전체 시스템 메뉴를 보여주지 않습니다.
			return {
				hideSystemMenu: [ "ColumnHide" ], // 특정 항목의 시스템 메뉴를 보여주지 않습니다.
				appendMenu: [{
					label:"특별한 컬럼 숨기기",
					// 사용자 메뉴의 표시 문자열
					userMenuId:"userColumnHide",
					// 사용자 메뉴의 id, 해당 컨텍스트 메뉴가 클릭될때, 입력값으로 전달됨
					className:"userMenu"
					// 사용자 메뉴의 스타일 클래스 이름 
				}], // 시스템 메뉴 아래에, 사용자 메뉴를 추가합니다.
			};
		};

		// 컨텍스트 메뉴가 클릭 된 후 호출됩니다. 시스템 메뉴는 시스템 기능이 완료된 후 호출됩니다.
		scwin.gridView1_oncontextclick = function(row,col,userMenuId,isSystemMenu,systemMenu) {
			if(isSystemMenu){
				alert(systemMenu + " clicked at (" + col + "," + row + ")!");
			} else {
				alert(userMenuId + " clicked at (" + col + "," + row + ")!");
			}
		};
		
		
}}}]},{T:1,N:'style',E:[{T:4,cdata:' \r\n			.userMenu{\r\n				background-color:#fff;\r\n				color:red;\r\n			}\r\n			.userMenu:hover{\r\n				background-color:lightpink;\r\n				color:white;\r\n			}\r\n		'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{dataList:'dataList1',scrollByColumn:'false',id:'gridView1',style:'width: 500px;height: 150px;',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',fixedColumnWithHidden:'true',useShiftKey:'true',contextMenu:'true','ev:oncontextopen':'scwin.gridView1_oncontextopen','ev:oncontextclick':'scwin.gridView1_oncontextclick'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',style:'height:20px',inputType:'text',width:'70',displayMode:'label',value:'name1'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'height:20px',inputType:'text',width:'70',displayMode:'label',value:'name2'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px',width:'70',inputType:'text',displayMode:'label',value:'name3'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col3',style:'height:20px',width:'70',inputType:'text',displayMode:'label'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'height: 23px;padding-left: 10px;padding-right: 10px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'클릭하여 그리드 데이터를 불러온 후, &nbsp;셀을 오른쪽 클릭하여 메뉴를 표시해보세요.'}]}]}]}]}]})