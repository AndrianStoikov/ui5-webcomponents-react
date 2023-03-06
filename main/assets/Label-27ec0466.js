import{r as u,U as d}from"./UI5Element-4f8793c9.js";import{e as f,l as h,s as b,a as w,p as s,c as y,b as g}from"./withWebComponent-e4481254.js";import{a as x}from"./Device-208919c6.js";import{W as m}from"./WrappingType-b81e595a.js";import{o as v}from"./class-map-5d8e4b2b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-ed90fb1b.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime-670450c2.js";import"./useIsomorphicLayoutEffect-a838da4a.js";const q=(t,e,a)=>f`<label class="ui5-label-root" @click=${t._onclick}><span class="${v(t.classes.textWrapper)}"><bdi id="${h(t._id)}-bdi"><slot></slot></bdi></span><span aria-hidden="true" class="ui5-label-required-colon"></span></label>`;u("@ui5/webcomponents-theming","sap_fiori_3",async()=>b);u("@ui5/webcomponents","sap_fiori_3",async()=>w);const _={packageName:"@ui5/webcomponents",fileName:"themes/Label.css.ts",content:':host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapContent_LabelColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;cursor:text}.ui5-label-root{width:100%;cursor:inherit}:host([wrapping-type=Normal]) .ui5-label-root{white-space:normal}:host(:not([wrapping-type=Normal])) .ui5-label-root{display:inline-block;white-space:nowrap}bdi{content:"";padding-right:.075rem}:host(:not([wrapping-type=Normal])) .ui5-label-text-wrapper{text-overflow:ellipsis;overflow:hidden;display:inline-block;vertical-align:top;max-width:100%}:host(:not([wrapping-type=Normal])[required][show-colon]) .ui5-label-text-wrapper,:host(:not([wrapping-type=Normal])[required][show-colon]) .ui5-label-text-wrapper.ui5-label-text-wrapper-safari{max-width:calc(100% - .8rem)}:host(:not([wrapping-type=Normal])[required]) .ui5-label-text-wrapper{max-width:calc(100% - .475rem)}:host(:not([wrapping-type=Normal])[required]) .ui5-label-text-wrapper.ui5-label-text-wrapper-safari{max-width:calc(100% - .425rem)}:host(:not([wrapping-type=Normal])[show-colon]) .ui5-label-text-wrapper{max-width:calc(100% - .125rem)}:host([show-colon]) .ui5-label-required-colon{margin-inline-start:-.05rem}:host([show-colon]) .ui5-label-required-colon:before{content:":"}:host([required]) .ui5-label-required-colon:after{content:"*";color:var(--sapField_RequiredColor);font-size:1.25rem;font-weight:700;position:relative;font-style:normal;vertical-align:middle;line-height:0}:host([required][show-colon]) .ui5-label-required-colon:after{margin-inline-start:.125rem}'};var i=globalThis&&globalThis.__decorate||function(t,e,a,l){var n=arguments.length,o=n<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,a):l,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,a,l);else for(var c=t.length-1;c>=0;c--)(p=t[c])&&(o=(n<3?p(o):n>3?p(e,a,o):p(e,a))||o);return n>3&&o&&Object.defineProperty(e,a,o),o};let r=class extends d{get classes(){return{textWrapper:{"ui5-label-text-wrapper":!0,"ui5-label-text-wrapper-safari":x()}}}_onclick(){if(!this.for)return;const e=this.getRootNode().querySelector(`#${this.for}`);e&&e.focus()}};i([s()],r.prototype,"for",void 0);i([s({type:Boolean})],r.prototype,"showColon",void 0);i([s({type:Boolean})],r.prototype,"required",void 0);i([s({type:m,defaultValue:m.None})],r.prototype,"wrappingType",void 0);r=i([y({tag:"ui5-label",renderer:g,template:q,styles:_})],r);r.define();const O=r;export{O as default};
//# sourceMappingURL=Label-27ec0466.js.map
