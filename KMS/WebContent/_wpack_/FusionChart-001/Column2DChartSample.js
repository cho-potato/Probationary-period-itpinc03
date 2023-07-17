/*amd /FusionChart-001/Column2DChartSample.xml 2384 52e6196910ce9963099b5ea03ad4fbf8e07f75b719e83e76fff61318f0140ba4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'-10000'}]},{T:1,N:'value',E:[{T:4,cdata:'-10000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'2000'}]},{T:1,N:'value',E:[{T:4,cdata:'2000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'30000'}]},{T:1,N:'value',E:[{T:4,cdata:'30000'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
			var toptions = { 
				"startValue": "10000", 
				"color": "FF0030",
				"displayValue": "TrendLine",
			};
			
			//fusionchart1.addTrendLine(toptions);
			
			var options = {
				"caption": "Monthly revenue for last year",
		        "subCaption": "Harry's SuperMart",
		        "xAxisName": "Month",
		        "yAxisName": "Revenues (In USD)",
		        "placevaluesInside": "1",
		        "numberPrefix": "$",
		        "showXAxisLine": "10",
		        "theme" : "fint",
		        "rotatevalues" : "30",
		        "showValues" : "true",
		        "numDivLines" : "5",
			};
			
			fusionchart1.setChartAttribute( options );
			fusionchart1.draw();			
		};
		
		scwin.onpageunload = function() {
			
		};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:fusionchart',A:{seriesType:'simple',runflashAt:'IE6,IE7,IE8',id:'fusionchart1',chartType:'Column2D',style:'position: relative;width: 500px;height: 300px;',drawType:'javascript',accessibility:'false',ref:'data:dataList1',labelNode:'label',valueNode:'value',seriesNode:''}}]}]}]})