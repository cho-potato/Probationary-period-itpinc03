/*amd /Radio/tooltipDisplay_tooltipShowAlways_tooltipItemLabel_tooltipFormatter_Radio.xml 1931 051b920d35d38bf23cfa0fd0f3ec2fa739fdde149d144d6f5b21beee8b77fe1d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'style',E:[{T:3,text:'\r\n        	.test{\r\n				text-overflow:ellipsis;\r\n			}\r\n			.test2{\r\n				background-color:red;\r\n			}\r\n\r\n        	table {\r\n				table-layout:fixed;\r\n			}\r\n\r\n			table td {\r\n				width:30px;\r\n				overflow: hidden;\r\n				text-overflow: ellipsis;\r\n			}\r\n		'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.tooltip = function(label, index) {
		return "Select " + label + ".";
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:select1',A:{tooltipFormatter:'scwin.tooltip',ref:'',tooltipClass:'',appearance:'full',tooltipDisplay:'true',style:'width:150px;height:140px;text-overflow:ellipsis;margin: 50px;margin-left: 100px;',id:'',selectedindex:'-1',rows:'',cols:'2',class:'test',tooltipItemLabel:'',tooltipShowAlways:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'yourChoice111'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'001'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Item2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'002'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Item3'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'003'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'yourChoice444'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'004'}]}]}]}]}]}]}]})