/*amd /Secret/validate_displaymessage_invalidMessage_invalidMessageFunc_Secret.xml 1941 fec817c5b4aff993ec9b00523cd7e0066aa46c28e83b52fd40df93f8fa871160 */
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
				msg = "Create your password.";
				break;
			case "minLength" :
				msg = "Your password must be of at least " + invalidValue + " digits.";
				break;
			default :
				msg = "Enter again.";
				break;
		}

		alert(msg);
		// return msg;
    }	
    
    
    
    
    
    
    
	scwin.trigger1_onclick = function(e) {
		secret1.validate();
		// alert(message);
		
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 50px;'},E:[{T:1,N:'w2:textbox',A:{label:'Create Password',style:'height: 30px;color: blue;font-family: helvetica;font-size: 20px;',id:''}},{T:1,N:'xf:secret',A:{style:'width: 200px;height: 21px;',id:'secret1',mandatory:'true',minlength:'8',invalidMessageFunc:'scwin.fn_msg',invalidMessage:'',displaymessage:'true'}},{T:1,N:'xf:trigger',A:{style:'width: 80px;height: 23px;margin-left: 20px;',id:'trigger1',type:'button','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'validate();'}]}]}]}]}]}]})