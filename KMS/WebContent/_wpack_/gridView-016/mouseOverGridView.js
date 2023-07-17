/*amd /gridView-016/mouseOverGridView.xml 7193 5f3555e3c727bc86d48a0a17d3da800890ff03521695a99d8efe9c86cf3a0f0c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
	        dataList1.setJSON([{
		        "col1": "",
		        "col2": "",
		        "col3": "",
		        "col4": "",
		        "col5": ""
		    },
		    {
		        "col1": "",
		        "col2": "",
		        "col3": "",
		        "col4": "",
		        "col5": ""
		    },
		    {
		        "col1": "",
		        "col2": "",
		        "col3": "",
		        "col4": "",
		        "col5": ""
		    },
		    {
		        "col1": "",
		        "col2": "",
		        "col3": "",
		        "col4": "",
		        "col5": ""
		    },
		    {
		        "col1": "",
		        "col2": "",
		        "col3": "",
		        "col4": "",
		        "col5": ""
		    },
		    {
		        "col1": "",
		        "col2": "",
		        "col3": "",
		        "col4": "",
		        "col5": ""
		    },
		    {
		        "col1": "",
		        "col2": "",
		        "col3": "",
		        "col4": "",
		        "col5": ""
		    },
		    {
		        "col1": "",
		        "col2": "",
		        "col3": "",
		        "col4": "",
		        "col5": ""
		    },
		    {
		        "col1": "",
		        "col2": "",
		        "col3": "",
		        "col4": "",
		        "col5": ""
		    },
		    {
		        "col1": "",
		        "col2": "",
		        "col3": "",
		        "col4": "",
		        "col5": ""
		    }
		]);			
		};
		
		scwin.onpageunload = function() {
			
		};
        
        var oldRowIndex,oldColIndex;
        
		scwin.gridView1_onbodymouseover = function(info) {
			//debugger;
			
			if(oldRowIndex!=info.rowIndex || oldColIndex!=info.colIndex){
				console.log("위치 변경~~~");
				console.log("oldRowIndex"+oldRowIndex+", oldColIndex"+oldColIndex);
				console.log("rowIndex"+info.rowIndex+", colIndex"+info.colIndex);
				
				var rowIdx = info.rowIndex;
				var colIdx = info.colIndex;
			
				var rowIdx2 = info.rowIndex - gridView1.getTopRowIndex();    
				var left = gridView1.getPosition( "left" ) + gridView1.getCellPosition( rowIdx2 , colIdx , "left" )+gridView1.getCellSize( rowIdx2 , colIdx , "width" );
				var top = gridView1.getPosition( "top" ) + gridView1.getCellPosition( rowIdx2 , colIdx , "top" )+gridView1.getCellSize( rowIdx2 , colIdx , "height" );
				
				console.log("left"+left+", top"+top);
				
				contextGroup.show();
				contextGroup.setPosition( left , top );	
					
			}
			
			oldRowIndex = info.rowIndex;
			oldColIndex = info.colIndex;
		
		
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
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'',id:'contextGroup',style:'position: absolute ;left:289px;width:100px;top:76px;z-index: 100;display:none;'},E:[{T:1,N:'xf:group',A:{class:'',id:'grdBodyContentBox',style:'position: absolute;left:0px;top:0px;width:100%;'},E:[{T:1,N:'w2:anchor',A:{class:'',id:'gridBody_anchor406',label:'',style:'position: relative ;width:100px;background-color:#56FFE0;','ev:onclick':'scwin.gridBody_anchor406_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'menu1'}]}]},{T:1,N:'w2:anchor',A:{class:'',id:'gridBody_anchor4066',label:'',style:'position: relative ;width:100px;background-color:#56FFE0;','ev:onclick':'scwin.gridBody_anchor4066_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'menu2'}]}]},{T:1,N:'div',A:{class:''}},{T:1,N:'w2:anchor',A:{class:'',id:'gridBody_anchor407',label:'',style:'position: relative ;width:100px;background-color:#56FFE0;','ev:onclick':'scwin.gridBody_anchor407_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'menu3'}]}]},{T:1,N:'w2:anchor',A:{class:'',id:'gridBody_anchor408',label:'',style:'position: relative ;width:100px;background-color:#56FFE0;','ev:onclick':'scwin.gridBody_anchor408_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'menu4'}]}]}]}]},{T:1,N:'w2:gridView',A:{dataList:'dataList1',scrollByColumn:'false',summaryAuto:'false',scrollByColumnAdaptive:'false',id:'gridView1',style:'position: relative;width: 500px;height: 150px;',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',fixedColumnWithHidden:'true',useShiftKey:'true','ev:onbodymouseover':'scwin.gridView1_onbodymouseover','ev:onscrolly':'scwin.gridView1_onscrolly'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',style:'height:20px',inputType:'text',width:'70',displayMode:'label',value:'name1'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'height:20px',inputType:'text',width:'70',displayMode:'label',value:'name2'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',style:'height:20px',inputType:'text',width:'70',displayMode:'label',value:'name3'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px',inputType:'text',width:'70',displayMode:'label',value:'name4'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',style:'height:20px',width:'70',inputType:'text',displayMode:'label',value:'name5'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col3',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col4',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col5',style:'height:20px',width:'70',inputType:'text',displayMode:'label'}}]}]}]}]}]}]})