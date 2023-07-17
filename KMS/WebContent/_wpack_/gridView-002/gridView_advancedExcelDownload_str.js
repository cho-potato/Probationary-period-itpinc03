/*amd /gridView-002/gridView_advancedExcelDownload_str.xml 2687 65b02587e07eafeb1f0177cbfe3f60f43d017706668cf3db3c3d7fdf60501097 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
			var jsonData = [{"col1":"a"},{"col2":"SO50\u0003"}];
			dataList1.setJSON( jsonData );			
		};
		
		scwin.onpageunload = function() {
			
		};
        	
       	scwin.trigger1_onclick = function(e) {
			var options = {};
			options.fileName= "excel.xlsx";
			options.type = "1";
			options.startRowIndex = 0;
			options.startColumnIndex = 0;
			
			gridView1.advancedExcelDownload( options );
		};
         
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{dataList:'dataList1',scrollByColumn:'false',summaryAuto:'false',scrollByColumnAdaptive:'false',id:'gridView1',style:'position: absolute ;left: 48px;top: 82px;width: 378px;height: 281px;',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',fixedColumnWithHidden:'true',useShiftKey:'true'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'height:20px',inputType:'text',width:'70',displayMode:'label',value:'name1'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px',width:'70',inputType:'text',displayMode:'label',value:'name2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',style:'height:20px',width:'70',inputType:'text',displayMode:'label'}}]}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',id:'trigger1',style:'position: absolute ;left:53px;top:26px;width: 80px;height: 23px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'excel down'}]}]}]}]}]})