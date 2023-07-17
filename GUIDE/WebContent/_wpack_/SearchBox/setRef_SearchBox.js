/*amd /SearchBox/setRef_SearchBox.xml 1883 2a17fe0407b7be7d4de59777a626f40596a83528a64b9279ca3732f5e13746d6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'Continent',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key2',name:'Country',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key3',name:'City',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'Asa',E:[{T:4,cdata:' '}]},{T:1,N:'Asia',E:[{T:4,cdata:' '}]},{T:1,N:'Korea',E:[{T:4,cdata:' '}]},{T:1,N:'Seoul',E:[{T:4,cdata:' '}]},{T:1,N:'key1',E:[{T:4,cdata:' Asia'}]},{T:1,N:'key2',E:[{T:4,cdata:'Korea'}]},{T:1,N:'key3',E:[{T:4,cdata:'Seoul'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		search1.setRef("data:dataMap1.key2");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:10%;height:35px;display: block;margin:50px;margin-bottom:30px;background-color:#C0C0C0;font-size:15px;padding:10px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setRef()'}]}]},{T:1,N:'w2:searchbox',A:{id:'search1',style:'width: 30%;height:35px;margin:20px;margin-top:0px;margin-left: 50px;',ref:'data:dataMap1.key3'}}]}]}]})