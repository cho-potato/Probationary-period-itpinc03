/*amd /CheckComboBox/displayMode_delimiter_CheckComboBox.xml 2868 0140a6271cf53e554ca09e7118eb63161949b11a1898ef74c677362c5317909a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'C_Code',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'City',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Country',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Airport',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'A_Code',name:'name5'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
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

	scwin.onpageunload = function() {

	};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:checkcombobox',A:{id:'',displayAllOptionLabel:'false',chooseOption:'true',displayMode:'value delim label',style:'width: 200px;height: 21px;margin: 50px;',submenuSize:'auto',allOption:'true',disabled:'false',direction:'auto',appearance:'minimal',ref:'',chooseOptionLabel:'Choose airport(s).',displaymessage:'',delimiter:', '},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'Airport'}},{T:1,N:'xf:value',A:{ref:'A_Code'}}]}]}]}]}]}]})