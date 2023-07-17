/*amd /GridView/Excel/advancedExcelDownload_xxxFontBold.xml 6168 81809298b73443a1c75f243968baa0d703035c895568db9ec4833678e8098c21 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'name6'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	scwin.onpageload = function() {
		var data = [];
		var row = 10;
		var col = 6;
		for (var i = 0; i < row; i++) {
			for (var j = 0; j < col; j++) {
				var t = Math.floor(i / 5);
				data.push(t * 100 + j * (t + 1));
			}
		}
		dataList1.setData(data);
	};

	scwin.onpageunload = function() {
	};

	scwin.onpageunload = function() {

	};

	scwin.trigger1_onclick = function(e) {
		var options = {
			useSubTotal : true,
			headerFontBold : true,
			bodyFontBold : true,
			//subTotalFontBold : true,
			//footerFontBold : true
		};
		gridView1.advancedExcelDownload(options);	
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:250px;height:30px;padding-left:5px;margin-left:100px;margin-top:20px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;text-align:left;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'advancedExcelDownload()'}]}]},{T:1,N:'w2:gridView',A:{dataList:'data:dataList1',fixedColumnWithHidden:'true',id:'gridView1',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'width: 600px;height: 200px;margin: 100px;margin-top: 20px;',useShiftKey:'true',visibleRowNum:'10',rowNumVisible:'true'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',style:'height:20px;',value:'name1',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',style:'height:20px;',value:'name2',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column22',value:'name3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column18',value:'name4',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'column14',value:'name5',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'height:20px;',value:'name6',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col1',inputType:'text',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col2',inputType:'text',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'height:20px',id:'col5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col6',inputType:'text',style:'height:20px',width:'70'}}]}]},{T:1,N:'w2:subTotal',A:{id:'subTotal1',style:'',targetColumnID:'col1'},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',expression:'sum(\'col1\')',id:'column13',inputType:'expression',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'expression',style:'height:20px',width:'70',expression:'sum(\'col2\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'height:20px',id:'column24',value:'',displayMode:'label',expression:'sum(\'col3\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'height:20px',id:'column20',value:'',displayMode:'label',expression:'sum(\'col4\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'height:20px',id:'column16',value:'',displayMode:'label',expression:'sum(\'col5\')'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'expression',style:'height:20px',width:'70',expression:'sum(\'col6\')'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',expression:'sum(\'col1\')',id:'column10',inputType:'expression',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'expression',style:'height:20px',width:'70',expression:'sum(\'col2\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'height:20px',id:'column25',value:'',displayMode:'label',expression:'sum(\'col3\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'height:20px',id:'column21',value:'',displayMode:'label',expression:'sum(\'col4\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'height:20px',id:'column17',value:'',displayMode:'label',expression:'sum(\'col5\')'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column8',inputType:'expression',style:'height:20px',width:'70',expression:'sum(\'col6\')'}}]}]}]}]}]}]})