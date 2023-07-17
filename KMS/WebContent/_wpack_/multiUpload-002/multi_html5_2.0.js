/*amd /multiUpload-002/multi_html5_2.0.xml 4768 38fdb2e716b6e8b5dbca55608920f8e95fd347763e8781b16ddd51eef96fc2a1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model'},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function(){ 
        
		function selectCallback() {
			console.log("selectCallback");
			var fileInfos = tobe.getFileInfos();
			grid1.setJSON( fileInfos );
		}
		
		
		function tobe_onComplete(){
			console.log("onComplete10");
		}
		
		function multiupload10_ondone(data) {
			console.log("multiupload10_ondone");
		
			console.log( data );
			
			var cnt = grid1.getRowCount();
			for( var i=0;i<cnt;i++ ) {
				grid1.setCellData( i , 3 , "Complete!!!!" );
			}
			
			setTimeout( clearUpload, "1000" );
			
		}
		
		function clearUpload() {
			grid1.removeAll();
		}
		
		function textbox4_onclick(e){
			var idxArr = grid1.getCheckedJSON("chk");
			var idxArr1 = grid1.getCheckedIndex( "chk" );
			debugger;
			for( var i=0; i<idxArr.length;i++ ) {
				var fileName = idxArr[i].name;
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
		
		}
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'*{font-family:tahoma}.w2multiupload_uploader{background:url(/w2test/multiupload.jpg)}.delete_ing{background:url(/w2test/multiupload.jpg) 83px}.start{background:url(/w2test/multiupload.jpg) 346px}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'group2',style:'padding:10px;'},E:[{T:1,N:'w2:textbox',A:{id:'textbox1',style:'position: relative;',label:'HTML5 MultiUpload Sample',tagname:'h1'}},{T:1,N:'w2:grid',A:{ignoreCellClick:'false',id:'grid1',style:'position: relative;height: 200px;',useShiftKey:'true',scrollByColumn:'false',fixedColumnWithHidden:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column11',style:'height:20px;',inputType:'checkbox',width:'27',value:'chk'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',style:'height:20px;',inputType:'text',width:'422',value:'FileName'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',style:'height:20px;',inputType:'text',width:'133',value:'Size'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',style:'height:20px;',width:'197',inputType:'text',value:'Status'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'chk',style:'height:20px;',inputType:'checkbox',width:'27'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'name',style:'height:20px;',inputType:'text',width:'422',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'displaySize',style:'height:20px;',inputType:'text',width:'133'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'Status',style:'height:20px;',width:'197',inputType:'text',value:'Ready..'}}]}]}]},{T:1,N:'xf:group',A:{id:'group1',style:'overflow:hidden;margin-top:5px;'},E:[{T:1,N:'w2:multiupload',A:{maxcount:'',id:'tobe',maxsize:'10000000000',style:'position:relative;height:34px;width:111px;float:left;',action:'',uploadButton:'',wmode:'false',filter:'*:*.*',mode:'html5_transparent',selectCallback:'selectCallback'},E:[{T:1,N:'script',A:{type:'javascript','ev:event':'ondone(data)'},E:[{T:4,cdata:function(scopeObj,data){with(scopeObj){ 
					
					multiupload10_ondone(data);
					
					
}}}]},{T:1,N:'script',A:{type:'javascript','ev:event':'onComplete'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
					
					tobe_onComplete();
					
					 
}}}]}]},{T:1,N:'w2:textbox',A:{label:'',id:'textbox4',style:'position: relative;height: 34px;width: 84px;float:left;margin-left:5px;',class:'delete_ing','ev:onclick':'textbox4_onclick'},E:[{T:1,N:'script',A:{'ev:event':'onclick',type:'javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
					
					textbox4_onclick(e);
					
					 
}}}]}]},{T:1,N:'w2:textbox',A:{id:'textbox5',label:'',style:'position: relative;height: 34px;width: 121px;float:left;margin-left:5px;',class:'start'},E:[{T:1,N:'script',A:{'ev:event':'onclick',type:'javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
					
					textbox5_onclick(e);
					
					 
}}}]}]}]}]}]}]}]})