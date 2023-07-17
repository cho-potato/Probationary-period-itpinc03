/*amd /sample/compFunc/fn_generator_doubleGrid.xml 9675 412a06e6f3dfbd81f8bf89d56a1eeb429703d883342b244702b251e614e8d1ca */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/cm/css/all.css" type="text/css"'},{T:7,N:'xml-stylesheet',instruction:'href="/cm/css/contents.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_request'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'req',name:'요청',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dltList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'val1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val4',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dltList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grval1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grval2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grval3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grval4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grval5',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dltList3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grval1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grval2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grval3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grval4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grval5',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm1',ref:'',target:'data:json,[{"id":"dltList1","key":"dltList1"},{"id":"dltList2","key":"dltList2"},{"id":"dltList3","key":"dltList3"}]',action:'/sample/data/generator.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/util/genExcel.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_genExcel_submitdone','ev:submiterror':'',id:'sbm_genExcel',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'Down...',ref:'data:json,dma_request',replace:'',target:'',style:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        	
			scwin.onpageload = function() {
				scwin.search();
			};
			
			scwin.btn_search_onclick = function(e) {
				scwin.search();
			};

			// 조회
            scwin.search = function(e) {
				generator1.removeAll();
				$p.executeSubmission( "sbm1" );
			};

			// 조회 후 generator 셋팅 
			scwin.sbm1_submitdone = function(e) {
				var _len1 = dltList1.getRowCount();
				var _len2 = dltList2.getRowCount();
				var _len3 = dltList3.getRowCount();
				
				for(var i=0; i<_len1; i++ ){
	        		generator1.insert();
	        		
	        		generator1.getChild( i , "textbox1" ).setValue(dltList1.getCellData( i , "val1" ));
	        		generator1.getChild( i , "textbox2" ).setValue(dltList1.getCellData( i , "val2" ));
	        		generator1.getChild( i , "textbox3" ).setValue(dltList1.getCellData( i , "val3" ));
	        		
	        		var _val4 = dltList1.getCellData( i , "val4" );
	        		generator1.getChild( i , "textbox4" ).setValue(_val4);
	        		
	        		if(_val4 == "인생은 아름다워"){
	        			
	        			for(var j=0; j<_len2; j++){
	        				generator1.getChild( i , "generator2" ).insert();
	        				generator1.getChild( i , "generator2" ).getChild( j , "textbox10" ).setValue(dltList2.getCellData( j , "grval1" ));
			        		generator1.getChild( i , "generator2" ).getChild( j , "textbox11" ).setValue(dltList2.getCellData( j , "grval2" ));
			        		generator1.getChild( i , "generator2" ).getChild( j , "textbox12" ).setValue(dltList2.getCellData( j , "grval3" ));
			        		generator1.getChild( i , "generator2" ).getChild( j , "textbox13" ).setValue(dltList2.getCellData( j , "grval4" ));
			        		generator1.getChild( i , "generator2" ).getChild( j , "textbox14" ).setValue(dltList2.getCellData( j , "grval5" ));
	        			}
	        			
	        		}else if(_val4 == "테스트"){
	        			
	        			for(var k=0; k<_len3; k++){
	        				generator1.getChild( i , "generator2" ).insert();
	        				generator1.getChild( i , "generator2" ).getChild( k , "textbox10" ).setValue(dltList3.getCellData( k , "grval1" ));
			        		generator1.getChild( i , "generator2" ).getChild( k , "textbox11" ).setValue(dltList3.getCellData( k , "grval2" ));
			        		generator1.getChild( i , "generator2" ).getChild( k , "textbox12" ).setValue(dltList3.getCellData( k , "grval3" ));
			        		generator1.getChild( i , "generator2" ).getChild( k , "textbox13" ).setValue(dltList3.getCellData( k , "grval4" ));
			        		generator1.getChild( i , "generator2" ).getChild( k , "textbox14" ).setValue(dltList3.getCellData( k , "grval5" ));
	        			}
	        			
	        		}else{
	        			generator1.getChild( i , "group3" ).hide();
	        			generator1.getChild( i , "generator2" ).hide();
	        		}
	        		
	        	}
			};
		
			//excel
			scwin.btn_excel_onclick = function(e) {
				var str = generator1.render.innerHTML;
				dma_request.set( "req" , str );
				// generator를 엑셀 파일 만드는 class => com.inswave.edu.util.excelUtilController.java 파일 참조 
				$p.executeSubmission( "sbm_genExcel" );
			};
			
			scwin.sbm_genExcel_submitdone = function(e) {
				if(e.responseJSON.rsMsg.statusCode == "S"){
					WebSquare.net.download( "/sample/compFunc/download.jsp" , null , "post" );
				}
			};
	

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.tablestyle1{position:relative;width:100%;border-collapse:collapse}.tablestyle1 th{width:20%;border-top:1px solid #b6bfcc;border-left:1px solid #b6bfcc;border-right:1px solid #b6bfcc;background:#edeef3;padding:5px}.tablestyle1 td{padding:5px;border:1px solid #b6bfcc}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc pd10',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'',id:'',label:'generator를 활용하여 2중 그리드 형태를 제공한다.<br/>기존 gridView로는 2중 그리드 형태를 제공하지 않으며, generator를 활용해야 표현할 수 있다.<br/>다만 generator는 엑셀 기능은 제공하지 않으며, 직접 구현해야 한다. 본 샘플에서는 직접 구현한 예를 보여주고 있다.<br/>( source : fn_generator_doubleGrid.xml )',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'defaultbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'defaultbox tar',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_search_onclick',id:'btn_search',style:'display: none;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_excel_onclick',id:'btn_excel',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀'}]}]}]},{T:1,N:'w2:generator',A:{id:'generator1',style:''},E:[{T:1,N:'xf:group',A:{class:'tablestyle1',id:'group1',style:'',tagname:'table'},E:[{T:1,N:'xf:group',A:{id:'group2',style:'',tagname:'tr'},E:[{T:1,N:'w2:textbox',A:{id:'textbox1',label:'',style:'width:20%;',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]}]}]},{T:1,N:'w2:textbox',A:{id:'textbox2',label:'',style:'width:20%;',tagname:'th'}},{T:1,N:'w2:textbox',A:{id:'textbox3',label:'',style:'width:30%;',tagname:'th'}},{T:1,N:'w2:textbox',A:{id:'textbox4',label:'',style:'width:30%;',tagname:'th'}}]},{T:1,N:'xf:group',A:{id:'group3',style:'',tagname:'tr'},E:[{T:1,N:'w2:textbox',A:{id:'textbox5',label:'cm구분',style:'width:10%;',tagname:'th'}},{T:1,N:'w2:textbox',A:{id:'textbox6',label:'길이',style:'width:10%;',tagname:'th'}},{T:1,N:'w2:textbox',A:{id:'textbox7',label:'광고주',style:'width:20%;',tagname:'th'}},{T:1,N:'w2:textbox',A:{id:'textbox8',label:'소재명',style:'width:30%;',tagname:'th'}},{T:1,N:'w2:textbox',A:{id:'textbox9',label:'비고',style:'width:30%;',tagname:'th'}}]},{T:1,N:'w2:generator',A:{id:'generator2',style:'',tagname:'tbody'},E:[{T:1,N:'xf:group',A:{class:'',id:'group4',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'',id:'group25',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{id:'textbox10',label:'',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'',id:'group26',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{id:'textbox11',label:'',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'',id:'group30',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{id:'textbox12',label:'',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'',id:'group31',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{id:'textbox13',label:'',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'',id:'group32',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{id:'textbox14',label:'',style:'',tagname:''}}]}]}]}]}]}]}]}]}]}]})