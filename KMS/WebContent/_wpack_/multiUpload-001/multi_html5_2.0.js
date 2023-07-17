/*amd /multiUpload-001/multi_html5_2.0.xml 8364 9c545a26360ed51a4a320c01540d99e2a345b083a9127d1b5d3e4b673001ff68 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model'},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function(){ 
        
		function selectCallback() {
			console.log("selectCallback");
			var fileInfos = tobe.getFileInfos();
			grid1.setJSON( fileInfos );
		}
		
		
		function tobe_onComplete(){
			//mode=flash 일 때 flash가 준비되면 실행되는 부분. html5 모드 시 더 이상 사용되지 않음.
			console.log("onComplete10");
		}
		
		function multiupload10_ondone(data) {
			//업로드 성공 후 실행되는 콜백.
			console.log("multiupload10_ondone", data);
			
			var cnt = grid1.getRowCount();
			for( var i=0; i<cnt; i++ ) {
				grid1.setCellData( i , 3 , "Complete!!!!" );
			}
			
			setTimeout( clearUpload, "1000" );
			
		}
		
		function clearUpload() {
			grid1.removeAll();
		}
		
		function textbox4_onclick(e){
			var idxArr = grid1.getCheckedData("chk");
			var idxArr1 = grid1.getCheckedIndex( "chk" );
			
			if(idxArr1.length == tobe.getFileCount()) {
				tobe.removeAllFiles();
				grid1.removeAll();
				return;
			}
			for( var i=idxArr.length-1; i>=0; i-- ) {
				var fileName = idxArr[i][1];
				tobe.removeFile( fileName );
				grid1.removeRow( idxArr1[i] );
			}
		}
		
		function textbox5_onclick(e) {
			tobe.startUpload();
			
			var cnt = grid1.getRowCount();
			
			for( var i=0;i<cnt;i++ ) {
				grid1.setCellData( i , 3 , "Uploading..." );
			}
			
			
			
		}
		
		tobe._handleOndrop = function(e) {
	        try {
		        WebSquare.event.stopEvent(e);
		        var fileArr = e.dataTransfer.files;

		        if (this.html5Upload && this.options.mode.toLowerCase() == "html5" || this.options.mode.toLowerCase() == "html5_transparent") {
		            var contents = "";
		            for (var i = 0; i < fileArr.length; i++) {
		                //if ($.inArray(fileArr[i].name, this.fileNameArr) == -1) {
		                if (this.fileNameArr.indexOf(fileArr[i].name) == -1) {
		                    contents += "<tr id='_tr" + this._inx + "' trindex='" + this._inx + "'><td><input type='checkbox' name='chk' index='" + this._inx + "'/></td><td>" + fileArr[i].name + "</td><td>" + this._byteCalc(fileArr[i].size) + "</td><td><div id='progress_" + this._inx + "'></div></td></tr>";
		                    this.fileArray.push(fileArr[i]);
		                    this.fileNameArr.push(fileArr[i].name);
		                    this._inx++;
		                } else {
		                    alert("파일이 이미 있습니다.  ("+fileArr[i].name+")");
		                }
		            }
		            if (this.dom.tbody) {
		                this.dom.tbody.innerHTML += contents;
		                $("#" + this.id + "_tbody tr").click(function(e) {
		                    $(this).addClass("w2multiupload_html5_uploader_selected").siblings().removeClass("w2multiupload_html5_uploader_selected");
		                    if (e.target.type !== "checkbox") {
		                        $(":checkbox", this).trigger("click");
		                    }
		                });
		            }
		        } else {
		            for (var i = 0; i < fileArr.length; i++) {
		                //if ($.inArray(fileArr[i].name, this.fileNameArr) == -1) {
		                if (this.fileNameArr.indexOf(fileArr[i].name) == -1) {
		                    this.fileArray.push(fileArr[i]);
		                    this.fileNameArr.push(fileArr[i].name);
		                    this._inx++;
		                } else {
		                    alert("파일이 이미 있습니다.  ("+fileArr[i].name+")");
		                }
		            }
		        }
		    } catch (e) {
		        $W.exception.printStackTrace(e, null, this);
		    }
		}

		        // file drag
		        function fileDragHandler(e){
		            WebSquare.event.stopEvent(e);
		            e.target.className = (e.type == "dragover" ? "hover" : "");
		        }
		        
		        // file drop
		        function fileDropHandler(e){
		            fileDragHandler(e);
		            tobe._handleOndrop(e);
		            selectCallback();
		        }
		    
		        var filedragdom = filedrag.render;
		        filedragdom.addEventListener("dragover", fileDragHandler, false);
		        filedragdom.addEventListener("dragenter", fileDragHandler, false);  // for ie
		        filedragdom.addEventListener("dragleave", fileDragHandler, false);
		        filedragdom.addEventListener("drop", fileDropHandler, false);




		}
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'*{font-family:verdana}.w2multiupload_uploader{background:url(/multiupload.jpg)}.delete_ing{background:url(/multiupload.jpg) 83px}.start{background:url(/multiupload.jpg) 346px}#filedrag{display:block;height:50px;padding:10px;font-weight:700;text-align:center;color:#555;border:2px dashed #555;border-radius:7px;cursor:default;font-size:20px}#filedrag.hover{color:red;border:2px solid red}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'group2',style:'padding:10px;'},E:[{T:1,N:'w2:textbox',A:{id:'textbox1',style:'position: relative;',label:'HTML5 MultiUpload Sample',tagname:'h1'}},{T:1,N:'w2:grid',A:{ignoreCellClick:'false',id:'grid1',style:'position: relative;height: 200px;',useShiftKey:'true',scrollByColumn:'false',fixedColumnWithHidden:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column11',style:'height:20px;',inputType:'checkbox',width:'27',value:'chk'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',style:'height:20px;',inputType:'text',width:'422',value:'FileName'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'height:20px;',inputType:'text',width:'133',value:'Size'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px;',width:'197',inputType:'text',value:'Status'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'chk',style:'height:20px;',inputType:'checkbox',width:'27'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'name',style:'height:20px;',inputType:'text',width:'422',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'displaySize',style:'height:20px;',inputType:'text',width:'133'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'Status',style:'height:20px;',width:'197',inputType:'text',value:'Ready..'}}]}]}]},{T:1,N:'xf:group',A:{id:'group1',style:'overflow:hidden;margin-top:5px;'},E:[{T:1,N:'w2:multiupload',A:{maxcount:'',id:'tobe',maxsize:'10000000000',style:'position:relative;height:34px;width:111px;float:left;border:1px solid;',action:'',uploadButton:'',wmode:'false',filter:'*:*.*',mode:'html5_transparent',selectCallback:'selectCallback'},E:[{T:1,N:'script',A:{type:'javascript','ev:event':'ondone(data)'},E:[{T:4,cdata:function(scopeObj,data){with(scopeObj){ 
					
					multiupload10_ondone(data);
					
					
}}}]},{T:1,N:'script',A:{type:'javascript','ev:event':'onComplete'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
					
					tobe_onComplete();
					
					 
}}}]}]},{T:1,N:'w2:textbox',A:{label:'',id:'textbox4',style:'position: relative;height: 34px;width: 84px;float:left;margin-left:5px;',class:'delete_ing','ev:onclick':'textbox4_onclick'},E:[{T:1,N:'script',A:{'ev:event':'onclick',type:'javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
					
					textbox4_onclick(e);
					
					 
}}}]}]},{T:1,N:'w2:textbox',A:{id:'textbox5',label:'',style:'position: relative;height: 34px;width: 121px;float:left;margin-left:5px;',class:'start'},E:[{T:1,N:'script',A:{'ev:event':'onclick',type:'javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
					
					textbox5_onclick(e);
					
					 
}}}]}]}]}]},{T:1,N:'w2:textbox',A:{label:'Drop files here !!',id:'filedrag',style:''}}]}]}]})