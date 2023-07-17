/*amd /WidgetContainer/move_resize_widgets_WidgetContainer.xml 1924 72188ce6f9b59642619beae8fc9d8a345f6240230e0231aa1fccffe208470e9a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function(){
        
        var count=0;
		
		scwin.trigger1_onclick = function(e) {
			count++;
			widgetContainer.addWidgets({
			    id : "Widget_Added_"+count,
			    title : "Widget_Added_"+count,
			    //src : "widget.xml",
			    scope : true,
			    x : 0,
			    y : 0,
			    unitWidth : 1,
			    unitHeight : 1
			});
		};}
}}}]}]},{T:1,N:'body',A:{style:'padding:20px;','ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:trigger',A:{style:'width: 120px;height: 39px;line-height:32px;padding:5px;background-color:#C0C0C0;font-size:15px;font-family:monospace;',id:'trigger1',type:'button','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'addWidgets()'}]}]}]},{T:1,N:'w2:widgetContainer',A:{id:'widgetContainer',cols:'3',style:'position: relative ;width:100%;height:100%;border:1px solid black;margin-top: 30px;',unitHeightPixel:'200',mode:'pushpull',widgetMove:'true','ev:onwidgetmove':'scwin.widgetContainer1_onwidgetmove',preventMaximizeByTitle:'true'}}]}]}]})