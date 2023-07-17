/*amd /Editor-003/editor_resize.xml 2418 f61dd135b1170302d2141b2ce90ed0aec35ef467f358eca1239da8eba1a9e7f6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
			
		};
		
		scwin.onpageunload = function() {
			
		};
        
        scwin.editorResize = function(editorID,width,height){
        	var editorComponent = $p.getComponentById(editorID);
        	var scopeEditorId = editorComponent.getID();
        	
        	//editor 버전에 따라 dom 아이디가 변경된다
        	//editor version 3.6 버전 설정시는 cke_top_mf_editor1_, cke_bottom_mf_editor1_
        	//editor version 4.3 이상 설정시는 cke_1_top, cke_1_bottom
        	
//        	var a1 = document.getElementById("cke_top_"+scopeEditorId+"_").clientHeight;		//"cke_top_"+editorID+"_"		//version="3.6" 
//			var a3 = document.getElementById("cke_bottom_"+scopeEditorId+"_").clientHeight;		//"cke_bottom_"+editorID+"_"	//version="3.6"
        	var a1 = document.getElementById("cke_1_top").clientHeight;							//cke_1_top						//version="4.5" 이상
			var a3 = document.getElementById("cke_1_bottom").clientHeight;						//cke_1_bottom					//version="4.5" 이상
			
			editorObj = $p.getComponentById( editorID );
			
			editorObj.resize(width,height-(a1+a3));
        };
        
		scwin.trigger1_onclick = function(e) {
			scwin.editorResize("editor1",500,500);
		};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position: relative;width: 80px;height: 23px;float:left;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'resize'}]}]},{T:1,N:'xf:group',A:{id:'group1',style:'height:550px;width:550px;float:left;'},E:[{T:1,N:'w2:editor',A:{id:'editor1',style:'position: relative ;left:10px;width:400px;height:400px;float:left;',resizable:'true',version:'4.11.3'}}]}]}]}]})