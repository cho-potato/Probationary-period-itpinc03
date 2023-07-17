/*amd /ScheduleCalendar/onaddschedule_onmoveschedule_ScheduleCalendar.xml 3055 e4e88af834401bf03780a60e8093800ce6c21505a3f8aa0a0b48256fd27932c9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'startColumn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endColumn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'titleColumn',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'idColumn',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
        
		var jsonData=[
            {"startColumn":"20200909", "endColumn":"20200909", "titleColumn":"Seminar A", "idColumn":"id1"}
            ,{"startColumn":"20200916", "endColumn":"20200921", "titleColumn":"Seminar B", "idColumn":"id2"}
            ,{"startColumn":"20200911", "endColumn":"20200911", "titleColumn":"Meeting", "idColumn":"id3"}
            ,{"startColumn":"20200913", "endColumn":"20200913", "titleColumn":"Airport Pick-up", "idColumn":"id6"}
            ,{"startColumn":"20200922", "endColumn":"20200926", "titleColumn":"Visit to Parents", "idColumn":"id5"}
            ,{"startColumn":"20200924", "endColumn":"20200924", "titleColumn":"B-day", "idColumn":"id4"}
        ];
        
        dataList1.setJSON( jsonData );
	};
	
	scwin.onpageunload = function() {
		
	};		
	
	scwin.trigger1_onclick = function(e) {
		scheduleCalendar1.addSchedule({"startColumn":"20200930", "endColumn":"20201004", "titleColumn":"CHUSOK", "idColumn":"id7"});		
	};
	
	
	
	scwin.scheduleCalendar1_onaddschedule = function(rowIndex) {
		alert("Added!");
	};
	
	scwin.scheduleCalendar1_onmoveschedule = function(rowIndex) {
		alert("Moved!");
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;margin-bottom:10px;margin:100px;margin-top:20px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Add'}]}]},{T:1,N:'w2:scheduleCalendar',A:{endColumn:'endColumn',defaultDate:'',editable:'true',selectable:'false',headerRightBtn:'true',ioFormat:'yyyyMMdd',titleColumn:'titleColumn',startColumn:'startColumn',dataList:'data:dataList1',style:'height:500px;margin:100px;margin-top:0px;',id:'scheduleCalendar1',lang:'ko',headerLeftBtn:'true',idColumn:'idColumn',headerTitle:'true','ev:onclick':'',version:'','ev:onaddschedule':'scwin.scheduleCalendar1_onaddschedule','ev:onmoveschedule':'scwin.scheduleCalendar1_onmoveschedule'}}]}]}]})