/*amd /SelectBox/depthColumn_SelectBox.xml 2490 1445c51cad3111f7e413e8a250e0097c1cf2704fb8db689bc099a19e782283a5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	scwin.onpageload = function() {
		var select = [{
			"col1" : "Asia",
			"col2" : "Asia",
			"col3" : "1"
		}, {
			"col1" : "Korea",
			"col2" : "Korea",
			"col3" : "2"
		}, {
			"col1" : "Seoul",
			"col2" : "Seoul",
			"col3" : "3"
		}, {
			"col1" : "Busan",
			"col2" : "Busan",
			"col3" : "3"
		}, {
			"col1" : "Thailand",
			"col2" : "Thailand",
			"col3" : "2"
		}, {
			"col1" : "Bangkok",
			"col2" : "Bangkok",
			"col3" : "3"
		}, {
			"col1" : "Chiang Mai",
			"col2" : "Chiang Mai",
			"col3" : "3"
		}, {
			"col1" : "Europe",
			"col2" : "Europe",
			"depth" : "1"
		}, {
			"col1" : "France",
			"col2" : "France",
			"col3" : "2"
		}, {
			"col1" : "Paris",
			"col2" : "Paris",
			"col3" : "3"
		}, {
			"col1" : "Lyon",
			"col2" : "Lyon",
			"col3" : "3"
		}, {
			"col1" : "Spain",
			"col2" : "Spain",
			"col3" : "2"
		}, {
			"col1" : "Madrid",
			"col2" : "Madrid",
			"col3" : "3"
		}, {
			"col1" : "Barcelona",
			"col2" : "Barcelona",
			"col3" : "3"
		}];
		dataList1.setJSON(select);
	};

	scwin.onpageunload = function() {

	};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:select1',A:{id:'',chooseOption:'',style:'width: 148px;height: 30px;margin: 100px;margin-left: 200px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',depthColumn:'col3',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'col1'}},{T:1,N:'xf:value',A:{ref:'col2'}}]}]}]}]}]}]})