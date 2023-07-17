/*amd /sample/compPerf/fn_movePage/hash_page1.xml 1649 7b1c16355a41f0147077e0f987bf9ae8214fc1cece7f7e505b667d9fec3cf792 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.ui_btn01_onclick = function(e) {
		$p.url( "/sample/compPerf/fn_movePage/hash_page2.xml",{spa:true});
	};
	
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:'',style:'min-height: 50px;'},E:[{T:1,N:'w2:textbox',A:{class:'df_tt dmb',id:'',label:'PAGE - hash_page1.xml',style:'background-color: #F0E68C;'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'line-height: 30px;'},E:[{T:1,N:'w2:span',A:{class:'dmr',id:'',label:'Anchor 컴포넌트 :',style:''}},{T:1,N:'w2:anchor',A:{class:'line_br',href:'#w2xPath=/sample/compPerf/fn_movePage/hash_page2.xml',id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'#w2xPath=/sample/compPerf/fn_movePage/hash_page2.xml'}]}]},{T:1,N:'w2:span',A:{class:'dmr',id:'',label:'Trigger 컴포넌트 :',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.ui_btn01_onclick',id:'ui_btn01',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.url( "/sample/compPerf/fn_movePage/hash_page2.xml",{spa:true});'}]}]}]}]}]}]}]})