/*amd /inputCalendar-001/inputCalendar_disabledSample.xml 3212 461c76c8b0e4301923877d7a8f8c1543d23f41c7018781b216abb33badac664d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	scwin.onpageload = function() {
	
	};
	
	scwin.onpageunload = function() {
	
	};  
        
	scwin.inputCalendar13_ondateselect = function(dateStr,dateObj) {
		if(dateStr) {
			inputCalendar14.disableBeforeDate(dateStr);
		}
	};
	
	scwin.inputCalendar14_ondateselect = function(dateStr,dateObj) {
		if(dateStr) {
			inputCalendar13.disableAfterDate(dateStr);
		}
	};
	
	scwin.trigger1_onclick = function(e) {
		inputCalendar13.enableAllDate();
	};
	
	scwin.trigger2_onclick = function(e) {
		inputCalendar14.enableAllDate();
	};
	
}}}]}]},{T:1,N:'style',E:[{T:3,text:'\r\n		.w2calendar_date_disable{\r\n		color:#d7d7d7;\r\n		}\r\n	'}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'position:absolute;top:19px;left:26px;width:837px;height:239px;'},E:[{T:1,N:'xf:group',A:{id:'',style:'position:absolute;top:77px;left:0px;width:818px;height:162px;'},E:[{T:1,N:'w2:inputCalendar',A:{renderType:'component',id:'inputCalendar13',renderDiv:'true',footerDiv:'false','ev:ondateselect':'scwin.inputCalendar13_ondateselect',calendarValueType:'yearMonthDate',style:'position: absolute;width:369px;height:84px;left:0px;top:78px;',rightAlign:'false',weekStartsOn:'0',focusOnDateSelect:'false'}},{T:1,N:'w2:inputCalendar',A:{id:'inputCalendar14',renderType:'component','ev:ondateselect':'scwin.inputCalendar14_ondateselect',footerDiv:'false',renderDiv:'true',calendarValueType:'yearMonthDate',style:'position: absolute;width:369px;height:84px;left:449px;top:78px;',rightAlign:'false',weekStartsOn:'0',focusOnDateSelect:'false'}},{T:1,N:'xf:trigger',A:{id:'trigger1',style:'position: absolute;width:280px;height:47px;left:1px;top:0px;font-size:12pt;','ev:onclick':'scwin.trigger1_onclick',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'disabled 해제'}]}]},{T:1,N:'xf:trigger',A:{id:'trigger2',style:'position: absolute;width:275px;height:46px;left:449px;top:0px;font-size:12pt;','ev:onclick':'scwin.trigger2_onclick',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'disbled 해제'}]}]}]},{T:1,N:'w2:textbox',A:{id:'',style:'position: absolute;width:390px;height:76px;left:0px;top:1px;font-size:12pt;',label:'ID: inputCalendar13<br/>날짜 선택 시 해당 날짜 기준 이전날짜 Disable처리<br/>[disableBeforeDate API]<br>시작일'}},{T:1,N:'w2:textbox',A:{id:'',style:'position: absolute;width:390px;height:74px;left:447px;top:0px;font-size:12pt;',label:'ID: inputCalendar14<br/>날짜 선택 시 해당 날짜 기준 이후날짜 Disable처리<br/>[disableAfterDate API]<br>종료일'}}]}]}]}]})