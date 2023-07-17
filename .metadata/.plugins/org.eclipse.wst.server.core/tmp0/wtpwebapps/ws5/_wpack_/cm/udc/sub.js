/*amd /cm/udc/sub.xml 5419 3c65c322ffe957ad31a7c7a7f2b204afa0b32ac51729b7832951da94080b2547 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.setName,scwin.setContact,scwin.setTask,scwin.getName,scwin.getContact,scwin.getTask'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

/**
 * @component
 * @company 
 * @developer user
 * @variableClone true
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



/**
 * @property
 * @name color
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description udc의 바탕색을 지정합니다.
 */ 

scwin.onpageload = function() {
	// color 속성이 적용되도록 정의합니다.
    var options = $p.getOptions();
    var backgroundColor = options.color;
    grpSub.setStyle("background-color", backgroundColor);
};







/**
 * @method
 * @name setName
 * @description 이름을 입력합니다.
 * @param {string} arg arg 적용된 값이 이름에 입력됩니다. 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.setName = function(arg) {
    ipt_name.setValue(arg);
    $p.emit("onNameSet");
}




/**
 * @method
 * @name setContact
 * @description 연락처를 입력합니다.
 * @param {string} arg arg 적용된 값이 연락처에 입력됩니다. 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.setContact = function(arg) {
    ipt_contact.setValue(arg);
}




/**
 * @method
 * @name setTask
 * @description 담당업무를 입력합니다.
 * @param {string} arg arg 적용된 값이 담당업무에 입력됩니다. 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.setTask = function(arg) {
    ipt_task.setValue(arg);
}








/**
 * @method
 * @name getName
 * @description 이름에 적용된 값을 반환합니다.
 * @param 
 * @returns {string} name 이름을 반환합니다. 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.getName = function() {
    return ipt_name.getValue();
}






/**
 * @method
 * @name getContact
 * @description 연락처에 적용된 값을 반환합니다.
 * @param 
 * @returns {string} contact desc 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.getContact = function() {
    return ipt_contact.getValue();
}






/**
 * @method
 * @name getTask
 * @description 담당업무에 적용된 값을 반환합니다.
 * @param 
 * @returns {string} task desc 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.getTask = function() {
    return ipt_task.getValue();
}



/**
 * @event
 * @name onNameSet
 * @description 이름이 입력될 때 발생합니다.
 * @param 
 * @example 
 */ 
scwin.emit_onNameSet = function() {
	$p.emit("onNameSet");
}

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'',id:'grpSub',style:'padding: 5px;border: 2px solid olive;'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th req',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이름',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ipt_name',placeholder:'',style:'width:100%;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th req',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당 업무',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ipt_task',placeholder:'',style:'width:100%;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th req',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연락처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ipt_contact',placeholder:'',style:'width:100%;'}}]}]}]}]}]}]}]}]})