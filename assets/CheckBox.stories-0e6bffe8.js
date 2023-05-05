import{M as h,C as d,f as c,a as u}from"./chunk-PCJTTTQV-fb15a43a.js";import{C as t}from"./index-6bf510e8.js";import{V as r}from"./ValueState-ab6838cc.js";import{d as k}from"./DomRefTable.module-f1a950bf.js";import{D as S}from"./DocsHeader-da528f0d.js";import{F as g}from"./Footer-b8f6a740.js";import{j as e}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u as l}from"./index-bda0bad7.js";import"./iframe-e3cf4f1d.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./CheckBox-414bc569.js";import"./Device-208919c6.js";import"./UI5Element-1225b968.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-c5c4720b.js";import"./Icons-524f4c51.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./accept-198406be.js";import"./Label-326b72d8.js";import"./WrappingType-b81e595a.js";import"./class-map-519e9c6d.js";import"./i18n-defaults-254d6b69.js";import"./react-jss.esm-022ab528.js";import"./index-f37b2bc9.js";import"./decline-d268166e.js";import"./i18n-defaults-80781f7e.js";import"./information-b4bc7d32.js";import"./Button-f2c9b4f8.js";import"./MarkedEvents-b83081e9.js";import"./index-b9e92427.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-3350118a.js";import"./TableOfContent-6820eb17.js";import"./index-5f6e0901.js";import"./Link-c4094736.js";import"./index-ab6988b1.js";import"./index-459b4db3.js";import"./Popover-abd2c401.js";import"./Integer-f7f172c9.js";import"./PopupUtils-e5ce8d68.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-02b533b0.js";import"./FocusableElements-fe6ae4c8.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-401cf542.js";import"./ResizeHandler-a7d132d0.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";const y='## Usage\n\nYou can define the checkbox text with via the `text` property. If the text exceeds the available width, it is truncated by default. In case you prefer text to wrap, set the `wrappingType` property to "Normal". The touchable area for toggling the `CheckBox` ends where the text ends.\n\nYou can disable the `CheckBox` by setting the `disabled` property to `true`, or use the `CheckBox` in read-only mode by setting the `readonly` property to `true`.\n\n## CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `CheckBox` exposes the following CSS Shadow Parts:\n\n- root - Used to style the outermost wrapper of the `CheckBox`\n\n## Keyboard Handling\n\nThe user can use the following keyboard shortcuts to toggle the checked state of the `CheckBox`.\n\n- \\[SPACE, ENTER\\] - Toggles between different states: checked, not checked.\n';function j(o={}){const{wrapper:s}=Object.assign({},l(),o.components);return s?e.jsx(s,{...o,children:e.jsx(i,{})}):i();function i(){const a=Object.assign({h2:"h2",h1:"h1"},l(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Inputs / CheckBox",component:t,args:{valueState:r.None,text:"CheckBox"}}),`
`,e.jsx(S,{}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"example",children:"Example"}),`
`,e.jsx(d,{children:e.jsx(c,{name:"Default",children:m=>e.jsx(t,{...m})})}),`
`,e.jsx(a.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(k,{story:"Default"}),`
`,e.jsx(u,{children:y}),`
`,e.jsx(a.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"checkbox-states",children:"CheckBox states"}),`
`,e.jsx(d,{children:e.jsx(c,{name:"CheckBox states",children:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:r.Error}),e.jsx(t,{text:"Warning",valueState:r.Warning}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]})})}),`
`,e.jsx(g,{})]})}}const p=o=>e.jsx(t,{...o});p.storyName="Default";p.parameters={storySource:{source:`args => {
  return <CheckBox {...args} />;
}`}};const x=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:r.Error}),e.jsx(t,{text:"Warning",valueState:r.Warning}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]});x.storyName="CheckBox states";x.parameters={storySource:{source:`() => {
  return <>
          <CheckBox text="Error" valueState={ValueState.Error} />
          <CheckBox text="Warning" valueState={ValueState.Warning} />
          <CheckBox text="Disabled" disabled checked />
          <CheckBox text="Readonly" readonly checked />
          <CheckBox text="Error disabled" disabled valueState={ValueState.Error} checked />
          <CheckBox text="Warning disabled " disabled valueState={ValueState.Warning} checked />
          <CheckBox text="Error readonly" readonly valueState={ValueState.Error} checked />
          <CheckBox text="Warning readonly" readonly valueState={ValueState.Warning} checked />
        </>;
}`}};const n={title:"Inputs / CheckBox",component:t,args:{valueState:r.None,text:"CheckBox"},tags:["stories-mdx"],includeStories:["defaultStory","checkBoxStates"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:j};const Te=["defaultStory","checkBoxStates"];export{Te as __namedExportsOrder,x as checkBoxStates,n as default,p as defaultStory};
//# sourceMappingURL=CheckBox.stories-0e6bffe8.js.map
