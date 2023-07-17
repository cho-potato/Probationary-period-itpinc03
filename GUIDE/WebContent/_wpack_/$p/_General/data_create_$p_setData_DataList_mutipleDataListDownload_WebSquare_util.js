/*amd /$p/_General/data_create_$p_setData_DataList_mutipleDataListDownload_WebSquare_util.xml 4457 005790c7943581a3dd990db2a628f57d15f0f247699c9fc22d39ff68836df689 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		 var option = { 
             "id" : "dataList1",
             "type" : "dataList",
             "option" : { 
                 "baseNode": "list",
                 "repeatNode": "map"
             },
             "columnInfo" : [ 
                 {
                     "id" : "JSON_Code", 
                     "name": "JSON_Code", 
                     "dataType" :"text" 
                 }, {
                     "id" :"JSON_CodeName", 
                     "name" : "JSON_CodeName", 
                     "dataType" :"text"
                 }
             ] 
         };
         $p.data.create( option );
	};
	
	scwin.trigger6_onclick = function(e) {
		var arr1 = [];
        for( var i=0;i<5;i++ ) {
			for(var j=0;j<4;j++) {
			arr1[i*4+j] = "JSON_" + i+j;
			}
		}
		dataList1.setData(arr1);
	};
	
	scwin.trigger2_onclick = function(e) {
		var dcStr = '<w2:dataList id="dataList2" baseNode="list" repeatNode="map" valueNode=""> '+ 
                        '<w2:columnInfo>'+ 
                            '<w2:column id="XML_OrderID" name="XML_Client ID" dataType="text"></w2:column>'+
                            '<w2:column id="XML_CustomerID" name="XML_Client Name" dataType="text"></w2:column>'+
                            '<w2:column id="XML_EmployeeID" name="XML_Employee" dataType="text"></w2:column>'+
                            '<w2:column id="XML_OrderDate" name="XML_Date" dataType="text"></w2:column>'+
                        '</w2:columnInfo>'+
                    '</w2:dataList>';
        $p.data.create(dcStr);
	};
	
	scwin.trigger7_onclick = function(e) {
		var arr3 = [];
		for( var i=0;i<10;i++ ) {
			for(var j=0;j<4;j++) {
				arr3[i*4+j] = "XML_" + i+j;
			}
		}
		
		dataList2.setData(arr3);
	};
	
	scwin.trigger5_onclick = function(e) {
		var scId = "";
		var options = { 
		    common: { 
		        fileName : "dataList.xlsx",
		        multipleSheet: "true",
		        showProcess : false 
		    }, 
		    excelInfo: [ 
		        { s
		            dataListId : "dataList1", 
		            sheetName : "JSON", 
		            removeColumns : "" ,
		            wframeId: scId
		        }, 
		        { 
		            dataListId : "dataList2", 
		            sheetName : "XML", 
		            removeColumns : "",
		            wframeId: scId 
		        }
		    ] 
		};
		WebSquare.util.multipleDataListDownload( options ); 
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:300px;height:43px;margin:30px;font-size:20px;font-family:sans-serif;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.data.create(); / JSON'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:200px;height:43px;font-size:20px;font-family:sans-serif;',id:'trigger6','ev:onclick':'scwin.trigger6_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'dataList1.setData();'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',id:'trigger2',style:'width:300px;height:43px;margin:30px;font-size:20px;font-family:sans-serif;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.data.create(); / XML'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:200px;height:43px;font-size:20px;font-family:sans-serif;',id:'trigger7','ev:onclick':'scwin.trigger7_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'dataList2.setData();'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:300px;height:43px;display:block;margin:30px;font-size:20px;font-size-adjust:0;font-family:sans-serif;font:;',id:'trigger5','ev:onclick':'scwin.trigger5_onclick','ev:onfocus':''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'multipleDataListDownload();'}]}]}]}]}]})