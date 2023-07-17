/*amd /InputCalendar/disableDate_inputCalendar.xml 1563 7d1cb7c27d76c4858bcadcfec381f558f26d817a3e278d7575b7808152da78f4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		inputCalendar1.disableDate("20220527 20220528 20220529");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 50px;'},E:[{T:1,N:'xf:trigger',A:{style:'width:188px;line-height:32px;height: 40px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align:left;',id:'trigger1',type:'button','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'disableDate()'}]}]},{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',rightAlign:'false',focusOnDateSelect:'false',style:'width:150px;height:40px;margin-left:100px;',id:'inputCalendar1',renderDiv:'true',calendarValueType:'yearMonthDate',monthNames:'1,2,3,4,5,6,7,8,9,10,11,12',monthNamesForYearMonthType:'1,2,3,4,5,6,7,8,9,10,11,12',yearSuffix:'Y'}}]}]}]}]})