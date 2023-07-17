/*amd /ETC-003/download.xml 2359 8d3afba3d8c7107027125f3aba3a26762e8b115812c5af2b2f57df096562ae8f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
	        var jsonData = [{"col1":"a", "col2":"b", "col3":"c", "col4":"d"},
	        				{"col1":"aa", "col2":"bb", "col3":"cc", "col4":"dd"},
	        				{"col1":"aaa", "col2":"bbb", "col3":"ccc", "col4":"ddd"},
	        				{"col1":"aaaa", "col2":"bbbb", "col3":"cccc", "col4":"dddd"},];
	        
	        dataList1.setJSON( jsonData );			
		};
		
		scwin.onpageunload = function() {

		};
         
		scwin.trigger1_onclick = function(e) {
			//debugger;
			// 데이터리스트를 json으로 반환 시키고 해당 내용을 인코딩해서 던지는 과정	
			var jsondata = WebSquare.text.BASE64Encoder(JSON.stringify(dataList1.getAllJSON()));
			console.log(jsondata);
			$p.download( "/TechDB/ETC-003/FileDown.jsp" , jsondata , "post" );

			//var name = dataList1.getCellData( 0 , 0 );
			//WebSquare.text.BASE64Encoder(name);
			// XML 형탤로 만들어 주는구조
			//var xmldata = "<data><name>"+ name +"</name></data>";
			// JSON 형태로 만들어 주는구조
		};
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position: relative;width: 100px;height: 23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'filedownload'}]}]}]}]}]})