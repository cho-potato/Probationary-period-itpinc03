/*amd /sample/compFunc/fn_fileDownload.xml 3037 fc8978163f6fb334789d21b8e9991cdafec947c558d4a60033e48d365da1b0d9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_fileInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'FILE_NM',name:'name1',dataType:'text'}}]}]}]}]},{T:1,N:'style',A:{type:'text/css'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	scwin.onpageload = function() {
	
	};
	
	scwin.ui_filedownload_onclick = function(e) {
		var fileName = ui_list.getValue();
		
		if (fileName == "") {
			alert("다운로드 받을 파일을 선택 하세요");
		} else {
			var data = WebSquare.xml.parse("info");
			
			WebSquare.xml.setValue(data,"info/FILE_NM",dc_fileInfo.get("FILE_NM") );
			$p.download( "/edu/fileDownLoad.do" , data , "post" );
		}
		
	};
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'wrapper'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 10px;',class:'section_title'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',label:'파일 다운로드 예제<br/>( source : fn_fileDownload.xml )',tagname:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'dp dl_code',tagname:'dl'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',label:'파일 다운로드',tagname:'dt'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'',tagname:'dd'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',label:'$p.download( 호출URL , XML형태의 데이타 , Method : post, get );',tagname:'',class:''}},{T:1,N:'xf:select1',A:{disabledClass:'w2selectbox_disabled',appearance:'minimal',direction:'auto',chooseOption:'true',id:'ui_list',style:'width: 148px;height: 21px;',displayMode:'label',optionOrder:'false',allOption:'',disabled:'false',submenuSize:'auto',chooseOptionLabel:'',ref:'data:dc_fileInfo.FILE_NM',class:'dmr dmt',textAlign:'left'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'00_교육환경구성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'00_교육환경구성.pdf'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'01_이론'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01_이론.pdf'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'02_실습'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02_실습.pdf'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'11_심화_이론'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11_심화_이론.pdf'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'99_CSS_JavaScript_기본'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'99_CSS_JavaScript_기본.pdf'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.ui_filedownload_onclick',id:'ui_filedownload',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일 다운로드'}]}]}]}]}]}]}]}]})