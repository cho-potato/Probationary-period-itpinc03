/*amd /training/type2/training2_ui.xml 6912 0a408fbbe41e1a45762e51d888a39cf3cbf2d424b391402fda1db7d36c1a1e82 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	scwin.onpageload = function() {
		alert("안녕하세요");
	};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:'',class:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'border: 1px solid gray;overflow: hidden;margin-bottom: 10px;padding: 10px 0px 0px 10px;'},E:[{T:1,N:'xf:group',A:{style:'width:220px;float: left;margin: 0px 10px 10px 0px;',id:'',class:''},E:[{T:1,N:'w2:span',A:{style:'',label:'성별 : ',id:''}},{T:1,N:'xf:select1',A:{selectedData:'true',submenuSize:'auto',chooseOption:'',allOption:'',displayMode:'label',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',optionOrder:'false',disabled:'false',style:'width: 148px;height: 23px;',id:'',direction:'auto'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{id:'',style:'width:220px;float: left;margin: 0px 10px 10px 0px;',class:''},E:[{T:1,N:'w2:span',A:{id:'',label:'직급 : ',style:''}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'',optionOrder:'false',ref:'',selectedData:'true',style:'width: 148px;height: 23px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{id:'',style:'width:180px;float: right;margin: 0px 10px 10px 0px;text-align: right;'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'',id:'',style:'width: 80px;margin-right: 10px;',type:'button',class:'btn_cm sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'',id:'',style:'width: 80px;',type:'button',class:'btn_cm sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{style:'margin-bottom: 10px;',id:'',class:'btnbox'},E:[{T:1,N:'w2:span',A:{label:'0',style:'float: right;',id:'',dataType:'',displayFormatter:'',displayFormat:''}},{T:1,N:'xf:trigger',A:{'ev:onclick':'',id:'btnInsert',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입력'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'',id:'btnDelete',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제(delete)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'',id:'btnRemove',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제(remove)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'',id:'btnDeleteRows',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다중삭제(deleteRows)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'',id:'btnRemoveRows',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다중삭제(removeRows)'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'',id:'btnInit',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'',id:'btnExcelDown',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ExcelDown'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'',id:'btnExcelUp',style:'float: left;margin-right: 10px;',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ExcelUp'}]}]}]},{T:1,N:'w2:gridView',A:{applyAllColumnStyle:'false',dataList:'',defaultCellHeight:'20',id:'',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',showSortableUseFilter:'false',style:'height: 250px;margin-bottom: 10px;',summaryAuto:'false',summaryOnlyAuto:'false',useFilterList:'false',useShiftKey:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',style:'',value:'',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;',id:'',class:'w2tb',adaptive:'layout',adaptiveThreshold:'700'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'이름'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{id:'',style:'width: 144px;height: 23px;',ref:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'성별'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{id:'',selectedIndex:'0',appearance:'full',style:'min-width: 150px;min-height: 21px;',ref:'',rows:'1',renderType:'radiogroup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'입사일'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',id:'',weekStartsOn:'0',style:'width: 150px;height: 23px;',renderDiv:'true',focusOnDateSelect:'false',calendarValueType:'yearMonthDate',rightAlign:'false',renderType:'component',ref:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'직급'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'',optionOrder:'false',selectedData:'true',style:'width: 148px;height: 21px;',submenuSize:'auto',ref:''}}]}]}]}]}]}]}]})