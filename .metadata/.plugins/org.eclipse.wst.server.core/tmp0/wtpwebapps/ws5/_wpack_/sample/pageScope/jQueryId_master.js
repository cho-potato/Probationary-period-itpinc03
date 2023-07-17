/*amd /sample/pageScope/jQueryId_master.xml 2855 57d0838be737bbfd14c5765da898ac614d334d83b9ecf6e805ce53e7c2df2633 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

			scwin.onpageload = function() {
		
			};
		
			scwin.myBtn_onclick = function(e) {
				/* $p.$ 라는 API를 이용하면, 
				 * jQuery selector를 인자로 받아 jQuery 객체를 반환한다. 
				 */
				alert($p.$("#ipt").val()); // master page의 ipt 객체의 값을 반환
			};
		
			scwin.childBtn_onclick = function(e) {
				alert(wframeTab.getWindow(0).$p.$("#ipt").val());
			};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'page coding 사용 가이드 - jQuery Id를 이용하여 객체에 접근하기($p.$ 사용)<br/>',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'searchbox dmb',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Main&nbsp;Page입력값'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'ofh fl',id:'',style:''}},{T:1,N:'xf:input',A:{id:'ipt',style:'width:150px;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.childBtn_onclick',id:'childBtn',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Child(tab) Page'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.myBtn_onclick',id:'myBtn',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'My Page'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'defaultbox'},E:[{T:1,N:'w2:tabControl',A:{useTabKeyOnly:'true',id:'wframeTab',useMoveNextTabFocus:'false',useConfirmMessage:'false',confirmTrueAction:'exist',confirmFalseAction:'new',alwaysDraw:'false',style:'height: 200px;'},E:[{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height:170px;',id:'content1',frameMode:'wframePreload',scope:'true',src:'/sample/pageScope/jQueryId_detail.xml'}},{T:1,N:'w2:tabs',A:{label:'wframe scope tab',disabled:'false',style:'width:150px;height:30px;',id:'tabs1',tabWidth:'150'}}]}]}]}]}]}]})