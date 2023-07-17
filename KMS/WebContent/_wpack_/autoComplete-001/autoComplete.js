/*amd /autoComplete-001/autoComplete.xml 2356 f598d224f4c7b708cb1f61c4ba4d27f3555ce1b5dde377f61cad0c57865940a7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList2',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,{"id":"dataList2","key":"data"}',action:'/KMS/TechDB/autoComplete-001/ac_data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.submission1_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
			
		};
		
		scwin.onpageunload = function() {
			
		};
        
        scwin.subfunc = function(searchStr, keyCode){
       		console.log(searchStr);
        	$p.executeSubmission( "submission1", searchStr);
        };        
         
		scwin.submission1_submitdone = function(e) {
			autoComplete1.setItemSet("data:dataList2","label","value");
			autoComplete1.openTable();
		};     
		
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:autoComplete',A:{visibleRowNum:'10',chooseOption:'',id:'autoComplete1',style:'position: absolute ;left:21px;top:22px;width: 148px;height: 21px;',search:'',interactionMode:'true',displayMode:'label',useKeywordHighlight:'true',submenuSize:'auto',editType:'select',allOption:'',submission:'',ref:'',noResult:'',keyInputRef:'',submissionFunc:'scwin.subfunc',allowEmptySubmission:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:''},E:[{T:1,N:'w2:label',A:{ref:''}},{T:1,N:'w2:value',A:{ref:''}}]}]}]}]}]}]})