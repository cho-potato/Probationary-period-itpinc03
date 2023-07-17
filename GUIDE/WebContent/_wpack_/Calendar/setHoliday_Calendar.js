/*amd /Calendar/setHoliday_Calendar.xml 1503 0bcc931ffe7ae771d415610ef7a7121bd1554cd1a5d4b3c444175830cba372f1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		calendar1.setHoliday("20220309 20220316 20220323");
	};
	
	scwin.onpageunload = function() {
		
	};	
	
	scwin.trigger1_onclick = function(e) {
		calendar1.setHoliday("20220308 20220315 20220322", true);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 30px;margin-left: 200px;'},E:[{T:1,N:'w2:calendar',A:{footerDiv:'false',style:'width: 100px;height: 100px;',id:'calendar1',monthNames:'Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec',yearSuffix:'Y'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width:263px;height:44px;margin-top:30px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;text-align:left;font-style:normal;font-weight:bolder;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setHoliday();'}]}]}]}]}]}]})