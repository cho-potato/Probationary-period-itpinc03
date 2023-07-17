/*amd /gridView-022/gridview_multi_excel_down.xml 6999 2c6189dfc6b8b8f14fdba602bf86b29d5ac7029556d20daf3c87841cce7c651a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dataList2',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'이름',id:'name'}},{T:1,N:'w2:column',A:{dataType:'text',name:'나이',id:'age'}},{T:1,N:'w2:column',A:{dataType:'text',name:'핸폰',id:'hp'}},{T:1,N:'w2:column',A:{dataType:'text',name:'주소',id:'address'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'name',E:[{T:3,text:'장그래'}]},{T:1,N:'age',E:[{T:3,text:'30'}]},{T:1,N:'hp',E:[{T:3,text:'1234'}]},{T:1,N:'address',E:[{T:3,text:'인천'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'name',E:[{T:3,text:'안영이'}]},{T:1,N:'age',E:[{T:3,text:'31'}]},{T:1,N:'hp',E:[{T:3,text:'2345'}]},{T:1,N:'address',E:[{T:3,text:'부산'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'name',E:[{T:3,text:'김동식'}]},{T:1,N:'age',E:[{T:3,text:'32'}]},{T:1,N:'hp',E:[{T:3,text:'3456'}]},{T:1,N:'address',E:[{T:3,text:'서울'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'name',E:[{T:3,text:'오상식'}]},{T:1,N:'age',E:[{T:3,text:'33'}]},{T:1,N:'hp',E:[{T:3,text:'4567'}]},{T:1,N:'address',E:[{T:3,text:'광주'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'name',E:[{T:3,text:'김동식'}]},{T:1,N:'age',E:[{T:3,text:'32'}]},{T:1,N:'hp',E:[{T:3,text:'3456'}]},{T:1,N:'address',E:[{T:3,text:'서울'}]}]}]}]}]}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				dataList1.setData([1,2,3,4]);
			};
			
			scwin.onpageunload = function() {
				
			};

            scwin.downloadMultiGridviewExcel = function() {
                var options = {
                    common: {
                        fileName : "multi_gridview_excel_download.xlsx",
                        showProcess : true,
                        printSet : {
                            landScape : "true",
                            fitToPage : "true",
                            fitWidth : "4",
                            fitHeight : "333",
                            scale : "222"
                        }
                    },
                    excelInfo: [
                        {
                            gridId : "gridView1",
                            sheetName : "gridView1_sheet",
                            type : "1",
                            // removeColumns : "0,2",
                            foldColumns : "4",
                            startRowIndex : 2,
                            startColumnIndex : 0,
                            headerColor : "#FFC81E",
                            bodyColor : "#FDF5E6",
                            infoArr : [{ rowIndex : 0, colIndex : 0, rowSpan : 2, colSpan : 2, text : "Grid1 Data", textAlign : "center" }]
                        },
                        {
                            gridId : "gridView2",
                            sheetName : "gridView2_sheet",
                            type : "1",
                            rowsByN : "10000",
                            removeColumns : "",
                            foldColumns : "4",
                            startRowIndex : 2,
                            startColumnIndex : 0,
                            headerColor : "#FFC81E",
                            bodyColor : "#FDF5E6",    
                            infoArr : [{ rowIndex : 0, colIndex : 0, rowSpan : 2, colSpan : 2, text : "Grid2 Data", textAlign : "center" }]
                        }
                    ]
                };
                
                // multipleExcelDownload 함수를 이용해서 options에 정의된 Grid를 엑셀 파일로 다운로드 한다.
                $p.multipleExcelDownload( options );
            };
        
			scwin.trigger5_onclick = function(e) {
				scwin.downloadMultiGridviewExcel();	
			};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{dataList:'dataList1',scrollByColumn:'false',id:'gridView1',style:'position: absolute ;left:26px;top:66px;width:220px;height:161px;',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',fixedColumnWithHidden:'true',useShiftKey:'true'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'height:20px',inputType:'text',width:'70',displayMode:'label',value:'name1'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px',width:'70',inputType:'text',displayMode:'label',value:'name2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',style:'height:20px',inputType:'text',width:'70',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',style:'height:20px',width:'70',inputType:'text',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{dataList:'dataList2',scrollByColumn:'false',id:'gridView2',style:'position: absolute;left:279px;top:62px;height:179px;width:400px;',evenRowBackgroundColor:'#FF813A','ev:oncellclick':'scwin.gridView2_oncellclick'},E:[{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{id:'column15',style:'height:20px',inputType:'text',width:'70',value:'이름'}},{T:1,N:'w2:column',A:{id:'column13',style:'height:20px',inputType:'text',width:'70',value:'나이'}},{T:1,N:'w2:column',A:{id:'column11',style:'height:20px',inputType:'text',width:'70',value:'핸폰'}},{T:1,N:'w2:column',A:{id:'column9',style:'height:20px',width:'70',inputType:'text',value:'주소'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{id:'name',style:'height:20px',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'age',style:'height:20px',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'hp',style:'height:20px',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'address',style:'height:20px',width:'70',inputType:'text'}}]}]}]},{T:1,N:'xf:trigger',A:{id:'trigger5',style:'position: absolute ;left:27px;top:20px;width:294px;height:25px;',type:'button','ev:onclick':'scwin.trigger5_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Multi Grid Excel Download using Provider'}]}]}]}]}]})