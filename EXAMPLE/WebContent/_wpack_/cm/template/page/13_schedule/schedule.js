/*amd /cm/template/page/13_schedule/schedule.xml 2383 714a4feabeaae826e155eb94899d27ba2ebdb65fcdc51c69f89a7ba41d97354d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
			scwin.onpageload = function() {
				$(".btn_fav").click(function(){
					$(".btn_fav").toggleClass("on");
				});
			};
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_fav',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'화면타이틀',style:'',tagname:''}},{T:1,N:'xf:group',A:{class:'breadcrumb',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'home',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Home'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1Depth Menu'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2Depth Menu'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:span',A:{id:'',label:'3Depth Menu',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'calendarbox',id:''},E:[{T:1,N:'w2:scheduleCalendar',A:{dataList:'data:dataList1',defaultDate:'',editable:'true',endColumn:'end',eventLimit:'true',eventOrderColumn:'',headerLeftBtn:'true',headerRightBtn:'true',headerTitle:'true',id:'scheduleCalendar1',idColumn:'id',includeScheduleEnd:'false',ioFormat:'yyyyMMdd',lang:'ko',locale:'ko',nextDayThreshold:'',selectable:'true',startColumn:'start',style:'width: 100%;height: 600px',themeColumn:'',timeFormat:'',titleColumn:'title',tooltipDisplay:'',version:'3.6'}}]}]}]}]}]})