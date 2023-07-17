/*amd /InputCalendar/dateValidSetCustom_setValueCancel_InputCalendar/messagePopup.xml 1105 86e2573515fe7c9c60552139bde447037f4b53d811c075c04f200b254e65bf2d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	scwin.onpageload = function() {        
		scwin.callerId = $p.getParameter("callerId");
	};
	
	scwin.onpageunload = function() {
        var comp = $p.getComponentById(scwin.callerId);
        if (comp && typeof comp.setValueCancel === "function") { 
            comp.setValueCancel();
        }
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{label:'Date is invalid.',style:'width:420px;height:60px;font-size:30px;color:yellow;background-color:black;',id:''}}]}]}]})