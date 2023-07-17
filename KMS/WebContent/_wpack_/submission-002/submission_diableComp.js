/*amd /submission-002/submission_diableComp.xml 5112 f73aa72f29eef1a19c7b7d7af5522ed77024c6ae7f014f4039d382ec21f140fe */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key2',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key3',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key2',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key3',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataMap1',action:'/KMS/TechDB/submission-002/sleep.jsp',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'process msg...','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'submission2',ref:'',target:'data:json,dataMap2',action:'/KMS/TechDB/submission-002/sleep.jsp',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
		var num1 = 0;
        var num2 = 0;
        
		scwin.onpageload = function() {
		
		};
		
		scwin.onpageunload = function() {
		
		};  
         
		scwin.trigger1_onclick = function(e) {
			num1++;
			textbox1.setValue( "submission1 cnt : " + num1 );
			$p.executeSubmission( "submission1" , "" , this );
		};
		
		scwin.inputbox1_onkeyup = function(e) {
			if(e.keyCode == "13") {
				num1++;
				textbox1.setValue( "submission1 cnt : " + num1 );
				$p.executeSubmission( "submission1" , "" , this );
			}
		};
		
		scwin.inputbox2_onkeyup = function(e) {
			if(e.keyCode == "13") {
				num2++;
				textbox2.setValue( "submission2 cnt : " + num2 );
				$p.executeSubmission( "submission2" , "" , this );
			}		
		};
		
		scwin.trigger2_onclick = function(e) {
			num2++;
			textbox2.setValue( "submission2 cnt : " + num2 );
			$p.executeSubmission( "submission2" , "" , this );		
		};
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position: absolute ;left:57px;top:102px;width: 156px;height: 31px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'submission1'}]}]},{T:1,N:'w2:textbox',A:{label:'',id:'textbox1',style:'position: absolute ;left:254px;top:100px;width: 167px;height: 30px;',for:''}},{T:1,N:'w2:textbox',A:{label:'',id:'',style:'position: absolute ;height: 23px;width: 119px;left:58px;border:1px solid blue;top:143px;',ref:'data:dataMap1.key1'}},{T:1,N:'w2:textbox',A:{id:'',label:'',style:'position: absolute ;height: 23px;width: 119px;left:58px;border:1px solid blue;top:168px;',ref:'data:dataMap1.key2'}},{T:1,N:'w2:textbox',A:{id:'',label:'',style:'position: absolute ;height: 23px;width: 119px;left:58px;border:1px solid blue;top:193px;',ref:'data:dataMap1.key3'}},{T:1,N:'xf:input',A:{id:'inputbox1',style:'position: absolute ;left:57px;top:61px;width: 156px;height: 30px;','ev:onkeyup':'scwin.inputbox1_onkeyup'}},{T:1,N:'xf:input',A:{'ev:onkeyup':'scwin.inputbox2_onkeyup',id:'inputbox2',style:'position: absolute ;left:516px;top:56px;width: 156px;height: 30px;'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger2_onclick',id:'trigger2',style:'position: absolute ;left:516px;top:97px;width: 156px;height: 31px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'submission2'}]}]},{T:1,N:'w2:textbox',A:{id:'textbox2',label:'',style:'position: absolute ;left:713px;top:95px;width: 167px;height: 30px;',for:''}},{T:1,N:'w2:textbox',A:{id:'',label:'',ref:'data:dataMap2.key1',style:'position: absolute ;height: 23px;width: 119px;left:517px;border:1px solid blue;top:138px;'}},{T:1,N:'w2:textbox',A:{id:'',label:'',ref:'data:dataMap2.key2',style:'position: absolute ;height: 23px;width: 119px;left:517px;border:1px solid blue;top:163px;'}},{T:1,N:'w2:textbox',A:{id:'',label:'',ref:'data:dataMap2.key3',style:'position: absolute ;height: 23px;width: 119px;left:517px;border:1px solid blue;top:188px;'}},{T:1,N:'w2:textbox',A:{label:'use processMsg',id:'',style:'position: absolute ;height: 30px;width: 162px;left: 56px;top:15px;'}},{T:1,N:'w2:textbox',A:{id:'',label:'non processMsg',style:'position: absolute ;height: 30px;width: 162px;left:518px;top:15px;'}}]}]}]})