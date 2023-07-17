/*amd /gridView-013/gridspace.xml 5626 199922fdb4895f9820583efc87097c64aeea58fa0eae5950a0f3df3adfc39535 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]}]}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
		scwin.onpageload = function() {
	        var jsonData = [{"col1":"col1test1","col2":"col2test1","col3":"a"}
	        ,{"col1":"col1test2","col2":"col2test2","col3":"b"}
	        ,{"col1":"col1test3","col2":"  col2test3","col3":"a"}];
	        
	        dataList1.setJSON( jsonData );		
		};
		
		scwin.onpageunload = function() {
		
		};        
        
        scwin.tt1 = function(val){
        	var str;
        	str = val.replace(/\s/g, "&nbsp;");
        	return str;
        };
        
		scwin.trigger1_onclick = function(e) {
		
			var excelOpt = {}; 
			excelOpt.type = "1"; 

			gridView1.advancedExcelDownload(excelOpt);
		
		};
		
		scwin.trigger2_onclick = function(e) {
			var excelOpt = {}; 
			excelOpt.type = "0"; 

			gridView1.advancedExcelDownload(excelOpt);
		};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'group1',style:'position:relative;top:0px;left:0px;width:400px;height:147px;float:left'},E:[{T:1,N:'w2:gridView',A:{dataList:'dataList1',fixedColumnWithHidden:'true',id:'gridView2',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'position: relative;width: 500px;height: 150px;',summaryAuto:'false',useShiftKey:'true'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',style:'height:20px',value:'name1',width:'127'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'height:20px',value:'name2',width:'122'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',style:'height:20px',value:'name3',width:'118'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col1',inputType:'text',style:'height:20px',textAlign:'left',width:'127'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayFormatter:'',displayMode:'label',id:'col2',inputType:'text',style:'height:20px',textAlign:'left',width:'122'}},{T:1,N:'w2:column',A:{allOption:'',blockSelect:'false',chooseOption:'true',chooseOptionLabel:'',displayMode:'label',id:'col3',inputType:'select',style:'height:20px',textAlign:'left',width:'118'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'labelA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'a'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'labelB'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'b'}]}]}]}]}]}]}]},{T:1,N:'w2:gridView',A:{dataList:'dataList1',scrollByColumn:'false',summaryAuto:'false',scrollByColumnAdaptive:'false',id:'gridView1',style:'position: relative;width: 500px;height: 150px;',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',fixedColumnWithHidden:'true',useShiftKey:'true'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',style:'height:20px;',inputType:'text',width:'127',displayMode:'label',value:'name1'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px;',inputType:'text',width:'122',displayMode:'label',value:'공백치환 컬럼'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',style:'height:20px;',width:'118',inputType:'text',displayMode:'label',value:'name3'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',style:'height:20px',inputType:'text',width:'127',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',style:'height:20px',inputType:'text',width:'122',displayMode:'label',textAlign:'left',displayFormatter:'scwin.tt1'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col3',style:'height:20px',width:'118',inputType:'select',displayMode:'label',textAlign:'left',allOption:'',chooseOption:'true',chooseOptionLabel:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'labelA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'a'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'labelB'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'b'}]}]}]}]}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position: relative;width:209px;height:23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'advancedExcelDownload type:1'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',id:'trigger2',style:'position: relative;width:209px;height:23px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'advancedExcelDownload type:0'}]}]}]}]}]}]})