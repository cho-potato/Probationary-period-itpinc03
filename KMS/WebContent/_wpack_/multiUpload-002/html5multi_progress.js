/*amd /multiUpload-002/html5multi_progress.xml 4766 994c2175f193d6456f1eeff6d1a25e0dada2209bb40407fb2f4020dc18d887b5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'FileName',dataType:'text'}},{T:1,N:'w2:column',A:{id:'displaySize',name:'Size',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Status',name:'Status',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]}]}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function(){ 
        
		function selectCallback() {
			var fileInfos = tobe.getFileInfos();
			dataList1.setJSON( fileInfos );
		}
		
		scwin.tobe_onprogress = function(info) {
			console.log(info.fileName + "("+info.percentData+"%)");
			
			var rowidx = dataList1.getMatchedIndex("name", info.fileName);
			
			$("td[colindex='3']:eq("+rowidx+") .w2grid_input").text(info.percentData+"%");
			$("td[colindex='3']:eq("+rowidx+") .w2grid_input").css("width", info.percentData+"%");
		};
		
		function multiupload10_ondone(data) {
			console.log(JSON.stringify(data));
			setTimeout( clearUpload, "3000" );
		};
		
		function clearUpload() {
			dataList1.removeAll();
		}

		scwin.textbox4_onclick = function(e) {
			var idxArr = gridView1.getCheckedJSON("chk");
			var idxArr1 = gridView1.getCheckedIndex( "chk" );
			for( var i=0;i<idxArr.length;i++ ) {
				var fileName = idxArr[i].name;
				tobe.removeFile( fileName );
			}
			dataList1.removeRows( idxArr1 );
		};
		
		scwin.textbox5_onclick = function(e) {
			tobe.startUpload();
		};
		}
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'*{font-family:tahoma}.w2multiupload_uploader{background:url(/w2test/multiupload.jpg)}.delete_ing{background:url(/w2test/multiupload.jpg) 83px}.start{background:url(/w2test/multiupload.jpg) 346px}td[colindex=\'3\'] .w2grid_input{display:block;text-align:right;background-color:#ff0;width:0%}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'group2',style:'padding:10px;'},E:[{T:1,N:'w2:textbox',A:{id:'textbox1',style:'position: relative;',label:'HTML5 MultiUpload Sample',tagname:'h1'}},{T:1,N:'w2:gridView',A:{ignoreCellClick:'false',id:'gridView1',dataList:'dataList1',style:'position: relative;height: 200px;',useShiftKey:'true',scrollByColumn:'false',fixedColumnWithHidden:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column11',style:'height:20px;',inputType:'checkbox',width:'27',value:'chk'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',style:'height:20px;',inputType:'text',width:'422',value:'FileName'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'height:20px;',inputType:'text',width:'133',value:'Size'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px;',width:'197',inputType:'text',value:'Status'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'chk',style:'height:20px;',inputType:'checkbox',width:'27'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'name',style:'height:20px;',inputType:'text',width:'422',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'displaySize',style:'height:20px;',inputType:'text',width:'133'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'Status',style:'height:20px;',width:'197',inputType:'text',value:'Ready..'}}]}]}]},{T:1,N:'xf:group',A:{id:'group1',style:'overflow:hidden;margin-top:5px;'},E:[{T:1,N:'w2:multiupload',A:{maxcount:'',id:'tobe',maxsize:'10000000','ev:ondone':'multiupload10_ondone',style:'position:relative;height:34px;width:111px;float:left;','ev:onprogress':'scwin.tobe_onprogress',action:'',uploadButton:'',wmode:'false',filter:'한글파일:*.doc;*.hwp;*.docx',mode:'html5_transparent',selectCallback:'selectCallback'}},{T:1,N:'w2:textbox',A:{label:'',id:'textbox4',style:'position: relative;height: 34px;width: 84px;float:left;margin-left:5px;',class:'delete_ing','ev:onclick':'scwin.textbox4_onclick'}},{T:1,N:'w2:textbox',A:{id:'textbox5',label:'',style:'position: relative;height: 34px;width: 121px;float:left;margin-left:5px;',class:'start','ev:onclick':'scwin.textbox5_onclick'}}]}]}]}]}]})