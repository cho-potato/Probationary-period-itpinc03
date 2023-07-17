/*amd /AutoComplete/onchange_AutoComplete.xml 2270 ceba7a8e68892706bfa56c0f4bd32a5f0141e86c6119c2d285fdd0989a313b5a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.autoComplete1_onchange = function(info) {
		var oldValue = info.oldValue;
		var newValue = info.newValue;
		alert(oldValue + " changed to " + newValue + "." );
	};
	
	scwin.trigger1_onclick = function(e) {
		autoComplete1.setValue("Daegu");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'height: 30px;margin: 50px;margin-right: 0px;width: 200px;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Change to "Daegu".'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',autoFocus:'',caseSensitive:'false',chooseOption:'true',chooseOptionLabel:'Select a city.',editType:'select',id:'autoComplete1',mandatory:'true',nextTabID:'',placeholder:'Select a city.',ref:'',search:'start',style:'height: 30px;margin: 50px;width: 200px;',submenuSize:'auto',useKeywordHighlight:'false','ev:onchange':'scwin.autoComplete1_onchange',class:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Seoul'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Busan'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Busan'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Daegu'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Daegu'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Jeju'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Jeju'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Jeonju'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Jeonju'}]}]}]}]}]}]}]})