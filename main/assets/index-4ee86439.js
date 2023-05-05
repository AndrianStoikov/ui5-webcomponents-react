import{_ as t}from"./iframe-b2b8afc3.js";import"./CustomListItem-93f6b89d.js";import{w as n}from"./withWebComponent-d61dcbbc.js";import{a as o}from"./ListItem-6b3e715e.js";const e=n("ui5-li-custom",["accessibleName","type"],["navigated","selected"],["deleteButton"],["detail-click"],()=>t(()=>import("./CustomListItem-93f6b89d.js"),["./CustomListItem-93f6b89d.js","./Icons-524f4c51.js","./UI5Element-1225b968.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-d61dcbbc.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./ListItem-6b3e715e.js","./Integer-f7f172c9.js","./MarkedEvents-b83081e9.js","./Icon-c5c4720b.js","./slot-76e48863.js","./decline-d268166e.js","./i18n-defaults-80781f7e.js","./ListItemBase-2b377f8a.js","./ResizeHandler-a7d132d0.js","./ItemNavigation-112e3f18.js","./getActiveElement-bcae01ed.js","./AriaLabelHelper-43a261ec.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./BrowserScrollbar.css-401cf542.js","./debounce-9c2fb7dd.js","./BusyIndicator-d9721fcf.js","./Label-326b72d8.js","./Device-208919c6.js","./WrappingType-b81e595a.js","./class-map-519e9c6d.js","./i18n-defaults-254d6b69.js","./style-map-33b353d0.js","./RadioButton-cf363528.js","./ValueState-2c5e5904.js","./CheckBox-414bc569.js","./accept-198406be.js","./Button-f2c9b4f8.js","./HasPopup-47461347.js","./slim-arrow-right-a7c9c70c.js"],import.meta.url));e.displayName="CustomListItem";e.defaultProps={type:o.Active};try{e.displayName="CustomListItem",e.__docgenInfo={description:'A component to be used as custom list item within the `List` the same way as the standard `StandardListItem`. The component accepts arbitrary HTML content to allow full customization\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/List" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"CustomListItem",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode. **Note:** While the slot allows custom buttons, to match design guidelines, please use the \`Button\` component. **Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:"Fired when the user clicks on the detail button when type is `Detail`.",name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<CustomListItemDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the text alternative of the component. Note: If not provided a default text alternative will be set, if present.",name:"accessibleName",required:!1,type:{name:"string"}},navigated:{defaultValue:null,description:"The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item.",name:"navigated",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"ListItemType.Active"},description:"Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'}]}},selected:{defaultValue:null,description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as C};
//# sourceMappingURL=index-4ee86439.js.map
