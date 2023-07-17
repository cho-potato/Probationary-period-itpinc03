/*amd /_UDC/method_UDC_SP5/method_UDC_SP5.xml 2145 e3b364aefae7ae19f17603f0e46ca8b17c2fbc8b6f67f2242c05b8967b3d8a97 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    udc_color1.addBorder();
};

scwin.trigger2_onclick = function(e) {
    udc_color1.removeBorder();
};

scwin.trigger3_onclick = function(e) {
    udc_color1.showCurrentColor();
};

}}}]},{T:1,N:'w2:require',A:{as:'udc_color',type:'page',variableClone:'true',src:'/cm/udc/color.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:230px;height:40px;display:block;font-size:20px;font-family:monospace;font-style:normal;font-weight:bolder;margin:20px;margin-bottom: 20px;text-align:left;padding-left:20px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'addBorder()'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:230px;height:40px;display:block;font-size:20px;font-family:monospace;font-style:normal;font-weight:bolder;margin:20px;margin-bottom: 20px;text-align:left;padding-left:20px;',id:'trigger2','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'removeBorder()'}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'width:230px;height:40px;display:block;font-size:20px;font-family:monospace;font-style:normal;font-weight:bolder;margin:20px;margin-bottom: 20px;text-align:left;padding-left:20px;',id:'trigger3','ev:onclick':'scwin.trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'showCurrentColor()'}]}]},{T:1,N:'w2:udc_color',A:{style:'width: 50%;height: 50%;',initialColor:'white',id:'udc_color1'}}]}]}]})