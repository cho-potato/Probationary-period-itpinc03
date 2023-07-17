/*amd /gridView-025/contextMenuGridView.xml 5607 a79260990a3237a5aa7b23c35e04b90636893cdd02e98571a84b029c0a67da88 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'test1'}]},{T:1,N:'col2',E:[{T:4,cdata:'test2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'test1'}]},{T:1,N:'col2',E:[{T:4,cdata:'test2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'test1'}]},{T:1,N:'col2',E:[{T:4,cdata:'test2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'test1'}]},{T:1,N:'col2',E:[{T:4,cdata:'test2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'test1'}]},{T:1,N:'col2',E:[{T:4,cdata:'test2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'test1'}]},{T:1,N:'col2',E:[{T:4,cdata:'test2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'test1'}]},{T:1,N:'col2',E:[{T:4,cdata:'test2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'test1'}]},{T:1,N:'col2',E:[{T:4,cdata:'test2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'test1'}]},{T:1,N:'col2',E:[{T:4,cdata:'test2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'test1'}]},{T:1,N:'col2',E:[{T:4,cdata:'test2'}]}]}]}]}]}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
			
		};
		
		scwin.onpageunload = function() {
			
		};
        
		scwin.gridView1_oncellclick = function(row,col) {
		
			var columID = gridView1.getColumnID(col);
			
			if(columID == "col2") {

				var rowIdx = row - gridView1.getTopRowIndex();    
				var left = gridView1.getPosition( "left" ) + gridView1.getCellPosition( rowIdx , col , "left" )+gridView1.getCellSize( rowIdx , col , "width" );
				var top = gridView1.getPosition( "top" ) + gridView1.getCellPosition( rowIdx , col , "top" )+gridView1.getCellSize( rowIdx , col , "height" );

				contextGroup.show();
				contextGroup.setPosition( left , top );			
				
			} 
		
		};
		
		scwin.gridView1_onrightbuttonclick = function(row,col) {
			var rowIdx = row - gridView1.getTopRowIndex();    
			var left = gridView1.getPosition( "left" ) + gridView1.getCellPosition( rowIdx , col , "left" )+gridView1.getCellSize( rowIdx , col , "width" );
			var top = gridView1.getPosition( "top" ) + gridView1.getCellPosition( rowIdx , col , "top" )+gridView1.getCellSize( rowIdx , col , "height" );

			contextGroup.show();
			contextGroup.setPosition( left , top );
		};
	
		scwin.gridView1_onscrolly = function() {
			contextGroup.hide();
		};
	
		scwin.gridBody_anchor406_onclick = function() {
			alert("click menu1");
		};
		
		scwin.gridBody_anchor4066_onclick = function() {
			alert("click menu2");
		};
		
		scwin.gridBody_anchor407_onclick = function() {
			alert("click menu3");
		};
		
		scwin.gridBody_anchor408_onclick = function() {
			alert("click menu4");
		};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'contextGroup',style:'position: absolute ;left:279px;width:100px;top:66px;z-index: 100;display:none;',class:''},E:[{T:1,N:'xf:group',A:{id:'grdBodyContentBox',class:'',style:'position: absolute;left:0px;top:0px;width:100%;'},E:[{T:1,N:'w2:anchor',A:{id:'gridBody_anchor406',label:'',style:'position: relative ;width:100px;background-color:#56FFE0;',class:'','ev:onclick':'scwin.gridBody_anchor406_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'menu1'}]}]},{T:1,N:'w2:anchor',A:{id:'gridBody_anchor4066',label:'',style:'position: relative ;width:100px;background-color:#56FFE0;',class:'','ev:onclick':'scwin.gridBody_anchor4066_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'menu2'}]}]},{T:1,N:'div',A:{class:''}},{T:1,N:'w2:anchor',A:{class:'',id:'gridBody_anchor407',label:'',style:'position: relative ;width:100px;background-color:#56FFE0;','ev:onclick':'scwin.gridBody_anchor407_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'menu3'}]}]},{T:1,N:'w2:anchor',A:{class:'',id:'gridBody_anchor408',label:'',style:'position: relative ;width:100px;background-color:#56FFE0;','ev:onclick':'scwin.gridBody_anchor408_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'menu4'}]}]}]}]},{T:1,N:'w2:gridView',A:{dataList:'dataList1',fixedColumnWithHidden:'true',id:'gridView1',scrollByColumn:'false',style:'position: relative ;left:41px;top:40px;width:203px;height:156px;',useShiftKey:'false','ev:oncellclick':'scwin.gridView1_oncellclick','ev:onrightbuttonclick':'scwin.gridView1_onrightbuttonclick','ev:onscrolly':'scwin.gridView1_onscrolly'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',inputType:'text',style:'height:20px',value:'name1',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',inputType:'text',style:'height:20px',value:'name2',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',inputType:'text',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',inputType:'button',style:'height:20px',width:'70'}}]}]}]}]}]}]})