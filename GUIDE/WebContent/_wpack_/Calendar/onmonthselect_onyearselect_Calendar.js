/*amd /Calendar/onmonthselect_onyearselect_Calendar.xml 1418 bb05a850b1dd164d981a6187ce70eb3af8900c9398186c4acfe97536dfd4b0dc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.calendar1_onyearselect = function(info) {
		alert("onyearselect\n\n Change the year from " + info.oldValue + " to " + info.newValue + "?" );
	};
	
	scwin.calendar1_onmonthselect = function(info) {
		alert("onmonthselect\n\n Change the month from " + info.oldValue + " to " + info.newValue + "?" );	
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding-top: 100px;padding-left: 200px;'},E:[{T:1,N:'w2:calendar',A:{'ev:onyearselect':'scwin.calendar1_onyearselect',footerDiv:'false','ev:onmonthselect':'scwin.calendar1_onmonthselect',style:'width: 100px;height: 100px;',id:'calendar1',calendarValueType:'',monthNames:'1,2,3,4,5,6,7,8,9,10,11,12',yearSuffix:'Y'}}]}]}]}]})