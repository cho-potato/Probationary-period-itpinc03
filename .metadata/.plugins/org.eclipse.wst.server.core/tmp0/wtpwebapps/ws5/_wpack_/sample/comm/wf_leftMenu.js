/*amd /sample/comm/wf_leftMenu.xml 4147 3fad0b28a311e6d6d2dca7399d65ba0ad940306d8546ee7f0dca3f47fe9ec443 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model'},{T:1,N:'style',A:{type:'text/css'}},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
 
	// 토글형 메뉴 셋팅
	scwin.fn_setToggleMenu = function(dataListId) {
		var tmpDataArr = $p.getComponentById("mf_"+dataListId).getAllJSON(),
			tmpParentIdx = 0,
			dataObj,
			menuDepth,
			parentKey,
			tmpIdx,
			i,
			firstMenuLabel,
			menuGrp,
			secondGen,
			secondMenuLabel;
	
		//첫번째 메뉴 셋팅
		for (i=0; i<tmpDataArr.length; i++) {
			dataObj = tmpDataArr[i];
			menuDepth = dataObj.depth;
			parentKey = dataObj.key; // m1, m2
			tmpIdx = 0;
	
			if (menuDepth === "1") {
				// first generator에 컴포넌트 삽입 후, 값을 셋팅.
				tmpParentIdx = firstMenuGen.insertChild();
	
				firstMenuLabel = firstMenuGen.getChild(tmpParentIdx, "menu1_label");
				firstMenuLabel.setValue(dataObj.label);
	
				// 메뉴를 기본으로 펼쳐서 셋팅.
				menuGrp = firstMenuGen.getChild(tmpParentIdx, "firstMenuGrp");
				menuGrp.toggleClass("btn_01_open");
	
			} else if (menuDepth === "2") {
				secondGen = firstMenuGen.getChild(tmpParentIdx, "secondMenuGen");
				secondGen.setUserData("menuOpenYn", "Y");
	
				// second generator에 컴포넌트 삽입 후, 값을 셋팅.
				tmpIdx = secondGen.insertChild();
	
				secondMenuLabel = secondGen.getChild(tmpIdx, "menu2_label");
				secondMenuLabel.setValue(dataObj.label);
				secondMenuLabel.setUserData("ins_webPath", dataObj.webPath);
				secondMenuLabel.setUserData("ins_key", dataObj.key);
			}
		}
	};
	
	// 자녀 노드 보여주기
	scwin.fn_clickFirstMenu = function(firstGenIdStr, secondGenIdStr, menuIndex) {
		var firstGenObj = $p.getComponentById(firstGenIdStr),
			secondGenObj = firstGenObj.getChild(menuIndex, secondGenIdStr),
			menuGrp = firstGenObj.getChild(menuIndex, "firstMenuGrp");
		
		menuGrp.toggleClass("btn_01_open");
	
		if(secondGenObj.getUserData("menuOpenYn") === "Y") {
			secondGenObj.hide();
			secondGenObj.setUserData("menuOpenYn", "N");
		}else{
			secondGenObj.show();
			secondGenObj.setUserData("menuOpenYn", "Y");
		}
	};
	
	//left Menu에서 사용
	scwin.fn_slideBtnClick = function() {
		$p.main().contentGrp.toggleClass("reset");
		$p.main().leftMenuGrp.toggleClass("leftMenuGrpHide");
	};    			
	
	scwin.menu1_label_onclick = function(){
		scwin.fn_clickFirstMenu("firstMenuGen", "secondMenuGen", this.getGeneratedIndex());
	};
	
	scwin.menu2_label_onclick = function(){
		// Main에 있는 함수를 찾아야 함.
		$p.main().scwin.fn_clickSecondMenu( this.getUserData("ins_key"),this.getValue(), this.getUserData("ins_webPath") , this.getValue());
	};
	
	scwin.leftSlideBtn_onclick = function(e){
		scwin.fn_slideBtnClick();
	};
		

}}}]}]},{T:1,N:'body',E:[{T:1,N:'xf:group',A:{id:'slideGrp',class:'slide',style:'position: relative;width:200px;height:100%;border-right: 1px solid #b0b0b0;'},E:[{T:1,N:'w2:generator',A:{id:'firstMenuGen',style:''},E:[{T:1,N:'xf:group',A:{id:'menuGenGrp',class:'',style:''},E:[{T:1,N:'xf:group',A:{id:'firstMenuGrp',style:'',class:'leftMenuLbl1'},E:[{T:1,N:'w2:anchor',A:{id:'menu1_label',style:'',class:'',clickEventElement:'outerDiv','ev:onclick':'scwin.menu1_label_onclick'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'w2:generator',A:{id:'secondMenuGen',style:''},E:[{T:1,N:'xf:group',A:{id:'secondMenuGrp',style:'',class:'leftMenuLbl2'},E:[{T:1,N:'w2:anchor',A:{id:'menu2_label',style:'',class:'',clickEventElement:'outerDiv','ev:onclick':'scwin.menu2_label_onclick',escape:'false'},E:[{T:1,N:'xf:label'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'leftSlideBtn',style:'background-color: #4c4c4c;border-radius:0px 5px 5px 0px;position: absolute;top:0px;right: 0px;width: 9px;height : 60px;cursor:pointer;','ev:onclick':'scwin.leftSlideBtn_onclick',toolTip:'Menu Show/Hide'}}]}]}]})