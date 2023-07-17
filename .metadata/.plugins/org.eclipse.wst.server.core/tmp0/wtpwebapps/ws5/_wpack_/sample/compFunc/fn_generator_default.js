/*amd /sample/compFunc/fn_generator_default.xml 3911 356a655179599a7c73e54f1887ea51a39f40e2bf1ba27136541dd73552d5faa4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/cm/css/all.css" type="text/css"'},{T:7,N:'xml-stylesheet',instruction:'href="/cm/css/contents.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model'},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.rowClass0{background-color:#eee}.rowClass1{background-color:#ffe4e1}'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
 
			
			scwin.trigger1_onclick = function(e){
	  			var tmpObj;
	  			var tmpIdx = generator1.getLength();
	  			generator1.insertChild();
	  			
	  			//get text label
	  			tmpObj = generator1.getChild( tmpIdx , "textbox1" );
	  			tmpObj.addClass("rowClass"+(tmpIdx%2));
	  			
	  			//get input obj
	  			tmpObj = generator1.getChild( tmpIdx , "input1" );
	  			tmpObj.setValue("lbl"+tmpIdx);
	  			tmpObj.setUserData("eduKey","edu"+tmpIdx);
			};
			
			scwin.trigger2_onclick = function(e){
				var tmpIdx = this.getGeneratedIndex();
				var tmpInputObj = generator1.getChild( tmpIdx , "input1" );
				
				//위의 행위를 아래의 API를 이용하여 한번에 처리 할수도 있다.
				//var tmpInputObj = this.getGeneratedComponent("input1");
				
				alert(tmpInputObj.getValue() + " :: " + tmpInputObj.getUserData("eduKey"));
				
			};
			
		

}}}]}]},{T:1,N:'body',E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc',id:'',style:'padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Gennerator컴포넌트의 기본 사용법 샘플이다.<br/>[addItem]버튼을 클릭하면 하단에 행이 동적으로 추가된다.<br/>추가된 행의 [getValue]버튼을 클릭하면 현재행의 inputbox의 value를 alert으로 표현한다.<br/><br/>반복된 컴포넌트는 ID가 동적으로 할당되므로 초기에 정의한 ID로 접근이 불가하다.<br/>스크립트에서 반복된 컴포넌트에 접근하는 경우는 아래와 같이 2가지로 나뉜다.<br/><br/>1. insertChild method를 이용하여 컴포넌트를 추가한 경우.<br/>아래와 같이 Generator컴포넌트의 getChild method를 이용한다.<br/>[Generator ID].getChild( rowIndex, "ComponentID" );<br/>ex) generator1.getChild( 0 , "input1" ); //0번째 반복된 행의 "input1" 컴포넌트를 반환한다.<br/><br/>2. 반복된 컴포넌트에 이벤트를 등록한 경우.<br/>(스크립트의 scwin.trigger2_onclick method 참조)<br/>this.getGeneratedIndex(); //자신의 위치(row index)를 반환<br/>this.getGeneratedComponent("input1");//반복된 형제 컴포넌트를 반환<br/><br/>( source : fn_generator_default.xml )',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'btnbox'},E:[{T:1,N:'xf:trigger',A:{id:'trigger1',style:'width: 120px;','ev:onclick':'scwin.trigger1_onclick',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:3,text:'addItem'}]}]}]},{T:1,N:'w2:generator',A:{id:'generator1',style:'overflow: hidden;margin-top: 5px;margin-bottom: 5px;'},E:[{T:1,N:'xf:group',A:{id:'group1',style:'overflow:hidden;width:340px;border:1px solid #ddd;margin-bottom:4px;',class:''},E:[{T:1,N:'w2:textbox',A:{id:'textbox1',style:'float:left;width: 80px;padding-top:10px;padding-bottom:10px;text-align:center;',label:'이름'}},{T:1,N:'xf:input',A:{id:'input1',style:'width: 148px;height: 24px;float:left;margin-top:4px;margin-left:4px;'}},{T:1,N:'xf:trigger',A:{id:'trigger2',style:'float:left;margin-top: 5px;margin-left: 4px;width: 80px;','ev:onclick':'scwin.trigger2_onclick',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:3,text:'getValue'}]}]}]}]}]}]}]}]})