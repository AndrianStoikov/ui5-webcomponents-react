import{e as b,l as T,s as D,a as V,p as c,c as F}from"./withWebComponent-e4481254.js";import{s as E}from"./slot-634e3e91.js";import{D as G,I as A}from"./Integer-f7f172c9.js";import{i as j}from"./Device-208919c6.js";import{i as R,g as X}from"./PopupUtils-a2e37749.js";import{a as Y,r as q,g as K,b as U,c as O,s as Z}from"./PopupsCommon.css-7d9fbba1.js";import{s as M}from"./style-map-77d201d2.js";import{o as I}from"./class-map-5d8e4b2b.js";import{s as J}from"./BrowserScrollbar.css-615afd63.js";import{a as L}from"./UI5Element-427ec721.js";var C;(function(o){o.Center="Center",o.Left="Left",o.Right="Right",o.Stretch="Stretch"})(C||(C={}));const f=C;var $;(function(o){o.Left="Left",o.Right="Right",o.Top="Top",o.Bottom="Bottom"})($||($={}));const n=$;var B;(function(o){o.Center="Center",o.Top="Top",o.Bottom="Bottom",o.Stretch="Stretch"})(B||(B={}));const v=B;class Q extends G{static isValid(t){return typeof t=="string"||t instanceof HTMLElement}static propertyToAttribute(t){return t instanceof HTMLElement?null:t}}let x;const S=300,d=[],P=()=>{d.forEach(o=>{o.instance.reposition()})},z=()=>{document.activeElement.tagName==="IFRAME"&&pt().reverse().forEach(o=>o.instance.close(!1,!1,!0))},tt=()=>{x=setInterval(()=>{P(),z()},S)},et=()=>{clearInterval(x)},ot=()=>{document.body.addEventListener("scroll",P,{capture:!0})},it=()=>{document.body.removeEventListener("scroll",P,{capture:!0})},rt=o=>{o&&o.shadowRoot.addEventListener("scroll",P,{capture:!0})},st=o=>{o&&o.shadowRoot.removeEventListener("scroll",P,{capture:!0})},at=()=>{document.addEventListener("mousedown",H)},nt=()=>{document.removeEventListener("mousedown",H)},H=o=>{const t=K();if(!(t.length===0||!N(t[t.length-1].instance)))for(let i=t.length-1;i!==-1;i--){const r=t[i].instance;if(r.isModal||r.isOpenerClicked(o))return;if(R(o,r.getBoundingClientRect()))break;r.close()}},lt=o=>{const t=dt(o);Y(o,t),d.push({instance:o,parentPopovers:t}),rt(o),d.length===1&&(ot(),at(),tt())},ht=o=>{const t=[o];for(let e=0;e<d.length;e++){const i=d[e].parentPopovers.indexOf(o);d[e].parentPopovers.length>0&&i>-1&&t.push(d[e].instance)}for(let e=t.length-1;e>=0;e--)for(let i=0;i<d.length;i++){let r=-1;t[e]===d[i].instance&&(r=i),r>=0&&(q(d[r].instance),st(d[r].instance),d.splice(r,1)[0].instance.close(!1,!0))}d.length||(it(),nt(),et())},pt=()=>d,dt=o=>{let t=o.parentNode;const e=[];for(;t&&t.parentNode;){for(let i=0;i<d.length;i++)t===d[i].instance&&e.push(t);t=t.parentNode}return e},ct=(o,t,e)=>b`<section style="${M(o.styles.root)}" class="${I(o.classes.root)}" role="${T(o._role)}" aria-modal="${T(o._ariaModal)}" aria-label="${T(o._ariaLabel)}" aria-labelledby="${T(o._ariaLabelledBy)}" @keydown=${o._onkeydown} @focusout=${o._onfocusout} @mouseup=${o._onmouseup} @mousedown=${o._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${o.forwardToLast}></span><span class="ui5-popover-arrow" style="${M(o.styles.arrow)}"></span>${o._displayHeader?ut(o):void 0}<div style="${M(o.styles.content)}" class="${I(o.classes.content)}"  @scroll="${o._scroll}" part="content"><slot></slot></div>${o._displayFooter?gt(o):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${o.forwardToFirst}></span></section> `,ut=(o,t,e)=>b`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${o.header.length?ft():mt(o)}</header>`,ft=(o,t,e)=>b`<slot name="header"></slot>`,mt=(o,t,e)=>b`<h1 class="ui5-popup-header-text">${T(o.headerText)}</h1>`,gt=(o,t,e)=>b`${o.footer.length?wt():void 0}`,wt=(o,t,e)=>b`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`;L("@ui5/webcomponents-theming","sap_fiori_3",async()=>D);L("@ui5/webcomponents","sap_fiori_3",async()=>V);const _t={packageName:"@ui5/webcomponents",fileName:"themes/Popover.css.ts",content:'.ui5-popover-arrow{pointer-events:none;display:block;width:1rem;height:1rem;position:absolute;overflow:hidden}.ui5-popover-arrow:after{content:"";display:block;width:.7rem;height:.7rem;background-color:var(--sapGroup_ContentBackground);box-shadow:var(--sapContent_Shadow3);transform:rotate(-45deg)}:host{max-width:calc(100% - var(--_ui5_popup_viewport_margin)*2)}:host([opened][actual-placement-type=Top]){margin-top:var(--_ui5-popover-margin-bottom)}:host([opened][actual-placement-type=Bottom]){margin-top:var(--_ui5-popover-margin-top)}:host([actual-placement-type=Bottom]) .ui5-popover-arrow{left:calc(50% - .5625rem);top:-.5rem;height:.5625rem}:host([actual-placement-type=Bottom]) .ui5-popover-arrow:after{margin:var(--_ui5_popover_upward_arrow_margin)}:host([actual-placement-type=Left]) .ui5-popover-arrow{top:calc(50% - .5625rem);right:-.5625rem;width:.5625rem}:host([actual-placement-type=Left]) .ui5-popover-arrow:after{margin:var(--_ui5_popover_right_arrow_margin)}:host([actual-placement-type=Top]) .ui5-popover-arrow{left:calc(50% - .5625rem);height:.5625rem;top:100%}:host([actual-placement-type=Top]) .ui5-popover-arrow:after{margin:var(--_ui5_popover_downward_arrow_margin)}:host(:not([actual-placement-type])) .ui5-popover-arrow,:host([actual-placement-type=Right]) .ui5-popover-arrow{left:-.5625rem;top:calc(50% - .5625rem);width:.5625rem;height:1rem}:host(:not([actual-placement-type])) .ui5-popover-arrow:after,:host([actual-placement-type=Right]) .ui5-popover-arrow:after{margin:var(--_ui5_popover_left_arrow_margin)}:host([hide-arrow]) .ui5-popover-arrow{display:none}.ui5-popover-root{min-width:6.25rem}'};var h=globalThis&&globalThis.__decorate||function(o,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var p=o.length-1;p>=0;p--)(a=o[p])&&(s=(r<3?a(s):r>3?a(t,e,s):a(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s},_;const k=8;let l=_=class extends U{static get VIEWPORT_MARGIN(){return 10}constructor(){super()}onAfterRendering(){if(!this.isOpen()&&this.open){let t;if(this.opener instanceof HTMLElement?t=this.opener:typeof this.opener=="string"&&(t=this.getRootNode().getElementById(this.opener)),!t){console.warn("Valid opener id is required.");return}this.showAt(t)}else this.isOpen()&&!this.open&&this.close()}isOpenerClicked(t){const e=t.target;if(e===this._opener)return!0;const i=e;return i.getFocusDomRef&&i.getFocusDomRef()===this._opener?!0:t.composedPath().indexOf(this._opener)>-1}async showAt(t,e=!1){!t||this.opened||(this._opener=t,this._openerRect=t.getBoundingClientRect(),await super._open(e))}_addOpenedPopup(){lt(this)}_removeOpenedPopup(){ht(this)}shouldCloseDueToOverflow(t,e){const r={Right:e.right,Left:e.left,Top:e.top,Bottom:e.bottom},s=X(this._opener);let a=!1,p=!1;if(s.showAt){const u=s.contentDOM.getBoundingClientRect();a=e.top>u.top+u.height,p=e.top+e.height<u.top}return r[t]<0||r[t]+32>s.innerHeight||a||p}shouldCloseDueToNoOpener(t){return t.top===0&&t.bottom===0&&t.left===0&&t.right===0}isOpenerOutsideViewport(t){return t.bottom<0||t.top>window.innerHeight||t.right<0||t.left>window.innerWidth}_resize(){super._resize(),this.opened&&this.reposition()}reposition(){this._show()}_show(){let t;const e=this.getPopoverSize();if(e.width===0||e.height===0)return;this.isOpen()&&(this._openerRect=this._opener.getBoundingClientRect()),this.shouldCloseDueToNoOpener(this._openerRect)&&this.isFocusWithin()?t=this._oldPlacement:t=this.calcPlacement(this._openerRect,e);const i=this.horizontalAlign===f.Stretch;if(this._preventRepositionAndClose||this.isOpenerOutsideViewport(this._openerRect))return this.close();this._oldPlacement=t,this.actualPlacementType=t.placementType;let r=O(this._left,_.VIEWPORT_MARGIN,document.documentElement.clientWidth-e.width-_.VIEWPORT_MARGIN);this.actualPlacementType===n.Right&&(r=Math.max(r,this._left));let s=O(this._top,_.VIEWPORT_MARGIN,document.documentElement.clientHeight-e.height-_.VIEWPORT_MARGIN);this.actualPlacementType===n.Bottom&&(s=Math.max(s,this._top)),this.arrowTranslateX=t.arrow.x,this.arrowTranslateY=t.arrow.y,s=this._adjustForIOSKeyboard(s),Object.assign(this.style,{top:`${s}px`,left:`${r}px`}),super._show(),i&&this._width&&(this.style.width=this._width)}_adjustForIOSKeyboard(t){if(!j())return t;const e=Math.ceil(this.getBoundingClientRect().top);return t+(Number.parseInt(this.style.top||"0")-e)}getPopoverSize(){this.opened||Object.assign(this.style,{display:"block",top:"-10000px",left:"-10000px"});const t=this.getBoundingClientRect(),e=t.width,i=t.height;return{width:e,height:i}}get arrowDOM(){return this.shadowRoot.querySelector(".ui5-popover-arrow")}calcPlacement(t,e){let i=0,r=0;const s=this.allowTargetOverlap,a=document.documentElement.clientWidth,p=document.documentElement.clientHeight;let u=p,m=a;const g=this.getActualPlacementType(t,e);this._preventRepositionAndClose=this.shouldCloseDueToNoOpener(t)||this.shouldCloseDueToOverflow(g,t);const y=g===n.Top||g===n.Bottom;this.horizontalAlign===f.Stretch&&y?(e.width=t.width,this._width=`${t.width}px`):this.verticalAlign===v.Stretch&&!y&&(e.height=t.height);const w=this.hideArrow?0:k;switch(g){case n.Top:i=this.getVerticalLeft(t,e),r=Math.max(t.top-e.height-w,0),s||(u=t.top-w);break;case n.Bottom:i=this.getVerticalLeft(t,e),r=t.bottom+w,s?r=Math.max(Math.min(r,p-e.height),0):u=p-t.bottom-w;break;case n.Left:i=Math.max(t.left-e.width-w,0),r=this.getHorizontalTop(t,e),s||(m=t.left-w);break;case n.Right:i=t.left+t.width+w,r=this.getHorizontalTop(t,e),s?i=Math.max(Math.min(i,a-e.width),0):m=a-t.right-w;break}y?e.width>a||i<0?i=0:i+e.width>a&&(i-=i+e.width-a):e.height>p||r<0?r=0:r+e.height>p&&(r-=r+e.height-p),this._maxHeight=Math.round(u-_.VIEWPORT_MARGIN),this._maxWidth=Math.round(m-_.VIEWPORT_MARGIN),(this._left===void 0||Math.abs(this._left-i)>1.5)&&(this._left=Math.round(i)),(this._top===void 0||Math.abs(this._top-r)>1.5)&&(this._top=Math.round(r));const W=Number.parseInt(window.getComputedStyle(this).getPropertyValue("border-radius"));return{arrow:this.getArrowPosition(t,e,i,r,y,W),top:this._top,left:this._left,placementType:g}}getArrowPosition(t,e,i,r,s,a){let p=this.horizontalAlign===f.Center||this.horizontalAlign===f.Stretch;this.horizontalAlign===f.Right&&i<=t.left&&(p=!0),this.horizontalAlign===f.Left&&i+e.width>=t.left+t.width&&(p=!0);let u=0;s&&p&&(u=t.left+t.width/2-i-e.width/2);let m=0;s||(m=t.top+t.height/2-r-e.height/2);const g=e.height/2-a-k/2;m=O(m,-g,g);const y=e.width/2-a-k/2;return u=O(u,-y,y),{x:Math.round(u),y:Math.round(m)}}fallbackPlacement(t,e,i,r){if(i.left>r.width)return n.Left;if(t-i.right>i.left)return n.Right;if(e-i.bottom>r.height)return n.Bottom;if(e-i.bottom<i.top)return n.Top}getActualPlacementType(t,e){const i=this.placementType;let r=i;const s=document.documentElement.clientWidth,a=document.documentElement.clientHeight;switch(i){case n.Top:t.top<e.height&&t.top<a-t.bottom&&(r=n.Bottom);break;case n.Bottom:a-t.bottom<e.height&&a-t.bottom<t.top&&(r=n.Top);break;case n.Left:t.left<e.width&&(r=this.fallbackPlacement(s,a,t,e)||i);break;case n.Right:s-t.right<e.width&&(r=this.fallbackPlacement(s,a,t,e)||i);break}return r}getVerticalLeft(t,e){let i;switch(this.horizontalAlign){case f.Center:case f.Stretch:i=t.left-(e.width-t.width)/2;break;case f.Left:i=t.left;break;case f.Right:i=t.right-e.width;break}return i}getHorizontalTop(t,e){let i;switch(this.verticalAlign){case v.Center:case v.Stretch:i=t.top-(e.height-t.height)/2;break;case v.Top:i=t.top;break;case v.Bottom:i=t.bottom-e.height;break}return i}get isModal(){return this.modal}get shouldHideBackdrop(){return this.hideBackdrop}get _ariaLabelledBy(){if(!this._ariaLabel&&this._displayHeader)return"ui5-popup-header"}get styles(){return{...super.styles,root:{"max-height":this._maxHeight?`${this._maxHeight}px`:"","max-width":this._maxWidth?`${this._maxWidth}px`:""},arrow:{transform:`translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)`}}}get classes(){const t=super.classes;return t.root["ui5-popover-root"]=!0,t}get _displayHeader(){return!!(this.header.length||this.headerText)}get _displayFooter(){return!0}};h([c()],l.prototype,"headerText",void 0);h([c({type:n,defaultValue:n.Right})],l.prototype,"placementType",void 0);h([c({type:f,defaultValue:f.Center})],l.prototype,"horizontalAlign",void 0);h([c({type:v,defaultValue:v.Center})],l.prototype,"verticalAlign",void 0);h([c({type:Boolean})],l.prototype,"modal",void 0);h([c({type:Boolean})],l.prototype,"hideBackdrop",void 0);h([c({type:Boolean})],l.prototype,"hideArrow",void 0);h([c({type:Boolean})],l.prototype,"allowTargetOverlap",void 0);h([c({validator:Q})],l.prototype,"opener",void 0);h([c({type:Boolean})],l.prototype,"disableScrolling",void 0);h([c({validator:A,defaultValue:0,noAttribute:!0})],l.prototype,"arrowTranslateX",void 0);h([c({validator:A,defaultValue:0,noAttribute:!0})],l.prototype,"arrowTranslateY",void 0);h([c({type:n,defaultValue:n.Right})],l.prototype,"actualPlacementType",void 0);h([c({validator:A,noAttribute:!0})],l.prototype,"_maxHeight",void 0);h([c({validator:A,noAttribute:!0})],l.prototype,"_maxWidth",void 0);h([E({type:HTMLElement})],l.prototype,"header",void 0);h([E({type:HTMLElement})],l.prototype,"footer",void 0);l=_=h([F({tag:"ui5-popover",styles:[J,Z,_t],template:ct})],l);const N=o=>"showAt"in o;l.define();const yt=l,Et=Object.freeze(Object.defineProperty({__proto__:null,default:yt,instanceOfPopover:N},Symbol.toStringTag,{value:"Module"}));export{Q as D,n as P,f as a,v as b,yt as c,Et as d};
//# sourceMappingURL=Popover-907d427e.js.map
