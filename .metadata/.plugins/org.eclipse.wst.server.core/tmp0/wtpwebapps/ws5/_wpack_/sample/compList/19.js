/*amd /sample/compList/19.xml 3880 0aa231b51f538cbef6254ad9d16671f912cec2a5a20cab353c4d80b84b1446be */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		scwin.addWidget("E01");
	};
	
	scwin.ui_addWidget_onviewchange = function(info) {
		//var curType = info.newValue;
		scwin.addWidget(info.newValue);
		this.setValue("");
	};
	
	scwin.addWidget = function(type){
		var wTitle, wSrc, wWidth=3, wHeight=3, wPath = "/sample/compList/widgetContent/", wId;
		
		switch(type){
			case "C01":
				wTitle = "기기 유형별 조회수";
				wSrc = wPath+"wcPage2.xml";
			break;
			case "C02":
				wTitle = "성별 조회수";
				wSrc = wPath+"wcPage3.xml";
			break;
			case "C03":
				wTitle = "일별 조회수";
				wSrc = wPath+"wcPage1.xml";
			break;
			case "E01":
				wTitle = "사용자 조회";
				wSrc = wPath+"wcPage4.xml";
				wHeight = 5;	
			break;
			case "E02":
				wTitle = "캘린더";
				wSrc = wPath+"wcPage5.xml";
				wHeight = 4;
				wWidth = 3;	
			break;
			default : return;
		}
		
		wId = "W"+type;
		
		if(ui_widget.getWidgetById( wId )){
			ui_widget.moveWidget( wId , 0 , 0 );	
		}
		
		var opt = {
			id : wId,
			src : wSrc,
			title : wTitle,
			x : 0,
			y : 0,
			scope : true,
			unitWidth : wWidth,
    		unitHeight : wHeight
		};
		
		//ui_widget.getWidgetById( id );
		
		ui_widget.addWidgets( opt );
		
	};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'absBox'},E:[{T:1,N:'xf:group',A:{class:'section_desc ',id:'',style:'padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{id:'section',label:'WidgetContainer로 웹스퀘어 파일을 동적으로 구성할 수 있다.<br/>( source : 19.xml )',style:'max-height: 36px;'}}]},{T:1,N:'xf:group',A:{id:'',style:'position: absolute;left: 0px;right: 0px;top: 60px;bottom: 0px;',class:'section03'},E:[{T:1,N:'w2:textbox',A:{label:'WidgetContainer',id:'',style:'',class:'contTitle02 dmb'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'ofh pl10'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'fl'},E:[{T:1,N:'xf:select1',A:{disabledClass:'w2selectbox_disabled',appearance:'minimal',chooseOptionLabel:'위젯 추가',visibleRowNum:'10',direction:'auto',chooseOption:'true',class:'btnWidgetSelectbox',displayMode:'label',optionOrder:'false','ev:onviewchange':'scwin.ui_addWidget_onviewchange',id:'ui_addWidget',ref:'',style:'',allOption:'',submenuSize:'auto',disabled:'false'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용자 조회'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'캘린더'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기기 유형별 조회수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'성별 조회수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일별 조회수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C03'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'position: absolute;left:10px;right: 10px;top:80px;bottom: 10px;'},E:[{T:1,N:'w2:widgetContainer',A:{minUnitWidth:'',widgetMove:'true',cols:'6',horizontalMargin:'5',verticalMargin:'5',params:'',maxUnitWidth:'',widgetResize:'true',mode:'pushpull',threshold:'700',id:'ui_widget',style:'height: 100%;box-sizing:border-box;background-color: #fefefe;',unitHeightPixel:'100'}}]}]}]}]}]}]})