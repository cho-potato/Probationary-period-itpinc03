/*amd /sample/compList/widgetContent/wcPage1.xml 4079 5706ff793012835a6a1841ca8f0c52fac94b2cad74d3d3d54bc3be6353b44add */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dc_chart',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:3,text:'\n    					7-\n    					'},{T:1,N:'w2:column',A:{id:'date',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.02'}]},{T:1,N:'val',E:[{T:4,cdata:'42'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.03'}]},{T:1,N:'val',E:[{T:4,cdata:'74'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.04'}]},{T:1,N:'val',E:[{T:4,cdata:'59'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.05'}]},{T:1,N:'val',E:[{T:4,cdata:'37'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.06'}]},{T:1,N:'val',E:[{T:4,cdata:'47'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.07'}]},{T:1,N:'val',E:[{T:4,cdata:'39'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.08'}]},{T:1,N:'val',E:[{T:4,cdata:'38'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.09'}]},{T:1,N:'val',E:[{T:4,cdata:'156'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.10'}]},{T:1,N:'val',E:[{T:4,cdata:'95'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.11'}]},{T:1,N:'val',E:[{T:4,cdata:'101'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.12'}]},{T:1,N:'val',E:[{T:4,cdata:'73'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.13'}]},{T:1,N:'val',E:[{T:4,cdata:'68'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.14'}]},{T:1,N:'val',E:[{T:4,cdata:'64'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'date',E:[{T:4,cdata:'2017.07.15'}]},{T:1,N:'val',E:[{T:4,cdata:'19'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
			scwin.dc_chart_lbl = function(dataObj, rowIdx){
				var curLblArr = (dataObj.date).split("-");
				if(rowIdx%2 === 0){
					return curLblArr[0]+"<br/>"+curLblArr[1]+"-"+curLblArr[2];
				}
				return "";
			};    
			
			scwin.onpageload = function() {
				var fc = ui_chart.fc();
				var fcOpt = {
					"caption": "일별 조회수",
					"captionFontSize": "16",
		        	"subCaption": "최근 14일",
		        	"subCaptionFontSize": "12",
					"lineThickness": "2",
					"axisLineAlpha": "25",
					"showXAxisLine": "1",
					"showValues": true,
					"valueFontColor": "#999",
					"thousandSeparator": ",",
					"showLabels": false,
					"labelStep": 3,
					"labelPadding": "20",
					"showPrintMenuItem": true,
					"exportEnabled": true,
					"exportAction": "download",
					"exportFormats": "PNG=Export as PNG Image|JPG=Export as JPG Image|PDF=Export as PDF File",
					"exportShowMenuItem": true,
					"toolTipColor": "#ffffff",
					"toolTipPadding":"5",
					"toolTipBorderColor": "#000",
					"toolTipBorderThickness": "0",
					"toolTipBgColor": "#000",
					"toolTipBgAlpha": "80",
		        	"toolTipBorderRadius": "2",
					"plottooltext": "<div style='color:#fff;text-align:center;'><div style='color:#ffff00;'>$label</div><div>$dataValue회</div></div>"
				}
				fc.setChartAttribute(fcOpt);
			};
		

}}}]},{T:1,N:'style',A:{type:'text/css'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'absBox'},E:[{T:1,N:'xf:group',A:{class:'widgetBox',id:'',style:''},E:[{T:1,N:'w2:fusionchart',A:{accessibility:'false',drawType:'javascript',runflashAt:'IE6,IE7,IE8',seriesType:'simple',chartType:'Line',style:'width: 100%;height: 100%;',id:'ui_chart',ref:'data:dc_chart',labelNode:'date',valueNode:'val',seriesNode:''}}]}]}]}]}]})