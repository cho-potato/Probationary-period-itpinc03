/*amd /gridView-019/grid_inputBoxUserObject.xml 5698 65ab20df9151762ab8e782635d33cb39e0ab95dd42cf832155c3b8410d07e393 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'xf:instance',_xml:'<xf:instance xmlns:xf="http://www.w3.org/2002/xforms">\r\n				<data xmlns="">\r\n					<list>\r\n						<map>\r\n							<id>A001</id>\r\n							<name>홍길동</name>\r\n							<dept>인사과</dept>\r\n							<tel>010-4442-4422</tel>\r\n							<score>98</score>\r\n						</map>\r\n						<map>\r\n							<id>A002</id>\r\n							<name>김영수</name>\r\n							<dept>인사과</dept>\r\n							<tel>010-4442-4422</tel>\r\n							<score>88</score>\r\n						</map>\r\n						<map>\r\n							<id>A003</id>\r\n							<name>박수영</name>\r\n							<dept>총무과</dept>\r\n							<tel>010-4442-4422</tel>\r\n							<score>85</score>\r\n						</map>\r\n						<map>\r\n							<id>A004</id>\r\n							<name>김연우</name>\r\n							<dept>총무과</dept>\r\n							<tel>010-4442-4422</tel>\r\n							<score>96</score>\r\n						</map>\r\n					</list>\r\n					<request>\r\n						<data/>\r\n					</request>\r\n				</data>\r\n			</xf:instance>'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function(){ 
            function setInputBoxInGridHeader(gridObj, headerColumnId, inputBoxId, dataType, allowChar, maxLength, displayFormat, textAlign) {
                var inputBoxObj = {
                    input : WebSquare.util.dynamicCreate(inputBoxId, "input", { 
                        style : "width:100%; height:100%;text-align:" + textAlign,
                        dataType: dataType,
                        focusCalcSize : false,
                        allowChar : allowChar, 
                        displayFormat : displayFormat,
                        ref : "request/data"
                    }, grid1),
                    getContent : function() {
                        return this.input.render;
                    },
                    setValue : function( value ) {
                        this.input.setValue(value);
                    },
                    setMaxLength : function (maxLength) {
                        this.input.setMaxLength(maxLength);
                    },
                    getValue : function() {
                        return this.input.getValue();
                    },
                    valueChange : function(e) {
                    }
                }
                inputBoxObj.input.setMaxLength(maxLength);
                inputBoxObj.input.bind("onfocus", function() { grid1.removeFocusedCell(); });
                gridObj.setHeaderUserObject(headerColumnId, inputBoxObj);
            }
        
            function init(){
                grid1.setXML(WebSquare.ModelUtil.findInstanceNode("list"));
                
                setInputBoxInGridHeader(grid1, "column8", "inputHeader2", "text", "0-9-", 13, "", "center");
                setInputBoxInGridHeader(grid1, "column13", "inputHeader1", "number", "", 5, "#,###", "right");
            }
            
            init();
        }
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:grid',A:{baseNode:'list',repeatNode:'map',scrollByColumn:'false',id:'grid1',style:'position: absolute ;left: 8px;top: 8px;width: 527px;height: 278px;'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{id:'column7',style:'height:20px',inputType:'text',width:'70',value:'아이디'}},{T:1,N:'w2:column',A:{id:'column5',style:'height:20px',inputType:'text',width:'70',value:'이름'}},{T:1,N:'w2:column',A:{id:'column3',style:'height:20px',inputType:'text',width:'100',value:'부서'}},{T:1,N:'w2:column',A:{id:'column1',style:'height:20px',width:'120',inputType:'text',value:'전화번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column12',removeBorderStyle:'false',footerDiv:'false',style:'height:20px',inputType:'text',width:'70',value:'점수'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column11',removeBorderStyle:'false',footerDiv:'false',style:'height:20px',width:'70',inputType:'text'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column10',removeBorderStyle:'false',footerDiv:'false',style:'height:20px',width:'70',inputType:'text'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',removeBorderStyle:'false',footerDiv:'false',style:'height:20px',width:'100',inputType:'text'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column8',removeBorderStyle:'false',footerDiv:'false',style:'height:20px',width:'120',inputType:'text'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column13',removeBorderStyle:'false',footerDiv:'false',style:'height:20px',inputType:'text',width:'70',textAlign:''}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'id',style:'height:20px',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'name',style:'height:20px',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'dept',style:'height:20px',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{id:'tel',style:'height:20px',width:'120',inputType:'text',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'score',removeBorderStyle:'false',footerDiv:'false',style:'height:20px',inputType:'text',width:'70',dataType:'number',textAlign:'right'}}]}]}]}]}]}]})