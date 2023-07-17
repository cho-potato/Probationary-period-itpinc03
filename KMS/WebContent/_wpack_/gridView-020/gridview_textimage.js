/*amd /gridView-020/gridview_textimage.xml 4015 4e5cf5147af599c7b450e2fc9dfdceb41ab41b288b52f8c17c2e80e5f5b5cac7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
			/*
			        dataList1.setData([
			        	1,2,3,4,
			        	5,6,7,8
			        ]);
			*/
			
			dataList1.insertRow();
			dataList1.insertRow();
			dataList1.insertRow();
			dataList1.insertRow();			
		};
		
		scwin.onpageunload = function() {
			
		};

        scwin.imgClick = function(rowIdx, colIdx, data){
        	alert(rowIdx + ", " + colIdx + ", " + data );
        };
        
		scwin.trigger1_onclick = function(e) {
			gridView1.setDisabled("column","col4",true);
		};
		scwin.trigger2_onclick = function(e) {
			gridView1.setDisabled("column","col4",false);
		};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{dataList:'dataList1',scrollByColumn:'false',id:'gridView1',rowStatusVisible:'true',style:'position: relative ;left:21px;top:20px;width:397px;height:150px;',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',fixedColumnWithHidden:'true',useShiftKey:'true',sortable:'true',showSortableImage:'true'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column11',style:'height:20px;',inputType:'text',width:'70',displayMode:'label',value:'name1'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',style:'height:20px;',inputType:'text',width:'70',displayMode:'label',value:'name2'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'height:20px;',inputType:'text',width:'70',displayMode:'label',value:'name3'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px;',width:'96',inputType:'text',displayMode:'label',value:'textimage'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col3',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col4',style:'height:20px',width:'96',inputType:'textImage',imageSrc:'http://static.naver.net/green/v2/img/btn_security2_on.gif',imageSrcDisabled:'http://static.naver.net/green/v2/img/btn_security2_off.gif',displayMode:'label',imageClickFunction:'scwin.imgClick',editModeEvent:'onclick',viewType:'icon'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position: absolute ;left:438px;top: 46px;width:141px;height:23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'textimage컬럼 비활성'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'position: absolute ;left:438px;top:81px;width:141px;height:23px;','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'textimage컬럼 활성화'}]}]}]}]}]})