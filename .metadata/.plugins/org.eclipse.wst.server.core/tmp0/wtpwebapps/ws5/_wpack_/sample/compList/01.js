/*amd /sample/compList/01.xml 6447 a02c703469b16604eae6f17892fc58e832605cfb2ac305ea2eeb90c3daac3c89 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_tmpData',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'input2',name:'input2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'input3',name:'input3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'input4',name:'input4'}},{T:1,N:'w2:key',A:{dataType:'text',id:'searchbox1',name:'searchbox1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'secret1',name:'secret1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'inputCalendar2',name:'inputCalendar2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'spinner1',name:'spinner1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'spinner2',name:'spinner2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'spinner3',name:'spinner3'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'input2',E:[{T:4,cdata:'1299.678'}]},{T:1,N:'input3',E:[{T:4,cdata:'20200101'}]},{T:1,N:'input4',E:[{T:4,cdata:'1234'}]},{T:1,N:'searchbox1',E:[{T:4,cdata:'WebSquare'}]},{T:1,N:'secret1',E:[{T:4,cdata:'1111'}]},{T:1,N:'inputCalendar2',E:[{T:4,cdata:'20070101'}]},{T:1,N:'spinner1',E:[{T:4,cdata:'20070101'}]},{T:1,N:'spinner2',E:[{T:4,cdata:'4'}]},{T:1,N:'spinner3',E:[{T:4,cdata:'1040'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		ui_editor.setHTML("CKEditor입니다.<br/>이곳에 글을 입력하세요.");
	};
	
	scwin.ui_getHTML_onclick = function(e) {
		alert(ui_editor.getHTML());
	};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:''},E:[{T:1,N:'xf:group',A:{class:'section_desc',id:'',style:'padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'폼을 구성하는 컴포넌트로, 텍스트 입력이 가능한 컴포넌트이다.<br/>InputBox, SearchBox, Secret, InputCalendar, TextArea, Editor, Spinner가 해당된다.<br/>( source : 01.xml )',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'section01 dmr fl dmb'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'contTitle02 dmb',label:'InputBox'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'ofh'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'defCompLbl',label:'text'}},{T:1,N:'xf:input',A:{id:'',ref:'',dataType:'text',style:'',placeholder:'이름을 입력하세요.',class:'defComp'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'ofh'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'defCompLbl',label:'number'}},{T:1,N:'xf:input',A:{id:'',ref:'data:dc_tmpData.input2',dataType:'number',style:'',placeholder:'숫자만 입력가능',class:'defComp',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'ofh dmb'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'defCompLbl',label:'date'}},{T:1,N:'xf:input',A:{id:'',ref:'data:dc_tmpData.input3',dataType:'date',style:'',placeholder:'날짜타입',class:'defComp',dateMask:'MM/dd/yyyy'}}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'section01 ofh fl dmb'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'contTitle02 dmb',label:'Spinner'}},{T:1,N:'xf:group',A:{class:'ofh',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'defCompLbl',id:'',label:'number',style:''}},{T:1,N:'w2:spinner',A:{buttonSize:'60',class:'defComp',dataType:'number',id:'',increment:'2',inputReadOnly:'true',max:'10',min:'0',ref:'data:dc_tmpData.spinner2',skin:'type2',style:'position:relative;',readOnly:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'ofh'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'defCompLbl',label:'date'}},{T:1,N:'w2:spinner',A:{id:'',ref:'data:dc_tmpData.spinner1',dataType:'date',style:'position: relative;',class:'defComp',buttonSize:'60',skin:'type2',inputReadOnly:'false',dateMask:'',dateIncrementType:'day',max:'',displayFormat:'yyyy.MM.dd'}}]},{T:1,N:'xf:group',A:{class:'ofh dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'defCompLbl',id:'',label:'time',style:''}},{T:1,N:'w2:spinner',A:{buttonSize:'30',class:'defComp',id:'',increment:'',inputReadOnly:'false',max:'10',min:'0',ref:'data:dc_tmpData.spinner3',skin:'type1',style:'position:relative;',dataType:'time',dateIncrementType:'minute'}}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'section02 dmb clleft'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'contTitle01 fl',label:'Secret'}},{T:1,N:'xf:secret',A:{id:'',ref:'data:dc_tmpData.secret1',style:'',class:'defComp'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'section02 dmb'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'contTitle01 fl',label:'SearchBox'}},{T:1,N:'w2:searchbox',A:{id:'',style:'',class:'defComp',ref:'data:dc_tmpData.searchbox1'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'section02 dmb'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'contTitle01 fl',label:'InputCalendar'}},{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',id:'',style:'width: 150px;height: 23px;',renderDiv:'true',focusOnDateSelect:'false',calendarValueType:'yearMonthDate',rightAlign:'false',renderType:'component',ref:'data:dc_tmpData.inputCalendar2',class:'defComp'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'section03 dmb ofh'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'contTitle02 dmb',label:'Textarea'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'pd10 pt0'},E:[{T:1,N:'xf:textarea',A:{id:'',ref:'data:dc_tmpData.textarea1',style:'width:100%;height: 150px;',placeholder:'선물 메시지를 입력해주세요.&#13;&#10;(상품의 요청 사항은 반영되지 않습니다.)'}}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'section03 dmb'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'contTitle02 dmb',label:'Editer ( CKEditor )'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'pd10 pt0'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'btnbox'},E:[{T:1,N:'xf:trigger',A:{id:'ui_getHTML',style:'','ev:onclick':'scwin.ui_getHTML_onclick',class:'btn_cm fr',type:'button',disabled:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getHTML'}]}]}]},{T:1,N:'w2:editor',A:{style:'min-height: 300px;margin-top: 10px;',id:'ui_editor',menubar:'default'}}]}]}]}]}]}]}]})