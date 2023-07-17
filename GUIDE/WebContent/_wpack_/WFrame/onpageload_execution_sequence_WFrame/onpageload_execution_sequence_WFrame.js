/*amd /WFrame/onpageload_execution_sequence_WFrame/onpageload_execution_sequence_WFrame.xml 1291 7057c99fbd25917fd6657a20a1416c31d2533b863b9fa5dac7881895e67fb4af */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		alert("(1) main");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 50px;margin-top: 10px;'},E:[{T:1,N:'w2:textbox',A:{style:'width: 150px;text-align: center;height: 23px;margin: 10px;margin-bottom: 30px;background-color:#8080C0;font-size:20px;',id:'',label:'(1) main.xml'}},{T:1,N:'w2:wframe',A:{src:'A.xml',style:'width:400px;height:200px;border-color:green;border-style:solid;margin: 10px;',id:'',initScript:''}},{T:1,N:'w2:wframe',A:{src:'C.xml',style:'width:400px;height:150px;border-color:orange;border-style:solid;margin: 10px;',id:''}}]}]}]}]})