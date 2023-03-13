import{_ as S}from"./iframe-6c121fc0.js";import{U as I}from"./UI5Element-427ec721.js";import{p,c as v,w as k,e as a,l as t,f as l}from"./withWebComponent-e4481254.js";import D from"./GroupHeaderListItem-5167186a.js";import{V as y}from"./ValueState-2c5e5904.js";import{s as T}from"./slot-634e3e91.js";import E from"./StandardListItem-414a5173.js";import{o as N}from"./class-map-5d8e4b2b.js";import{a as g}from"./ListItem-a65a20e6.js";import{V as C}from"./ValueState-ab6838cc.js";var w=globalThis&&globalThis.__decorate||function(e,n,i,s){var d=arguments.length,o=d<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,n,i,s);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(o=(d<3?r(o):d>3?r(n,i,o):r(n,i))||o);return d>3&&o&&Object.defineProperty(n,i,o),o};let h=class extends I{get groupItem(){return!0}};w([p()],h.prototype,"text",void 0);h=w([v({tag:"ui5-suggestion-group-item",dependencies:[D]})],h);h.define();const P=h,V=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),$=k("ui5-suggestion-group-item",["text"],[],[],[],()=>S(()=>Promise.resolve().then(()=>V),void 0,import.meta.url));$.displayName="SuggestionGroupItem";try{$.displayName="SuggestionGroupItem",$.__docgenInfo={description:'The `SuggestionGroupItem` is type of suggestion item, that can be used to split the `Input` suggestions into groups\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Input" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"SuggestionGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the `SuggestionGroupItem`.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const R=(e,n,i)=>a`<li part="native-li" data-sap-focus-ref tabindex="${t(e._effectiveTabIndex)}" class="${N(e.classes.main)}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}" @keyup="${e._onkeyup}" @keydown="${e._onkeydown}" @mouseup="${e._onmouseup}" @mousedown="${e._onmousedown}" @touchstart="${e._ontouchstart}" @touchend="${e._ontouchend}" @click="${e._onclick}" role="${t(e._accInfo.role)}" aria-expanded="${t(e._accInfo.ariaExpanded)}" title="${t(e.title)}" aria-level="${t(e._accInfo.ariaLevel)}" aria-haspopup="${t(e._accInfo.ariaHaspopup)}" aria-posinset="${t(e._accInfo.posinset)}" aria-roledescription="${t(e.accessibleRoleDescription)}" aria-setsize="${t(e._accInfo.setsize)}" aria-describedby="${t(e._id)}-invisibleText-describedby" aria-labelledby="${t(e._accessibleNameRef)}" aria-disabled="${t(e._ariaDisabled)}" aria-selected="${t(e._accInfo.ariaSelected)}" aria-checked="${t(e._accInfo.ariaChecked)}" aria-owns="${t(e._accInfo.ariaOwns)}">${e.placeSelectionElementBefore?L(e,n,i):void 0}<div id="${t(e._id)}-content" class="ui5-li-content">${e.hasImageContent?U():G(e,n,i)}${e.displayIconBegin?W(e,n,i):void 0}<div class="ui5-li-text-wrapper">${e.hasTitle?z():void 0}${e.hasDescription?F(e):void 0}${e.typeActive?void 0:Q(e)}</div>${e.hasDescription?void 0:X(e)}</div>${e.displayIconEnd?Z(e,n,i):void 0}${e.typeDetail?x(e,n,i):void 0}${e.typeNavigation?ee(e,n,i):void 0}${e.navigated?ie():void 0}${e.placeSelectionElementAfter?ne(e,n,i):void 0}<span id="${t(e._id)}-invisibleText" class="ui5-hidden-text">${t(e._accInfo.listItemAriaLabel)}${t(e.accessibleName)}</span><span id="${t(e._id)}-invisibleText-describedby" class="ui5-hidden-text">${t(e._accInfo.ariaSelectedText)}</span></li> `,L=(e,n,i)=>a`${e.modeSingleSelect?B(e,n,i):void 0}${e.modeMultiSelect?O(e,n,i):void 0}${e.renderDeleteButton?q(e,n,i):void 0}`,B=(e,n,i)=>i?a`<${l("ui5-radio-button",n,i)} ?disabled="${e.isInactive}" accessible-name="${t(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></${l("ui5-radio-button",n,i)}>`:a`<ui5-radio-button ?disabled="${e.isInactive}" accessible-name="${t(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></ui5-radio-button>`,O=(e,n,i)=>i?a`<${l("ui5-checkbox",n,i)} ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${t(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${t(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></${l("ui5-checkbox",n,i)}>`:a`<ui5-checkbox ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${t(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${t(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></ui5-checkbox>`,q=(e,n,i)=>a`<div class="ui5-li-deletebtn">${e.hasDeleteButtonSlot?A():j(e,n,i)}</div>`,A=(e,n,i)=>a`<slot name="deleteButton"></slot>`,j=(e,n,i)=>i?a`<${l("ui5-button",n,i)} tabindex="-1" data-sap-no-tab-ref id="${t(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${t(e.deleteText)}"></${l("ui5-button",n,i)}>`:a`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${t(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${t(e.deleteText)}"></ui5-button>`,U=(e,n,i)=>a`<div class="ui5-li-imgContent"><slot name="imageContent"></slot></div>`,G=(e,n,i)=>a`${e.displayImage?M(e,n,i):void 0}`,M=(e,n,i)=>i?a`<${l("ui5-avatar",n,i)} shape="Square" class="ui5-li-img"><img src="${t(e.image)}" class="ui5-li-img-inner" /></${l("ui5-avatar",n,i)}>`:a`<ui5-avatar shape="Square" class="ui5-li-img"><img src="${t(e.image)}" class="ui5-li-img-inner" /></ui5-avatar>`,W=(e,n,i)=>i?a`<${l("ui5-icon",n,i)} part="icon" name="${t(e.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${l("ui5-icon",n,i)}>`:a`<ui5-icon part="icon" name="${t(e.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`,z=(e,n,i)=>a`<span part="title" class="ui5-li-title"><slot></slot></span>`,F=(e,n,i)=>a`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${e.richDescription.length?H():J(e)}</span>${e.additionalText?K(e):void 0}</div>`,H=(e,n,i)=>a`<slot name="richDescription"></slot>`,J=(e,n,i)=>a`${t(e.description)}`,K=(e,n,i)=>a`<span part="additional-text" class="ui5-li-additional-text">${t(e.additionalText)}</span>`,Q=(e,n,i)=>a`<span class="ui5-hidden-text">${t(e.type)}</span>`,X=(e,n,i)=>a`${e.additionalText?Y(e):void 0}`,Y=(e,n,i)=>a`<span part="additional-text" class="ui5-li-additional-text">${t(e.additionalText)}</span>`,Z=(e,n,i)=>i?a`<${l("ui5-icon",n,i)} part="icon" name="${t(e.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${l("ui5-icon",n,i)}>`:a`<ui5-icon part="icon" name="${t(e.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`,x=(e,n,i)=>i?a`<div class="ui5-li-detailbtn"><${l("ui5-button",n,i)} design="Transparent" icon="edit" @click="${e.onDetailClick}"></${l("ui5-button",n,i)}></div>`:a`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${e.onDetailClick}"></ui5-button></div>`,ee=(e,n,i)=>i?a`<${l("ui5-icon",n,i)} name ="slim-arrow-right"></${l("ui5-icon",n,i)}>`:a`<ui5-icon name ="slim-arrow-right"></ui5-icon>`,ie=(e,n,i)=>a`<div class="ui5-li-navigated"></div>`,ne=(e,n,i)=>a`${e.modeSingleSelect?te(e,n,i):void 0}${e.modeMultiSelect?ae(e,n,i):void 0}${e.renderDeleteButton?oe(e,n,i):void 0}`,te=(e,n,i)=>i?a`<${l("ui5-radio-button",n,i)} ?disabled="${e.isInactive}" accessible-name="${t(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></${l("ui5-radio-button",n,i)}>`:a`<ui5-radio-button ?disabled="${e.isInactive}" accessible-name="${t(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></ui5-radio-button>`,ae=(e,n,i)=>i?a`<${l("ui5-checkbox",n,i)} ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${t(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${t(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></${l("ui5-checkbox",n,i)}>`:a`<ui5-checkbox ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${t(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${t(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></ui5-checkbox>`,oe=(e,n,i)=>a`<div class="ui5-li-deletebtn">${e.hasDeleteButtonSlot?le():se(e,n,i)}</div>`,le=(e,n,i)=>a`<slot name="deleteButton"></slot>`,se=(e,n,i)=>i?a`<${l("ui5-button",n,i)} tabindex="-1" data-sap-no-tab-ref id="${t(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${t(e.deleteText)}"></${l("ui5-button",n,i)}>`:a`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${t(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${t(e.deleteText)}"></ui5-button>`;var _=globalThis&&globalThis.__decorate||function(e,n,i,s){var d=arguments.length,o=d<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,n,i,s);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(o=(d<3?r(o):d>3?r(n,i,o):r(n,i))||o);return d>3&&o&&Object.defineProperty(n,i,o),o};let b=class extends E{onBeforeRendering(){super.onBeforeRendering(),this.hasTitle=!!this.titleText.length}get effectiveTitle(){return this.titleText.filter(n=>n.nodeType!==Node.COMMENT_NODE).map(n=>n.textContent).join("")}get hasDescription(){return this.richDescription.length||this.description}get groupItem(){return!1}};_([T({type:HTMLElement})],b.prototype,"richDescription",void 0);_([T({type:Node,default:!0})],b.prototype,"titleText",void 0);b=_([v({tag:"ui5-li-suggestion-item",template:R})],b);b.define();const de=b;var m=globalThis&&globalThis.__decorate||function(e,n,i,s){var d=arguments.length,o=d<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,n,i,s);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(o=(d<3?r(o):d>3?r(n,i,o):r(n,i))||o);return d>3&&o&&Object.defineProperty(n,i,o),o};let c=class extends I{get groupItem(){return!1}};m([p()],c.prototype,"text",void 0);m([p({type:g,defaultValue:g.Active})],c.prototype,"type",void 0);m([p()],c.prototype,"description",void 0);m([p()],c.prototype,"icon",void 0);m([p({type:Boolean})],c.prototype,"iconEnd",void 0);m([p()],c.prototype,"image",void 0);m([p()],c.prototype,"additionalText",void 0);m([p({type:y,defaultValue:y.None})],c.prototype,"additionalTextState",void 0);c=m([v({tag:"ui5-suggestion-item",dependencies:[de]})],c);c.define();const re=c,ce=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),f=k("ui5-suggestion-item",["additionalText","additionalTextState","description","icon","image","text","type"],["iconEnd"],[],[],()=>S(()=>Promise.resolve().then(()=>ce),void 0,import.meta.url));f.displayName="SuggestionItem";f.defaultProps={additionalTextState:C.None,type:g.Active};try{f.displayName="SuggestionItem",f.__docgenInfo={description:'The `SuggestionItem` represents the suggestion item of the `Input`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Input" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"SuggestionItem",props:{additionalText:{defaultValue:null,description:"Defines the `additionalText`, displayed in the end of the item.",name:"additionalText",required:!1,type:{name:"string"}},additionalTextState:{defaultValue:{value:"ValueState.None"},description:'Defines the state of the `additionalText`.\n\nAvailable options are: `"None"` (by default), `"Success"`, `"Information"`, `"Warning"` and `"Error"`.',name:"additionalTextState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},description:{defaultValue:null,description:"Defines the description displayed right under the item text, if such is present.",name:"description",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:'Defines the `icon` source URI.\n\n**Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.',name:"icon",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the `icon` should be displayed in the beginning of the item or in the end.\n\n**Note:** If `image` is set, the `icon` would be displayed after the `image`.",name:"iconEnd",required:!1,type:{name:"boolean"}},image:{defaultValue:null,description:"Defines the `image` source URI.\n\n**Note:** The `image` would be displayed in the beginning of the item.",name:"image",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:"ListItemType.Active"},description:"Defines the visual indication and behavior of the item. Available options are `Active` (by default), `Inactive` and `Detail`.\n\n**Note:** When set to `Active`, the item will provide visual response upon press and hover, while when `Inactive` or `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{f as S,$ as a,re as b,P as c,de as d};
//# sourceMappingURL=index-ef4d9b23.js.map
