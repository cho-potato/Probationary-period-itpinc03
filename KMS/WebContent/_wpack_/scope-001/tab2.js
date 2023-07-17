/*amd /scope-001/tab2.xml 1485 7a22c550c8d482b7ba37f4e26c3b30a8d309449886dd0088f8ebd47f7d4334d2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
         requires("uiplugin.popup");
         
    	fn01 = function() {
			alert("call fn01");
		}
		
		scwin.fn01 = function() {
			alert("call scwin.fn01");
		}
		    
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		$p.openPopup("child2.xml", {"id" : "popuptest", "type" : "litewindow", "useIFrame" : "true", "top":"0px", "left":"300px","width":"300px","height":"300px"});
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{label:'tab2 wframe scope',style:'width: 150px;height: 23px;',id:'textbox1'}},{T:1,N:'xf:trigger',A:{type:'button',style:'width:152px;height:23px;float:left;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'iframe popup'}]}]}]}]}]})