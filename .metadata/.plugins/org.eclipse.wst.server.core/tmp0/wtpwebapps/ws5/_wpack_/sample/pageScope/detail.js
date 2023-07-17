/*amd /sample/pageScope/detail.xml 2058 8cc32ff6efc685f4f95e74ab14043425932ceb4b975a78f007561dd8a1ad75e7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				
			};
			
			scwin.parentBtn_onclick = function(e) {
				// 부모 Page의 객체는 $p.parent()라는 API를 통해 접근한다.
				alert( $p.parent().ipt.getValue() );
			};
			
			scwin.myBtn_onclick = function(e) {
				// 자신의 Page내의 객체는 id를 그대로 사용한다.
				alert(ipt.getValue());
			};
		

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:'',class:''},E:[{T:1,N:'xf:group',A:{class:'searchbox dmb',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Child&nbsp;Page&nbsp;입력값'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'ofh fl',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ipt',style:'width:150px;'}}]},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.myBtn_onclick',id:'myBtn',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'My Page'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.parentBtn_onclick',id:'parentBtn',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Parent Page'}]}]}]}]}]}]}]}]}]}]})