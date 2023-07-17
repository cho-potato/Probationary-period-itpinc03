/*amd /sample/pageScope/wframeScope.xml 6578 7fb118f8147dde4c9be4beca7c8afa0608d76dc4eb9af0e6895c6c4c1ab7d1f0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'mainDataMap'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'key1',E:[{T:4,cdata:'mainDataMap'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				
			};
			
			scwin.trigger1_onclick = function(e) {
				alert(ipt1.getValue());
			};
			
			scwin.trigger2_onclick = function(e) {
				alert(ipt2.getValue());
			};
			
			scwin.main_trigger1_onclick = function(e) {
				alert(wMain.getWindow(0).ipt1.getValue());
			};
			
			scwin.main_trigger2_onclick = function(e) {
				alert(wMain.getWindow(0).ipt2.getValue());
			};
			
			scwin.wframe1_trigger1_onclick = function(e) {
				alert(wMain.getWindow(0).wframe1.getWindow(0).ipt1.getValue());
			};
			
			scwin.wframe1_trigger2_onclick = function(e) {
				alert(wMain.getWindow(0).wframe1.getWindow(0).ipt2.getValue());
			};
			
			scwin.wframe2_trigger1_onclick = function(e) {
				alert(wMain.getWindow(0).wframe2.getWindow(0).ipt1.getValue());
			};
			
			scwin.wframe2_trigger2_onclick = function(e) {
				alert(wMain.getWindow(0).wframe2.getWindow(0).ipt2.getValue());
			};
			
			scwin.wframe11_trigger1_onclick = function(e) {
				alert(wMain.getWindow(0).wframe1.getWindow(0).wframe11.getWindow(0).ipt1.getValue());
			};
			
			scwin.wframe11_trigger2_onclick = function(e) {
				alert(wMain.getWindow(0).wframe1.getWindow(0).wframe11.getWindow(0).ipt2.getValue());
			};
			
			scwin.wframe22_trigger1_onclick = function(e) {
				alert(wMain.getWindow(0).wframe2.getWindow(0).wframe22.getWindow(0).ipt1.getValue());
			};
			
			scwin.wframe22_trigger2_onclick = function(e) {
				alert(wMain.getWindow(0).wframe2.getWindow(0).wframe22.getWindow(0).ipt2.getValue());
			};
		
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'다층 구조의 page coding Sample Page',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{style:'margin-bottom: 10px;border: 1px solid olive;padding: 10px;',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100.00%'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'btnbox'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'margin-right: 10px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'input1 value'}]}]},{T:1,N:'xf:trigger',A:{id:'trigger2',style:'margin-right: 10px;',type:'button','ev:onclick':'scwin.trigger2_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'input2 value'}]}]},{T:1,N:'xf:trigger',A:{id:'main_trigger1',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.main_trigger1_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'main input1 value'}]}]},{T:1,N:'xf:trigger',A:{id:'main_trigger2',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.main_trigger2_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'main input2 value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'btnbox'},E:[{T:1,N:'xf:trigger',A:{id:'wframe1_trigger1',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.wframe1_trigger1_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe1 input1 value'}]}]},{T:1,N:'xf:trigger',A:{id:'wframe1_trigger2',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.wframe1_trigger2_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe1 input2 value'}]}]},{T:1,N:'xf:trigger',A:{id:'wframe2_trigger1',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.wframe2_trigger1_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe2 input1 value'}]}]},{T:1,N:'xf:trigger',A:{id:'wframe2_trigger2',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.wframe2_trigger2_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe2 input2 value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'btnbox'},E:[{T:1,N:'xf:trigger',A:{id:'wframe11_trigger1',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.wframe11_trigger1_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe11 input1 value'}]}]},{T:1,N:'xf:trigger',A:{id:'wframe11_trigger2',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.wframe11_trigger2_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe11 input2 value'}]}]},{T:1,N:'xf:trigger',A:{id:'wframe22_trigger1',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.wframe22_trigger1_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe22 input1 value'}]}]},{T:1,N:'xf:trigger',A:{id:'wframe22_trigger2',style:'margin-right:10px;',type:'button','ev:onclick':'scwin.wframe22_trigger2_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe22 input2 value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'padding: 10px;border: 1px solid olive;margin-bottom: 10px;',id:'',class:''},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 144px;height: 21px;margin-right: 10px;',id:'ipt1'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 144px;height: 21px;',id:'ipt2'}}]},{T:1,N:'w2:tabControl',A:{confirmTrueAction:'exist',useTabKeyOnly:'true',confirmFalseAction:'new',useMoveNextTabFocus:'false',useConfirmMessage:'false',alwaysDraw:'false',style:'height: 480px;',id:'wMain'},E:[{T:1,N:'w2:content',A:{src:'/sample/pageScope/sub1.xml',scope:'true',alwaysDraw:'false',style:'height:450px;padding: 10px;',frameMode:'wframePreload',id:'content1'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px;',label:'main',id:'tabs1'}}]}]}]}]}]})