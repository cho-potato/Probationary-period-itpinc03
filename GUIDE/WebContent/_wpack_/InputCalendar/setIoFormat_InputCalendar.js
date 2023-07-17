/*amd /InputCalendar/setIoFormat_InputCalendar.xml 1877 c2215639426ccad20792a2107c212fbabef0e08b5839d472d363c493e5509115 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var options = { 
				ioFormat:"MMddyyyy", // Date input format 날짜 입력 순서
				displayFormat:"MM-dd-yyyy", // Date display in input box 입력란에 표시되는 날짜 순서 
				calendarDisplayFormat: "yyyy(Y) - MM(M) - dd(D)" // Date display on Calendar 달력에 표시되는 날짜 순서
			}		
		inputCalendar1.setIoFormat( options );
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:';margin:30px;'},E:[{T:1,N:'w2:inputCalendar',A:{minYear:'0001',footerDiv:'false',focusOnDateSelect:'false',calendarValueType:'yearMonthDate',maxYear:'2050',rightAlign:'false',monthNamesForYearMonthType:'1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12',style:'width: 150px;height: 23px;margin:30px;font-size:20px;',id:'inputCalendar1',renderType:'component',renderDiv:'true',monthNames:'1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12',yearSuffix:'Y',ioFormat:'',displayFormat:'',calendarDisplayFormat:''}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width:129px;height:23px;margin-left:20px;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setIoFormat();'}]}]}]}]}]}]})