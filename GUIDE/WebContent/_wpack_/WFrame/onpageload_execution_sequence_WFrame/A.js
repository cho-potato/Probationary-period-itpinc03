/*amd /WFrame/onpageload_execution_sequence_WFrame/A.xml 1214 9256b6c2634107a6749adc3912bf25ce3fb75c89b1d30e8f055615926432a33c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		alert("(2) A");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'(2) A.xml',style:'width: 150px;text-align: center;height: 23px;margin: 10px;margin-bottom: 30px;background-color:#C0C0C0;font-size:20px;'}},{T:1,N:'w2:wframe',A:{id:'',initScript:'',src:'aa1.xml',style:'width:376px;height:50px;border-color:green;border-style:solid;margin: 10px;'}},{T:1,N:'w2:wframe',A:{id:'',style:'width:376px;height:50px;border-color:green;border-style:solid;margin: 10px;',src:'aa2.xml'}}]}]}]})