/*amd /sample/index/traiSamp.xml 3629 63aaaf79af0c76e5b0bac49222499e5924afed59d1191354fbf7dec839d11be6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dc_list',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'desc',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'url',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'desc',E:[{T:4,cdata:'1일차 완성 - 컴포넌트의 데이터 셋팅 방법. Submission 연동.'}]},{T:1,N:'url',E:[{T:4,cdata:'/training/complete/training1_c.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'desc',E:[{T:4,cdata:'2일차 완성 1 - 검색 조건 + GridView. 코드별 Submission 생성'}]},{T:1,N:'url',E:[{T:4,cdata:'/training/complete/training2-1_c.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'desc',E:[{T:4,cdata:'2일차 완성 2 - 검색 조건 + GridView. 1개의 Submission으로 전체 코드 가져오기'}]},{T:1,N:'url',E:[{T:4,cdata:'/training/complete/training2-2_c.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'desc',E:[{T:4,cdata:'2일차 완성 3 - 검색 조건 + GridView. 공통 Function을 이용하여 코드 가져오기'}]},{T:1,N:'url',E:[{T:4,cdata:'/training/complete/training2-3_c.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'desc',E:[{T:4,cdata:'Page Scope - Page Scope 적용된 실습 화면'}]},{T:1,N:'url',E:[{T:4,cdata:'/training/complete/training3-1.xml'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'dl{margin:0;font-family:arial;counter-reset:dtCounter;font-size:14px}dt{font-weight:700}dt::before,dt:before{content:counter(dtCounter) ". ";counter-increment:dtCounter}dd{margin-left:6px}dd::before,dd:before{content:"경로 : "}dd a:hover{color:coral}'}]},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
    		scwin.onpageload = function() {
				var tmpArr = dc_list.getAllJSON();
				var tmpCount = tmpArr.length;
				var tmpObj,tmpData;
				for(var i=0;i<tmpCount;i++){
					tmpData = tmpArr[i];
					ui_gen.insertChild();
					tmpObj = ui_gen.getChild( i , "ui_url" );
					tmpObj.setValue(tmpData.url);
					tmpObj.setHref( location.pathname+"?w2xPath="+tmpData.url );
					
					tmpObj = ui_gen.getChild( i , "ui_txt" );
					tmpObj.setValue(tmpData.desc);
				} 
			};
		
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'main_wrapper'},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',class:'main_header',src:'/sample/comm/wf_headerWithMenu.xml'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'main_content scrolly'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'pd20'},E:[{T:1,N:'xf:group',A:{id:'',style:'background-color: #4c4c4c;',class:'titlebox02'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',tabIndex:'',class:'df_tt',label:'실습 완성본',tagname:'h1'}}]},{T:1,N:'w2:generator',A:{id:'ui_gen',style:'',tagname:'dl'},E:[{T:1,N:'w2:textbox',A:{id:'ui_txt',style:'',label:'',tagname:'dt',class:'mb5'}},{T:1,N:'xf:group',A:{id:'',style:'padding:6px;',class:'',tagname:'dd'},E:[{T:1,N:'w2:anchor',A:{id:'ui_url',style:'',clickEventElement:'',target:'_blank',class:'',outerDiv:'false'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:group',A:{style:'height:1px;border-width:0px;border-bottom:1px solid #bbb;',id:'',tagname:'hr'}}]}]}]}]}]}]}]})