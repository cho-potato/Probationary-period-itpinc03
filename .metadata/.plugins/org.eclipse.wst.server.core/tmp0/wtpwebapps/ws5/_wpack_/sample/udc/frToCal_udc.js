/*amd /sample/udc/frToCal_udc.xml 9135 53475e5b88795abb8bcdf4e7c56e03800933262ae1c35f6b2a2489ab366782a2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'UDC'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:model'}]},{T:1,N:'body',A:{style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'',pluginName:'udc_fromtoCalendar'},E:[{T:1,N:'script',A:{'ev:event':'oncreated(options)',type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj,options){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj);scwin.onpageload = function(){
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
					
				gr_cal.setStyle( "display" , "none" );
				scwin.disFlag = true;					
				
				/**
				 * Function description...
				 * @date 2019. 01. 16
				 * @memberOf udc_obj
				 * @param 
				 * @returns  
				 * @author inswave
				 * @example
				 * @since
				*/ 
				udc_obj.setUdcFromDate = function(dateStr){
					ipt_from.setValue(dateStr);
				};

				/**
				 * Function description...
				 * @date 2019. 01. 16
				 * @memberOf udc_obj
				 * @param 
				 * @returns  
				 * @author inswave
				 * @example
				 * @since
				*/ 
				udc_obj.setUdcToDate = function(dateStr){
					ipt_To.setValue(dateStr);
				};
				}
}}}]},{T:1,N:'script',A:{'ev:event':'onattributeChanged(type,value)',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj,type,value){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj); 
}}}]},{T:1,N:'script',A:{'ev:event':'ondestroyed()',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj); 
}}}]},{T:1,N:'xf:group',A:{id:'',pluginName:'udc_frToCal',style:'height:23px;display: block;'},E:[{T:1,N:'script',A:{'ev:event':'oncreated(options)',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj,options){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj);
					/**
					 * //property handling
					 * $p.log("id:" + options.id);
					 * $p.log("style:" + options.style);
					 * $p.log("class:" + options.class);
					 * $p.log("ref:" + options.ref);
					 *
					 * //event trigger
					*/
	
					/**
					 * //property handling
					 * $p.log("id:" + options.id);
					 * $p.log("style:" + options.style);
					 * $p.log("class:" + options.class);
					 * $p.log("ref:" + options.ref);
					 *
					 * //event trigger
					*/
					gr_cal.setStyle( "display" , "none" );
					scwin.disFlag = true;			
				
				
}}}]},{T:1,N:'script',A:{'ev:event':'onattributeChanged(type,value)',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj,type,value){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj); 
}}}]},{T:1,N:'script',A:{'ev:event':'ondestroyed()',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj); 
}}}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',dataType:'date',displayFormat:'yyyy-MM-dd',id:'ipt_from',style:'width: 100px;height: 21px;'},E:[{T:1,N:'script',A:{'ev:event':'onchange',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj);
    					var dateStr = ipt_from.getValue();
	    				if ( dateStr >  ipt_To.getValue() && ipt_To.getValue() != "" && dateStr != "" ){
	    					
	    					alert("TO DATE 보다 미래일자 입니다.");
	    					ipt_from.setValue("");
	    					return;
	    				} 
	    				if ( dateStr ){
	    						cal_fr.gotoCalendar(dateStr);
	    					} else {
	    						cal_fr.gotoCalendar($p.getCurrentServerDate( "yyyyMMdd" ));
	    					}
    			 	
}}}]}]},{T:1,N:'w2:span',A:{id:'',label:'~',style:''}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',dataType:'date',displayFormat:'yyyy-MM-dd',id:'ipt_To',style:'width: 100px;height: 21px;'},E:[{T:1,N:'script',A:{'ev:event':'onchange',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj);
    					var dateStr = ipt_To.getValue();
	    				if ( dateStr < ipt_from.getValue() && ipt_from.getValue() != "" && dateStr != "" ){
	    					alert("FROM DATE 보다 과거일자 입니다.");
	    					ipt_To.setValue("");
	    					return;
	    				}
	    				
	    				if ( dateStr ){
    						cal_to.gotoCalendar(dateStr);
    					} else {
    						cal_to.gotoCalendar($p.getCurrentServerDate( "yyyyMMdd" ));
    					}
	    				
    			 
}}}]}]},{T:1,N:'xf:image',A:{id:'img_to',src:'/sample/udc/bg_btn_calendar_ico.png',style:'width: 22px;height: 19px;'},E:[{T:1,N:'script',A:{'ev:event':'onclick(e)',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj,e){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj);
    					if (scwin.disFlag){
	    					scwin.disFlag = false;
	    					gr_cal.setStyle( "display" , "block" );
	    					
	    					if ( ipt_To.getValue() ){
	    						cal_to.gotoCalendar(ipt_To.getValue());
	    					} else {
	    						cal_to.gotoCalendar($p.getCurrentServerDate( "yyyyMMdd" ));
	    					}
	    					
	    					if ( ipt_from.getValue() ){
	    						cal_fr.gotoCalendar(ipt_from.getValue());
	    					} else {
	    						cal_fr.gotoCalendar($p.getCurrentServerDate( "yyyyMMdd" ));
	    					}
	    				} else {
	    					scwin.disFlag = true;
	    					gr_cal.setStyle( "display" , "none" );
	    				}
	    				
    			 
}}}]}]}]},{T:1,N:'xf:group',A:{style:'overflow: hidden;width: 750px;display: none;',id:'gr_cal'},E:[{T:1,N:'xf:group',A:{style:'width:205px;position: relative;float:left;',id:''},E:[{T:1,N:'w2:calendar',A:{footerDiv:'false',style:'width: 100px;height: 100px;position: relative;',id:'cal_fr'},E:[{T:1,N:'script',A:{'ev:event':'onviewchange(info)',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj,info){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj);
	    					if ( info.newValue >  ipt_To.getValue() && ipt_To.getValue() != "" ){
		    					alert("TO DATE 보다 미래일자 입니다.");
		    					ipt_from.setValue("");
		    					return;
		    				} else {
		    					ipt_from.setValue( info.newValue );
		    					if ( info.newValue ){
		    						cal_fr.gotoCalendar(info.newValue);
		    					} else {
		    						cal_fr.gotoCalendar($p.getCurrentServerDate( "yyyyMMdd" ));
		    					}
		    					
		    					if ( ipt_To.getValue() ){
			    					scwin.disFlag = true;
			    					gr_cal.setStyle( "display" , "none" );
			    				}
		    				}
	    				
}}}]}]}]},{T:1,N:'xf:group',A:{style:'width:205px;position: relative;float:left;',id:''},E:[{T:1,N:'w2:calendar',A:{footerDiv:'false',style:'width: 100px;height: 100px;position: relative;',id:'cal_to'},E:[{T:1,N:'script',A:{'ev:event':'onviewchange(info)',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj,info){with(scopeObj){var udc_obj=WebSquare.util.getComponentById(WebSquare.scope_obj); 
	    					if ( info.newValue < ipt_from.getValue() && ipt_from.getValue() != "" ){
		    					alert("FROM DATE 보다 과거일자 입니다.");
		    					ipt_To.setValue( "" );
		    					return;
		    				} else {
			    				ipt_To.setValue( info.newValue );
			    				cal_to.gotoCalendar(info.newValue);
			    				
			    				if ( info.newValue ){
		    						cal_to.gotoCalendar(info.newValue);
		    					} else {
		    						cal_to.gotoCalendar($p.getCurrentServerDate( "yyyyMMdd" ));
		    					}
			    				if ( ipt_from.getValue() ){
			    					scwin.disFlag = true;
			    					gr_cal.setStyle( "display" , "none" );
			    				}
		    				}
	    				
}}}]}]}]}]}]}]}]}]})