/*amd /Generator/insertChild()_Generator_UDC/insertChild()_Generator_UDC.xml 1688 fddec7fa123b59fa1aa3e06b388bac0ac6f3053ac59b3757064cc653d43d64d1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

scwin.trigger1_onclick = function (e) {
    var count = input1.getValue();
    for (var i = 0; i < count; i++) {
        generator1.insertChild(i);
    }
    };
}}}]},{T:1,N:'w2:require',A:{as:'udc_color',type:'page',variableClone:'true',src:'/cm/udc/color.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'input1',style:'width:249px;height:37px;font-size:20px;font-family:monospace;font-style:normal;font-weight:bolder;margin: 40px;margin-bottom: 0px;text-align: left;padding-left: 20px;display: block'}},{T:1,N:'xf:trigger',A:{type:'button',style:'width:249px;height:37px;font-size:20px;font-family:monospace;font-style:normal;font-weight:bolder;margin: 40px;text-align: left;padding-left: 20px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'insertChild()'}]}]},{T:1,N:'w2:generator',A:{style:'margin-left: 20px;',id:'generator1'},E:[{T:1,N:'w2:udc_color',A:{style:'width: 50%;height: 50%;',initialColor:'white'}}]}]}]}]})