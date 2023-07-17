/*amd /sample/compFunc/fn_commonCodeSet.xml 5084 9fd0f0713111227c4c3ef8cc1eab888d20b65b519e22fd93c1b01cd71b2d0cdd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}}]},{T:1,N:'script',A:{type:'text/javascript',src:'/js/eduCommon.js'}},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	
	     	scwin.setCommonCode_callback = function(resStr){
	     		//var resJSON = JSON.parse(resStr);
	     		//console.log(resJSON);
	     	};
	        	        
			scwin.onpageload = function() {
				
				com.setCommonCode([
			   			{"code":"101","compID":"ui_genderCode01,ui_genderCode02"}
			   		  , {"code":"102","compID":"ui_hp01"} 
			   		  , {"code":"19","compID":"ui_ccb_role,ui_cbx_role"}],
			   		"scwin.setCommonCode_callback");
			};
			

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.w2checkbox_label:before{position:absolute;left:0;top:5px;content:none;display:inline-block;width:20px;height:20px;border:1px solid #cfd5d8;box-sizing:border-box;background:#fff}.w2radio_label:before{position:absolute;left:1px;top:5px;content:none;display:inline-block;width:20px;height:20px;border:1px solid #cfd5d8;box-sizing:border-box;border-radius:50%;background:#fff}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 10px;',class:'section_desc'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',label:'공통 Function을 통해 코드성 Data와 컴포넌트의 항목을 연동하는 샘플이다.<br/>화면에서는 화면이 로딩되면 공통 Function을 호출하며 코드와 컴포넌트의 정보를 넘겨주도록 되어있다.<br/>(스크립트의 eduObj.fn_ini function 참조)<br/><br/>공통 Function에서의 주요 기능 다음과 같다.( /js/eduCommon.js의 eduCommon.setCommonCode 참고)<br/>- DataCollection 동적 생성<br/>- 컴포넌트의 NodeSet 동적 설정<br/>- Submission 동적 생성 및 실행<br/>( source : fn_commonCodeSet.xml )',tagname:''}}]},{T:1,N:'xf:group',A:{class:'dmb',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'warningTxt',id:'',label:'이 페이지는 DB에서 데이터를 가져오기 때문에 실행 환경이 구성되어야한다.',style:''}}]},{T:1,N:'xf:group',A:{id:'table1',style:'width:100%;',class:'w2tb',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n    				성별코드\n    			'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'ui_genderCode01',cols:'',selectedIndex:'-1',appearance:'full',style:'position: relative;width: 150px;height: 21px;',rows:'1'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'성별코드2'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'ui_genderCode02',disabledClass:'w2selectbox_disabled',appearance:'minimal',style:'width: 148px;height: 21px;',direction:'auto',chooseOption:'false',displayMode:'label',allOption:'false',invalidMessage:'',submenuSize:'auto',disabled:'false',class:'chSize'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n    				휴대폰&nbsp;앞자리\n    			'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'ui_hp01',disabledClass:'w2selectbox_disabled',appearance:'minimal',style:'width: 148px;height: 21px;',direction:'auto',chooseOption:'false',allOption:'false',displayMode:'label',disabled:'false',submenuSize:'auto',class:'chSize'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n    				담당&nbsp;업무\n    			'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:checkcombobox',A:{submenuSize:'auto',allOption:'false',disabled:'false',id:'ui_ccb_role',direction:'auto',displayAllOptionLabel:'false',chooseOption:'false',displayMode:'label',appearance:'minimal',style:'width: 148px;height: 21px;',class:'chSize'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n    				담당&nbsp;업무2\n    				'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{selectedindex:'-1',id:'ui_cbx_role',appearance:'full',style:'min-width: 148px;min-height: 21px;'}}]}]}]}]}]}]}]})