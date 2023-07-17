/*amd /sample/compList/20.xml 4303 2ab88c4bf85648cbb38842ff4a64d1e8ef4e76d73b3163e6e5f5566c55d179bb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'value',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json',action:'/sample/compList/data/mapData1.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'submission2',ref:'',target:'data:json',action:'/sample/compList/data/mapData2.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'submission3',ref:'',target:'data:json',action:'/sample/compList/data/mapData3.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}}]},{T:1,N:'style'},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        	
			scwin.onpageload = function() {
				$p.executeSubmission( "submission1");
			};
        	
            scwin.colorScale1 = d3.scale.linear()
            .range(["red", "yellow", "green", "turquoise", "blue"])
            .domain([0, 0.25, 0.5, 0.75, 1]);


            scwin.mapchart1_onbeforemapchange = function ( info ) {
              	if(info.newMapCode.length >= 2) {
              		return false; // 지도 확장기능 사용하지 않음 
              	}
            };

            scwin.mapchart1_onmapdatachange = function(dataListId) {
                var dataList = WebSquare.util.getComponentById(dataListId);
                switch(dataListId) {
                case "dataList1" : 
                    var data = dataList.getAllJSON();
                    for(var i = 0; i < data.length; i++) {
                        var municipality = d3.select("#" + this.id + "_map").select(".municipality.c" + data[i].code);
                        municipality.style("fill", scwin.colorScale1(data[i].value));
                    }
                    break;
                }                
            };
           
			scwin.trigger1_onclick = function(e) {
				$p.executeSubmission(selectbox1.getValue());
			};
			
			scwin.aa = function(str, str1){
				if(str == "경기도"){
					return "test";
				}
			};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc',id:'',style:'dp'},E:[{T:1,N:'w2:textbox',A:{id:'section',label:'MapChart는 d3을 이용해 우리나라 전국지도에 입력받은 데이터를 다양한 형태로 시각화하여 표현하는 컴포넌트이다.<br/><br/>MapChart는 d3를 사용하여 구현한 지도 형태의 컴포넌트로서 인스웨이브는 d3에서 제공한 바이너리, 샘플, 문서를 그대로 제공해드려야 하며 소스, 샘플, 문서에 대한 버그수정, 기능추가 및 번역 작업을 제공해 드리지 않습니다.<br/><br/>( source : 20.xml )',style:'color:#30150C;'}}]},{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'section03 dmb'},E:[{T:1,N:'w2:textbox',A:{class:'contTitle02',id:'',label:'Map Chart',style:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'dp'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'ofh'},E:[{T:1,N:'w2:mapchart',A:{style:'position: relative;width:100%;height:500px;',id:'mapchart1',dataMapPath:'/websquare/_websquare_/externalJS/mapchart'}}]}]}]}]}]}]}]}]})