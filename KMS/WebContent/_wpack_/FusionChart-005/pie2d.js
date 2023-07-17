/*amd /FusionChart-005/pie2d.xml 3147 340fedbdbcc4d958ac4c7e04e0f19a34770cfb712f6774f15b9244c80e6ecd7a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'serise',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'0'}]},{T:1,N:'value',E:[{T:4,cdata:'0'}]},{T:1,N:'serise',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'0'}]},{T:1,N:'value',E:[{T:4,cdata:'0'}]},{T:1,N:'serise',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'3333'}]},{T:1,N:'value',E:[{T:4,cdata:'3333'}]},{T:1,N:'serise',E:[{T:4,cdata:'3333'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'1111'}]},{T:1,N:'value',E:[{T:4,cdata:'1111'}]},{T:1,N:'serise',E:[{T:4,cdata:'1111'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
			var options = {
				"caption": "Split of Visitors by Age Group",
		        "subCaption": "Last year",
		        "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
		        "bgColor": "#ffffff",
		        "showBorder": "0",
		        "showShadow": "0",
		        "enableSmartLabels": "0",
		        "skipOverlapLabels" : "true",
		        "startingAngle": "0",
		        "decimals": "1",
		        "captionFontSize": "14",
		        "subcaptionFontSize": "14",
		        "subcaptionFontBold": "0",
		        "toolTipColor": "#ffffff",
		        "toolTipBorderThickness": "0",
		        "toolTipBgColor": "#000000",
		        "toolTipBgAlpha": "80",
		        "toolTipBorderRadius": "2",
		        "toolTipPadding": "5",
		        "showHoverEffect": "1",
		        "showLegend": "1",
		        "legendBgColor": "#ffffff",
		        "legendBorderAlpha": "0",
		        "legendShadow": "0",
		        "legendItemFontSize": "10",
		        "legendItemFontColor": "#666666",
		        "useDataPlotColorForLabels": "1"
			};
			
			fusionchart1.setChartAttribute( options );
			fusionchart1.draw();			
		};
		
		scwin.onpageunload = function() {
			
		};
		
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:fusionchart',A:{seriesType:'simple',runflashAt:'IE6,IE7,IE8',id:'fusionchart1',chartType:'Pie2D',style:'position: relative;width: 500px;height: 300px;',drawType:'javascript',accessibility:'false',ref:'data:dataList1',labelNode:'label',valueNode:'value',seriesNode:'serise'}}]}]}]})