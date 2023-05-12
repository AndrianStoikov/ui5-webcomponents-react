import{a as k,U as L,d as $,p as w}from"./UI5Element-74c2a827.js";import{e as n,l as c,s as v,a as I,b as X,p as r,c as B,d as R}from"./withWebComponent-d61dcbbc.js";import{s as S}from"./slot-76e48863.js";import{e as T,I as x}from"./Icon-a2964213.js";import{R as y}from"./ResizeHandler-0f082c48.js";import{b as P,c as z}from"./Icons-94b91597.js";import{y as M}from"./i18n-defaults-254d6b69.js";import"./employee-78b984a5.js";var b;(function(a){a.Accent1="Accent1",a.Accent2="Accent2",a.Accent3="Accent3",a.Accent4="Accent4",a.Accent5="Accent5",a.Accent6="Accent6",a.Accent7="Accent7",a.Accent8="Accent8",a.Accent9="Accent9",a.Accent10="Accent10",a.Placeholder="Placeholder"})(b||(b={}));const _=b;var f;(function(a){a.Circle="Circle",a.Square="Square"})(f||(f={}));const A=f;var g;(function(a){a.XS="XS",a.S="S",a.M="M",a.L="L",a.XL="XL"})(g||(g={}));const p=g;function H(a,t,e){return n`<div class="ui5-avatar-root" tabindex="${c(this.tabindex)}" data-sap-focus-ref @keyup=${this._onkeyup} @keydown=${this._onkeydown} @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} role="${c(this._role)}" aria-haspopup="${c(this._ariaHasPopup)}">${this.hasImage?q.call(this,a,t,e):E.call(this,a,t,e)}<slot name="badge"></slot></div>`}function q(a,t,e){return n`<slot></slot>`}function E(a,t,e){return n`${this.icon?D.call(this,a,t,e):void 0}${this.initials?N.call(this,a,t,e):void 0}`}function D(a,t,e){return e?n`<${v("ui5-icon",t,e)} class="ui5-avatar-icon" name="${c(this.icon)}" accessible-name="${c(this.accessibleNameText)}"></${v("ui5-icon",t,e)}>`:n`<ui5-icon class="ui5-avatar-icon" name="${c(this.icon)}" accessible-name="${c(this.accessibleNameText)}"></ui5-icon>`}function N(a,t,e){return e?n`<span class="ui5-avatar-initials">${c(this.validInitials)}</span><${v("ui5-icon",t,e)} class="ui5-avatar-icon ui5-avatar-icon-fallback" name="employee" accessible-name="${c(this.accessibleNameText)}"></${v("ui5-icon",t,e)}>`:n`<span class="ui5-avatar-initials">${c(this.validInitials)}</span><ui5-icon class="ui5-avatar-icon ui5-avatar-icon-fallback" name="employee" accessible-name="${c(this.accessibleNameText)}"></ui5-icon>`}k("@ui5/webcomponents-theming","sap_fiori_3",async()=>I);k("@ui5/webcomponents","sap_fiori_3",async()=>X);const O={packageName:"@ui5/webcomponents",fileName:"themes/Avatar.css",content:':host(:not([hidden])){display:inline-block;box-sizing:border-box;position:relative}:host(:not([hidden]).ui5_hovered){opacity:.7}:host([focused]){outline:var(--_ui5_avatar_outline);outline-offset:var(--_ui5_avatar_focus_offset)}:host([interactive]){cursor:pointer}:host{height:3rem;width:3rem;border-radius:50%;border:var(--ui5-avatar-initials-border);outline:none;color:var(--ui5-avatar-initials-color)}.ui5-avatar-root{display:flex;align-items:center;justify-content:center;outline:none;height:100%;width:100%}:host([_size=XS]),:host([size=XS]){height:2rem;width:2rem;min-height:2rem;min-width:2rem;font-size:var(--_ui5_avatar_fontsize_XS)}:host([_size=S]),:host([size=S]){min-height:3rem;min-width:3rem;font-size:var(--_ui5_avatar_fontsize_S)}:host([_size=M]),:host([size=M]){min-height:4rem;min-width:4rem;font-size:var(--_ui5_avatar_fontsize_M)}:host([_size=L]),:host([size=L]){min-height:5rem;min-width:5rem;font-size:var(--_ui5_avatar_fontsize_L)}:host([_size=XL]),:host([size=XL]){min-height:7rem;min-width:7rem;font-size:var(--_ui5_avatar_fontsize_XL)}:host .ui5-avatar-icon{height:var(--_ui5_avatar_fontsize_S);width:var(--_ui5_avatar_fontsize_S);color:inherit}:host([_size=XS]) .ui5-avatar-icon,:host([size=XS]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_XS);width:var(--_ui5_avatar_icon_XS)}:host([_size=S]) .ui5-avatar-icon,:host([size=S]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_S);width:var(--_ui5_avatar_icon_S)}:host([_size=M]) .ui5-avatar-icon,:host([size=M]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_M);width:var(--_ui5_avatar_icon_M)}:host([_size=L]) .ui5-avatar-icon,:host([size=L]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_L);width:var(--_ui5_avatar_icon_L)}:host([_size=XL]) .ui5-avatar-icon,:host([size=XL]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_XL);width:var(--_ui5_avatar_icon_XL)}::slotted(*){border-radius:50%;width:100%;height:100%;pointer-events:none}:host([shape=Square]){border-radius:var(--ui5-avatar-border-radius)}:host([shape=Square]) ::slotted(*){border-radius:calc(var(--ui5-avatar-border-radius) - var(--ui5-avatar-border-radius-img-deduction))}:host(:not([_has-image])),:host(:not([color-scheme])),:host([_color-scheme=Accent6]),:host([ui5-avatar][color-scheme=Accent6]){background-color:var(--ui5-avatar-accent6);color:var(--ui5-avatar-accent6-color);border-color:var(--ui5-avatar-accent6-border-color)}:host([_color-scheme=Accent1]),:host([ui5-avatar][color-scheme=Accent1]){background-color:var(--ui5-avatar-accent1);color:var(--ui5-avatar-accent1-color);border-color:var(--ui5-avatar-accent1-border-color)}:host([_color-scheme=Accent2]),:host([ui5-avatar][color-scheme=Accent2]){background-color:var(--ui5-avatar-accent2);color:var(--ui5-avatar-accent2-color);border-color:var(--ui5-avatar-accent2-border-color)}:host([_color-scheme=Accent3]),:host([ui5-avatar][color-scheme=Accent3]){background-color:var(--ui5-avatar-accent3);color:var(--ui5-avatar-accent3-color);border-color:var(--ui5-avatar-accent3-border-color)}:host([_color-scheme=Accent4]),:host([ui5-avatar][color-scheme=Accent4]){background-color:var(--ui5-avatar-accent4);color:var(--ui5-avatar-accent4-color);border-color:var(--ui5-avatar-accent4-border-color)}:host([_color-scheme=Accent5]),:host([ui5-avatar][color-scheme=Accent5]){background-color:var(--ui5-avatar-accent5);color:var(--ui5-avatar-accent5-color);border-color:var(--ui5-avatar-accent5-border-color)}:host([_color-scheme=Accent7]),:host([ui5-avatar][color-scheme=Accent7]){background-color:var(--ui5-avatar-accent7);color:var(--ui5-avatar-accent7-color);border-color:var(--ui5-avatar-accent7-border-color)}:host([_color-scheme=Accent8]),:host([ui5-avatar][color-scheme=Accent8]){background-color:var(--ui5-avatar-accent8);color:var(--ui5-avatar-accent8-color);border-color:var(--ui5-avatar-accent8-border-color)}:host([_color-scheme=Accent9]),:host([ui5-avatar][color-scheme=Accent9]){background-color:var(--ui5-avatar-accent9);color:var(--ui5-avatar-accent9-color);border-color:var(--ui5-avatar-accent9-border-color)}:host([_color-scheme=Accent10]),:host([ui5-avatar][color-scheme=Accent10]){background-color:var(--ui5-avatar-accent10);color:var(--ui5-avatar-accent10-color);border-color:var(--ui5-avatar-accent10-border-color)}:host([_color-scheme=Placeholder]),:host([ui5-avatar][color-scheme=Placeholder]){background-color:var(--ui5-avatar-placeholder);color:var(--ui5-avatar-placeholder-color);border-color:var(--ui5-avatar-placeholder-border-color)}:host([_has-image]){background-color:transparent;vertical-align:middle}.ui5-avatar-initials{color:inherit}.ui5-avatar-icon~.ui5-avatar-icon-fallback,.ui5-avatar-icon~.ui5-avatar-initials{display:none}.ui5-avatar-initials:not(.ui5-avatar-initials-hidden)+.ui5-avatar-icon-fallback{display:none}.ui5-avatar-initials-hidden{position:absolute;visibility:hidden;z-index:0;pointer-events:none}::slotted([slot=badge]){position:absolute;bottom:0;right:0;width:1.125rem;height:1.125rem;background:var(--sapButton_Emphasized_Background);border:var(--sapButton_Emphasized_Background);border-radius:1rem;color:var(--sapContent_BadgeTextColor);justify-content:center;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize)}::slotted([ui5-badge][slot=badge]){padding:.1875rem}:host([_size=L]) ::slotted([slot=badge]),:host([size=L]) ::slotted([slot=badge]){width:1.25rem;height:1.25rem}:host([_size=XL]) ::slotted([slot=badge]),:host([size=XL]) ::slotted([slot=badge]){padding:.375rem;width:1.75rem;height:1.75rem}:host([shape=Square]) ::slotted([slot=badge]){bottom:-.125rem;right:-.125rem}:host([_size=L][shape=Square]) ::slotted([slot=badge]),:host([size=L][shape=Square]) ::slotted([slot=badge]){bottom:-.1875rem;right:-.1875rem}:host([_size=XL][shape=Square]) ::slotted([slot=badge]),:host([size=XL][shape=Square]) ::slotted([slot=badge]){bottom:-.25rem;right:-.25rem}'};var o=globalThis&&globalThis.__decorate||function(a,t,e,l){var h=arguments.length,s=h<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,e):l,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,t,e,l);else for(var m=a.length-1;m>=0;m--)(u=a[m])&&(s=(h<3?u(s):h>3?u(t,e,s):u(t,e))||s);return h>3&&s&&Object.defineProperty(t,e,s),s},d;let i=d=class extends L{constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}static async onDefine(){d.i18nBundle=await $("@ui5/webcomponents")}get tabindex(){return this._tabIndex||(this.interactive?"0":"-1")}get _effectiveSize(){return this.getAttribute("size")||this._size}get _effectiveBackgroundColor(){return this.getAttribute("color-scheme")||this._colorScheme}get _role(){return this.interactive?"button":void 0}get _ariaHasPopup(){return this._getAriaHasPopup()}get validInitials(){const t=/^[a-zA-Zà-üÀ-Ü]{1,3}$/;return this.initials&&t.test(this.initials)?this.initials:null}get accessibleNameText(){return this.accessibleName?this.accessibleName:d.i18nBundle.getText(M)||void 0}get hasImage(){return this._hasImage=!!this.image.length,this._hasImage}get initialsContainer(){return this.getDomRef().querySelector(".ui5-avatar-initials")}onBeforeRendering(){this._onclick=this.interactive?this._onClickHandler.bind(this):void 0}async onAfterRendering(){await w(),this.initials&&!this.icon&&this._checkInitials()}onEnterDOM(){this.initialsContainer&&y.register(this.initialsContainer,this._handleResizeBound)}onExitDOM(){this.initialsContainer&&y.deregister(this.initialsContainer,this._handleResizeBound)}handleResize(){this.initials&&!this.icon&&this._checkInitials()}_checkInitials(){const t=this.getDomRef(),e=t.querySelector(".ui5-avatar-initials");if(!this.validInitials){e.classList.add("ui5-avatar-initials-hidden");return}e&&e.classList.remove("ui5-avatar-initials-hidden"),this.initials&&this.initials.length===3&&e&&e.scrollWidth>t.scrollWidth&&e.classList.add("ui5-avatar-initials-hidden")}_onClickHandler(t){t.stopPropagation(),this.fireEvent("click")}_onkeydown(t){this.interactive&&(P(t)&&this.fireEvent("click"),z(t)&&t.preventDefault())}_onkeyup(t){this.interactive&&!t.shiftKey&&z(t)&&this.fireEvent("click")}_onfocusout(){this.focused=!1}_onfocusin(){this.interactive&&(this.focused=!0)}_getAriaHasPopup(){if(!(!this.interactive||this.ariaHaspopup===""))return this.ariaHaspopup}};o([r({type:Boolean})],i.prototype,"interactive",void 0);o([r({type:Boolean})],i.prototype,"focused",void 0);o([r()],i.prototype,"icon",void 0);o([r()],i.prototype,"initials",void 0);o([r({type:A,defaultValue:A.Circle})],i.prototype,"shape",void 0);o([r({type:p,defaultValue:p.S})],i.prototype,"size",void 0);o([r({type:p,defaultValue:p.S})],i.prototype,"_size",void 0);o([r({type:_,defaultValue:_.Accent6})],i.prototype,"colorScheme",void 0);o([r({type:_,defaultValue:_.Accent6})],i.prototype,"_colorScheme",void 0);o([r()],i.prototype,"accessibleName",void 0);o([r()],i.prototype,"ariaHaspopup",void 0);o([r({noAttribute:!0})],i.prototype,"_tabIndex",void 0);o([r({type:Boolean})],i.prototype,"_hasImage",void 0);o([S({type:HTMLElement,default:!0})],i.prototype,"image",void 0);o([S()],i.prototype,"badge",void 0);i=d=o([B({tag:"ui5-avatar",languageAware:!0,renderer:R,styles:O,template:H,dependencies:[x]}),T("click")],i);i.define();const V=i,Q=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{V as A,p as a,_ as b,A as c,Q as d};
//# sourceMappingURL=Avatar-99b7e1ff.js.map
