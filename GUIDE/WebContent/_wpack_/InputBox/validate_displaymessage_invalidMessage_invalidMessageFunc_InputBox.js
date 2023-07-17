/*amd /InputBox/validate_displaymessage_invalidMessage_invalidMessageFunc_InputBox.xml 1937 37dc1e9b0685348596067b0b92d9bfbf1e05b95dabd93c75d359aaf304844c8b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		//var result = input1.validate();
		//alert (result);
		input1.validate();
	};
	
	scwin.fn_msg = function() {
		var invalidType = this.getType();
		var invalidValue = this.getValue();
		switch (invalidType) {
			case "mandatory" :
				msg = "Information is required.";
				break;
			case "minLength":
				msg = "Minimum " + invalidValue + " digits are required.";
				break;
			case "minByteLength":
				msg = "Minimum " + invalidValue + " bytes are required.";
				break;
			default :
				msg = "Not valid";
				break;
		}
		alert(msg);
		return msg;			
	}
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 50px;'},E:[{T:1,N:'xf:input',A:{minlength:'',minByteLength:'5',invalidMessage:'',adjustMaxLength:'false',style:'width: 144px;height: 39px;',invalidMessageFunc:'scwin.fn_msg',id:'input1',displaymessage:'true',mandatory:'true'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width: 150px;height: 39px;margin-left: 30px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'validate();'}]}]}]}]}]}]})