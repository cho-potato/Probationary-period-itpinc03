/*amd /FusionChart-003/fusionchart_create1.xml 5419 175f7a67bd4a074636f4e0b38ebab38c115af8550a80c8e06409cd24f7e2a9cc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'chartData2',baseNode:'list',style:'',repeatNode:'data',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Month',name:'Month',dataType:'text'}},{T:1,N:'w2:column',A:{id:'quarter1',name:'quarter1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'quarter2',name:'quarter2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'quarter3',name:'quarter3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'quarter4',name:'quarter4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
		scwin.onpageload = function() {
			var jsonData = [
    		    {
    		        "Month": "January",
    		        "quarter1": "27400",
    		        "quarter2": "10000",
    		        "quarter3": "10800",
    		        "quarter4": "17000",
    		        "rowStatus": "R"
    		    },
    		    {
    		        "Month": "February",
    		        "quarter1": "11500",
    		        "quarter2": "28110",
    		        "quarter3": "23990",
    		        "quarter4": "15000",
    		        "rowStatus": "R"
    		    },
    		    {
    		        "Month": "March",
    		        "quarter1": "12500",
    		        "quarter2": "29800",
    		        "quarter3": "32700",
    		        "quarter4": "27000",
    		        "rowStatus": "R"
    		    },
    		    {
    		        "Month": "April",
    		        "quarter1": "27400",
    		        "quarter2": "10000",
    		        "quarter3": "29000",
    		        "quarter4": "12000",
    		        "rowStatus": "R"
    		    },
    		    {
    		        "Month": "May",
    		        "quarter1": "1500",
    		        "quarter2": "10600",
    		        "quarter3": "10000",
    		        "quarter4": "8000",
    		        "rowStatus": "R"
    		    },
    		    {
    		        "Month": "June",
    		        "quarter1": "19700",
    		        "quarter2": "32600",
    		        "quarter3": "22600",
    		        "quarter4": "17000",
    		        "rowStatus": "R"
    		    },
    		    {
    		        "Month": "July",
    		        "quarter1": "27400",
    		        "quarter2": "29700",
    		        "quarter3": "31900",
    		        "quarter4": "27000",
    		        "rowStatus": "R"
    		    },
    		    {
    		        "Month": "August",
    		        "quarter1": "27400",
    		        "quarter2": "10000",
    		        "quarter3": "21800",
    		        "quarter4": "19000",
    		        "rowStatus": "R"
    		    },
    		    {
    		        "Month": "September",
    		        "quarter1": "27400",
    		        "quarter2": "31800",
    		        "quarter3": "42800",
    		        "quarter4": "32000",
    		        "rowStatus": "R"
    		    },
    		    {
    		        "Month": "October",
    		        "quarter1": "27400",
    		        "quarter2": "15000",
    		        "quarter3": "11000",
    		        "quarter4": "6000",
    		        "rowStatus": "R"
    		    },
    		    {
    		        "Month": "November",
    		        "quarter1": "27400",
    		        "quarter2": "9800",
    		        "quarter3": "11800",
    		        "quarter4": "17000",
    		        "rowStatus": "R"
    		    },
    		    {
    		        "Month": "December",
    		        "quarter1": "27400",
    		        "quarter2": "22900",
    		        "quarter3": "20800",
    		        "quarter4": "11000",
    		        "rowStatus": "R"
    		    }
    		];
    		chartData2.setJSON( jsonData );	
    		
    			
    		// group1 안에 동적으로 컴포넌트를 생성해서 넣는 것 입니다
    		//그냥 어느 그룹에도 속하지 않고 웹스퀘어 화면에 만들으시려면 group1 -> WebSquare.getBody() 이렇게 적으시면 됩니다.
    		//WebSquare.util.dynamicCreate("생성할컴포넌트의 ID", "생성할컴포넌트 종류", "옵션(style)", 포함될그룹 )        	
    		
    		$p.dynamicCreate("fusionchart2", "fusionchart", {
    									style : "position: relative;height: 300px;"
    								   , drawType : "javascript"
                                       , ref : "data:chartData2"
                                       , chartType : "column2d"
                                       //, seriesType : "simple"    //미지정 시 advaned로 생성됨. 
                                       }, group1);
    		fusionchart2.changeType("line");						   
    		fusionchart2.setChartColumnRef('data:chartData2','Month',"[['quarter2']]");   //advaned 용  
            //fusionchart2.setChartColumnSimpleRef( 'data:chartData2' , "Month" , "quarter1" , "quarter1" );    //simple 용
            
		};
		
		scwin.onpageunload = function() {
			
		};


	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{style:'height:300px;',id:'group1'}}]}]}]})