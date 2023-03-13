import{a as k,U as W,d as j}from"./UI5Element-427ec721.js";import{e as d,l,f as a,s as L,a as H,p as f,c as U,b as Z}from"./withWebComponent-e4481254.js";import{s as B}from"./slot-634e3e91.js";import{e as y,U as q,W as F,X as J,Y as X,Z as Y,_ as G}from"./i18n-defaults-da1c0a37.js";import{R as S}from"./ResizeHandler-1fa8a094.js";import{I as Q}from"./ItemNavigation-18222ac6.js";import{S as ee}from"./ScrollEnablement-4353003c.js";import{I as V}from"./Integer-f7f172c9.js";import{B as te,c as oe,I as ne,J as ie,K as se,x as re,y as w,v as b,w as le,s as ae,t as $,q as de,r as C,L as pe,M as E,h as ce,j as I,D as he,E as D,m as ue,n as x,k as me,l as z}from"./Keys-3acbae73.js";import{c as T}from"./Device-208919c6.js";import{V as m}from"./ValueState-2c5e5904.js";import ve from"./ResponsivePopover-d8f47bac.js";import{L as fe}from"./ListItemBase-eee2ba1b.js";import{a as ge}from"./Title-b986a4bd.js";import{B as _e}from"./Button-b7bbfa18.js";import ke from"./StandardListItem-414a5173.js";import{o as _}from"./class-map-5d8e4b2b.js";import{c as g}from"./Icon-a9b28f0c.js";import{s as v}from"./style-map-77d201d2.js";import{s as Te}from"./ResponsivePopoverCommon.css-187e38b6.js";import{s as ye}from"./ValueStateMessage.css-37773c69.js";import{s as Se}from"./Suggestions.css-faab6178.js";const we=(n,e,t)=>d`<div class="${_(n.classes.wrapper)}"><span id="${l(n._id)}-hiddenText" class="ui5-hidden-text">${l(n.tokenizerLabel)}</span><div class="${_(n.classes.content)}" @ui5-delete="${l(n._delete)}" @click="${n._click}" @mousedown="${n._onmousedown}" @keydown="${n._onkeydown}" role="listbox" aria-labelledby="${l(n._id)}-hiddenText">${g(n.tokens,(o,i)=>o._id||i,(o,i)=>be(o))}</div>${n.showNMore?$e(n):void 0}</div>`,be=(n,e,t,o,i)=>d`<slot name="${l(n._individualSlot)}"></slot>`,$e=(n,e,t)=>d`<span @click="${n._openOverflowPopover}" class="ui5-tokenizer-more-text" part="n-more-text">${l(n._nMoreText)}</span>`,Ce=(n,e,t)=>t?d`<${a("ui5-responsive-popover",e,t)} tokenizer-popover="true" style=${v(n.styles.popover)} ?content-only-on-desktop="${n.hasValueState}" hide-arrow placement-type="Bottom" horizontal-align="Left"><div slot="header" class="ui5-responsive-popover-header" style="${v(n.styles.popoverHeader)}">${n._isPhone?M(n,e,t):void 0}${n.hasValueState?void 0:N(n,e,t)}</div><${a("ui5-list",e,t)} class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${l(n.itemDelete)}>${g(n._tokens,(o,i)=>o._id||i,(o,i)=>O(o,i,n,e,t))}</${a("ui5-list",e,t)}>${n._isPhone?P(n,e,t):void 0}</${a("ui5-responsive-popover",e,t)}>`:d`<ui5-responsive-popover tokenizer-popover="true" style=${v(n.styles.popover)} ?content-only-on-desktop="${n.hasValueState}" hide-arrow placement-type="Bottom" horizontal-align="Left"><div slot="header" class="ui5-responsive-popover-header" style="${v(n.styles.popoverHeader)}">${n._isPhone?M(n,e,t):void 0}${n.hasValueState?void 0:N(n,e,t)}</div><ui5-list class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${l(n.itemDelete)}>${g(n._tokens,(o,i)=>o._id||i,(o,i)=>O(o,i,n,e,t))}</ui5-list>${n._isPhone?P(n,e,t):void 0}</ui5-responsive-popover>`,M=(n,e,t)=>t?d`<div class="row" style="${v(n.styles.popoverHeaderTitle)}"><${a("ui5-title",e,t)} level="H5" class="ui5-responsive-popover-header-text">${l(n.morePopoverTitle)}</${a("ui5-title",e,t)}><${a("ui5-button",e,t)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${n.closeMorePopover}"></${a("ui5-button",e,t)}></div>`:d`<div class="row" style="${v(n.styles.popoverHeaderTitle)}"><ui5-title level="H5" class="ui5-responsive-popover-header-text">${l(n.morePopoverTitle)}</ui5-title><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${n.closeMorePopover}"></ui5-button></div>`,N=(n,e,t)=>t?d`<div class="${_(n.classes.popoverValueState)}" style="${v(n.styles.popoverValueStateMessage)}"><${a("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${l(n._valueStateMessageIcon)}"></${a("ui5-icon",e,t)}>${g(n.valueStateMessageText,(o,i)=>o._id||i,(o,i)=>R(o))}</div>`:d`<div class="${_(n.classes.popoverValueState)}" style="${v(n.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${l(n._valueStateMessageIcon)}"></ui5-icon>${g(n.valueStateMessageText,(o,i)=>o._id||i,(o,i)=>R(o))}</div>`,R=(n,e,t,o,i)=>d`${l(n)}`,O=(n,e,t,o,i)=>i?d`<${a("ui5-li",o,i)} .tokenRef=${l(n)}>${l(n.text)}</${a("ui5-li",o,i)}>`:d`<ui5-li .tokenRef=${l(n)}>${l(n.text)}</ui5-li>`,P=(n,e,t)=>t?d`<div slot="footer" class="ui5-responsive-popover-footer"><${a("ui5-button",e,t)} design="Transparent" @click="${n.closeMorePopover}">OK</${a("ui5-button",e,t)}></div>`:d`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${n.closeMorePopover}">OK</ui5-button></div>`;k("@ui5/webcomponents-theming","sap_fiori_3",async()=>L);k("@ui5/webcomponents","sap_fiori_3",async()=>H);const Ee={packageName:"@ui5/webcomponents",fileName:"themes/Tokenizer.css.ts",content:'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{display:inline-block;box-sizing:border-box;border:1px solid #000;height:2.25rem}.ui5-tokenizer-root{height:100%;display:flex;align-items:center;overflow-x:scroll;box-sizing:border-box;font-family:"72override",var(--sapFontFamily)}.ui5-tokenizer-no-padding{padding:0}.ui5-tokenizer-root.ui5-tokenizer-nmore--wrapper{overflow:hidden}.ui5-tokenizer--token--wrapper{display:inline-flex;align-items:center;box-sizing:border-box;height:100%}:host([expanded]) .ui5-tokenizer--content{display:inline-block;white-space:nowrap}.ui5-tokenizer--content{display:flex;flex-wrap:nowrap;align-items:center;overflow:hidden;padding-inline-start:var(--_ui5_tokenizer_padding)}.ui5-tokenizer-more-text{display:inline-block;margin-inline-start:.25rem;cursor:pointer;white-space:nowrap;font-size:var(--sapFontSize);font-weight:400;color:var(--_ui5_tokenizer_n_more_text_color)}:host([expanded]) .ui5-tokenizer--content{overflow:hidden;justify-content:flex-end}'};k("@ui5/webcomponents-theming","sap_fiori_3",async()=>L);k("@ui5/webcomponents","sap_fiori_3",async()=>H);const Ie={packageName:"@ui5/webcomponents",fileName:"themes/TokenizerPopover.css.ts",content:"[ui5-responsive-popover]::part(content),[ui5-responsive-popover]::part(header){padding:0}"};var h=globalThis&&globalThis.__decorate||function(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var p=n.length-1;p>=0;p--)(r=n[p])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},u,A;(function(n){n.cut="cut",n.copy="copy"})(A||(A={}));let c=u=class extends W{_handleResize(){this._nMoreCount=this.overflownTokens.length}constructor(){super(),this._resizeHandler=this._handleResize.bind(this),this._itemNav=new Q(this,{currentIndex:-1,getItemsCallback:this._getVisibleTokens.bind(this)}),this._scrollEnablement=new ee(this)}onBeforeRendering(){this._nMoreCount=this.overflownTokens.length}onEnterDOM(){S.register(this.contentDom,this._resizeHandler)}onExitDOM(){S.deregister(this.contentDom,this._resizeHandler)}async _openOverflowPopover(){this.showPopover&&(await this.getPopover()).showAt(this.morePopoverOpener||this),this.fireEvent("show-more-items-press")}_getTokens(){return this.getSlottedNodes("tokens")}get _tokens(){return this.getSlottedNodes("tokens")}get showPopover(){return!!Object.keys(this.morePopoverOpener).length}_getVisibleTokens(){return this.disabled?[]:this._tokens.filter((e,t)=>t<this._tokens.length-this._nMoreCount)}async onAfterRendering(){this.showPopover&&!this._getTokens().length&&(await this.getPopover()).close(),this._scrollEnablement.scrollContainer=this.expanded||!this.narrowContentDom?this.expandedContentDom:this.narrowContentDom,this.expanded&&(this._expandedScrollWidth=this.expandedContentDom.scrollWidth,this.scrollToEnd()),this.expanded||this.scrollToStart()}_delete(e){const t=e.target;if(!e.detail){this._tokenClickDelete(e,t);return}this._selectedTokens.length?this._selectedTokens.forEach(o=>this.deleteToken(o,e.detail.backSpace)):this.deleteToken(t,e.detail.backSpace)}_tokenClickDelete(e,t){const o=this._getVisibleTokens(),i=e.target,s=t?o.indexOf(t):o.indexOf(i),r=s===o.length-1?s-1:s+1,p=o[r];this._handleCurrentItemAfterDeletion(p),this.fireEvent("token-delete",{ref:t||i})}_handleCurrentItemAfterDeletion(e){e&&!T()&&(this._itemNav.setCurrentItem(e),setTimeout(()=>{e.focus()},0))}deleteToken(e,t){const o=this._getVisibleTokens(),i=o.indexOf(e);let s=i===o.length-1?i-1:i+1;const r=o.filter(K=>!K.selected);t?s=i===0?i+1:i-1:s=i===o.length-1?i-1:i+1;let p=o[s];if(r.length>1)for(;p&&p.selected;)p=t?o[--s]:o[++s];else p=r[0];this._handleCurrentItemAfterDeletion(p),this.fireEvent("token-delete",{ref:e})}itemDelete(e){const t=e.detail.item.tokenRef;this.fireEvent("token-delete",{ref:t})}_onkeydown(e){if(te(e)&&e.preventDefault(),oe(e)||ne(e))return e.preventDefault(),this._handleTokenSelection(e,!1);ie(e)&&this._handleHomeShift(e),se(e)&&this._handleEndShift(e),this._handleItemNavigation(e,this._tokens)}_handleItemNavigation(e,t){const o=!!(e.metaKey||e.ctrlKey),i=e.target;if(re(e)||w(e)||b(e)||le(e))return this._handleArrowCtrl(e,i,t,w(e)||b(e));if(ae(e)||$(e)||de(e)||C(e)||pe(e)||E(e))return e.preventDefault(),this._handleArrowShift(i,t,$(e)||E(e)||C(e));if(ce(e)||I(e)||he(e)||D(e))return e.preventDefault(),this._handleHome(t,I(e)||D(e));if(o&&e.key.toLowerCase()==="a")return e.preventDefault(),this._toggleTokenSelection(t);if(ue(e)||x(e)||me(e)||z(e)){const s=this._calcNextTokenIndex(this._tokens.find(r=>r.focused),t,x(e)||z(e));this._scrollToToken(t[s])}}_handleHome(e,t){if(!e||!e.length)return-1;const o=t?e.length-1:0;e[o].focus(),this._itemNav.setCurrentItem(e[o])}_handleHomeShift(e){const t=this.tokens,o=e.target,i=t.indexOf(o);t.filter((s,r)=>r<=i).forEach(s=>{s.selected=!0}),t[0].focus(),this._itemNav.setCurrentItem(t[0])}_handleEndShift(e){const t=this.tokens,o=e.target,i=t.indexOf(o);t.filter((s,r)=>r>=i).forEach(s=>{s.selected=!0}),t[t.length-1].focus(),this._itemNav.setCurrentItem(t[t.length-1])}_calcNextTokenIndex(e,t,o){if(!t.length)return-1;const i=t.indexOf(e);let s=o?i+1:i-1;return s>=t.length&&(s=t.length-1),s<0&&(s=0),s}_handleArrowCtrl(e,t,o,i){const s=this._calcNextTokenIndex(t,o,i);e.preventDefault(),s!==-1&&(setTimeout(()=>{o[s].focus()},0),this._scrollToToken(o[s]),this._itemNav.setCurrentItem(o[s]))}_handleArrowShift(e,t,o){const i=t.indexOf(e),s=o?i+1:i-1;s===-1||s===t.length||(e.selected=!0,t[s].selected=!0,setTimeout(()=>{t[s].focus()},0),this._scrollToToken(t[s]),this._itemNav.setCurrentItem(t[s]))}_click(e){this._handleTokenSelection(e)}_onmousedown(e){if(e.target.hasAttribute("ui5-token")){const t=e.target;t.toBeDeleted||(this._itemNav.setCurrentItem(t),this._scrollToToken(t))}}_toggleTokenSelection(e){if(!e||!e.length)return;const t=e.every(o=>o.selected);e.forEach(o=>{o.selected=!t})}_handleTokenSelection(e,t=!0){const o=e.target;o.hasAttribute("ui5-token")&&(t?this._tokens:[]).forEach(s=>{s!==o&&(s.selected=!1)})}_fillClipboard(e,t){const o=t.filter(s=>s.selected).map(s=>s.text).join(`\r
`),i=s=>{s.clipboardData&&s.clipboardData.setData("text/plain",o),s.preventDefault()};document.addEventListener(e,i),document.execCommand(e),document.removeEventListener(e,i)}scrollToStart(){this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(0,0)}scrollToEnd(){const e=this.expandedContentDom&&(this.effectiveDir!=="rtl"?this.expandedContentDom.scrollWidth:-this.expandedContentDom.scrollWidth);this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(e,0,5,10)}_scrollToToken(e){if(!this.expandedContentDom)return;const t=e.getBoundingClientRect(),o=this.expandedContentDom.getBoundingClientRect();t.left<o.left?this._scrollEnablement.scrollTo(this.expandedContentDom.scrollLeft-(o.left-t.left+5),0):t.right>o.right&&this._scrollEnablement.scrollTo(this.expandedContentDom.scrollLeft+(t.right-o.right+5),0)}async closeMorePopover(){(await this.getPopover()).close()}get _nMoreText(){return u.i18nBundle.getText(q,this._nMoreCount)}get showNMore(){return!this.expanded&&this.showMore&&!!this.overflownTokens.length}get contentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer--content")}get expandedContentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer-expanded--content")}get narrowContentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer-nmore--content")}get tokenizerLabel(){return u.i18nBundle.getText(F)}get morePopoverTitle(){return u.i18nBundle.getText(J)}get overflownTokens(){return this.contentDom?(this._getTokens().forEach(e=>{e.overflows=!1}),this._getTokens().filter(e=>{const t=this.contentDom.getBoundingClientRect(),o=e.getBoundingClientRect(),i=o.right,s=t.right,r=o.left,p=t.left;return e.overflows=!this.expanded&&(r<p||i>s),e.overflows})):[]}get hasValueState(){return this.valueState===m.None||this.valueState===m.Success}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get _valueStateMessageIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==m.None?e[this.valueState]:""}get _isPhone(){return T()}get _selectedTokens(){return this._getTokens().filter(e=>e.selected)}get classes(){return{wrapper:{"ui5-tokenizer-root":!0,"ui5-tokenizer-nmore--wrapper":this.showMore,"ui5-tokenizer-no-padding":!this._getTokens().length},content:{"ui5-tokenizer--content":!0,"ui5-tokenizer-expanded--content":!this.showNMore,"ui5-tokenizer-nmore--content":this.showNMore},popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-responsive-popover-header":this.showPopover,"ui5-valuestatemessage--success":this.valueState===m.Success,"ui5-valuestatemessage--error":this.valueState===m.Error,"ui5-valuestatemessage--warning":this.valueState===m.Warning,"ui5-valuestatemessage--information":this.valueState===m.Information}}}get styles(){return{popover:{"min-width":this.popoverMinWidth?`${this.popoverMinWidth}px`:""},popoverValueStateMessage:{width:this.popoverMinWidth&&!T()?`${this.popoverMinWidth}px`:"100%","min-height":"2rem"},popoverHeader:{"min-height":"2rem"},popoverHeaderTitle:{"justify-content":"left"}}}_tokensCountText(){const e=this._getTokens().length;return e===0?u.i18nBundle.getText(X):e===1?u.i18nBundle.getText(Y):u.i18nBundle.getText(G,e)}_focusLastToken(){if(this.tokens.length===0)return;const e=this.tokens[this.tokens.length-1];e.focus(),this._itemNav.setCurrentItem(e)}static async onDefine(){u.i18nBundle=await j("@ui5/webcomponents")}async getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}};h([f({type:Boolean})],c.prototype,"showMore",void 0);h([f({type:Boolean})],c.prototype,"disabled",void 0);h([f({type:Boolean})],c.prototype,"expanded",void 0);h([f({type:Object})],c.prototype,"morePopoverOpener",void 0);h([f({validator:V})],c.prototype,"popoverMinWidth",void 0);h([f({type:m,defaultValue:m.None})],c.prototype,"valueState",void 0);h([f({validator:V})],c.prototype,"_nMoreCount",void 0);h([B({type:HTMLElement,default:!0,individualSlots:!0})],c.prototype,"tokens",void 0);h([B()],c.prototype,"valueStateMessage",void 0);c=u=h([U({tag:"ui5-tokenizer",languageAware:!0,renderer:Z,template:we,styles:Ee,staticAreaStyles:[Te,ye,Se,Ie],staticAreaTemplate:Ce,dependencies:[ve,fe,ke,ge,_e]}),y("token-delete",{detail:{ref:{type:HTMLElement}}}),y("show-more-items-press",{detail:{ref:{type:HTMLElement}}})],c);c.define();const Ge=c;export{A as C,Ge as T};
//# sourceMappingURL=Tokenizer-4c6e4728.js.map
