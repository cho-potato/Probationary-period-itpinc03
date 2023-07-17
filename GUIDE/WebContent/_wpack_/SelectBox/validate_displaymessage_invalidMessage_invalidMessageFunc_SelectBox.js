/*amd /SelectBox/validate_displaymessage_invalidMessage_invalidMessageFunc_SelectBox.xml 2239 f7a79d4deafe14b315a1cd7b6435321d263094634074196feb8142f33fab81f3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.fn_msg = function(){ 
    var invalidType = this.getType();  // invalid type
    var invalidValue = this.getValue(); // invalid value
    switch (invalidType) {
			case "mandatory" :
				msg = "Select your favorit city.";
				break;
			default :
				msg = "Enter again.";
				break;
		}

		alert(msg);
		// return msg;
    }
	

	
	scwin.trigger1_onclick = function(e) {
		select1.validate();
		// alert(result);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:select1',A:{id:'select1',chooseOption:'true',style:'height: 30px;margin: 50px;width: 200px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',mandatory:'true',chooseOptionLabel:'Select a city.',displaymessage:'true',invalidMessage:'',invalidMessageFunc:'scwin.fn_msg'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'New York'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Paris'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'London'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 200px;height: 30px;margin-left: 50px;font-size: 20px;font-family: consolas;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'validate();'}]}]}]}]}]})