/*amd /sample/main_compFunc.xml 3617 ca5ac291dbb81611110e7f03f053fab4bcc8a1ee31d2b31763a6bf56885df93e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map',id:''},E:[{T:1,N:'w2:dataList',A:{id:'dc_menu_compFunc',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'desc',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'url',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getCompFunc',ref:'',target:'data:json,dc_menu_compFunc',action:'/sample/data/menu_compFunc.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getCompFunc_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.titlebox02{background-color:#4c4c4c!important}'}]},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	
			scwin.onpageload = function() {
				$p.executeSubmission( "sbm_getCompFunc" );
			};
			
			scwin.sbm_getCompFunc_submitdone = function(e) {
				scwin.setMenu();
			};
			
			scwin.setMenu = function(){
				var a, b=0, c=0,
					typeKey = null,
					uiObj, tmpObj, tmpStr, 
					listArr, listArrLen, listData,
					typeInfoObj = {"01":"기능", "02":"성능", "03":"페이지 구현"};
					
				dc_menu_compFunc.sort( "type");
				listArr = dc_menu_compFunc.getAllJSON();
				listArrLen = listArr.length;
				
				
				//list 분리
				for(a=0; a<listArrLen; a++){
					listData = listArr[a];
		
					if(typeKey !== listData.type){
						typeKey = listData.type;
						
						ui_gen_type.insertChild();
						
						uiObj = ui_gen_type.getChild( b , "ui_type_title" );
						uiObj.setValue(typeInfoObj[typeKey]);
						
						uiObj = ui_gen_type.getChild( b , "ui_gen" );
						b ++;
						c = 0;			
					}			
					uiObj.insertChild();
					
					tmpObj = uiObj.getChild(c, "ui_url");
					tmpObj.setValue(listData.url);
					tmpObj.setHref(location.pathname + "?w2xPath=" + listData.url);
		
					tmpObj = uiObj.getChild(c, "ui_txt");
					tmpObj.setValue(listData.desc);
					
					c++;
				}
			};
		

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'w2:generator',A:{id:'ui_gen_index',style:'',class:'dmb'},E:[{T:1,N:'w2:anchor',A:{id:'ui_gen_index_title',style:'',outerDiv:'false',class:'dmr'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'index'}]}]}]},{T:1,N:'w2:generator',A:{id:'ui_gen_type',style:''},E:[{T:1,N:'xf:group',A:{class:'titlebox02 dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt',id:'ui_type_title',label:'Title',style:'',tabIndex:'',tagname:'h1'}}]},{T:1,N:'w2:generator',A:{id:'ui_gen',style:'',tagname:'dl',class:'autoCountBox'},E:[{T:1,N:'w2:textbox',A:{label:'',id:'ui_txt',style:'',tagname:'dt',class:'mb2'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'',tagname:'dd'},E:[{T:1,N:'w2:anchor',A:{id:'ui_url',style:'',outerDiv:'false',clickEventElement:'',class:'',target:'_blank'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:group',A:{style:'height:1px;border-width:0px;border-bottom:1px solid #bbb;margin: 6px 0px;',id:'',tagname:'hr'}}]}]}]}]}]}]})