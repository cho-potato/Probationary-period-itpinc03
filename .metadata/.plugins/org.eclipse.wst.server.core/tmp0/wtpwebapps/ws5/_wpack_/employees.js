/*amd /employees.xml 2123 2e4c6d186d8d5c3646948c2298443ed0bec71a69c1b0da9aacde2de678cd48fe */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_employessList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'EMPL_ID',name:'사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FULL_NAME',name:'사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'HIRE_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'MARRIED',name:'결혼유무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SALARY',name:'급여',dataType:'text'}},{T:1,N:'w2:key',A:{id:'GENDER',name:'성별',dataType:'text'}},{T:1,N:'w2:key',A:{id:'DEPT_ID',name:'부서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMPL_MEMO',name:'메모',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_reqParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'EMPL_ID',name:'번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sub_Retrieve',ref:'data:json,dc_reqParam',target:'data:json,dc_employessList',action:'/employess/selectEmployessList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중','ev:submit':'scwin.sub_Retrieve_submit','ev:submitdone':'scwin.sub_Retrieve_submitdone','ev:submiterror':'scwin.sub_Retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.sub_Retrieve_submit = function(e) {

};

scwin.sub_Retrieve_submitdone = function(e) {

};

scwin.sub_Retrieve_submiterror = function(e) {

};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})