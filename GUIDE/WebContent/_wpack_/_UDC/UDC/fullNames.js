/*amd /_UDC/UDC/fullNames.xml 4294 0216d9e9da9c3e6121798626c08dc118ad5cce6f08b490144c139de805906600 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj);
        
	scwin.onpageload = function() {
		
	};
	
	scwin.onpageunload = function() {
		
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',pluginName:'udc_fullNames'},E:[{T:1,N:'link',A:{rel:'stylesheet',type:'text/css',href:''}},{T:1,N:'style',A:{type:'text/css'}},{T:1,N:'script',A:{type:'text/javascript',src:''}},{T:1,N:'script',A:{'ev:event':'oncreated(options)',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj,options){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj);
				/**
				 * //property handling
				 * $w.log("id:" + options.id);
				 * $w.log("style:" + options.style);
				 * $w.log("class:" + options.class);
				 * $w.log("ref:" + options.ref);
				 * $w.log("disable1:" + options.disable1);
				 * $w.log("disable2:" + options.disable2);
				 *
				 * //event trigger
				 * udc_obj.trigger("onUserClick_1"); 
				*/

				/**
				 * //property handling
				 * $w.log("id:" + options.id);
				 * $w.log("style:" + options.style);
				 * $w.log("class:" + options.class);
				 * $w.log("ref:" + options.ref);
				 * $w.log("disable1:" + options.disable1);
				 * $w.log("disable2:" + options.disable2);
				 *
				 * //event trigger
				 * udc_obj.trigger("onUserClick_1"); 
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
				var one = options.disable1;
				var two = options.disable2;

				if (one == "true") {
				    input1.setDisabled(true);
				}
				if (two == "true") {
				    input2.setDisabled(true);
				}		



				
				/**
				 * Function description...
				 * @date 2021. 05. 24
				 * @memberOf udc_obj
				 * @param 
				 * @returns  
				 * @author inswave
				 * @example
				 * @since
				*/ 
				udc_obj.setFirst = function(value_1){
					input1.setValue(value_1);				
				};

				/**
				 * Function description...
				 * @date 2021. 05. 24
				 * @memberOf udc_obj
				 * @param 
				 * @returns  
				 * @author inswave
				 * @example
				 * @since
				*/ 
				udc_obj.setSecond = function(value_1){
					var last = value_1.toUpperCase();
					input2.setValue(last);					
				};

				/**
				 * Function description...
				 * @date 2021. 05. 24
				 * @memberOf udc_obj
				 * @param 
				 * @returns  
				 * @author inswave
				 * @example
				 * @since
				*/ 
				udc_obj.getValues = function(){
					udc_obj.trigger("onUserClick_1");
					return input1.getValue() + " " + input2.getValue();
				};
				
}}}]},{T:1,N:'script',A:{'ev:event':'onattributeChanged(type,value)',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj,type,value){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj); 
}}}]},{T:1,N:'script',A:{'ev:event':'ondestroyed()',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj); 
}}}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 144px;height:35px;padding:5px;line-height:32px;font-size:15px;color: blue;font-family:monospace;font-style:normal;font-weight:bolder;margin:20px;color: blue;',id:'input1',placeholder:'First name'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 144px;height:35px;padding:5px;line-height:32px;font-size:15px;color: blue;font-family:monospace;font-style:normal;font-weight:bolder;margin:20px;color: magenta;',id:'input2',placeholder:'Last name'}}]}]}]}]})