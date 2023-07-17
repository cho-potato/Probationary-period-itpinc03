/*amd /sample/compList/02.xml 3029 02622dc6ea7da727418c6eecfb48fe70b572fa09f0635815b80dc8bf7b9d656d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	scwin.onpageload = function() {
		scwin.fn_setProgressbar();	//progressbar component
	};
	
	//change progressbar class
	scwin.fn_setProgressbar = function(progressbarClass, preProgressbarClass){
		var prefixStr = "ui_prg0",i;
		for(i=1;i<3;i++){
			$p.getComponentById(prefixStr+i).animate(0, 80, 1000, function(){});
		}
	};
	
	
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrapper',id:''},E:[{T:1,N:'xf:group',A:{class:'section_desc',id:'',style:'padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'폼을 구성하는 컴포넌트로, 텍스트나 이미지 출력용 컴포넌트이다.<br/>TextBox, Span Image, Progressbar가 해당된다.<br/>( source : 02.xml )',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{id:'',style:'overflow:hidden;'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'section02 dmb'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'contTitle01',label:'Textbox'}},{T:1,N:'w2:textbox',A:{class:'defComp',id:'',label:'<span style="color:steelblue; font-size:1.2em;font-weight:bold;">W</span>eb<span style="color:orange; font-size:1.2em;font-weight:bold;">S</span>quare<span style="color:#1C9682; font-size:1.2em;font-weight:bold;">5</span>',style:'line-height: 2em;'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'section02 dmb'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'width:140px;',class:'contTitle01',label:'Span'}},{T:1,N:'w2:span',A:{id:'',style:'line-height: 2em;',label:'span',class:'defComp'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'section02 dmb'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'contTitle01',label:'Image'}},{T:1,N:'xf:image',A:{id:'',style:'width: 84.8px;height: 23.2px;',src:'/img/w5_logo.png',class:'defComp'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'section02 dmb'},E:[{T:1,N:'w2:textbox',A:{id:'',style:'',class:'contTitle02',label:'Progressbar'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'pd10'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 0px 20px 0px 20px;height: 80px;',class:'borderBox'},E:[{T:1,N:'w2:progressbar',A:{min:'0',id:'ui_prg01',duration:'1000',max:'100',style:'position: relative;top:30px;height: 30px;',progressClass:'type4',valueType:'percent',autoClose:'false',step:'1'}}]},{T:1,N:'xf:group',A:{id:'',style:'padding: 0px 20px;',class:''},E:[{T:1,N:'w2:progressbar',A:{min:'0',id:'ui_prg02',duration:'1000',max:'100',style:'position: relative;height: 30px;',progressClass:'type8',valueType:'percent',autoClose:'false',step:'1'}}]}]}]}]}]}]}]}]})