/*amd /sample/pageScope/sub2-2.xml 1922 8a8031f0e929fc294c61cd398cd78914ff9bae8a8e22cd754867dd22ad7e5ec2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:aliasDataMap',A:{scope:'../../mainDataMap',id:'aliasDataMap1'}}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				
			};
			
			scwin.main_dataMapVal_onclick = function(e) {
				alert(aliasDataMap1.get( "key1" ));
			};
		
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:'',class:''},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;margin-bottom: 10px;border: 1px solid olive;',id:'',class:''},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 144px;height: 21px;margin-right: 10px;',id:'ipt1'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 144px;height: 21px;margin-right: 10px;',id:'ipt2'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.main_dataMapVal_onclick',id:'main_dataMapVal',style:'margin-right:10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'main DataMap value'}]}]}]},{T:1,N:'w2:tabControl',A:{confirmTrueAction:'exist',useTabKeyOnly:'true',confirmFalseAction:'new',useMoveNextTabFocus:'false',useConfirmMessage:'false',alwaysDraw:'false',style:'height: 200px;',id:'wframe22'},E:[{T:1,N:'w2:content',A:{src:'/sample/pageScope/sub3.xml',scope:'true',alwaysDraw:'false',style:'height:170px;',frameMode:'wframePreload',id:'content2'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:85px;height:30px;',label:'wframe 22',id:'tabs2'}}]}]}]}]}]})