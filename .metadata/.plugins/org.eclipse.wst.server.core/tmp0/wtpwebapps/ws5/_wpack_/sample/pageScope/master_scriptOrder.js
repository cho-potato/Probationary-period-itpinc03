/*amd /sample/pageScope/master_scriptOrder.xml 2495 862812389f44fbe8d6565c5ddd4411acb4f54e12744542c3ca7a1a783c992514 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				ipt1.setValue( "Main" );
				textarea1.setValue( textarea1.getValue() + ipt1.getValue() + "\n" );
			};
		
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'page coding 사용 가이드 - script loading 순서<br/>(config_scriptOrer.xml 파일을 config.xml파일로 변경하여 사용한다. 기존파일은 backup)',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'searchbox dmb',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'Main&nbsp;Page입력값'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'ofh fl',id:'',style:''}},{T:1,N:'xf:input',A:{id:'ipt1',style:'width:150px;'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'overflow: hidden;padding: 5px',id:'',class:'defaultbox'},E:[{T:1,N:'w2:wframe',A:{style:'width: 35%;height: 380px;float: left;margin-right: 20px;border: 1px solid green',id:'wframe1',src:'/sample/pageScope/detail_scriptOrder1.xml',scope:'true'}},{T:1,N:'w2:wframe',A:{style:'width: 35%;height: 380px;float: left;margin-right: 20px;border: 1px solid green',id:'wframe2',scope:'true',src:'/sample/pageScope/detail_scriptOrder2.xml'}},{T:1,N:'xf:group',A:{style:'width: 25%;height: 380px;float: right;',id:''},E:[{T:1,N:'w2:textbox',A:{label:'Script loading 순서',style:'margin-bottom: 10px;',id:'',tagname:'h2'}},{T:1,N:'xf:textarea',A:{style:'width: 100%;height: 90%',id:'textarea1'}}]}]}]}]}]}]})