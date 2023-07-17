/*amd /WFrame/processMsgFrameURL_config_processMsgFrame_WFrame/processMsg_new.xml 3268 ab40e65a4a73189f7cbd2f9ee8d85915dba270c66aec9814a283cbdd934e0376 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'style',E:[{T:3,text:'\n            .w2_proc {\n                position : absolute;\n                z-index : 9800;\n            }\n            .w2_proc_group_wrapper {\n                position : relative;\n                padding : 20px 0 0 13px; \n                width : 280px; \n                height : 81px; \n                border : 3px solid red; \n                background : url("message/images/bg_ly.gif") left top repeat-x;\n            }\n            .w2_proc_text_msg {\n                width : 200px;\n                height : 20px;\n                font-size : 13px;\n                color : #3f3f67;\n                font-weight : bold;\n                overflow : hidden;\n                white-space:nowrap;\n                text-overflow:ellipsis;\n            }\n            .w2_proc_image_bar {\n                width : 267px;\n                height : 23px;\n            }\n            .w2_proc_btn_hide {\n                position:absolute;\n                top:20px;\n                right:14px;\n                height:20px;\n                text-align:center;\n                word-wrap:break-word;\n                display:none;\n            }\n            .w2_proc_btn_cancel {\n                position:absolute;\n                top:20px;\n                right:14px;\n                height:20px;\n                text-align:center;\n                word-wrap:break-word;\n                display:none;\n            }\n            .w2_proc_modal {\n                position : absolute;\n                left : 0;\n                top : 0;\n                width : 100%;\n                height : 100%;\n                background-color : red;\n                filter : alpha(opacity=30);\n                opacity : 0.3;\n                z-index: 5800;\n            }\n        '}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
    scwin.onpageload = function() {
        image_bar.setSrc(WebSquare.baseURI + "message/images/progressingbar.gif");
    };
    
    scwin.onpageunload = function() {
        
    };
    
    scwin.btn_hide_onclick = function() {
        $p.getFrame().hideProcessMessage();
    };
    
    scwin.btn_cancel_onclick = function() {
        var submissionList = $p.getFrame()._processMsgQueue;
        while (submissionList.length > 0) {
            WebSquare.ModelUtil.abort(submissionList.shift().id);
        }
    };
    
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'w2_proc_group_wrapper',id:'group_wrapper',style:''},E:[{T:1,N:'w2:textbox',A:{class:'w2_proc_text_msg',label:'',id:'text_msg',style:''}},{T:1,N:'xf:image',A:{class:'w2_proc_image_bar',id:'image_bar',style:'',src:'',alt:'로딩중'}}]}]}]}]})