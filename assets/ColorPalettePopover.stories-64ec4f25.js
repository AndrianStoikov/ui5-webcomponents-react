import{j as l,a as _,F as k}from"./jsx-runtime-670450c2.js";import{r as v}from"./index-f1f749bf.js";import{r as I}from"./index-96c5f47c.js";import{B}from"./index-e7623cad.js";import{a as E,C as a}from"./index-9235d0e6.js";import{_ as S}from"./iframe-fb8bab5f.js";import{a as T,U as N,d as O}from"./UI5Element-427ec721.js";import{e as y,s as c,l as s,a as L,b as j,p as P,c as M,d as q,w as A}from"./withWebComponent-65cd39a0.js";import{s as V}from"./slot-634e3e91.js";import{c as w,e as U}from"./Icon-7987c836.js";import{C as F}from"./CSSColor-f91c8158.js";import{s as W}from"./ResponsivePopoverCommon.css-ca4e9b7c.js";import{b2 as z,aW as Y}from"./i18n-defaults-254d6b69.js";import{B as H}from"./Button-bc3a11a1.js";import{a as G}from"./Title-129aeb28.js";import J from"./ResponsivePopover-fcaf2b05.js";const K=(e,o,t)=>t?y`<${c("ui5-responsive-popover",o,t)} hide-arrow content-only-on-desktop placement-type="Bottom"><div slot="header" class="ui5-cp-header"><${c("ui5-title",o,t)} class="ui5-cp-title">${s(e._colorPaletteTitle)}</${c("ui5-title",o,t)}></div><div><${c("ui5-color-palette",o,t)} ?show-more-colors="${e.showMoreColors}" ?show-recent-colors="${e.showRecentColors}" ?show-default-color="${e.showDefaultColor}" default-color="${s(e.defaultColor)}" popup-mode @ui5-item-click="${s(e.onSelectedColor)}">${w(e.colorPaletteColors,(r,n)=>r._id||n,(r,n)=>b(r))}</${c("ui5-color-palette",o,t)}></div><div slot="footer" class="ui5-cp-footer"><${c("ui5-button",o,t)} design="Transparent" @click="${e.closePopover}">${s(e._cancelButtonLabel)}</${c("ui5-button",o,t)}></div></${c("ui5-responsive-popover",o,t)}>`:y`<ui5-responsive-popover hide-arrow content-only-on-desktop placement-type="Bottom"><div slot="header" class="ui5-cp-header"><ui5-title class="ui5-cp-title">${s(e._colorPaletteTitle)}</ui5-title></div><div><ui5-color-palette ?show-more-colors="${e.showMoreColors}" ?show-recent-colors="${e.showRecentColors}" ?show-default-color="${e.showDefaultColor}" default-color="${s(e.defaultColor)}" popup-mode @ui5-item-click="${s(e.onSelectedColor)}">${w(e.colorPaletteColors,(r,n)=>r._id||n,(r,n)=>b(r))}</ui5-color-palette></div><div slot="footer" class="ui5-cp-footer"><ui5-button design="Transparent" @click="${e.closePopover}">${s(e._cancelButtonLabel)}</ui5-button></div></ui5-responsive-popover>`,b=(e,o,t,r,n)=>y`<slot name="${s(e._individualSlot)}"></slot>`;T("@ui5/webcomponents-theming","sap_fiori_3",async()=>L);T("@ui5/webcomponents","sap_fiori_3",async()=>j);const Q={packageName:"@ui5/webcomponents",fileName:"themes/ColorPalettePopover.css.ts",content:".ui5-cp-header{width:100%;height:var(--_ui5_color-palette-button-height);display:flex;align-items:center}.ui5-cp-footer{width:100%;display:flex;justify-content:flex-end;margin:.1875rem 0}[ui5-responsive-popover]::part(content){padding:0}.ui5-cp-item-container{padding:.3125rem .6875rem}"};var u=globalThis&&globalThis.__decorate||function(e,o,t,r){var n=arguments.length,p=n<3?o:r===null?r=Object.getOwnPropertyDescriptor(o,t):r,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")p=Reflect.decorate(e,o,t,r);else for(var C=e.length-1;C>=0;C--)(f=e[C])&&(p=(n<3?f(p):n>3?f(o,t,p):f(o,t))||p);return n>3&&p&&Object.defineProperty(o,t,p),p},d;let i=d=class extends N{static async onDefine(){d.i18nBundle=await O("@ui5/webcomponents")}constructor(){super()}_respPopover(){return this.responsivePopover=this.shadowRoot.querySelector("[ui5-responsive-popover]"),this.responsivePopover}_colorPalette(){return this.responsivePopover.content[0].querySelector("[ui5-color-palette]")}showAt(o){this._openPopover(o)}openPopover(o){console.warn("The method 'openPopover' is deprecated and will be removed in future, use 'showAt' instead."),this._openPopover(o)}_openPopover(o){this._respPopover(),this.responsivePopover.showAt(o,!0),this.showDefaultColor?this._colorPalette().colorPaletteNavigationElements[0].focus():this._colorPalette().focusColorElement(this._colorPalette().colorPaletteNavigationElements[0],this._colorPalette()._itemNavigation)}closePopover(){this.responsivePopover.close()}onSelectedColor(o){this.closePopover(),this.fireEvent("item-click",o.detail)}isOpen(){return this._respPopover(),this.responsivePopover.opened}get colorPaletteColors(){return this.getSlottedNodes("colors")}get _colorPaletteTitle(){return d.i18nBundle.getText(z)}get _cancelButtonLabel(){return d.i18nBundle.getText(Y)}};u([P({type:Boolean})],i.prototype,"showRecentColors",void 0);u([P({type:Boolean})],i.prototype,"showMoreColors",void 0);u([P({type:Boolean})],i.prototype,"showDefaultColor",void 0);u([P({validator:F})],i.prototype,"defaultColor",void 0);u([V({default:!0,type:HTMLElement,individualSlots:!0})],i.prototype,"colors",void 0);i=d=u([M({tag:"ui5-color-palette-popover",renderer:q,styles:[W,Q],template:K,dependencies:[J,H,G,E]}),U("item-click",{detail:{color:{type:String}}})],i);i.define();const X=i,Z=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),h=A("ui5-color-palette-popover",["defaultColor"],["showDefaultColor","showMoreColors","showRecentColors"],[],["item-click"],()=>S(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url));h.displayName="ColorPalettePopover";try{h.displayName="ColorPalettePopover",h.__docgenInfo={description:`Represents a predefined range of colors for easier selection. Overview The ColorPalettePopover provides the users with a slot to predefine colors. You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly. You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPalettePopover" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"ColorPalettePopover",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, { color: string; }>) => void"}},defaultColor:{defaultValue:null,description:"Defines the default color of the component. **Note:** The default color should be a part of the ColorPalette colors",name:"defaultColor",required:!1,type:{name:"Color"}},showDefaultColor:{defaultValue:null,description:"Defines whether the user can choose the default color from a button.",name:"showDefaultColor",required:!1,type:{name:"boolean"}},showMoreColors:{defaultValue:null,description:'Defines whether the user can choose a custom color from a component. **Note:** In order to use this property you need to import the following module: `"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"`',name:"showMoreColors",required:!1,type:{name:"boolean"}},showRecentColors:{defaultValue:null,description:"Defines whether the user can see the last used colors in the bottom of the component",name:"showRecentColors",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const x={title:"Modals & Popovers / ColorPalettePopover",component:h,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:"color"}}},parameters:{chromatic:{delay:1e3}}},D=v.forwardRef((e,o)=>I.createPortal(l(h,{...e,ref:o}),document.body));D.displayName="ColorPalettePopover";const m={render(e){const o=v.useRef(null),t=v.useRef(null);return v.useEffect(()=>{},[]),_(k,{children:[l(B,{onClick:n=>{o.current.showAt(n.target)},ref:t,children:"Open ColorPalettePopover"}),_(D,{...e,ref:o,children:[l(a,{value:"black"}),l(a,{value:"darkblue"}),l(a,{value:"#444444"}),l(a,{value:"rgb(0,200,0)"}),l(a,{value:"green"}),l(a,{value:"darkred"}),l(a,{value:"yellow"}),l(a,{value:"blue"}),l(a,{value:"cyan"}),l(a,{value:"orange"}),l(a,{value:"#5480e7"}),l(a,{value:"#ff6699"})]})]})}};var g,$,R;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render(args) {
    const popoverRef = useRef(null);
    const btnRef = useRef(null);
    useEffect(() => {
      if (isChromatic) {
        popoverRef.current.showAt(btnRef.current);
      }
    }, []);
    const onButtonClick = e => {
      popoverRef.current.showAt(e.target);
    };
    return <>
        <Button onClick={onButtonClick} ref={btnRef}>
          Open ColorPalettePopover
        </Button>
        <ColorPalettePopover {...args} ref={popoverRef}>
          <ColorPaletteItem value="black" />
          <ColorPaletteItem value="darkblue" />
          <ColorPaletteItem value="#444444" />
          <ColorPaletteItem value="rgb(0,200,0)" />
          <ColorPaletteItem value="green" />
          <ColorPaletteItem value="darkred" />
          <ColorPaletteItem value="yellow" />
          <ColorPaletteItem value="blue" />
          <ColorPaletteItem value="cyan" />
          <ColorPaletteItem value="orange" />
          <ColorPaletteItem value="#5480e7" />
          <ColorPaletteItem value="#ff6699" />
        </ColorPalettePopover>
      </>;
  }
}`,...(R=($=m.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};const ee=["Default"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Default:m,__namedExportsOrder:ee,default:x},Symbol.toStringTag,{value:"Module"}));export{Ce as C,m as D};
//# sourceMappingURL=ColorPalettePopover.stories-64ec4f25.js.map
