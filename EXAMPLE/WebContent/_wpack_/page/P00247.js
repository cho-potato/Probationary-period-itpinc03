/*amd /page/P00247.xml 6346 7d4ed266ad1c5b36e1ce07125e1aaa03760f8409ce221017aa70cfb38b266ea4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230314'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'City',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Code',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Type',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'Code',E:[{T:4,cdata:'SE'}]},{T:1,N:'Type',E:[{T:4,cdata:'Asia'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Paris'}]},{T:1,N:'Code',E:[{T:4,cdata:'PA'}]},{T:1,N:'Type',E:[{T:4,cdata:'Europe'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'London'}]},{T:1,N:'Code',E:[{T:4,cdata:'LN'}]},{T:1,N:'Type',E:[{T:4,cdata:'Europe'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Beijing'}]},{T:1,N:'Code',E:[{T:4,cdata:'BJ'}]},{T:1,N:'Type',E:[{T:4,cdata:'Asia'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Tokyo'}]},{T:1,N:'Code',E:[{T:4,cdata:'TK'}]},{T:1,N:'Type',E:[{T:4,cdata:'Asia'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [ 특정 항목 감추기 ] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    // Radio 'rad_exam3'와 바인딩되어 있는 DataList 'dlt_dataList1'의 Type이 Europe인 데이터는 제외하고 표시하기
    rad_exam3.setVisibleColumn("Type", "Europe");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Radio컴포넌트에서 DataList와 바인딩하여 선택 항목을 표시할 경우,<br/>바인딩된 DataList의 특정 컬럼 값을 기준으로 일부 선택 항목을 숨기는 예제입니다.<br/><br/>이 기능은 아래의 속성과 함수로 사용할 수 있습니다.<br/>- visibleColumn : (속성)선택 항목 목록에서 특정 항목을 감추는 기능<br/>- visibleColumnFalseValue : (속성)visibleColumn 사용 시 목록에서 특정 항목을 감추기 위한 조건에 해당하는 값<br/>- setVisibleColumn : (함수)visibleColumn 속성을 동적으로 설정',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'특정 항목 감추기 - 속성',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Radio컴포넌트의 visibleColumn 속성에 DataList의 id인 "Type", visibleColumnFalseValue 속성에 실재 id의 값인 "Asia"를 설정했습니다. 따라서 Type이 Asia인 데이터를 제외한 항목만을 표시하는 것을 확인할 수 있습니다.',style:'',displayFormat:''}},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'[속성 적용 전]',style:'',displayFormat:''}},{T:1,N:'xf:select1',A:{id:'rad_exam1',selectedIndex:'-1',appearance:'full',style:'width: 200px;height:125px;border: 1px solid #ced4da;',cols:'',rows:'',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'[속성 적용 후]',style:'',displayFormat:''}},{T:1,N:'xf:select1',A:{id:'rad_exam2',selectedIndex:'-1',appearance:'full',style:'width: 200px;height:125px;border: 2px #ced4da;border: 1px solid #ced4da;',cols:'',rows:'',ref:'',visibleColumn:'Type',visibleColumnFalseValue:'Asia'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'특정 항목 감추기 - 함수',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래 버튼을 클릭 시 setVisibleColumn 함수로 인해 Type이 Europe인 항목을 제외하고 표시하는 것을 확인할 수 있습니다.',style:'',displayFormat:''}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'특정 항목 감추기'}]}]}]},{T:1,N:'xf:select1',A:{id:'rad_exam3',selectedIndex:'-1',appearance:'full',style:'width: 200px;height:125px;',cols:'',rows:'',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]}]}]}]}]}]}]})