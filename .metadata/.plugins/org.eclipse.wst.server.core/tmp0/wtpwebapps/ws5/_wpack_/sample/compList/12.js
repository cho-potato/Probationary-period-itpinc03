/*amd /sample/compList/12.xml 8878 ad392da2f3d048c38467e8e9a793b2ec8800ae66fdee93b274abef9020c2c35e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dc_bookList',baseNode:'list',style:'',repeatNode:'data',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'title',name:'title',dataType:'text'}},{T:1,N:'w2:column',A:{id:'price',name:'price',dataType:'text'}},{T:1,N:'w2:column',A:{id:'img',name:'img',dataType:'text'}},{T:1,N:'w2:column',A:{id:'info',name:'info',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:'',use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'title',E:[{T:4,cdata:'Harry Potter'}]},{T:1,N:'price',E:[{T:4,cdata:'29.99'}]},{T:1,N:'img',E:[{T:4,cdata:'/img/book1.jpg'}]},{T:1,N:'info'}]},{T:1,N:'w2:row',E:[{T:1,N:'title',E:[{T:4,cdata:'Learning XML'}]},{T:1,N:'price',E:[{T:4,cdata:'39.95'}]},{T:1,N:'img',E:[{T:4,cdata:'/img/book2.gif'}]},{T:1,N:'info'}]},{T:1,N:'w2:row',E:[{T:1,N:'title',E:[{T:4,cdata:'XQuery Kick Start'}]},{T:1,N:'price',E:[{T:4,cdata:'49.99'}]},{T:1,N:'img',E:[{T:4,cdata:'/img/book3.jpg'}]},{T:1,N:'info'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

			//imports("uiplugin.popup");
		
			scwin.fn_openPopup = function(rowJSON, useIFrameMode, openType) {
				//dataObject{ dataType: ["xml","string","json","array"], data: "전달 데이터" , name :"변수명"}
				var _width = "230px";
				var _height = "250px";
				
				if(useIFrameMode == false){
					_width = "270px";
					_height = "300px";
				}
				
				var dataObj = {
					type : "json",
					data : rowJSON,
					name : "rowObj"
				};
		
				var options = {
					id : "popup1",
					//popupUrl : "popup.html",
					type : openType,
		
					width : _width,
					height : _height,
		
					top : "130px",
					left : "250px",
		
					popupName : "openPopup",
					modal : true,
					useIFrame : useIFrameMode,
		
					resizable : true,
					status : true,
					menubar : false,
					scrollbars : false,
					title : false,
		
					dataObject : dataObj
				};
				$p.openPopup("/sample/compList/12-popup.xml", options);
			}
		
			scwin.closePopup = function() {
				$p.closePopup("popup1");
			}
		
			scwin.gridView1_oncellclick = function(row, col) {
				var rowJSON = dc_bookList.getRowJSON(row);
				scwin.fn_openPopup(rowJSON, false, "wframePopup");
			};
		
			scwin.gridView3_oncellclick = function(row, col) {
				var rowJSON = dc_bookList.getRowJSON(row);
				scwin.fn_openPopup(rowJSON, true, "browserPopup");
			};
		
			scwin.gridView4_oncellclick = function(row, col) {
				floatingLayer1.show();
				// modal layer 적용.
				//$p.showModal(["floatingLayer1", "floatingLayer_group"]);
		
			};
		
			scwin.floatingLayer1_onclose = function() {
				floatingLayer1.hide();
				$p.hideModal();
			};
			scwin.onpageload = function() {
				/*
				if ( $p.getFrameId() != null ) {
					ui_ftl_grp.hide();
				}
				*/
			};
		

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:''},E:[{T:1,N:'xf:group',A:{class:'section_desc',id:'',style:'padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'[SPA 변수명].$w.openPopup($p.openPopup) 를 이용하여 팝업을 띄우는 예시와 FloatingLayer 컴포넌트를 이용하여 팝업을 표현한 예시이다.<br/>( source : 12.xml , popup source : 12-popup.xml )',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'overflow:hidden;'},E:[{T:1,N:'xf:group',A:{class:'section02 dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'contTitle02',id:'',label:'WebSquare popup window type',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',baseNode:'',dataList:'dc_bookList','ev:oncellclick':'scwin.gridView1_oncellclick',id:'gridView1',repeatNode:'',rowNumHeaderValue:'No.',rowNumVisible:'true',scrollByColumn:'false',style:'width: 480px;height: 100px;margin:6px auto;',visibleRowNum:'all'},E:[{T:1,N:'w2:header',A:{id:'header3',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{id:'column10',inputType:'text',style:'height:30px;',value:'Book Title',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'height:30px;',value:'price',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody3',style:''},E:[{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{id:'title',inputType:'text',style:'height:30px;',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'$#,###.#0',displayMode:'label',id:'price',inputType:'text',style:'height:30px;',width:'70'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'section02 dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'contTitle02',id:'',label:'WebSquare popup browser type',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',baseNode:'',dataList:'dc_bookList','ev:oncellclick':'scwin.gridView3_oncellclick',id:'gridView3',repeatNode:'',rowNumHeaderValue:'No.',rowNumVisible:'true',scrollByColumn:'false',style:'width: 480px;height: 100px;margin:6px auto;',visibleRowNum:'all'},E:[{T:1,N:'w2:header',A:{id:'header3',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{id:'column10',inputType:'text',style:'height:30px;',value:'Book Title',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'height:30px;',value:'price',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody3',style:''},E:[{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{id:'title',inputType:'text',style:'height:30px;',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'$#,###.#0',displayMode:'label',id:'price',inputType:'text',style:'height:30px',width:'70'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'section02 dmb',id:'ui_ftl_grp',style:''},E:[{T:1,N:'w2:textbox',A:{class:'contTitle02',id:'',label:'FloatingLayer Component',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',baseNode:'',dataList:'dc_bookList','ev:oncellclick':'scwin.gridView4_oncellclick',id:'gridView4',repeatNode:'',rowNumHeaderValue:'No.',rowNumVisible:'true',scrollByColumn:'false',style:'width: 480px;height: 100px;margin:6px auto;',visibleRowNum:'all'},E:[{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{id:'column3',inputType:'text',style:'height:30px;',value:'Book Title',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column4',inputType:'text',style:'height:30px;',value:'price',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{id:'title',imageClickFunction:'',imageHeight:'20',imageSrc:'',imageWidth:'20',imeMode:'disabled',inputType:'text',style:'height:30px;',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'$#,###.#0',displayMode:'label',id:'price',inputType:'text',style:'height:30px',width:'70'}}]}]}]}]}]}]},{T:1,N:'w2:floatingLayer',A:{id:'floatingLayer1',useResizeDrag:'false',title:'Book Info.',dragAlwaysView:'false',style:'position: absolute ;left:295px;top:65px;width:250px;height:250px;background:white;display: none;z-index: 99999;',class:'floatcss',bodyComplex:'true','ev:onclose':'scwin.floatingLayer1_onclose'},E:[{T:1,N:'xf:group',A:{id:'floatingLayer_group',style:'position: absolute;width: 100%;height: 100%;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'PRICE',style:'position: absolute ;left:112px;top:40px;width:101px;height:25px;font: bold 11px tahoma;'}},{T:1,N:'xf:image',A:{id:'',ref:'data:dc_bookList.img',src:'',style:'position: absolute ;left:12px;top:40px;width: 90px;height: 120px;'}},{T:1,N:'w2:textbox',A:{id:'',label:'',ref:'data:dc_bookList.title',style:'position: absolute ;left:12px;top:10px;width: 200px;height: 30px;font: bold 15px tahoma;'}},{T:1,N:'w2:textbox',A:{id:'',label:'REVIEW',style:'position: absolute ;left:112px;top:95px;width:101px;height:25px;font: bold 11px tahoma;'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.floatingLayer1_onclose',id:'',style:'position: absolute ;left:164px;top:180px;width: 50px;',type:'button',class:'btn_cm sch'},E:[{T:1,N:'xf:label',E:[{T:3,text:'close'}]}]},{T:1,N:'w2:textbox',A:{dataType:'number',displayFormat:'$#,###.#0',id:'',label:'',ref:'data:dc_bookList.price',style:'position: absolute ;left:112px;top:65px;width:101px;height:25px;font: bold 11px tahoma;'}},{T:1,N:'w2:textbox',A:{id:'',label:'',ref:'data:dc_bookList.info',style:'position: absolute ;left:112px;top:120px;width: 100px;height: 50px;'}}]}]}]}]}]})