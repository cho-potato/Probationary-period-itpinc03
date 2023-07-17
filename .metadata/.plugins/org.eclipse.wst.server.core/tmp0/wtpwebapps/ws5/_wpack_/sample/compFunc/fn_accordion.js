/*amd /sample/compFunc/fn_accordion.xml 19775 35ed8584d9e70ddc270b329f9ee2a93105166d1f5c62bad823269881cb7d3812 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

scwin.onpageload = function () {
    var genArr = ["package_WebSquare5.png", "package_Proworks.png", "package_W-gear.png"];
    var genArrLen = genArr.length, genObj, imgNm;

    for (var i = 0; i < genArrLen; i++) {
        ui_genProduct.insertChild();
        imgNm = genArr[i];
        ui_genProduct.getChild(i, "ui_prdImg").setSrc("/img/" + imgNm);
        ui_genProduct.getChild(i, "ui_prdNm").setValue(imgNm.replace("package_", "").replace(".png", ""));
    }

};

scwin.ui_btnSend_onclick = function () {
    alert("기능이 구현되지 않았습니다.");
};


}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.acd01Box{border-left:1px solid silver;border-right:1px solid silver;border-bottom:1px solid silver}.w2accordion{border-style:none}.w2accordion,.w2panels_content_open{overflow:inherit}.w2accordion.acd01 .w2panels_title{background:0 0;background-color:#497ba4;padding:6px;color:#fff;border-style:none;border-bottom:1px solid #ddd}.w2accordion.acd02 .w2panels_title{background-color:#eee;color:#497ba4;padding:4px 6px;border-style:none;border-bottom:1px solid #dbdbdb}.w2accordion.acd01 .w2panel_title_text{font-size:14px}.w2accordion.acd02 .w2panel_title_text{font-size:12px}.w2accordion .w2panels_title{overflow:hidden}.w2accordion .w2panels_title span{float:left}.w2accordion .w2panels_title div{float:right}.w2accordion .w2panels_title_image{background:url(/img/accordion_close01.png) no-repeat center center;background-size:16px}.w2accordion .w2panels_title_image_open{background:url(/img/accordion_open01.png) no-repeat center center;background-size:16px}.w2accordion .w2panels{border-style:none}.w2accordion .w2panel_title_text{line-height:25px;padding-top:0;vertical-align:none}.genProduct>.w2group,.w2panels_content_open>.w2group{border-top:1px solid #eee}.genProduct>.w2group:first-child,.w2panels_content_open>.w2group:first-child{border-top-style:none}.txtOpt{padding:6px 20px;background-color:#64c0be;color:#fff}.txtAmount{font-weight:700;font-size:24px;margin-right:10px}.txtAmount::after,.txtAmount:after{content:" 원";font-size:12px;color:#999}.txtTot{color:tomato;font-weight:700;font-size:24px}.txtTot::after,.txtTot:after{content:"원";font-size:12px}.btnTotAch{display:block;text-align:center;background-color:tomato}.btnTotAch a{display:block;line-height:50px;color:#fff;font-weight:700;font-size:24px}.btnTotAch a::after,.btnTotAch a:after{content:"원 결제하기";font-size:14px;font-weight:400}.w2checkbox_label:before{position:absolute;left:0;top:5px;content:none;display:inline-block;width:20px;height:20px;border:1px solid #cfd5d8;box-sizing:border-box;background:#fff}.w2radio_label:before{position:absolute;left:1px;top:5px;content:none;display:inline-block;width:20px;height:20px;border:1px solid #cfd5d8;box-sizing:border-box;border-radius:50%;background:#fff}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:'',class:'section_desc'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'',label:'Accordion을 이용하여 구현한 화면으로 컨텐츠 안에 Accordion, Generator 컴포넌트를 이용하여 구성하였다.<br/>( source : fn_accordion.xml )',escape:'false'}}]},{T:1,N:'xf:group',A:{style:'max-width: 450px;margin: 0px auto;',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'acd01Box'},E:[{T:1,N:'w2:accordion',A:{collapseAll:'',style:'overflow: inherit;',id:'ui_accordion',selectedPanel:'panels4',class:'acd01',collapsible:'true'},E:[{T:1,N:'w2:panels',A:{style:'',id:'panels1',class:''},E:[{T:1,N:'w2:panelTitle',A:{style:'',id:'panelTitle1',label:'주문정보',class:''}},{T:1,N:'w2:panelContent',A:{style:'',id:'panelContent1',class:''},E:[{T:1,N:'w2:accordion',A:{collapseAll:'',style:'overflow: inherit;',id:'',selectedPanel:'',class:'acd02',collapsible:'true'},E:[{T:1,N:'w2:panels',A:{style:'',id:'panels5',class:''},E:[{T:1,N:'w2:panelTitle',A:{style:'',id:'panelTitle5',label:'주문자정보',class:''}},{T:1,N:'w2:panelContent',A:{style:'padding: 0px 10px;',id:'panelContent5',class:''},E:[{T:1,N:'xf:group',A:{style:'padding: 10px 0px;overflow:hidden;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'width:25%;float:left;line-height: 3em;',id:'',label:'주문자명'}},{T:1,N:'xf:group',A:{style:'float: right;width:75%;',id:'',class:''},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 100%;height: 3em;box-sizing:border-box;',id:'',initValue:'이유은'}}]}]},{T:1,N:'xf:group',A:{style:'padding: 10px 0px;overflow:hidden;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'width:25%;float:left;line-height: 3em;',label:'연락처',id:''}},{T:1,N:'xf:group',A:{style:'float: right;width:75%;',id:'',class:''},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',optionOrder:'false',disabled:'false',style:'width: 32%;height: 3em;box-sizing:border-box;margin-right: 2%;',allOption:'',id:'',displayMode:'label',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'010'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'011'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'011'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'016'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'016'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'017'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'017'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'018'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'018'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'019'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'019'}]}]}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 32%;height: 3em;box-sizing:border-box;margin-right: 2%;',id:'',initValue:'8240'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 32%;height: 3em;box-sizing:border-box;',id:'',initValue:'8282'}}]}]},{T:1,N:'xf:group',A:{style:'padding: 10px 0px;overflow:hidden;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'width:25%;float:left;line-height: 3em;',label:'이메일',id:''}},{T:1,N:'xf:group',A:{style:'float: right;width:75%;',id:'',class:''},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 100%;height: 3em;box-sizing:border-box;',id:'',initValue:'g_edu@inswave.com'}}]}]}]}]},{T:1,N:'w2:panels',A:{style:'',id:'panels6',class:''},E:[{T:1,N:'w2:panelTitle',A:{style:'',id:'panelTitle6',label:'품절시 환불방법',class:''}},{T:1,N:'w2:panelContent',A:{style:'padding: 0px 10px;',id:'panelContent6',class:''},E:[{T:1,N:'xf:group',A:{style:'padding: 10px 0px;',id:'',class:''},E:[{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'',rows:'',cols:'',selectedIndex:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주문 시 결제수단으로 환불받기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예치금으로 자동 환불받기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'padding: 10px 0px;',id:'',class:''},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'',selectedindex:'-1',rows:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'환불방법 저장하기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'',style:'padding: 10px 0px;',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'ul',style:'padding-left: 20px;',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'li',style:'margin-bottom: 6px;',label:'예치금은 현금성포인트로, 상품 구매 시 언제든 사용이 가능하며 원하시는 경우 현금으로전환이 가능한 편리한 결제수단입니다.',id:''}},{T:1,N:'w2:textbox',A:{tagname:'li',style:'margin-bottom: 6px;',label:'품절로 인한 한불금액의 합이 5마원 미만일 경우, 예치금으로 자동환불되며, 5만원 이상이거나 비회원 주문일 경우 원결제수단으로 환불처리 됩니다.(품절 발생 익일 오후 5시부터 환불처리)',id:''}},{T:1,N:'w2:textbox',A:{tagname:'li',style:'',id:'',label:'예치금환불이 아닌 주문하신 결제수단으로 환불받기를 원하실 경우, \'주문 시 결제수단으로 환불받기\'를 선택해 주세요.'}}]}]}]}]},{T:1,N:'w2:panels',A:{style:'',id:'panels7',class:''},E:[{T:1,N:'w2:panelTitle',A:{style:'',id:'panelTitle7',label:'주문확인서 받는 방법',class:''}},{T:1,N:'w2:panelContent',A:{style:'padding: 0px 10px;',id:'panelContent7',class:''},E:[{T:1,N:'xf:group',A:{style:'padding: 10px 0px;',id:'',class:''},E:[{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'',rows:'',cols:'',selectedIndex:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'\'모바일\' 주문확인서만 받기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'\'모바일+종이\' 주문확인서 모두 받기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'padding: 10px 0px;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'margin-bottom: 10px;',label:'<span class=\'txtGreen\'>종이절약</span>은 <span class=\'txtGreen\'>환경보호와 자원절약</span> 실천의 한 방법입니다.',id:''}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.ui_btnSend_onclick',style:'width: 60px;text-align: center;',id:'',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'안내'}]}]}]}]}]}]}]}]},{T:1,N:'w2:panels',A:{style:'',id:'panels2',class:''},E:[{T:1,N:'w2:panelTitle',A:{style:'',id:'panelTitle2',label:'배송정보',class:''}},{T:1,N:'w2:panelContent',A:{style:'',id:'panelContent2',class:''},E:[{T:1,N:'w2:accordion',A:{collapseAll:'',style:'',id:'',selectedPanel:'',class:'acd02',collapsible:'true'},E:[{T:1,N:'w2:panels',A:{style:'',id:'panels8',class:''},E:[{T:1,N:'w2:panelTitle',A:{style:'',id:'panelTitle8',label:'배송지정보',class:''}},{T:1,N:'w2:panelContent',A:{style:'padding: 0px 10px;',id:'panelContent8',class:''},E:[{T:1,N:'xf:group',A:{style:'padding: 10px 0px;overflow:hidden;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'width:25%;float:left;line-height: 3em;',id:'',label:'배송지'}},{T:1,N:'xf:group',A:{style:'float: right;width:75%;',id:'',class:''},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',optionOrder:'false',disabled:'false',style:'width: 100%;height: 3em;box-sizing:border-box;',allOption:'',id:'',displayMode:'label',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'[기본배송지]우리집'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'서울시 구로구 대륭포스트타워'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'padding: 10px 0px;overflow:hidden;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'width:25%;float:left;line-height: 3em;',id:'',label:'받는분'}},{T:1,N:'xf:group',A:{style:'float: right;width:75%;',id:'',class:''},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 100%;height: 3em;box-sizing:border-box;',id:'',initValue:'이유은'}}]}]},{T:1,N:'xf:group',A:{style:'padding: 10px 0px;overflow:hidden;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'width:25%;float:left;line-height: 3em;',id:'',label:'연락처'}},{T:1,N:'xf:group',A:{style:'float: right;width:75%;',id:'',class:''},E:[{T:1,N:'xf:select1',A:{ref:'',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',optionOrder:'false',disabled:'false',style:'width: 32%;height: 3em;box-sizing:border-box;margin-right: 2%;',allOption:'',id:'',displayMode:'label',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'010'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'011'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'011'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'016'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'016'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'017'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'017'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'018'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'018'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'019'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'019'}]}]}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 32%;height: 3em;box-sizing:border-box;margin-right: 2%;',id:'',initValue:'8240'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 32%;height: 3em;box-sizing:border-box;',id:'',initValue:'8282'}}]}]},{T:1,N:'xf:group',A:{style:'padding: 10px 0px;overflow:hidden;',id:'',class:''},E:[{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'',rows:'1',cols:'',selectedIndex:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'안심번호 사용한함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'안심번호 사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.ui_btnSend_onclick',style:'width: 60px;float : right;',id:'',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'안내'}]}]}]},{T:1,N:'xf:group',A:{style:'padding: 10px 0px;overflow:hidden;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'width:25%;float:left;line-height: 3em;',id:'',label:'주소'}},{T:1,N:'xf:group',A:{style:'float: right;width:75%;',id:'',class:''},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 64%;height: 3em;box-sizing:border-box;margin-right: 2%;margin-bottom: 10px;',id:'',initValue:'08378'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.ui_btnSend_onclick',style:'width: 32%;height: 3em;margin-bottom: 10px;',id:'',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'우편번호'}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 100%;height: 3em;box-sizing:border-box;margin-bottom: 10px;',id:'',initValue:'서울특별시 구로구 디지털로 306'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 100%;height: 3em;box-sizing:border-box;margin-bottom: 10px;',id:'',initValue:'대륭포스트타워 2차'}}]},{T:1,N:'w2:textbox',A:{style:'clear: both;',label:'기본 배송지는 MY PAGE > 배송지관리 메뉴에서 변경 가능합니다.',id:''}}]}]}]},{T:1,N:'w2:panels',A:{style:'',id:'panels9',class:''},E:[{T:1,N:'w2:panelTitle',A:{style:'',id:'panelTitle9',label:'택배배송 메시지',class:''}},{T:1,N:'w2:panelContent',A:{style:'padding: 0px 10px;',id:'panelContent9',class:''},E:[{T:1,N:'xf:group',A:{style:'padding: 10px 0px;overflow:hidden;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'width:25%;float:left;line-height: 3em;',id:'',label:'배송 메시지'}},{T:1,N:'xf:group',A:{style:'float: right;width:75%;',id:'',class:''},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOption:'',allOption:'',displayMode:'label',ref:'',appearance:'minimal',emptyValue:'',disabledClass:'w2selectbox_disabled',optionOrder:'false',disabled:'false',style:'width: 100%;height: 3em;box-sizing:border-box;',id:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'빠른 배송 바랍니다'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'도착 전 연락 주세요'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'padding: 10px 0px;overflow:hidden;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'width:25%;float:left;line-height: 3em;',id:'',label:'선물 메시지'}},{T:1,N:'xf:group',A:{style:'float: right;width:75%;',id:'',class:''},E:[{T:1,N:'xf:textarea',A:{style:'width: 100%;height: 100px;box-sizing:border-box;',id:'',placeholder:'받으실 분에게 전달할 메세지를 입력해주세요.'}}]}]}]}]}]}]}]},{T:1,N:'w2:panels',A:{style:'',id:'panels3',class:''},E:[{T:1,N:'w2:panelTitle',A:{style:'',id:'panelTitle3',label:'상품정보',class:''}},{T:1,N:'w2:panelContent',A:{style:'padding: 0px 10px;',id:'panelContent3',class:''},E:[{T:1,N:'w2:generator',A:{style:'',id:'ui_genProduct',class:'genProduct'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px 0px;overflow:hidden;',id:'',class:''},E:[{T:1,N:'xf:image',A:{src:'',style:'width:20%;float:left;',id:'ui_prdImg'}},{T:1,N:'xf:group',A:{style:'float: right;width:75%;',id:'',class:''},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'w2:textbox',A:{style:'margin-bottom: 6px;color:#999;font-size:14px;font-weight: bold;',id:'ui_prdNm',label:''}},{T:1,N:'xf:group',A:{style:'margin-bottom: 6px;',id:''},E:[{T:1,N:'w2:span',A:{dataType:'number',displayFormat:'#,###',style:'',label:'48600000',id:'',class:'txtAmount'}},{T:1,N:'w2:span',A:{style:'padding: 0px 10px;border-left: 1px solid #ddd;color:#999;',label:'1개',id:''}}]},{T:1,N:'xf:group',A:{style:'overflow: hidden;',id:''},E:[{T:1,N:'w2:textbox',A:{style:'float : left;margin-right: 10px;',label:'옵션',id:'',class:'txtOpt'}},{T:1,N:'w2:textbox',A:{style:'padding:6px 0px;float: left;',label:'없음',id:''}}]}]}]}]}]}]}]},{T:1,N:'w2:panels',A:{style:'',id:'panels4',class:''},E:[{T:1,N:'w2:panelTitle',A:{style:'',id:'panelTitle4',label:'최종결제금액',class:''}},{T:1,N:'w2:panelContent',A:{style:'padding: 10px;',id:'panelContent4',class:''},E:[{T:1,N:'xf:group',A:{style:'overflow: hidden;padding: 10px;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'font-size:14px;float: left;margin-right: 10px;',label:'총 주문 금액',id:''}},{T:1,N:'w2:textbox',A:{dataType:'number',displayFormat:'#,##0원',style:'font-size:14px;float: left;',id:'',label:'145800000'}},{T:1,N:'w2:textbox',A:{style:'font-size:14px;float: right;',id:'',label:'(배송비 2,500원 포함)'}}]},{T:1,N:'xf:group',A:{style:'overflow: hidden;padding: 10px;position: relative;text-align: center;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'float : left;width: 50%;box-sizing:border-box;text-align: center;border:2px dashed #00bba9;border-right-width: 1px;padding: 6px 0px;',id:'',label:'총 할인금액<br/>0원'}},{T:1,N:'w2:textbox',A:{style:'float : left;width: 50%;box-sizing:border-box;text-align: center;border:2px dashed #00bba9;padding: 6px 0px;border-left-width: 1px;',id:'',label:'포인트 사용금액<br/>0원'}},{T:1,N:'xf:image',A:{src:'/img/bg_minus.png',style:'width: 2em;height: 2em;position: absolute;left: calc(50% - 1em);    top: calc(50% - 1em);}',id:''}}]},{T:1,N:'xf:group',A:{style:'overflow: hidden;padding: 10px;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'float : left;padding-top:10px;font-size: 16px;',id:'',label:'최종 결제금액'}},{T:1,N:'w2:textbox',A:{dataType:'number',displayFormat:'#,##0',style:'float : right;',id:'',label:'145800000',class:'txtTot'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'padding: 10px 0px;',id:'',class:''},E:[{T:1,N:'w2:anchor',A:{outerDiv:'true','ev:onclick':'scwin.ui_btnSend_onclick',clickEventElement:'outerDiv',style:'',id:'ui_btnSend',class:'btnTotAch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'145,800,000'}]}]}]}]}]}]}]}]})