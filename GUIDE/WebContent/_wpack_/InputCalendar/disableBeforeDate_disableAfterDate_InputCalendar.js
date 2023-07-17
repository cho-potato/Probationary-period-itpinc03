/*amd /InputCalendar/disableBeforeDate_disableAfterDate_InputCalendar.xml 2377 04339b8afa4ed7762710f3dc9a319e7123525179af4356c21a82ea49dfbfda25 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var date = input1.getValue();
		inputCalendar1.disableBeforeDate(date);
	};
	
	scwin.trigger2_onclick = function(e) {
		var date = input1.getValue();
		inputCalendar1.disableAfterDate(date);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin-left: 100px;'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 180px;display: block;padding: 10px;line-height:30px;font-size:15px;color: red;font-family:monospace;font-style:normal;font-weight:bolder;margin: 30px;margin-bottom: 0px;',id:'input1'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width: 200px;padding: 10px;line-height:32px;height:45px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin: 30px;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'disableBeforeDate()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',style:'width: 200px;padding: 10px;line-height:32px;height:45px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin: 30px;',id:'trigger2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'disableAfterDate()'}]}]},{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',rightAlign:'false',monthNamesForYearMonthType:'1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12',focusOnDateSelect:'false',style:'width: 220px;height: 23px;display: block;margin-left: 30px;height:45px;',id:'inputCalendar1',renderType:'component',renderDiv:'true',calendarValueType:'yearMonthDate',monthNames:'1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12',ioFormat:'ddMMyyyy',yearSuffix:'Y'}}]}]}]}]})