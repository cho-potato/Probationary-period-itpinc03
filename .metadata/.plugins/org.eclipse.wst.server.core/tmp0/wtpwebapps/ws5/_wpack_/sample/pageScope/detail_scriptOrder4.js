/*amd /sample/pageScope/detail_scriptOrder4.xml 1541 8a5b06bc16ffcadc057700cd90d903678353fd303ca9cfc1c3e74ce414084b11 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				ipt1.setValue( "WFrame4" );
				$p.parent().$p.parent().textarea1.setValue( $p.parent().$p.parent().textarea1.getValue() + ipt1.getValue() + "\n" );
			};
			
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:'',class:''},E:[{T:1,N:'xf:group',A:{class:'searchbox dmb',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130.00px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'wframe2_wframe4'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'ofh fl',id:'',style:''}},{T:1,N:'xf:input',A:{id:'ipt1',style:'width:150px;'}}]}]}]}]}]}]}]}]})