/*amd /sample/xml/xPath.xml 7012 c6aa11f1ad3a5f9a36b496b85a5708edd1512dd39e92e6cf31536f8b38bcf00c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'xf:instance',_xml:'<xf:instance xmlns:xf="http://www.w3.org/2002/xforms">\n    			<data xmlns="">\n    				<res>\n    					<map>\n    						<vector>\n    							<map index="0">\n    								<number value="one">1</number>\n    								<dept value="insa">인사</dept>\n    								<age value="17">17</age>\n    								<name value="hong">홍길동</name>\n    								<address value="seoul dongjak">서울 동작구</address>\n    							</map>\n    							<map index="1">\n    								<number value="two">2</number>\n    								<dept value="insa">홍보</dept>\n    								<age value="24">24</age>\n    								<name value="heo">허준</name>\n    								<address value="seoul Kangseo">서울 강서구</address>\n    							</map>\n    							<map index="2">\n    								<number value="three">3</number>\n    								<dept value="insa">인사</dept>\n    								<age value="37">37</age>\n    								<name value="jeon">전우치</name>\n    								<address value="seoul mapo">서울 마포구</address>\n    							</map>\n    							<map index="3">\n    								<number value="four">4</number>\n    								<dept value="dev">개발</dept>\n    								<age value="32">32</age>\n    								<name value="na">나이름</name>\n    								<address value="seoul seocho">서울 서초구</address>\n    							</map>\n    						</vector>\n    					</map>\n    				</res>\n    			</data>\n    		</xf:instance>'},{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				spinner1.setValue( 1 );
			};
			
			// xPath Node data 확인
			scwin.btnNodeConfirm_onclick = function(e) {
				var node = "res/map/vector/map[" + spinner1.getValue() + "]";
				var doc = WebSquare.ModelUtil.findInstanceNode( node );
				
				var _number = WebSquare.xml.getValue( doc , "number" );
				var _name = WebSquare.xml.getValue( doc , "name" );
				var _age = WebSquare.xml.getValue( doc , "age" );
				
				alert("번호=>" +_number + ":: 이름 =>" + _name + ":: 나이 => " + _age);
			};
			
			//xPath를 이용하여 selectbox list 셋팅 (권장)
			scwin.radio1_onchange = function() {
				var str = "age >= " + radio1.getValue() + "and age <" + (parseInt(radio1.getValue()) + 10);
				selectbox1.setNodeSet( "res/map/vector/map[" + str + "]" , "name" , "number" );
			};
			
			//api를 이용하여 selectbox list 셋팅 (비권장 - 동작은 xPath 방식과 동일하나 소스 코딩량이 훨씬 많다)
			scwin.radio2_onchange = function() {
				var arrObj = WebSquare.ModelUtil.findInstanceNodes( "res/map/vector/map" );
				var _length = arrObj.length;
				selectbox2.removeAll( true );
				
				for(var i=0; i<_length; i++){
					var _number = WebSquare.xml.getValue( arrObj[i] , "number" );
					var _name = WebSquare.xml.getValue( arrObj[i] , "name" );
					var _age = WebSquare.xml.getValue( arrObj[i] , "age" );
					
					if(_age >= radio2.getValue() && _age < (parseInt(radio2.getValue()) + 10) ){
						selectbox2.addItem( _number, _name );
					}
				}
			};
	
		
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.w2radio_label:before{position:absolute;left:1px;top:5px;content:none;display:inline-block;width:20px;height:20px;border:1px solid #cfd5d8;box-sizing:border-box;border-radius:50%;background:#fff}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:''},E:[{T:1,N:'xf:group',A:{style:'border: 1px solid gray;padding: 10px;margin-bottom: 10px;overflow: hidden;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{tagname:'h2',style:'',label:'* xPath로 값을 가져오기',id:''}}]},{T:1,N:'xf:group',A:{style:'border: 1px solid gray;padding: 10px;overflow: hidden;margin-bottom: 10px;',id:'',class:''},E:[{T:1,N:'w2:spinner',A:{skin:'type1',buttonSize:'30',inputReadOnly:'false',style:'position: relative;width: 150px;height: 21px;float : left;margin-right: 10px;',id:'spinner1',max:'4',min:'1',increment:'1'}},{T:1,N:'xf:trigger',A:{type:'button',style:'',id:'btnNodeConfirm','ev:onclick':'scwin.btnNodeConfirm_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Node data 확인'}]}]}]},{T:1,N:'xf:group',A:{style:'border: 1px solid gray;padding: 10px;margin-bottom: 10px;overflow: hidden;',id:'',class:''},E:[{T:1,N:'w2:textbox',A:{label:'* xPath로 리스트 컴포넌트 셋팅하기 - xPath 사용',style:'',id:'',tagname:'h2'}}]},{T:1,N:'xf:group',A:{style:'border: 1px solid gray;padding: 10px;margin-bottom: 10px;overflow: hidden;',id:'',class:''},E:[{T:1,N:'xf:select1',A:{id:'radio1',selectedIndex:'-1',appearance:'full',style:'width: 250px;height: 21px;float : left;margin-right: 50px;',cols:'',rows:'1',ref:'','ev:onchange':'scwin.radio1_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'10대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'20대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'30대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'30'}]}]}]}]},{T:1,N:'xf:select1',A:{id:'selectbox1',chooseOption:'true',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOptionLabel:'',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'border: 1px solid gray;padding: 10px;margin-bottom: 10px;overflow: hidden;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'* xPath로 리스트 컴포넌트 셋팅하기 - API 사용',style:'',tagname:'h2'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'border: 1px solid gray;padding: 10px;margin-bottom: 10px;overflow: hidden;'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'radio2',ref:'',rows:'1',selectedIndex:'-1',style:'width: 250px;height: 21px;float : left;margin-right: 50px;','ev:onchange':'scwin.radio2_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'10대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'20대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'30대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'30'}]}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'selectbox2',style:'width: 148px;height: 21px;',submenuSize:'auto',chooseOptionLabel:'',ref:''},E:[{T:1,N:'xf:choices'}]}]}]}]}]}]})