/*amd /ScheduleCalendar/addSchedule_ScheduleCalendar.xml 2997 b8345fdfd162c186c783bbde46efa5e614c8fceff6f06e0755d994a4c8700ddd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'title',name:'title',dataType:'text'}},{T:1,N:'w2:column',A:{id:'id',name:'id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'start',name:'start',dataType:'text'}},{T:1,N:'w2:column',A:{id:'end',name:'end',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row',E:[{T:1,N:'title',E:[{T:4,cdata:'AAA'}]},{T:1,N:'id',E:[{T:4,cdata:'1'}]},{T:1,N:'start',E:[{T:4,cdata:'20201001'}]},{T:1,N:'end',E:[{T:4,cdata:'20201002'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'title',E:[{T:4,cdata:'BBB'}]},{T:1,N:'id',E:[{T:4,cdata:'2'}]},{T:1,N:'start',E:[{T:4,cdata:'20201010'}]},{T:1,N:'end',E:[{T:4,cdata:'20201012'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'title',E:[{T:4,cdata:'CCC'}]},{T:1,N:'id',E:[{T:4,cdata:'3'}]},{T:1,N:'start',E:[{T:4,cdata:'20201020'}]},{T:1,N:'end',E:[{T:4,cdata:'20201023'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'title',E:[{T:4,cdata:'DDD'}]},{T:1,N:'id',E:[{T:4,cdata:'4'}]},{T:1,N:'start',E:[{T:4,cdata:'20201015'}]},{T:1,N:'end',E:[{T:4,cdata:'20201017'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.trigger1_onclick = function(e) {
		scheduleCalendar1.addSchedule({
    		"title": "ADDED",
		    "start": "20201001",
		    "end": "20201003",
		    "id": "added01"
		});		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:187px;height:43px;margin:0px;margin-bottom:50px;margin-top:10px;margin-left:100px;padding:10px;font-family:sans-serif;font-style:italic;font-weight:bolder;font-size-adjust:0;font-size:15px;border-width:1px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'addSchedule()'}]}]},{T:1,N:'w2:scheduleCalendar',A:{selectable:'true',ioFormat:'yyyyMMdd',eventLimit:'true',id:'scheduleCalendar1',lang:'en',defaultDate:'',editable:'true',headerRightBtn:'true',titleColumn:'title',startColumn:'start',dataList:'data:dataList1',style:'width: 500px;height: 300px;margin:100px;margin-bottom:50px;margin-top:0;border-width:1px;border-color:black;',headerLeftBtn:'true',idColumn:'id',headerTitle:'true',endColumn:'end',themeColumn:'',locale:'en',tooltipDisplay:'',nextDayThreshold:'',version:'2.3',includeScheduleEnd:'true',eventOrderColumn:'',timeFormat:''}}]}]}]})