(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[547],{3547:(t,e,i)=>{"use strict";i.r(e),i.d(e,{searchbox:()=>p});var s=i(2981),n=i(1656),o=i(2085),r=i(1960),a=i(3082),h=i(6615),p=function(t,e,i){h.s.call(this,t,e,i)};s.x.extend(p.prototype,h.s.prototype),p.prototype.defaultOptions={pluginType:"uiplugin.searchbox",pluginName:"searchbox",paddingRight:20},p.prototype.initialize=function(t){var e=this.options.style;this.options.style="position:relative;width:100%;height:100%;",this.options.parentEvent=this;var i=s.x.extend({},this.options),o=this.id+"___input";for(var r in i.id=o,delete i._scope_obj_org_id,delete i._scope_obj_uuid,delete i._scope_obj_runtime_id,this.input=new WebSquare.uiplugin.input(o,i,t),this.options.parentEvent="",this.input.options.userEvents=this.input.defaultOptions.userEvents,this.input.options.systemEvents=this.input.defaultOptions.sysyemEvents,this.options)"ev:"==r.slice(0,3)&&delete this.options[r];var a=-1;if(this.options.xmlEvents)for(var h=0;h<this.options.xmlEvents.length;h++)"onclick"==this.options.xmlEvents[h].name&&(a=h);this.options.xmlEvents=-1!=a?this.options.xmlEvents.splice(a,1):null,this.options.style=e,this.addControl(this.input);var p=this,d={name:"onkeyup",action:"script",param:{handler:function(t){p.setLayout()}}};this.input.options.xmlEvents?(-1!=a&&this.input.options.xmlEvents.splice(a,1),this.input.options.xmlEvents.push(d)):this.input.options.xmlEvents=[d],("false"==this.options.alwaysRefresh||"true"!==n.v.getConfiguration("/WebSquare/searchbox/alwaysRefresh/@value")&&"true"!==this.options.alwaysRefresh)&&(this.modelControl.ref=""),this.input.modelControl.id=this.id,this.input.modelControl.scope_uuid=this.options._scope_obj_uuid},p.prototype.toHTML=function(){var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'",i=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2searchbox "+this.options.className+"' "+i+">"),t.push(this.getChild(this.id+"___input").toHTML()),t.push("<div id='"+this.id+"___reset' class='w2searchbox_reset'></div>"),t.push("</div>"),t.join("")},p.prototype.setPreAction=function(){try{this.dom.reset=this.getElementById(this.id+"___reset")}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setAction=function(){try{this.options.nextTabID&&this.setNextTabID(this.options.nextTabID,this.scope_id),this.event.addUserEvents(this,this.input.userEventList),this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,this.handleMousedown)),this.event.addListener(this.render,"ontouchstart",this.event.bindAsEventListener(this,this.handleMousedown)),this.event.addListener(this.render,"onmouseover",this.event.bindAsEventListener(this,this.handleMouseover)),this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handleKeydownEvent));var t=parseInt(this.options.paddingRight,10),e=parseInt(this.input.getStyle("border-right-width"),10)+parseInt(this.input.getStyle("border-left-width"),10)||0,i=parseInt(this.render.getBoundingClientRect().right-this.render.getBoundingClientRect().left)-(t+parseInt(this.input.getStyle("padding-right"),10))-e,s=this.render.getBoundingClientRect().bottom-this.render.getBoundingClientRect().top;this.input.setSize(i,s),this.input.setStyle("padding-right",t+"px"),this.input.setVerticalAlign(),this.setLayout(),(a.D.isSpartan()||a.D.isIEAllVersion()&&parseInt(n.v.browserVersion(),10)>9)&&this.addClass(this.input.render,"w2searchbox_reset_remove"),this.options.mandatory&&this.onPropertyChange("mandatory",a.D.getBoolean(this.options.mandatory))}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setLayout=function(){try{if(this.input.render)if(""==this.input.render.value)this.dom.reset.style.display="none";else{this.dom.reset.style.display="block";var t=this.dom.reset.offsetHeight,e=this.getSize("height");this.dom.reset.style.top=parseInt((e-t)/2,10)+"px"}}catch(t){
o.w.printStackTrace(t,null,this)}},p.prototype.focus=function(){try{this.input.render&&this.input.render.focus()}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.refresh=function(){this.input.refresh(),this.setLayout()},p.prototype.onPropertyChange=function(t,e){try{switch(t){case"mandatory":1==e?this.addClass(this.render,"w2searchbox_mandatory"):this.removeClass(this.render,"w2searchbox_mandatory");break;case"disabled":1==e?(this.input.render.setAttribute("disabled","disabled"),this.input.addClass(this.input.render,"w2searchbox_disabled")):(this.input.render.removeAttribute("disabled"),this.input.removeClass(this.input.render,"w2searchbox_disabled"));break;case"readOnly":1==e?(this.input.render.setAttribute("readonly","readonly"),this.addClass(this.input.render,this.input.options.readOnlyClass)):(this.input.render.removeAttribute("readonly"),this.removeClass(this.input.render,this.input.options.readOnlyClass))}}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.handleMousedown=function(t){for(var e=this.event.getTargetIterator(t,this.render);e.next();)if(e.match("w2searchbox_reset")){r.B.fireEvent(this,"onresetclick",t),r.B.stopEvent(t),this.dom.reset.style.display="none";var i=this.getValue();this.setValue(""),""!=i&&r.B.fireEvent(this,"onviewchange",{oldValue:i,newValue:""}),this.focus()}e=null},p.prototype.handleMouseover=function(t){var e=r.B.getRelatedTarget(t);if(e&&this.hasClass(e,"w2searchbox_reset"))this.removeClass(this.dom.reset,"w2searchbox_reset_on");else{for(var i=this.event.getTargetIterator(t,this.render);i.next();)i.match("w2searchbox_reset")&&this.addClass(this.dom.reset,"w2searchbox_reset_on");i=null}},p.prototype.handleKeydownEvent=function(t){try{var e;if(9==(t.charCode?t.charCode:t.keyCode))if(t.shiftKey){if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].preTabID)if(r.B.preventDefault(t),e=a.D.getPreTabbableComp(this.id))return void e.focus()}else if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].nextTabID)if(r.B.preventDefault(t),e=a.D.getNextTabbableComp(this.id))return void e.focus()}catch(t){o.w.printStackTrace(t,null,this)}},p.apiExtend=function(){var t=WebSquare.uiplugin.input.prototype,e=WebSquare.uiplugin.searchbox.prototype;for(var i in t)e[i]||(e[i]=function(t){return function(){return this.input[t].apply(this.input,arguments)}}(i))},p.getDataListInfo=function(){try{var t={};return this.modelControl.isDataCollectionRefBinded?(t.id=this.modelControl.dataCollectionRefInfo.dataComp.id,t.ref=this.options.ref,t):null}catch(t){o.w.printStackTrace(t)}},p.prototype.finalize=function(){try{for(var t=this.childControlList.length-1;t>=0;t--)this.childControlList[t].remove()}catch(t){o.w.printStackTrace(t,null,this)}},p.prototype.setValue=function(t){try{this.input.setValue(t),this.setLayout()}catch(t){o.w.printStackTrace(t,null,this)}},p._initImport=function(){p.apiExtend()},s.x._initImportList.push("uiplugin.searchbox")}}]);