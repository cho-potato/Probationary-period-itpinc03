/*amd /sample/compFunc/fn_multiLang_client.xml 5898 118bfc303765359389993b4705d4ef43cd27836465f08b4ca540663a17789f17 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	scwin.onpageload = function() {
		var lang = WebSquare.cookie.getCookie( "system_language");
		if ( !lang ) {
			lang = "ko";
		}
		
		ui_lang.setValue(lang);
		
	};
	
	scwin.ui_lang_onviewchange = function(info) {
		WebSquare.cookie.setCookie( "system_language" , ui_lang.getValue() );
		//$p.url("/ws5/sample/compFunc/fn_multiLang_client.xml");
		$p.reinitialize( true );

	};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'section_desc'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'',label:'클라이언트 다국어 예제이다.<br/>다국어 테스트를 위해서는 아래의 설정 파일을 변경한다..<br/>1. websquare.xml 설정<br/>- c:\\WS5\\resource\\websquare_home\\config의 설정을 websquare.xml로 변경하여 적용한다.<br/>- &nbsp;websquare_basic.xml ( 기본 설정 )<br/><br/>2. config.xml 설정<br/>- C:\\WS5\\eduWorkspace\\ws5\\src\\main\\webapp\\websquare의 설정을 config.xml로 변경하여 적용한다.<br/>- &nbsp;config_basic.xml ( 기본 설정 )<br/><br/>( source : fn_multiLang_client.xml)'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'ofh dmb'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto','ev:onchange':'',chooseOption:'',allOption:'',displayMode:'label',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled','ev:onviewchange':'scwin.ui_lang_onviewchange',optionOrder:'false',style:'width: 148px;',disabled:'false',id:'ui_lang',class:'fr defComp',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Korean'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ko'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'English'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'en'}]}]}]}]}]},{T:1,N:'w2:textbox',A:{tagname:'h2',localeRef:'title0001',style:'',label:'',id:'',class:'df_tt dmb'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'searchbox dmb ofh dp'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'',localeRef:'label000',style:'',id:'',type:'button',class:'btnRed fr',useLocale:'true'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:group',A:{adaptive:'layout',tagname:'table',adaptiveThreshold:'700',style:'width:100%;',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{localeRef:'label001',style:'',label:'',id:'',useLocale:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{ref:'',style:'width: 144px;',id:'',initValue:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{localeRef:'label002',style:'',label:'',id:'',useLocale:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{selectedData:'true',submenuSize:'auto',chooseOption:'',allOption:'',displayMode:'label',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',optionOrder:'false',disabled:'false',style:'width: 148px;height: 21px;',id:'',direction:'auto'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{localeRef:'label003',style:'',label:'',id:'',useLocale:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{ref:'',footerDiv:'false',rightAlign:'false',focusOnDateSelect:'false',style:'width: 150px;height: 24px;',id:'',renderType:'component',weekStartsOn:'0',renderDiv:'true',calendarValueType:'yearMonthDate'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{localeRef:'label004',style:'',label:'',id:'',useLocale:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{localeRef:'label005',style:'',label:'',id:'',useLocale:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{ref:'',style:'width: 100%;',id:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{localeRef:'label006',style:'',label:'',id:'',useLocale:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'min-width: 150px;min-height: 12px;',id:'',selectedindex:'-1',rows:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:''},E:[{T:1,N:'xf:label',A:{ref:''}},{T:1,N:'xf:value',A:{ref:''}}]}]}]}]}]}]}]}]}]}]})