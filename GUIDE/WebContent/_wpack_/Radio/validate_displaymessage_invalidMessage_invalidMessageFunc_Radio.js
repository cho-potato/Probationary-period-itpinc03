/*amd /Radio/validate_displaymessage_invalidMessage_invalidMessageFunc_Radio.xml 2157 9f81012e77d279a1095d5b506d3d6ea6cb1d623ba110669577981e695d277ca4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.fn_msg = function(){ 
    var invalidType = this.getType();  // invalid type
    if (invalidType == "mandatory")
    	{ message = "You forgot selecting a city!"; }
    	
		alert(message);
		return message;
    }
    
    
    
	scwin.trigger1_onclick = function(e) {
		radio1.validate();
		// alert(message);
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 50px;'},E:[{T:1,N:'xf:select1',A:{ref:'',appearance:'full',invalidMessage:'',style:'width: 150px;height: 21px;',invalidMessageFunc:'scwin.fn_msg',id:'radio1',displaymessage:'true',rows:'',cols:'',mandatory:'true',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'001'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Paris'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'002'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'London'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'003'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'New York'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'004'}]}]}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width: 150px;height: 39px;margin-left: 30px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'validate();'}]}]}]}]}]}]})