/*amd /TabControl/tabPosition_TabControl/tabPosition_TabControl.xml 1677 63ab928d4074a6c63f1aa7f8c9fbeed92643b8f3479f6cbc08eb4a6890c8010c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var tabOptions = {};
		for (var i = 0; i < 7; i++) {
			var addCount = i + 2;
			var tabOptions = {
				label : "Tab " + addCount,
				openAction: "new",
				closable: "true"
			}
			var contentsOptions = {
                    frameMode : "wframe",
                    alwaysDraw : false,
                    src: "tabs_added.xml"
                }
			tabControl1.addTab(i, tabOptions, contentsOptions);
		}
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:tabControl',A:{useTabKeyOnly:'true',id:'tabControl1',useMoveNextTabFocus:'false',useConfirmMessage:'false',confirmTrueAction:'exist',confirmFalseAction:'new',alwaysDraw:'false',style:'position:absolute;width:600px;height:400px;margin:50px;',tabScroll:'',tabScrollAuto:'true',tabPosition:'bottom'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px;',id:'tabs1',label:'Tab 1'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height:300px;',id:'content1',src:'tab.xml'}}]}]}]}]})