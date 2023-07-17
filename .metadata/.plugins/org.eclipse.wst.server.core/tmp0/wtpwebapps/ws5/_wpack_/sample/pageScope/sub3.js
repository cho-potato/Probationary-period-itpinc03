/*amd /sample/pageScope/sub3.xml 5972 c511de35fcc62062f4559a153f9d1eac7cb8b83ae09c5a9e71bed82d5d53104a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				
			};
			
			scwin.first_trigger1_onclick = function(e) {
				alert($p.parent().$p.parent().$p.parent().ipt1.getValue());
			};
			
			scwin.first_trigger2_onclick = function(e) {
				alert($p.parent().$p.parent().$p.parent().ipt2.getValue());
			};
			
			scwin.main_trigger1_onclick = function(e) {
				alert($p.parent().$p.parent().ipt1.getValue());
			};
			
			scwin.main_trigger2_onclick = function(e) {
				alert($p.parent().$p.parent().ipt2.getValue());
			};
			
			scwin.wframe1_trigger1_onclick = function(e) {
				alert($p.parent().$p.parent().wframe1.getWindow(0).ipt1.getValue());
			};
			
			scwin.wframe1_trigger2_onclick = function(e) {
				alert($p.parent().$p.parent().wframe1.getWindow(0).ipt2.getValue());
			};
			
			scwin.wframe2_trigger1_onclick = function(e) {
				alert($p.parent().$p.parent().wframe2.getWindow(0).ipt1.getValue());
			};
			
			scwin.wframe2_trigger2_onclick = function(e) {
				alert($p.parent().$p.parent().wframe2.getWindow(0).ipt2.getValue());
			};
			
			scwin.wframe11_trigger1_onclick = function(e) {
				alert($p.parent().$p.parent().wframe1.getWindow(0).wframe11.getWindow(0).ipt1.getValue());
			};
			
			scwin.wframe11_trigger2_onclick = function(e) {
				alert($p.parent().$p.parent().wframe1.getWindow(0).wframe11.getWindow(0).ipt2.getValue());
			};
			
			scwin.wframe22_trigger1_onclick = function(e) {
				alert($p.parent().$p.parent().wframe2.getWindow(0).wframe22.getWindow(0).ipt1.getValue());
			};
			
			scwin.wframe22_trigger2_onclick = function(e) {
				alert($p.parent().$p.parent().wframe2.getWindow(0).wframe22.getWindow(0).ipt2.getValue());
			};
	
		
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:'',class:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'width:100%;margin-bottom: 10px;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100.00%',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'btnbox',style:'',tagname:'td'},E:[{T:1,N:'xf:trigger',A:{id:'first_trigger1',style:'margin-right: 10px;',type:'button','ev:onclick':'scwin.first_trigger1_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'first input1 value'}]}]},{T:1,N:'xf:trigger',A:{id:'first_trigger2',style:'margin-right: 10px;',type:'button','ev:onclick':'scwin.first_trigger2_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'first input2 value'}]}]},{T:1,N:'xf:trigger',A:{id:'main_trigger1',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.main_trigger1_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'main input1 value'}]}]},{T:1,N:'xf:trigger',A:{id:'main_trigger2',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.main_trigger2_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'main input2 value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'btnbox',style:'',tagname:'td'},E:[{T:1,N:'xf:trigger',A:{id:'wframe1_trigger1',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.wframe1_trigger1_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe1 input1 value'}]}]},{T:1,N:'xf:trigger',A:{id:'wframe1_trigger2',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.wframe1_trigger2_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe1 input2 value'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.wframe2_trigger1_onclick',id:'wframe2_trigger1',style:'margin-right:10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe2 input1 value'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.wframe2_trigger2_onclick',id:'wframe2_trigger2',style:'margin-right:10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe2 input2 value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'btnbox',style:'',tagname:'td'},E:[{T:1,N:'xf:trigger',A:{id:'wframe11_trigger1',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.wframe11_trigger1_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe11 input1 value'}]}]},{T:1,N:'xf:trigger',A:{id:'wframe11_trigger2',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.wframe11_trigger2_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe11 input2 value'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.wframe22_trigger1_onclick',id:'wframe22_trigger1',style:'margin-right:10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe22 input1 value'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.wframe22_trigger2_onclick',id:'wframe22_trigger2',style:'margin-right:10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe22 input2 value'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'padding: 10px;border: 1px solid olive;',id:'',class:''},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 144px;height: 21px;margin-right: 10px',id:'ipt1'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 144px;height: 21px;',id:'ipt2'}}]}]}]}]}]})