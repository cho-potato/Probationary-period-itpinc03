/*amd /TabControl/tabScroll_changeActiveTab_TabControl/tabScroll_changeActiveTab_TabControl.xml 1678 4725e693aae55c925e953894f726f89f92d9532b0fbb5528a5353ae1241a75e8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var tabOptions = {};
		
		for (var i = 0; i < 10; i++) {
			var addCount = i + 1;
			var tabOptions = {
				label : "Tab " + addCount,
				openAction: "new",
				closable: "true"
			}
			
			const tab = ["tab_", i+1, ".xml"];
			var first = tab[0];
			var second = tab[1];
			var third = tab[2];
			var all = first + second + third;
			
			var contentsOptions = {
                    frameMode : "wframe",
                    alwaysDraw : false,
                    src: all
                }
			tabControl1.addTab(i, tabOptions, contentsOptions);
		}
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:tabControl',A:{useTabKeyOnly:'true',id:'tabControl1',useMoveNextTabFocus:'false',useConfirmMessage:'false',confirmTrueAction:'exist',confirmFalseAction:'new',alwaysDraw:'false',style:'position:absolute;width:600px;height:400px;margin:50px;margin-left: 200px;',tabScroll:'true',tabScrollAuto:'true',tabPosition:'top',changeActiveTab:'true'}}]}]}]})