/*amd /sample/pageFunc/popup_imagePreview.xml 7006 ec6c06d80a54af4e1ae4b45da76bb1d42d812c9e4a035b4a3c2fab7d2cb63ba3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'title',E:[{T:3,text:'이미지 미리보기'}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_SelectZipCd',ref:'data:json,dma_SearchParam',target:'data:json,dlt_ZipCd',action:'/edu/e001SearchZipcode.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중입니다.','ev:submit':'scwin.sbm_SelectZipCd_submit','ev:submitdone':'','ev:submiterror':''}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.fileDropBox .dropBox{border:3px dashed transparent;box-sizing:border-content;text-align:center;line-height:180px;color:transparent;font-size:35px}.fileDropBoxHover .previewImage{visibility:hidden}.fileDropBox:hover .dropBox,.fileDropBoxHover .dropBox{border-color:#ddd;color:#ccc;cursor:move;cursor:-moz-grabbing;cursor:-webkit-grabbing}.fileUploadbox{position:relative}.fileUploadbox .w2upload_input{display:none}.fileUploadbox .w2upload_image{position:static;width:100%;background-image:none;margin:0;top:0!important;left:0!important;text-align:center;border:1px solid #525252;border-radius:3px;font-family:NanumGothic,arial,helvetica,sans-serif;padding:3px 10px;text-decoration:none;display:inline-block;text-shadow:-1px -1px 0 rgba(0,0,0,.3);letter-spacing:1px;font-weight:700;color:#fff;background-color:#6e6e6e;background-image:linear-gradient(to bottom,#6e6e6e,#5e5c5c);box-sizing:border-box}.fileUploadbox .w2upload_image::before{content:"컴퓨터에서 파일 선택"}.fileUploadbox .w2upload_image:hover{border:1px solid #3b3b3b;background-color:#3f3f3f;background-image:linear-gradient(to bottom,#3f3f3f,#444343)}.fileUploadbox .w2upload_fakeInput{position:absolute;width:100%!important;height:100%!important;left:0;top:0;box-sizing:border-content}'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	
	scwin.stopPropagation_over = function(ev){
		ev = ev || window.event;
		if (ev.preventDefault) { ev.preventDefault(); }
		if (ev.stopPropagation) { ev.stopPropagation(); }
		var dataTransfer = ev.dataTransfer;
		dataTransfer.effectAllowed = "none";
	};
	
	scwin.stopPropagation_drop = function(ev){
		ev = ev || window.event;
		if (ev.preventDefault) { ev.preventDefault(); }
		if (ev.stopPropagation) { ev.stopPropagation(); }
		var dataTransfer = ev.dataTransfer;
		dataTransfer.dropEffect = "none";
	};
	
	//drag된 파일이 div위에 있을 때, 본 event가 없으면 drop이 동작되지 않는다.
	scwin.image_ondragover = function(ev) {
		ev.preventDefault();
		var dataTransfer = ev.dataTransfer;
		
		dataTransfer.dropEffect = "copy";
		dataTransfer.effectAllowed = "copy";
		grp_fileBox.addClass( "fileDropBoxHover" );
	};
	
	//drop이벤트
	scwin.image_ondrop = function(ev) {
		ev = ev || window.event;
		if (ev.preventDefault) { ev.preventDefault(); }
		if (ev.stopPropagation) { ev.stopPropagation(); }
		var files = ev.dataTransfer.files;
		
		//type:"image/jpeg"
		if((files[0].type).indexOf("image/") < 0){
			alert("이미지 파일만 가능합니다.");
			return false;
		}
		
		scwin.fileRead(files);
		grp_fileBox.removeClass( "fileDropBoxHover" );
	};
	
	//file을 drop하지 않고 leave할 경우 css 변경
	scwin.image_ondragleave = function(ev) {
		grp_fileBox.removeClass( "fileDropBoxHover" );
	};
	
	//drop된 파일을 읽고 image에 set
	scwin.fileRead =  function(tmpFile) {
		if (tmpFile && tmpFile[0]) {
			var reader = new FileReader();

            Promise.resolve().then(function() {
                reader.onload =  function(e) {
                    try{
                        ui_image.setSrc(e.target.result);
                    }catch(ex){ 
                    }finally{
                        reader.onload = null;
                        reader = null;
                    }
                };

                reader.readAsDataURL(tmpFile[0]);
                return;
   	    	});
			
		}
	};

	scwin.ibx_file_onchange = function(ev) {
		var tmpData = ev.dataTransfer || ev.target;
		scwin.fileRead(tmpData.files);
	};

	scwin.upd_image_onInputValueChange = function(fileName) {
		var ev = window.event;
		var files = ev.target.files;
		scwin.fileRead(files);
	};
	
	scwin.btn_Save_onclick = function(e) {
		var paramObj = $p.getParameter("param");
		try{
			scwin.fnStr = "closeCallback_"+paramObj.popId;
			$p.parent().scwin[scwin.fnStr](ui_image.getSrc()); 
		}catch(ex){parent.$p.log("error::::scwin."+scwin.fnStr+"이 존재하지 않습니다.");}
		$p.closePopup();
	};
	
	scwin.btn_ClosePopup_onclick = function(e) {
		$p.closePopup();
	};
	
	scwin.onpageload = function() {
		grp_image.bind("ondrop", scwin.image_ondrop);
		grp_image.bind("ondragover", scwin.image_ondragover);
		grp_image.bind("ondragleave", scwin.image_ondragleave);
	};
	
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'div',A:{style:'position:absolute;left:0px;right:0px;bottom:0px;top:0px;display: none;',ondragover:'scwin.stopPropagation_over(event)',ondrop:'scwin.stopPropagation_drop(event)'}},{T:1,N:'xf:group',A:{class:'popWrapper',style:'width:420px;height:340px;margin: 0px auto;'},E:[{T:1,N:'xf:group',A:{class:'titlebox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'df_tt',id:'',label:'프로필 사진 선택',style:'',tagname:'h2'}}]},{T:1,N:'xf:group',A:{id:'grp_fileBox',style:'position: relative;height: 200px;',class:'borderbox fileDropBox'},E:[{T:1,N:'xf:image',A:{id:'ui_image',style:'position: absolute;width: 300px;height: 200px;left: calc(50% - 150px)',src:'',class:'previewImage',alt:''}},{T:1,N:'w2:textbox',A:{id:'grp_image',style:'position: absolute;left:5px;right:5px;top:5px;bottom:5px;',class:'dropBox',label:'여기에 파일을 놓으세요'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'defaultbox tac'},E:[{T:1,N:'w2:upload',A:{id:'upd_image',style:'height: 24px;width: 200px;','ev:onInputValueChange':'scwin.upd_image_onInputValueChange',imageStyle:'position:absolute;vertical-align:middle;word-wrap:break-word',inputStyle:'position:absolute;vertical-align:middle;word-wrap:break-word',class:'fileUploadbox',type:'',disabled:''}}]},{T:1,N:'xf:group',A:{class:'btn_fix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tac',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_Save_onclick',id:'btn_Save',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_ClosePopup_onclick',id:'btn_ClosePopup',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})