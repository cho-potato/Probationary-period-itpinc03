/*amd /_DataCollection/onkeyset_DataMap.xml 1932 ca8610a62235c23312c2b36a295020ca61dbd8611a4436a4ac2bafd6c0e97717 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap1',style:'','ev:onkeyset':'scwin.dataMap1_onkeyset'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'key1',name:'Continent'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key2',name:'Country'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key3',name:'City'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'Asa',E:[{T:4,cdata:' '}]},{T:1,N:'Asia',E:[{T:4,cdata:' '}]},{T:1,N:'Korea',E:[{T:4,cdata:' '}]},{T:1,N:'Seoul',E:[{T:4,cdata:' '}]},{T:1,N:'key1',E:[{T:4,cdata:'Asia'}]},{T:1,N:'key2',E:[{T:4,cdata:'Korea'}]},{T:1,N:'key3',E:[{T:4,cdata:'Seoul'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

scwin.trigger1_onclick = function (e) {
    dataMap1.set("key3", "Busan");
};

scwin.dataMap1_onkeyset = function(info) {
    var info = JSON.stringify(info);
    alert(info);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:126px;height:39px;background-color:#C0C0C0;font-size:30px;font-family:monospace;font-style:normal;font-weight:bolder;margin: 100px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'set()'}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',style:'width: 144px;height:39px;font-size:30px;',ref:'data:dataMap1.key3'}}]}]}]})