//add tab
scwin.fn_addTabContent = function(tabKey, tabNm, tabUrl, naviTitle, isWframe) {
	
	var tmpTabIdx = ui_tabMain.getTabIndex(tabKey),
		maxTabCount = 10,
		curTabCount = ui_tabMain.getTabCount(),
		i,
		tabOptions,
		contentsOptions;
	
	
	if (curTabCount === maxTabCount) {
			
		if (confirm("권장 창의 개수는 " + maxTabCount + "개까지 입니다.\n모든 창을 닫고 다시 여시겠습니까?")) {
			ui_tabMain.setSelectedTabIndex(0);
			ui_tabMain.deleteAllTabs();
		} else {
			return;
		}
	
	}

	tabOptions = {
		label : tabNm,
		closable : true,
		openAction : "select"
	};
	
	contentsOptions = {
		src : tabUrl
	};
	
	if(isWframe === true) {
		contentsOptions.wframe = true;
		contentsOptions.scope = true;
	}

	Promise.resolve().then(function() {
	   return ui_tabMain.addTab(tabKey, tabOptions, contentsOptions);
	}).then(function(tabKey) {
		//선택한 tab 활성화.
	   var tabIndex = ui_tabMain.getTabIndex(tabKey);
	   return ui_tabMain.setSelectedTabIndex(tabIndex);
	});
	
	

};

scwin.sub_compList_submitdone = function(e) {
	leftMenuGrp.getWindow().scwin.fn_setToggleMenu("dc_compList");
};