import{_}from"./iframe-296980c2.js";import{e as r,l as n,s as l,a as b,b as y,p as h,c as $,d as w,w as I}from"./withWebComponent-d61dcbbc.js";import{c as x,I as R,e as T}from"./Icon-a2964213.js";import{a as g,U as C,d as k}from"./UI5Element-74c2a827.js";import{p as N,q as D,s as V,o as S,c as A,b as E,m as M,n as O}from"./Icons-94b91597.js";import{I as P}from"./Integer-f7f172c9.js";import{F as q}from"./Float-99d99064.js";import{a9 as U,aa as B}from"./i18n-defaults-254d6b69.js";import"./favorite-2f94d00a.js";import"./unfavorite-3f425725.js";function F(o,i,e){return r`<div class="ui5-rating-indicator-root" role="slider" aria-roledescription="${n(this._ariaRoleDescription)}" aria-valuemin="0" aria-valuenow="${n(this.value)}" aria-valuemax="${n(this.max)}" aria-valuetext="${n(this.value)} of ${n(this.max)}" aria-orientation="horizontal" aria-disabled="${n(this._ariaDisabled)}" aria-readonly="${n(this.ariaReadonly)}" tabindex="${n(this.effectiveTabIndex)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @click="${this._onclick}" @keydown="${this._onkeydown}" title="${n(this.tooltip)}" aria-label="${n(this.accessibleName)}"><ul class="ui5-rating-indicator-list" aria-hidden="true">${x(this._stars,(t,a)=>t._id||a,(t,a)=>j.call(this,o,i,e,t,a))}</ul></div>`}function j(o,i,e,t,a){return r`${t.selected?L.call(this,o,i,e,t,a):W.call(this,o,i,e,t,a)}`}function L(o,i,e,t,a){return e?r`<li data-ui5-value="${n(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-sel"><${l("ui5-icon",i,e)} data-ui5-value="${n(t.index)}" name="favorite"></${l("ui5-icon",i,e)}></li>`:r`<li data-ui5-value="${n(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-sel"><ui5-icon data-ui5-value="${n(t.index)}" name="favorite"></ui5-icon></li>`}function W(o,i,e,t,a){return r`${t.halfStar?z.call(this,o,i,e,t,a):H.call(this,o,i,e,t,a)}`}function z(o,i,e,t,a){return e?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-half"><${l("ui5-icon",i,e)} data-ui5-value="${n(t.index)}" name="unfavorite"></${l("ui5-icon",i,e)}><div class="ui5-rating-indicator-half-icon-wrapper"><${l("ui5-icon",i,e)} data-ui5-value="${n(t.index)}" name="favorite" class="ui5-rating-indicator-half-icon"></${l("ui5-icon",i,e)}></div></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-half"><ui5-icon data-ui5-value="${n(t.index)}" name="unfavorite"></ui5-icon><div class="ui5-rating-indicator-half-icon-wrapper"><ui5-icon data-ui5-value="${n(t.index)}" name="favorite" class="ui5-rating-indicator-half-icon"></ui5-icon></div></li>`}function H(o,i,e,t,a){return r`${this.readonly?G.call(this,o,i,e,t,a):X.call(this,o,i,e,t,a)}`}function G(o,i,e,t,a){return e?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${l("ui5-icon",i,e)} data-ui5-value="${n(t.index)}" name="favorite"></${l("ui5-icon",i,e)}></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${n(t.index)}" name="favorite"></ui5-icon></li>`}function X(o,i,e,t,a){return r`${this.disabled?J.call(this,o,i,e,t,a):K.call(this,o,i,e,t,a)}`}function J(o,i,e,t,a){return e?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${l("ui5-icon",i,e)} data-ui5-value="${n(t.index)}" name="favorite"></${l("ui5-icon",i,e)}></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${n(t.index)}" name="favorite"></ui5-icon></li>`}function K(o,i,e,t,a){return e?r`<li data-ui5-value="${n(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${l("ui5-icon",i,e)} data-ui5-value="${n(t.index)}" name="unfavorite"></${l("ui5-icon",i,e)}></li>`:r`<li data-ui5-value="${n(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${n(t.index)}" name="unfavorite"></ui5-icon></li>`}g("@ui5/webcomponents-theming","sap_fiori_3",async()=>b);g("@ui5/webcomponents","sap_fiori_3",async()=>y);const Q={packageName:"@ui5/webcomponents",fileName:"themes/RatingIndicator.css",content:":host(:not([hidden])){display:inline-block;font-size:24px;margin:var(--_ui5_rating_indicator_component_spacing);cursor:pointer}:host([disabled]){opacity:.4;cursor:auto;outline:none}:host([readonly]){cursor:auto}:host([disabled]) .ui5-rating-indicator-item-unsel,:host([readonly]) .ui5-rating-indicator-item-unsel{padding-inline:var(--_ui5_rating_indicator_readonly_item_spacing);width:var(--_ui5_rating_indicator_readonly_item_width);height:var(--_ui5_rating_indicator_readonly_item_height)}:host(:not([readonly]):not([disabled])) .ui5-rating-indicator-root:hover{opacity:.9}:host([_focused]){outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--_ui5_rating_indicator_outline_offset);border-radius:var(--_ui5_rating_indicator_border_radius)}[ui5-icon]{display:flex;text-shadow:var(--sapContent_TextShadow)}.ui5-rating-indicator-root{outline:none;position:relative}.ui5-rating-indicator-list{list-style-type:none;display:flex;align-items:center;margin:0;padding:0}.ui5-rating-indicator-item{position:relative;width:var(--_ui5_rating_indicator_item_width);height:var(--_ui5_rating_indicator_item_height)}.ui5-rating-indicator-item:not(:last-child){margin-inline-end:.1875rem}.ui5-rating-indicator-item [ui5-icon]{width:100%;height:100%;color:inherit;user-select:none}.ui5-rating-indicator-item.ui5-rating-indicator-item-sel{color:var(--sapContent_RatedColor)}.ui5-rating-indicator-item.ui5-rating-indicator-item-unsel{color:var(--sapContent_UnratedColor)}.ui5-rating-indicator-item.ui5-rating-indicator-item-half{color:var(--sapContent_UnratedColor)}.ui5-rating-indicator-item [ui5-icon].ui5-rating-indicator-half-icon{position:absolute;inset-inline-start:50%;color:var(--sapContent_RatedColor)}.ui5-rating-indicator-half-icon-wrapper{width:100%;height:100%;position:absolute;inset-inline-start:-50%;top:0;z-index:32;overflow:hidden}"};var d=globalThis&&globalThis.__decorate||function(o,i,e,t){var a=arguments.length,s=a<3?i:t===null?t=Object.getOwnPropertyDescriptor(i,e):t,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,i,e,t);else for(var p=o.length-1;p>=0;p--)(c=o[p])&&(s=(a<3?c(s):a>3?c(i,e,s):c(i,e))||s);return a>3&&s&&Object.defineProperty(i,e,s),s},f;let u=f=class extends C{static async onDefine(){f.i18nBundle=await k("@ui5/webcomponents")}constructor(){super()}onBeforeRendering(){this.calcState()}calcState(){this._stars=[];for(let i=1;i<this.max+1;i++){const e=Math.round((this.value-Math.floor(this.value))*10);let t=!1,a=this.value;Math.floor(this.value)+1===i&&e>2&&e<8?t=!0:e<=2?a=Math.floor(this.value):e>=8&&(a=Math.ceil(this.value)),this._stars.push({selected:i<=a,index:i,halfStar:t})}}_onclick(i){const e=i.target;if(!(e instanceof HTMLElement)||this.disabled||this.readonly)return;const t=e.getAttribute("data-ui5-value");t!==null&&(this.value=parseInt(t),this.value===1&&this._liveValue===1&&(this.value=0),this._liveValue!==this.value&&(this.fireEvent("change"),this._liveValue=this.value))}_onkeydown(i){if(this.disabled||this.readonly)return;const e=N(i)||D(i),t=V(i)||S(i),a=A(i)||E(i),s=M(i),c=O(i),p=i.keyCode>=48&&i.keyCode<=57||i.keyCode>=96&&i.keyCode<=105;if(e||t||a||s||c||p){if(i.preventDefault(),e&&this.value>0)this.value=Math.round(this.value-1);else if(t&&this.value<this.max)this.value=Math.round(this.value+1);else if(a){const m=Math.round(this.value+1);this.value=m>this.max?0:m}else if(s)this.value=0;else if(c)this.value=this.max;else if(p){const m=parseInt(i.key);this.value=m>this.max?this.max:m}this.fireEvent("change")}}_onfocusin(){this.disabled||(this._focused=!0,this._liveValue=this.value)}_onfocusout(){this._focused=!1}get effectiveTabIndex(){const i=this.getAttribute("tabindex");return this.disabled?"-1":i||"0"}get tooltip(){return this.getAttribute("title")||this.defaultTooltip}get defaultTooltip(){return f.i18nBundle.getText(U)}get _ariaRoleDescription(){return f.i18nBundle.getText(B)}get _ariaDisabled(){return this.disabled||void 0}get ariaReadonly(){return this.readonly?"true":void 0}};d([h({validator:q,defaultValue:0})],u.prototype,"value",void 0);d([h({validator:P,defaultValue:5})],u.prototype,"max",void 0);d([h({type:Boolean})],u.prototype,"disabled",void 0);d([h({type:Boolean})],u.prototype,"readonly",void 0);d([h()],u.prototype,"accessibleName",void 0);d([h({type:Object,multiple:!0})],u.prototype,"_stars",void 0);d([h({type:Boolean})],u.prototype,"_focused",void 0);u=f=d([$({tag:"ui5-rating-indicator",languageAware:!0,renderer:w,styles:Q,template:F,dependencies:[R]}),T("change")],u);u.define();const Y=u,Z=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),v=I("ui5-rating-indicator",["accessibleName","max","value"],["disabled","readonly"],[],["change"],()=>_(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url));v.displayName="RatingIndicator";v.defaultProps={max:5,value:0};try{v.displayName="RatingIndicator",v.__docgenInfo={description:`The Rating Indicator is used to display a specific number of icons that are used to rate an item. Additionally, it is also used to display the average and overall ratings.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/RatingIndicator" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"RatingIndicator",props:{onChange:{defaultValue:null,description:"The event is fired when the value changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RatingIndicatorDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"5"},description:"The number of displayed rating symbols.",name:"max",required:!1,type:{name:"number"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"0"},description:`The indicated value of the rating.

**Note:** If you set a number which is not round, it would be shown as follows:

*   1.0 - 1.2 -> 1
*   1.3 - 1.7 -> 1.5
*   1.8 - 1.9 -> 2`,name:"value",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{v as R};
//# sourceMappingURL=index-eb274655.js.map
