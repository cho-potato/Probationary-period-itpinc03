/*amd /sample/compFunc/fn_dataFormat.xml 5310 a7da5586037483cd4d616317c04e5cf3d8e61cdfb9c7f5e8171b7fde9f854a83 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_sampleDataForm'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'json',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'array',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arrayString',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'xml',name:'name4',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'json',E:[{T:4,cdata:'[\n	{ "SEQ_NO":1, "SIGUNGUCODE":"11110", "STREETNUM":"2005001", "STREET":"세종대로" },\n	{ "SEQ_NO":2, "SIGUNGUCODE":"11110", "STREETNUM":"2005001", "STREET":"세종대로" }\n]'}]},{T:1,N:'array',E:[{T:4,cdata:'{\n	"columnInfo":["SEQ_NO", "SIGUNGUCODE", "STREETNUM", "STREET"],\n	"data":[1, "11110", "2005001", "세종대로", 2, "11110", "2005001", "세종대로"]\n}'}]},{T:1,N:'arrayString',E:[{T:4,cdata:'\'"1","11110","2005001","세종대로","Sejong-daero","00","서울특별시","종로구","2","NULL","NULL","NULL","NULL","0","NULL","NULL","Seoul","Jongno-gu","NULL","20100520","NULL","2","11110","2005001","세종대로","Sejong-daero","01","서울특별시","종로구","1","119","세종로","NULL","NULL","0","NULL","NULL","Seoul","Jongno-gu","Sejongno","20100520","NULL"\''}]},{T:1,N:'xml',E:[{T:4,cdata:'&lt;list id="dlt_ZipCodeStreet"&gt;\n	&lt;map&gt;\n		&lt;SEQ_NO&gt;1&lt;/SEQ_NO&gt;\n		&lt;SIGUNGUCODE&gt;11110&lt;/SIGUNGUCODE&gt;\n		&lt;STREETNUM&gt;2005001&lt;/STREETNUM&gt;\n		&lt;STREET&gt;세종대로&lt;/STREET&gt;\n	&lt;/map&gt;\n	&lt;map&gt;\n		&lt;SEQ_NO&gt;2&lt;/SEQ_NO&gt;\n		&lt;SIGUNGUCODE&gt;11110&lt;/SIGUNGUCODE&gt;\n		&lt;STREETNUM&gt;2005001&lt;/STREETNUM&gt;\n		&lt;STREET&gt;세종대로&lt;/STREET&gt;\n	&lt;/map&gt;\n&lt;/list&gt;'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

}}}]}]},{T:1,N:'body',E:[{T:1,N:'xf:group',A:{class:'wrapper',id:''},E:[{T:1,N:'xf:group',A:{class:'section_desc',id:'',style:'padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'DataList에 셋팅할 수 있는 데이터의 포맷 예시이다.<br/>Submission에 지정할 수 있는 타입은 JSON, Array, XML이다.(속성 중 target과 reference의 dataType에 할당.)<br/>1차원 ARRAY은 Submission에 지정할 수 없으며 DataList의 API 중 setData를 이용하여 셋팅해야한다.<br/>( source : fn_dataFormat.xml )',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'mb20'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{style:'',label:'JSON - 기본 권장 포맷',id:'',class:'df_tt dmb'}},{T:1,N:'xf:group',A:{style:'',id:'',tagname:'pre',class:'preSamp'},E:[{T:1,N:'w2:textbox',A:{tagname:'samp',ref:'data:dma_sampleDataForm.json',style:'',id:'',label:'',class:''}}]},{T:1,N:'w2:textbox',A:{class:'dmb',id:'',label:'Submission 설정 예시',style:''}},{T:1,N:'w2:textbox',A:{class:'dbd dp',id:'',label:'<span class=\'txtRed\'>target="data:json</span>,[데이터 리스트 아이디]"<br/>mediatype="application/json"',style:''}}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'mb20'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt dmb',id:'',label:'ARRAY - 대용량 데이터 권장 포맷',style:''}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'pre',class:'preSamp'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',ref:'data:dma_sampleDataForm.array',style:'',tagname:'samp'}}]},{T:1,N:'w2:textbox',A:{class:'dmb',id:'',label:'Submission 설정 예시',style:''}},{T:1,N:'w2:textbox',A:{class:'dbd dp',id:'',label:'<span class=\'txtRed\'>target="data:array</span>,[데이터 리스트 아이디]"<br/>mediatype="application/json"',style:''}}]}]},{T:1,N:'xf:group',A:{class:'mb20',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt dmb',id:'',label:'1차원 ARRAY',style:''}},{T:1,N:'xf:group',A:{class:'preSamp',id:'',style:'',tagname:'pre'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',ref:'data:dma_sampleDataForm.arrayString',style:'',tagname:'samp'}}]},{T:1,N:'w2:textbox',A:{class:'dmb',id:'',label:'Submission 설정 예시',style:''}},{T:1,N:'w2:textbox',A:{class:'dbd dp',id:'',label:'<span class=\'txtRed\'>target : ""</span><br/>mediatype="text/plain"',style:''}}]}]},{T:1,N:'xf:group',A:{class:'mb20',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt dmb',id:'',label:'XML',style:''}},{T:1,N:'xf:group',A:{class:'preSamp',id:'',style:'',tagname:'pre'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',ref:'data:dma_sampleDataForm.xml',style:'',tagname:'samp'}}]},{T:1,N:'w2:textbox',A:{class:'dmb',id:'',label:'Submission 설정 예시',style:''}},{T:1,N:'w2:textbox',A:{class:'dbd dp',id:'',label:'<span class=\'txtRed\'>target="data:xml</span>,[데이터 리스트 아이디]"<br/>mediatype="application/xml"',style:''}}]}]}]}]}]}]})