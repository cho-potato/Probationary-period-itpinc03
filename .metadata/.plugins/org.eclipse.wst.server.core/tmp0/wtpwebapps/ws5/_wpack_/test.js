/*amd /test.xml 2205 09ae3e4be8677ba2275987fd2324e73cc6b77b198f6062e021582c6cbf1bd537 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/css/color.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',src:'/js/holiday.js'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	// 초기 값을 세팅하거나 화면에 뜨자마자 통신해야할 때 == init
    // 초기 값 세팅할 곳 없다고 지우면 안됨 걍 두셈!!
    // input box 불러오기
    ipt1.setValue("123456789");
};

scwin.onpageunload = function() {
	// 브라우저에서 X 표시 눌러 닫히기 직전 실행되느 함수
    // 선언한 변수 소멸시킬 때, 마지막에 로그 찍을 때
};

scwin.bt_select_onclick = function(e) {
    alert("처리중입니다");
};

scwin.bt_select_onfocus = function(e) {

};

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.aa{background-color:GREEN}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',style:'width:202px;height:50px;background-color: YELLOW',placeholder:'성명을 넣어주세요'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',style:'width:144px;height:44px;',initValue:'123456789',dataType:'number',displayFormat:'#,###',applyFormat:'all',class:'aa'}},{T:1,N:'xf:trigger',A:{type:'button',id:'bt_select',style:'width:81px;height:41px;','ev:onclick':'scwin.bt_select_onclick','ev:onfocus':'scwin.bt_select_onfocus'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'ipt1',style:'width:144px;height:58px;',class:'dbgct'}},{T:1,N:'w2:calendar',A:{footerDiv:'false',id:'',style:'width: 200px;height: 200px;'}}]}]}]})