/*amd /GridView/_General/autoFit_GridView.xml 11874 002eca2fece0f125b70f0cb53c9aa80b340197ce1938036ed50e72608c64f6f4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'Status',name:'Status'}},{T:1,N:'w2:column',A:{dataType:'date',id:'Date',name:'Date'}},{T:1,N:'w2:column',A:{dataType:'number',id:'Expense',name:'Expense'}},{T:1,N:'w2:column',A:{dataType:'number',id:'Income',name:'Income'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Hobby',name:'Hobby'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Region',name:'Region'}},{T:1,N:'w2:column',A:{dataType:'number',id:'Frequency',name:'Frequency'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ID',name:'ID'}},{T:1,N:'w2:column',A:{dataType:'number',id:'Age',name:'Age'}},{T:1,N:'w2:column',A:{id:'Check',name:'Check',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var json = [
   {
      "Status": "Single",
      "Date": "2019/07/19",
      "Expense": "50000",
      "Income": "2000000",
      "Hobby": "Movie",
      "Region": "Seoul",
      "Frequency": "1",
      "ID": "10001",
      "Age": "23"
   },
   {
      "Status": "Divorced",
      "Date": "2019/04/03",
      "Expense": "100000",
      "Income": "2300000",
      "Hobby": "Book",
      "Region": "Jeonju",
      "Frequency": "3",
      "ID": "10002",
      "Age": "25"
   },
   {
      "Status": "Married",
      "Date": "2019/05/11",
      "Expense": "100000",
      "Income": "2900000",
      "Hobby": "PC Game",
      "Region": "Seoul",
      "Frequency": "1",
      "ID": "10003",
      "Age": "30"
   },
   {
      "Status": "Single",
      "Date": "2019/05/10",
      "Expense": "80000",
      "Income": "1900000",
      "Hobby": "PC Game",
      "Region": "Daegu",
      "Frequency": "5",
      "ID": "10004",
      "Age": "19"
   },
   {
      "Status": "Married",
      "Date": "2019/05/03",
      "Expense": "200000",
      "Income": "3500000",
      "Hobby": "Movie",
      "Region": "Jeju",
      "Frequency": "4",
      "ID": "10005",
      "Age": "34"
   },
   {
      "Status": "Married",
      "Date": "2019/05/13",
      "Expense": "500000",
      "Income": "4200000",
      "Hobby": "Book",
      "Region": "Jeonju",
      "Frequency": "8",
      "ID": "10006",
      "Age": "39"
   },
   {
      "Status": "Divorced",
      "Date": "2019/04/30",
      "Expense": "100000",
      "Income": "3900000",
      "Hobby": "Book",
      "Region": "Jeju",
      "Frequency": "2",
      "ID": "10007",
      "Age": "29"
   },
   {
      "Status": "Married",
      "Date": "2019/05/14",
      "Expense": "2000000",
      "Income": "2900000",
      "Hobby": "Movie",
      "Region": "Seoul",
      "Frequency": "12",
      "ID": "10008",
      "Age": "25"
   },
   {
      "Status": "Divorced",
      "Date": "2019/04/15",
      "Expense": "100000",
      "Income": "2000000",
      "Hobby": "PC Game",
      "Region": "Incheon",
      "Frequency": "1",
      "ID": "10009",
      "Age": "32"
   },
   {
      "Status": "Divorced",
      "Date": "2019/05/01",
      "Expense": "50000",
      "Income": "2500000",
      "Hobby": "PC Game",
      "Region": "Seoul",
      "Frequency": "1",
      "ID": "10010",
      "Age": "34"
   },
   {
      "Status": "Married",
      "Date": "2019/05/12",
      "Expense": "230000",
      "Income": "3000000",
      "Hobby": "Book",
      "Region": "Jeonju",
      "Frequency": "5",
      "ID": "10011",
      "Age": "36"
   },
   {
      "Status": "Married",
      "Date": "2019/05/01",
      "Expense": "50000",
      "Income": "2000000",
      "Hobby": "Book",
      "Region": "Jeonju",
      "Frequency": "2",
      "ID": "10012",
      "Age": "22"
   },
   {
      "Status": "Single",
      "Date": "2019/05/06",
      "Expense": "80000",
      "Income": "2200000",
      "Hobby": "Book",
      "Region": "Jeonju",
      "Frequency": "3",
      "ID": "10013",
      "Age": "25"
   },
   {
      "Status": "Single",
      "Date": "2019/05/09",
      "Expense": "100000",
      "Income": "2500000",
      "Hobby": "PC Game",
      "Region": "Jeju",
      "Frequency": "8",
      "ID": "10014",
      "Age": "40"
   },
   {
      "Status": "Single",
      "Date": "2019/05/03",
      "Expense": "350000",
      "Income": "3100000",
      "Hobby": "Movie",
      "Region": "Seoul",
      "Frequency": "3",
      "ID": "10015",
      "Age": "35"
   },
   {
      "Status": "Married",
      "Date": "2019/05/06",
      "Expense": "100000",
      "Income": "2900000",
      "Hobby": "Movie",
      "Region": "Incheon",
      "Frequency": "2",
      "ID": "10016",
      "Age": "31"
   },
   {
      "Status": "Single",
      "Date": "2019/05/01",
      "Expense": "100000",
      "Income": "2800000",
      "Hobby": "PC Game",
      "Region": "Seoul",
      "Frequency": "2",
      "ID": "10017",
      "Age": "29"
   },
   {
      "Status": "Married",
      "Date": "2019/05/12",
      "Expense": "500000",
      "Income": "3200000",
      "Hobby": "Book",
      "Region": "Daegu",
      "Frequency": "6",
      "ID": "10018",
      "Age": "33"
   },
   {
      "Status": "Single",
      "Date": "2019/05/11",
      "Expense": "150000",
      "Income": "2200000",
      "Hobby": "Book",
      "Region": "Seoul",
      "Frequency": "5",
      "ID": "10019",
      "Age": "29"
   },
   {
      "Status": "Divorced",
      "Date": "2019/05/08",
      "Expense": "100000",
      "Income": "3200000",
      "Hobby": "PC Game",
      "Region": "Seoul",
      "Frequency": "2",
      "ID": "10020",
      "Age": "30"
   },
   {
      "Status": "Single",
      "Date": "2019/05/11",
      "Expense": "200000",
      "Income": "3900000",
      "Hobby": "Movie",
      "Region": "Jeonju",
      "Frequency": "4",
      "ID": "10021",
      "Age": "37"
   },
   {
      "Status": "Single",
      "Date": "2019/05/08",
      "Expense": "100000",
      "Income": "2800000",
      "Hobby": "Movie",
      "Region": "Incheon",
      "Frequency": "3",
      "ID": "10022",
      "Age": "28"
   },
   {
      "Status": "Single",
      "Date": "2019/05/14",
      "Expense": "500000",
      "Income": "3800000",
      "Hobby": "Book",
      "Region": "Seoul",
      "Frequency": "6",
      "ID": "10023",
      "Age": "29"
   },
   {
      "Status": "Married",
      "Date": "2019/05/12",
      "Expense": "150000",
      "Income": "2300000",
      "Hobby": "PC Game",
      "Region": "Daegu",
      "Frequency": "5",
      "ID": "10024",
      "Age": "20"
   },
   {
      "Status": "Married",
      "Date": "2019/05/06",
      "Expense": "100000",
      "Income": "2200000",
      "Hobby": "Movie",
      "Region": "Jeju",
      "Frequency": "3",
      "ID": "10025",
      "Age": "19"
   },
   {
      "Status": "Single",
      "Date": "2019/05/14",
      "Expense": "300000",
      "Income": "3900000",
      "Hobby": "Book",
      "Region": "Jeju",
      "Frequency": "8",
      "ID": "10026",
      "Age": "32"
   },
   {
      "Status": "Married",
      "Date": "2019/05/03",
      "Expense": "100000",
      "Income": "4200000",
      "Hobby": "PC Game",
      "Region": "Jeonju",
      "Frequency": "2",
      "ID": "10027",
      "Age": "34"
   },
   {
      "Status": "Single",
      "Date": "2019/04/18",
      "Expense": "30000",
      "Income": "3800000",
      "Hobby": "PC Game",
      "Region": "Seoul",
      "Frequency": "1",
      "ID": "10028",
      "Age": "41"
   },
   {
      "Status": "Married",
      "Date": "2019/05/08",
      "Expense": "120000",
      "Income": "3200000",
      "Hobby": "Book",
      "Region": "Incheon",
      "Frequency": "5",
      "ID": "10029",
      "Age": "42"
   },
   {
      "Status": "Divorced",
      "Date": "2019/05/11",
      "Expense": "400000",
      "Income": "3800000",
      "Hobby": "Book",
      "Region": "Seoul",
      "Frequency": "8",
      "ID": "10030",
      "Age": "39"
   }
];
		dataList1.setJSON(json);
	};
	
	scwin.onpageunload = function() {
		
	};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{id:'gridView1',style:'height: 230px;margin: 50px;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dataList1',autoFit:'',visibleRowNum:'15',rowNumVisible:'',dataDragSelect:'',useShiftKey:'true',dataDragDrop:'true',focusMode:'both',useCtrlKey:'',useCtrlOnMultisort:'',selectedRowColor:'',selectedCellColor:'',rowStatusVisible:'',dataDragDropStatus:'true',contextMenu:'true',keepDefaultColumnWidth:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'Check',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column2',value:'ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'Status',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column8',value:'Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'Expense',displayMode:'label',colSpan:'',rowSpan:''}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',style:'',id:'column10',value:'Income',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'Hobby',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'Region',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'Frequency',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'Age',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'height:20px',id:'Check',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'20',inputType:'text',style:'height:20px',id:'ID',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'height:20px',id:'Status',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Date',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Expense',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Income',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Hobby',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'height:20px',id:'Region',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'Frequency',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'height:20px',id:'Age',value:'',displayMode:'label'}}]}]}]}]}]}]})