/*amd /InputCalendar/setValue_ioFormat_InputCalendar.xml 2011 ac8fb832d31fc51a0dc85ec99dfe8cfab10f91ff1b8556cd01671f6df2f3087f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		inputCalendar1.setValue("01022022");
	};
	
	scwin.trigger2_onclick = function(e) {
		inputCalendar1.setValue("01-04-2022");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',id:'inputCalendar1',style:'width:248px;height:38px;margin-top:100px;margin-left:300px;',renderDiv:'true',focusOnDateSelect:'false',calendarValueType:'yearMonthDate',rightAlign:'false',renderType:'component',monthNames:'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',yearSuffix:'Y',ioFormat:'MM-dd-yyyy',displayFormat:'MM-dd-yyyy',calendarDisplayFormat:'MM-dd-yyyy'}},{T:1,N:'xf:trigger',A:{type:'button',style:'width:248px;height:38px;display:block;margin-left:300px;margin-top:50px;background-color:#C0C0C0;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setValue("01022022");'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:248px;height:38px;display:block;margin-left:300px;margin-top:50px;background-color:#C0C0C0;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setValue("01-04-2022");'}]}]}]}]}]})