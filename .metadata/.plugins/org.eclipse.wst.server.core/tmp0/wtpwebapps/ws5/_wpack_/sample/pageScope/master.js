/*amd /sample/pageScope/master.xml 3024 b5f76ad7d4266b9c22092732ec40cca24c7733514ece0ff78b4e34043a67c353 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				
			};
			
			scwin.myBtn_onclick = function(e) {
				// 자신의 Page내의 객체는 id를 그대로 사용한다.
				alert(ipt.getValue());
			};
			
			scwin.childBtn_onclick = function(e) {
				// 하위 Page의 객체 접근시에는 getWindow라는 API를 통해 접근한다.
				alert(wframeTab.getWindow(0).ipt.getValue());
			};
		

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'page coding 사용 가이드 - tab의 wframe Mode를 이용한 coding 가이드<br/>부모 페이지 와 자식 페이지에 &nbsp;동일한 ID가 있어도 사용 가능한 형태<br/>Main => tab Page 접근 tabID.getWindow(idx) 접근<br/>tab Page => Main 접근 $p.parent() 접근',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'searchbox dmb',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Main&nbsp;Page입력값'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'ofh fl',id:'',style:''}},{T:1,N:'xf:input',A:{id:'ipt',style:'width:150px;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.childBtn_onclick',id:'childBtn',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Child(tab) Page'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.myBtn_onclick',id:'myBtn',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'My Page'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'defaultbox'},E:[{T:1,N:'w2:tabControl',A:{useTabKeyOnly:'true',id:'wframeTab',useMoveNextTabFocus:'false',useConfirmMessage:'false',confirmTrueAction:'exist',confirmFalseAction:'new',alwaysDraw:'false',style:'height: 200px;'},E:[{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height:170px;',id:'content1',frameMode:'wframePreload',scope:'true',src:'/sample/pageScope/detail.xml'}},{T:1,N:'w2:tabs',A:{label:'wframe scope tab',disabled:'false',style:'width:150px;height:30px;',id:'tabs1',tabWidth:'150'}}]}]}]}]}]}]})