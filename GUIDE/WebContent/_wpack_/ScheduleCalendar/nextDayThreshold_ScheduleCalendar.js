/*amd /ScheduleCalendar/nextDayThreshold_ScheduleCalendar.xml 3088 b0c0604ef8a764ccbab324184b9bf4b48ab21930b95d3730b4fba1c45c850f2a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',style:'',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'id',name:'id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'title',name:'title',dataType:'text'}},{T:1,N:'w2:column',A:{id:'start',name:'start',dataType:'text'}},{T:1,N:'w2:column',A:{id:'end',name:'end',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'title',E:[{T:4,cdata:'(Jul-08 11:00 ~ Jul-10 11:00)'}]},{T:1,N:'start',E:[{T:4,cdata:'20190708090000'}]},{T:1,N:'end',E:[{T:4,cdata:'20190710110000'}]},{T:1,N:'id',E:[{T:4,cdata:'Event 002'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'id',E:[{T:4,cdata:'Evnt 001'}]},{T:1,N:'title',E:[{T:4,cdata:'(Jul-15 12:00 ~ Jul-17 16:00)'}]},{T:1,N:'start',E:[{T:4,cdata:'20190715120000'}]},{T:1,N:'end',E:[{T:4,cdata:'20190717160000'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
			scwin.onpageload = function() {
				//mf_schedule1.addSchedule({"title":"이벤트6", "start":"20190722", "end":"20190725", "id":"이벤트6"});
			}
				
		
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:3,text:'\r\n\r\n		    \r\n		    .fc-day-number.fc-sat.fc-past { color:#0000FF; }\r\n		    .fc-day-number.fc-sun.fc-past { color:#FF0000; }\r\n		'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 20px;',class:'cont_wrap type1'},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl_lo',id:'',style:'width:100%;padding: 20px;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'padding: 20px;',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'grpbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'stit_01',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'ScheduleCalendar',style:'font: 20px blue ;',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'sub_cont',id:'',style:''},E:[{T:1,N:'w2:scheduleCalendar',A:{id:'schedule1',style:'height:450px; width: 800px;',defaultDate:'2019-07',editable:'true',eventLimit:'true',version:'3.6',defaultView:'month',eventOrderDefaultValue:'0',selectable:'true',dataList:'data:dataList1',titleColumn:'title',startColumn:'start',endColumn:'end','ev:onclick':'scwin.schdule1_onclick',headerLeftBtn:'','ev:onheaderbtnclick':'scwin.schdule1_onheaderbtnclick',headerRightBtn:'',eventOrderColumn:'num',idColumn:'id',themeColumn:'theme',lang:'en',locale:'en',nextDayThreshold:'12:00:00'}}]}]}]}]}]}]}]}]}]})