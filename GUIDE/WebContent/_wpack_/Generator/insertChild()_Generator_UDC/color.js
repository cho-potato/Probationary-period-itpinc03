/*amd /Generator/insertChild()_Generator_UDC/color.xml 3260 2d475a7bff6c88a7dbf1b1ec68632d6dfcc849bbc58d42849d4877c84997052a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.addBorder,scwin.removeBorder,scwin.getCurrentColor,scwin.showCurrentColor'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * @component
 * @company 
 * @developer inswave
 * @variableClone true
 * @notSupportBrowser 
 * @version 
 * @htmlRender 
 * @icon 
 * @disableIcon 
 * @width 50%
 * @height 50%
 * @description Show the color based on the user's input.
 */ 

/**
 * @property
 * @name style
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @bindparent 
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
 * @bindparent 
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
 * @bindparent 
 * @description desc
 */ 

/**
 * @property
 * @name initialColor
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default white
 * @necessary N
 * @bindparent 
 * @description Color to be displyed in the default state.
 */  

scwin.onpageload = function() {
	var options = $p.getOptions();
    var initialColor = options.initialColor;
    group1.setStyle("background-color", initialColor);    
};

/**
 * @method
 * @name addBorder
 * @description Add thick red border. 
 * @param 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.addBorder = function() {
    group1.setStyle("border", "solid 10px red");
}

/**
 * @method
 * @name removeBorder
 * @description Remove the border.
 * @param 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.removeBorder = function() {
    group1.setStyle("border", "none");
}

/**
 * @method
 * @name showCurrentColor
 * @description Show the current color. 
 * @param 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.showCurrentColor = function() {
    var color = input1.getValue();
    alert("The color to be changed to " + color + ".");
}

/**
 * @event
 * @name oncolorchange
 * @description Triggered upon the color being changed.
 * @param 
 * @example 
 */ 
scwin.emit_oncolorchange = function() {
	$p.emit("oncolorchange");
}

scwin.input1_oneditenter = function() {
    var color = input1.getValue();
    group1.setStyle( "background-color", color);
    $p.emit("oncolorchange");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'group1',style:'padding: 30px;padding: 30px;margin: 20px;border: solid 2px black;height: 50%;width: 50%;'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width:50%;height:30%;font-size: 20px;',id:'input1','ev:oneditenter':'scwin.input1_oneditenter'}}]}]}]}]})