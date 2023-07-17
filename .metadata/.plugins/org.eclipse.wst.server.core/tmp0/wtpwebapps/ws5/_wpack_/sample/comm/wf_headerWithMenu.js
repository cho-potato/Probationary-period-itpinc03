/*amd /sample/comm/wf_headerWithMenu.xml 2676 345630c5917b7a576ac4762997a94ca149759336121d51aa921e76b21c9cd759 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	
	scwin.onpageload = function() {
		var _url = window.location.href;
		var _urlArr = _url.split("w2xPath");
		
		//화면 파일명으로 현재 활성된 화면의 메뉴를 강조하기 위해 작성. 
		
		var page = _urlArr[1],
			curMenuComp;
			
		if(page){
			// page = page.replace(/.*\//, "").replace(".xml","").replace(/_.*/,"");
			
			if(page.indexOf("compFunc") > 0){
				page= "compFunc";
			}else if(page.indexOf("traiSamp") > 0){
				page= "traiSamp";
			}else if(page.indexOf("pageScope") > 0){
				page= "pageScope";
			}else if(page.indexOf("index") > 0){
				page= "index";
			}
			
		}else{
			page = "index";
		}
		
		curMenuComp = $p.getComponentById("ui_menu_"+page);
		if(curMenuComp){
			curMenuComp.addClass("act");
		}
	};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'topLogoBar'},E:[{T:1,N:'xf:group',A:{id:'',style:'position: relative;display: block;margin: 0px auto;width: 200px;min-height: 40px;',tagname:'a'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:href',E:[{T:3,text:'/'}]}]},{T:1,N:'w2:span',A:{class:'logo_white',id:'',label:' ',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'a',class:'menu_list_mo'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:href',E:[{T:3,text:'/'}]}]},{T:1,N:'w2:span',A:{class:'',id:'',label:' ',style:''}}]}]},{T:1,N:'xf:group',A:{class:'topMenuBar',id:'',style:''},E:[{T:1,N:'w2:anchor',A:{href:'#w2xPath=/index.xml',id:'ui_menu_index',outerDiv:'false',style:'','ev:onclick':''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Home'}]}]},{T:1,N:'w2:anchor',A:{href:'#w2xPath=/sample/index/compFunc.xml',id:'ui_menu_compFunc',outerDiv:'false',style:'','ev:onclick':''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'응용/심화 샘플'}]}]},{T:1,N:'w2:anchor',A:{href:'#w2xPath=/sample/index/traiSamp.xml',id:'ui_menu_traiSamp',outerDiv:'false',style:'','ev:onclick':''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실습 샘플'}]}]},{T:1,N:'w2:anchor',A:{href:'#w2xPath=/sample/index/pageScope.xml',id:'ui_menu_pageScope',outerDiv:'false',style:'','ev:onclick':''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Page Coding'}]}]}]}]}]}]})