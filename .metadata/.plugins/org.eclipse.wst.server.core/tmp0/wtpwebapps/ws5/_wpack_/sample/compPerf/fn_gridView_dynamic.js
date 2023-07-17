/*amd /sample/compPerf/fn_gridView_dynamic.xml 5689 cb3d49bf0ece09aa882e6223fc7c4740c8d99ca01a42e7ed66fe11878d24561c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'data_01',name:'data_01',dataType:'text'}},{T:1,N:'w2:column',A:{id:'data_02',name:'data_02',dataType:'text'}},{T:1,N:'w2:column',A:{id:'data_03',name:'data_03',dataType:'text'}},{T:1,N:'w2:column',A:{id:'data_04',name:'data_04',dataType:'text'}},{T:1,N:'w2:column',A:{id:'data_05',name:'data_05',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

scwin.onpageload = function() {
	var jsonData = [{"data_01":"133527", "data_02":"러프치즈스넥", "data_03":"250", "data_04":"120", "data_05":"350"}
                    ,{"data_01":"133528", "data_02":"서울우유", "data_03":"200", "data_04":"120", "data_05":"350"}
                    ,{"data_01":"133530", "data_02":"아인슈타인", "data_03":"110", "data_04":"120", "data_05":"350"}
                    ,{"data_01":"133531", "data_02":"덴마크우유", "data_03":"245", "data_04":"120", "data_05":"350"} 
                    ];
    dataList1.setJSON( jsonData);
    
    grdMain.hide();
    edCols.setValue("5");
};

// header 이름 만들기 
scwin.getHeaderName = function(p) {
    var col_name = "h_" + (((p+1) < 10) ? ("0" + (p+1)) : (p+1));

    return  col_name;
};

// body 이름 만들기 
scwin.getColName = function(p) {
    var col_name = "data_" + (((p+1) < 10) ? ("0" + (p+1)) : (p+1));

    return  col_name;
}

scwin.makeGridView= function() {
    var i, j;
    var hId, bId;
    var nHeadQty = edCols.getValue();
    var gridView = '';
    
    gridView += "<w2:gridView xmlns='http://www.w3.org/1999/xhtml' xmlns:w2='http://www.inswave.com/websquare' xmlns:ev='http://www.w3.org/2001/xml-events'\n";
    gridView += "    dataList='dataList1' style='position:absolute;width:639px;height:131px;left:13px;top:139px;background-color:#F9F9F9;border:1px solid #539237;'\n";
    gridView += "    scrollByColumn='false' fixedColumnWithHidden='true' useShiftKey='true' \n";
    gridView += "    id='grdMain' ev:oncellclick='scwin.grdMain_oncellclick'>\n";
    gridView += "    <w2:header style='height:20px;padding-top:2px;' columnStyle='' id='header2' class='' columnClass=''>\n";
    gridView += "        <w2:row>\n";
    for (i=0; i<nHeadQty; i++) {
        hId = scwin.getHeaderName(i);

        gridView += "            <w2:column inputType='text' valueType='binary'\n";
        gridView += "                style='height:20px;padding-top:2px;' id='" + hId + "' width='100' value='" + hId + "'>\n";
        gridView += "            </w2:column>\n";
    }
    gridView += "        </w2:row>\n";
    gridView += "    </w2:header>\n";

    gridView += "    <w2:gBody style='height:20px;padding-top:2px;' columnStyle='' id='gBody2'>\n";
    gridView += "        <w2:row>\n";
    for (j=0; j<nHeadQty; j++) {
        bId = scwin.getColName(j);

        gridView += "            <w2:column inputType='text' valueType='binary'\n";
        gridView += "                style='height:20px;padding-top:2px;' dataType='text' id='" + bId + "' width='100'>\n";
        gridView += "            </w2:column>\n";
    }
    gridView += "        </w2:row>\n";
    gridView += "    </w2:gBody>\n";
    gridView += "</w2:gridView>\n";

    grdMain.setGridStyle(WebSquare.xml.parse(gridView, true));
};

scwin.trBtnMakeGrid_onclick = function(e) {
    if (edCols.getValue() > 0) {
        scwin.makeGridView();
    } else {
        alert('열갯수를 입력 하세요');
    }
};

scwin.grdMain_oncellclick = function(row,col) {
    alert("1111");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'',id:'grpMain',style:'position: absolute ;left:29px;top:30px;width: 669px;height: 280px;'},E:[{T:1,N:'w2:gridView',A:{dataList:'','ev:oncellclick':'scwin.grdMain_oncellclick',fixedColumnWithHidden:'true',id:'grdMain',scrollByColumn:'false',style:'position: absolute ;left:13px;top:139px;width:639px;height:83px;',useShiftKey:'true'},E:[{T:1,N:'w2:header',A:{id:'header3',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{id:'column24',inputType:'text',style:'height:20px',width:'0'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody3',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'column25',inputType:'text',style:'height:20px',width:'0'}}]}]}]},{T:1,N:'w2:textbox',A:{id:'textTitle',label:'동적그리드뷰',style:'position: absolute ;left:16px;top:91px;width: 177px;height: 30px;'}},{T:1,N:'w2:textbox',A:{id:'textCols',label:'열 갯수',style:'position: absolute ;left:308px;top:95px;width:50px;height:24px;;text-align:center;vertical-align:middle;'}},{T:1,N:'xf:input',A:{dataType:'number',editType:'select',id:'edCols',maxByteLength:'2',maxlength:'2',style:'position: absolute ;left:354px;top:94px;width: 60px;height: 24px;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.trBtnMakeGrid_onclick',id:'trBtnMakeGrid',style:'position: absolute ;left:424px;top:94px;width: 98px;height: 24px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'그리드뷰생성'}]}]}]}]}]}]})