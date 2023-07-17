/*amd /GridView/Excel/advancedExcelDownload_useStyle_headerFontBold_GridView.xml 2674 626b505bcb1a4f303b8bda38f4b1f1fd6a024912e09e4fb75b6f61e26c83c62b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'Amount',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col2',name:'Category',dataType:'text'}}]}]}]}]},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function(){ 
    		var jsonData = [{"col1":"1234.0", "col2":"AAA"},
    		{"col1":"1234.12", "col2":"BBB"},
    		{"col1":"1111", "col2":"CCC"}];
    		dataList1.setJSON( jsonData );
    		
    		gridView1.setDisplayFormat( "col1" , "#,##0.000" );
        
			scwin.trigger1_onclick = function(e) {
				var options = {};
				options.fileName= "test.xlsx";
				options.type = "1";
				options.useStyle = "false";
				options.headerFontBold = "true";				
				
				gridView1.advancedExcelDownload( options );
			};
	}
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position:absolute;left:27px;top:73px;width:216px;height:30px;display:block;font-style:italic;font-family:sans-serif;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'advancedExcelDownload();'}]}]},{T:1,N:'w2:gridView',A:{dataList:'dataList1',scrollByColumn:'false',id:'gridView1',contextMenu:'true',style:'position:absolute;left:26px;top:123px;width:600px;height:229px;',fixedColumnWithHidden:'true',useShiftKey:'false',enterKeyMove:'',editModeEvent:'onclick',adaptiveThreshold:'',adaptive:'',rowStatusVisible:'true',focusFlow:'linear',rowNumVisible:'true',rowNumBackgroundColor:'',hideHeader:'false'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column16',style:'height:20px;',inputType:'text',width:'170',value:'Price'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',style:'height:49px;',inputType:'text',width:'210',value:'Category'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',style:'height:20px',inputType:'text',width:'170',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',style:'height:20px',inputType:'text',width:'70'}}]}]}]}]}]}]})