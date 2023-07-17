/*amd /cm/udc/selectPage.xml 3521 57e4477fc3c77450cd00db7b6d2545d1313cbaf1d0c939635173cd687f3bf6c6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.setSelectPage,scwin.getSelectVal,scwin.setSelectVal,scwin.getTotalValue,scwin.setTotalValue'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

/**
 * @component
 * @company 
 * @developer user
 * @variableClone false
 * @notSupportBrowser 
 * @version 
 * @htmlRender 
 * @icon 
 * @disableIcon 
 * @width 
 * @height 
 * @description 
 */ 

/**
 * @property
 * @name style
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description desc
 */

/**
 * @property
 * @name class
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description desc
 */

/**
 * @property
 * @name id
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description desc
 */

scwin.onpageload = function () {
    
}



/**
 * @method
 * @name setSelectPage
 * @description pageList 기능을 하는 selectbox의 값을 셋팅한다.
 * @param {string} num desc 
 * @returns 
 * @hidden N
 * @exception 
 * @example ${example}
 */ 
scwin.setSelectPage = function (num) {
    selCount.removeAll(true);

    for (var i = 1; i <= num; i++) {
        selCount.addItem(i, i);
    }

    selCount.setSelectedIndex(0);
}
/**
 * @method
 * @name getSelectVal
 * @description desc
 * @param
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.getSelectVal = function () {
    return selCount.getValue();
}


/**
 * @method
 * @name setSelectVal
 * @description pageList 기능을 하는 selectbox의 값을 셋팅한다.
 * @param {string} arg desc 
 * @returns 
 * @hidden N
 * @exception 
 * @example ${example}
 */ 
scwin.setSelectVal = function (arg) {
    selCount.setValue(arg);
}




/**
 * @method
 * @name getTotalValue
 * @description 전체 Total 값을 가져온다.
 * @param {string} num desc 
 * @returns 
 * @hidden N
 * @exception 
 * @example ${example}
 */ 
scwin.getTotalValue = function () {
    var value = spnTotal.getValue();
    return value.replace("/", "");
}


/**
 * @method
 * @name setTotalValue
 * @description 전체 Total 값을 셋팅한다.
 * @param {string} arg desc 
 * @returns 
 * @hidden N
 * @exception 
 * @example ${example}
 */ 
scwin.setTotalValue = function (arg) {
    spnTotal.setValue("/" + arg);
}



/**
 * @event
 * @name onSelChange
 * @description desc
 * @param 
 * @example 
 */ 
scwin.emit_onSelChange = function() {
	$p.emit("onSelChange");
}



scwin.selCount_onviewchange = function(info) {
    scwin.emit_onSelChange();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'text-align: center;'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',style:'width: 50px;',disabled:'false',id:'selCount',allOption:'false',direction:'auto','ev:onviewchange':'scwin.selCount_onviewchange'}},{T:1,N:'w2:span',A:{style:'',label:'',id:'spnTotal'}}]}]}]}]})