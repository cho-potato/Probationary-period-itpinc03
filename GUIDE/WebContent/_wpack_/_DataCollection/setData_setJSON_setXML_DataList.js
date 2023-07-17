/*amd /_DataCollection/setData_setJSON_setXML_DataList.xml 3529 3c50c7721039ca38cc327158966196532f31282c3400f8141c68161197bd22cc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Name',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Value',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'Name',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'Value',E:[{T:4,cdata:'001'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'Name',E:[{T:4,cdata:'Busan'}]},{T:1,N:'Value',E:[{T:4,cdata:'002'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'Name',E:[{T:4,cdata:'Daegu'}]},{T:1,N:'Value',E:[{T:4,cdata:'003'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'Name',E:[{T:4,cdata:'Jeju'}]},{T:1,N:'Value',E:[{T:4,cdata:'004'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		dataList1.setData(["Beijing", "201", "Tokyo", "202", "Taipei", "203"])
	};
	
	scwin.trigger2_onclick = function(e) {
		var tmpJSON = [{"Name" : "Paris", "Value" : "101"},
		{"Name" : "London", "Value" : "102"},
		{"Name" : "Munich", "Value" : "103"}];
		dataList1.setJSON(tmpJSON);
	};
	
	scwin.trigger3_onclick = function(e) {
		var tmpXMLStr ="";
		tmpXMLStr += "<list>";
		tmpXMLStr += "<map><Name>Toronto</Name><Value>301</Value></map>";
		tmpXMLStr += "<map><Name>Vancouver</Name><Value>302</Value></map>";
		tmpXMLStr += "<map><Name>Seattle</Name><Value>303</Value></map>";
		tmpXMLStr += "</list>";
		
		var tmpXML = WebSquare.xml.parse(tmpXMLStr);
		
		dataList1.setXML(tmpXML);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 30px;'},E:[{T:1,N:'xf:trigger',A:{style:'width:118px;height:39px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;text-align:left;font-style:normal;font-weight:bolder;',id:'trigger1',type:'button','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setData()'}]}]},{T:1,N:'xf:trigger',A:{style:'width:118px;height:39px;margin-left:30px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;text-align:left;font-style:normal;font-weight:bolder;',id:'trigger2',type:'button','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setJSON()'}]}]},{T:1,N:'xf:trigger',A:{style:'width:118px;height:39px;margin-left:30px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;text-align:left;font-style:normal;font-weight:bolder;',id:'trigger3',type:'button','ev:onclick':'scwin.trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setXML()'}]}]}]},{T:1,N:'xf:select1',A:{id:'',selectedIndex:'-1',appearance:'full',style:'width: 150px;height: 21px;margin-left: 30px;',cols:'',rows:'',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'Name'}},{T:1,N:'xf:value',A:{ref:'Value'}}]}]}]}]}]}]})