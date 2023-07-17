/*amd /sample/pageScope/master_debug.xml 1843 6da25071289abfc9caea29ddf932df561b4934569610e940bd770ad283bc5b77 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
			scwin.onpageload = function() {
				debugger;
			};
			
	
		

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{class:'section_desc dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'page coding 사용 가이드 - 브라우저 콘솔에서 debug 확인<br/>$p.debug.getScope() 기능을 이용할 수 있다.<br/>1. 페이지 로딩 전 브라우저에서 개발자 도구를 오픈한다.<br/>2. 접근하고자 하는 객체를 마우스 왼쪽 클릭으로 선택한다.<br/>3. 브라우저 콘솔에서 $p.debug.getScope($0).ipt1.getValue(); 을 확인하면 직전에 선택한 객체를 확인할 수 있다.<br/>4. 선택된 객체의 역순으로 $0, $1, $2 등으로 접근할 수 있다.',style:'',tagname:''}}]},{T:1,N:'w2:wframe',A:{style:'border: 1px solid grey;margin-top:10px;height: 70px;',id:'wframe1',scope:'true',src:'/sample/pageScope/detail_debug.xml'}},{T:1,N:'w2:wframe',A:{id:'wframe2',scope:'true',src:'/sample/pageScope/detail_debug.xml',style:'border: 1px solid grey;margin-top:10px;height: 70px;'}},{T:1,N:'w2:wframe',A:{id:'wframe3',scope:'true',src:'/sample/pageScope/detail_debug.xml',style:'border: 1px solid grey;margin-top:10px;height: 70px;'}}]}]}]}]})