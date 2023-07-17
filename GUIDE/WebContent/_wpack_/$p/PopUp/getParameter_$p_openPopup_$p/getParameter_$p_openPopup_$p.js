/*amd /$p/PopUp/getParameter_$p_openPopup_$p/getParameter_$p_openPopup_$p.xml 1633 762ecf5ae35cf9de31beb30ced3bc03d489f59aadec57b5d2bad19626e02fed2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		requires("uiplugin.popup");
		
		var rowJSON = {
		"Product Info" : {"Origin" : "Korea", "Manufacturer" : "Inswave", "Type" : "Software"},
		"Region": "Seoul",
		"Carrier" : true
		};
		
		var dataObject = {
		"type" : "json", 
		"name" : "param",
		"data" : rowJSON
		};
		
		
		var options = {
			id: "popup1",
			type: "wframePopup",
			height: "300px",
			width: "300px", 
			dataObject :  dataObject
		};
		
		$p.openPopup("src.xml", options);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:248px;height:39px;margin-top:30px;margin-left: 100px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;text-align:left;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'openPopup()'}]}]}]}]}]})