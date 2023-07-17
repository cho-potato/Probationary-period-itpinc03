/*amd /GridView/Excel/advancedExcelUpload_decimal_applyDecimal_GridView/advancedExcelUpload_decimal_applyDecimal_GridView.xml 3653 b7d1772037c2fcbbf60e699278d22fb994aaebf89a930fd385aff1453a4acdc0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'float'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'float'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'bigDecimal'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
    scwin.onpageload = function() {
        
    };
    
    scwin.onpageunload = function() {
        
    };
    
    
    scwin.trigger1_onclick = function(e) {
        var options = {};
        options.headerExist = "1";
        options.decimal = "3";  
        options.applyDecimal ="1";      
        gridView1.advancedExcelUpload(options);
    };
    
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 50px;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width:209px;height:46px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;text-align:left;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'advancedExcelUpload()'}]}]},{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',checkAllType:'false',dataList:'data:dataList1',style:'width: 600px;height: 200px;margin-top: 30px;',scrollByColumn:'false',id:'gridView1',readOnlyBackgroundColor:'red',defaultCellHeight:'20',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column7',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column6',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column5',value:'name3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column4',value:'name4',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column3',value:'name5',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{dataType:'float',width:'70',inputType:'text',style:'height:20px',id:'col1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'float',width:'70',inputType:'text',style:'height:20px',id:'col2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'bigDecimal',width:'70',inputType:'text',style:'height:20px',id:'col3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'bigDecimal',width:'70',inputType:'text',style:'height:20px',id:'col4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'bigDecimal',width:'70',inputType:'text',style:'height:20px',id:'col5',value:'',displayMode:'label'}}]}]}]}]}]}]}]})