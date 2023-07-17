/*amd /FusionChart-006/fint_th.xml 3080 6d15950c8f95616dbc829131398d602b6fe8a6c93a2ff68cd743eb7f302d4f1a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
		scwin.onpageload = function() {
		
		};
		
		scwin.onpageunload = function() {
			
		};         
         
		scwin.fn01 = function() {		
			imports("externalJS/FusionCharts3.11.0//themes/fusioncharts.theme.fint.js");
			 var  dataSource = {
					  "chart": {
					    "caption": "Nordstorm's Customer Satisfaction Score for 2017",
					    "lowerlimit": "0",
					    "upperlimit": "100",
					    "showvalue": "1",
					    "numbersuffix": "%",
					    "theme": "fint",
					    "showtooltip": "0"
					  },
					  "colorrange": {
					    "color": [
					      {
					        "minvalue": "0",
					        "maxvalue": "50",
					        "code": "#F2726F"
					      },
					      {
					        "minvalue": "50",
					        "maxvalue": "75",
					        "code": "#FFC533"
					      },
					      {
					        "minvalue": "75",
					        "maxvalue": "100",
					        "code": "#62B58F"
					      }
					    ]
					  },
					  "dials": {
					    "dial": [
					      {
					        "value": "81"
					      }
					    ]
					  }
					};
			 
			fwGaugeChart.fc().setJSONData(dataSource);	
			fwGaugeChart.fc().render();
		};
		
		scwin.fn02 = function(){	
			imports("externalJS/FusionCharts3.11.0//themes/fusioncharts.theme.fint.js");
			 var  options = {
					    "caption": "Nordstorm's Customer Satisfaction Score for 2017",
					    "lowerlimit": "0",
					    "upperlimit": "100",
					    "showvalue": "1",
					    "numbersuffix": "%",
					    "theme": "fint",
					    "showtooltip": "0"
					  };		
					
					fwGaugeChart.setChartAttribute( options );
					fwGaugeChart.setValue("70" )
					fwGaugeChart.draw();
		};
		
		scwin.trigger1_onclick = function(e) {
			scwin.fn01();
		};
		
		scwin.trigger2_onclick = function(e) {
			scwin.fn02()
		};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:fwGaugeChart',A:{chartType:'angulargauge',style:'width: 500px;height: 300px;',id:'fwGaugeChart',version:'3.11'}},{T:1,N:'xf:trigger',A:{type:'button',style:'width:182px;height:23px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'fint 적용(fc().setJSONData)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',id:'trigger2',style:'width:172px;height:23px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'fint 적용(setChartAttribute)'}]}]}]}]}]})