/*amd /scope-001/child2.xml 2064 be373d94336a3402aa185006b463260e9940b1231e8460f00c8192ecb20fe374 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

		
		scwin.onpageload = function() {
			
		};
		
		scwin.onpageunload = function() {
			
		};
		
		
	scwin.trigger1_onclick = function(e) {
		parent.fn01();
	};
	
	scwin.trigger2_onclick = function(e) {
		//parent.scwin.fn01();
		var idx = parent.tabControl1.getSelectedTabIndex();
		parent.tabControl1.getFrame(idx).getObj("scwin").fn01();
		
		var fnNm = "scwin.fn01";
		debugger;
		parent.eval(parent.tabControl1.getFrame(idx).id+"_"+fnNm)();

	};
	
	scwin.trigger4_onclick = function(e) {
		var idx = parent.tabControl1.getSelectedTabIndex();
		parent.tabControl1.getFrame(idx).getObj("textbox1").setValue("setVlaue test!");
		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{label:'child2.xml page',style:'width: 150px;height: 23px;',id:'textbox1'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',id:'trigger1',style:'width: 80px;height: 23px;float:left;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'fn01()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',id:'trigger2',style:'width:115px;height:23px;float:left;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'팝업창scwin.fn01()'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger4_onclick',id:'trigger4',style:'width:185px;height:23px;float:left;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'팝업창 textbox setValue'}]}]}]}]}]})