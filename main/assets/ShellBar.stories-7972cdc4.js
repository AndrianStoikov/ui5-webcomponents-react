import{j as e}from"./jsx-runtime-5926aa06.js";import{i as y}from"./Person-4ad4078c.js";import{a as _}from"./add-31d4a05c.js";import{s as S}from"./search-139b49f2.js";import{S as I}from"./index-3e6c9716.js";import{A as w}from"./index-fdbfa0fc.js";import{_ as x}from"./iframe-296980c2.js";import{U as v}from"./UI5Element-74c2a827.js";import{p as h,c as j,w as B}from"./withWebComponent-d61dcbbc.js";import{e as C}from"./Icon-a2964213.js";import{S as d}from"./index-c62dd56d.js";import{I as D}from"./index-07952fda.js";import{I as T}from"./index-1e90c6eb.js";var p=globalThis&&globalThis.__decorate||function(n,t,a,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,a):i,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,a,i);else for(var u=n.length-1;u>=0;u--)(m=n[u])&&(o=(s<3?m(o):s>3?m(t,a,o):m(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o};let r=class extends v{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}fireClickEvent(t){return this.fireEvent("click",{targetRef:t.target},!0)}};p([h()],r.prototype,"icon",void 0);p([h()],r.prototype,"text",void 0);p([h()],r.prototype,"count",void 0);r=p([j("ui5-shellbar-item"),C("click",{detail:{targetRef:{type:HTMLElement}}})],r);r.define();const P=r,E=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),c=B("ui5-shellbar-item",["count","icon","text"],[],[],["click"],()=>x(()=>Promise.resolve().then(()=>E),void 0,import.meta.url));c.displayName="ShellBarItem";try{c.displayName="ShellBarItem",c.__docgenInfo={description:'The `ShellBarItem` represents a custom item, that might be added to the `ShellBar`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ShellBar" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"ShellBarItem",props:{onClick:{defaultValue:null,description:"Fired, when the item is pressed.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ShellBarItemDomRef>"}},count:{defaultValue:null,description:"Defines the count displayed in the top-right corner.",name:"count",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Defines the name of the item's icon.",name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Defines the item text.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Layouts & Floorplans / ShellBar",component:I,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(w,{children:e.jsx("img",{src:y})}),menuItems:e.jsxs(e.Fragment,{children:[e.jsx(d,{"data-key":"1",children:"Menu Item 1"}),e.jsx(d,{"data-key":"2",children:"Menu Item 2"}),e.jsx(d,{"data-key":"3",children:"Menu Item 3"})]}),searchField:e.jsx(D,{showClearIcon:!0,icon:e.jsx(T,{name:S,interactive:!0})}),notificationsCount:"10",primaryTitle:"Shell Bar",secondaryTitle:"Fiori 3 Shell Bar",showCoPilot:!0,showNotifications:!0,showProductSwitch:!0,children:e.jsx(c,{count:"3",text:"ShellBarItem",icon:_})}},l={};var f,g,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const N=["Default"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:N,default:k},Symbol.toStringTag,{value:"Module"}));export{J as C,l as D,c as S};
//# sourceMappingURL=ShellBar.stories-7972cdc4.js.map
