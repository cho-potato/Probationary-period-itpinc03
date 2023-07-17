/*amd /sample/compFunc/fn_jsonUtils.xml 3873 e462362af7352134f5d301136b2c9c13cffc29163946fba0f3372834a0704088 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.txtbold{font-weight:700;color:#00f}'}]},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function(){
 
	scwin.btn_execute_onclick = function(e) {
		eval(ui_txa.getValue());
	};
	
	scwin.btn_InitScript_onclick = function(e) {
		ui_txa.setValue( "" );
	};
	
	scwin.btn_onclick = function(e) {
		var tmpId = (this.getID()).replace("btn_","txt_");
		var tmpVal = scwin.getScriptString( $p.getComponentById(tmpId).getValue() );
		ui_txa.setValue( tmpVal );
		scwin.btn_execute_onclick();
	};
	
	scwin.getScriptString = function(tmpStr){
		return tmpStr.replace(/<br.*?>/ig,"\n").replace(/<.*?>/ig,"");
	};
	
}
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'JSON 관련 기본 API 예시입니다.<br/>( source : fn_jsonUtils.xml )',style:'line-height: 18px;'}}]},{T:1,N:'xf:group',A:{class:'mb20',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ofh dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt fl',id:'',label:'테스트',style:'',tagname:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm sch fr','ev:onclick':'scwin.btn_execute_onclick',id:'btn_execute',style:'width: 80px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch fr','ev:onclick':'scwin.btn_InitScript_onclick',id:'btn_InitScript',style:'width: 80px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]}]},{T:1,N:'xf:group',A:{class:'dmb',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{id:'ui_txa',style:'width:100%;height: 150px;line-height: 18px;',placeholder:'스크립트를 넣고 [실행]버튼을 클릭하면 입력한 스크립트가 실행됩니다.'}}]}]},{T:1,N:'xf:group',A:{class:'mb20',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ofh dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt fl',id:'',label:'String to JSON - JSON.parse',style:'',tagname:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm sch fr','ev:onclick':'scwin.btn_onclick',id:'btn_JSONParse',style:'width: 80px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]}]},{T:1,N:'w2:textbox',A:{class:'dp',id:'txt_JSONParse',label:'var jsonStr = \'{"No":"1", "name":"WebSquare"}\';<br/>var jsonObj = <span class=\'txtbold\'>JSON.parse</span>( jsonStr );<br/><br/>//테스트<br/>alert(jsonObj.name);',style:'',tagname:'samp'}}]},{T:1,N:'xf:group',A:{class:'mb20',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ofh dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt fl',id:'',label:'JSON to String - JSON.stringify',style:'',tagname:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm sch fr','ev:onclick':'scwin.btn_onclick',id:'btn_JSONStringify',style:'width: 80px;',type:'button',disabled:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]}]},{T:1,N:'w2:textbox',A:{class:'dp',id:'txt_JSONStringify',label:'var jsonObj = {"No":"2", "name":"WebSquare"};<br/>var jsonStr = <span class=\'txtbold\'>JSON.stringify</span>( jsonObj );<br/>var jsonStrWithTab = <span class=\'txtbold\'>JSON.stringify</span>( jsonObj ,null,"\\t");<br/><br/>//테스트<br/>//alert( jsonObj ); //[object Object]로 표현됨 (chrome브라우저)<br/>alert( jsonStr );<br/>//alert( jsonStrWithTab );',style:'',tagname:'samp'}}]}]}]}]}]})