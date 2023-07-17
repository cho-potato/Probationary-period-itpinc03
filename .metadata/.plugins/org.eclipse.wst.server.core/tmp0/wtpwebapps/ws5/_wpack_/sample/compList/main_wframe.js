/*amd /sample/compList/main_wframe.xml 2870 d9ecb9b0e7898471824dae1d92949d6cc6f44f4b0c65a5a90b54ffb129ad1243 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'title',E:[{T:3,text:'WebSquare Sample'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'xf:submission',A:{id:'sub_compList',ref:'',target:'data:json,dc_compList',action:'/sample/data/menu_compList.json',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sub_compList_submitdone',instance:'',replace:'',errorHandler:'',customHandler:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{id:'dc_compList',baseNode:'list',style:'',repeatNode:'map',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'label',dataType:'text'}},{T:1,N:'w2:column',A:{id:'webPath',name:'webPath',dataType:'text'}},{T:1,N:'w2:column',A:{id:'icon',name:'icon',dataType:'text'}},{T:1,N:'w2:column',A:{id:'key',name:'key',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depth',name:'depth',dataType:'text'}},{T:1,N:'w2:column',A:{id:'parent',name:'parent',dataType:'text'}}]}]}]}]},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){


	//change content
	scwin.fn_clickSecondMenu = function(tabKey, tabNm, tabUrl, naviTitle) {

		//ui_contFrame.setSrc(tabUrl + "&compNm=" + tabNm);
		//ui_contFrame.setSrc(tabUrl + "?compNm=" + tabNm);
		
        Promise.resolve().then(function() {
        	return ui_contFrame.setSrc(tabUrl);
   	     
   	   	});
	};
	
	scwin.sub_compList_submitdone = function() {
		leftMenuGrp.getWindow().scwin.fn_setToggleMenu("dc_compList");
	};

	scwin.onpageload = function() {
		//leftMenuData 호출
		$p.executeSubmission("sub_compList");
	};
	
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'',style:'position: absolute;left: 0px;right: 0px;top: 0px;bottom: 0px;'},E:[{T:1,N:'w2:wframe',A:{style:'',id:'',src:'/sample/comm/wf_header.xml',scope:'false'}},{T:1,N:'xf:group',A:{style:'position:absolute;top:60px;left:0px;right:0px;bottom:0px;',id:''},E:[{T:1,N:'w2:wframe',A:{id:'leftMenuGrp',class:'leftMenuGrp',src:'/sample/comm/wf_leftMenu.xml',style:'position: absolute;width:210px;left:0px;top:0px;bottom:0px;background:#fff;'}},{T:1,N:'xf:group',A:{id:'contentGrp',class:'',style:'position:absolute;left:211px;top:0px;bottom:0px;right:0px;'},E:[{T:1,N:'w2:wframe',A:{id:'ui_contFrame',style:'position:relative;width:100%;height:100%;'}}]}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'WFrame+Scope',style:'position: fixed;right: 20px;top:12px;font-weight: bold;font-size: 1.5em;'}}]}]}]})