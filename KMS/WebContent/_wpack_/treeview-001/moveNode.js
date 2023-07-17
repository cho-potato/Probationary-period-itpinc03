/*amd /treeview-001/moveNode.xml 4984 c577e9efafe4b3418dd5b76ca163e7cd09c77fdaf40ced198246af5a294aae0b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'treeList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'tree_name',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tree_id',name:'ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tree_depth',name:'값',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'tree_name',E:[{T:4,cdata:'전체'}]},{T:1,N:'tree_id',E:[{T:4,cdata:'t0'}]},{T:1,N:'tree_depth',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'tree_name',E:[{T:4,cdata:'인사관리체계'}]},{T:1,N:'tree_id',E:[{T:4,cdata:'t1'}]},{T:1,N:'tree_depth',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'tree_name',E:[{T:4,cdata:'a'}]},{T:1,N:'tree_id',E:[{T:4,cdata:'t2'}]},{T:1,N:'tree_depth',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'tree_name',E:[{T:4,cdata:'b'}]},{T:1,N:'tree_id',E:[{T:4,cdata:'t3'}]},{T:1,N:'tree_depth',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'tree_name',E:[{T:4,cdata:'조직관리'}]},{T:1,N:'tree_id',E:[{T:4,cdata:'t4'}]},{T:1,N:'tree_depth',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'tree_name',E:[{T:4,cdata:'c'}]},{T:1,N:'tree_id',E:[{T:4,cdata:'t5'}]},{T:1,N:'tree_depth',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'tree_name',E:[{T:4,cdata:'d'}]},{T:1,N:'tree_id',E:[{T:4,cdata:'t6'}]},{T:1,N:'tree_depth',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'tree_name',E:[{T:4,cdata:'인사관리'}]},{T:1,N:'tree_id',E:[{T:4,cdata:'t7'}]},{T:1,N:'tree_depth',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'tree_name',E:[{T:4,cdata:'e'}]},{T:1,N:'tree_id',E:[{T:4,cdata:'t8'}]},{T:1,N:'tree_depth',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'tree_name',E:[{T:4,cdata:'f'}]},{T:1,N:'tree_id',E:[{T:4,cdata:'t9'}]},{T:1,N:'tree_depth',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	scwin.moveUp_onclick = function(e) {
		// 선택한 노드의 객체 반환
		var tmpRs = treeview.getSelectedNode();
		
		console.log(tmpRs);
		
		// 상위 노드의 기준에서 볼 때 선택한 노드의 index
		var depthIndex = tmpRs.depthIndex;
		
		// 위치를 변경할 노드의 index (선택한 노드의 index)
		var srcIndex;
		// 옮기고자 하는 노드의 index
		var destIndex;
		
		if (depthIndex > 2) {
			srcIndex = tmpRs.index;
			destIndex = tmpRs.parentNode.childNodes[depthIndex-3].index;
			treeview.moveNode(srcIndex, destIndex, false);
		}else if(depthIndex <= 2) {
			srcIndex = tmpRs.index;
			destIndex = tmpRs.parentNode.index;
			treeview.moveNode(srcIndex, destIndex, true);
		}
	};
	
	scwin.moveDown_onclick = function(e) {
		// 선택한 노드의 객체 반환
		var tmpRs = treeview.getSelectedNode();
		
		console.log(tmpRs);
		
		// 상위 노드의 기준에서 볼 때 선택한 노드의 index
		var depthIndex = tmpRs.depthIndex;
		
		// 위치를 변경할 노드의 index (선택한 노드의 index)
		var srcIndex;
		// 옮기고자 하는 노드의 index
		var destIndex;
		
		if(depthIndex < tmpRs.parentNode.childNodes.length+1) {
			srcIndex = tmpRs.index;
			destIndex = tmpRs.parentNode.childNodes[tmpRs.depthIndex].index; 
			treeview.moveNode(srcIndex, destIndex, false);
		}
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:treeview',A:{id:'treeview',dataType:'listed',tooltipGroupClass:'false',style:'width:200px;height:420px;','ev:onlabelclick':''},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:treeList'},E:[{T:1,N:'w2:label',A:{ref:'tree_name'}},{T:1,N:'w2:value',A:{ref:'tree_id'}},{T:1,N:'w2:depth',A:{ref:'tree_depth'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;margin-right: 40px;',id:'moveUp','ev:onclick':'scwin.moveUp_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'위로 이동'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px;height: 23px;',id:'moveDown','ev:onclick':'scwin.moveDown_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아래로 이동'}]}]}]}]}]})