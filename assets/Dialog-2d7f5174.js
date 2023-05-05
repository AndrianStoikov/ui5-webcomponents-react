import{c as C,f as N}from"./Device-208919c6.js";import{e as u,l as d,s as b,a as B,b as I,p as g,c as P}from"./withWebComponent-d61dcbbc.js";import{s as E}from"./slot-76e48863.js";import{b as q,P as v,c as p,s as F}from"./PopupsCommon.css-02b533b0.js";import{h as W,o as y,p as z,q as H,s as M,v as $,w as x,x as D,y as R}from"./Icons-524f4c51.js";import{V as c}from"./ValueState-2c5e5904.js";import{I as A}from"./Icon-c5c4720b.js";import{k as U,a as k}from"./UI5Element-1225b968.js";import"./information-b4bc7d32.js";import{s as S}from"./style-map-33b353d0.js";import{o as L}from"./class-map-519e9c6d.js";import{s as X}from"./BrowserScrollbar.css-401cf542.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-ebeaab24.js";import"./jsx-runtime-5926aa06.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./FocusableElements-fe6ae4c8.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./PopupUtils-e5ce8d68.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-a7d132d0.js";import"./MediaRange-25b98f31.js";import"./i18n-defaults-80781f7e.js";const j="resize-corner",T="M384 224v32q0 12-10 22L182 470q-10 10-22 10h-32zM224 480l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z",Y=!1,V="SAP-icons-v4",K="@ui5/webcomponents-icons";W(j,{pathData:T,ltr:Y,collection:V,packageName:K});const Z="resize-corner",O="M386.5 305q10-8 19-8 11 0 19 8 8 10 8 19t-8 19l-161 161q-10 8-19 8t-19-8q-8-8-8-18t8-20zm38-134q8 8 8 19 0 10-8 18l-296 296q-8 8-18 8-11 0-19-8-8-7-8-19 0-11 8-19l295-295q8-8 19-8 12 0 19 8z",G=!1,J="SAP-icons-v5",Q="@ui5/webcomponents-icons";W(Z,{pathData:O,ltr:G,collection:J,packageName:Q});U();function ee(r,e,t){return u`<section style="${S(this.styles.root)}" class="${L(this.classes.root)}" role="${d(this._role)}" aria-modal="${d(this._ariaModal)}" aria-label="${d(this._ariaLabel)}" aria-labelledby="${d(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span>${this._displayHeader?te.call(this,r,e,t):void 0}<div style="${S(this.styles.content)}" class="${L(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this.footer.length?ae.call(this,r,e,t):void 0}${this._showResizeHandle?re.call(this,r,e,t):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function te(r,e,t){return u`<header class="ui5-popup-header-root" id="ui5-popup-header" tabindex="${d(this._headerTabIndex)}" @keydown="${this._onDragOrResizeKeyDown}" @mousedown="${this._onDragMouseDown}" part="header" state="${d(this.state)}">${this.hasValueState?ie.call(this,r,e,t):void 0}${this.header.length?oe.call(this,r,e,t):se.call(this,r,e,t)}</header>`}function ie(r,e,t){return t?u`<${b("ui5-icon",e,t)} class="ui5-dialog-value-state-icon" name="${d(this._dialogStateIcon)}"></${b("ui5-icon",e,t)}>`:u`<ui5-icon class="ui5-dialog-value-state-icon" name="${d(this._dialogStateIcon)}"></ui5-icon>`}function oe(r,e,t){return u`<slot name="header"></slot>`}function se(r,e,t){return u`<h1 id="ui5-popup-header-text" class="ui5-popup-header-text">${d(this.headerText)}</h1>`}function ae(r,e,t){return u`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}function re(r,e,t){return t?u`<${b("ui5-icon",e,t)} name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></${b("ui5-icon",e,t)}>`:u`<ui5-icon name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></ui5-icon>`}k("@ui5/webcomponents-theming","sap_fiori_3",async()=>B);k("@ui5/webcomponents","sap_fiori_3",async()=>I);const ne={packageName:"@ui5/webcomponents",fileName:"themes/Dialog.css",content:':host{min-width:20rem;min-height:6rem;max-height:94%;max-width:90%;flex-direction:column;box-shadow:var(--sapContent_Shadow3);border-radius:var(--sapElement_BorderCornerRadius)}:host([stretch]){width:90%;height:94%}:host([stretch][on-phone]){width:100%;height:100%;max-height:100%;max-width:100%;border-radius:0}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot=header]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}:host([draggable]) .ui5-popup-root{user-select:text}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}.ui5-popup-header-root{position:relative}:host([state=Error]) .ui5-popup-header-root{box-shadow:var(--_ui5_dialog_header_error_state_box_shadow)}:host([state=Information]) .ui5-popup-header-root{box-shadow:var(--_ui5_dialog_header_information_state_box_shadow)}:host([state=Success]) .ui5-popup-header-root{box-shadow:var(--_ui5_dialog_header_success_state_box_shadow)}:host([state=Warning]) .ui5-popup-header-root{box-shadow:var(--_ui5_dialog_header_warning_state_box_shadow)}.ui5-dialog-value-state-icon{margin-inline-end:.5rem}:host([state=Error]) .ui5-dialog-value-state-icon{color:var(--_ui5_dialog_header_error_state_icon_color)}:host([state=Information]) .ui5-dialog-value-state-icon{color:var(--_ui5_dialog_header_information_state_icon_color)}:host([state=Success]) .ui5-dialog-value-state-icon{color:var(--_ui5_dialog_header_success_state_icon_color)}:host([state=Warning]) .ui5-dialog-value-state-icon{color:var(--_ui5_dialog_header_warning_state_icon_color)}.ui5-popup-header-root{outline:none}.ui5-popup-header-root:focus-visible:after{content:"";position:absolute;left:var(--_ui5_dialog_header_focus_left_offset);bottom:var(--_ui5_dialog_header_focus_bottom_offset);right:var(--_ui5_dialog_header_focus_right_offset);top:var(--_ui5_dialog_header_focus_top_offset);border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5_dialog_header_border_radius) var(--_ui5_dialog_header_border_radius) 0 0;pointer-events:none}:host([stretch]) .ui5-popup-content{width:100%;height:100%}.ui5-popup-content{min-height:var(--_ui5_dialog_content_min_height);flex:1 1 auto}.ui5-popup-resize-handle{position:absolute;bottom:var(--_ui5_dialog_resize_handle_bottom);inset-inline-end:var(--_ui5_dialog_resize_handle_right);cursor:var(--_ui5_dialog_resize_cursor);color:var(--_ui5_dialog_resize_handle_color)}:host ::slotted([slot=footer]){height:var(--_ui5_dialog_footer_height)}:host ::slotted([slot=footer][ui5-bar][design=Footer]){border-top:none}'};var l=globalThis&&globalThis.__decorate||function(r,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,i);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(o=(s<3?a(o):s>3?a(e,t,o):a(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},w;const _=16,he={[c.Error]:"error",[c.Warning]:"alert",[c.Success]:"sys-enter-2",[c.Information]:"information"};let h=w=class extends q{constructor(){super(),this._revertSize=()=>{Object.assign(this.style,{top:"",left:"",width:"",height:""})},this._screenResizeHandler=this._center.bind(this),this._dragMouseMoveHandler=this._onDragMouseMove.bind(this),this._dragMouseUpHandler=this._onDragMouseUp.bind(this),this._resizeMouseMoveHandler=this._onResizeMouseMove.bind(this),this._resizeMouseUpHandler=this._onResizeMouseUp.bind(this),this._dragStartHandler=this._handleDragStart.bind(this)}static _isHeader(e){return e.classList.contains("ui5-popup-header-root")||e.getAttribute("slot")==="header"}async show(e=!1){await super._open(e)}get isModal(){return!0}get shouldHideBackdrop(){return!1}get _ariaLabelledBy(){let e;return this.headerText!==""&&!this._ariaLabel&&(e="ui5-popup-header-text"),e}get _displayProp(){return"flex"}get _displayHeader(){return this.header.length||this.headerText||this.draggable||this.resizable}get _movable(){return!this.stretch&&this.onDesktop&&(this.draggable||this.resizable)}get _headerTabIndex(){return this._movable?"0":void 0}get _showResizeHandle(){return this.resizable&&this.onDesktop}get _minHeight(){let e=Number.parseInt(window.getComputedStyle(this.contentDOM).minHeight);const t=this._root.querySelector(".ui5-popup-header-root");t&&(e+=t.offsetHeight);const i=this._root.querySelector(".ui5-popup-footer-root");return i&&(e+=i.offsetHeight),e}get hasValueState(){return this.state!==c.None}get _dialogStateIcon(){return he[this.state]}get _role(){if(this.accessibleRole!==v.None)return this.state===c.Error||this.state===c.Warning?v.AlertDialog.toLowerCase():this.accessibleRole.toLowerCase()}_show(){super._show(),this._center()}onBeforeRendering(){super.onBeforeRendering(),this._isRTL=this.effectiveDir==="rtl",this.onPhone=C(),this.onDesktop=N()}onAfterRendering(){!this.isOpen()&&this.open?this.show():this.isOpen()&&!this.open&&this.close()}onEnterDOM(){super.onEnterDOM(),this._attachScreenResizeHandler(),this.addEventListener("dragstart",this._dragStartHandler)}onExitDOM(){super.onExitDOM(),this._detachScreenResizeHandler(),this.removeEventListener("dragstart",this._dragStartHandler)}_resize(){super._resize(),this._screenResizeHandlerAttached&&this._center()}_attachScreenResizeHandler(){this._screenResizeHandlerAttached||(window.addEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!0)}_detachScreenResizeHandler(){this._screenResizeHandlerAttached&&(window.removeEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!1)}_center(){const e=window.innerHeight-this.offsetHeight,t=window.innerWidth-this.offsetWidth;Object.assign(this.style,{top:`${Math.round(e/2)}px`,left:`${Math.round(t/2)}px`})}_onDragMouseDown(e){if(!this._movable||!this.draggable||!w._isHeader(e.target))return;e.preventDefault();const{top:t,left:i}=this.getBoundingClientRect(),{width:s,height:o}=window.getComputedStyle(this);Object.assign(this.style,{top:`${t}px`,left:`${i}px`,width:`${Math.round(Number.parseFloat(s)*100)/100}px`,height:`${Math.round(Number.parseFloat(o)*100)/100}px`}),this._x=e.clientX,this._y=e.clientY,this._attachMouseDragHandlers()}_onDragMouseMove(e){e.preventDefault();const{clientX:t,clientY:i}=e,s=this._x-t,o=this._y-i,{left:a,top:n}=this.getBoundingClientRect();Object.assign(this.style,{left:`${Math.floor(a-s)}px`,top:`${Math.floor(n-o)}px`}),this._x=t,this._y=i}_onDragMouseUp(){delete this._x,delete this._y,this._detachMouseDragHandlers()}_onDragOrResizeKeyDown(e){if(!(!this._movable||!w._isHeader(e.target))){if(this.draggable&&[y,z,H,M].some(t=>t(e))){this._dragWithEvent(e);return}this.resizable&&[$,x,D,R].some(t=>t(e))&&this._resizeWithEvent(e)}}_dragWithEvent(e){const{top:t,left:i,width:s,height:o}=this.getBoundingClientRect();let a=0,n="top";switch(!0){case y(e):a=t-_,n="top";break;case z(e):a=t+_,n="top";break;case H(e):a=i-_,n="left";break;case M(e):a=i+_,n="left";break}a=p(a,0,n==="left"?window.innerWidth-s:window.innerHeight-o),this.style[n]=`${a}px`}_resizeWithEvent(e){this._detachScreenResizeHandler(),this.addEventListener("ui5-before-close",this._revertSize,{once:!0});const{top:t,left:i}=this.getBoundingClientRect(),s=window.getComputedStyle(this),o=Number.parseFloat(s.minWidth),a=window.innerWidth-i,n=window.innerHeight-t;let f=Number.parseFloat(s.width),m=Number.parseFloat(s.height);switch(!0){case $(e):m-=_;break;case x(e):m+=_;break;case D(e):f-=_;break;case R(e):f+=_;break}f=p(f,o,a),m=p(m,this._minHeight,n),Object.assign(this.style,{width:`${f}px`,height:`${m}px`})}_attachMouseDragHandlers(){this._detachScreenResizeHandler(),window.addEventListener("mousemove",this._dragMouseMoveHandler),window.addEventListener("mouseup",this._dragMouseUpHandler)}_detachMouseDragHandlers(){window.removeEventListener("mousemove",this._dragMouseMoveHandler),window.removeEventListener("mouseup",this._dragMouseUpHandler)}_onResizeMouseDown(e){if(!this._movable||!this.resizable)return;e.preventDefault();const{top:t,left:i}=this.getBoundingClientRect(),{width:s,height:o,minWidth:a}=window.getComputedStyle(this);this._initialX=e.clientX,this._initialY=e.clientY,this._initialWidth=Number.parseFloat(s),this._initialHeight=Number.parseFloat(o),this._initialTop=t,this._initialLeft=i,this._minWidth=Number.parseFloat(a),this._cachedMinHeight=this._minHeight,Object.assign(this.style,{top:`${t}px`,left:`${i}px`}),this._attachMouseResizeHandlers()}_onResizeMouseMove(e){const{clientX:t,clientY:i}=e;let s,o;this._isRTL?(s=p(this._initialWidth-(t-this._initialX),this._minWidth,this._initialLeft+this._initialWidth),o=p(this._initialLeft+(t-this._initialX),0,this._initialX+this._initialWidth-this._minWidth)):s=p(this._initialWidth+(t-this._initialX),this._minWidth,window.innerWidth-this._initialLeft);const a=p(this._initialHeight+(i-this._initialY),this._cachedMinHeight,window.innerHeight-this._initialTop);Object.assign(this.style,{height:`${a}px`,width:`${s}px`,left:o?`${o}px`:void 0})}_onResizeMouseUp(){delete this._initialX,delete this._initialY,delete this._initialWidth,delete this._initialHeight,delete this._initialTop,delete this._initialLeft,delete this._minWidth,delete this._cachedMinHeight,this._detachMouseResizeHandlers()}_handleDragStart(e){this.draggable&&e.preventDefault()}_attachMouseResizeHandlers(){this._detachScreenResizeHandler(),window.addEventListener("mousemove",this._resizeMouseMoveHandler),window.addEventListener("mouseup",this._resizeMouseUpHandler),this.addEventListener("ui5-before-close",this._revertSize,{once:!0})}_detachMouseResizeHandlers(){window.removeEventListener("mousemove",this._resizeMouseMoveHandler),window.removeEventListener("mouseup",this._resizeMouseUpHandler)}};l([g()],h.prototype,"headerText",void 0);l([g({type:Boolean})],h.prototype,"stretch",void 0);l([g({type:Boolean})],h.prototype,"draggable",void 0);l([g({type:Boolean})],h.prototype,"resizable",void 0);l([g({type:c,defaultValue:c.None})],h.prototype,"state",void 0);l([g({type:Boolean})],h.prototype,"onPhone",void 0);l([g({type:Boolean})],h.prototype,"onDesktop",void 0);l([E()],h.prototype,"header",void 0);l([E()],h.prototype,"footer",void 0);h=w=l([P({tag:"ui5-dialog",template:ee,styles:[X,F,ne],dependencies:[A]})],h);h.define();const Oe=h;export{Oe as default};
//# sourceMappingURL=Dialog-2d7f5174.js.map
