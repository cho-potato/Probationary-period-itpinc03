/*amd /sample/compFunc/fn_jQuery.xml 5826 a7b5710b6a326be11a2a521d9b63f6993d00aebb93988afdbdb33e3d49d99aef */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	
	scwin.onpageload = function() {
		
	};
	
	// jquery id를 이용하여 set
	scwin.btnJSet_onclick = function(e) {
		$("#mf_ipt1").val("abc");
	};
	
	// jquery id를 이용하여 get
	scwin.btnJGet_onclick = function(e) {
		alert( $("#mf_ipt1").val()  );
	};
	
	// jquery className를 이용하여 set
	scwin.btnJcSet_onclick = function(e) {
		$(".aa").val("def");
	};
	
	// jquery className를 이용하여 get
	scwin.btnJcGet_onclick = function(e) {
		alert( $(".aa").val());
	};
	
	// WebSquare5 에서 jquery id 사용 문법을 이용한  set
	scwin.btnSet1_onclick = function(e) {
		$p.$("#ipt2").val("123");
	};
	
	// WebSquare5 에서 jquery id 사용 문법을 이용한  get
	scwin.btnGet1_onclick = function(e) {
		alert( $p.$("#ipt2").val());
	};
	
	// WebSquare5 에서 jquery className 사용 문법을 이용한  set
	scwin.btnSet2_onclick = function(e) {
		$p.$(".bb").val("567");	
	};
	
	// WebSquare5 에서 jquery className 사용 문법을 이용한  get
	scwin.btnGet2_onclick = function(e) {
		alert( $p.$(".bb").val() );
	};
	
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.aa{background-color:#fad796}.bb{background-color:#c9f7fe}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'section_desc pd10'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',label:'WebSquare5에서 jQuery 사용하는 샘플을 소개 합니다.<br/>( source : fn_jQuery.xml )',tagname:''}}]},{T:1,N:'xf:group',A:{class:'dl_code',id:'',style:'',tagname:'dl'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일반적인 jQuery 사용 ',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'id 기준의 $("#id"), 혹은 class명 기준의 $(".className") 모두 사용이 가능합니다.<br/>(jsp등에서 사용하셨던 문법과 동일합니다.)<br/>다만, websquare5에서는 component가 웹 브라우저에 rendering 될 때 <br/>자체적으로 \'mf\' 라는 prefix를 사용하므로 이를 붙여서 표현해야 합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'dp',id:'',label:'1) id가 \'ipt1\' 인 component에 대한 접근 $("#mf_ipt1")<br/>(websquare5 컴포넌트는 웹 브라우저에 rendering 될 때 \'mf_\' 라는 prefix 가 사용됩니다.)',style:'',tagname:'samp'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 5px'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'ipt1',style:'width: 144px;height: 21px;margin-right: 5px;'}},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;margin-right: 5px;',id:'btnJSet','ev:onclick':'scwin.btnJSet_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'set'}]}]},{T:1,N:'xf:trigger',A:{id:'btnJGet',style:'width: 80px;height: 23px;margin-right: 5px;',type:'button','ev:onclick':'scwin.btnJGet_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'get'}]}]}]},{T:1,N:'w2:textbox',A:{class:'dp',id:'',label:'2) className 이 \'aa\' 인 component에 대한 접근 $(".aa")',style:'',tagname:'samp'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 5px'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',style:'width: 144px;height: 21px;margin-right: 5px;',class:'aa'}},{T:1,N:'xf:trigger',A:{id:'btnJcSet',style:'width: 80px;height: 23px;margin-right: 5px;',type:'button','ev:onclick':'scwin.btnJcSet_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'set'}]}]},{T:1,N:'xf:trigger',A:{id:'btnJcGet',style:'width: 80px;height: 23px;margin-right: 5px;',type:'button','ev:onclick':'scwin.btnJcGet_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'get'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'WebSquare5 에서 jQuery 사용',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'WebSquare5에서는 $p.$("#id") 를 통해 jQuery 문법처럼 이용하실 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'dp',id:'',label:'1) id가 \'ipt2\' 인 component에 대한 접근 $p.$("#ipt2")',style:'',tagname:'samp'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 5px'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'ipt2',style:'width: 144px;height: 21px;margin-right: 5px;'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnSet1_onclick',id:'btnSet1',style:'width: 80px;height: 23px;margin-right: 5px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'set'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnGet1_onclick',id:'btnGet1',style:'width: 80px;height: 23px;margin-right: 5px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'get'}]}]}]},{T:1,N:'w2:textbox',A:{class:'dp',id:'',label:'2) className 이 \'bb\' 인 component에 대한 접근 $p.$(".bb")',style:'',tagname:'samp'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 5px'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',style:'width: 144px;height: 21px;margin-right: 5px;background-color:;',class:'bb'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnSet2_onclick',id:'btnSet2',style:'width: 80px;height: 23px;margin-right: 5px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'set'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btnGet2_onclick',id:'btnGet2',style:'width: 80px;height: 23px;margin-right: 5px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'get'}]}]}]}]}]}]}]}]}]})