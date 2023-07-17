/*amd /SelectBox/preventKeyList_SelectBox.xml 1980 48d7a237f92129496242fd416591992780b29987242795b893f1ecef430297de */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'value',name:'name2'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'0'}]},{T:1,N:'value',E:[{T:4,cdata:'Seoul'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'1'}]},{T:1,N:'value',E:[{T:4,cdata:'Busan'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'2'}]},{T:1,N:'value',E:[{T:4,cdata:'Daejeon'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'3'}]},{T:1,N:'value',E:[{T:4,cdata:'Jeju'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'4'}]},{T:1,N:'value',E:[{T:4,cdata:'Incheon'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'select1',ref:'',style:'width:220px;height:49px;left:31px;margin: 100px;',submenuSize:'auto',labelWidthAuto:'',preventKeyList:'38,40,13'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'value'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]})