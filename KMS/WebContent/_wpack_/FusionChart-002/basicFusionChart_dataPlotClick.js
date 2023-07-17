/*amd /FusionChart-002/basicFusionChart_dataPlotClick.xml 7849 d3472eb08b427d55337098d7eb8cb6c57adbd55b63e83a8958e0613a4b875062 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/websquare5/common/css/content.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{id:'dlt_Column',baseNode:'list',style:'',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'라벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'값',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Jan'}]},{T:1,N:'value',E:[{T:4,cdata:'420000'}]},{T:1,N:'color',E:[{T:4,cdata:'#008ee4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Feb'}]},{T:1,N:'value',E:[{T:4,cdata:'810000'}]},{T:1,N:'color',E:[{T:4,cdata:'#008ee4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Mar'}]},{T:1,N:'value',E:[{T:4,cdata:'720000'}]},{T:1,N:'color',E:[{T:4,cdata:'#008ee4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Apr'}]},{T:1,N:'value',E:[{T:4,cdata:'550000'}]},{T:1,N:'color',E:[{T:4,cdata:'#008ee4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'May'}]},{T:1,N:'value',E:[{T:4,cdata:'910000'}]},{T:1,N:'color',E:[{T:4,cdata:'#008ee4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Jun'}]},{T:1,N:'value',E:[{T:4,cdata:'510000'}]},{T:1,N:'color',E:[{T:4,cdata:'#008ee4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Jul'}]},{T:1,N:'value',E:[{T:4,cdata:'680000'}]},{T:1,N:'color',E:[{T:4,cdata:'#008ee4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Aug'}]},{T:1,N:'value',E:[{T:4,cdata:'620000'}]},{T:1,N:'color',E:[{T:4,cdata:'#008ee4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Sep'}]},{T:1,N:'value',E:[{T:4,cdata:'610000'}]},{T:1,N:'color',E:[{T:4,cdata:'#008ee4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Oct'}]},{T:1,N:'value',E:[{T:4,cdata:'490000'}]},{T:1,N:'color',E:[{T:4,cdata:'#008ee4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Nov'}]},{T:1,N:'value',E:[{T:4,cdata:'900000'}]},{T:1,N:'color',E:[{T:4,cdata:'#008ee4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'Dec'}]},{T:1,N:'value',E:[{T:4,cdata:'730000'}]},{T:1,N:'color',E:[{T:4,cdata:'#008ee4'}]}]}]}]}]}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
			scwin.init();
		};
		
		scwin.onpageunload = function() {
			
		}; 
		
		//chart 초기 화면 설정 및 셋팅
		scwin.init = function(){
			scwin.drawChart("Column2D");
		}
		
		//column chart 설정
		scwin.drawChart = function(type) {
				var options = { 
	                startValue: "550000", 
	                 color: "FF0000",
	                 displayValue: "Average",
	                 "showOnTop":"1"
	            };
	            
	            var chartOption =  {"caption": "Monthly revenue for last year",
											      "subCaption": "Harry's SuperMart",
											      "xAxisName": "Month",
											      "yAxisName": "Revenues (In USD)",
											      "numberPrefix": "$",
											      "toolTipColor": "#000000",
											      "toolTipBgColor": "#fffffff",
											      "toolTipBgAlpha": "80",
											      "toolTipBorderRadius": "2",
											      "toolTipPadding": "5"
											     };
	            fusionchart1.addTrendLine(options);
				fusionchart1.changeType(type);
				fusionchart1.setChartAttribute(chartOption);
		        
		        
		        myEventListener = function(eventObj, dataObj) {

					alert("eventType:"+eventObj.eventType);
					alert("The value of the data-plot:"+dataObj.dataValue+",\r\n The x-axis label that corresponds to the data-plot:"+dataObj.categoryLabel);

					//alert('call listener');
				
				};
				x = fusionchart1.fc();
				
		        //x.addEventListener ("DrawComplete" , myEventListener );
		        x.addEventListener ("dataPlotClick" , myEventListener );
		        fusionchart1.draw();
		};
		
		scwin.trigger1_onclick = function(e) {
			var colorArr = ["008ee4","9b59b6","6baa01","e44a00","008ee4","9b59b6","6baa01","e44a00","008ee4","9b59b6","6baa01","e44a00"];
			fusionchart1.setPlotColor(colorArr);
			fusionchart1.draw();
		};
		
		scwin.trigger2_onclick = function(e) {
			var colorArr = new Array();
	 		for(i=0;i<(dlt_Column.getAllJSON()).length;i++){
				x = dlt_Column.getCellData(i,"value");
				if(x>=600000){console.log('600,000 이상');
					colorArr[i] = "9b59b6";
				}else{
					colorArr[i] = "008ee4";
				}
			}
			
			fusionchart1.setPlotColor(colorArr);
			fusionchart1.draw();
		};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'group3',style:'display:table;width:100%;height:100%;'},E:[{T:1,N:'xf:group',A:{id:'group2',style:'vertical-align:middle;text-align:center;display:table-cell;'},E:[{T:1,N:'xf:group',A:{id:'group1',style:'display:inline-block;padding:30px;'},E:[{T:1,N:'w2:textbox',A:{class:'titlebox',id:'textbox4',label:'Column & Bar Chart',style:'',tagname:''}},{T:1,N:'xf:group',A:{style:'height:30px;',id:''},E:[{T:1,N:'xf:group',A:{style:'position:relative;overflow:hidden;text-align:left;font-weight:bold;font-size:12px;margin-top:5px;width:180px;float:right;',id:'group6',class:''}}]},{T:1,N:'xf:group',A:{id:'group5',style:'display:inline-block;'},E:[{T:1,N:'w2:textbox',A:{id:'textbox6',label:'FusionChart',style:'position:relative;float:left;background: url(/websquare5/common/images/bg_gm01.png) no-repeat 0px 11px;padding:9px;text-align:left;font-weight:bold;font-size:13px;'}},{T:1,N:'w2:fusionchart',A:{accessibility:'false',chartType:'Column2D',drawType:'javascript',id:'fusionchart1',labelNode:'label',ref:'data:dlt_Column',seriesColumns:'',seriesNode:'label',seriesType:'simple',style:'clear:both;width: 500px;height: 300px;',valueNode:'value',runflashAt:'',plotColor:'',version:'3.7'}},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position: relative;width: 80px;height: 23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'색상주기'}]}]},{T:1,N:'xf:trigger',A:{id:'trigger2',style:'position: relative;width:146px;height:23px;',type:'button','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'600,000 이상 색상주기'}]}]}]},{T:1,N:'xf:group',A:{id:'group4',style:'position:relative;'},E:[{T:1,N:'w2:textbox',A:{id:'textbox5',label:'dataCollection',style:'position:relative;background: url(/websquare5/common/images/bg_gm01.png) no-repeat 0px 11px;padding:9px;text-align:left;font-weight:bold;font-size:13px;'}},{T:1,N:'w2:gridView',A:{dataList:'dlt_Column',scrollByColumn:'false',id:'gridView1',style:'clear:both;hide;height: 200px;width:500px;',fixedColumnWithHidden:'true',useShiftKey:'false',autoFit:'allColumn'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px',inputType:'text',width:'70',value:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',style:'height:20px',width:'70',inputType:'text',value:'value'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'label',style:'height:20px',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'value',style:'height:20px',width:'70',inputType:'text',dateValidCheck:'',disabled:'',displayFormat:''}}]}]}]}]}]}]}]}]}]}]})