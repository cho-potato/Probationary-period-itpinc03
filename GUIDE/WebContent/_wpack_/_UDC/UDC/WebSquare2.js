/*amd /_UDC/UDC/WebSquare2.xml 6351 551039a3c8c31c7c6f764ad60abf49047f34836d60820a12b47f6efcb9782bea */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var first = input1.getValue();
		udc3.setFirst(first);
	};
	
	scwin.trigger2_onclick = function(e) {
		var second = input2.getValue();
		udc3.setSecond(second);		
	};
	
	scwin.trigger3_onclick = function(e) {
		var message = udc3.getValues();
		input3.setValue("Entered full name is " + message + ".");
	};
	
	scwin.udc3_onclick = function() {
		var message = udc3.getValue();
		alert("Full name is " + message);
	};
	
	scwin.udc3_onclick = function() {
		var message = udc3.getValues();
		alert(message);
	};
	
	scwin.udc3_onUserClick_1 = function() {
		alert("You are about to see the full name.");
	};
	
}}}]},{T:1,N:'w2:require',A:{src:'/xhtml/two.xml'}},{T:1,N:'w2:require',A:{src:'/xhtml/full%20Name.xml'}},{T:1,N:'w2:require',A:{src:'/xhtml/fullNames.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'User\'s Input',style:'width:80%;height:35px;padding:5px;line-height:32px;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin:30px;'}},{T:1,N:'xf:group',A:{tagname:'table',style:'width:80%;margin:30px;padding:10px;',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:25.00%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:25.00%'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:25.00%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:25.00%'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;',class:'w2tb_th'},E:[{T:3,text:'First&nbsp;Name'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'input1',style:'width: 144px;height:35px;padding:5px;line-height:32px;font-size:15px;color: blue;font-family:monospace;font-style:normal;font-weight:bolder;margin:20px;color: blue;'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;',class:'w2tb_th'},E:[{T:3,text:'Last&nbsp;Name'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'input2',style:'width: 144px;height:35px;padding:5px;line-height:32px;font-size:15px;color: blue;font-family:monospace;font-style:normal;font-weight:bolder;margin:20px;color: magenta;'}}]}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'UDC',style:'width:80%;height:35px;padding:5px;line-height:32px;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin:30px;'}},{T:1,N:'xf:group',A:{tagname:'table',style:'width:80%;margin:30px;padding:10px;',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:50.00%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:50.00%'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;',class:'w2tb_th'},E:[{T:3,text:'disable1&nbsp;&&nbsp;disable2'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_fullNames',A:{style:'width: 80%;height: 90%;',id:'udc1',disable2:'true',disable1:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:40%;height:35px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setFirst()'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:45%;height:35px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin-left: 10px;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setSecond()'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_fullNames',A:{style:'width: 80%;height: 90%;',id:'udc3',disable2:'false',disable1:'false','ev:onUserClick':'scwin.udc3_onclick','ev:onUserClick_2':'scwin.udc3_onUserClick_2','ev:onUserClick_1':'scwin.udc3_onUserClick_1'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;',class:'w2tb_th'},E:[{T:3,text:'onUserClick_1&nbsp;&&nbsp;'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:45%;height:35px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin-left: 10px;',id:'trigger3','ev:onclick':'scwin.trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getValues()'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'input3',style:'width: 90%;height:35px;padding:5px;line-height:32px;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin:20px;'}}]}]}]}]}]}]})