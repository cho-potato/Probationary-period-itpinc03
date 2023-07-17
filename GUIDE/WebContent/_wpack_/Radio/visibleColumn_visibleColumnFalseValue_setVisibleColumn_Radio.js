/*amd /Radio/visibleColumn_visibleColumnFalseValue_setVisibleColumn_Radio.xml 8213 290f28bf342f4b4bb955a3e36dd0da0caf24cb317af5c9a29e54f48c8482b00a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'Name',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Value',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Type',name:'name3'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'Name',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'Value',E:[{T:4,cdata:'001'}]},{T:1,N:'Type',E:[{T:4,cdata:'Domestic'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'Name',E:[{T:4,cdata:'Busan'}]},{T:1,N:'Value',E:[{T:4,cdata:'002'}]},{T:1,N:'Type',E:[{T:4,cdata:'Domestic'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'Name',E:[{T:4,cdata:'Daegu'}]},{T:1,N:'Value',E:[{T:4,cdata:'003'}]},{T:1,N:'Type',E:[{T:4,cdata:'Domestic'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'Name',E:[{T:4,cdata:'Jeju'}]},{T:1,N:'Value',E:[{T:4,cdata:'004'}]},{T:1,N:'Type',E:[{T:4,cdata:'Domestic'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'Name',E:[{T:4,cdata:'Tokyo'}]},{T:1,N:'Value',E:[{T:4,cdata:'100'}]},{T:1,N:'Type',E:[{T:4,cdata:'Overseas'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'Name',E:[{T:4,cdata:'Beijing'}]},{T:1,N:'Value',E:[{T:4,cdata:'200'}]},{T:1,N:'Type',E:[{T:4,cdata:'Overseas'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'Name',E:[{T:4,cdata:'Taipei'}]},{T:1,N:'Value',E:[{T:4,cdata:'300'}]},{T:1,N:'Type',E:[{T:4,cdata:'Overseas'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};	

	scwin.trigger1_onclick = function(e) {
		radio1.setVisibleColumn("Type", "Domestic");
	};
	
	scwin.trigger9_onclick = function(e) {
		select1.setVisibleColumn("Type", "Overseas");
	};
	
	scwin.trigger10_onclick = function(e) {
		auto1.setVisibleColumn("Type", "Overseas");
	};
	
	scwin.trigger11_onclick = function(e) {
		checkbox1.setVisibleColumn("Type", "Overseas");
	};
	
	scwin.trigger12_onclick = function(e) {
		combo1.setVisibleColumn("Type", "Overseas");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:80%;margin: 20px;',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup',style:''},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:50.00%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:50.00%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:50.00%'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height: 70px;'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Radio'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'vertical-align: middle;',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{id:'radio1',selectedIndex:'-1',appearance:'full',style:'width: 150px;height: 21px;padding: 10px;',cols:'4',rows:'',ref:'',visibleColumn:'',visibleColumnFalseValue:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'Name'}},{T:1,N:'xf:value',A:{ref:'Value'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'text-align: center;vertical-align: middle;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 120px;height: 23px;font: 15px bold;color: blue;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setVisibleColumn'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'SelectBox'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'text-align: center;vertical-align: middle;',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{id:'select1',chooseOption:'',style:'width: 90%;height: 23px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',visibleColumn:'',visibleColumnFalseValue:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'Name'}},{T:1,N:'xf:value',A:{ref:'Value'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'text-align: center;vertical-align: middle;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 120px;height: 23px;font: 15px bold;color: blue;',id:'trigger9','ev:onclick':'scwin.trigger9_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setVisibleColumn'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'AutoComplete'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'text-align: center;vertical-align: middle;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'auto1',useKeywordHighlight:'false',style:'width: 90%;height: 21px;',submenuSize:'auto',search:'contain',allOption:'',chooseOption:'',ref:'',caseSensitive:'false',visibleColumn:'',visibleColumnFalseValue:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'w2:label',A:{ref:'Name'}},{T:1,N:'w2:value',A:{ref:'Value'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'text-align: center;vertical-align: middle;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 120px;height: 23px;font: 15px bold;color: green;',id:'trigger10','ev:onclick':'scwin.trigger10_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setVisibleColumn'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height: 150px;'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'CheckBox'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'text-align: center;vertical-align: top;',class:'w2tb_td'},E:[{T:1,N:'xf:select',A:{selectedindex:'-1',id:'checkbox1',appearance:'full',style:'width: 90%;height: 21px;',cols:'',rows:'',ref:'',visibleColumn:'',visibleColumnFalseValue:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'Name'}},{T:1,N:'xf:value',A:{ref:'Value'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'text-align: center;vertical-align: middle;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 120px;height: 23px;font: 15px bold;color: magenta;',id:'trigger11','ev:onclick':'scwin.trigger11_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setVisibleColumn'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'CheckComboBox'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'text-align: center;vertical-align: middle;',class:'w2tb_td'},E:[{T:1,N:'xf:checkcombobox',A:{submenuSize:'auto',allOption:'',disabled:'false',id:'combo1',direction:'auto',displayAllOptionLabel:'false',chooseOption:'',displayMode:'label',appearance:'minimal',style:'width: 90%;height: 21px;',ref:'',visibleColumn:'',visibleColumnFalseValue:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'Name'}},{T:1,N:'xf:value',A:{ref:'Value'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'text-align: center;vertical-align: middle;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 120px;height: 23px;font: 15px bold;',id:'trigger12','ev:onclick':'scwin.trigger12_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setVisibleColumn'}]}]}]}]}]}]}]}]})