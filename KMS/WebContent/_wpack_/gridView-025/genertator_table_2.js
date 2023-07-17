/*amd /gridView-025/genertator_table_2.xml 5156 4e64fbca46a6cc2247f27c90a3156b25056e45f8aa6823e068da7afaebbcde9f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				for(j=0;j<5;j++){
					//debugger;
					var gen2Idx = generator2.insertChild();  
					//input1 에 값 설정   
					var input1Obj = generator2.getChild( gen2Idx , "input1" );
					input1Obj.setValue("input1_"+j);
					//textbox2 에 값 설정   
					var txtbox2Obj = generator2.getChild( gen2Idx , "textbox2" );
					txtbox2Obj.setValue("textbox2_"+j);
					
				
				}				
			};
			
			scwin.onpageunload = function() {
				
			}; 

			scwin.textbox1_onclick = function(e) {
				var genIdx = this.getGeneratedIndex();
				var txtbox1Obj = this.getGeneratedComponent("textbox1");
				
				alert(genIdx+"번째 txtbox1, click한 text값 : "+txtbox1Obj.getValue());
				
			};
			
			scwin.btnShow_onclick = function(e) {
				
				var genIdx = this.getGeneratedIndex();
				var input1Obj = this.getGeneratedComponent("input1");
				var btnShowObj = this.getGeneratedComponent("btnShow");
				var btnHideObj = this.getGeneratedComponent("btnHide");
				
				alert(genIdx+"번째 input1, click한 input t값 : "+input1Obj.getValue());
				
				//show버튼 left위치+show버튼 width+hide버튼 width
				var left =  btnShowObj.getPosition("left") + btnShowObj.getSize("width") + btnHideObj.getSize("width");
				var top =  btnShowObj.getPosition("top");
				
				contextGroup.show();
				contextGroup.setPosition( left , top );		
					
			
			};
			
			scwin.btnHide_onclick = function(e) {
				contextGroup.hide();
			};
		
			scwin.gridBody_anchor406_onclick = function() {
				alert("click menu1");
			};
			
			scwin.gridBody_anchor4066_onclick = function() {
				alert("click menu2");
			};
			
			scwin.gridBody_anchor407_onclick = function() {
				alert("click menu3");
			};
			
			scwin.gridBody_anchor408_onclick = function() {
				alert("click menu4");
			};
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'contextGroup',style:'position: absolute ;left:279px;width:100px;top:66px;z-index: 100;display:none;',class:''},E:[{T:1,N:'xf:group',A:{id:'grdBodyContentBox',class:'',style:'position: absolute;left:0px;top:0px;width:100%;'},E:[{T:1,N:'w2:anchor',A:{id:'gridBody_anchor406',label:'',style:'position: relative ;width:100px;background-color:#56FFE0;',class:'','ev:onclick':'scwin.gridBody_anchor406_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'menu1'}]}]},{T:1,N:'w2:anchor',A:{id:'gridBody_anchor4066',label:'',style:'position: relative ;width:100px;background-color:#56FFE0;',class:'','ev:onclick':'scwin.gridBody_anchor4066_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'menu2'}]}]},{T:1,N:'div',A:{class:''}},{T:1,N:'w2:anchor',A:{class:'',id:'gridBody_anchor407',label:'',style:'position: relative ;width:100px;background-color:#56FFE0;','ev:onclick':'scwin.gridBody_anchor407_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'menu3'}]}]},{T:1,N:'w2:anchor',A:{class:'',id:'gridBody_anchor408',label:'',style:'position: relative ;width:100px;background-color:#56FFE0;','ev:onclick':'scwin.gridBody_anchor408_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'menu4'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'table',id:'table1',style:'position: relative ;width:100%;margin-top:10px;',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:25.00%',tagname:'col'}}]},{T:1,N:'w2:generator',A:{id:'generator2',style:'position: relative;width: 100%;height: 100px;',tagname:'tbody'},E:[{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'}},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'input1',style:'position: relative;width: 144px;height: 21px;float:left;'}},{T:1,N:'xf:trigger',A:{type:'button',id:'btnShow',style:'position: relative;width: 40px;height: 23px;float:left;','ev:onclick':'scwin.btnShow_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'show'}]}]},{T:1,N:'xf:trigger',A:{id:'btnHide',style:'position: relative;width: 40px;height: 23px;float:left;',type:'button','ev:onclick':'scwin.btnHide_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'hide'}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'}},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{label:'',id:'textbox2',style:'position: relative;width:100%;height: 23px;'}}]}]}]}]}]}]}]})