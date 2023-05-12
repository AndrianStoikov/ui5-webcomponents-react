import{j as e}from"./jsx-runtime-5926aa06.js";import{a as h,U,q as y,k as P}from"./UI5Element-74c2a827.js";import{h as f}from"./Icons-94b91597.js";import{a as V}from"./add-31d4a05c.js";import{e as G}from"./employee-78b984a5.js";import{s as J}from"./settings-5fbbbb3c.js";import{b as H,T as g,c as K,d as S,a as t}from"./index-95135c65.js";import{_ as Q}from"./iframe-296980c2.js";import{e as _,l as s,s as w,a as R,b as F,c as X,d as Y,w as Z}from"./withWebComponent-d61dcbbc.js";import{o as q}from"./class-map-519e9c6d.js";import{s as v}from"./style-map-33b353d0.js";function ee(a,n,o){return _`<div id="${s(this._id)}" data-ui5-stable="${s(this.stableDomRef)}" role="separator" class="${q(this.classes.root)}"></div>`}function te(a,n,o){return o?_`<${w("ui5-li-custom",n,o)} id="${s(this._id)}" data-ui5-stable="${s(this.stableDomRef)}" role="separator" class="${q(this.classes.root)}" disabled style="${v(this._style)}"></${w("ui5-li-custom",n,o)}>`:_`<ui5-li-custom id="${s(this._id)}" data-ui5-stable="${s(this.stableDomRef)}" role="separator" class="${q(this.classes.root)}" disabled style="${v(this._style)}"></ui5-li-custom>`}h("@ui5/webcomponents-theming","sap_fiori_3",async()=>R);h("@ui5/webcomponents","sap_fiori_3",async()=>F);const ae={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInStrip.css",content:".ui5-tc__separator{width:0;border-left:.0625rem solid var(--sapGroup_TitleBorderColor);margin:.5rem .25rem}"};h("@ui5/webcomponents-theming","sap_fiori_3",async()=>R);h("@ui5/webcomponents","sap_fiori_3",async()=>F);const ne={packageName:"@ui5/webcomponents",fileName:"themes/TabSeparatorInOverflow.css",content:".ui5-tc__separator{min-height:.25rem;border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor);margin-inline-start:calc(var(--_ui5-tab-indentation-level)*0.5rem);margin-inline-end:.5rem}[ui5-list]>.ui5-tc__separator:first-child{min-height:.5rem}"};var oe=globalThis&&globalThis.__decorate||function(a,n,o,b){var T=arguments.length,r=T<3?n:b===null?b=Object.getOwnPropertyDescriptor(n,o):b,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,n,o,b);else for(var x=a.length-1;x>=0;x--)(p=a[x])&&(r=(T<3?p(r):T>3?p(n,o,r):p(n,o))||r);return T>3&&r&&Object.defineProperty(n,o,r),r},d;let u=d=class extends U{static get stripTemplate(){return ee}static get overflowTemplate(){return te}get classes(){return{root:{"ui5-tc__separator":!0}}}get isSeparator(){return!0}getTabInStripDomRef(){return this._getElementInStrip?this._getElementInStrip():null}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}get stripPresentation(){return y(d.stripTemplate,this)}get overflowPresentation(){return y(d.overflowTemplate,this)}};u=d=oe([X({tag:"ui5-tab-separator",renderer:Y})],u);u.define();H.registerTabStyles(ae);H.registerStaticAreaTabStyles(ne);const re=u,se=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),m=Z("ui5-tab-separator",[],[],[],[],()=>Q(()=>Promise.resolve().then(()=>se),void 0,import.meta.url));m.displayName="TabSeparator";try{m.displayName="TabSeparator",m.__docgenInfo={description:'The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TabContainer" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TabSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ie="activities",L="M480 32q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T480 480H32q-14 0-23-9.5T0 448V64q0-14 9-23t23-9h448zm0 32H32v384h448V64zM117 252l-53-53 17-19 36 36 71-88 18 17zm0 164l-53-54 17-18 36 36 71-89 18 18zm283-96q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-160q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",ce=!0,le="SAP-icons-v4",me="@ui5/webcomponents-icons";f(ie,{pathData:L,ltr:ce,collection:le,packageName:me});const be="activities",M="M179 251q9-9 20.5-9t19.5 9q8 8 8 19.5t-8 19.5L105 404q-8 9-19.5 9T66 404L9 347q-9-8-9-19.5T9 307q8-8 19.5-8t19.5 8l37 37zm0-171q9-9 20.5-9t19.5 9q8 8 8 19.5t-8 20.5L105 233q-8 9-19.5 9T66 233L9 177q-9-9-9-20.5T9 137q8-9 19.5-9t19.5 9l37 37zm134 105q-28 0-28-28 0-13 7.5-21t20.5-8h171q13 0 20.5 8t7.5 21q0 28-28 28H313zm171 114q28 0 28 28 0 13-7.5 21t-20.5 8H313q-13 0-20.5-8t-7.5-21q0-28 28-28h171z",Te=!0,pe="SAP-icons-v5",de="@ui5/webcomponents-icons";f(be,{pathData:M,ltr:Te,collection:pe,packageName:de});P();const E="activities",ue="menu",W="M32 64q14 0 23 9.5T64 96q0 14-9 23t-23 9q-13 0-22.5-9T0 96q0-13 9.5-22.5T32 64zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 256q0-13 9.5-22.5T32 224zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 416q0-13 9.5-22.5T32 384zm128-255q-13 0-22.5-9.5T128 97q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 256q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 415q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160z",he=!1,fe="SAP-icons-v4",ge="@ui5/webcomponents-icons";f(ue,{pathData:W,ltr:he,collection:fe,packageName:ge});const xe="menu",A="M481 384q14 0 23 9t9 23-9 23-23 9H194q-15 0-23.5-9t-8.5-23 8.5-23 23.5-9h287zM194 129q-15 0-23.5-9T162 97t8.5-23 23.5-9h287q14 0 23 9t9 23-9 23-23 9H194zM50 368q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm0-159q20 0 34 13.5T98 256t-14 34-34 14-34-14-14-34 14-33.5T50 209zm0-160q20 0 34 14t14 34-14 34-34 14-34-14T2 97t14-34 34-14zm431 175q14 0 23 9t9 23q0 15-9 23.5t-23 8.5H194q-32 0-32-32 0-14 8.5-23t23.5-9h287z",_e=!1,qe="SAP-icons-v5",ye="@ui5/webcomponents-icons";f(xe,{pathData:A,ltr:_e,collection:qe,packageName:ye});P();const B="menu",Se={title:"Layouts & Floorplans / TabContainer",component:g,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{tabLayout:K.Standard,contentBackgroundDesign:S.Solid,headerBackgroundDesign:S.Solid}},i={render:a=>e.jsxs(g,{...a,children:[e.jsx(t,{text:"Tab One",icon:B,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(t,{text:"Tab Two",icon:E,additionalText:"20",children:"Content Tab 2"}),e.jsx(t,{text:"Tab Three",icon:V,children:"Content Tab 3"}),e.jsx(t,{text:"Tab Four",icon:G,children:"Content Tab 4"}),e.jsx(t,{text:"Tab Five",icon:J,children:"Content Tab 5"})]})},c={name:"with TabSeparator",render:a=>e.jsxs(g,{...a,children:[e.jsx(t,{text:"Tab One",icon:B,selected:!0,additionalText:"5",children:"Content Tab 1"}),e.jsx(m,{}),e.jsx(t,{text:"Tab Two",icon:E,additionalText:"20",children:"Content Tab 2"})]})},l={name:"with nested tabs",render:a=>e.jsxs(g,{...a,children:[e.jsx(t,{text:"Tab One",selected:!0,subTabs:e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Tab 1.1"}),e.jsx(t,{text:"Tab 1.2"}),e.jsx(t,{text:"Tab 1.3"})]}),children:e.jsx("div",{style:{display:"none"}})}),e.jsx(m,{}),e.jsx(t,{text:"Tab Two"}),e.jsx(t,{text:"Tab Three",subTabs:e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Tab 3.1"}),e.jsx(t,{text:"Tab 3.2"}),e.jsx(t,{text:"Tab 3.3"})]})})]})};var C,$,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" icon={menuIcon} selected additionalText="5">
          Content Tab 1
        </Tab>
        <Tab text="Tab Two" icon={activitiesIcon} additionalText="20">
          Content Tab 2
        </Tab>
        <Tab text="Tab Three" icon={addIcon}>
          Content Tab 3
        </Tab>
        <Tab text="Tab Four" icon={employeeIcon}>
          Content Tab 4
        </Tab>
        <Tab text="Tab Five" icon={settingsIcon}>
          Content Tab 5
        </Tab>
      </TabContainer>;
  }
}`,...(j=($=i.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var D,z,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'with TabSeparator',
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" icon={menuIcon} selected additionalText="5">
          Content Tab 1
        </Tab>
        <TabSeparator />
        <Tab text="Tab Two" icon={activitiesIcon} additionalText="20">
          Content Tab 2
        </Tab>
      </TabContainer>;
  }
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var N,k,O;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'with nested tabs',
  render: args => {
    return <TabContainer {...args}>
        <Tab text="Tab One" selected subTabs={<>
              <Tab text="Tab 1.1" />
              <Tab text="Tab 1.2" />
              <Tab text="Tab 1.3" />
            </>}>
          <div style={{
          display: 'none'
        }} />
        </Tab>
        <TabSeparator />
        <Tab text="Tab Two" />
        <Tab text="Tab Three" subTabs={<>
              <Tab text="Tab 3.1" />
              <Tab text="Tab 3.2" />
              <Tab text="Tab 3.3" />
            </>} />
      </TabContainer>;
  }
}`,...(O=(k=l.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const we=["Default","WithTabSeparator","WithNestedTabs"],Re=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithNestedTabs:l,WithTabSeparator:c,__namedExportsOrder:we,default:Se},Symbol.toStringTag,{value:"Module"}));export{Re as C,i as D,m as T,c as W,l as a};
//# sourceMappingURL=TabContainer.stories-69d2b7c9.js.map
