import{e as t,s as p,l as i,d as y,a as w,p as b,c as D}from"./withWebComponent-34dd487e.js";import{o as g,c as l}from"./class-map-60f59e95.js";import{r as $,d as O}from"./UI5Element-386cb3f6.js";import{f as T}from"./Integer-5fa4beea.js";import{R as k}from"./MarkedEvents-0e37da6f.js";import{s as m}from"./style-map-63946e4f.js";import{c as _}from"./Popover-ff8f156e.js";import P from"./Dialog-30b3aaf0.js";import{B}from"./Button-981a9381.js";import{a as E}from"./Title-256f7c0a.js";import"./decline-48ecb430.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime-670450c2.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-dee23f38.js";import"./FocusableElements-13161f05.js";import"./Keys-50a1cb5a.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./ValueState-2c5e5904.js";import"./Icons-03f19c25.js";import"./WrappingType-b81e595a.js";const R=(e,o,s)=>t`${e._isPhone?H(e,o,s):A(e)}`,H=(e,o,s)=>s?t`<${p("ui5-dialog",o,s)} accessible-name=${i(e.accessibleName)} accessible-name-ref=${i(e.accessibleNameRef)} stretch _disable-initial-focus @ui5-before-open="${i(e._beforeDialogOpen)}" @ui5-after-open="${i(e._propagateDialogEvent)}" @ui5-before-close="${i(e._propagateDialogEvent)}" @ui5-after-close="${i(e._afterDialogClose)}" exportparts="content, header, footer">${e._hideHeader?void 0:v(e,o,s)}<slot></slot><slot slot="footer" name="footer"></slot></${p("ui5-dialog",o,s)}>`:t`<ui5-dialog accessible-name=${i(e.accessibleName)} accessible-name-ref=${i(e.accessibleNameRef)} stretch _disable-initial-focus @ui5-before-open="${i(e._beforeDialogOpen)}" @ui5-after-open="${i(e._propagateDialogEvent)}" @ui5-before-close="${i(e._propagateDialogEvent)}" @ui5-after-close="${i(e._afterDialogClose)}" exportparts="content, header, footer">${e._hideHeader?void 0:v(e,o,s)}<slot></slot><slot slot="footer" name="footer"></slot></ui5-dialog>`,v=(e,o,s)=>t`${e.header.length?L():N(e,o,s)}`,L=(e,o,s)=>t`<slot slot="header" name="header"></slot>`,N=(e,o,s)=>t`<div class="${g(e.classes.header)}" slot="header">${e.headerText?C(e,o,s):void 0}${e._hideCloseButton?void 0:M(e,o,s)}</div>`,C=(e,o,s)=>s?t`<${p("ui5-title",o,s)} level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${i(e.headerText)}</${p("ui5-title",o,s)}>`:t`<ui5-title level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${i(e.headerText)}</ui5-title>`,M=(e,o,s)=>s?t`<${p("ui5-button",o,s)} icon="decline" design="Transparent" aria-label="${i(e._closeDialogAriaLabel)}" @click="${e.close}"></${p("ui5-button",o,s)}>`:t`<ui5-button icon="decline" design="Transparent" aria-label="${i(e._closeDialogAriaLabel)}" @click="${e.close}"></ui5-button>`,A=(e,o,s)=>t`<section style="${m(e.styles.root)}" class="${g(e.classes.root)}" role="${i(e._role)}" aria-modal="${i(e._ariaModal)}" aria-label="${i(e._ariaLabel)}" aria-labelledby="${i(e._ariaLabelledBy)}" @keydown=${e._onkeydown} @focusout=${e._onfocusout} @mouseup=${e._onmouseup} @mousedown=${e._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${e.forwardToLast}></span><span class="ui5-popover-arrow" style="${m(e.styles.arrow)}"></span>${e._displayHeader?j(e):void 0}<div style="${m(e.styles.content)}" class="${g(e.classes.content)}"  @scroll="${e._scroll}" part="content"><slot></slot></div>${e._displayFooter?V(e):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${e.forwardToFirst}></span></section>`,j=(e,o,s)=>t`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${e.header.length?I():S(e)}</header>`,I=(e,o,s)=>t`<slot name="header"></slot>`,S=(e,o,s)=>t`<h1 class="ui5-popup-header-text">${i(e.headerText)}</h1>`,V=(e,o,s)=>t`${e.footer.length?Z():void 0}`,Z=(e,o,s)=>t`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`;$("@ui5/webcomponents-theming","sap_fiori_3",()=>y);$("@ui5/webcomponents","sap_fiori_3",()=>w);const q={packageName:"@ui5/webcomponents",fileName:"themes/ResponsivePopover.css",content:":host{--_ui5_input_width:100%;min-width:6.25rem;min-height:2rem}:host([opened]){display:inline-block}.ui5-responsive-popover-header{height:var(--_ui5-responsive_popover_header_height);display:flex;justify-content:space-between;align-items:center;width:100%}.ui5-responsive-popover-header-text{width:calc(100% - var(--_ui5_button_base_min_width))}.ui5-responsive-popover-header-no-title{justify-content:flex-end}"};var h=globalThis&&globalThis.__decorate||function(e,o,s,a){var d=arguments.length,r=d<3?o:a===null?a=Object.getOwnPropertyDescriptor(o,s):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,s,a);else for(var f=e.length-1;f>=0;f--)(u=e[f])&&(r=(d<3?u(r):d>3?u(o,s,r):u(o,s))||r);return d>3&&r&&Object.defineProperty(o,s,r),r},c;let n=c=class extends _{constructor(){super()}static get styles(){return[_.styles,q]}get classes(){const o=super.classes;return o.header={"ui5-responsive-popover-header":!0,"ui5-responsive-popover-header-no-title":!this.headerText},o}static get template(){return R}static get dependencies(){return[..._.dependencies,B,P,E]}async showAt(o,s=!1){if(!l())await super.showAt(o,s);else{this.style.display="contents";const a=T();if(!a)return;this.style.zIndex=a.toString(),await this._dialog.show(s)}}close(o=!1,s=!1,a=!1){l()?this._dialog.close(o,s,a):super.close(o,s,a)}toggle(o){if(this.isOpen())return this.close();this.showAt(o)}isOpen(){return l()&&this._dialog?this._dialog.isOpen():super.isOpen()}get _dialog(){return this.shadowRoot.querySelector("[ui5-dialog]")}get contentDOM(){return l()?this._dialog.contentDOM:super.contentDOM}get _isPhone(){return l()}get _displayHeader(){return(l()||!this.contentOnlyOnDesktop)&&super._displayHeader}get _displayFooter(){return l()||!this.contentOnlyOnDesktop}get _closeDialogAriaLabel(){return c.i18nBundle.getText(k)}_beforeDialogOpen(o){this.open=!0,this.opened=!0,this._propagateDialogEvent(o)}_afterDialogClose(o){this.open=!1,this.opened=!1,this._propagateDialogEvent(o)}_propagateDialogEvent(o){const s=o.type.replace("ui5-","");this.fireEvent(s,o.detail)}get isModal(){return l()?this._dialog.isModal:super.isModal}static async onDefine(){c.i18nBundle=await O("@ui5/webcomponents")}};h([b({type:Boolean})],n.prototype,"contentOnlyOnDesktop",void 0);h([b({type:Boolean})],n.prototype,"_hideHeader",void 0);h([b({type:Boolean})],n.prototype,"_hideCloseButton",void 0);n=c=h([D("ui5-responsive-popover")],n);n.define();const _e=n;export{_e as default};
//# sourceMappingURL=ResponsivePopover-f9a06272.js.map
