/*amd /GridView/Dragging/dataDragSelect_dataDragSelectAutoScroll_GridView.xml 5049 3b47a0ebbba702b509e96de8a2dde23d85f98b495f3f04c427be0c3e7294593a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col11',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col12',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col13',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col14',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col15',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col16',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col17',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col18',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col19',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col20',name:'name20',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
    
    scwin.onpageload = function() {
        
        var data = [];
        for (var i = 0; i < 100000; i++) {
            for (var j = 0; j < 20; j++){
                data.push(i);
            }
        }
        dataList1.setData(data);
    };
    
    scwin.onpageunload = function() {
        
    };

    scwin.gridView1_col1 = function(v, fv) {
        return "<button>" + fv + "</button>";
    }

    scwin.gridView1_col2 = function(v, fv) {
        return "<button>" + fv + "</button>";
    }

    scwin.nn = "b&lt&nbsp&lt&nbspb&quots&amp;f"
    
    
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{dataList:'data:dataList1',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',id:'gridView1',columnMove:'true',fastScroll:'false',dataDragSelect:'true',useShiftKey:'true',dataDragSelectAutoScroll:'true',dataDragSelectAutoScrollDPI:'5',dataDragSelectAutoScrollPeriod:'70',dataDragSelectAutoScrollDelay:'50',dataDragSelectAutoScrollLevel:'1300',style:'width:500px;height: 20%;left:2px;top:3px;margin:30px;',rowNumVisible:'true',rowStatusVisible:'true',autoFit:'allColumn',visibleRowNum:'10'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column41',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column39',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column37',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name3',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column35',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name4',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column33',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name5',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',customFormatter:'scwin.gridView1_col1',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',customFormatter:'scwin.gridView1_col2',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col3',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col4',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col5',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}}]}]}]}]}]}]})