import{_ as n}from"./iframe-4921b45d.js";import{c as o,a as i,d as a}from"./ListItemBase-124add92.js";import{w as l}from"./withWebComponent-884f99a7.js";const e=l("ui5-list",["accessibleName","accessibleNameRef","accessibleRole","busyDelay","footerText","growing","headerText","mode","noDataText","separators"],["busy","indent"],["header"],["item-click","item-close","item-delete","item-toggle","load-more","selection-change"],()=>n(()=>import("./ListItemBase-124add92.js").then(t=>t.e),["./ListItemBase-124add92.js","./UI5Element-a8445a25.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-884f99a7.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./ResizeHandler-cea672cf.js","./ItemNavigation-cb92b87f.js","./Icons-c55d12a5.js","./getActiveElement-bcae01ed.js","./Icon-3e9cb840.js","./slot-76e48863.js","./Integer-f7f172c9.js","./AriaLabelHelper-43a261ec.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./decline-c4793abd.js","./i18n-defaults-80781f7e.js","./debounce-9c2fb7dd.js","./BusyIndicator-8d822d0c.js","./Label-6cefa2d2.js","./WrappingType-b81e595a.js","./i18n-defaults-fca59c5d.js","./class-map-323a92fb.js","./style-map-34e6b8f4.js"],import.meta.url));e.displayName="List";e.defaultProps={accessibleRole:"list",busyDelay:1e3,growing:o.None,mode:i.None,separators:a.All};try{e.displayName="List",e.__docgenInfo={description:'The `List` component allows displaying a list of items, advanced keyboard handling support for navigating between items, and predefined modes to improve the development efficiency.\n\nThe `List` is a container for the available list items:\n\n*   `StandardListItem`\n*   `CustomListItem`\n*   `GroupHeaderListItem`\n\n\n\nTo benefit from the built-in selection mechanism, you can use the available selection modes, such as `SingleSelect`, `MultiSelect` and `Delete`.\n\nAdditionally, the `List` provides header, footer, and customization for the list item separators.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/List" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"List",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n**Note:** Use `StandardListItem`, `CustomListItem`, and `GroupHeaderListItem` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header.

**Note:** When \`header\` is set, the \`headerText\` property is ignored.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onItemClick:{defaultValue:null,description:"Fired when an item is activated, unless the item's `type` property is set to `Inactive`.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemClickEventDetail>) => void"}},onItemClose:{defaultValue:null,description:"Fired when the `Close` button of any item is clicked\n\n**Note:** This event is only applicable to list items that can be closed (such as notification list items), not to be confused with `onItemDelete`.",name:"onItemClose",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemCloseEventDetail>) => void"}},onItemDelete:{defaultValue:null,description:"Fired when the Delete button of any item is pressed.\n\n**Note:** A Delete button is displayed on each item, when the component `mode` property is set to `Delete`.",name:"onItemDelete",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemDeleteEventDetail>) => void"}},onItemToggle:{defaultValue:null,description:"Fired when the `Toggle` button of any item is clicked.\n\n**Note:** This event is only applicable to list items that can be toggled (such as notification group list items).",name:"onItemToggle",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemToggleEventDetail>) => void"}},onLoadMore:{defaultValue:null,description:"Fired when the user scrolls to the bottom of the list.\n\n**Note:** The event is fired when the `growing='Scroll'` property is enabled.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction in `SingleSelect`, `SingleSelectBegin`, `SingleSelectEnd` and `MultiSelect` modes.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListSelectionChangeEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:"list"},description:"Defines the accessible role of the component.",name:"accessibleRole",required:!1,type:{name:"string"}},busy:{defaultValue:null,description:"Defines if the component would display a loading indicator over the list.",name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"busyDelay",required:!1,type:{name:"number"}},footerText:{defaultValue:null,description:"Defines the footer text.",name:"footerText",required:!1,type:{name:"string"}},growing:{defaultValue:{value:"ListGrowingMode.None"},description:'Defines whether the component will have growing capability either by pressing a `More` button, or via user scroll. In both cases `onLoadMore` event is fired.\n\nAvailable options:\n\n`Button` - Shows a `More` button at the bottom of the list, pressing of which triggers the `onLoadMore` event.\n`Scroll` - The `onLoadMore` event is triggered when the user scrolls to the bottom of the list;\n`None` (default) - The growing is off.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer, on IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'}]}},headerText:{defaultValue:null,description:"Defines the component header text.\n\n**Note:** If `header` is set this property is ignored.",name:"headerText",required:!1,type:{name:"string"}},indent:{defaultValue:null,description:"Determines whether the component is indented.",name:"indent",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"ListMode.None"},description:"Defines the mode of the component.\n\n**Note:** Available options are `None`, `SingleSelect`, `SingleSelectBegin`, `SingleSelectEnd`, `MultiSelect`, and `Delete`.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'},{value:'"Delete"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'}]}},noDataText:{defaultValue:null,description:"Defines the text that is displayed when the component contains no items.",name:"noDataText",required:!1,type:{name:"string"}},separators:{defaultValue:{value:"ListSeparators.All"},description:"Defines the item separator style that is used.\n\n**Notes:**\n\n*   Avalaible options are `All`, `Inner`, and `None`.\n*   When set to `None`, none of the items are separated by horizontal lines.\n*   When set to `Inner`, the first item doesn't have a top separator and the last item doesn't have a bottom separator.",name:"separators",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"All"'},{value:'"Inner"'},{value:'"None"'},{value:'"All"'},{value:'"Inner"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
//# sourceMappingURL=index-120efae2.js.map
