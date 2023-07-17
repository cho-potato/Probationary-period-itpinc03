/*amd /$p/_General/dynamicCreate_$p_UDC/dynamicCreate_$p_UDC.xml 1199 773f906bdba60969756b1f0952ac74b216d5fd25989ffb341f939b4217891125 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

scwin.trigger1_onclick = function (e) {
    $p.dynamicCreate("udc1", "udc_color", {});
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_color',type:'page',variableClone:'true',src:'/cm/udc/color.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:249px;height:37px;display: block;font-size:20px;font-family:monospace;font-style:normal;font-weight:bolder;margin: 20px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.dynamicCreate()'}]}]}]}]}]})