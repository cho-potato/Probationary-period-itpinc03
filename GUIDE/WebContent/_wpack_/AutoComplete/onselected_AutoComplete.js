/*amd /AutoComplete/onselected_AutoComplete.xml 1983 21b598950723833e8a382d1b5a21a998ae178b26541d4ecc115b40ed9d2d99db */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.autoComplete1_onitemclick = function(index) {
		alert("onitemclick - Item of index "+index+" clicked!");
	};	
	
	scwin.autoComplete1_onselected = function() {
		alert("onselected event occurred!");
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'autoComplete1',useKeywordHighlight:'true',style:'height: 30px;margin: 50px;width: 200px;',submenuSize:'auto',search:'contain',useLocale:'false',allOption:'',chooseOption:'',ref:'','ev:onselected':'scwin.autoComplete1_onselected','ev:onitemclick':'scwin.autoComplete1_onitemclick',caseSensitive:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Busan'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Daejeon'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Gwanju'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Incheon'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Jeju'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]}]}]}]}]}]})