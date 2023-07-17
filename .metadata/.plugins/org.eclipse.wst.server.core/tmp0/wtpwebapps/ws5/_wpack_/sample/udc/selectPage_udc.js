/*amd /sample/udc/selectPage_udc.xml 4672 fdcb3738e562665c2a49b96a8a71c8f924c95e6d9e91e029fb6d9aa1ff016637 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'UDC'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:model'}]},{T:1,N:'body',E:[{T:1,N:'xf:group',A:{id:'',style:'text-align: center;',pluginName:'udc_selectPage'},E:[{T:1,N:'link',A:{rel:'stylesheet',type:'text/css',href:''}},{T:1,N:'style',A:{type:'text/css'}},{T:1,N:'script',A:{type:'text/javascript',src:''}},{T:1,N:'script',A:{'ev:event':'oncreated(options)',type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj,options){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj);scwin.onpageload = function(){
				/**
				 * //property handling
				 * $w.log("id:" + options.id);
				 * $w.log("style:" + options.style);
				 * $w.log("class:" + options.class);
				 * $w.log("ref:" + options.ref);
				 *
				 * //event trigger
				 * udc_obj.trigger("onSelChange"); 
				*/

				/**
				 * //property handling
				 * $w.log("id:" + options.id);
				 * $w.log("style:" + options.style);
				 * $w.log("class:" + options.class);
				 * $w.log("ref:" + options.ref);
				 *
				 * //event trigger
				*/

				/**
				 * //property handling
				 * $w.log("id:" + options.id);
				 * $w.log("style:" + options.style);
				 * $w.log("class:" + options.class);
				 * $w.log("ref:" + options.ref);
				 *
				 * //event trigger
				 * udc_obj.trigger("onChange"); 
				*/

				/**
				 * //property handling
				 * $w.log("id:" + options.id);
				 * $w.log("style:" + options.style);
				 * $w.log("class:" + options.class);
				 * $w.log("ref:" + options.ref);
				 *
				 * //event trigger
				 * udc_obj.trigger("onChange"); 
				*/

				/**
				 * //property handling
				 * $w.log("id:" + options.id);
				 * $w.log("style:" + options.style);
				 * $w.log("class:" + options.class);
				 * $w.log("ref:" + options.ref);
				 *
				 * //event trigger
				*/

				/**
				 * //property handling
				 * $w.log("id:" + options.id);
				 * $w.log("style:" + options.style);
				 * $w.log("class:" + options.class);
				 * $w.log("ref:" + options.ref);
				 *
				 * //event trigger
				*/

				/**
				 * //property handling
				 * $w.log("id:" + options.id);
				 * $w.log("style:" + options.style);
				 * $w.log("class:" + options.class);
				 * $w.log("ref:" + options.ref);
				 *
				 * //event trigger
				*/

				/**
				 * Function description...
				 * @date 2019. 08. 28
				 * @memberOf udc_obj
				 * @param 
				 * @returns  
				 * @author inswave
				 * @example
				 * @since
				*/ 
				udc_obj.getTotalValue = function(){
					var value = spnTotal.getValue();
					return value.replace("/","");
				};

				/**
				 * Function description...
				 * @date 2019. 08. 28
				 * @memberOf udc_obj
				 * @param 
				 * @returns  
				 * @author inswave
				 * @example
				 * @since
				*/ 
				udc_obj.setTotalValue = function(arg){
					spnTotal.setValue("/"+arg);
				};

				
				/**
				 * Function description...
				 * @date 2019. 08. 28
				 * @memberOf udc_obj
				 * @param 
				 * @returns  
				 * @author inswave
				 * @example
				 * @since
				*/ 
				udc_obj.setSelectPage = function(num){
					selCount.removeAll(true);
			
					for(var i=1; i<=num; i++){
						selCount.addItem(i, i);
					}
					
					selCount.setSelectedIndex(0);
				};
				
				udc_obj.getSelectVal = function(){
					return selCount.getValue();
				};
				
				udc_obj.setSelectVal = function(arg){
					selCount.setValue(arg);
				};
				
				}
}}}]},{T:1,N:'script',A:{'ev:event':'onattributeChanged(type,value)',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj,type,value){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj);}}}]},{T:1,N:'script',A:{'ev:event':'ondestroyed()',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj); 
}}}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',style:'width: 50px;height: 21px;margin-right: 10px;',disabled:'false',id:'selCount',allOption:'false',direction:'auto'},E:[{T:1,N:'script',A:{'ev:event':'onviewchange(info)',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj,info){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj); 
    				udc_obj.trigger("onSelChange", udc_obj.getSelectVal());
    			
}}}]}]},{T:1,N:'w2:span',A:{style:'',label:'/',id:'spnTotal'}}]}]}]}]})