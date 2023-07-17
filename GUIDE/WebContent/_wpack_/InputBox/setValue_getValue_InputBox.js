/*amd /InputBox/setValue_getValue_InputBox.xml 2542 bd390649ff4d6cfcb12b99a42d79054f57646060935f02b4cdb99bc8ab90f47d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var value = input1.getValue();
		alert(value);
	};
	
	scwin.trigger2_onclick = function(e) {
		input1.setValue("Hello!");
	};
	
	scwin.trigger3_onclick = function(e) {
		input1.setValue(111);
	};
	
	scwin.trigger4_onclick = function(e) {
		input1.setValue("WebSquare5");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 50px;'},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 150px;height: 39px;line-height:32px;padding:5px;font-size:15px;font-family:monospace;',id:'input1'}},{T:1,N:'xf:trigger',A:{style:'width: 150px;height: 39px;margin-left: 50px;float: right;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger1',type:'button','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getValue()'}]}]}]},{T:1,N:'xf:trigger',A:{style:'width: 150px;height:39px;margin-top:30px;display: block;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger2',type:'button','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setValue()'}]}]},{T:1,N:'xf:trigger',A:{style:'width: 150px;height:39px;margin-top:30px;display: block;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger3',type:'button','ev:onclick':'scwin.trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setValue()'}]}]},{T:1,N:'xf:trigger',A:{style:'width: 150px;height:39px;margin-top:30px;display: block;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-size:15px;font-family:monospace;',id:'trigger4',type:'button','ev:onclick':'scwin.trigger4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setValue()'}]}]}]}]}]}]})