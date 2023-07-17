/*amd /generator-001/genertator_table.xml 3970 53ca50f90a9d242d4d57a653e46349311cf997cd704bce8b8aeae37f54c9b241 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
		scwin.onpageload = function() {
			for(i=0;i<10;i++){
				var gen1Idx = generator1.insertChild();
				
				var gen2Obj = generator1.getChild( gen1Idx , "generator2" );
				
				for(j=0;j<5;j++){
					//debugger;
					var gen2Idx = gen2Obj.insertChild();  
					//textbox1 에 값 설정   
					var txtbox1Obj = gen2Obj.getChild( gen2Idx , "textbox1" );
					txtbox1Obj.setValue(i+"_textbox1_"+j);
					//textbox2 에 값 설정   
					var txtbox2Obj = gen2Obj.getChild( gen2Idx , "textbox2" );
					txtbox2Obj.setValue(i+"_textbox2_"+j);
					
				
				}    	
			}			
		};
		
		scwin.onpageunload = function() {
			
		};
		
		scwin.textbox1_onclick = function(e) {
			var genIdx = this.getGeneratedIndex();
			var txtbox1Obj = this.getGeneratedComponent("textbox1");
			
			alert(genIdx+"번째 txtbox1, click한 text값 : "+txtbox1Obj.getValue());
			
		};
		
		scwin.trigger1_onclick = function(e) {
			var generator1Len = generator1.getLength();
			var gen2Obj;
			
			for(i=0;i<generator1Len;i++){
				gen2Obj = generator1.getChild( i , "generator2" );
				gen2Len = gen2Obj.getLength();
				
				console.log(i+"번째 generator2 length: "+gen2Len);
				
				for(j=0;j<gen2Len;j++){
					var textbox1Obj = gen2Obj.getChild( j , "textbox1" );
					var textbox1Val = textbox1Obj.getValue();
					
					console.log(i+"번째 generator2 "+j+"번째 textbox1 값 : "+textbox1Val);	
					
					var inputCalendar1Obj = gen2Obj.getChild( j , "inputCalendar1" );
					inputCalendar1Obj.hide();
				}
				
			}
		};
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position:relative;width:215px;height:23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'generator 하위 컴포넌트 변경'}]}]},{T:1,N:'w2:generator',A:{id:'generator1',style:'position: relative;width:100%;height: 100px;'},E:[{T:1,N:'xf:group',A:{tagname:'table',id:'table1',style:'position: relative ;width:100%;margin-top:10px;',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}}]},{T:1,N:'w2:generator',A:{id:'generator2',style:'position: relative;width: 100%;height: 100px;',tagname:'tbody'},E:[{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'}},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{label:'',id:'textbox1',style:'position: relative;width:100%;height: 23px;','ev:onclick':'scwin.textbox1_onclick'}},{T:1,N:'w2:inputCalendar',A:{renderType:'component',weekStartsOn:'0',id:'inputCalendar1',renderDiv:'true',style:'position: relative;width: 150px;height: 23px;',rightAlign:'false',focusOnDateSelect:'false',footerDiv:'false',calendarValueType:'yearMonthDate'}}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'}},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{label:'',id:'textbox2',style:'position: relative;width:100%;height: 23px;'}}]}]}]}]}]}]}]}]})