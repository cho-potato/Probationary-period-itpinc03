/*amd /GridView/subTotal/subtotalStyleFormatter_subtotalColumnId_GridView.xml 5137 1118294d40d2e3f5bfd7807e3293236af69745ee0e465f327188cfbfd87222fe */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var data = [];
                var row = 10;
                var col = 6;
                for (var i = 0; i < row; i++) {
                    for (var j = 0; j < col; j++) {
                        var t = Math.floor(i / 5);
                        data.push(t * 100 + j * (t+1));
                    }
                }
                dataList1.setData(data);
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.styleFormatter = function(value, formattedValue, subtotalColumnId) {
                if (subtotalColumnId == "column16" || subtotalColumnId == "column18" || subtotalColumnId == "column20" ) {
                    return "w2subtotalformatted";
                } else {
                    return "w2subtotalnotformatted";
                }		
	};
	
	
	
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.w2subtotalformatted{color:red;font-size:20px}.w2subtotalnotformatted{color:gray;font-size:20px}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{id:'',style:'width: 600px;height: 30%;margin: 100px;margin-top: 20px;',checkAllType:'false',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',rowNumVisible:'true',autoFit:'allColumn',subtotalStyleFormatter:'scwin.styleFormatter',visibleRowNum:'10'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column9',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column8',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column7',value:'name3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column6',value:'name4',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column5',value:'name5',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column4',value:'name6',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col6',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'height:20px',id:'column21',value:'',displayMode:'label',expression:'sum(\'col1\')*10'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'height:20px',id:'column20',value:'',displayMode:'label',expression:'sum(\'col2\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'height:20px',id:'column19',value:'',displayMode:'label',expression:'sum(\'col3\')*2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'height:20px',id:'column18',value:'',displayMode:'label',expression:'sum(\'col4\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'height:20px',id:'column17',value:'',displayMode:'label',expression:'sum(\'col5\')*3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'height:20px',id:'column16',value:'',displayMode:'label',expression:'sum(\'col6\')'}}]}]}]}]}]}]})