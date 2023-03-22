import{_ as R}from"./iframe-fb8bab5f.js";import{e as r,l as n,s as d,o as v,a as H,b as P,p as _,c as E,d as O,w as L}from"./withWebComponent-65cd39a0.js";import{s as A}from"./slot-634e3e91.js";import{c as U,I as W,e as g}from"./Icon-7987c836.js";import{h as N,l as F,p as B,G as j,k as K,C as G,q as X,m as Y}from"./Icons-fe6e657a.js";import{ab as J}from"./i18n-defaults-254d6b69.js";import{a as m,I as Q}from"./Input-4940ecdf.js";import{s as b}from"./style-map-cae0a379.js";import{a as q,k as Z}from"./UI5Element-427ec721.js";import x from"./Token-144828a9.js";import{T as ee,C as w}from"./Tokenizer-6b454ae9.js";import{V as te}from"./ValueState-ab6838cc.js";const ne=(e,t,i)=>i?r`<div class="ui5-input-root ui5-input-focusable-element" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}"><div class="ui5-input-content"><span id="${n(e._id)}-hiddenText-nMore" class="ui5-hidden-text">${n(e._tokensCountText)}</span><${d("ui5-tokenizer",t,i)} class="ui5-multi-input-tokenizer" .morePopoverOpener=${n(e)} .popoverMinWidth=${n(e._inputWidth)} .valueState=${n(e.valueState)} ?expanded="${e.expandedTokenizer}" show-more @keydown="${e._onTokenizerKeydown}" @ui5-show-more-items-press=${n(e.showMorePress)} @ui5-token-delete=${n(e.tokenDelete)} @focusout="${e._tokenizerFocusOut}"><slot name="tokens"></slot><div slot="valueStateMessage">${e.shouldDisplayDefaultValueStateMessage?y(e):k(e)}</div></${d("ui5-tokenizer",t,i)}><input id="${n(e._id)}-inner" class="ui5-input-inner" style="${b(e.styles.innerInput)}" type="${n(e.inputType)}" inner-input ?inner-input-with-icon="${e.icon.length}" ?disabled="${e.disabled}" ?readonly="${e._readonly}" .value="${n(e._innerValue)}" placeholder="${n(e._placeholder)}" maxlength="${n(e.maxlength)}" role="${n(e.accInfo.input.role)}" aria-controls="${n(e.accInfo.input.ariaControls)}" aria-invalid="${n(e.accInfo.input.ariaInvalid)}" aria-haspopup="${n(e.accInfo.input.ariaHasPopup)}" aria-describedby="${n(e.accInfo.input.ariaDescribedBy)}" aria-roledescription="${n(e.accInfo.input.ariaRoledescription)}" aria-autocomplete="${n(e.accInfo.input.ariaAutoComplete)}" aria-expanded="${n(e.accInfo.input.ariaExpanded)}" aria-label="${n(e.accInfo.input.ariaLabel)}" aria-required="${n(e.required)}" @input="${e._handleInput}" @change="${e._handleChange}" @keydown="${e._onkeydown}" @keyup="${e._onkeyup}" @click=${e._click} @focusin=${e.innerFocusIn} data-sap-focus-ref step="${n(e.nativeInputAttributes.step)}" min="${n(e.nativeInputAttributes.min)}" max="${n(e.nativeInputAttributes.max)}" />${e.effectiveShowClearIcon?I(e,t,i):void 0}${e.icon.length?$():void 0}<div class="ui5-input-value-state-icon">${v(e._valueStateInputIcon)}</div>${e.showValueHelpIcon?T(e,t,i):void 0}${e.showSuggestions?S(e):void 0}${e.accInfo.input.ariaDescription?D(e):void 0}${e.hasValueState?M(e):void 0}</div><slot name="formSupport"></slot></div> `:r`<div class="ui5-input-root ui5-input-focusable-element" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}"><div class="ui5-input-content"><span id="${n(e._id)}-hiddenText-nMore" class="ui5-hidden-text">${n(e._tokensCountText)}</span><ui5-tokenizer class="ui5-multi-input-tokenizer" .morePopoverOpener=${n(e)} .popoverMinWidth=${n(e._inputWidth)} .valueState=${n(e.valueState)} ?expanded="${e.expandedTokenizer}" show-more @keydown="${e._onTokenizerKeydown}" @ui5-show-more-items-press=${n(e.showMorePress)} @ui5-token-delete=${n(e.tokenDelete)} @focusout="${e._tokenizerFocusOut}"><slot name="tokens"></slot><div slot="valueStateMessage">${e.shouldDisplayDefaultValueStateMessage?y(e):k(e)}</div></ui5-tokenizer><input id="${n(e._id)}-inner" class="ui5-input-inner" style="${b(e.styles.innerInput)}" type="${n(e.inputType)}" inner-input ?inner-input-with-icon="${e.icon.length}" ?disabled="${e.disabled}" ?readonly="${e._readonly}" .value="${n(e._innerValue)}" placeholder="${n(e._placeholder)}" maxlength="${n(e.maxlength)}" role="${n(e.accInfo.input.role)}" aria-controls="${n(e.accInfo.input.ariaControls)}" aria-invalid="${n(e.accInfo.input.ariaInvalid)}" aria-haspopup="${n(e.accInfo.input.ariaHasPopup)}" aria-describedby="${n(e.accInfo.input.ariaDescribedBy)}" aria-roledescription="${n(e.accInfo.input.ariaRoledescription)}" aria-autocomplete="${n(e.accInfo.input.ariaAutoComplete)}" aria-expanded="${n(e.accInfo.input.ariaExpanded)}" aria-label="${n(e.accInfo.input.ariaLabel)}" aria-required="${n(e.required)}" @input="${e._handleInput}" @change="${e._handleChange}" @keydown="${e._onkeydown}" @keyup="${e._onkeyup}" @click=${e._click} @focusin=${e.innerFocusIn} data-sap-focus-ref step="${n(e.nativeInputAttributes.step)}" min="${n(e.nativeInputAttributes.min)}" max="${n(e.nativeInputAttributes.max)}" />${e.effectiveShowClearIcon?I(e,t,i):void 0}${e.icon.length?$():void 0}<div class="ui5-input-value-state-icon">${v(e._valueStateInputIcon)}</div>${e.showValueHelpIcon?T(e,t,i):void 0}${e.showSuggestions?S(e):void 0}${e.accInfo.input.ariaDescription?D(e):void 0}${e.hasValueState?M(e):void 0}</div><slot name="formSupport"></slot></div> `,y=(e,t,i)=>r`${n(e.valueStateText)}`,k=(e,t,i)=>r`${U(e.valueStateMessageText,(o,a)=>o._id||a,(o,a)=>ie(o))}`,ie=(e,t,i,o,a)=>r`${n(e)}`,I=(e,t,i)=>i?r`<div @click=${e._clear} @mousedown=${e._iconMouseDown} class="ui5-input-clear-icon-wrapper" input-icon tabindex="-1"><${d("ui5-icon",t,i)} tabindex="-1" class="ui5-input-clear-icon" name="decline"></${d("ui5-icon",t,i)}></div>`:r`<div @click=${e._clear} @mousedown=${e._iconMouseDown} class="ui5-input-clear-icon-wrapper" input-icon tabindex="-1"><ui5-icon tabindex="-1" class="ui5-input-clear-icon" name="decline"></ui5-icon></div>`,$=(e,t,i)=>r`<div class="ui5-input-icon-root"><slot name="icon"></slot></div>`,T=(e,t,i)=>i?r`<div @click=${e.valueHelpPress}><${d("ui5-icon",t,i)} @mousedown=${e.valueHelpMouseDown} @mouseup=${e.valueHelpMouseUp} input-icon name="value-help"></${d("ui5-icon",t,i)}></div>`:r`<div @click=${e.valueHelpPress}><ui5-icon @mousedown=${e.valueHelpMouseDown} @mouseup=${e.valueHelpMouseUp} input-icon name="value-help"></ui5-icon></div>`,S=(e,t,i)=>r`<span id="${n(e._id)}-suggestionsText" class="ui5-hidden-text">${n(e.suggestionsText)}</span><span id="${n(e._id)}-selectionText" class="ui5-hidden-text" aria-live="polite" role="status"></span><span id="${n(e._id)}-suggestionsCount" class="ui5-hidden-text" aria-live="polite">${n(e.availableSuggestionsCount)}</span>`,D=(e,t,i)=>r`<span id="${n(e._id)}-descr" class="ui5-hidden-text">${n(e.accInfo.input.ariaDescription)}</span>`,M=(e,t,i)=>r`<span id="${n(e._id)}-valueStateDesc" class="ui5-hidden-text">${n(e.ariaValueStateHiddenText)}</span>`;q("@ui5/webcomponents-theming","sap_fiori_3",async()=>H);q("@ui5/webcomponents","sap_fiori_3",async()=>P);const oe={packageName:"@ui5/webcomponents",fileName:"themes/MultiInput.css.ts",content:"[input-icon]{color:var(--_ui5_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5_input_icon_padding);border-inline-start:var(--_ui5_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5_input_icon_border_radius)}[input-icon][pressed]{background:var(--_ui5_input_icon_pressed_bg);box-shadow:var(--_ui5_input_icon_box_shadow);border-inline-start:var(--_ui5_select_hover_icon_left_border);color:var(--_ui5_input_icon_pressed_color)}[input-icon]:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5_input_icon_box_shadow);border-inline-start:var(--_ui5_select_hover_icon_left_border);color:var(--_ui5_input_icon_pressed_color)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5_input_icon_hover_bg);box-shadow:var(--_ui5_input_icon_box_shadow)}[input-icon]:hover{border-inline-start:var(--_ui5_select_hover_icon_left_border);box-shadow:var(--_ui5_input_icon_box_shadow)}:host{min-width:calc(var(--_ui5_input_min_width) + var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width))}:host([tokenizer-available]){min-width:calc(var(--_ui5_input_min_width) + var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width) + var(--_ui5_input_tokenizer_min_width))}.ui5-multi-input-tokenizer{min-width:var(--_ui5_input_tokenizer_min_width);max-width:calc(100% - 3rem - var(--_ui5-input-icons-count)*var(--_ui5_input_icon_min_width));border:none;width:auto;height:100%}:host([readonly]) .ui5-multi-input-tokenizer::part(n-more-text){color:var(--sapLinkColor)}.ui5-multi-input-tokenizer::part(n-more-text){padding-inline-end:var(--_ui5_input_inner_space_to_n_more_text)}[inner-input][inner-input-with-icon]{padding:var(--_ui5_input_inner_padding_with_icon)}:host([tokenizer-available]) [inner-input]{padding-inline-start:var(--_ui5_input_inner_space_to_tokenizer)}:host(:not([tokenizer-available])) .ui5-multi-input-tokenizer{--_ui5_input_tokenizer_min_width:0px;width:var(--_ui5_input_tokenizer_min_width)}"},ae="value-help",C="M470 41q10 9 10 23v192q0 12-10 22t-22 10H256q-14 0-23-10-9-9-9-22V64q0-14 9-23t23-9h192q13 0 22 9zm-22 23H256v192h192V64zm-96 256h32v128q0 14-9 23t-23 9H64q-12 0-23-9-9-9-9-23V160q0-14 9-23t23-9h128v32H64v288h288V320z",se=!1,re="SAP-icons-v4",ue="@ui5/webcomponents-icons";N(ae,{pathData:C,ltr:se,collection:re,packageName:ue});const le="value-help",z="M257 192q34 0 57 22.5t23 57.5v160q0 34-23 57t-57 23H97q-34 0-57-23t-23-57V272q0-35 23-57.5T97 192h160zm26 80q0-12-7-19.5t-19-7.5H97q-12 0-19.5 7.5T70 272v160q0 12 7.5 19t19.5 7h160q26 0 26-26V272zM417 32q34 0 56.5 23t22.5 57v165q0 32-21 53.5T422 352h-5q-12 0-19.5-7.5T390 325t7.5-19.5T417 298h5q8 0 14.5-6.5T443 277V112q0-12-7-19.5T417 85H251q-8 0-14.5 7t-6.5 15v5q0 12-7.5 19.5T203 139t-19-7.5-7-19.5v-5q0-32 21-53.5T251 32h166z",pe=!1,de="SAP-icons-v5",ce="@ui5/webcomponents-icons";N(le,{pathData:z,ltr:pe,collection:de,packageName:ce});Z("sap_horizon");var c=globalThis&&globalThis.__decorate||function(e,t,i,o){var a=arguments.length,s=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,o);else for(var p=e.length-1;p>=0;p--)(u=e[p])&&(s=(a<3?u(s):a>3?u(t,i,s):u(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s},f;let l=f=class extends m{constructor(){super(),this._skipOpenSuggestions=!1,this._valueHelpIconPressed=!1}valueHelpPress(){this.closePopover(),this.fireEvent("value-help-trigger")}showMorePress(){this.expandedTokenizer=!1,this.focus()}tokenDelete(t){const i=t.detail.ref,o=this.tokens.filter(s=>s.selected),a=this.tokens.length-1===0||this.tokens.length===o.length;if(!this._readonly){if(i){this.fireEvent("token-delete",{token:i}),a&&this.focus();return}o.indexOf(i)===-1&&o.push(i),o.forEach(s=>{this.fireEvent("token-delete",{token:s})})}}valueHelpMouseDown(t){const i=t.target;this.closePopover(),this.tokenizer.closeMorePopover(),this._valueHelpIconPressed=!0,i.focus()}_tokenizerFocusOut(t){this.contains(t.relatedTarget)||(this.tokenizer._tokens.forEach(i=>{i.selected=!1}),this.tokenizer.scrollToStart())}valueHelpMouseUp(){setTimeout(()=>{this._valueHelpIconPressed=!1},0)}innerFocusIn(){this.expandedTokenizer=!0,this.focused=!0,this.tokenizer.scrollToEnd()}_onkeydown(t){super._onkeydown(t);const i=t.target;if(F(t)&&i.selectionStart===0)return this._skipOpenSuggestions=!0,this._focusFirstToken(t);if(B(t)||j(t))return this._skipOpenSuggestions=!0,this._handleLeft(t);this._skipOpenSuggestions=!1,K(t)&&this.valueHelpPress()}_onTokenizerKeydown(t){const i=G(t),o=!!(t.metaKey||t.ctrlKey),a=this.tokens;if(X(t)||Y(t)||i){t.preventDefault();const s=this.tokens.length-1;if(t.target===this.tokens[s]&&this.tokens[s]===document.activeElement)setTimeout(()=>{this.focus()},0);else if(i)return t.preventDefault(),this.tokenizer._handleArrowCtrl(t,t.target,this.tokens,!0)}if(o&&["c","x"].includes(t.key.toLowerCase())){t.preventDefault();const s=t.key.toLowerCase()==="x",u=a.filter(p=>p.selected);if(s){const p=this.tokenizer._fillClipboard(w.cut,u);return u.forEach(V=>{this.fireEvent("token-delete",{token:V})}),this.focus(),p}return this.tokenizer._fillClipboard(w.copy,u)}}_handleLeft(t){const i=this.getDomRef().querySelector("input").selectionStart,o=this.tokens,a=o.length&&o[o.length-1];i===0&&a&&(t.preventDefault(),a.focus(),this.tokenizer._itemNav.setCurrentItem(a))}_focusFirstToken(t){const i=this.tokens,o=i.length&&i[0];o&&(t.preventDefault(),o.focus(),this.tokenizer._itemNav.setCurrentItem(o))}_onfocusout(t){super._onfocusout(t);const i=t.relatedTarget,o=this.contains(i),a=this.shadowRoot.contains(i);!o&&!a&&(this.expandedTokenizer=!1,this.tokenizer._itemNav._currentIndex=-1)}async _onfocusin(t){const i=await this.getInputDOMRef();t.target===i&&await super._onfocusin(t)}lastItemDeleted(){setTimeout(()=>{this.focus()},0)}onBeforeRendering(){super.onBeforeRendering(),this.style.setProperty("--_ui5-input-icons-count",`${this.iconsCount}`),this.tokenizerAvailable=this.tokens&&this.tokens.length>0}get iconsCount(){return super.iconsCount+(this.showValueHelpIcon?1:0)}get tokenizer(){return this.shadowRoot.querySelector("[ui5-tokenizer]")}get _tokensCountText(){if(this.tokenizer)return this.tokenizer._tokensCountText()}get _tokensCountTextId(){return`${this._id}-hiddenText-nMore`}get _placeholder(){return this.tokenizer&&this.tokenizer._tokens.length?"":this.placeholder}get accInfo(){const t=`${this._tokensCountTextId} ${this.suggestionsTextId} ${this.valueStateTextId}`.trim();return{input:{...super.accInfo.input,ariaRoledescription:this.ariaRoleDescription,ariaDescribedBy:t}}}get ariaRoleDescription(){return f.i18nBundle.getText(J)}};c([_({type:Boolean})],l.prototype,"showValueHelpIcon",void 0);c([_({type:Boolean})],l.prototype,"expandedTokenizer",void 0);c([_({type:Boolean})],l.prototype,"tokenizerAvailable",void 0);c([A()],l.prototype,"tokens",void 0);l=f=c([E({tag:"ui5-multi-input",renderer:O,template:ne,styles:[m.styles,oe],dependencies:[...m.dependencies,ee,x,W]}),g("value-help-trigger"),g("token-delete",{detail:{token:{type:HTMLElement}}})],l);l.define();const he=l,me=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"})),h=L("ui5-multi-input",["accessibleName","accessibleNameRef","maxlength","name","placeholder","type","value","valueState"],["showValueHelpIcon","disabled","noTypeahead","readonly","required","showClearIcon","showSuggestions"],["tokens","icon","valueStateMessage"],["token-delete","value-help-trigger","change","input","suggestion-item-preview","suggestion-item-select"],()=>R(()=>Promise.resolve().then(()=>me),void 0,import.meta.url));h.displayName="MultiInput";h.defaultProps={type:Q.Text,valueState:te.None};try{h.displayName="MultiInput",h.__docgenInfo={description:`### Overview

A \`MultiInput\` field allows the user to enter multiple values, which are displayed as \`Token\`. User can choose interaction for creating tokens. Fiori Guidelines say that user should create tokens when:

*   Type a value in the input and press enter or focus out the input field (\`onChange\` event is fired)
*   Select a value from the suggestion list (\`onSuggestionItemSelect\` event is fired)

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiInput" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"MultiInput",props:{tokens:{defaultValue:null,description:`Defines the component tokens.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="tokens"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"tokens",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},children:{defaultValue:null,description:`Defines the suggestion items.

Example:

<pre>
  <code>
   &lt;MultiInput showSuggestions><br />
   &nbsp;&nbsp;&lt;SuggestionItem text="Item #1" /><br />
   &nbsp;&nbsp;&lt;SuggestionItem text="Item #2" /><br />
   &lt;/MultiInput>
 </code>
</pre>


**Note:** The suggestions would be displayed only if the \`showSuggestions\` property is set to \`true\`.

**Note:** The \`<SuggestionItem>\` and \`<SuggestionGroupItem>\` are recommended to be used as suggestion items.

**Note:** Importing the Input Suggestions Support feature:
\`import "@ui5/webcomponents/dist/features/InputSuggestions.js";\`
automatically imports the \`<SuggestionItem>\` and \`<SuggestionGroupItem>\` for your convenience.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n**Note:** If the component has `suggestionItems`, the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onTokenDelete:{defaultValue:null,description:"Fired when a token is about to be deleted.",name:"onTokenDelete",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, { token: HTMLElement; }>) => void"}},onValueHelpTrigger:{defaultValue:null,description:"Fired when the value help icon is pressed and F4 or ALT/OPTION + ARROW\\_UP/ARROW\\_DOWN keyboard keys are used.",name:"onValueHelpTrigger",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.\n\n__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the component changes at each keystroke, and when a suggestion item has been selected.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, never>) => void"}},onSuggestionItemPreview:{defaultValue:null,description:"Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.",name:"onSuggestionItemPreview",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, { item: HTMLElement; targetRef: HTMLElement; }>) => void"}},onSuggestionItemSelect:{defaultValue:null,description:"Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",name:"onSuggestionItemSelect",required:!1,type:{name:"(event: Ui5CustomEvent<MultiInputDomRef, { item: HTMLElement; }>) => void"}},showValueHelpIcon:{defaultValue:null,description:"Determines whether a value help icon will be visualized in the end of the input. Pressing the icon will fire `onValueHelpTrigger` event.",name:"showValueHelpIcon",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},maxlength:{defaultValue:null,description:`Sets the maximum number of characters available in the input field.

**Note:** This property is not compatible with the Input type InputType.Number. If the Input type is set to Number, the maxlength value is ignored.`,name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},noTypeahead:{defaultValue:null,description:"Defines whether the value will be autcompleted to match an item",name:"noTypeahead",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},showClearIcon:{defaultValue:null,description:"Defines whether the clear icon of the input will be shown.",name:"showClearIcon",required:!1,type:{name:"boolean"}},showSuggestions:{defaultValue:null,description:'Defines whether the component should show suggestions, if such are present.\n\n**Note:** You need to import the `InputSuggestions` module from `"@ui5/webcomponents/dist/features/InputSuggestions.js"` to enable this functionality.',name:"showSuggestions",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"InputType.Text"},description:"Defines the HTML type of the component. Available options are: `Text`, `Email`, `Number`, `Password`, `Tel`, and `URL`.\n\n**Notes:**\n\n*   The particular effect of this property differs depending on the browser and the current language settings, especially for type `Number`.\n*   The property is mostly intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'}]}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{h as M};
//# sourceMappingURL=index-59683e1f.js.map
