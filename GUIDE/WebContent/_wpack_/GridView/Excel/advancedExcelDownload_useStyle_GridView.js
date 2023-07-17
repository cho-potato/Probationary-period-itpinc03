/*amd /GridView/Excel/advancedExcelDownload_useStyle_GridView.xml 5777 71f2200a55d0778edfe772524c0fe1fa6ae6309e5494d31650d85d51178692f1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'c_code',name:'city_code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'airport',name:'airport',dataType:'text'}},{T:1,N:'w2:column',A:{id:'country',name:'country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'city',name:'city',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a_code',name:'airport_code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'traffic',name:'traffic',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	scwin.onpageload = function() {
		var json = [{
			"c_code" : "PAR",
			"airport" : "ORLY",
			"country" : "FRANCE",
			"city" : "PARIS",
			"a_code" : "ORY",
			"traffic" : "50000"
		}, {
			"c_code" : "PDX",
			"airport" : "PORTLAND INT’L",
			"country" : "U.S.A.",
			"city" : "PORTLAND",
			"a_code" : "PDX",
			"traffic" : "1000"
		}, {
			"c_code" : "PEK",
			"airport" : "CAPITAL",
			"country" : "CHINA",
			"city" : "BEIJING",
			"a_code" : "PEK",
			"traffic" : "40000"
		}, {
			"c_code" : "PER",
			"airport" : "PERTH",
			"country" : "AUSTRALIA",
			"city" : "PERTH",
			"a_code" : "PER",
			"traffic" : "15000"
		}, {
			"c_code" : "PHL",
			"airport" : "PHILADELPHIA INT’L",
			"country" : "U.S.A.",
			"city" : "PHILADELPHIA",
			"a_code" : "PHL",
			"traffic" : "10000"
		}, {
			"c_code" : "PHX",
			"airport" : "SKY HARBOR ",
			"country" : "U.S.A.",
			"city" : "PHOENIX",
			"a_code" : "PHX",
			"traffic" : "7000"
		}, {
			"c_code" : "PIT",
			"airport" : "PITTSBURGH INT’L",
			"country" : "U.S.A.",
			"city" : "PITTSBURGH",
			"a_code" : "PIT",
			"traffic" : "5000"
		}, {
			"c_code" : "PNH",
			"airport" : "POCHENTONG",
			"country" : "CAMBODIA",
			"city" : "PHNOMPENH",
			"a_code" : "PNH",
			"traffic" : "10000"
		}, {
			"c_code" : "PUS",
			"airport" : "KIMHAE",
			"country" : "KOREA",
			"city" : "PUSAN",
			"a_code" : "PUS",
			"traffic" : "30000"
		}];
		dataList1.setJSON(json);
	};

	scwin.onpageunload = function() {

	};

	scwin.trigger1_onclick = function(e) {
		gridView1.setCellClass(0, 0, "blue");
	};

	scwin.trigger2_onclick = function(e) {
		var options = { 
		useStyle : true
		}
		gridView1.advancedExcelDownload(options);
	};
	
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.blue{color:#00f;font-weight:bolder;font-size:40px;background-color:#ff0}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:280px;height:30px;padding-left:5px;margin-left:50px;margin-top:50px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;text-align:left;display: block',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setCellClass()'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:280px;height:30px;padding-left:5px;margin-left:50px;margin-top:10px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;text-align:left;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick',nextTabID:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'advancedExcelDownload()'}]}]},{T:1,N:'w2:gridView',A:{id:'gridView1',style:'width: 750px;height: 300px;margin: 50px;margin-top: 20px;',checkAllType:'false',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',autoFit:'allColumn',visibleRowNum:'',rowNumVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column6',value:'city_code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column5',value:'airport',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column4',value:'country',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column3',value:'city',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column2',value:'airport_code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column1',value:'traffic',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'c_code',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'airport',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'country',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'city',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'a_code',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'traffic',value:'',displayMode:'label'}}]}]}]}]}]}]})