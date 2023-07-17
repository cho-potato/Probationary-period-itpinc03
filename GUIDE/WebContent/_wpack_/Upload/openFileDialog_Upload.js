/*amd /Upload/openFileDialog_Upload.xml 1301 beda0c4982348002d2ae593a330b6ad951961ccbc34e67f5e57610d3d4cb7ce2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		upload1.openFileDialog();
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'margin: 50px;'},E:[{T:1,N:'xf:trigger',A:{style:'width:162px;height:23px;display: block;margin-bottom: 50px;',id:'trigger1',type:'button','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'openFileDialog()'}]}]},{T:1,N:'w2:upload',A:{inputStyle:'vertical-align:middle;word-wrap:break-word',style:'width: 250px;height: 23px;',id:'upload1',imageStyle:'position:absolute;vertical-align:middle;word-wrap:break-word'}}]}]}]}]})