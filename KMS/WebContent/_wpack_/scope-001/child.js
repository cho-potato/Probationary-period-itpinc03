/*amd /scope-001/child.xml 1126 dd150fd2e527410bc27fb65f5ffac54b2dd5bcd298afa68b1fec81762cf5c500 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
		fn01 = function() {
			alert("call fn01");
		}
		
		scwin.fn01 = function() {
			alert("call scwin.fn01");
		}
		
		scwin.onpageload = function() {
			var obj = $p.getParameter( "rowObj" );
		    console.log(JSON.stringify(obj,null,2));			
		};
		
		scwin.onpageunload = function() {
			
		};
		
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{label:'child.xml page',style:'width: 150px;height: 23px;',id:'textbox1'}}]}]}]})