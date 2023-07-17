/*amd /InputCalendar/validate_displaymessage_invalidMessageFunc_InputCalendar.xml 2923 0d200d93fffafda668a2d156098b3b960789d217f3c7d1938e97ce62850a90d4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/2019-09/Components/WebSquare.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	

	scwin.trigger1_onclick = function(e) {
		
		inputCalendar1.validate();
		// alert(result);
	};
	
	
	
	
	
	
	
	
	
	scwin.fn_msg = function(){ 
		var msg = "";
		var invalidType = this.getType(); 
		if (invalidType == "mandatory") {
			msg = "Enter a date. 날짜를 입력하세요. ";
		} else {
			msg = "Invalid date. 날짜 형식을 확인하세요.";
		}
		alert(msg);	
	};	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'margin-top:100px;	margin-left:100px;	padding: 10px;	font-size: 20px;	border: black solid 2px;',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:50.00%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:50.00%'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'padding: 10px;',class:'w2tb_th'},E:[{T:3,text:'\r\n    				Validate&nbsp;/&nbsp;날짜&nbsp;검증\r\n    				'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'padding: 10px;',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'border: none;width: 80px;height: 23px;color: blue;font-weight: bolder;font-size: 15px;background-color: lightblue;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Validate'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'padding: 10px;',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',id:'inputCalendar1',style:'width: 150px;height: 23px;	font-size: 20px;',renderDiv:'true',focusOnDateSelect:'false',calendarValueType:'yearMonthDate',rightAlign:'false',renderType:'component',defaultDate:'20180101',invalidMessageFunc:'scwin.fn_msg',dateValidCheck:'true',mandatory:'true',displaymessage:'true'}}]}]}]}]}]}]})