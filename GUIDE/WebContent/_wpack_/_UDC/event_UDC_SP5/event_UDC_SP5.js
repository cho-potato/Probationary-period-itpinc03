/*amd /_UDC/event_UDC_SP5/event_UDC_SP5.xml 1065 7b6a93cbc26d1d24138e96d8833f8631cac54e4e2fff0143f01bd51fb9936b34 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.udc_color1_oncolorchange = function() {
    alert("The color is about to change.");
};

}}}]},{T:1,N:'w2:require',A:{as:'udc_color',type:'page',variableClone:'true',src:'/cm/udc/color.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:udc_color',A:{style:'width: 50%;height: 50%;',initialColor:'white',id:'udc_color1','ev:oncolorchange':'scwin.udc_color1_oncolorchange'}}]}]}]})