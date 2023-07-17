/*amd /sample/compList/04.xml 8921 61068004a385d536163cdf08b457b0ee78dc31e264f10fc8fcb6b8fb1af6fdfd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{baseNode:'map',id:'dlt_Upload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'name',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'size',name:'사이즈',dataType:'text'}}]}]}]}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.btn01{border:1px solid #ffad41;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;display:inline-block;text-shadow:-1px -1px 0 rgba(0,0,0,.3);letter-spacing:1px;background-color:#ffc579;background-image:-webkit-gradient(linear,left top,left bottom,from(#ffc579),to(#fb9d23));background-image:-webkit-linear-gradient(top,#ffc579,#fb9d23);background-image:-moz-linear-gradient(top,#ffc579,#fb9d23);background-image:-ms-linear-gradient(top,#ffc579,#fb9d23);background-image:-o-linear-gradient(top,#ffc579,#fb9d23);background-image:linear-gradient(to bottom,#ffc579,#fb9d23);padding:6px;background-color:orange}.btn01 a{color:#fff;font-weight:700}.w2multiupload_uploader{opacity:.01}'}]},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	scwin.fn_btnClick = function(){
		alert(this.getValue() + " click");
	};
	
	scwin.multiUploadSelectDone = function(){
		dlt_Upload.setJSON( mpd_html5Type.getFileInfos());
	};
	
	scwin.ui_saveMultiupload_onclick = function(e) {
		if(mpd_html5Type.getFileCount() === 0){
			alert("업로드할 파일이 없습니다.");
			return;
		}
		mpd_html5Type.startUpload();
	};
	
	scwin.mpd_html5Type_ondone = function(data) {
		alert("업로드가 완료되었습니다.");
		ui_muliuploadDone.setValue( JSON.stringify(data,null,"\t") );
	};
	
	scwin.ui_InitMultiupload_onclick = function(e) {
		dlt_Upload.removeAll();
		mpd_html5Type.removeAllFiles();
		ui_muliuploadDone.setValue( "" );
	};
	
	scwin.ui_Upload_onclick = function(e) {
		if(ui_upload.getValue()){
			ui_upload.submit();
		}else{
			alert("파일이 선택되지 않았습니다.");
		}
		
	};
	
	scwin.ui_upload_ondone = function(retXml) {
		ui_upload.reset();
		alert(WebSquare.json.XML2JSONString( retXml ));
		/*
		//retXml 예시
		<ret>
		    <key>C:/sample/resource/websquare_home/upload/up</key>
		    <storedFileList>00_20161227094305.xml</storedFileList>
		    <localfileList>00.xml</localfileList>
		    <fileSizeList>1436</fileSizeList>
		    <maxUploadSize>200000000</maxUploadSize>
		    <deniedList/>
		    <deniedCodeList/>
		</ret>
		*/
	};
	
	scwin.onpageload = function() {
		dlt_Upload.setJSON( [] );
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:''},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 10px;',class:'section_desc'},E:[{T:1,N:'w2:textbox',A:{id:'section',style:'',label:'폼을 구성하는 컴포넌트로, 기본 button ( input type="button" )과 html로 구성 된 업로드 컴포넌트다.<br/>MultiUpload의 경우 기본 UI가 Flash임으로 HTML5의 Multiple을 사용하기 위해선 mode속성의 값을 html5_transparent으로 설정하여 UI를 구성해야한다.<br/>아래 [type : html5_transparent] 예시는 Multiupload와 GridView컴포넌트로 구성되어있다.<br/>Trigger, Anchor, Upload, MultiUpload<br/>( source : 04.xml )'}}]},{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'section02 dmb ',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'contTitle01',id:'',label:'Trigger',style:''}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.fn_btnClick',style:'position: relative ;float:left;width:60px;margin-top:6px;margin-right:6px;',disabled:'',id:'',type:'button',class:'btn_cm sch'},E:[{T:1,N:'xf:label',E:[{T:3,text:'button'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.fn_btnClick',style:'position: relative ;float:left;width:60px;height:24px;margin-top:6px;margin-right:6px;',id:'',type:'image'},E:[{T:1,N:'xf:label',E:[{T:3,text:'image'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.fn_btnClick',toolTip:'',leftOffImageClass:'',style:'position: relative ;float:left;width:60px;height:24px;margin-top:6px;margin-right:6px;',id:'',type:'anchor'},E:[{T:1,N:'xf:label',E:[{T:3,text:'anchor'}]}]}]},{T:1,N:'xf:group',A:{class:'section02 dmb ',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'contTitle01',id:'',label:'Anchor',style:''}},{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:'float:left;margin-top:10px;text-decoration:underline;margin-right:10px;'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이동'}]}]},{T:1,N:'w2:anchor',A:{class:'btn01',id:'',outerDiv:'true',style:'float:left;margin-top:4px;'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'button'}]}]}]},{T:1,N:'xf:group',A:{class:'section02 dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'contTitle01',id:'',label:'Upload',style:''}},{T:1,N:'xf:group',A:{class:'defComp',id:'',style:'width: auto !important;'},E:[{T:1,N:'w2:upload',A:{class:'dmr',disabled:'','ev:ondone':'scwin.ui_upload_ondone',id:'ui_upload',imageStyle:'position:absolute;vertical-align:middle;word-wrap:break-word',inputStyle:'position:absolute;vertical-align:middle;word-wrap:break-word',style:'position: relative ;width: 230px;height: 24px;',type:'image'}},{T:1,N:'xf:trigger',A:{class:'btn_cm sch','ev:onclick':'scwin.ui_Upload_onclick',id:'ui_Upload',style:'width: 70px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송'}]}]}]}]},{T:1,N:'xf:group',A:{class:'section02 dmb',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'contTitle02',id:'',label:'MultiUpload',style:''}},{T:1,N:'xf:group',A:{class:'dp',id:'',style:'display: none;'},E:[{T:1,N:'w2:textbox',A:{class:'contTitle03 dmb',id:'',label:'type : [default]flash',style:''}},{T:1,N:'w2:multiupload',A:{action:'',filter:'',id:'',maxcount:'',maxsize:'',mode:'',style:'height: 200px;position: relative;width: 100%;',uploadButton:'',wmode:'false'}}]},{T:1,N:'xf:group',A:{class:'dp',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'contTitle03 dmb',id:'',label:'type : html5_transparent',style:''}},{T:1,N:'w2:textbox',A:{class:'dmb',id:'',label:'(Multiupload와 GridView컴포넌트로 구성)',style:''}},{T:1,N:'xf:group',A:{class:'ofh',id:'',style:'border: 1px solid gray;padding: 3px;'},E:[{T:1,N:'xf:group',A:{class:'fl',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'',id:'ui_SelectFile',style:'width:80px;height: 30px;',type:'button',class:'btn_cm',nextTabID:''},E:[{T:1,N:'xf:label',E:[{T:3,text:'파일 선택'}]}]},{T:1,N:'w2:multiupload',A:{action:'','ev:ondone':'scwin.mpd_html5Type_ondone',filter:'',id:'mpd_html5Type',maxcount:'',maxsize:'',mode:'html5_transparent',selectCallback:'scwin.multiUploadSelectDone',style:'width:80px;cursor: pointer;z-index: 999;margin-top: 100px',uploadButton:'',wmode:'false'}}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch fr','ev:onclick':'scwin.ui_saveMultiupload_onclick',id:'ui_saveMultiupload',style:'width: 80px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch fr','ev:onclick':'scwin.ui_InitMultiupload_onclick',id:'ui_InitMultiupload',style:'width: 80px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',class:'dmb',dataList:'dlt_Upload',fixedColumnWithHidden:'true',id:'',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',noResultMessage:'선택된 파일이 없습니다.',noResultMessageClass:'w2gridViewNoResult',noResultMessageStyle:'',noResultMessageVisible:'true',rowNumHeaderValue:'No',rowNumVisible:'true',rowNumWidth:'30',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 150px;margin-top: 10px;',summaryAuto:'false',useShiftKey:'true',visibleRowNum:'5'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'height:20px;',value:'파일명',width:'199'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',style:'height:20px;',value:'사이즈(byte)',width:'88'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'name',inputType:'text',style:'height:20px',textAlign:'left',width:'199'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'#,###',displayMode:'label',id:'size',inputType:'text',style:'height:20px',textAlign:'right',width:'88'}}]}]}]},{T:1,N:'w2:textbox',A:{class:'dmb',id:'',label:'> 업로드 결과',style:''}},{T:1,N:'xf:textarea',A:{id:'ui_muliuploadDone',style:'width: 100%;height: 120px;'}}]}]}]}]}]}]}]})