/*amd /WindowContainer/useFixButton_nameLayerRearrangeWindowContainer.xml 2328 067f2bc4e4ea387b18ea9dc0f751c99fa9c7c8e398bd4d7f5602798fb104975d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model'},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

    scwin.onpageload = function() {
        scwin.createWindowTest("aaa");
        scwin.createWindowTest("bbb");
        scwin.createWindowTest("ccc");
        
    };

    scwin.onpageunload = function() {
        
    };
    
    scwin.createWindowTest = function(title)
    {
        var winObj = {
            title : title,
            src : "a.xml",
            windowTitle : title+"_windowTitle",
            windowId : title+"_windowId",
            frameMode : "wframe",
            defaultWidth : "400",
            defaultHeight : "400"
        }
        wc1.createWindow( winObj );
    };
        
    
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:windowContainer',A:{sequentialArrangeRowNum:'3',useNameContainer:'false',useControlIconTitle:'false',useFixButton:'true',nameLayerMenu:'false',autoArrange:'true',useNameScroll:'true',nameLayerMove:'true',horizontalArrangeNum:'3',tooltipGroupClass:'false',controlIconPosition:'left',class:'',hideTitleOnMaximize:'false',useStatusMsg:'true',nameLayerRearrange:'true',windowMaximizeAll:'false',id:'wc1',windowAutoResize:'false',useCustomMsg:'false',style:'position: absolute ;left: 10px;top: 24px;width: 900px;height: 400px;',tooltipDisplay:'true',stopMinimizeOnNameLayer:'false',stopToggleOnLast:'false',windowTooltipDisplay:'true',verticalArrangeNum:'3',windowMaxNum:'5',spaAuto:'true',useCloseButton:'false',fixArrangeFullScreen:'false',sequentialArrangeColNum:'3',toolbarPosition:'bottom','ev:onbeforecloseall':'scwin.wc1_onbeforecloseall',frameMode:'wframe'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:nameLayer'},{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]})