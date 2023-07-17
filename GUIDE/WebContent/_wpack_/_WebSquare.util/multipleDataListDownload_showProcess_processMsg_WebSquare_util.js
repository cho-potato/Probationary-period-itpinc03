/*amd /_WebSquare.util/multipleDataListDownload_showProcess_processMsg_WebSquare_util.xml 6198 9650825e4cc6e40a85b673ac17789649f8a699ef2cb474d9ab190c67ba0c5cd1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'d1_col1',name:'AAA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'d1_col2',name:'BBB',dataType:'text'}},{T:1,N:'w2:column',A:{id:'d1_col3',name:'CCC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'d1_col4',name:'DDD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'do1_col5',name:'EEE',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dataList2',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'d2_col1',name:'111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'d2_col2',name:'222',dataType:'text'}},{T:1,N:'w2:column',A:{id:'d3_col3',name:'333',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
        var num = 10000
		var arr = [];
		for( var i=0;i<num;i++ ) {
			for(var j=0;j<5;j++) {
				arr[i*5+j] = "dataList1_" + i+j;
			}
		}
		
		var arr1 = [];
		for( var i=0;i<num;i++ ) {
			for(var j=0;j<3;j++) {
				arr1[i*3+j] = "dataList2_" + i+j;
			}
		}
		
		dataList1.setData(arr);
		dataList2.setData(arr1);
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.trigger1_onclick = function(e) {
		var scId = "";
		
        var options = { 
		    common: { 
		        fileName : "dataList.xlsx",
		        multipleSheet: "true",
		        showProcess : true,
                processMsg : "Downloading as an Excel file..." 
		    }, 
		    excelInfo: [ 
		        { 
		            dataListId : "dataList1", 
		            sheetName : "dataList1", 
		            removeColumns : "" ,
		            wframeId: scId
		        }, 
		        { 
		            dataListId : "dataList2", 
		            sheetName : "dataList2", 
		            removeColumns : "",
		            wframeId: scId 
		        } 
		    ]
		};
		WebSquare.util.multipleDataListDownload( options ); 
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position: absolute ;left:47px;top:34px;width: 200px;height: 37px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'multipleDataListDownload'}]}]},{T:1,N:'w2:gridView',A:{dataList:'data:dataList1',summaryAuto:'false',applyAllColumnStyle:'false',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',id:'',style:'position: absolute ;left:52px;top:126px;width: 500px;height: 300px;',ignoreCellClick:'false',syncScroll:'false',ignoreToggleOnDisabled:'false',summaryOnlyAuto:'false',useShiftKey:'true',columnMove:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',style:'',inputType:'text',width:'70',value:'AAA',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'',inputType:'text',width:'70',value:'BBB',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',style:'',inputType:'text',width:'70',value:'CCC',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'',inputType:'text',width:'70',value:'DDD',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',style:'',width:'70',inputType:'text',value:'EEE',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'d1_col1',style:'',inputType:'text',width:'70',value:'',displayMode:'label',colMerge:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'d1_col2',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'d1_col3',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'d1_col4',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'do1_col5',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{dataList:'data:dataList2',summaryAuto:'false',applyAllColumnStyle:'false',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',id:'',style:'position:  absolute ;left: 600px;top: 128px;width: 300px;height: 300px;',ignoreCellClick:'false',syncScroll:'false',ignoreToggleOnDisabled:'false',summaryOnlyAuto:'false',useShiftKey:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',style:'',inputType:'text',width:'70',value:'111',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'',inputType:'text',width:'70',value:'222',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',style:'',width:'70',inputType:'text',value:'333',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'d2_col1',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'d2_col2',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'d3_col3',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}}]}]}]}]}]}]})