/*amd /$p/PopUp/isWFramePopUp_$p/isWFramePopUp_$p.xml 1616 991d86e78c610b21beac525843776126080f3a9d5c99c0908feecf5b2af58d95 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		requires("uiplugin.popup");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var opts = {
            "id" : "popup2",
            "type" : "wframePopup",
            "width" : "500px",
            "height" : "500px",
            "top" : 100,
            "left" : 300,
            "modal" : true
        }
        $p.openPopup("popup_src.xml", opts);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Main',style:'width:420px;height:60px;font-family:sans-serif;font-size:30px;color:black;margin: 10px;margin-left: 100px;margin-top: 50px;'}},{T:1,N:'xf:trigger',A:{type:'button',style:'width:300px;padding: 5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin: 100px;margin-top: 30px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.openPopup()'}]}]}]}]}]})