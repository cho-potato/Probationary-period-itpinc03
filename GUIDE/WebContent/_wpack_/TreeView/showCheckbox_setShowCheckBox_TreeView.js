/*amd /TreeView/showCheckbox_setShowCheckBox_TreeView.xml 2895 ede32f2c3b6e0a410ab616cc1e39a63825342a3e6a7971e8d48ea3190c9360c3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var json=[{
			"col1":"Asia",
			"col2":"1",
			"col3":"con"
		},{
			"col1":"Korea",
			"col2":"2",
			"col3":"nat"
			
		},{
			"col1":"Seoul",
			"col2":"3",
			"col3":"ct"
		},{
			"col1":"Busan",
			"col2":"3",
			"col3":"ct"
		},{
			"col1":"China",
			"col2":"2",
			"col3":"nat",
			"col4" : "checkcheck"
			
		},{
			"col1":"Beijing",
			"col2":"3",
			"col3":"ct"
		}, {
			"col1":"Europe",
			"col2":"1",
			"col3":"con"
		},{
			"col1":"Germany",
			"col2":"2",
			"col3":"nat"
			
		},{
			"col1":"Berlin",
			"col2":"3",
			"col3":"ct"
		}];
		dataList1.setJSON(json);
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		treeview1.setShowCheckBox(true);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:treeview',A:{id:'treeview1',dataType:'listed',tooltipGroupClass:'false',style:'width: 200px;height: 200px;margin: 100px;margin-top: 50px;margin-bottom: 30px;',showCheckbox:'',showCheckboxLabel:'',hierarchy:''},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'w2:label',A:{ref:'col1'}},{T:1,N:'w2:value',A:{ref:'col3'}},{T:1,N:'w2:depth',A:{ref:'col2'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:'col4'}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:197px;height:44px;margin-left:100px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;text-align:left;font-style:normal;font-weight:bolder;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setShowCheckbox()'}]}]}]}]}]})