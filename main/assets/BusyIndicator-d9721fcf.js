import{a as p,U as _,d as v}from"./UI5Element-1225b968.js";import{e as n,l as s,s as y,a as g,b as w,p as u,c as x,d as I}from"./withWebComponent-d61dcbbc.js";import{k as T}from"./Icons-524f4c51.js";import{I as B}from"./Integer-f7f172c9.js";import z from"./Label-326b72d8.js";import{o as $}from"./class-map-519e9c6d.js";import{t as k}from"./i18n-defaults-254d6b69.js";var b;(function(e){e.Small="Small",e.Medium="Medium",e.Large="Large"})(b||(b={}));const f=b;function E(e,i,t){return n`<div class="${$(this.classes.root)}">${this._isBusy?L.call(this,e,i,t):void 0}<slot></slot>${this._isBusy?S.call(this,e,i,t):void 0}</div>`}function L(e,i,t){return n`<div class="ui5-busy-indicator-busy-area" title="${s(this.ariaTitle)}" tabindex="0" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Busy" aria-labelledby="${s(this.labelId)}" data-sap-focus-ref><div class="ui5-busy-indicator-circles-wrapper"><div class="ui5-busy-indicator-circle circle-animation-0"></div><div class="ui5-busy-indicator-circle circle-animation-1"></div><div class="ui5-busy-indicator-circle circle-animation-2"></div></div>${this.text?M.call(this,e,i,t):void 0}</div>`}function M(e,i,t){return t?n`<${y("ui5-label",i,t)} id="${s(this._id)}-label" class="ui5-busy-indicator-text">${s(this.text)}</${y("ui5-label",i,t)}>`:n`<ui5-label id="${s(this._id)}-label" class="ui5-busy-indicator-text">${s(this.text)}</ui5-label>`}function S(e,i,t){return n`<span data-ui5-focus-redirect tabindex="0" @focusin="${this._redirectFocus}"></span>`}p("@ui5/webcomponents-theming","sap_fiori_3",async()=>g);p("@ui5/webcomponents","sap_fiori_3",async()=>w);const D={packageName:"@ui5/webcomponents",fileName:"themes/BusyIndicator.css",content:':host(:not([hidden])){display:inline-block}:host([_is-busy]){color:var(--_ui5_busy_indicator_color)}:host([size=Small]) .ui5-busy-indicator-root{min-width:1.5rem;min-height:.5rem}:host([size=Small][text]:not([text=""])) .ui5-busy-indicator-root{min-height:1.75rem}:host([size=Small]) .ui5-busy-indicator-circle{width:.5rem;height:.5rem}:host(:not([size])) .ui5-busy-indicator-root,:host([size=Medium]) .ui5-busy-indicator-root{min-width:3rem;min-height:1rem}:host(:not([size])[text]:not([text=""])) .ui5-busy-indicator-root,:host([size=Medium][text]:not([text=""])) .ui5-busy-indicator-root{min-height:2.25rem}:host(:not([size])) .ui5-busy-indicator-circle,:host([size=Medium]) .ui5-busy-indicator-circle{width:1rem;height:1rem}:host([size=Large]) .ui5-busy-indicator-root{min-width:6rem;min-height:2rem}:host([size=Large][text]:not([text=""])) .ui5-busy-indicator-root{min-height:3.25rem}:host([size=Large]) .ui5-busy-indicator-circle{width:2rem;height:2rem}.ui5-busy-indicator-root{display:flex;justify-content:center;align-items:center;position:relative;background-color:inherit;height:inherit}.ui5-busy-indicator-busy-area{position:absolute;z-index:99;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;background-color:inherit;flex-direction:column}.ui5-busy-indicator-busy-area:focus-visible{outline:var(--_ui5_busy_indicator_focus_outline);outline-offset:-2px;border-radius:var(--_ui5_busy_indicator_focus_border_radius)}.ui5-busy-indicator-circles-wrapper{line-height:0}.ui5-busy-indicator-circle{display:inline-block;background-color:currentColor;border-radius:50%}.ui5-busy-indicator-circle:before{content:"";width:100%;height:100%;border-radius:100%}.circle-animation-0{animation:grow 1.6s cubic-bezier(.32,.06,.85,1.11) infinite}.circle-animation-1{animation:grow 1.6s cubic-bezier(.32,.06,.85,1.11) infinite;animation-delay:.2s}.circle-animation-2{animation:grow 1.6s cubic-bezier(.32,.06,.85,1.11) infinite;animation-delay:.4s}.ui5-busy-indicator-text{width:100%;margin-top:.25rem;text-align:center}@keyframes grow{0%,50%,to{-webkit-transform:scale(.5);-moz-transform:scale(.5);transform:scale(.5)}25%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}}'};var a=globalThis&&globalThis.__decorate||function(e,i,t,c){var l=arguments.length,r=l<3?i:c===null?c=Object.getOwnPropertyDescriptor(i,t):c,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,i,t,c);else for(var m=e.length-1;m>=0;m--)(d=e[m])&&(r=(l<3?d(r):l>3?d(i,t,r):d(i,t))||r);return l>3&&r&&Object.defineProperty(i,t,r),r},h;let o=h=class extends _{constructor(){super(),this._keydownHandler=this._handleKeydown.bind(this),this._preventEventHandler=this._preventEvent.bind(this)}onEnterDOM(){this.addEventListener("keydown",this._keydownHandler,{capture:!0}),this.addEventListener("keyup",this._preventEventHandler,{capture:!0})}onExitDOM(){this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this.removeEventListener("keydown",this._keydownHandler,!0),this.removeEventListener("keyup",this._preventEventHandler,!0)}static async onDefine(){h.i18nBundle=await v("@ui5/webcomponents")}get ariaTitle(){return h.i18nBundle.getText(k)}get labelId(){return this.text?`${this._id}-label`:void 0}get classes(){return{root:{"ui5-busy-indicator-root":!0}}}onBeforeRendering(){this.active?!this._isBusy&&!this._busyTimeoutId&&(this._busyTimeoutId=setTimeout(()=>{delete this._busyTimeoutId,this._isBusy=!0},Math.max(0,this.delay))):(this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this._isBusy=!1)}_handleKeydown(i){this._isBusy&&(i.stopImmediatePropagation(),T(i)&&(this.focusForward=!0,this.shadowRoot.querySelector("[data-ui5-focus-redirect]").focus(),this.focusForward=!1))}_preventEvent(i){this._isBusy&&i.stopImmediatePropagation()}_redirectFocus(i){this.focusForward||(i.preventDefault(),this.shadowRoot.querySelector(".ui5-busy-indicator-busy-area").focus())}};a([u()],o.prototype,"text",void 0);a([u({type:f,defaultValue:f.Medium})],o.prototype,"size",void 0);a([u({type:Boolean})],o.prototype,"active",void 0);a([u({validator:B,defaultValue:1e3})],o.prototype,"delay",void 0);a([u({type:Boolean})],o.prototype,"_isBusy",void 0);o=h=a([x({tag:"ui5-busy-indicator",languageAware:!0,styles:D,renderer:I,template:E,dependencies:[z]})],o);o.define();const O=o,A=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));export{O as B,f as a,A as b};
//# sourceMappingURL=BusyIndicator-d9721fcf.js.map
