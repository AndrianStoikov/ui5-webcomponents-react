import{M as P,C as v,j as S}from"./index-4c7efcb4.js";import{_ as x}from"./iframe-cb792102.js";import{r as B,U as R,d as O,l as W}from"./UI5Element-386cb3f6.js";import{e as p,s as f,l as u,d as H,a as j,p as m,c as z,b as X,w as G}from"./withWebComponent-34dd487e.js";import{e as K,w as J,bc as Q,bd as Y,V as Z,j as ee,k as te,l as oe}from"./MarkedEvents-0e37da6f.js";import{s as w,l as ae}from"./AriaLabelHelper-dee23f38.js";import{V as c}from"./ValueState-2c5e5904.js";import{g as ie}from"./CustomElementsScopeUtils-137da8c8.js";import{b as ne,c as re}from"./Keys-50a1cb5a.js";import{a as se}from"./Input-85591656.js";import{c as le}from"./Popover-ff8f156e.js";import{c as ue,I as pe}from"./Button-981a9381.js";import{o as I}from"./class-map-60f59e95.js";import{s as U}from"./style-map-63946e4f.js";import{R as de}from"./ResponsivePopoverCommon.css-c2b66233.js";import{v as ce}from"./ValueStateMessage.css-88180c67.js";import{V as F}from"./ValueState-ab6838cc.js";import{B as g}from"./index-d6e34175.js";import{F as me,c as he}from"./index-7ac1a15f.js";import{B as fe}from"./index-9c192e16.js";import{A as ve}from"./index-d2b57274.js";import{A as ge}from"./DomRefTable.module-b93912f7.js";import{D as _e}from"./DocsHeader-272d51e2.js";import{F as ye}from"./Footer-511979fe.js";import{j as o,a as T,F as be}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{D as Se}from"./DomRefTable-c0a4e373.js";import{a as D}from"./Icons-03f19c25.js";import{v as M}from"./decline-48ecb430.js";import{u as $}from"./index-4fb8b842.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"../sb-preview/runtime.mjs";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./ResizeHandler-b3fcb37c.js";import"./Integer-5fa4beea.js";import"./FocusableElements-13161f05.js";import"./getActiveElement-bcae01ed.js";import"./MediaRange-25b98f31.js";import"./Suggestions.css-5424627b.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./Avatar-f74ae24a.js";import"./employee-dc85b60f.js";import"./chunk-G4YQS2SV-de0e1524.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-b668c6ba.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-2e9cfc1a.js";import"./TableOfContent-c01f48c5.js";import"./index-4b713bb6.js";import"./WrappingType-b81e595a.js";import"./index-d42d1006.js";import"./Label-f9741f9c.js";import"./Footer.module-c4f3b823.js";import"./index-fe59f05e.js";const we=(e,t,a)=>p`<div class="ui5-file-uploader-root" @mouseover="${e._onmouseover}" @mouseout="${e._onmouseout}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}" @keydown="${e._onkeydown}" @keyup="${e._onkeyup}" @click="${e._onclick}"><div class="ui5-file-uploader-mask">${e.hideInput?void 0:Fe(e,t,a)}<slot></slot></div>${e._keepInputInShadowDOM?Ie(e):Ue()}</div>`,Fe=(e,t,a)=>a?p`<${f("ui5-input",t,a)} value="${u(e.value)}" value-state="${u(e.valueState)}" placeholder="${u(e.placeholder)}" ?disabled="${e.disabled}" tabindex="-1" class="ui5-file-uploader-input"></${f("ui5-input",t,a)}>`:p`<ui5-input value="${u(e.value)}" value-state="${u(e.valueState)}" placeholder="${u(e.placeholder)}" ?disabled="${e.disabled}" tabindex="-1" class="ui5-file-uploader-input"></ui5-input>`,Ie=(e,t,a)=>p`<input type="file" title="${u(e.titleText)}" accept="${u(e.accept)}" ?multiple="${e.multiple}" ?disabled="${e.disabled}" @change="${e._onChange}" aria-hidden="true" tabindex="-1">`,Ue=(e,t,a)=>p`<slot name="formSupport"></slot>`,Te=(e,t,a)=>a?p`<${f("ui5-popover",t,a)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${I(e.classes.popoverValueState)}" style="${U(e.styles.popoverHeader)}">${e._valueStateMessageInputIcon?V(e,t,a):void 0}${e.shouldDisplayDefaultValueStateMessage?k(e):N(e)}</div></${f("ui5-popover",t,a)}>`:p`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${I(e.classes.popoverValueState)}" style="${U(e.styles.popoverHeader)}">${e._valueStateMessageInputIcon?V(e,t,a):void 0}${e.shouldDisplayDefaultValueStateMessage?k(e):N(e)}</div></ui5-popover>`,V=(e,t,a)=>a?p`<${f("ui5-icon",t,a)} class="ui5-input-value-state-message-icon" name="${u(e._valueStateMessageInputIcon)}"></${f("ui5-icon",t,a)}>`:p`<ui5-icon class="ui5-input-value-state-message-icon" name="${u(e._valueStateMessageInputIcon)}"></ui5-icon>`,k=(e,t,a)=>p`${u(e.valueStateText)}`,N=(e,t,a)=>p`${ue(e.valueStateMessageText,(i,s)=>i._id||s,(i,s)=>$e(i))}`,$e=(e,t,a,i,s)=>p`${u(e)}`;B("@ui5/webcomponents-theming","sap_fiori_3",()=>H);B("@ui5/webcomponents","sap_fiori_3",()=>j);const Ve={packageName:"@ui5/webcomponents",fileName:"themes/FileUploader.css",content:":host{display:inline-block}.ui5-file-uploader-root{position:relative}.ui5-file-uploader-root input[type=file]{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%}.ui5-file-uploader-root input[type=file]:not([disabled]){cursor:pointer}.ui5-file-uploader-mask{display:flex}.ui5-file-uploader-mask [ui5-input]{margin-right:.25rem}:host(:not([value-state]):not([disabled]):hover) [ui5-input],:host([value-state=None]:not([disabled]):hover) [ui5-input]{border:var(--_ui5_file_uploader_hover_border);background-color:var(--sapField_Hover_Background);box-shadow:var(--_ui5_input_hover_box_shadow)}:host([value-state=Error]:not([disabled]):hover) [ui5-input]{background-color:var(--_ui5_file_uploader_value_state_error_hover_background_color);box-shadow:var(--_ui5_input_value_state_error_hover_box_shadow)}:host([value-state=Warning]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--_ui5_input_value_state_warning_hover_box_shadow)}:host([value-state=Success]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--_ui5_input_value_state_success_hover_box_shadow)}:host([value-state=Information]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--_ui5_input_value_state_information_hover_box_shadow)}:host(:not([disabled]):active) [ui5-button]{background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor);text-shadow:none}"};var l=globalThis&&globalThis.__decorate||function(e,t,a,i){var s=arguments.length,h=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,a):i,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")h=Reflect.decorate(e,t,a,i);else for(var b=e.length-1;b>=0;b--)(_=e[b])&&(h=(s<3?_(h):s>3?_(t,a,h):_(t,a))||h);return s>3&&h&&Object.defineProperty(t,a,h),h},d;let n=d=class extends R{static get formAssociated(){return!0}static get render(){return X}static get styles(){return Ve}static get template(){return we}static get staticAreaTemplate(){return Te}static get staticAreaStyles(){return[de,ce]}constructor(){super(),this._internals=this.attachInternals&&this.attachInternals()}_onmouseover(){this.content.forEach(t=>{t.classList.add("ui5_hovered")})}_onmouseout(){this.content.forEach(t=>{t.classList.remove("ui5_hovered")})}_onclick(t){J(t)==="button"&&this._input.click()}_onkeydown(t){ne(t)&&(this._input.click(),t.preventDefault())}_onkeyup(t){re(t)&&(this._input.click(),t.preventDefault())}_onfocusin(){this.focused=!0}_onfocusout(){this.focused=!1}get files(){return this._input?this._input.files:d._emptyFilesList}onBeforeRendering(){this._enableFormSupport()}onAfterRendering(){this.value||(this._input.value=""),this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover)}_enableFormSupport(){const t=ie("FormSupport");t?this._canUseNativeFormSupport?this._setFormValue():t.syncNativeFileInput(this,(a,i)=>{i.disabled=!!a.disabled},this._onChange.bind(this)):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onChange(t){const a=t.target.files;this._updateValue(a),this.fireEvent("change",{files:a})}_updateValue(t){this.value=Array.from(t||[]).reduce((a,i)=>`${a}"${i.name}" `,"")}_setFormValue(){const t=new FormData;if(this.files)for(let a=0;a<this.files.length;a++)t.append(this.name,this.files[a]);this._internals.setFormValue(t)}toggleValueStatePopover(t){t?this.openValueStatePopover():this.closeValueStatePopover()}async openValueStatePopover(){const t=await this._getPopover();t&&t.showAt(this)}async closeValueStatePopover(){const t=await this._getPopover();t&&t.close()}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector(".ui5-valuestatemessage-popover")}static get _emptyFilesList(){return this.emptyInput||(this.emptyInput=document.createElement("input"),this.emptyInput.type="file"),this.emptyInput.files}get browseText(){return d.i18nBundle.getText(Q)}get titleText(){return d.i18nBundle.getText(Y)}get _canUseNativeFormSupport(){return!!(this._internals&&this._internals.setFormValue)}get _keepInputInShadowDOM(){return this._canUseNativeFormSupport||!this.name}get _input(){return this.shadowRoot.querySelector("input[type=file]")||this.querySelector("input[type=file][data-ui5-form-support]")}get valueStateTextMappings(){return{Success:d.i18nBundle.getText(Z),Information:d.i18nBundle.getText(ee),Error:d.i18nBundle.getText(te),Warning:d.i18nBundle.getText(oe)}}get valueStateText(){return this.valueStateTextMappings[this.valueState]}get hasValueState(){return this.valueState!==c.None}get hasValueStateText(){return this.hasValueState&&this.valueState!==c.Success}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(t=>t.cloneNode(!0))}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessage.length&&this.hasValueStateText}get shouldOpenValueStateMessagePopover(){return this.focused&&this.hasValueStateText&&!this.hideInput}get _valueStateMessageInputIcon(){const t={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==c.None?t[this.valueState]:""}get classes(){return{popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage--success":this.valueState===c.Success,"ui5-valuestatemessage--error":this.valueState===c.Error,"ui5-valuestatemessage--warning":this.valueState===c.Warning,"ui5-valuestatemessage--information":this.valueState===c.Information}}}get styles(){return{popoverHeader:{width:`${this.ui5Input?this.ui5Input.offsetWidth:0}px`}}}get ui5Input(){return this.shadowRoot.querySelector(".ui5-file-uploader-input")}static get dependencies(){return[se,le,pe]}static async onDefine(){d.i18nBundle=await O("@ui5/webcomponents")}};l([m()],n.prototype,"accept",void 0);l([m({type:Boolean})],n.prototype,"hideInput",void 0);l([m({type:Boolean})],n.prototype,"disabled",void 0);l([m({type:Boolean})],n.prototype,"multiple",void 0);l([m()],n.prototype,"name",void 0);l([m()],n.prototype,"placeholder",void 0);l([m()],n.prototype,"value",void 0);l([m({type:c,defaultValue:c.None})],n.prototype,"valueState",void 0);l([m({type:Boolean})],n.prototype,"focused",void 0);l([w({type:HTMLElement,default:!0})],n.prototype,"content",void 0);l([w()],n.prototype,"valueStateMessage",void 0);l([w()],n.prototype,"formSupport",void 0);n=d=l([z("ui5-file-uploader"),ae,K("change",{detail:{files:{type:FileList}}})],n);n.define();const ke=n,Ne=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),r=G("ui5-file-uploader",["accept","name","placeholder","value","valueState"],["disabled","hideInput","multiple"],["valueStateMessage"],["change"],()=>x(()=>Promise.resolve().then(()=>Ne),void 0,import.meta.url));r.displayName="FileUploader";r.defaultProps={valueState:F.None};try{r.displayName="FileUploader",r.__docgenInfo={description:`The \`FileUploader\` opens a file explorer dialog and enables users to upload files. The component consists of input field, but you can provide an HTML element by your choice to trigger the file upload, by using the default slot. Furthermore, you can set the property "hideInput" to "true" to hide the input field.
To get all selected files, you can simply use the read-only "files" property. To restrict the types of files the user can select, you can use the "accept" property.
And, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties. For the \`FileUploader\`

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/FileUploader" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"FileUploader",props:{children:{defaultValue:null,description:"By default the component contains a single input field. With this slot you can pass any content that you wish to add. See the samples for more information.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onChange:{defaultValue:null,description:"Event is fired when the value of the file path has been changed. **Note:** Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<FileUploaderDomRef, { files: FileList; }>) => void"}},accept:{defaultValue:null,description:"Comma-separated list of file types that the component should accept.\n\n**Note:** Please make sure you are adding the `.` in front on the file type, e.g. `.png` in case you want to accept png's only.",name:"accept",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:null,description:'If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.',name:"hideInput",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Allows multiple files to be chosen.",name:"multiple",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Defines the name/names of the file/files to upload.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Be="upload",E="M471.5 459q12 0 19.5 7t7.5 20q0 12-7.5 19t-19.5 7h-430q-12 0-19.5-7t-7.5-19q0-13 7.5-20t19.5-7h430zm-304-304q-8 8-18 8t-20-8q-8-10-8-19 0-11 8-19l105-105 1-1q1 0 1-1h1q7-9 19-9 6 0 9.5 2t8.5 6l108 108q8 7 8 19 0 11-8 19t-19 8q-10 0-18-8l-62-62v258q0 12-7.5 19.5t-19.5 7.5-19.5-7.5-7.5-19.5V93z",De=!1,Me=M,Ee="SAP-icons-v5",Ae="@ui5/webcomponents-icons";D(Be,{pathData:E,ltr:De,accData:Me,collection:Ee,packageName:Ae});const qe="upload",A="M480 448q13 0 22.5 9.5T512 480q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23q0-13 9-22.5t23-9.5h448zm-98-337q12 11 0 23-5 5-11.5 5t-11.5-5l-87-87v321q0 16-16 16t-16-16V49l-85 85q-5 5-11 5t-11-5q-12-11 0-23L235 10q10-9 22.5-9.5T280 10z",Ce=!1,Le=M,Pe="SAP-icons",xe="@ui5/webcomponents-icons";D(qe,{pathData:A,ltr:Ce,accData:Le,collection:Pe,packageName:xe});W("sap_horizon");const Re="upload",Oe=[{name:"files",readonly:"true",visibility:"public",type:"FileList",description:"FileList of all selected files."}];function We(e={}){const{wrapper:t}=Object.assign({},$(),e.components);return t?o(t,{...e,children:o(a,{})}):a();function a(){const i=Object.assign({h2:"h2",h1:"h1",h3:"h3"},$(),e.components);return T(be,{children:[o(P,{title:"Inputs / FileUploader",component:r,argTypes:{children:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:F.None}}),`
`,o(_e,{since:"0.9.0"}),`
`,o("br",{}),`
`,o(i.h2,{children:"Example"}),`
`,o(v,{children:o(S,{name:"Default",children:s=>o(r,{...s})})}),`
`,o(i.h2,{children:"Properties"}),`
`,o(ge,{story:"Default"}),`
`,o(Se,{rows:Oe}),`
`,o("br",{}),`
`,o(i.h1,{children:"More Examples"}),`
`,o("br",{}),`
`,o(i.h2,{children:"FileUploader with Buttons"}),`
`,o("br",{}),`
`,o(i.h3,{children:"Upload single file"}),`
`,o(v,{children:o(S,{name:"With Buttons",children:s=>o(r,{...s,children:o(g,{children:"Upload single file"})})})}),`
`,o(i.h3,{children:"Upload multiple files"}),`
`,o(v,{mdxSource:'<FileUploader multiple><Button>{"Upload multiple files"}</Button></FileUploader>',children:o(r,{multiple:!0,children:o(g,{children:"Upload multiple files"})})}),`
`,o("br",{}),`
`,o(i.h2,{children:"Custom FileUploader"}),`
`,o(i.h3,{children:"FileUploader without input field"}),`
`,o(v,{children:o(S,{name:"Custom FileUploader",children:s=>o(r,{hideInput:!0,children:o(g,{children:"Upload file"})})})}),`
`,o(i.h3,{children:"FileUploader with custom elements"}),`
`,o(v,{mdxSource:'<FlexBox alignItems={FlexBoxAlignItems.Center}><FileUploader hideInput><Avatar icon={uploadIcon} /></FileUploader><FileUploader hideInput><Badge>{"Upload file"}</Badge></FileUploader></FlexBox>',children:T(me,{alignItems:he.Center,children:[o(r,{hideInput:!0,children:o(ve,{icon:Re})}),o(r,{hideInput:!0,children:o(fe,{children:"Upload file"})})]})}),`
`,o(ye,{})]})}}const q=e=>o(r,{...e});q.storyName="Default";q.parameters={storySource:{source:`args => {
  return <FileUploader {...args} />;
}`}};const C=e=>o(r,{...e,children:o(g,{children:"Upload single file"})});C.storyName="With Buttons";C.parameters={storySource:{source:`args => {
  return <FileUploader {...args}>
          <Button>Upload single file</Button>
        </FileUploader>;
}`}};const L=e=>o(r,{hideInput:!0,children:o(g,{children:"Upload file"})});L.storyName="Custom FileUploader";L.parameters={storySource:{source:`args => {
  return <FileUploader hideInput>
          <Button>Upload file</Button>
        </FileUploader>;
}`}};const y={title:"Inputs / FileUploader",component:r,args:{valueState:F.None},argTypes:{children:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withButtons","customFileUploader"]};y.parameters=y.parameters||{};y.parameters.docs={...y.parameters.docs||{},page:We};const no=["defaultStory","withButtons","customFileUploader"];export{no as __namedExportsOrder,L as customFileUploader,y as default,q as defaultStory,C as withButtons};
//# sourceMappingURL=FileUploader.stories-11e9e25c.js.map
