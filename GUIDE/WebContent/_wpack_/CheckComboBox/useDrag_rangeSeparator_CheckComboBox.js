/*amd /CheckComboBox/useDrag_rangeSeparator_CheckComboBox.xml 2424 bb6afefd8f7fa2e68badc4365493ba0643cccb576104668418268feb945e3a6c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
    
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};	
	
	scwin.trigger1_onclick = function(e) {
		var data = [];
		var count = input1.getValue();
		for (var i = 0; i < count ; i ++) {
			data.push(i + "");
			data.push(i + "" + "_v");
		}
		dataList1.setData(data, true);
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 50px;margin-top: 0px;padding:50px;'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 80px;height: 50px;margin-right: 50px;font-size:15px;font-weight:bolder;text-align: center',id:'input1'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width: 170px;height: 50px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'dataList1.setData()'}]}]},{T:1,N:'xf:checkcombobox',A:{displayAllOptionLabel:'false',submenuSize:'auto',chooseOption:'',allOption:'',separator:', ',displayMode:'label',ref:'',appearance:'minimal',checkboxClickSync:'true',useEdit:'',validateOnInput:'true',disabled:'false',style:'width:300px;height:50px;display: block;margin-top: 50px;',allowChar:'0-9,-',id:'checkcombobox1',useDrag:'true',rangeSeparator:' ~ ',direction:'auto',visibleColNum:'5',visibleRowNum:'',visibleColumn:'',visibleColMax:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'col1'}},{T:1,N:'xf:value',A:{ref:'col2'}}]}]}]}]}]}]}]})