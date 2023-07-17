/*amd /CheckComboBox/validateOnInput_CheckComboBox.xml 1885 ec1ee4b946224b08bfcaebf66ecafc3d4d6853ef0eee5990b0f4ddc8950d90d7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
    
	scwin.onpageload = function() {
		var data = [];
		for (var i = 0; i < 20 ; i ++) {
			data.push(i + "");
			data.push(i + "" + "_v");
		}
		dataList1.setData(data, true);
	};
	
	scwin.onpageunload = function() {
		
	};	
	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 50px;margin-top: 0px;padding:50px;'},E:[{T:1,N:'xf:checkcombobox',A:{displayAllOptionLabel:'false',submenuSize:'auto',chooseOption:'',allOption:'',separator:',',displayMode:'label',ref:'',appearance:'minimal',checkboxClickSync:'true',useEdit:'true',validateOnInput:'true',disabled:'false',style:'width:300px;height:50px;display: block;margin-top: 50px;',allowChar:'0-9,-',id:'checkcombobox1',useDrag:'true',rangeSeparator:'-',direction:'auto',visibleColNum:'5',visibleRowNum:'',visibleColumn:'',visibleColMax:'',validator:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'col1'}},{T:1,N:'xf:value',A:{ref:'col2'}}]}]}]}]}]}]}]})