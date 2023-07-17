/*amd /Pivot/headerYMerge_pivotExcelDownload_Pivot.xml 4926 a6a0ca60a4c346c9c26c5babc6aaf65089c34d5c4deb1d20bda489c1fd274f57 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList2',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'국가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'주문번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'사이즈2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'사이즈3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function(){
        	
			scwin.onpageload = function() {
				var jsonData = [{"col1":"TV", "col2":"Korea", "col3":"1st", "col4":"1000", "col5":"K", "col6":"M", "col7":"M"}
                                ,{"col1":"TV", "col2":"Korea", "col3":"2nd", "col4":"500", "col5":"L", "col6":"S"}
                                ,{"col1":"TV", "col2":"Korea", "col3":"3rd", "col4":"700", "col5":"L", "col6":"S"}
                                ,{"col1":"TV", "col2":"USA", "col3":"1st", "col4":"2500", "col5":"L", "col6":"S"}
                                ,{"col1":"TV", "col2":"USA", "col3":"2nd", "col4":"1500", "col5":"S", "col6":"S"}

                                ,{"col1":"TV", "col2":"France", "col3":"total", "col4":"9700", "col5":"S", "col6":"S"}
                                
                                ,{"col1":"Washer", "col2":"USA", "col3":"1st", "col4":"2500", "col5":"S", "col6":"S"}
                                ,{"col1":"Washer", "col2":"GB", "col3":"1st", "col4":"1500", "col5":"S", "col6":"S"}



                                ,{"col1":"TV", "col2":"Korea", "col3":"1st", "col4":"11000", "col5":"L", "col6":"O", "col7":"O"}
                                ,{"col1":"TV", "col2":"Korea", "col3":"2nd", "col4":"1500", "col5":"L", "col6":"L"}
                                ,{"col1":"TV", "col2":"Korea", "col3":"3rd", "col4":"1700", "col5":"L", "col6":"L"}
                                ,{"col1":"TV", "col2":"USA", "col3":"1st", "col4":"12500", "col5":"L", "col6":"L"}
                                ,{"col1":"TV", "col2":"USA", "col3":"2nd", "col4":"11500", "col5":"L", "col6":"L"}

                                ,{"col1":"TV", "col2":"France", "col3":"total", "col4":"19700", "col5":"L", "col6":"L"}
                                
                                ,{"col1":"Washer", "col2":"USA", "col3":"1st", "col4":"12500", "col5":"L", "col6":"L"}
                                ,{"col1":"Washer", "col2":"GB", "col3":"1st", "col4":"11500", "col5":"L", "col6":"L"}];
				dataList2.setJSON(jsonData);
				
				
			};
			
			scwin.onpageunload = function() {
				
			};

    scwin.onpageload();
			scwin.trigger2_onclick = function(e) {
                pivot1.pivotExcelDownload( {fileName:"pivotExcel.xlsx"} );
            };
			
	}
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'position:absolute;width:252px;height:47px;left:10px;padding:5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align: left;margin-left: 50px;','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'pivotExcelDownload()'}]}]},{T:1,N:'w2:pivot',A:{id:'pivot1',dataList:'dataList2',showGrandTotal:'true',grandTotalDisplayType:'vertical',valuesAxis:'col',style:'position: absolute;height:447px;width:80%;border: 1px solid black;left:11px;top:85px;margin-left: 50px;margin-top: 30px;',userNumberFormat:'true',digitsAfterDecimal:'1',scaler:'1',decimalSep:'.',thousandsSep:',',prefix:'!',suffix:'$',headerListMouseOverColor:'#FF0000',cols:'col1,col2,col3',rows:'col5,col6,col7',vals:'col4',excludeHiddenList:'',hiddenHeaderList:'',headerYMerge:'true',headerListOrder:'col,row,val,hidden'},E:[{T:1,N:'w2:fieldInfo',E:[{T:1,N:'w2:field',A:{id:'col1',name:'Tpye'}},{T:1,N:'w2:field',A:{id:'col2',name:'Country',sortOrder:'Korea,USA,China,Japan,GB,France'}},{T:1,N:'w2:field',A:{id:'col3',name:'Order'}},{T:1,N:'w2:field',A:{id:'col4',name:'Qty'}},{T:1,N:'w2:field',A:{id:'col5',name:'Size 1',sortOrder:'S,M,X,XL,XXL,XXXL'}},{T:1,N:'w2:field',A:{id:'col6',name:'Size 2',sortOrder:'S,M,X,XL,XXL,XXXL'}},{T:1,N:'w2:field',A:{id:'col7',name:'Size 3',sortOrder:'S,M,X,XL,XXL,XXXL'}}]}]}]}]}]})