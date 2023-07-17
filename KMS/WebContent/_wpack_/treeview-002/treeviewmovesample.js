/*amd /treeview-002/treeviewmovesample.xml 5731 f24cea246075a039b309481f6850ea8944c194bfd6e9ef7ed7551ce671f179da */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dl_tree',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'menu_no',name:'name1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'menu_nm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'level',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dl_tree1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'menu_no',name:'name1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'menu_nm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'level',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'templist',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'menu_no',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menu_nm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'level',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        var flag = true;
		scwin.onpageload = function() {
	        var jsonData1 = [{"menu_no":1, "menu_nm":"공통", "level":"1"},
	        				 {"menu_no":2, "menu_nm":"공통1", "level":"2"},
	        				 {"menu_no":3, "menu_nm":"공통1-1", "level":"3"},
	        				 {"menu_no":4, "menu_nm":"수신", "level":"1"},
	        				 {"menu_no":5, "menu_nm":"수신1", "level":"2"},
	        				 {"menu_no":6, "menu_nm":"여신", "level":"1"},
	        				 {"menu_no":7, "menu_nm":"고객", "level":"1"}];
	        
	        var jsonData2 = [{"menu_no":1, "menu_nm":"공통", "level":"1"},
	        				 {"menu_no":7, "menu_nm":"고객", "level":"1"}];
	        
	        dl_tree.setJSON(jsonData1);
	        dl_tree1.setJSON(jsonData2);
		};
		
		scwin.onpageunload = function() {
		
		};
        
		scwin.trigger1_onclick = function(e) {
			//debugger;			
			var index = treeview1.getSelectedIndex();
			templist.removeAll();
			var arr = new Array();
			
			for (var i = index - 1; i <= dl_tree.getRowCount(); i++) {
				if(dl_tree.getCellData(i ,"level") == "1") {
					if(flag) {
						templist.setRowJSON(i ,dl_tree.getRowJSON(i));
						flag = false;
						arr.push(i);
					} else {
						break;
					}
				} else {
					templist.setRowJSON(i ,dl_tree.getRowJSON(i));
					arr.push(i);
				}
			}
			dl_tree.removeRows(arr);
			
			dl_tree1.insertJSON(0, templist.getAllJSON());
			dl_tree1.sort( "menu_no" , 0 );
			
			flag = true;
		};
		
		scwin.trigger2_onclick = function(e) {
//			debugger;
						
			var index = treeview2.getSelectedIndex();
			templist.removeAll();
			var arr = new Array();
			
			for (var i = index - 1; i <= dl_tree1.getRowCount(); i++) {
				if(dl_tree1.getCellData(i ,"level") == "1") {
					if(flag) {
						templist.setRowJSON(i ,dl_tree1.getRowJSON(i));
						flag = false;
						arr.push(i);
					} else {
						break;
					}
				} else {
					templist.setRowJSON(i ,dl_tree1.getRowJSON(i));
					arr.push(i);
				}
			}
			dl_tree1.removeRows(arr);
			dl_tree.insertJSON(0, templist.getAllJSON());
			dl_tree.sort( "menu_no" , 0 );
			flag = true;
		};
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'position: relative;width: 680px;height: 320px;',class:''},E:[{T:1,N:'w2:treeview',A:{useDrag:'true',id:'treeview1',style:'position: relative;width:273px;height:300px;margin: 10px;float:left;clear:none;',lineShow:'',tooltipGroupClass:'false',dataType:'listed',dynamicAppend:'true','ev:ondrop':'scwin.treeview1_ondrop'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dl_tree'},E:[{T:1,N:'w2:label',A:{ref:'menu_nm'}},{T:1,N:'w2:value',A:{ref:'menu_no'}},{T:1,N:'w2:depth',A:{ref:'level'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position: relative;width: 80px;height: 23px;left:-1px;top:109px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'>'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'position: relative;width: 80px;height: 23px;left:-81px;top:202px;','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'<'}]}]},{T:1,N:'w2:treeview',A:{useDrag:'',id:'treeview2',style:'position: relative;width:273px;height:300px;left:91px;top:-12px;',lineShow:'',tooltipGroupClass:'false',dataType:'listed',dynamicAppend:'true'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dl_tree1'},E:[{T:1,N:'w2:label',A:{ref:'menu_nm'}},{T:1,N:'w2:value',A:{ref:'menu_no'}},{T:1,N:'w2:depth',A:{ref:'level'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]}]}]})