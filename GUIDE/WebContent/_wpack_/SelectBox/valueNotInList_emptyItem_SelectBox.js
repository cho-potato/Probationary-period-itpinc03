/*amd /SelectBox/valueNotInList_emptyItem_SelectBox.xml 1861 f0c19ab1dccb97eaf9ee670c11700fd57cb8361fc103814413cedf6c0c11ceb2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

scwin.trigger1_onclick = function (e) {
    select1.setValue("Paris");
    var index = select1.getSelectedIndex();
    alert(index);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:150px;height:40px;background-color:#C0C0C0;font-size:20px;font-family:monospace;font-style:normal;font-weight:bolder;margin: 100px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setValue()'}]}]},{T:1,N:'xf:select1',A:{id:'select1',chooseOption:'',style:'width: 200px;height: 40px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',valueNotInList:'keepValue',emptyItem:'false'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Busan'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Daegu'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Jeju'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]}]}]})