/*amd /inputCalendar-002/cal_enable.xml 2226 2ffab533827ac5b9ce7fd55b430db8de6d73e37196d493a7dd42461381980157 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model'},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	scwin.onpageload = function() {
	
	};
	
	scwin.onpageunload = function() {
	
	}; 
        
	// 1. 활성화시킬 날짜 지정
	scwin.enableDate = function(){
		var date_enabled = ["20170608", "20170621", "20170629", "20170713", "20170721"];	// 활성화시킬 날짜 지정
		$(".w2calendar_col_date").addClass("date_diabled");
	
		var cur_date = $(".w2calendar_footer_date")[0].innerHTML.split("-");
		var cur_year = cur_date[0];
		var cur_month = cur_date[1];
		
		for(var ix in date_enabled){
			var date = date_enabled[ix];
			var year = date.substr(0,4);
			var month = date.substr(4,2);
			var day = date.substr(6,2);		
			if(cur_year == year && cur_month == month){
				$(".w2calendar_date_" + Number(day)).removeClass("date_diabled");
			}
		}		
	}
			
		
	// 2.inputCalendar에 이벤트 등
	
	scwin.inputCal1_onyearselect = function(info) {
		setTimeout(scwin.enableDate,10);
	};
	
	scwin.inputCal1_onmonthselect = function(info) {
		setTimeout(scwin.enableDate,10);
	};
	
	scwin.inputCal1_oniconclick = function() {
		setTimeout(scwin.enableDate,10);
	};

	
	
	
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.date_diabled{pointer-events:none;cursor:default;opacity:.2}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:inputCalendar',A:{rightAlign:'false',calendarValueType:'yearMonthDate',renderType:'component',id:'inputCal1',renderDiv:'true','ev:onmonthselect':'scwin.inputCal1_onmonthselect','ev:oniconclick':'scwin.inputCal1_oniconclick',style:'position: absolute ;left: 20px;top: 20px;width: 150px;height: 23px;',focusOnDateSelect:'false',footerDiv:'false','ev:onyearselect':'scwin.inputCal1_onyearselect'}}]}]}]})