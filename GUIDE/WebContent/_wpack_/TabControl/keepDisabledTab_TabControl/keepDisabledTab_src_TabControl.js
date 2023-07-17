/*amd /TabControl/keepDisabledTab_TabControl/keepDisabledTab_src_TabControl.xml 2001 a822ab9260804979e15750934af83047dc107a65edf426adff86bbd41c5c2927 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		var tabOptions = {};
		
		for (var i = 0; i < 3; i++) {
			var addCount = i + 1;
			var tabOptions = {
				label : "Tab " + addCount,
				openAction: "new",
				closable: "true"
			}
			
			
			var contentsOptions = {
                    frameMode : "wframe",
                    alwaysDraw : false,
                }
			tabControl1.addTab(i, tabOptions, contentsOptions);
		}
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
	scwin.trigger11_onclick = function(e) {
		if (tabControl1.tabArr[0].disabled === false) {
            tabControl1.disableTab(0);
        } else {
            tabControl1.enableTab(0);
        }
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:248px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;font-style:normal;font-weight:bolder;top:20px;text-align:left;margin:50px;margin-bottom: 0px;display: inline',id:'trigger11','ev:onclick':'scwin.trigger11_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'disableTab(0) & enableTab(0)'}]}]},{T:1,N:'w2:tabControl',A:{useTabKeyOnly:'true',id:'tabControl1',useMoveNextTabFocus:'false',useConfirmMessage:'false',confirmTrueAction:'exist',confirmFalseAction:'new',alwaysDraw:'false',style:'width: 500px;height: 200px;margin: 50px;',keepDisabledTab:'true'}}]}]}]})