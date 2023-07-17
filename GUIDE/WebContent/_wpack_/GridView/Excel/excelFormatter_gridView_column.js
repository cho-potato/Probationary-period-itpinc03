/*amd /GridView/Excel/excelFormatter_gridView_column.xml 4748 ea43281c7ef608a8064b2d26a1a156875913f1e4dbe6b71d6918d5643e65b6df */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
    
    scwin.onpageload = function() {
        
        var data = [];
        for (var i = 0; i < 30; i++) {
            for (var j = 0; j < 6; j++){
                data.push((i+1)*330);
            }
        }
        dataList1.setData(data);
    };
    
    scwin.onpageunload = function() {
        
    };
    
    scwin.excelFormatter = function(data){
	    return data.substring(0,4) + "-" + data.substring(4, data.length) + ".00";
    };
    
	scwin.trigger1_onclick = function(e) {
		gridView1.advancedExcelDownload({});
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:286px;height:43px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin-left: 100px;text-align: left;margin-top: 50px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'advancedExcelDownload()'}]}]},{T:1,N:'w2:gridView',A:{dataList:'data:dataList1',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',id:'gridView1',columnMove:'true',fastScroll:'false',dataDragSelect:'true',useShiftKey:'true',dataDragSelectAutoScroll:'true',dataDragSelectAutoScrollDPI:'5',dataDragSelectAutoScrollPeriod:'70',dataDragSelectAutoScrollDelay:'50',dataDragSelectAutoScrollLevel:'1300',style:'width:800px;height: 40%;margin:30px;margin-left: 100px;',rowNumVisible:'true',rowStatusVisible:'',autoFit:'allColumn',visibleRowNum:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column41',value:'name1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column39',value:'name2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column37',value:'name3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column35',value:'name4',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column33',value:'name5',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',id:'column49',value:'name6'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{customFormatter:'',excelFormat:'',removeBorderStyle:'false',dataType:'',width:'70',displayFormat:'',style:'',inputType:'text',id:'col1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{customFormatter:'',excelFormat:'',removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'col2',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{excelFormatter:'scwin.excelFormatter',removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'col3',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{excelFormatter:'scwin.excelFormatter2',removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'col4',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{excelFormat:'',removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'col5',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',id:'col6',dataType:'number',inputType:'text'}}]}]}]}]}]}]})