/*amd /CheckBox/tooltipDisplay_tooltipShowAlways_tooltipFormatter_CheckBox.xml 2541 226fe862085a0aa87dff0ce8b09ee2dd78ea9acada89c594b3330bed859c2cb1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'country',name:'country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'city',name:'city',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'country',E:[{T:4,cdata:'Korea'}]},{T:1,N:'city',E:[{T:4,cdata:'Seoul'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'country',E:[{T:4,cdata:'China'}]},{T:1,N:'city',E:[{T:4,cdata:'Beijing'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'country',E:[{T:4,cdata:'Vietnam'}]},{T:1,N:'city',E:[{T:4,cdata:'Hanoi'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'country',E:[{T:4,cdata:'Russian'}]},{T:1,N:'city',E:[{T:4,cdata:'Vladivostok'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'country',E:[{T:4,cdata:'The Netherlands'}]},{T:1,N:'city',E:[{T:4,cdata:'Amsterdam'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'country',E:[{T:4,cdata:'Indonesia'}]},{T:1,N:'city',E:[{T:4,cdata:'Jakarta'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'style',E:[{T:3,text:'\r\n        \r\n\r\n        	table {\r\n				table-layout:fixed;\r\n			}\r\n			\r\n        table td {\r\n				width:30px;\r\n				overflow: hidden;\r\n				text-overflow: ellipsis;\r\n			}\r\n			'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.tooltip = function(label, index) {		
		var data = dataList1.getDataRow(index);
		var value = data.country;
		return label + ", " + value;
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:select',A:{selectedindex:'-1',id:'checkbox1',appearance:'full',style:'margin: 50px;margin-left: 100px;width:150px;height:50px;text-overflow:ellipsis;',cols:'2',rows:'',ref:'',tooltipDisplay:'true',tooltipTime:'0',tooltipShowAlways:'true',tooltipFormatter:'scwin.tooltip',tooltipItemLabel:'tooltip'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'city'}},{T:1,N:'xf:value',A:{ref:'country'}}]}]}]}]}]}]})