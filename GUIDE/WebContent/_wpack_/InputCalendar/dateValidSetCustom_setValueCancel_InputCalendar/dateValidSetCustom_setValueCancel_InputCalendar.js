/*amd /InputCalendar/dateValidSetCustom_setValueCancel_InputCalendar/dateValidSetCustom_setValueCancel_InputCalendar.xml 1980 0183799fa49f138ed4390771f9413932d5c612ff82591cc369e0fe32de2bddd1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		requires("uiplugin.popup");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.inputCalendar1_invalidMessageFunc = function() {
		var opts = {
            "id" : "popup2",
            "type" : "wframePopup",
            "width" : "440px",
            "height" : "90px",
            "top" : 100,
            "left" : 300,
            "popupName" : "date_validation_error",
            "modal" : true,
            "title" : "date validation error",
            "dataObject" : {
                "type" : "string",
                "data" : this.callerId,
                "name" : "callerId"
            }
        };
        if (!$p.getPopup("popup2")) {
        	$p.openPopup("messagePopup.xml", opts);
        }
	}
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',id:'inputCalendar1',style:'height: 30px;margin: 50px;width: 200px;',renderDiv:'true',focusOnDateSelect:'false',calendarValueType:'yearMonthDate',rightAlign:'false',renderType:'component',dateValidSetCustom:'true',invalidMessageFunc:'scwin.inputCalendar1_invalidMessageFunc',dateValidCheck:'true',dateValidSet:'true',validCheck:'true',displaymessage:'false',monthNames:'1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12',monthNamesForYearMonthType:'1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12',yearSuffix:'Y'}}]}]}]})