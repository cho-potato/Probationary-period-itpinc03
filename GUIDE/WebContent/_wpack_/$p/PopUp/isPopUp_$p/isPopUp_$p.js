/*amd /$p/PopUp/isPopUp_$p/isPopUp_$p.xml 1620 2442d82f534b9588d5b7fdad9b8b9ea6e670cb8b6ad686da5c03ece6178b3e3d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		requires("uiplugin.popup");
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		var opts = {
            "id" : "popup2",
            "type" : "browserPopup",
            "width" : "500px",
            "height" : "500px",
            "top" : 100,
            "left" : 300,
            "modal" : true
        }
        $p.openPopup("messagePopup.xml", opts);
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Main',style:'width:420px;height:60px;font-family:sans-serif;font-size:30px;color:black;margin: 10px;margin-left: 100px;margin-top: 50px;'}},{T:1,N:'xf:trigger',A:{type:'button',style:'width:300px;padding: 5px;line-height:32px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;margin: 100px;margin-top: 30px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.openPopup()'}]}]}]}]}]})