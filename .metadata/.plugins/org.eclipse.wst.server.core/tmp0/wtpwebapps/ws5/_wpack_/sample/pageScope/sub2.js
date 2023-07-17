/*amd /sample/pageScope/sub2.xml 1948 e3de389aafff7e9e0f426e79bb023c0efd2ed21cb05e64e0c35320ba675cb8f0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:aliasDataList',A:{scope:'../dataList1',id:'aliasDataList1'}}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				
			};
			
			scwin.wframe1_dataListVal_onclick = function(e) {
				alert(aliasDataList1.getCellData( 0 , "col1" ));
			};
		
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:'',class:''},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;margin-bottom: 10px;border: 1px solid olive;',id:'',class:''},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 144px;height: 21px;margin-right: 10px;',id:'ipt1'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 144px;height: 21px;margin-right: 10px;',id:'ipt2'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.wframe1_dataListVal_onclick',id:'wframe1_dataListVal',style:'margin-right:10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframe1 DataList value'}]}]}]},{T:1,N:'w2:tabControl',A:{confirmTrueAction:'exist',useTabKeyOnly:'true',confirmFalseAction:'new',useMoveNextTabFocus:'false',useConfirmMessage:'false',alwaysDraw:'false',style:'height: 200px;',id:'wframe11'},E:[{T:1,N:'w2:content',A:{src:'/sample/pageScope/sub3.xml',scope:'true',alwaysDraw:'false',style:'height:170px;',frameMode:'wframePreload',id:'content2'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:85px;height:30px;',label:'wframe 11',id:'tabs2'}}]}]}]}]}]})