/*amd /GridView/Events/ondateselect_onmonthselect_onyearselect_GridView.xml 3419 ae0fdb65a90dd8edc5eab819e08efebfb8d44edc50ed485646b98a47e85735b6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		dataList1.insertRow();
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.gridView1_ondateselect = function(row,col,dateStr,dateObj) {
		alert("Date changed.");
	};
	
	scwin.gridView1_onmonthselect = function(row,col,info) {
		alert("Month changed.");
	
	};
	
	scwin.gridView1_onyearselect = function(row,col,info) {
		alert("Year changed.");
	
	};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{id:'gridView1',style:'width:50%;height:150px;margin: 50px;',scrollByColumn:'false',defaultCellHeight:'30',scrollByColumnAdaptive:'false',dataList:'data:dataList1','ev:ondateselect':'scwin.gridView1_ondateselect','ev:onmonthselect':'scwin.gridView1_onmonthselect','ev:onyearselect':'scwin.gridView1_onyearselect','ev:oneditend':'scwin.gridView1_oneditend','ev:onbeforeedit':'scwin.gridView1_onbeforeedit','ev:onafteredit':'scwin.gridView1_onafteredit',captionAuto:'',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'299',inputType:'text',style:'height:30px;',id:'column1',value:'Column 1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'260',inputType:'text',style:'height:30px;',id:'column2',value:'Column 2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'294',inputType:'text',style:'height:30px;padding: 20px;',id:'column4',value:'Column 3',blockSelect:'false',displayMode:'label',userData3:''}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'299',viewType:'icon',inputType:'calendar',style:'height:20px;padding: 20px;',checkboxLabel:'',id:'col1',value:'',blockSelect:'false',displayMode:'label',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'260',viewType:'icon',inputType:'calendar',style:'height:30px;padding: 20px;',id:'col2',value:'',blockSelect:'false',displayMode:'label',calendarValueType:'yearMonth',pickerType:'dynamic'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'294',viewType:'icon',inputType:'calendar',style:'height:20px;padding: 20px;',id:'col3',value:'',blockSelect:'false',displayMode:'label',calendarValueType:'yearMonth'}}]}]}]}]}]}]})