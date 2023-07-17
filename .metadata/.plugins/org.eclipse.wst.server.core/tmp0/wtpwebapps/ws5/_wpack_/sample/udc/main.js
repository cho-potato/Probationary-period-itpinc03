/*amd /sample/udc/main.xml 7048 ccecaa63a7c6409b3d70e1fee32941abea887ce0af94f2e93f9e7bb52816e42b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

scwin.onpageload = function() {
	
};



scwin.btnSetName_onclick = function(e) {
	udc1.setName(iptName1.getValue());
};

scwin.btnSetTask_onclick = function(e) {
	udc1.setTask( iptTask1.getValue() );
};

scwin.btnSetContact_onclick = function(e) {
	udc1.setContact( iptContact1.getValue() );
};

scwin.btnGetName_onclick = function(e) {
	iptName2.setValue(  udc1.getName()  );
};

scwin.btnGetTask_onclick = function(e) {
	iptTask2.setValue(  udc1.getTask() );
};

scwin.btnGetContact_onclick = function(e) {
	iptContact2.setValue( udc1.getContact() );
};

scwin.udc1_onNameSet = function() {
	alert("이름 입력 !!!");
};

}}}]},{T:1,N:'w2:require',A:{as:'udc_sub',type:'page',variableClone:'true',src:'/cm/udc/sub.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'인사 정보',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'margin-top: 10px;'},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'* sub 화면의 개인 정보를 Main 화면에서 입력 합니다. (setVale)',style:'color:#FF8040;font-weight:bold;font-size:12pt;padding: 3px;',tagname:''}}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:'margin-bottom: 10px;'},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이름 기입',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'iptName1',placeholder:'',style:'width:50%;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btnSetName',style:'',type:'button','ev:onclick':'scwin.btnSetName_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sub Page 이름 입력'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당 업무 기입',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'iptTask1',placeholder:'',style:'width:50%;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btnSetTask',style:'',type:'button','ev:onclick':'scwin.btnSetTask_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sub Page 담당업무 입력'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연락처 기입',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'iptContact1',placeholder:'',style:'width:50%;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btnSetContact',style:'',type:'button','ev:onclick':'scwin.btnSetContact_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sub Page 연락처 입력'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'margin-top: 10px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'grpPage'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'SP5 Page Component (구 UDC)',style:'margin-bottom: 10px;padding: 5px;color:#62629F;',tagname:'h2'}},{T:1,N:'w2:udc_sub',A:{style:'',id:'udc1',color:'orange','ev:onNameSet':'scwin.udc1_onNameSet'}}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'* sub 화면의 개인 정보를 Main 화면에서 확인 합니다.(getValue)',style:'color:#479BE0;font-weight:bold;font-size:12pt;padding: 3px;margin-top: 10px;',tagname:''}}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이름 확인',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'iptName2',placeholder:'',style:'width:50%;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btnGetName',style:'color:#479BE0;border: 1px solid #479BE0;',type:'button','ev:onclick':'scwin.btnGetName_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sub Page 이름 확인'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당 업무 확인',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'iptTask2',placeholder:'',style:'width:50%;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btnGetTask',style:'color:#479BE0;border: 1px solid #479BE0;',type:'button','ev:onclick':'scwin.btnGetTask_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sub Page 담당업무 확인'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연락처 확인',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'iptContact2',placeholder:'',style:'width:50%;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btnGetContact',style:'color:#479BE0;border: 1px solid #479BE0;',type:'button','ev:onclick':'scwin.btnGetContact_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sub Page 연락처 확인'}]}]}]}]}]}]}]}]}]}]})