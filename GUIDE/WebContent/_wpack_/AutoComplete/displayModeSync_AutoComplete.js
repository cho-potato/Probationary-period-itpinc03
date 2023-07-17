/*amd /AutoComplete/displayModeSync_AutoComplete.xml 4342 a0862b064db721d111afaf12404e8b187b90f5c53beae5e30b30f6428c1605d7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'C_Code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'City',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Country',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Airport',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'A_Code',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	var json = [{
			"C_Code" : "PAR",
			"Airport" : "ORLY",
			"Country" : "FRANCE",
			"City" : "PARIS",
			"A_Code" : "ORY"
		}, {
			"C_Code" : "PDX",
			"Airport" : "PORTLAND INT’L",
			"Country" : "U.S.A.",
			"City" : "PORTLAND",
			"A_Code" : "PDX"
		}, {
			"C_Code" : "PEK",
			"Airport" : "CAPITAL",
			"Country" : "CHINA",
			"City" : "BEIJING",
			"A_Code" : "PEK"
		}, {
			"C_Code" : "PER",
			"Airport" : "PERTH",
			"Country" : "AUSTRALIA",
			"City" : "PERTH",
			"A_Code" : "PER"
		}, {
			"C_Code" : "PHL",
			"Airport" : "PHILADELPHIA INT’L",
			"Country" : "U.S.A.",
			"City" : "PHILADELPHIA",
			"A_Code" : "PHL"
		}, {
			"C_Code" : "PHX",
			"Airport" : "SKY HARBOR ",
			"Country" : "U.S.A.",
			"City" : "PHOENIX",
			"A_Code" : "PHX"
		}, {
			"C_Code" : "PIT",
			"Airport" : "PITTSBURGH INT’L",
			"Country" : "U.S.A.",
			"City" : "PITTSBURGH",
			"A_Code" : "PIT"
		}, {
			"C_Code" : "PNH",
			"Airport" : "POCHENTONG",
			"Country" : "CAMBODIA",
			"City" : "PHNOMPENH",
			"A_Code" : "PNH"
		}, {
			"C_Code" : "PUS",
			"Airport" : "KIMHAE",
			"Country" : "KOREA",
			"City" : "PUSAN",
			"A_Code" : "PUS"
		}];
		dataList1.setJSON(json);

};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 30px;'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:80%;',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:50.00%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:50.00%;'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'font-size:17px;font-family:monospace;',class:'w2tb_th'},E:[{T:3,text:'displayModeSync="false"'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'font-size:17px;font-family:monospace;',class:'w2tb_th'},E:[{T:3,text:'displayModeSync="true"'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height: 50px;'},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',chooseOption:'',useKeywordHighlight:'true',allOption:'',searchTarget:'both',displayMode:'label delim value',search:'contain',ref:'',displayModeSync:'false',delimiter:' --- ',editType:'select',style:'width: 200px;height: 21px;',id:'autoComplete1',useLocale:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'w2:label',A:{ref:'Country'}},{T:1,N:'w2:value',A:{ref:'City'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',chooseOption:'',useKeywordHighlight:'true',allOption:'',searchTarget:'both',displayMode:'label delim value',displayModeSync:'true',ref:'',search:'contain',delimiter:' --- ',editType:'select',style:'width: 200px;height: 21px;',id:'autoComplete2',useLocale:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'w2:label',A:{ref:'Country'}},{T:1,N:'w2:value',A:{ref:'City'}}]}]}]}]}]}]}]}]}]}]})