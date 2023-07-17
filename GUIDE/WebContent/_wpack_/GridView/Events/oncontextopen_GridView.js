/*amd /GridView/Events/oncontextopen_GridView.xml 4874 ebed6546d6a47fccffd16e93b4164a05b9dd0e540db7dca3b2ea46022fa43a2b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'c_code',name:'city_code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'airport',name:'airport',dataType:'text'}},{T:1,N:'w2:column',A:{id:'country',name:'country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'city',name:'city',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a_code',name:'airport_code',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

scwin.onpageload = function () {
    var json = [
        {
            "c_code": "PAR",
            "airport": "ORLY",
            "country": "FRANCE",
            "city": "PARIS",
            "a_code": "ORY"
        },
        {
            "c_code": "PDX",
            "airport": "PORTLAND INT’L",
            "country": "U.S.A.",
            "city": "PORTLAND",
            "a_code": "PDX"
        },
        {
            "c_code": "PEK",
            "airport": "CAPITAL",
            "country": "CHINA",
            "city": "BEIJING",
            "a_code": "PEK"
        },
        {
            "c_code": "PER",
            "airport": "PERTH",
            "country": "AUSTRALIA",
            "city": "PERTH",
            "a_code": "PER"
        },
        {
            "c_code": "PHL",
            "airport": "PHILADELPHIA INT’L",
            "country": "U.S.A.",
            "city": "PHILADELPHIA",
            "a_code": "PHL"
        },
        {
            "c_code": "PHX",
            "airport": "SKY HARBOR ",
            "country": "U.S.A.",
            "city": "PHOENIX",
            "a_code": "PHX"
        },
        {
            "c_code": "PIT",
            "airport": "PITTSBURGH INT’L",
            "country": "U.S.A.",
            "city": "PITTSBURGH",
            "a_code": "PIT"
        },
        {
            "c_code": "PNH",
            "airport": "POCHENTONG",
            "country": "CAMBODIA",
            "city": "PHNOMPENH",
            "a_code": "PNH"
        },
        {
            "c_code": "PUS",
            "airport": "KIMHAE",
            "country": "KOREA",
            "city": "PUSAN",
            "a_code": "PUS"
        }
    ];
    dataList1.setJSON(json);
};

scwin.onpageunload = function () {

};


scwin.gridView1_oncontextopen = function(rowIndex,colIndex,focusedCell,info) {
    alert(JSON.stringify(info));
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding-left: 100px;padding-top: 50px;'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',rowNumVisible:'true',checkAllType:'false',dataList:'data:dataList1',style:'width: 700px;height: 150px;',scrollByColumn:'false',id:'gridView1',autoFit:'allColumn',visibleRowNum:'10',defaultCellHeight:'20',contextMenu:'true',useHeaderContextMenu:'true','ev:oncontextopen':'scwin.gridView1_oncontextopen'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column5',value:'city_code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column4',value:'airport',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column3',value:'country',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column2',value:'city',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column1',value:'airport_code',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'c_code',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'airport',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'country',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'city',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'a_code',value:'',displayMode:'label'}}]}]}]}]}]}]}]})