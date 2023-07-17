/*amd /_DataCollection/onbeforemodelchange_DataMap.xml 2035 76905aa6df750e163d53fec6fd7d9d154d741b9fa825a59b68617a98d2eeaf18 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap1','ev:onbeforemodelchange':'scwin.dataMap1_onbeforemodelchange'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'id',name:'id',dataType:'text'}},{T:1,N:'w2:key',A:{id:'type',name:'type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'color',name:'color',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shape',name:'shape',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'id',E:[{T:4,cdata:'1001'}]},{T:1,N:'type',E:[{T:4,cdata:'Medical'}]},{T:1,N:'color',E:[{T:4,cdata:'Red'}]},{T:1,N:'shape',E:[{T:4,cdata:'Round'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		dataMap1.set("type", "Tourism");
	};
	
	scwin.dataMap1_onbeforemodelchange = function(info) {
		if (info.newValue == "Leisure") {
			alert(info.newValue + " cannot be used.");
			return false;
		} else {
			alert("Key : " + info.key + "\n\nOldValue : " + info.oldValue + "\n\nNewValue : " + info.newValue);			
		}
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:280px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align:left;margin: 100px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'dataMap1.set();'}]}]}]}]}]})