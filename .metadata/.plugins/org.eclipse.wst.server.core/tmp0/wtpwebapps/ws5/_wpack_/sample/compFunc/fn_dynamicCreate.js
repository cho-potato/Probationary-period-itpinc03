/*amd /sample/compFunc/fn_dynamicCreate.xml 4224 a40701e6bb284ba84145b48f59d34b0a87233b84ab371859ae54b047a22d9caa */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
		
	};
	
	scwin.btn_makeBtn_onclick = function(e) {
		// trigger 생성 
		$p.dynamicCreate(
			"btnTest",
			"trigger",
			{
				style : "width:100px; margin-right:5px;"
			   ,className : "btn_cm"
			}, 
			grpParent  //생성할 object의 부모
		);
		
		mf_btnTest.setValue("confirm");
	};
	
	scwin.btn_makeInput_onclick = function(e) {
		// inputBox 생성 
		$p.dynamicCreate(
			"iptTest",
			"input",
			{
				style : "width:100px; height:20px; margin-right:5px;"
				//className : _divStyle
			}, 
			grpParent  //생성할 object의 부모
		);
		
		mf_btnTest.bind( "onclick" , function(){alert(mf_iptTest.getValue());} );
	};
	

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.acd01Box{border-left:1px solid silver;border-right:1px solid silver;border-bottom:1px solid silver}.w2accordion{border-style:none}.w2accordion,.w2panels_content_open{overflow:inherit}.w2accordion.acd01 .w2panels_title{background:0 0;background-color:#497ba4;padding:6px;color:#fff;border-style:none;border-bottom:1px solid #ddd}.w2accordion.acd02 .w2panels_title{background-color:#eee;color:#497ba4;padding:4px 6px;border-style:none;border-bottom:1px solid #dbdbdb}.w2accordion.acd01 .w2panel_title_text{font-size:14px}.w2accordion.acd02 .w2panel_title_text{font-size:12px}.w2accordion .w2panels_title{overflow:hidden}.w2accordion .w2panels_title span{float:left}.w2accordion .w2panels_title div{float:right}.w2accordion .w2panels_title_image{background:url(/ws5/img/accordion_close01.png) no-repeat center center;background-size:16px}.w2accordion .w2panels_title_image_open{background:url(/ws5/img/accordion_open01.png) no-repeat center center;background-size:16px}.w2accordion .w2panels{border-style:none}.w2accordion .w2panel_title_text{line-height:25px;padding-top:0;vertical-align:none}.genProduct>.w2group,.w2panels_content_open>.w2group{border-top:1px solid #eee}.genProduct>.w2group:first-child,.w2panels_content_open>.w2group:first-child{border-top-style:none}.txtOpt{padding:6px 20px;background-color:#64c0be;color:#fff}.txtAmount{font-weight:700;font-size:24px;margin-right:10px}.txtAmount::after,.txtAmount:after{content:" 원";font-size:12px;color:#999}.txtTot{color:tomato;font-weight:700;font-size:24px}.txtTot::after,.txtTot:after{content:"원";font-size:12px}.btnTotAch{display:block;text-align:center;background-color:tomato}.btnTotAch a{display:block;line-height:50px;color:#fff;font-weight:700;font-size:24px}.btnTotAch a::after,.btnTotAch a:after{content:"원 결제하기";font-size:14px;font-weight:400}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:'',class:'section_desc'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'',label:'API를 이용하여 동적으로 컴포넌트를 생성하는 샘플이다.<br/>( source : fn_dynamicCreate.xml )'}}]},{T:1,N:'xf:group',A:{class:'mb20',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ofh dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt fl',id:'',label:'컴포넌트 동적생성',style:'',tagname:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.btn_makeInput_onclick',id:'btn_makeInput',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'input 생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.btn_makeBtn_onclick',id:'btn_makeBtn',style:'w',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼 생성'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'grpParent',style:'border: 1px solid olive;padding: 10px;'}}]}]}]}]}]})