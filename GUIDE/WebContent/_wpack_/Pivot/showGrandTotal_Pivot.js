/*amd /Pivot/showGrandTotal_Pivot.xml 3421 25e7f5534b9ceecc51468a7c974a9bd2418e4cd4e4a98e329dfaf2453d524f91 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'Year',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'City',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'Continent',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'Expense',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col5',name:'Saving',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {				
				var jsonData = [
				{"col1":"2017","col2":"Seoul","col3":"Asia","col4":"250","col5": "100","rowStatus":"R"}
				,{"col1":"2017","col2":"Paris","col3":"Europe","col4":"223","col5": "100","rowStatus":"R"}
				,{"col1":"2017","col2":"Beijing","col3":"Asia","col4":"250","col5": "100","rowStatus":"R"}
				,{"col1":"2017","col2":"Bangkok","col3":"Asia","col4":"245","col5": "100","rowStatus":"R"}
				,{"col1":"2017","col2":"London","col3":"Europe","col4":"245","col5": "100","rowStatus":"R"}
				,{"col1":"2018","col2":"Seoul","col3":"Asia","col4":"209","col5": "100","rowStatus":"R"}
				,{"col1":"2018","col2":"Paris","col3":"Europe","col4":"223","col5": "100","rowStatus":"R"}
				,{"col1":"2018","col2":"Beijing","col3":"Asia","col4":"245","col5": "100","rowStatus":"R"}
				,{"col1":"2018","col2":"Bangkok","col3":"Asia","col4":"245","col5": "100","rowStatus":"R"}
				,{"col1":"2018","col2":"London","col3":"Europe","col4":"245","col5": "100","rowStatus":"R"}
				,{"col1":"2019","col2":"Seoul","col3":"Asia","col4":"250","col5": "100","rowStatus":"R"}
				,{"col1":"2019","col2":"Paris","col3":"Europe","col4":"213","col5": "100","rowStatus":"R"}
				,{"col1":"2019","col2":"Beijing","col3":"Asia","col4":"245","col5": "100","rowStatus":"R"}
				,{"col1":"2019","col2":"Bangkok","col3":"Asia","col4":"245","col5": "100","rowStatus":"R"}
				,{"col1":"2019","col2":"London","col3":"Europe","col4":"245","col5": "100","rowStatus":"R"}]; 
				dataList1.setJSON(jsonData);
		
	}; 
	
	scwin.onpageunload = function() {
		
	};
	
	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:pivot',A:{style:'position: relative;padding: 20px;height:95%;width: 90%;border: 1px solid gray;left:50px;top:20px;',dataList:'data:dataList1',cols:'col2',vals:'col4,col5',autoFit:'',autoFitMinWidth:'100',showGrandTotal:'true',grandTotalName:'',grandTotalDisplayType:'',headerListOrder:'col,row,val,hidden',allTotalName:'',totalTextAlign:'',valuesAxis:'',rows:'col1',noColumnMove:'true',id:'pivot1'},E:[{T:1,N:'w2:fieldInfo',A:{style:'padding: 10px;'},E:[{T:1,N:'w2:field',A:{id:'col1',name:'Year'}},{T:1,N:'w2:field',A:{id:'col2',name:'City'}},{T:1,N:'w2:field',A:{id:'col3',name:'Continent'}},{T:1,N:'w2:field',A:{id:'col4',name:'Expense'}},{T:1,N:'w2:field',A:{id:'col5',name:'Saving'}}]}]}]}]}]})