/*amd /$p/_General/dynamicCreate_$p.xml 1666 db1f346b735f090e918890607234e48c70e23ddafe9604a8075bff98b4b31e8e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		$p.dynamicCreate("group1", "group", {style: "width: 200px; height: 40px; margin: 50px"});
		
		$p.dynamicCreate("textbox1", "textbox", {style: "border: solid black 2px; float: left; width: 200px; height: 20px; float: left; text-align: center; margin-bottom: 20px"}, group1);
		
		var comObj = WebSquare.util.getComponentById("textbox1");
		comObj.setValue("Select the date.");
		
		$p.dynamicCreate("calendar1", "calendar", {style: "width: 200px; float: left; height: 40px; float: left"}, group1);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:200px;height:45px;margin-top: 50px;margin-left: 50px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;text-align:left;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'dynamicCreate()'}]}]}]}]}]})