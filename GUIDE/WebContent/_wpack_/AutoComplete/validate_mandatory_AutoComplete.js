/*amd /AutoComplete/validate_mandatory_AutoComplete.xml 1836 c8e69e4e395fb7919822cefbe1121f55886b98cf0475e1176a751b07431a8d58 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var result = autoComplete1.validate();
		alert(result);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'autoComplete1',useKeywordHighlight:'false',style:'height: 30px;margin: 50px;width: 200px;',submenuSize:'auto',search:'start',allOption:'',chooseOption:'true',chooseOptionLabel:'Select a city',ref:'',mandatory:'true',placeholder:'rrr'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Hanoi'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'001'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Danang'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'002'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Taipei'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'003'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Bangkok'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'004'}]}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 200px;height: 30px;margin-left: 50px;font-size: 20px;font-family: consolas;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'validate();'}]}]}]}]}]})