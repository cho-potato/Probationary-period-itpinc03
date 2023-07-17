/*amd /scope-001/parent.xml 2918 6c475408bd3ef80d4f563a215bfc23daa4c160bd6e2bb152b0e90c303d093cb8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		requires("uiplugin.popup");
		///$p.openPopup("child.xml", {"id" : "popuptest", "type" : "litewindow", "frameMode" : "wframe", "top":"0px", "left":"200px","width":"300px","height":"300px"});
		
		var rowJSON = { 
		    "addr": "서울시", 
		    "name": "손예진", 
		    "rowStatus": "R" 
		}; 
		//popup에 넘길 data객체. 
		var dataObj={ 
		    type : "json",      // 데이터 타입. "xml","string","json","array" 
		    data : rowJSON,     // 전달 데이터 객체. 
		    name : "rowObj"     // 변수명. popup에서 $p.getParameter( "rowObj" )로 깨내올 수 있다. 
		}; 
		$p.openPopup("child.xml", {"id" : "popuptest", "type" : "litewindow", "frameMode" : "wframe", "top":"0px", "left":"200px","width":"300px","height":"300px","dataObject":dataObj});
			
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger1_onclick = function(e) {
		fn01();
	};
	
	scwin.trigger2_onclick = function(e) {
		//scwin.fn01();
		var frame_fn01= $p.getPopup("popuptest").popupWin.frame.id+"_scwin"+".fn01()";
		eval(frame_fn01);
		
	};
	
	scwin.trigger3_onclick = function(e) {
		
	};
	
	scwin.trigger4_onclick = function(e) {
		$p.getPopup("popuptest").popupWin.frame.getObj("textbox1").setValue("setVlaue test!");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{style:'height:251px;width:186px;',id:'group1'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger1_onclick',style:'width: 80px;height: 23px;float:left;',id:'trigger1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'fn01()'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:115px;height:23px;float:left;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'팝업창scwin.fn01()'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:185px;height:23px;float:left;',id:'trigger4','ev:onclick':'scwin.trigger4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'팝업창 textbox setValue'}]}]},{T:1,N:'w2:textbox',A:{label:'wframe 팝업창 생성<br/>팝업에 scwin.fn01() 함수 정의.<br/>::부모에서 팝업의 scwin.fn01()함수 호출하는 법',style:'width:175px;height:178px;float:left;',id:'textbox1'}}]}]}]}]})