/*amd /AutoComplete/showChooseOption_changeChooseOption_AutoComplete.xml 2356 e3f88c6be9e81241e70b6467114b6a9422cdb89eecefdea65da01fb3991a8fba */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		autoComplete1.changeChooseOption("0", "what is your favorite fruit?");
	};
	
	scwin.trigger2_onclick = function(e) {
		autoComplete1.showChooseOption(false);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 50px;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width:200px;line-height:20px;height: 30px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align:left;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'changeChooseOption()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',style:'width:220px;line-height:20px;height: 30px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align:left;margin-left: 30px;',id:'trigger2',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'showChooseOption(false);'}]}]},{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',search:'start',chooseOptionLabel:'Select a fruit.',ref:'',chooseOption:'true',editType:'select',useKeywordHighlight:'false',style:'width: 200px;height: 21px;display: block;margin-top: 30px;',id:'autoComplete1',allOption:'',useLocale:'false',chooseOptionValue:'1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Apple'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Banana'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'22'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Orange'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'33'}]}]}]}]}]}]}]}]})