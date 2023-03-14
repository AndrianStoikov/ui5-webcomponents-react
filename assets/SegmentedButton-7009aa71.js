import{a as y,U as w,d as T,p as E}from"./UI5Element-427ec721.js";import{e as h,l as n,f as g,p as m,c as B,s as D,a as N,b as O}from"./withWebComponent-e4481254.js";import{e as R}from"./event-97133b94.js";import{s as k}from"./slot-634e3e91.js";import{I as C}from"./ItemNavigation-18222ac6.js";import{R as f}from"./ResizeHandler-1fa8a094.js";import{b as z,c as v}from"./Keys-3acbae73.js";import{an as W,ao as M,ap as P}from"./i18n-defaults-d66b3d5e.js";import{I as S}from"./Integer-f7f172c9.js";import j from"./ToggleButton-93dc353f.js";import{a as I}from"./Button-04bad9a0.js";import{I as A}from"./Icon-459702a7.js";const H=(e,t,i)=>h`<li role="option" aria-roledescription="${n(e.ariaDescription)}" aria-posinset="${n(e.posInSet)}" aria-setsize="${n(e.sizeOfSet)}" aria-selected="${n(e.pressed)}" class="ui5-button-root" aria-disabled="${n(e.disabled)}" data-sap-focus-ref  @focusout=${e._onfocusout} @focusin=${e._onfocusin} @click=${e._onclick} @mousedown=${e._onmousedown} @mouseup=${e._onmouseup} @keydown=${e._onkeydown} @keyup=${e._onkeyup} @touchstart="${e._ontouchstart}" @touchend="${e._ontouchend}" tabindex=${n(e.tabIndexValue)} aria-label="${n(e.ariaLabelText)}" title="${n(e.tooltip)}">${e.icon?L(e,t,i):void 0}<span id="${n(e._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span></li> `,L=(e,t,i)=>i?h`<${g("ui5-icon",t,i)} class="ui5-button-icon" name="${n(e.icon)}" part="icon" ?show-tooltip=${e.showIconTooltip}></${g("ui5-icon",t,i)}>`:h`<ui5-icon class="ui5-button-icon" name="${n(e.icon)}" part="icon" ?show-tooltip=${e.showIconTooltip}></ui5-icon>`;var c=globalThis&&globalThis.__decorate||function(e,t,i,s){var r=arguments.length,o=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(d=e[l])&&(o=(r<3?d(o):r>3?d(t,i,o):d(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},p;let a=p=class extends j{get ariaDescription(){return p.i18nBundle.getText(W)}};c([m({type:I,defaultValue:I.Default})],a.prototype,"design",void 0);c([m({type:Boolean})],a.prototype,"iconEnd",void 0);c([m({type:Boolean})],a.prototype,"submits",void 0);c([m({validator:S,defaultValue:0})],a.prototype,"posInSet",void 0);c([m({validator:S,defaultValue:0})],a.prototype,"sizeOfSet",void 0);a=p=c([B({tag:"ui5-segmented-button-item",template:H,dependencies:[A]})],a);a.define();const $=a,oe=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),F=(e,t,i)=>h`<ul @click="${e._onclick}" @mousedown="${e._onmousedown}" @keydown="${e._onkeydown}" @keyup="${e._onkeyup}" @focusin="${e._onfocusin}" class="ui5-segmented-button-root" role="listbox" aria-multiselectable="true" aria-describedby="${n(e._id)}-invisibleText" aria-roledescription=${n(e.ariaDescription)} aria-label=${n(e.accessibleName)}><slot></slot><span id="${n(e._id)}-invisibleText" class="ui5-hidden-text">${n(e.ariaDescribedBy)}</span></ul>`;y("@ui5/webcomponents-theming","sap_fiori_3",async()=>D);y("@ui5/webcomponents","sap_fiori_3",async()=>N);const U={packageName:"@ui5/webcomponents",fileName:"themes/SegmentedButton.css.ts",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}.ui5-segmented-button-root{display:flex;margin:0;padding:0;background-color:var(--sapButton_Background);border-radius:var(--_ui5_segmented_btn_outer_border_radius)}::slotted([ui5-segmented-button-item]){border-radius:var(--_ui5_segmented_btn_inner_border_radius);height:var(--_ui5_button_base_height);min-width:2.5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:auto}::slotted([ui5-segmented-button-item]:hover){z-index:2}::slotted([ui5-segmented-button-item][active]),::slotted([ui5-segmented-button-item][pressed]){border:.0625rem solid var(--sapButton_Selected_BorderColor);background-color:var(--sapButton_Selected_Background);color:var(--sapButton_Selected_TextColor)}::slotted([ui5-segmented-button-item][pressed]:hover){border:.0625rem solid var(--sapButton_Selected_Hover_BorderColor);background-color:var(--sapButton_Selected_Hover_Background);color:var(--sapButton_Selected_TextColor)}::slotted([ui5-segmented-button-item]:nth-child(odd)){border-inline-end:var(--_ui5_segmented_btn_inner_border_odd_child);border-inline-start:var(--_ui5_segmented_btn_inner_border_odd_child)}::slotted([ui5-segmented-button-item][active]:nth-child(odd)),::slotted([ui5-segmented-button-item][pressed]:nth-child(odd)){border-inline-end:var(--_ui5_segmented_btn_inner_pressed_border_odd_child);border-inline-start:var(--_ui5_segmented_btn_inner_pressed_border_odd_child)}::slotted([ui5-segmented-button-item]:last-child){border-start-end-radius:var(--_ui5_segmented_btn_border_radius);border-end-end-radius:var(--_ui5_segmented_btn_border_radius);border-inline-end:var(--_ui5_segmented_btn_inner_border)}::slotted([ui5-segmented-button-item][active]:last-child),::slotted([ui5-segmented-button-item][pressed]:last-child){border-inline-end:.0625rem solid var(--sapButton_Selected_BorderColor)}::slotted([ui5-segmented-button-item]:first-child){border-start-start-radius:var(--_ui5_segmented_btn_border_radius);border-end-start-radius:var(--_ui5_segmented_btn_border_radius);border-inline-start:var(--_ui5_segmented_btn_inner_border)}::slotted([ui5-segmented-button-item][active]:first-child),::slotted([ui5-segmented-button-item][pressed]:first-child){border-inline-start:.0625rem solid var(--sapButton_Selected_BorderColor)}::slotted([ui5-segmented-button-item][active]:not([active]):hover){border-color:var(--sapButton_BorderColor)}::slotted([ui5-segmented-button-item][active]:hover){border-color:var(--sapButton_Selected_BorderColor)}"};var b=globalThis&&globalThis.__decorate||function(e,t,i,s){var r=arguments.length,o=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(d=e[l])&&(o=(r<3?d(o):r>3?d(t,i,o):d(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},_;let u=_=class extends w{static async onDefine(){_.i18nBundle=await T("@ui5/webcomponents")}constructor(){super(),this._itemNavigation=new C(this,{getItemsCallback:()=>this.getSlottedNodes("items")}),this.absoluteWidthSet=!1,this.percentageWidthSet=!1,this.hasPreviouslyFocusedItem=!1,this._handleResizeBound=this._doLayout.bind(this)}onEnterDOM(){f.register(this.parentNode,this._handleResizeBound)}onExitDOM(){this.parentNode&&f.deregister(this.parentNode,this._handleResizeBound)}onBeforeRendering(){this.getSlottedNodes("items").forEach((i,s,r)=>{i.posInSet=s+1,i.sizeOfSet=r.length}),this.normalizeSelection()}async onAfterRendering(){await this._doLayout()}prepareToMeasureItems(){this.style.width="",this.items.forEach(t=>{t.style.width=""})}async measureItemsWidth(){await E(),this.prepareToMeasureItems(),this.widths=this.items.map(t=>t.offsetWidth+1)}normalizeSelection(){const t=this.items.filter(s=>s.pressed),i=this._selectedItem?t.indexOf(this._selectedItem):-1;this._selectedItem&&t.length>1&&t.splice(i,1),this._selectedItem=t.pop(),this._selectedItem&&(this.items.forEach(s=>{s.pressed=!1}),this._selectedItem.pressed=!0)}_selectItem(t){const i=t.target,s=i.hasAttribute("ui5-segmented-button-item");if(!(i.disabled||i===this.getDomRef()||!s))return i!==this._selectedItem&&(this._selectedItem&&(this._selectedItem.pressed=!1),this._selectedItem=i,this.fireEvent("selection-change",{selectedItem:this._selectedItem})),this._selectedItem.pressed=!0,this._itemNavigation.setCurrentItem(this._selectedItem),this.selectedItem.focus(),this}_onclick(t){this._selectItem(t)}_onkeydown(t){z(t)?this._selectItem(t):v(t)&&t.preventDefault()}_onkeyup(t){v(t)&&this._selectItem(t)}_onmousedown(t){const i=t.target;i.hasAttribute("ui5-segmented-button-item")&&(i.focus(),this._itemNavigation.setCurrentItem(i),this.hasPreviouslyFocusedItem=!0)}_onfocusin(t){if(this.hasPreviouslyFocusedItem){this._itemNavigation.setCurrentItem(t.target);return}this.selectedItem&&(this.selectedItem.focus(),this._itemNavigation.setCurrentItem(this._selectedItem),this.hasPreviouslyFocusedItem=!0)}async _doLayout(){this.widths&&this.widths.some(s=>s>2)||await this.measureItemsWidth();const i=this.parentNode?this.parentNode.offsetWidth:0;(!this.style.width||this.percentageWidthSet)&&(this.style.width=`${Math.max(...this.widths)*this.items.length}px`,this.absoluteWidthSet=!0),this.items.forEach(s=>{s.style.width="100%"}),i<=this.offsetWidth&&this.absoluteWidthSet&&(this.style.width="100%",this.percentageWidthSet=!0)}get selectedItem(){return this._selectedItem}get ariaDescribedBy(){return _.i18nBundle.getText(M)}get ariaDescription(){return _.i18nBundle.getText(P)}};b([m({defaultValue:void 0})],u.prototype,"accessibleName",void 0);b([k({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],u.prototype,"items",void 0);u=_=b([B({tag:"ui5-segmented-button",languageAware:!0,renderer:O,template:F,styles:U,dependencies:[$]}),R("selection-change",{detail:{selectedItem:{type:HTMLElement}}})],u);u.define();const V=u,re=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{V as S,$ as a,oe as b,re as c};
//# sourceMappingURL=SegmentedButton-7009aa71.js.map
