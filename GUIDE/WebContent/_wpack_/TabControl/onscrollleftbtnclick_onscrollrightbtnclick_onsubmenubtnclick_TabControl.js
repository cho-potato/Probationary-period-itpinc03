/*amd /TabControl/onscrollleftbtnclick_onscrollrightbtnclick_onsubmenubtnclick_TabControl.xml 2123 38175ad425dc194ecbfa48faae8733dfef2c32f6777c8d4a16a75706c27ebe47 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var tabOptions = {};
		for (var i = 0; i < 10; i++) {
			var addCount = i + 2;
			var tabOptions = {
				label : "Tab " + addCount,
				openAction: "new",
				closable: "true"
			}
			var contentsOptions = {
                    frameMode : "wframe",
                    alwaysDraw : false
                }
			tabControl1.addTab(i, tabOptions, contentsOptions);
		}
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.tabControl1_onscrollleftbtnclick = function() {
		alert("Left button clicked!");
	};
	
	scwin.tabControl1_onscrollrightbtnclick = function() {
		alert("Right button clicked!");
	};
	
	scwin.tabControl1_onsubmenubtnclick = function() {
		alert("Sub-menu clicked!");
	};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 50px;'},E:[{T:1,N:'w2:tabControl',A:{confirmTrueAction:'exist',useTabKeyOnly:'true',confirmFalseAction:'new',useMoveNextTabFocus:'false',tabScroll:'true',tabScrollAuto:'',useConfirmMessage:'false',alwaysDraw:'false',style:'width: 430px;height: 200px;',tabPosition:'top',id:'tabControl1','ev:onscrollleftbtnclick':'scwin.tabControl1_onscrollleftbtnclick','ev:onscrollrightbtnclick':'scwin.tabControl1_onscrollrightbtnclick','ev:onsubmenubtnclick':'scwin.tabControl1_onsubmenubtnclick'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px;',id:'tabs1',label:'Tab 1'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height:170px',id:'content1'}}]}]}]}]}]})