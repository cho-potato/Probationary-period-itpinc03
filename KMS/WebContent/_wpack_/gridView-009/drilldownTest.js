/*amd /gridView-009/drilldownTest.xml 4450 578c7450084e56b80f8a1f221e07b53dd251fa595d18f09c603ecc2c2f9a17ef */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'nameDis',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'levelCnt',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
	        var jsonData = [
			    {
			        "nameDis": "테스트1",
			        "levelCnt": "1"
			    },
			    {
			        "nameDis": "중분류1",
			        "levelCnt": "2"
			    },
			    {
			        "nameDis": "소분류1",
			        "levelCnt": "3"
			    },
			    {
			        "nameDis": "중분류2",
			        "levelCnt": "2"
			    },
			    {
			        "nameDis": "소분류1",
			        "levelCnt": "3"
			    },
			    {
			        "nameDis": "중분류3",
			        "levelCnt": "2"
			    },
			    {
			        "nameDis": "소분류1",
			        "levelCnt": "3"
			    }
			];
			
			dataList1.setJSON( jsonData );			
		};
		
		scwin.onpageunload = function() {
			
		};
		
        
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.css1 .w2grid_depthBlank{width:2px}.css1 .w2grid_depthBlank:last-child{width:14px}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{label:'* css 적용전',id:'textbox1',style:'position: relative;width: 150px;height: 23px;margin-left:5px;'}},{T:1,N:'w2:gridView',A:{dataList:'dataList1',scrollByColumn:'false',id:'gridView1',style:'position: relative;width: 500px;height: 150px;margin-left:5px;',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',fixedColumnWithHidden:'true',useShiftKey:'true'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'height:20px',inputType:'text',width:'148',displayMode:'label',value:'name1'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px',width:'70',inputType:'text',displayMode:'label',value:'name2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'nameDis',style:'height:20px',inputType:'drilldown',width:'148',displayMode:'label',depthColumn:'levelCnt',showDepth:'3',depthType:'div'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'levelCnt',style:'height:20px',width:'70',inputType:'text',displayMode:'label'}}]}]}]},{T:1,N:'w2:textbox',A:{label:'* css적용후 : w2grid_depthBlank 재정의<br/><br/>.css1 .w2grid_depthBlank {<br/>width:2px;<br/>}<br/><br/>.css1 .w2grid_depthBlank:last-child {<br/>width: 14px;<br/>}',id:'textbox2',style:'position: relative;width:503px;height:138px;margin-top:45px;margin-left:5px;'}},{T:1,N:'w2:gridView',A:{dataList:'dataList1',fixedColumnWithHidden:'true',id:'gridView2',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',scrollByColumn:'false',style:'position: relative;width: 500px;height: 150px;margin-top:25px;margin-left:5px;',useShiftKey:'true',class:'css1'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',style:'height:20px',value:'name1',width:'148'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'height:20px',value:'name2',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',depthColumn:'levelCnt',displayMode:'label',id:'nameDis',inputType:'drilldown',showDepth:'3',style:'height:20px',width:'148',depthType:'div'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'levelCnt',inputType:'text',style:'height:20px',width:'70'}}]}]}]}]}]}]})