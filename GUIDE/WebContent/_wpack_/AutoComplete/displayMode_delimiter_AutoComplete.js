/*amd /AutoComplete/displayMode_delimiter_AutoComplete.xml 2858 ab77b9eab09ebb7759366a11be6f09d13c11b3758efcd15b08771c2a8c3f2288 */
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

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'',useKeywordHighlight:'false',style:'width: 148px;height: 21px;margin: 50px;',submenuSize:'auto',search:'start',useLocale:'false',allOption:'',chooseOption:'',ref:'',displayMode:'label delim value',delimiter:' / '},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'w2:label',A:{ref:'City'}},{T:1,N:'w2:value',A:{ref:'C_Code'}}]}]}]}]}]}]})