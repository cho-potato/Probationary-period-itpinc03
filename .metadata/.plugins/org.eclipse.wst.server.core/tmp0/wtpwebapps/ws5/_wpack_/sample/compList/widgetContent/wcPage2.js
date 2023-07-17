/*amd /sample/compList/widgetContent/wcPage2.xml 3197 de569d8a42442772340e15d27d20e873417c31f012d8ad18f68b7ad2fff53a36 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dc_chart',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'type',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'count',E:[{T:4,cdata:'1465'}]},{T:1,N:'type',E:[{T:4,cdata:'컴퓨터'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'count',E:[{T:4,cdata:'210'}]},{T:1,N:'type',E:[{T:4,cdata:'휴대전화'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'count',E:[{T:4,cdata:'26'}]},{T:1,N:'type',E:[{T:4,cdata:'알 수 없음'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'count',E:[{T:4,cdata:'14'}]},{T:1,N:'type',E:[{T:4,cdata:'태블릿'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
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
					"caption": "기기 유형별 조회수",
					"captionFontSize": "16",
					"showPercentValues": true,
					//showPercentInToolTip
					"showValues": true,
					"valueFontColor": "#999",
					"startingAngle": 270,
			        "showHoverEffect": "1",
			        "showLegend": "1",
			        "legendBgColor": "#ffffff",
			        "legendBorderAlpha": "0",
			        "legendShadow": "0",
			        "labelFontSize": 12,
			        "labelDistance": "0",
					"enableSmartLabels": "0",
					"useDataPlotColorForLabels": "1",
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
		

}}}]},{T:1,N:'style',A:{type:'text/css'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'absBox'},E:[{T:1,N:'xf:group',A:{class:'widgetBox',id:'',style:''},E:[{T:1,N:'w2:fusionchart',A:{accessibility:'false',drawType:'javascript',runflashAt:'IE6,IE7,IE8',seriesType:'simple',chartType:'Pie2D',style:'width: 100%;height: 100%;',id:'ui_chart',ref:'data:dc_chart',labelNode:'type',valueNode:'count',seriesNode:''}}]}]}]}]}]})