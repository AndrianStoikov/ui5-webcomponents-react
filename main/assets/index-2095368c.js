import{_ as w}from"./iframe-a0098a98.js";import{r as y,U as S,d as I}from"./UI5Element-4f8793c9.js";import{e as a,l as r,f as u,s as C,a as T,p as b,c as N,b as E,w as k}from"./withWebComponent-e4481254.js";import{s as B}from"./AriaLabelHelper-c82262ef.js";import{e as P,M,b as $,c as R,d as x,f as W,g as A}from"./MarkedEvents-8627ed01.js";import"./decline-e7438d7e.js";import{o as D}from"./class-map-5d8e4b2b.js";import{I as O,B as U}from"./Button-8fbc19ea.js";var h;(function(e){e.Information="Information",e.Positive="Positive",e.Negative="Negative",e.Warning="Warning"})(h||(h={}));const _=h,V=(e,o,t)=>a`<div class="${D(e.classes.root)}" id="${r(e._id)}" role="note" aria-live="assertive" aria-labelledby="${r(e._id)}">${e.hideIcon?void 0:q(e,o,t)}<span class="ui5-hidden-text">${r(e.hiddenText)}</span><span class="ui5-message-strip-text"><slot></slot></span>${e.hideCloseButton?void 0:L(e,o,t)}</div>`,q=(e,o,t)=>a`<div class="ui5-message-strip-icon-wrapper" aria-hidden="true">${e.iconProvided?F():G(e,o,t)}</div>`,F=(e,o,t)=>a`<slot name="icon"></slot>`,G=(e,o,t)=>t?a`<${u("ui5-icon",o,t)} name="${r(e.standardIconName)}" class="ui5-message-strip-icon"></${u("ui5-icon",o,t)}>`:a`<ui5-icon name="${r(e.standardIconName)}" class="ui5-message-strip-icon"></ui5-icon>`,L=(e,o,t)=>t?a`<${u("ui5-button",o,t)} icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${r(e._closeButtonText)}" @click=${e._closeClick}></${u("ui5-button",o,t)}>`:a`<ui5-button icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${r(e._closeButtonText)}" @click=${e._closeClick}></ui5-button>`;y("@ui5/webcomponents-theming","sap_fiori_3",async()=>C);y("@ui5/webcomponents","sap_fiori_3",async()=>T);const z={packageName:"@ui5/webcomponents",fileName:"themes/MessageStrip.css.ts",content:'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%}.ui5-message-strip-root{width:100%;height:100%;display:flex;border-radius:var(--sapPopover_BorderCornerRadius);padding:var(--_ui5_message_strip_padding);border-width:var(--_ui5_message_strip_border_width);border-style:solid;box-sizing:border-box;position:relative}.ui5-message-strip-root-hide-icon{padding-inline:var(--_ui5_message_strip_padding_inline_no_icon);padding-block:var(--_ui5_message_strip_padding_block_no_icon)}.ui5-message-strip-root-hide-close-button{padding-inline-end:1rem}.ui5-message-strip-root--info{background-color:var(--sapInformationBackground);border-color:var(--sapMessage_InformationBorderColor);color:var(--sapTextColor)}.ui5-message-strip-root--info .ui5-message-strip-icon{color:var(--sapInformativeElementColor)}.ui5-message-strip-root--positive{background-color:var(--sapSuccessBackground);border-color:var(--sapMessage_SuccessBorderColor)}.ui5-message-strip-root--positive .ui5-message-strip-icon{color:var(--sapPositiveElementColor)}.ui5-message-strip-root--negative{background-color:var(--sapErrorBackground);border-color:var(--sapMessage_ErrorBorderColor)}.ui5-message-strip-root--negative .ui5-message-strip-icon{color:var(--sapNegativeElementColor)}.ui5-message-strip-root--warning{background-color:var(--sapWarningBackground);border-color:var(--sapMessage_WarningBorderColor)}.ui5-message-strip-root--warning .ui5-message-strip-icon{color:var(--sapCriticalElementColor)}.ui5-message-strip-icon-wrapper{position:absolute;top:var(--_ui5_message_strip_icon_top);inset-inline-start:.75rem;box-sizing:border-box}.ui5-message-strip-text{width:100%;color:var(--sapTextColor);line-height:1.2;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-message-strip-close-button{width:2rem;min-width:2rem;height:1.65rem;min-height:1.65rem;position:absolute;top:var(--_ui5_message_strip_close_button_top);inset-inline-end:var(--_ui5_message_strip_close_button_right)}'};var l=globalThis&&globalThis.__decorate||function(e,o,t,p){var c=arguments.length,i=c<3?o:p===null?p=Object.getOwnPropertyDescriptor(o,t):p,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,o,t,p);else for(var g=e.length-1;g>=0;g--)(d=e[g])&&(i=(c<3?d(i):c>3?d(o,t,i):d(o,t))||i);return c>3&&i&&Object.defineProperty(o,t,i),i},s,f;(function(e){e.Information="ui5-message-strip-root--info",e.Positive="ui5-message-strip-root--positive",e.Negative="ui5-message-strip-root--negative",e.Warning="ui5-message-strip-root--warning"})(f||(f={}));var v;(function(e){e.Information="information",e.Positive="sys-enter-2",e.Negative="error",e.Warning="alert"})(v||(v={}));let n=s=class extends S{_closeClick(){this.fireEvent("close")}static async onDefine(){s.i18nBundle=await I("@ui5/webcomponents")}static designAnnouncementMappings(){const o=t=>s.i18nBundle.getText(t);return{Information:o(R),Positive:o(x),Negative:o(W),Warning:o(A)}}get hiddenText(){return`${s.designAnnouncementMappings()[this.design]} ${this.hideCloseButton?"":this._closableText}`}get _closeButtonText(){return s.i18nBundle.getText(M)}get _closableText(){return s.i18nBundle.getText($)}get classes(){return{root:{"ui5-message-strip-root":!0,"ui5-message-strip-root-hide-icon":this.hideIcon,"ui5-message-strip-root-hide-close-button":this.hideCloseButton,[this.designClasses]:!0}}}get iconProvided(){return this.icon.length>0}get standardIconName(){return v[this.design]}get designClasses(){return f[this.design]}};l([b({type:_,defaultValue:_.Information})],n.prototype,"design",void 0);l([b({type:Boolean})],n.prototype,"hideIcon",void 0);l([b({type:Boolean})],n.prototype,"hideCloseButton",void 0);l([B()],n.prototype,"icon",void 0);n=s=l([N({tag:"ui5-message-strip",languageAware:!0,renderer:E,template:V,styles:z,dependencies:[O,U]}),P("close")],n);n.define();const j=n,H=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),m=k("ui5-message-strip",["design"],["hideCloseButton","hideIcon"],["icon"],["close"],()=>w(()=>Promise.resolve().then(()=>H),void 0,import.meta.url));m.displayName="MessageStrip";m.defaultProps={design:_.Information};try{m.displayName="MessageStrip",m.__docgenInfo={description:`The \`MessageStrip\` component enables the embedding of app-related messages. It displays 4 designs of messages, each with corresponding semantic color and icon: Information, Positive, Warning and Negative. Each message can have a Close button, so that it can be removed from the UI, if needed.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MessageStrip" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"MessageStrip",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the content to be displayed as graphical element within the component.

**Note:** If no icon is given, the default icon for the component type will be used. The SAP-icons font provides numerous options.

See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:"Fired when the close button is pressed either with a click/tap or by using the Enter or Space key.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<MessageStripDomRef, never>) => void"}},design:{defaultValue:{value:"MessageStripDesign.Information"},description:'Defines the component type.\n\n**Note:** Available options are `"Information"`, `"Positive"`, `"Negative"`, and `"Warning"`.',name:"design",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Warning"'}]}},hideCloseButton:{defaultValue:null,description:"Defines whether the MessageStrip renders close button.",name:"hideCloseButton",required:!1,type:{name:"boolean"}},hideIcon:{defaultValue:null,description:"Defines whether the MessageStrip will show an icon in the beginning. You can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used.",name:"hideIcon",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{m as M,_ as a};
//# sourceMappingURL=index-2095368c.js.map
