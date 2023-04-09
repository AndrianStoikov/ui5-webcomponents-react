import{a as s,j as t,F as _}from"./jsx-runtime-670450c2.js";import{H as v,a as N}from"./chunk-PCJTTTQV-876def71.js";import{r as w}from"./index-f1f749bf.js";function l(r){return r?r.map((i,c,a)=>{let m=i.name;return a.length>1&&c+1!==a.length&&(m+=", "),m}):""}const d=({api:r})=>r.map(i=>{var m,u,b,g,y,h,k;const{signatures:c}=i,{parameters:a}=c[0];return s(w.Fragment,{children:[t(v,{children:i.name}),s("code",{children:[i.name,"(",a==null?void 0:a.map(e=>{var n,o;return`${e.name}:${e.type.name}${(o=(n=e.type)==null?void 0:n.typeArguments)!=null&&o.length?`<${l(e.type.typeArguments)}>`:""}`}).join(", "),"):",(u=(m=c[0])==null?void 0:m.type)==null?void 0:u.name,`<${l((b=c[0].type)==null?void 0:b.typeArguments)}>`]}),s("div",{children:[t(N,{children:(g=c[0])==null?void 0:g.comment.summary.reduce((e,n)=>`${e}${n.text.replaceAll(`
`,"<br>")}`,"")}),(k=(h=(y=c[0])==null?void 0:y.comment)==null?void 0:h.blockTags)==null?void 0:k.filter(e=>e.tag==="@example").map((e,n)=>s(w.Fragment,{children:[n===0&&t("b",{children:"Example"}),t(N,{children:e.content.reduce((o,p)=>`${o}${p.text}`,"")})]},`${e.tag}${n}`)),(a==null?void 0:a.length)&&s(_,{children:[t("b",{children:"Parameters"}),s("table",{children:[t("thead",{children:s("tr",{children:[t("td",{children:"Name"}),t("td",{children:"Type"}),t("td",{children:"Description"})]})}),t("tbody",{children:a==null?void 0:a.map(e=>{var n,o,p,f,x;return s("tr",{children:[s("td",{children:[e.name,((n=e.flags)==null?void 0:n.isOptional)&&"?"]}),t("td",{children:s("code",{children:[(o=e.type)==null?void 0:o.name,((p=e.type)==null?void 0:p.typeArguments)&&`<${((f=e.type)==null?void 0:f.typeArguments)&&l(e.type.typeArguments)}>`]})}),t("td",{children:(x=e.comment)==null?void 0:x.summary.reduce((C,q)=>`${C}${q.text.replaceAll(`
`,"<br>")}`,"")})]},e.name)})})]})]}),s("p",{children:[t("b",{children:"Source:"})," ",t("a",{href:i.sources[0].url,children:`${i.sources[0].fileName}:${i.sources[0].line}`})]})]}),t("br",{}),t("br",{})]},i.name)});d.displayName="CommandsAndQueries";try{d.displayName="CommandsAndQueries",d.__docgenInfo={description:"",displayName:"CommandsAndQueries",props:{api:{defaultValue:null,description:"",name:"api",required:!0,type:{name:"CommandsAndQueries[]"}}}}}catch{}const A=0,T="ui5-webcomponents-react",F="project",P=1,S={},U=[{id:28,name:"src",variant:"declaration",kind:2,flags:{},sources:[{fileName:"index.ts",line:1,character:0,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/index.ts#L1"}]},{id:1,name:"src/commands",variant:"declaration",kind:2,flags:{},children:[{id:2,name:"Cypress",variant:"declaration",kind:4,flags:{},children:[{id:3,name:"Chainable",variant:"declaration",kind:256,flags:{},children:[{id:25,name:"clickUi5ListItemByText",variant:"declaration",kind:2048,flags:{},sources:[{fileName:"commands.ts",line:61,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L61"}],signatures:[{id:26,name:"clickUi5ListItemByText",variant:"signature",kind:4096,flags:{},comment:{summary:[{kind:"text",text:"Click on a list item of the "},{kind:"code",text:"`List`"},{kind:"text",text:" component by text."}],blockTags:[{tag:"@example",content:[{kind:"code",text:'```ts\ncy.clickUi5ListItemByText("List Item")\n```'}]}]},sources:[{fileName:"commands.ts",line:61,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L61"}],parameters:[{id:27,name:"text",variant:"param",kind:32768,flags:{},comment:{summary:[{kind:"text",text:"The text of the list item that should be clicked."}]},type:{type:"intrinsic",name:"string"}}],type:{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.Chainable"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.dom.d.ts",qualifiedName:"Element"},name:"Element",package:"typescript"}],name:"Chainable",package:"cypress",qualifiedName:"Cypress.Chainable"}}]},{id:21,name:"clickUi5RadioButton",variant:"declaration",kind:2048,flags:{},sources:[{fileName:"commands.ts",line:48,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L48"}],signatures:[{id:22,name:"clickUi5RadioButton",variant:"signature",kind:4096,flags:{},comment:{summary:[{kind:"text",text:"Click on a "},{kind:"code",text:"`ui5-radio-button`"}],blockTags:[{tag:"@example",content:[{kind:"code",text:"```ts\ncy.get('[ui5-radio-button]').clickUi5RadioButton();\n```"}]}]},sources:[{fileName:"commands.ts",line:48,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L48"}],type:{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.Chainable"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.dom.d.ts",qualifiedName:"Element"},name:"Element",package:"typescript"}],name:"Chainable",package:"cypress",qualifiedName:"Cypress.Chainable"}}]},{id:23,name:"closeUi5PopupWithEsc",variant:"declaration",kind:2048,flags:{},sources:[{fileName:"commands.ts",line:54,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L54"}],signatures:[{id:24,name:"closeUi5PopupWithEsc",variant:"signature",kind:4096,flags:{},comment:{summary:[{kind:"text",text:"Close ui5-webcomponents popups like "},{kind:"code",text:"`ui5-dialog`"},{kind:"text",text:" or "},{kind:"code",text:"`ui5-popover`"},{kind:"text",text:' by pressing the "Escape" key.'}],blockTags:[{tag:"@example",content:[{kind:"code",text:"```ts\ncy.closeUi5PopupWithEsc()\n```"}]}]},sources:[{fileName:"commands.ts",line:54,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L54"}],type:{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.Chainable"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.dom.d.ts",qualifiedName:"Element"},name:"Element",package:"typescript"}],name:"Chainable",package:"cypress",qualifiedName:"Cypress.Chainable"}}]},{id:17,name:"toggleUi5Checkbox",variant:"declaration",kind:2048,flags:{},sources:[{fileName:"commands.ts",line:36,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L36"}],signatures:[{id:18,name:"toggleUi5Checkbox",variant:"signature",kind:4096,flags:{},comment:{summary:[{kind:"text",text:"Toggles the state of a "},{kind:"code",text:"`ui5-checkbox`"},{kind:"text",text:"."}],blockTags:[{tag:"@example",content:[{kind:"code",text:"```ts\ncy.get('[ui5-checkbox]').toggleUi5Checkbox();\n```"}]}]},sources:[{fileName:"commands.ts",line:36,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L36"}],type:{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.Chainable"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.dom.d.ts",qualifiedName:"Element"},name:"Element",package:"typescript"}],name:"Chainable",package:"cypress",qualifiedName:"Cypress.Chainable"}}]},{id:19,name:"toggleUi5Switch",variant:"declaration",kind:2048,flags:{},sources:[{fileName:"commands.ts",line:42,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L42"}],signatures:[{id:20,name:"toggleUi5Switch",variant:"signature",kind:4096,flags:{},comment:{summary:[{kind:"text",text:"Toggles the state of a "},{kind:"code",text:"`ui5-switch`"}],blockTags:[{tag:"@example",content:[{kind:"code",text:"```ts\ncy.get('[ui5-switch]').toggleUi5Switch();\n```"}]}]},sources:[{fileName:"commands.ts",line:42,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L42"}],type:{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.Chainable"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.dom.d.ts",qualifiedName:"Element"},name:"Element",package:"typescript"}],name:"Chainable",package:"cypress",qualifiedName:"Cypress.Chainable"}}]},{id:4,name:"typeIntoUi5Input",variant:"declaration",kind:2048,flags:{},sources:[{fileName:"commands.ts",line:11,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L11"}],signatures:[{id:5,name:"typeIntoUi5Input",variant:"signature",kind:4096,flags:{},comment:{summary:[{kind:"text",text:"Types a value into a ui5-webcomponent that offers a typeable input field."}],blockTags:[{tag:"@example",content:[{kind:"code",text:"```ts\ncy.get('[ui5-input]').typeIntoUi5Input('Hello World');\n```"}]}]},sources:[{fileName:"commands.ts",line:11,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L11"}],parameters:[{id:6,name:"text",variant:"param",kind:32768,flags:{},comment:{summary:[{kind:"text",text:"Text that will be typed into the input."}]},type:{type:"intrinsic",name:"string"}},{id:7,name:"options",variant:"param",kind:32768,flags:{isOptional:!0},type:{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.es5.d.ts",qualifiedName:"Partial"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.TypeOptions"},name:"TypeOptions",package:"cypress",qualifiedName:"Cypress.TypeOptions"}],name:"Partial",package:"typescript"}}],type:{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.Chainable"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.dom.d.ts",qualifiedName:"Element"},name:"Element",package:"typescript"}],name:"Chainable",package:"cypress",qualifiedName:"Cypress.Chainable"}}]},{id:8,name:"typeIntoUi5InputWithDelay",variant:"declaration",kind:2048,flags:{},sources:[{fileName:"commands.ts",line:23,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L23"}],signatures:[{id:9,name:"typeIntoUi5InputWithDelay",variant:"signature",kind:4096,flags:{},comment:{summary:[{kind:"text",text:`Types a value with a delay into an ui5-webcomponent that offers a typeable input field.

__Note:__ Use this command if you render a component that should show suggestions while typing (e.g. `},{kind:"code",text:"`ComboBox`"},{kind:"text",text:`) but the corresponding popover does not open.
This command waits for the appropriate delay (in ms), giving the web component time to define all necessary customElements and boot web components.
The delay time can vary from environment to environment.`}],blockTags:[{tag:"@example",content:[{kind:"code",text:"```ts\ncy.get('[ui5-combobox]').typeIntoUi5InputWithDelay('Hello World', 1000);\n```"}]}]},sources:[{fileName:"commands.ts",line:23,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L23"}],parameters:[{id:10,name:"text",variant:"param",kind:32768,flags:{},comment:{summary:[{kind:"text",text:"Text that will be typed into the input."}]},type:{type:"intrinsic",name:"string"}},{id:11,name:"delay",variant:"param",kind:32768,flags:{isOptional:!0},comment:{summary:[{kind:"text",text:"Delay in ms to wait for the web-component to be ready. Default: 500"}]},type:{type:"intrinsic",name:"number"}},{id:12,name:"options",variant:"param",kind:32768,flags:{isOptional:!0},type:{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.es5.d.ts",qualifiedName:"Partial"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.TypeOptions"},name:"TypeOptions",package:"cypress",qualifiedName:"Cypress.TypeOptions"}],name:"Partial",package:"typescript"}}],type:{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.Chainable"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.dom.d.ts",qualifiedName:"Element"},name:"Element",package:"typescript"}],name:"Chainable",package:"cypress",qualifiedName:"Cypress.Chainable"}}]},{id:13,name:"typeIntoUi5TextArea",variant:"declaration",kind:2048,flags:{},sources:[{fileName:"commands.ts",line:30,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L30"}],signatures:[{id:14,name:"typeIntoUi5TextArea",variant:"signature",kind:4096,flags:{},comment:{summary:[{kind:"text",text:"Types a value into "},{kind:"code",text:"`ui5-textarea`"},{kind:"text",text:"."}],blockTags:[{tag:"@example",content:[{kind:"code",text:"```ts\ncy.get('[ui5-textarea]').typeIntoUi5TextArea('Hello World');\n```"}]}]},sources:[{fileName:"commands.ts",line:30,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L30"}],parameters:[{id:15,name:"text",variant:"param",kind:32768,flags:{},comment:{summary:[{kind:"text",text:"Text that will be typed into the text-area."}]},type:{type:"intrinsic",name:"string"}},{id:16,name:"options",variant:"param",kind:32768,flags:{isOptional:!0},type:{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.es5.d.ts",qualifiedName:"Partial"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.TypeOptions"},name:"TypeOptions",package:"cypress",qualifiedName:"Cypress.TypeOptions"}],name:"Partial",package:"typescript"}}],type:{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.Chainable"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.dom.d.ts",qualifiedName:"Element"},name:"Element",package:"typescript"}],name:"Chainable",package:"cypress",qualifiedName:"Cypress.Chainable"}}]}],groups:[{title:"Methods",children:[25,21,23,17,19,4,8,13]}],sources:[{fileName:"commands.ts",line:4,character:14,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L4"}]}],groups:[{title:"Interfaces",children:[3]}],sources:[{fileName:"commands.ts",line:3,character:12,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L3"}]}],groups:[{title:"Namespaces",children:[2]}],sources:[{fileName:"commands.ts",line:1,character:0,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/commands.ts#L1"}]},{id:29,name:"src/queries",variant:"declaration",kind:2,flags:{},children:[{id:30,name:"Cypress",variant:"declaration",kind:4,flags:{},children:[{id:31,name:"Chainable",variant:"declaration",kind:256,flags:{},children:[{id:32,name:"findUi5TabByText",variant:"declaration",kind:2048,flags:{},sources:[{fileName:"queries.ts",line:15,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/queries.ts#L15"}],signatures:[{id:33,name:"findUi5TabByText",variant:"signature",kind:4096,flags:{},comment:{summary:[{kind:"text",text:"Returns the tab of the "},{kind:"code",text:"`ui5-tabcontainer`"},{kind:"text",text:` by its text.

__Note:__ Has to be chained to a `},{kind:"code",text:"`ui5-tabcontainer`"},{kind:"text",text:`.
__Note:__ This will not work for sub-tabs.`}],blockTags:[{tag:"@example",content:[{kind:"code",text:"```ts\ncy.get('[ui5-tab-container]').findUi5TabByText('Tab 1');\n```"}]}]},sources:[{fileName:"queries.ts",line:15,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/queries.ts#L15"}],parameters:[{id:34,name:"text",variant:"param",kind:32768,flags:{},comment:{summary:[{kind:"text",text:"The text of the tab that should be queried."}]},type:{type:"intrinsic",name:"string"}}],type:{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.Chainable"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.dom.d.ts",qualifiedName:"Element"},name:"Element",package:"typescript"}],name:"Chainable",package:"cypress",qualifiedName:"Cypress.Chainable"}}]},{id:35,name:"findUi5TabOpenPopoverButtonByText",variant:"declaration",kind:2048,flags:{},sources:[{fileName:"queries.ts",line:26,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/queries.ts#L26"}],signatures:[{id:36,name:"findUi5TabOpenPopoverButtonByText",variant:"signature",kind:4096,flags:{},comment:{summary:[{kind:"text",text:`Returns the open-popover button for sub-tabs by its text.

__Note:__ Has to be chained to a `},{kind:"code",text:"`ui5-tabcontainer`"},{kind:"text",text:`.
__Note:__ The tab only renders a button fur sub-tabs if the tab itself has content, otherwise the whole tab is responsible for opening the popover.`}],blockTags:[{tag:"@example",content:[{kind:"code",text:"```ts\ncy.get('[ui5-tab-container]').findUi5TabOpenPopoverButtonByText('Tab 1.1');\n```"}]}]},sources:[{fileName:"queries.ts",line:26,character:6,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/queries.ts#L26"}],parameters:[{id:37,name:"text",variant:"param",kind:32768,flags:{},comment:{summary:[{kind:"text",text:"The text of the sub-tab that should be queried."}]},type:{type:"intrinsic",name:"string"}},{id:38,name:"options",variant:"param",kind:32768,flags:{isOptional:!0},type:{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.es5.d.ts",qualifiedName:"Partial"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.ClickOptions"},name:"ClickOptions",package:"cypress",qualifiedName:"Cypress.ClickOptions"}],name:"Partial",package:"typescript"}}],type:{type:"reference",target:{sourceFileName:"node_modules/cypress/types/cypress.d.ts",qualifiedName:"Cypress.Chainable"},typeArguments:[{type:"reference",target:{sourceFileName:"node_modules/typescript/lib/lib.dom.d.ts",qualifiedName:"Element"},name:"Element",package:"typescript"}],name:"Chainable",package:"cypress",qualifiedName:"Cypress.Chainable"}}]}],groups:[{title:"Methods",children:[32,35]}],sources:[{fileName:"queries.ts",line:4,character:14,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/queries.ts#L4"}]}],groups:[{title:"Interfaces",children:[31]}],sources:[{fileName:"queries.ts",line:3,character:12,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/queries.ts#L3"}]}],groups:[{title:"Namespaces",children:[30]}],sources:[{fileName:"queries.ts",line:1,character:0,url:"https://github.com/SAP/ui5-webcomponents-react/blob/7acf030/packages/cypress-commands/src/queries.ts#L1"}]}],I=[{title:"Modules",children:[28,1,29]}],B="ui5-webcomponents-react",L=[{kind:"text",text:`<a name="top"></a>

<p align="center">
  <img src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo-Sticker.png" alt="UI5 Web Components for React Logo" />
</p>
<p align="center">
  <a href="https://github.com/SAP/ui5-webcomponents-react/actions?query=workflow:%22build%22" target="_blank">
    <img alt="Build Status" src="https://github.com/SAP/ui5-webcomponents-react/workflows/build/badge.svg">
  </a>
  <a href='https://coveralls.io/github/SAP/ui5-webcomponents-react'>
    <img src='https://coveralls.io/repos/github/SAP/ui5-webcomponents-react/badge.svg' alt='Coverage Status' />
  </a>
  <a href="https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/" target="_blank">
      <img alt="Slack Badge" src="https://badgen.net/badge/slack/Join OpenUI5 Slack workspace/blue?icon=slack">
    </a>
  <a href="https://openui5.slack.com/archives/CSQEJ2J04" target="_blank">
    <img alt="Slack Badge" src="https://badgen.net/badge/slack/webcomponents-react/orange?icon=slack">
  </a>
  <a href="https://github.com/prettier/prettier" target="_blank">
    <img alt="code style: prettier" src="https://badgen.net/badge/code%20style/prettier?color=pink"> 
  </a>
  <a href="https://lerna.js.org" target="_blank">
  <img alt="lerna" src="https://badgen.net/badge/maintained%20with/lerna?color=purple">
  </a>
  <a href="https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-react" target="_blank">
    <img alt="REUSE Status" src="https://api.reuse.software/badge/github.com/SAP/ui5-webcomponents-react"/>
  </a>
</p>

`},{kind:"code",text:"`ui5-webcomponents-react`"},{kind:"text",text:` is providing a Fiori-compliant React implementation by leveraging the [UI5 Web Components](https://github.com/SAP/ui5-webcomponents).

## Resources

You can find our documentation under the following links:

- [Stable Release Documentation](https://sap.github.io/ui5-webcomponents-react/)
- [Next Release Documentation](https://sap.github.io/ui5-webcomponents-react/main/)
- [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page)

## Package Overview

- [@ui5/webcomponents-react](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/main) - Fiori 3 Components<br/>
  [![](https://badgen.net/npm/v/@ui5/webcomponents-react?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react)
  [![npm bundle size (scoped)](https://badgen.net/bundlephobia/minzip/@ui5/webcomponents-react)](https://bundlephobia.com/result?p=@ui5/webcomponents-react)

- [@ui5/webcomponents-react-charts](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/charts) - Fiori Charts<br />
  [![](https://badgen.net/npm/v/@ui5/webcomponents-react-charts?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react-charts)
  [![npm bundle size (scoped)](https://badgen.net/bundlephobia/minzip/@ui5/webcomponents-react-charts)](https://bundlephobia.com/result?p=@ui5/webcomponents-react-charts)

- [@ui5/webcomponents-react-base](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/base) - Utils<br />
  [![](https://badgen.net/npm/v/@ui5/webcomponents-react-base?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react-base)
  [![npm bundle size (scoped)](https://badgen.net/bundlephobia/minzip/@ui5/webcomponents-react-base)](https://bundlephobia.com/result?p=@ui5/webcomponents-react-base)

- [@ui5/cra-template-webcomponents-react](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/cra-template) - Template for `},{kind:"code",text:"`create-react-app`"},{kind:"text",text:` <br/>
  [![](https://badgen.net/npm/v/@ui5/cra-template-webcomponents-react?icon=npm)](https://www.npmjs.com/package/@ui5/cra-template-webcomponents-react)

- [@ui5/cra-template-webcomponents-react-seed](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/cra-template-seed) - Seed for `},{kind:"code",text:"`create-react-app`"},{kind:"text",text:` <br/>
  [![](https://badgen.net/npm/v/@ui5/cra-template-webcomponents-react-seed?icon=npm)](https://www.npmjs.com/package/@ui5/cra-template-webcomponents-react-seed)

<!-- *********************************************************************** -->

<a name="requirements"></a>

## Requirements

- [React](https://www.npmjs.com/package/react) and [React-DOM](https://www.npmjs.com/package/react-dom) (**16.14.0 or higher**)
- [Node.js](https://nodejs.org/) (**version 14 or higher** ⚠️)

<!-- *********************************************************************** -->

<a name="download"></a>

## Download and Installation

To consume `},{kind:"code",text:"`ui5-webcomponents-react`"},{kind:"text",text:`, you need to install the npm module and required peer dependencies:

`},{kind:"code",text:"```sh\nnpm install @ui5/webcomponents-react @ui5/webcomponents @ui5/webcomponents-fiori\n```"},{kind:"text",text:`

<!-- *********************************************************************** -->

## Getting Started

### Tutorial

You are new to UI5 Web Components for React and don't know where to start?<br />
Then take a look at our [Tutorial Mission](https://developers.sap.com/mission.react-spa.html) at “SAP Developers”!
There you get a first glimpse at how easy it is to create an Application with UI5 Web Components for React.<br />
In about an hour you will create a business dashboard from scratch and get familiar with some React basics in case you don't know them already.

### Creating a new React app

You can create a new react app by using [create-react-app](https://facebook.github.io/create-react-app/) with our template.
This template is installing all required dependencies for you and is setting up the `},{kind:"code",text:"`App.js`"},{kind:"text",text:` file for you:

`},{kind:"code",text:"```sh\nnpx create-react-app my-app --template @ui5/webcomponents-react\n```"},{kind:"text",text:`

### Creating a new React app based on our Seed

You can create a new react app by using [create-react-app](https://facebook.github.io/create-react-app/) based on our seed.
This template delivers several out of the box components, scripts and configurations.
For more info, check the [seed documentation](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/cra-template-seed).

`},{kind:"code",text:"```sh\nnpx create-react-app my-app --template @ui5/webcomponents-react-seed\nnpm run start\n```"},{kind:"text",text:`

### Add `},{kind:"code",text:"`@ui5/webcomponents-react`"},{kind:"text",text:` to an existing app

First of all, you need to add the `},{kind:"code",text:"`@ui5/webcomponents-react`"},{kind:"text",text:` dependency to your project. Please also keep in mind installing the required peer dependencies:

`},{kind:"code",text:"```sh\nnpm install @ui5/webcomponents @ui5/webcomponents-react @ui5/webcomponents-fiori\n```"},{kind:"text",text:`

In order to use `},{kind:"code",text:"`@ui5/webcomponents-react`"},{kind:"text",text:" you have to wrap your application's root component into the "},{kind:"code",text:"`ThemeProvider`"},{kind:"text",text:`.<br/>
You will find this component most likely in `},{kind:"code",text:"`src/index.js`"},{kind:"text",text:`:

`},{kind:"code",text:`\`\`\`jsx
import { ThemeProvider } from '@ui5/webcomponents-react';
...
const root = createRoot(document.getElementById("root"));
root.render(
        <ThemeProvider>
          <App />
        </ThemeProvider>
);
\`\`\``},{kind:"text",text:`

Then you are ready to use `},{kind:"code",text:"`@ui5/webcomponents-react`"},{kind:"text",text:` and you can import the desired component(s) in your app:<br />
For example, to use the `},{kind:"code",text:"`Button`"},{kind:"text",text:` component you need to import it:

`},{kind:"code",text:"```jsx\nimport { Button } from '@ui5/webcomponents-react'; // loads ui5-button wrapped in a ui5-webcomponents-react component\n```"},{kind:"text",text:`

Then, you can use the Button in your app:

`},{kind:"code",text:"```jsx\n<Button onClick={() => alert('Hello World!')}>Hello world!</Button>\n```"},{kind:"text",text:`

For Browser Support and the configuration of the UI5 Web Components, please take a look at the
[Browser Support](https://github.com/SAP/ui5-webcomponents#browser-support) and the
[Configure](https://github.com/SAP/ui5-webcomponents#browser-support) sections of the
[UI5 Web Components Readme](https://github.com/SAP/ui5-webcomponents#ui5-web-components).

### Browser Support

UI5 Web Components are supported by all major modern browsers, including their mobile versions.

<!-- *********************************************************************** -->

<a name="issues"></a>

## Known Issues

Please look at our [GitHub Issues](https://github.com/SAP/ui5-webcomponents-react/issues).

<!-- *********************************************************************** -->

<a name="support"></a>

## How to obtain support

We welcome all comments, suggestions, questions, and bug reports. Feel free to [open issues](https://github.com/SAP/ui5-webcomponents-react/issues/new/choose) or chat with us directly in the [`},{kind:"code",text:"`#webcomponents-react`"},{kind:"text",text:`](https://openui5.slack.com/archives/CSQEJ2J04) channel in the
[OpenUI5 Community Slack](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/).
Please note that you have to join this Slack workspace via [this link](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/) if you are not part of it already.

<!-- *********************************************************************** -->

<a name="contributing"></a>

## Contributing

Please check our [Contribution Guidelines](/CONTRIBUTING.md).`}],E={1:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:""},2:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress"},3:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable"},4:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.typeIntoUi5Input"},5:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.typeIntoUi5Input"},6:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"text"},7:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"options"},8:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.typeIntoUi5InputWithDelay"},9:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.typeIntoUi5InputWithDelay"},10:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"text"},11:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"delay"},12:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"options"},13:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.typeIntoUi5TextArea"},14:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.typeIntoUi5TextArea"},15:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"text"},16:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"options"},17:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.toggleUi5Checkbox"},18:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.toggleUi5Checkbox"},19:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.toggleUi5Switch"},20:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.toggleUi5Switch"},21:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.clickUi5RadioButton"},22:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.clickUi5RadioButton"},23:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.closeUi5PopupWithEsc"},24:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.closeUi5PopupWithEsc"},25:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.clickUi5ListItemByText"},26:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"__global.Cypress.Chainable.clickUi5ListItemByText"},27:{sourceFileName:"packages/cypress-commands/src/commands.ts",qualifiedName:"text"},28:{sourceFileName:"packages/cypress-commands/src/index.ts",qualifiedName:""},29:{sourceFileName:"packages/cypress-commands/src/queries.ts",qualifiedName:""},30:{sourceFileName:"packages/cypress-commands/src/queries.ts",qualifiedName:"__global.Cypress"},31:{sourceFileName:"packages/cypress-commands/src/queries.ts",qualifiedName:"__global.Cypress.Chainable"},32:{sourceFileName:"packages/cypress-commands/src/queries.ts",qualifiedName:"__global.Cypress.Chainable.findUi5TabByText"},33:{sourceFileName:"packages/cypress-commands/src/queries.ts",qualifiedName:"__global.Cypress.Chainable.findUi5TabByText"},34:{sourceFileName:"packages/cypress-commands/src/queries.ts",qualifiedName:"text"},35:{sourceFileName:"packages/cypress-commands/src/queries.ts",qualifiedName:"__global.Cypress.Chainable.findUi5TabOpenPopoverButtonByText"},36:{sourceFileName:"packages/cypress-commands/src/queries.ts",qualifiedName:"__global.Cypress.Chainable.findUi5TabOpenPopoverButtonByText"},37:{sourceFileName:"packages/cypress-commands/src/queries.ts",qualifiedName:"text"},38:{sourceFileName:"packages/cypress-commands/src/queries.ts",qualifiedName:"options"}},W={id:A,name:T,variant:F,kind:P,flags:S,children:U,groups:I,packageName:B,readme:L,symbolIdMap:E};export{W as A,d as C};
//# sourceMappingURL=api-1f54a204.js.map
