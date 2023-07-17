/*amd /WindowContainer/onminimizebtnclick_onrestorebtnclick_WindowContainer/onminimizebtnclick_onrestorebtnclick_WindowContainer.xml 2998 ae2a105db80b68002e03617bad3ef3df5fc6e01ecde9d81f0bd339c0a3dd8db8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
        var options = {
            title: "title",
            iconUrl: null,
            src: "src.xml",
            windowTitle: "windowTitle of the window",
            windowId: "id of the window",
            frameMode:"wframe",
        };
        windowContainer1.createWindow( options );
	};
	
	scwin.onpageunload = function() {
		
	};

    scwin.onminimizebtnclick = function(info) {
        alert("onminimizebtnclick\n\n" + "src : " + info.src + "\ntitle : " + info.title + "\nwindowTitle : " +  info.windowTitle + "\nid : " +  info.id + "\nwindowId : " +  info.windowId );
    };

    scwin.onrestorebtnclick = function(info) {
        alert("onrestorebtnclick\n\n" + "src : " + info.src + "\ntitle : " + info.title + "\nwindowTitle : " +  info.windowTitle + "\nid : " +  info.id + "\nwindowId : " +  info.windowId );
    };
	
	
}}}]},{T:1,N:'style',A:{type:'text/css'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:windowContainer',A:{sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',fixArrangeFullScreen:'false',useFixButton:'false',useWindowScrollButton:'true',windowScrollVisibleRowNum:'3',windowAutoResize:'false',verticalArrangeNum:'2',windowMaxNum:'10',useCloseButton:'true',toolbarPosition:'top',useNameContainer:'true',controlIconPosition:'allright',autoArrange:'true',windowMaximizeAll:'false',stopMinimizeOnNameLayer:'true',id:'windowContainer1',useStatusMsg:'false',class:'',hideTitleOnMaximize:'false',spaInitCount:'0',stopToggleOnLast:'true',closeType:'noneFixedWindow',horizontalArrangeNum:'2',useCustomMsg:'false',useControlIconTitle:'false',tooltipDisplay:'true',tooltipGroupClass:'false',windowTooltipDisplay:'false',style:'position: relative;width: 500px;height: 300px;margin: 50px;margin-left: 200px;border: solid black 1px;',frameMode:'wframe',nameLayerMove:'true','ev:onminimizebtnclick':'scwin.onminimizebtnclick','ev:onrestorebtnclick':'scwin.onrestorebtnclick','ev:onwindowchange':'scwin.wcMain_onwindowchange',processMsgFrame:'true','ev:onclosewindow':'scwin.wcMain_onclosewindow','ev:onwindowload':'','ev:onbeforecloseall':'scwin.wcMain_onbeforecloseall'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]})