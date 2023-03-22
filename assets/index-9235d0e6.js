import{a as f,U as S,d as R}from"./UI5Element-427ec721.js";import{e as n,l,s as a,a as P,b as $,p as u,c as T,d as I,w as z}from"./withWebComponent-65cd39a0.js";import{s as L}from"./slot-634e3e91.js";import{c as M,e as A}from"./Icon-7987c836.js";import{I as E,a as N}from"./ItemNavigation-8e291cfa.js";import{C as D}from"./CSSColor-f91c8158.js";import{c as O}from"./Device-208919c6.js";import{c as F,b as j,j as k,o as g,n as v}from"./Icons-fe6e657a.js";import{g as w}from"./CustomElementsScopeUtils-137da8c8.js";import{o as x}from"./class-map-95320e87.js";import{B as K}from"./Button-bc3a11a1.js";import{aR as q,aS as U,aT as V}from"./i18n-defaults-254d6b69.js";import{_ as W}from"./iframe-fb8bab5f.js";import{I as H}from"./Integer-f7f172c9.js";import{s as G}from"./style-map-cae0a379.js";const X=(t,e,o)=>n`<div class="${x(t.classes.colorPaletteRoot)}" @click=${t._onclick} @keyup=${t._onkeyup} @keydown=${t._onkeydown}>${t.showDefaultColor?Y(t,e,o):void 0}<div class="ui5-cp-item-container" role="region" aria-label="${l(t.colorContainerLabel)}" @keydown="${t._onColorContainerKeyDown}">${M(t.displayedColors,(r,i)=>r._id||i,(r,i)=>J(r))}</div>${t._showMoreColors?Q(t,e,o):void 0}${t.showRecentColors?Z(t,e,o):void 0}</div>`,Y=(t,e,o)=>o?n`<div class="ui5-cp-default-color-button-wrapper"><${a("ui5-button",e,o)} class="ui5-cp-default-color-button" design="Transparent" @click=${t._onDefaultColorClick} @keydown=${t._onDefaultColorKeyDown}>Default color</${a("ui5-button",e,o)}><div class="ui5-cp-separator"></div></div>`:n`<div class="ui5-cp-default-color-button-wrapper"><ui5-button class="ui5-cp-default-color-button" design="Transparent" @click=${t._onDefaultColorClick} @keydown=${t._onDefaultColorKeyDown}>Default color</ui5-button><div class="ui5-cp-separator"></div></div>`,J=(t,e,o,r,i)=>n`<slot name="${l(t._individualSlot)}"></slot>`,Q=(t,e,o)=>o?n`<div class="ui5-cp-more-colors-wrapper"><div class="ui5-cp-separator"></div><${a("ui5-button",e,o)} design="Transparent" class="ui5-cp-more-colors" @click="${t._openMoreColorsDialog}" @keydown=${t._onMoreColorsKeyDown}>${l(t.colorPaleteMoreColorsText)}</${a("ui5-button",e,o)}></div>`:n`<div class="ui5-cp-more-colors-wrapper"><div class="ui5-cp-separator"></div><ui5-button design="Transparent" class="ui5-cp-more-colors" @click="${t._openMoreColorsDialog}" @keydown=${t._onMoreColorsKeyDown}>${l(t.colorPaleteMoreColorsText)}</ui5-button></div>`,Z=(t,e,o)=>n`<div class="ui5-cp-recent-colors-wrapper"><div class="ui5-cp-separator"></div><div class="ui5-cp-recent-colors-container" @keydown="${t._onRecentColorsContainerKeyDown}">${M(t.recentColors,(r,i)=>r._id||i,(r,i)=>ee(r,i,t,e,o))}</div></div>`,ee=(t,e,o,r,i)=>i?n`<${a("ui5-color-palette-item",r,i)} value="${l(t)}"></${a("ui5-color-palette-item",r,i)}>`:n`<ui5-color-palette-item value="${l(t)}"></ui5-color-palette-item>`,oe=(t,e,o)=>o?n`<${a("ui5-dialog",e,o)} header-text="${l(t.moreColorsFeature.colorPaletteDialogTitle)}"><div class="ui5-cp-dialog-content"><${a("ui5-color-picker",e,o)}></${a("ui5-color-picker",e,o)}></div><div slot="footer" class="ui5-cp-dialog-footer"><${a("ui5-button",e,o)} design="Emphasized" @click="${t._chooseCustomColor}">${l(t.moreColorsFeature.colorPaletteDialogOKButton)}</${a("ui5-button",e,o)}><${a("ui5-button",e,o)} design="Transparent" @click="${t._closeDialog}">${l(t.moreColorsFeature.colorPaletteCancelButton)}</${a("ui5-button",e,o)}></div></${a("ui5-dialog",e,o)}>`:n`<ui5-dialog header-text="${l(t.moreColorsFeature.colorPaletteDialogTitle)}"><div class="ui5-cp-dialog-content"><ui5-color-picker></ui5-color-picker></div><div slot="footer" class="ui5-cp-dialog-footer"><ui5-button design="Emphasized" @click="${t._chooseCustomColor}">${l(t.moreColorsFeature.colorPaletteDialogOKButton)}</ui5-button><ui5-button design="Transparent" @click="${t._closeDialog}">${l(t.moreColorsFeature.colorPaletteCancelButton)}</ui5-button></div></ui5-dialog>`,te=(t,e,o)=>n`<div class="ui5-cp-item" style="${G(t.styles.root)}" value="${l(t.value)}" tabindex="${l(t._tabIndex)}" role="button" aria-label="${l(t.colorLabel)} - ${l(t.index)}: ${l(t.value)}" title="${l(t.colorLabel)} - ${l(t.index)}: ${l(t.value)}" ?disabled="${t._disabled}"></div>`;f("@ui5/webcomponents-theming","sap_fiori_3",async()=>P);f("@ui5/webcomponents","sap_fiori_3",async()=>$);const re={packageName:"@ui5/webcomponents",fileName:"themes/ColorPaletteItem.css.ts",content:':host(:not([hidden])){height:var(--_ui5_color-palette-item-height);width:var(--_ui5_color-palette-item-height);border:1px solid var(--sapContent_ForegroundBorderColor);border-radius:var(--_ui5_color-palette-item-outer-border-radius);display:inline-block;margin:var(--_ui5_color-palette-item-margin);box-sizing:border-box}:host(:not([_disabled]):hover){height:var(--_ui5_color-palette-item-hover-height);width:var(--_ui5_color-palette-item-hover-height);margin:var(--_ui5_color-palette-item-hover-margin);border-radius:var(--_ui5_color-palette-item-hover-outer-border-radius)}:host(:not([hidden])[phone]){height:2.75rem;width:2.75rem;border:1px solid var(--sapContent_ForegroundBorderColor);border-radius:.25rem;display:inline-block;margin:.375rem}.ui5-cp-item{position:relative;box-sizing:border-box;border-radius:var(--_ui5_color-palette-item-inner-border-radius);width:100%;height:100%}:host(:not([_disabled]):not([phone]):hover) .ui5-cp-item{border-radius:var(--_ui5_color-palette-item-hover-inner-border-radius)}:host(:not([_disabled])[phone]) .ui5-cp-item{border-radius:.1875rem}.ui5-cp-item:hover:not(:focus){border:1px solid var(--sapGroup_ContentBackground);border-radius:var(--_ui5_color-palette-item-hover-inner-border-radius);box-sizing:border-box}:host(:not([_disabled]):not([phone])) .ui5-cp-item:focus{outline:none}:host(:not([_disabled]):not([phone]):focus) .ui5-cp-item{pointer-events:none}:host(:not([_disabled]):not([phone])) .ui5-cp-item:focus:not(:hover):before{content:"";box-sizing:border-box;position:absolute;left:var(--_ui5_color-palette-item-before-focus-offset);top:var(--_ui5_color-palette-item-before-focus-offset);right:var(--_ui5_color-palette-item-before-focus-offset);bottom:var(--_ui5_color-palette-item-before-focus-offset);border:var(--_ui5_color-palette-item-before-focus-color);border-radius:var(--_ui5_color-palette-item-before-focus-border-radius);pointer-events:none}:host(:not([_disabled])) .ui5-cp-item:focus:not(:hover):after{content:"";box-sizing:border-box;position:absolute;left:var(--_ui5_color-palette-item-after-focus-offset);top:var(--_ui5_color-palette-item-after-focus-offset);right:var(--_ui5_color-palette-item-after-focus-offset);bottom:var(--_ui5_color-palette-item-after-focus-offset);border:var(--_ui5_color-palette-item-after-focus-color);border-radius:var(--_ui5_color-palette-item-after-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([phone]):hover:focus) .ui5-cp-item:focus:not(:hover):before{content:"";box-sizing:border-box;position:absolute;left:var(--_ui5_color-palette-item-before-focus-hover-offset);top:var(--_ui5_color-palette-item-before-focus-hover-offset);right:var(--_ui5_color-palette-item-before-focus-hover-offset);bottom:var(--_ui5_color-palette-item-before-focus-hover-offset);border:var(--_ui5_color-palette-item-before-focus-color);border-radius:var(--_ui5_color-palette-item-before-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([phone]):hover:focus) .ui5-cp-item:focus:not(:hover):after{content:"";box-sizing:border-box;position:absolute;left:var(--_ui5_color-palette-item-after-focus-hover-offset);top:var(--_ui5_color-palette-item-after-focus-hover-offset);right:var(--_ui5_color-palette-item-after-focus-hover-offset);bottom:var(--_ui5_color-palette-item-after-focus-hover-offset);border:var(--_ui5_color-palette-item-after-focus-color);border-radius:var(--_ui5_color-palette-item-after-focus-border-radius);pointer-events:none}'};var _=globalThis&&globalThis.__decorate||function(t,e,o,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,o,r);else for(var m=t.length-1;m>=0;m--)(p=t[m])&&(s=(i<3?p(s):i>3?p(e,o,s):p(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},b;let d=b=class extends S{static async onDefine(){b.i18nBundle=await R("@ui5/webcomponents")}constructor(){super()}onBeforeRendering(){this._disabled=!this.value,this.phone=O()}get colorLabel(){return b.i18nBundle.getText(q)}get styles(){return{root:{"background-color":this.value}}}};_([u({validator:D})],d.prototype,"value",void 0);_([u({defaultValue:"-1",noAttribute:!0})],d.prototype,"_tabIndex",void 0);_([u({validator:H})],d.prototype,"index",void 0);_([u({type:Boolean})],d.prototype,"phone",void 0);_([u({type:Boolean})],d.prototype,"_disabled",void 0);d=b=_([T({tag:"ui5-color-palette-item",renderer:I,styles:re,template:te})],d);d.define();const B=d,ie=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));f("@ui5/webcomponents-theming","sap_fiori_3",async()=>P);f("@ui5/webcomponents","sap_fiori_3",async()=>$);const le={packageName:"@ui5/webcomponents",fileName:"themes/ColorPalette.css.ts",content:":host(:not([hidden])){display:inline-block}:host(:not([hidden])[popup-mode]){width:100%}.ui5-cp-root{display:flex;flex-direction:column}.ui5-cp-recent-colors-wrapper,.ui5-cp-root.ui5-cp-root-phone,.ui5-cp-root.ui5-cp-root-phone .ui5-cp-default-color-button-wrapper,.ui5-cp-root.ui5-cp-root-phone .ui5-cp-more-colors-wrapper,.ui5-cp-separator{width:100%}.ui5-cp-root.ui5-cp-root-phone .ui5-cp-item-container{width:18.5rem;max-width:19.5rem;max-height:13rem;padding:.375rem .625rem}.ui5-cp-recent-colors-wrapper{display:flex;align-items:center;flex-direction:column}.ui5-cp-root.ui5-cp-root-phone{display:flex;align-items:center}.ui5-cp-item-container{display:flex;max-width:var(--_ui5_color-palette-row-width);flex-flow:wrap;max-height:var(--_ui5_color-palette-row-height);overflow:hidden;padding:var(--_ui5_color-palette-swatch-container-padding)}.ui5-cp-default-color-button,.ui5-cp-more-colors{width:100%;height:var(--_ui5_color-palette-button-height);text-align:center;border:none}.ui5-cp-default-color-button-wrapper,.ui5-cp-more-colors-wrapper{display:flex;flex-direction:column}.ui5-cp-separator{height:.0625rem;background:var(--sapToolbar_SeparatorColor)}.ui5-cp-default-color-button,.ui5-cp-more-colors{padding:.0625rem}"};f("@ui5/webcomponents-theming","sap_fiori_3",async()=>P);f("@ui5/webcomponents","sap_fiori_3",async()=>$);const se={packageName:"@ui5/webcomponents",fileName:"themes/ColorPaletteStaticArea.css.ts",content:".ui5-cp-dialog-content{display:flex;justify-content:center;align-items:center;margin:1rem 0}.ui5-cp-dialog-footer{width:100%;display:flex;justify-content:flex-end;margin:.1875rem 1rem}.ui5-cp-dialog-footer [ui5-button]:first-child{margin-right:1rem}"};var h=globalThis&&globalThis.__decorate||function(t,e,o,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,o,r);else for(var m=t.length-1;m>=0;m--)(p=t[m])&&(s=(i<3?p(s):i>3?p(e,o,s):p(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},C;let c=C=class extends S{static async onDefine(){const e=w("ColorPaletteMoreColors");[C.i18nBundle]=await Promise.all([R("@ui5/webcomponents"),e?e.init():Promise.resolve()])}constructor(){super(),this._itemNavigation=new E(this,{getItemsCallback:()=>this.displayedColors,rowSize:this.rowSize,behavior:N.Cyclic}),this._itemNavigationRecentColors=new E(this,{getItemsCallback:()=>this.recentColorsElements,rowSize:this.rowSize,behavior:N.Static}),this._recentColors=[]}onBeforeRendering(){if(this.displayedColors.forEach((e,o)=>{e.index=o+1}),this.showMoreColors){const e=w("ColorPaletteMoreColors");if(e)this.moreColorsFeature=new e;else throw new Error('You have to import "@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js" module to use the more-colors functionality.')}}selectColor(e){e.value&&(e.focus(),this.displayedColors.includes(e)&&this._itemNavigation.setCurrentItem(e),this._setColor(e.value))}_setColor(e){this._selectedColor=e,this._recentColors[0]!==this._selectedColor&&(this._recentColors.includes(this._selectedColor)?this._recentColors.unshift(this._recentColors.splice(this._recentColors.indexOf(this._selectedColor),1)[0]):this._recentColors.unshift(this._selectedColor)),this.fireEvent("item-click",{color:this._selectedColor})}_onclick(e){const o=e.target;o.hasAttribute("ui5-color-palette-item")&&this.selectColor(o)}_onkeyup(e){const o=e.target;F(e)&&o.hasAttribute("ui5-color-palette-item")&&(e.preventDefault(),this.selectColor(o))}_onkeydown(e){const o=e.target;j(e)&&o.hasAttribute("ui5-color-palette-item")&&this.selectColor(o)}_onDefaultColorKeyDown(e){if(k(e)&&this.popupMode&&(e.preventDefault(),this._onDefaultColorClick()),g(e))e.stopPropagation(),this.focusColorElement(this.colorPaletteNavigationElements[1],this._itemNavigation);else if(v(e)){e.stopPropagation();const o=this.colorPaletteNavigationElements[this.colorPaletteNavigationElements.length-1];if(this.hasRecentColors)this.focusColorElement(o,this._itemNavigationRecentColors);else if(this.showMoreColors)o.focus();else{const r=this.displayedColors.length%this.rowSize*this.rowSize;this.focusColorElement(this.displayedColors[r],this._itemNavigation)}}}_onMoreColorsKeyDown(e){const o=e.target,r=this.colorPaletteNavigationElements.indexOf(o),i=this.displayedColors.length%this.rowSize*this.rowSize;v(e)?(e.stopPropagation(),this.focusColorElement(this.displayedColors[i],this._itemNavigation)):g(e)&&(e.stopPropagation(),this.hasRecentColors?this.focusColorElement(this.colorPaletteNavigationElements[r+1],this._itemNavigationRecentColors):this.showDefaultColor?this.colorPaletteNavigationElements[0].focus():this.focusColorElement(this.displayedColors[0],this._itemNavigation))}_onColorContainerKeyDown(e){const o=e.target,r=this.colorPaletteNavigationElements[this.colorPaletteNavigationElements.length-1];if(k(e)&&this.popupMode&&(e.preventDefault(),this.selectColor(o)),v(e)&&o===this.displayedColors[0]&&this.colorPaletteNavigationElements.length>1)e.stopPropagation(),this.showDefaultColor?this.colorPaletteNavigationElements[0].focus():!this.showDefaultColor&&this.hasRecentColors?this.focusColorElement(r,this._itemNavigationRecentColors):!this.showDefaultColor&&this.showMoreColors&&r.focus();else if(g(e)&&o===this.displayedColors[this.displayedColors.length-1]&&this.colorPaletteNavigationElements.length>1){e.stopPropagation();const i=this.showDefaultColor&&!this.showMoreColors&&this.hasRecentColors||!this.showDefaultColor&&!this.showMoreColors&&this.hasRecentColors;this.showDefaultColor&&this.showMoreColors?this.colorPaletteNavigationElements[2].focus():this.showDefaultColor&&!this.showMoreColors&&(!this.showRecentColors||!this.recentColors[0])?this.colorPaletteNavigationElements[0].focus():i?this.focusColorElement(r,this._itemNavigationRecentColors):!this.showDefaultColor&&this.showMoreColors&&this.colorPaletteNavigationElements[1].focus()}}_onRecentColorsContainerKeyDown(e){if(v(e)){if(this.showMoreColors){const o=this.showDefaultColor?2:1;this.colorPaletteNavigationElements[o].focus()}else if(!this.showMoreColors&&this.colorPaletteNavigationElements.length>1){const o=this.displayedColors.length%this.rowSize*this.rowSize;e.stopPropagation(),this.focusColorElement(this.displayedColors[o],this._itemNavigation)}}else g(e)&&(this.showDefaultColor?this.colorPaletteNavigationElements[0].focus():(e.stopPropagation(),this.focusColorElement(this.displayedColors[0],this._itemNavigation)))}focusColorElement(e,o){o.setCurrentItem(e),o._focusCurrentItem()}async _chooseCustomColor(){const e=await this.getColorPicker();this._setColor(e.color),this._closeDialog()}async _closeDialog(){(await this._getDialog()).close()}async _openMoreColorsDialog(){(await this._getDialog()).show()}_onDefaultColorClick(){this.defaultColor&&this._setColor(this.defaultColor)}get selectedColor(){return this._selectedColor}get displayedColors(){return this.getSlottedNodes("colors").filter(o=>o.value).slice(0,15)}get colorContainerLabel(){return C.i18nBundle.getText(U)}get colorPaleteMoreColorsText(){return C.i18nBundle.getText(V)}get _showMoreColors(){return this.showMoreColors&&this.moreColorsFeature}get rowSize(){return 5}get hasRecentColors(){return this.showRecentColors&&this.recentColors[0]}get recentColors(){for(this._recentColors.length>this.rowSize&&(this._recentColors=this._recentColors.slice(0,this.rowSize));this._recentColors.length<this.rowSize;)this._recentColors.push("");return this._recentColors}get recentColorsElements(){const e=this.getDomRef();return e?Array.from(e.querySelectorAll(".ui5-cp-recent-colors-wrapper [ui5-color-palette-item]")).filter(o=>o.value!==""):[]}get colorPaletteNavigationElements(){const e=[],o=this.shadowRoot.querySelector(".ui5-cp-root");return this.showDefaultColor&&e.push(o.querySelector(".ui5-cp-default-color-button")),e.push(this.displayedColors[0]),this.showMoreColors&&e.push(o.querySelector(".ui5-cp-more-colors")),this.showRecentColors&&this.recentColorsElements.length&&e.push(this.recentColorsElements[0]),e}get classes(){return{colorPaletteRoot:{"ui5-cp-root":!0,"ui5-cp-root-phone":O()}}}async _getDialog(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-dialog]")}async getColorPicker(){return(await this._getDialog()).content[0].querySelector("[ui5-color-picker]")}};h([u({type:Boolean})],c.prototype,"showRecentColors",void 0);h([u({type:Boolean})],c.prototype,"showMoreColors",void 0);h([u({type:Boolean})],c.prototype,"showDefaultColor",void 0);h([u({validator:D})],c.prototype,"defaultColor",void 0);h([u({validator:D})],c.prototype,"_selectedColor",void 0);h([u({type:Boolean})],c.prototype,"popupMode",void 0);h([L({default:!0,type:HTMLElement,invalidateOnChildChange:!0,individualSlots:!0})],c.prototype,"colors",void 0);c=C=h([T({tag:"ui5-color-palette",renderer:I,template:X,staticAreaTemplate:oe,styles:le,staticAreaStyles:se,get dependencies(){const t=w("ColorPaletteMoreColors");return[B,K].concat(t?t.dependencies:[])}}),A("item-click",{detail:{color:{type:String}}})],c);c.define();const ae=c,De=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),y=z("ui5-color-palette-item",["value"],[],[],[],()=>W(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url));y.displayName="ColorPaletteItem";try{y.displayName="ColorPaletteItem",y.__docgenInfo={description:'The `ColorPaletteItem` component represents a color in the the `ColorPalette`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPalette" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"ColorPaletteItem",props:{value:{defaultValue:null,description:`Defines the colour of the component.

**Note:** The value should be a valid CSS color.`,name:"value",required:!1,type:{name:"Color"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{y as C,ae as a,De as b};
//# sourceMappingURL=index-9235d0e6.js.map
