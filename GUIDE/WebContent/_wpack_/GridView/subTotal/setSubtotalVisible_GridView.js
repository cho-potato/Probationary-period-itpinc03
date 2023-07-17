/*amd /GridView/subTotal/setSubtotalVisible_GridView.xml 6057 458ba435e82eab15dbfa580dc80bbe01c87f7f616837d46a2ba5393807d887bb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:data',E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]},{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
    scwin.group = 5;
    scwin.toggleRow = {};
	scwin.onpageload = function() {
        var data = [];
        for (var i = 0; i < 100; i++) {
            for (var j = 0; j < 6; j++) {
                if (j === 2) {
                    data.push(i + "_" + j);
                } else {
                    data.push(Math.floor(j / 2) * 100 + Math.floor(i / (j+scwin.group)));
                }
                //data.push(j * 100 + (i % 5));
            }
        }
		dataList1.setData(data);
	};
	
	scwin.onpageunload = function() {
		
	};

    scwin.trigger1_onclick = function() {
        gridView1.setSubtotalVisible(false);
    }

    scwin.trigger2_onclick = function() {
        gridView1.setSubtotalVisible(true);
    }

	
	
	
	
	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width: 300px;height: 30px;margin: 20px;font: 20px bolder;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setSubtotalVisible(false);'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'width: 300px;height: 30px;margin: 20px;font: 20px bolder;display: block','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setSubtotalVisible(true);'}]}]},{T:1,N:'w2:gridView',A:{dataList:'data:dataList1',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',id:'gridView1',style:'position:relative;width:550px;height:400px;margin: 20px;',rowNumVisible:'true',visibleRowNum:''},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column13',removeBorderStyle:'false',style:'',inputType:'text',width:'130',value:'Type',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column11',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'Category',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'AAA',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'BBB',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',removeBorderStyle:'false',style:'',width:'70',inputType:'text',value:'CCC',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',removeBorderStyle:'false',style:'',inputType:'text',width:'130',value:'',displayMode:'label',colMerge:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label',colMerge:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col3',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label',colMerge:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col4',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label',colMerge:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col5',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label',colMerge:''}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col6',removeBorderStyle:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label',colMerge:''}}]}]},{T:1,N:'w2:subTotal',A:{id:'subTotal1',style:'',targetColumnID:'col1'},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column20',removeBorderStyle:'false',style:'',width:'130',inputType:'expression',value:'',displayMode:'label',expression:'SUM(\'col1\')'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column19',removeBorderStyle:'false',style:'',width:'70',inputType:'expression',value:'',displayMode:'label',expression:'SUM(\'col2\')'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column18',removeBorderStyle:'false',style:'',width:'70',inputType:'expression',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column17',removeBorderStyle:'false',style:'',width:'70',inputType:'expression',value:'',displayMode:'label',expression:'SUM(\'col4\')'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column16',removeBorderStyle:'false',style:'',width:'70',inputType:'expression',value:'',displayMode:'label',expression:'SUM(\'col5\')'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column15',removeBorderStyle:'false',style:'',width:'70',inputType:'expression',value:'',displayMode:'label',expression:'SUM(\'col6\')'}}]}]}]}]}]}]})