import{_ as n}from"./iframe-b2b8afc3.js";import{I as o}from"./Input-288c7757.js";import{w as a}from"./withWebComponent-d61dcbbc.js";import{V as s}from"./ValueState-ab6838cc.js";const e=a("ui5-input",["accessibleName","accessibleNameRef","maxlength","name","placeholder","type","value","valueState"],["disabled","noTypeahead","readonly","required","showClearIcon","showSuggestions"],["icon","valueStateMessage"],["change","input","suggestion-item-preview","suggestion-item-select"],()=>n(()=>import("./Input-288c7757.js").then(t=>t.b),["./Input-288c7757.js","./UI5Element-1225b968.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-d61dcbbc.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-c5c4720b.js","./Icons-524f4c51.js","./ResizeHandler-a7d132d0.js","./Device-208919c6.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./AriaLabelHelper-43a261ec.js","./getActiveElement-bcae01ed.js","./decline-d268166e.js","./i18n-defaults-80781f7e.js","./Suggestions.css-512056d3.js","./information-b4bc7d32.js","./Popover-abd2c401.js","./PopupUtils-e5ce8d68.js","./PopupsCommon.css-02b533b0.js","./FocusableElements-fe6ae4c8.js","./isElementHidden-01c07146.js","./BrowserScrollbar.css-401cf542.js","./MediaRange-25b98f31.js","./style-map-33b353d0.js","./class-map-519e9c6d.js","./i18n-defaults-254d6b69.js","./ResponsivePopoverCommon.css-1bfa5717.js","./ValueStateMessage.css-d1957aab.js"],import.meta.url));e.displayName="Input";e.defaultProps={type:o.Text,valueState:s.None};try{e.displayName="Input",e.__docgenInfo={description:'The `Input` component allows the user to enter and edit text or numeric values in one line.\nAdditionally, you can provide `suggestionItems`, that are displayed in a popover right under the input.\n\nThe text field can be editable or read-only (`readonly` property), and it can be enabled or disabled (`disabled` property). To visualize semantic states, such as "error" or "warning", the `valueState` property is provided. When the user makes changes to the text, the change event is fired, which enables you to react on any text change.\n\n**Note:** If you are using the `Input` as a single npm module, don\'t forget to import the `InputSuggestions` module from "@ui5/webcomponents/dist/features/InputSuggestions.js" to enable the suggestions functionality.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Input" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"Input",props:{children:{defaultValue:null,description:`Defines the suggestion items.

Example:

<pre>
  <code>
   &lt;Input showSuggestions><br />
   &nbsp;&nbsp;&lt;SuggestionItem text="Item #1" /><br />
   &nbsp;&nbsp;&lt;SuggestionItem text="Item #2" /><br />
   &lt;/Input>
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
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n**Note:** If the component has `suggestionItems`, the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.\n\n__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the component changes at each keystroke, and when a suggestion item has been selected.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onSuggestionItemPreview:{defaultValue:null,description:"Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.",name:"onSuggestionItemPreview",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { item: HTMLElement; targetRef: HTMLElement; }>) => void"}},onSuggestionItemSelect:{defaultValue:null,description:"Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",name:"onSuggestionItemSelect",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { item: HTMLElement; }>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},maxlength:{defaultValue:null,description:`Sets the maximum number of characters available in the input field.

**Note:** This property is not compatible with the Input type InputType.Number. If the Input type is set to Number, the maxlength value is ignored.`,name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},noTypeahead:{defaultValue:null,description:"Defines whether the value will be autcompleted to match an item",name:"noTypeahead",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},showClearIcon:{defaultValue:null,description:"Defines whether the clear icon of the input will be shown.",name:"showClearIcon",required:!1,type:{name:"boolean"}},showSuggestions:{defaultValue:null,description:'Defines whether the component should show suggestions, if such are present.\n\n**Note:** You need to import the `InputSuggestions` module from `"@ui5/webcomponents/dist/features/InputSuggestions.js"` to enable this functionality.',name:"showSuggestions",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"InputType.Text"},description:"Defines the HTML type of the component. Available options are: `Text`, `Email`, `Number`, `Password`, `Tel`, and `URL`.\n\n**Notes:**\n\n*   The particular effect of this property differs depending on the browser and the current language settings, especially for type `Number`.\n*   The property is mostly intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'}]}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as I};
//# sourceMappingURL=index-ff5f1f3c.js.map
