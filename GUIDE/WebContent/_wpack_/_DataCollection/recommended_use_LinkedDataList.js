/*amd /_DataCollection/recommended_use_LinkedDataList.xml 12365 be6e5729e85fa031b8f7b2b3aa313b5ceb2570c733cb6a41598c8bd78241cf15 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Country',name:'Country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'City',name:'City',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Airport',name:'Airport',dataType:'text'}},{T:1,N:'w2:column',A:{id:'A_Code',name:'A_Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'C_Code',name:'C_Code',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'dataList1',id:'linkedDataList1'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'Country=="U.S.A."'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:linkedDataList',A:{bind:'dataList1',id:'linkedDataList2'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'Country=="FRANCE"'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:linkedDataList',A:{bind:'dataList1',id:'linkedDataList3'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'Country=="CHINA"'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:linkedDataList',A:{bind:'dataList1',id:'linkedDataList4'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'Country=="AUSTRALIA"'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:linkedDataList',A:{bind:'dataList1',id:'linkedDataList5'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'Country=="CAMBODIA"'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:linkedDataList',A:{bind:'dataList1',id:'linkedDataList6'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'Country=="KOREA"'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var jsonData1 = [
   {
      "C_Code": "PAR",
      "Airport": "ORLY",
      "Country": "FRANCE",
      "City": "PARIS",
      "A_Code": "ORY"
   },
   {
      "C_Code": "PDX",
      "Airport": "PORTLAND INT’L",
      "Country": "U.S.A.",
      "City": "PORTLAND",
      "A_Code": "PDX"
   },
   {
      "C_Code": "PEK",
      "Airport": "CAPITAL",
      "Country": "CHINA",
      "City": "BEIJING",
      "A_Code": "PEK"
   },
   {
      "C_Code": "PER",
      "Airport": "PERTH",
      "Country": "AUSTRALIA",
      "City": "PERTH",
      "A_Code": "PER"
   },
   {
      "C_Code": "PHL",
      "Airport": "PHILADELPHIA INT’L",
      "Country": "U.S.A.",
      "City": "PHILADELPHIA",
      "A_Code": "PHL"
   },
   {
      "C_Code": "PHX",
      "Airport": "SKY HARBOR ",
      "Country": "U.S.A.",
      "City": "PHOENIX",
      "A_Code": "PHX"
   },
   {
      "C_Code": "PIT",
      "Airport": "PITTSBURGH INT’L",
      "Country": "U.S.A.",
      "City": "PITTSBURGH",
      "A_Code": "PIT"
   },
   {
      "C_Code": "PNH",
      "Airport": "POCHENTONG",
      "Country": "CAMBODIA",
      "City": "PHNOMPENH",
      "A_Code": "PNH"
   },
   {
      "C_Code": "PUS",
      "Airport": "KIMHAE",
      "Country": "KOREA",
      "City": "PUSAN",
      "A_Code": "PUS"
   },
   {
      "C_Code": "ICH",
      "Airport": "Incheon International Airport",
      "Country": "KOREA",
      "City": "Incheon",
      "A_Code": "ICN"
   },
   {
      "C_Code": "JJU",
      "Airport": "Jeju International Airport",
      "Country": "KOREA",
      "City": "Jeju",
      "A_Code": "CJU"
   },
   {
      "C_Code": "GPO",
      "Airport": "Gimpo International Airport",
      "Country": "KOREA",
      "City": "Gimpo",
      "A_Code": "GMP"
   },
   {
      "C_Code": "NCE",
      "Airport": "Nice",
      "Country": "FRANCE",
      "City": "Nice",
      "A_Code": "NCE"
   },
   {
      "C_Code": "LYN",
      "Airport": "Lyon",
      "Country": "FRANCE",
      "City": "Lyon",
      "A_Code": "LYS"
   },
   {
      "C_Code": "ANQ",
      "Airport": "Anqing Tianzhushan Airport",
      "Country": "CHINA",
      "City": "Anqing",
      "A_Code": "AQG"
   },
   {
      "C_Code": "HRB",
      "Airport": "Harbin Taping International Airport",
      "Country": "CHINA",
      "City": "Harbin",
      "A_Code": "HRB"
   },
   {
      "C_Code": "SDN",
      "Airport": "Sydney Aiport",
      "Country": "AUSTRALIA",
      "City": "Sydney",
      "A_Code": "SYD"
   },
   {
      "C_Code": "MBR",
      "Airport": "Melbourne Aiport",
      "Country": "AUSTRALIA",
      "City": "Melbourne",
      "A_Code": "MEL"
   },
   {
      "C_Code": "BRB",
      "Airport": "Brisbane Aiport",
      "Country": "AUSTRALIA",
      "City": "Brisbane",
      "A_Code": "BNE"
   },
   {
      "C_Code": "SRP",
      "Airport": "Siem Reap Aiport",
      "Country": "CAMBODIA",
      "City": "Siem Reap",
      "A_Code": "REP"
   },
   {
      "C_Code": "SHV",
      "Airport": "Sihanoukville International Aiport",
      "Country": "CAMBODIA",
      "City": "Sihanoukville",
      "A_Code": "KOS"
   }
];
		dataList1.setJSON(jsonData1);
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 30px;'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',dataList:'data:dataList1',style:'width: 1000px;height: 200px;margin-bottom: 20px;',scrollByColumn:'false',id:'',autoFit:'allColumn',defaultCellHeight:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column5',value:'Country',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column4',value:'City',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column3',value:'Airport',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column2',value:'A_Code',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column1',value:'C_Code',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Country',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'City',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'Airport',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'A_Code',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'C_Code',value:'',blockSelect:'false',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'table',style:'width: 1000px;',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:33.33%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:33.33%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:33.33%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:33.33%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:33.33%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:33.33%;'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: lightgray;',class:'w2tb_th'},E:[{T:3,text:'AutoComplete'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: lightgray',class:'w2tb_th'},E:[{T:3,text:'CheckBox'}]},{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: lightgray;',class:'w2tb_th'},E:[{T:3,text:'CheckComboBox'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: lightgray;',class:'w2tb_th'},E:[{T:3,text:'MultiSelect'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: lightgray;',class:'w2tb_th'},E:[{T:3,text:'Radio'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: lightgray;',class:'w2tb_th'},E:[{T:3,text:'SelectBox'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: transparent',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',search:'contain',ref:'',chooseOption:'',editType:'select',useKeywordHighlight:'true',style:'width: 148px;height: 21px;',id:'',allOption:'',caseSensitive:'false',escape:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:linkedDataList1'},E:[{T:1,N:'w2:label',A:{ref:'City'}},{T:1,N:'w2:value',A:{ref:'C_Code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'height: 250px;',tabIndex:'',class:'w2tb_td'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'width: 148px;height: 21px;',id:'',selectedindex:'-1',rows:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:linkedDataList2'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'C_Code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: transparent;',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'col'}]}]},{T:1,N:'xf:checkcombobox',A:{submenuSize:'auto',displayAllOptionLabel:'false',ref:'',appearance:'minimal',chooseOption:'',disabled:'false',style:'width: 148px;height: 21px;margin-top: 0px;',allOption:'',id:'',displayMode:'label',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:linkedDataList3'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'C_Code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: transparent;',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'minimal',style:'width: 150px;',id:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:linkedDataList4'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'C_Code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: transparent;',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'width: 150px;height: 21px;',id:'',rows:'',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:linkedDataList5'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'C_Code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'background-color: transparent;',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',style:'width: 148px;height: 21px;',disabled:'false',id:'',allOption:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:linkedDataList6'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'C_Code'}}]}]}]}]}]}]}]}]}]}]})