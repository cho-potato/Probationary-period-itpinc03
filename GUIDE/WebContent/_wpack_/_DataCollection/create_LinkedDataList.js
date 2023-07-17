/*amd /_DataCollection/create_LinkedDataList.xml 5824 f57a2f9914cb64b79669050f0fd9b8dfa66da3c2a36bbc1855de363d69b10f99 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Country',name:'Country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'City',name:'City',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Airport',name:'Airport',dataType:'text'}},{T:1,N:'w2:column',A:{id:'C_Code',name:'C_Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'A_Code',name:'A_Code',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'dataList1',id:'linkedDataList1'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'Country=="KOREA"'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
scwin.onpageload = function() {
    var jsonData1 = [{
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
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:select1',A:{id:'',selectedIndex:'-1',appearance:'full',style:'width: 150px;height: 200px;margin: 100px;border-style:solid;',cols:'',rows:'',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:linkedDataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'C_Code'}}]}]}]}]}]}]})