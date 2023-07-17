/*amd /WidgetContainer/addWidgets_WidgetContainer/addWidgets_WidgetContainer.xml 3555 e0d0b098625bb6272a79d9e481a0b25d6fef2ed007dfc188205c016371f71be7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function(){
        
        var count=0;
		
		scwin.trigger1_onclick = function(e) {
			count++;
			widgetContainer.addWidgets({
			    id : "black_"+count,
			    title : "Widget_Added_black"+count,
			    src : "widget_black.xml",
			    scope : true,
			    x : 0,
			    y : 0,
			    unitWidth : 1,
			    unitHeight : 1
			});
		};        
        var count=0;
		
		scwin.trigger1_onclick = function(e) {
			count++;
			widgetContainer.addWidgets({
			    id : "black_"+count,
			    title : "Widget_Added_black"+count,
			    src : "widget_black.xml",
			    scope : true,
			    x : 0,
			    y : 0,
			    unitWidth : 1,
			    unitHeight : 1
			});
		};    
		    
        var count1=0;
		
		scwin.trigger2_onclick = function(e) {
			count1++;
			widgetContainer.addWidgets({
			    id : "red_"+count1,
			    title : "Widget_Added_red"+count1,
			    src : "widget_red.xml",
			    scope : true,
			    x : 0,
			    y : 0,
			    unitWidth : 2,
			    unitHeight : 1
			});
		}; 
		    
        var count2=0;
		
		scwin.trigger3_onclick = function(e) {
			count2++;
			widgetContainer.addWidgets({
			    id : "red_"+count2,
			    title : "Widget_Added_blue"+count2,
			    src : "widget_blue.xml",
			    scope : true,
			    x : 0,
			    y : 0,
			    unitWidth : 2,
			    unitHeight : 1
			});
		};
		}
}}}]}]},{T:1,N:'body',A:{style:'padding:20px;','ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:trigger',A:{style:'width: 180px;height: 39px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger1',type:'button','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'addWidgets() - black'}]}]},{T:1,N:'xf:trigger',A:{style:'width: 180px;height: 39px;margin-left: 30px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger2',type:'button','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'addWidgets() - red'}]}]},{T:1,N:'xf:trigger',A:{style:'width: 180px;height: 39px;margin-left: 30px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger3',type:'button','ev:onclick':'scwin.trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'addWidgets() - blue'}]}]}]},{T:1,N:'w2:widgetContainer',A:{id:'widgetContainer',cols:'3',style:'position: relative ;width:100%;height:100%;border:1px solid black;margin-top: 30px;',unitHeightPixel:'200',mode:'pushpull',widgetMove:'true','ev:onwidgetmove':'scwin.widgetContainer1_onwidgetmove',preventMaximizeByTitle:'true'}}]}]}]})