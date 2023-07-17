/*amd /Group/onmouseleave_onmouseenter_Group.xml 1506 0d9698252e943a53a7819a2be508902c701c87459eeaa15434fb63f20b90e14e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.group1_onmouseleave = function(e) {
		alert("Mouse LEAVING the Group component.");
	};
	
	scwin.group1_onmouseenter = function(e) {
		alert("Mouse ENTERING the Group component.");		
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'onmouseleave & onmouseenter',style:'width:338px;padding: 10px;text-align:center;line-height:32px;height:32px;margin:50px;margin-bottom: 0px;margin-bottom:30px;background-color:#C0C0C0;font-size:17px;font-family:monospace;font-style:normal;font-weight:bolder;'}},{T:1,N:'xf:group',A:{style:'width:361px;height:200px;margin:50px;background-color:#FF8080;font-size:40px;font-family:monospace;',id:'group1','ev:onmouseleave':'scwin.group1_onmouseleave','ev:onmouseenter':'scwin.group1_onmouseenter',text:'Group',tagname:''}}]}]}]})