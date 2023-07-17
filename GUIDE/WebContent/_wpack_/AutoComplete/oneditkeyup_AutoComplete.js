/*amd /AutoComplete/oneditkeyup_AutoComplete.xml 1915 893f043100704a09694ee9c2080d4596a6d0ad67228d9dfe6e608050688743f6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.autoComplete1_oneditkeyup = function(info,e) {
		var message = ("Previous selection is " + info.oldValue + ". \nThe pressed key is " + info.newValue + ", and the code of the pressed key ( " + info.newValue + " )" + " is " + info.keyCode + ".");
		alert(message);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'autoComplete1',useKeywordHighlight:'true',style:'height: 30px;margin: 50px;width: 200px;',submenuSize:'auto',search:'contain','ev:oneditkeyup':'scwin.autoComplete1_oneditkeyup',allOption:'',chooseOption:'',chooseOptionLabel:'Select a city.',ref:'',searchTarget:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Hanoi'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'001'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Danang'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'002'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Taipei'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'003'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Bangkok'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'004'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Hawaii'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'005'}]}]}]}]}]}]}]})