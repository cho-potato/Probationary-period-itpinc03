/*amd /GridView/Excel/excelFormat_gridView_column.xml 4339 60ef5e45749fdceef5592d2ae242f05a1b880aa783c1253371b512cb43dbd600 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
    
    scwin.onpageload = function() {
        
        var data = [];
        for (var i = 0; i < 100; i++) {
            for (var j = 0; j < 20; j++){
                data.push((i+1)*230);
            }
        }
        dataList1.setData(data);
    };
    
    scwin.onpageunload = function() {
        
    };
    
	scwin.trigger1_onclick = function(e) {
		gridView1.advancedExcelDownload({});
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{dataList:'data:dataList1',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',id:'gridView1',columnMove:'true',fastScroll:'false',dataDragSelect:'true',useShiftKey:'true',dataDragSelectAutoScroll:'true',dataDragSelectAutoScrollDPI:'5',dataDragSelectAutoScrollPeriod:'70',dataDragSelectAutoScrollDelay:'50',dataDragSelectAutoScrollLevel:'1300',style:'width:800px;height: 50%;margin:30px;margin-left: 100px;',rowNumVisible:'true',rowStatusVisible:'true',autoFit:'allColumn',visibleRowNum:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column41',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column39',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column37',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name3',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column35',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name4',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column33',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name5',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',customFormatter:'',displayMode:'label',displayFormat:'',excelFormat:'#,###.00',dataType:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',customFormatter:'',displayMode:'label',excelFormat:'#,### KRW'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col3',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col4',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col5',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label',excelFormat:'$#,###.00'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:286px;height:43px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin-left: 100px;text-align: left;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'advancedExcelDownload()'}]}]}]}]}]})