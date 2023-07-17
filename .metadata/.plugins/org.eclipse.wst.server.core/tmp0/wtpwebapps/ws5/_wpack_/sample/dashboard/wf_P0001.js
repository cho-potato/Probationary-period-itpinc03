/*amd /sample/dashboard/wf_P0001.xml 2219 524079a526d461763c7be3fab2b95898c333f2d7cbdd35d622c4e65e3f40c20c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
        if(this.scope_id.indexOf("C01") > 0 ){
			scwin.fn_init(mf_dlt_sample.getAllJSON());
		}else if(this.scope_id.indexOf("C02") > 0 ){
			scwin.fn_init(mf_dlt_site.getAllJSON());
		}else if(this.scope_id.indexOf("C03") > 0 ){
			scwin.fn_init(mf_dlt_site_webDev.getAllJSON());
		}
	};
    
	scwin.fn_init = function(arrList){
		
		var arrList, arrListLen, i, curObj, curRowData;
		
		if(!arrList){
			com.log("at scwin.fn_init : 출력할 데이터가 없습니다.", "E");
			return;
		}
		
		arrListLen = arrList.length;
		
		for(i=0;i<arrListLen;i++){
			curRowData = arrList[i];
			ui_gen_sample.insertChild( i );
			curObj = ui_gen_sample.getChild( i , "ui_gen_sample_dt" );
			curObj.setValue( curRowData.disp );
			if((curRowData.url).indexOf("http") > -1){
				curObj.setHref( curRowData.url );
			}else{
				curObj.setHref( "?w2xPath="+curRowData.url );
			}
			
			curObj = ui_gen_sample.getChild( i , "ui_gen_sample_dd" );
			curObj.setValue( curRowData.desc );
		}
		
	};
	
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pd15',id:'',style:'min-height: 50px;',tagname:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:''},E:[{T:1,N:'w2:generator',A:{id:'ui_gen_sample',style:'',class:'linkbox',tagname:'dl'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'',tagname:'dt'},E:[{T:1,N:'w2:anchor',A:{id:'ui_gen_sample_dt',style:'min-height:12px;',target:'_blank',class:'',outerDiv:'false',toolTip:'',title:''},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'w2:textbox',A:{id:'ui_gen_sample_dd',style:'min-height: 12px;',class:'dmb',label:'',tagname:'dd'}}]}]}]}]}]}]})