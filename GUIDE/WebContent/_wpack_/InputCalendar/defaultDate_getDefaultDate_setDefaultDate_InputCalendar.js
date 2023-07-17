/*amd /InputCalendar/defaultDate_getDefaultDate_setDefaultDate_InputCalendar.xml 2923 370eaa1327a1d1d0689a3bb7740c024f2fb49b0d7e37265e1e383f3008b8ae05 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	
	scwin.trigger1_onclick = function(e) {
		var date = inputCalendar1.getDefaultDate();
		alert(date);
	};
	
	scwin.trigger2_onclick = function(e) {
		inputCalendar1.setDefaultDate("20131231");
	};
	
	scwin.trigger3_onclick = function(e) {
		inputCalendar1.setValue("19910101");
	};
	
	scwin.trigger4_onclick = function(e) {
		var date = inputCalendar1.getValue();
		alert(date);
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{label:'Choose a date from 2023.',style:'font-color: blue;font-size: 20px;font-family: helvetica;height: 23px;margin-top: 20px;margin-left: 50px;',id:''}},{T:1,N:'xf:group',A:{id:'',style:'padding-top: 20px;padding-left: 50px;'},E:[{T:1,N:'w2:inputCalendar',A:{defaultDate:'',footerDiv:'false',rightAlign:'false',focusOnDateSelect:'false',style:'width: 150px;height: 23px;',id:'inputCalendar1',renderType:'component',renderDiv:'true',calendarValueType:'yearMonthDate',monthNames:'01,02,03,04,05,06,07,08,09,10,11,12',yearSuffix:' Y'}}]},{T:1,N:'xf:group',A:{id:'',style:'margin: 50px;margin-top: 30px;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width: 150px;height: 39px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getDefaultDate()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',style:'width: 150px;height: 39px;margin-left: 30px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setDefaultDate()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger3_onclick',style:'width: 100px;height: 39px;margin-left: 30px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger3',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setValue()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger4_onclick',style:'width: 100px;height: 39px;margin-left: 30px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger4',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getValue()'}]}]}]}]}]}]})