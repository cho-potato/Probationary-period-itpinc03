//change content
scwin.fn_clickSecondMenu = function(tabKey, tabNm, tabUrl, naviTitle) {
	Promise.resolve().then(function() {
		iframe1.setSrc(tabUrl);
    } );
};

scwin.sub_compList_submitdone = function() {
	scwin.fn_setToggleMenu("dc_compList");
};