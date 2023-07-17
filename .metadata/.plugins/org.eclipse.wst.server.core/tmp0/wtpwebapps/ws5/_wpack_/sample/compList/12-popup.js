/*amd /sample/compList/12-popup.xml 2344 0cd681461e3852842cadf9470bf1aa2d7e558892b49f71c9af1b017dfcadb588 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
    scwin.onpageload = function() {
		var tmpJSON;
	    var frameID = $p.getFrameId();
	    if(frameID == "mf"){
	    	// window Popup으로 띄운 경우 
	    	tmpJSON = $w.getParameter( "rowObj" ); 
	    }else{
	    	// layer Popup으로 띄운 경우
	    	tmpJSON = $p.getParameter( "rowObj" ); 
	    }
	    
	    txtTitle.setValue( tmpJSON.title );
        spnPrice.setValue( tmpJSON.price );
        
        Promise.resolve().then(function() {
	        img.setSrc( tmpJSON.img );
        } );
	        
	    
	};
	
	scwin.trigger1_onclick = function(e){
		var frameID = $p.getFrameId();
	    if(frameID == "mf"){
	    	// window Popup으로 띄운 경우 
	    	parent.$p.closePopup();
	    }else{
	    	// layer Popup으로 띄운 경우
	    	$p.parent().scwin.closePopup();
	    }
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 6px;',class:''},E:[{T:1,N:'w2:textbox',A:{id:'txtTitle',label:'',ref:'',style:'margin-bottom: 6px;min-height: 12px;',tagname:'h2'}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 6px;text-align: center;'},E:[{T:1,N:'xf:image',A:{id:'img',ref:'',style:'width: 90px;height: 120px;margin-bottom: 6px;',src:''}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 6px;'},E:[{T:1,N:'w2:span',A:{style:'font: bold 11px tahoma;margin-right: 4px;',label:'PRICE : '}},{T:1,N:'w2:span',A:{ref:'',dataType:'number',style:'font: bold 11px tahoma;',label:'',displayFormat:'$#,###.#0',id:'spnPrice'}}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'text-align: center;left: 0px;right: 0px;bottom: 6px;',class:'btnbox'},E:[{T:1,N:'xf:trigger',A:{id:'trigger1',style:'width: 60px;height: 25px;','ev:onclick':'scwin.trigger1_onclick',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:3,text:'close'}]}]}]}]}]}]})