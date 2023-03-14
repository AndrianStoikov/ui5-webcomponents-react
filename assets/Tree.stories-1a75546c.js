import{a,j as t,F as M}from"./jsx-runtime-670450c2.js";import{k as c}from"./UI5Element-427ec721.js";import{a as i}from"./Icons-7b82f601.js";import{s as f}from"./general-leave-request-9453ba73.js";import{r as y}from"./index-f1f749bf.js";import{T as H}from"./index-2eaff221.js";import{B as W}from"./index-af81276e.js";import{B as U}from"./index-d5243cf0.js";import{I as g}from"./index-a281a048.js";import{_ as m}from"./iframe-ffcb41c0.js";import"./Tree-3560c798.js";import{w as u}from"./withWebComponent-e4481254.js";import{V as _}from"./ValueState-ab6838cc.js";import{a as N}from"./ListItem-20b1ed77.js";import{a as x}from"./ListItemBase-16737f88.js";const o=u("ui5-tree",["accessibleName","accessibleNameRef","footerText","headerText","mode","noDataText"],[],["header"],["item-click","item-delete","item-mouseout","item-mouseover","item-toggle","selection-change"],()=>m(()=>import("./Tree-3560c798.js").then(n=>n.d),["./Tree-3560c798.js","./UI5Element-427ec721.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-e4481254.js","./utils-ed90fb1b.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./slot-634e3e91.js","./event-97133b94.js","./AriaLabelHelper-43a261ec.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./Keys-3acbae73.js","./ListItem-20b1ed77.js","./MarkedEvents-b83081e9.js","./decline-f2b294b3.js","./Icons-7b82f601.js","./i18n-defaults-80781f7e.js","./ListItemBase-16737f88.js","./ResizeHandler-1fa8a094.js","./ItemNavigation-18222ac6.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./BrowserScrollbar.css-615afd63.js","./debounce-9c2fb7dd.js","./BusyIndicator-46a9aff5.js","./Label-040efebd.js","./Device-208919c6.js","./WrappingType-b81e595a.js","./class-map-5d8e4b2b.js","./i18n-defaults-d66b3d5e.js","./style-map-77d201d2.js","./RadioButton-28647d07.js","./CheckBox-90578acd.js","./accept-a98baca8.js","./Icon-459702a7.js","./Button-04bad9a0.js","./HasPopup-47461347.js","./slim-arrow-right-bbef5919.js","./navigation-right-arrow-d0296b1c.js","./navigation-down-arrow-b7eae25c.js"],import.meta.url));o.displayName="Tree";o.defaultProps={mode:x.None};try{o.displayName="Tree",o.__docgenInfo={description:`The \`Tree\` component provides a tree structure for displaying data in a hierarchy.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Tree" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Tree",props:{children:{defaultValue:null,description:"Defines the items of the component. Tree items may have other tree items as children.\n\n**Note:** Use `TreeItem` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header.

**Note:** When the \`header\` slot is set, the \`headerText\` property is ignored.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onItemClick:{defaultValue:null,description:"Fired when a tree item is activated.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, { item: HTMLElement; }>) => void"}},onItemDelete:{defaultValue:null,description:"Fired when the Delete button of any tree item is pressed.\n\n**Note:** A Delete button is displayed on each item, when the component `mode` property is set to `Delete`.",name:"onItemDelete",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, { item: HTMLElement; }>) => void"}},onItemMouseout:{defaultValue:null,description:"Fired when the mouse cursor leaves the tree item borders.",name:"onItemMouseout",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, { item: HTMLElement; }>) => void"}},onItemMouseover:{defaultValue:null,description:"Fired when the mouse cursor enters the tree item borders.",name:"onItemMouseover",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, { item: HTMLElement; }>) => void"}},onItemToggle:{defaultValue:null,description:"Fired when a tree item is expanded or collapsed. _Note:_ You can call `preventDefault()` on the event object to suppress the event, if needed. This may be handy for example if you want to dynamically load tree items upon the user expanding a node. Even if you prevented the event's default behavior, you can always manually call `toggle()` on a tree item.",name:"onItemToggle",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, { item: HTMLElement; }>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction in `SingleSelect`, `SingleSelectBegin`, `SingleSelectEnd` and `MultiSelect` modes.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, { selectedItems: unknown[]; previouslySelectedItems: unknown[]; targetItem: HTMLElement; }>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},footerText:{defaultValue:null,description:"Defines the component footer text.",name:"footerText",required:!1,type:{name:"string"}},headerText:{defaultValue:null,description:"Defines the component header text.\n\n**Note:** If the `header` slot is set, this property is ignored.",name:"headerText",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"ListMode.None"},description:"Defines the mode of the component. Since the tree uses a `List` to display its structure, the tree modes are exactly the same as the list modes, and are all applicable.\n\n**Note:**\n\n*   `None`\n*   `SingleSelect`\n*   `SingleSelectBegin`\n*   `SingleSelectEnd`\n*   `MultiSelect`\n*   `Delete`",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'},{value:'"Delete"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'}]}},noDataText:{defaultValue:null,description:"Defines the text that is displayed when the component contains no items.",name:"noDataText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const e=u("ui5-tree-item",["additionalText","additionalTextState","text","accessibleName","icon","type"],["expanded","hasChildren","indeterminate","navigated","selected"],["deleteButton"],["detail-click"],()=>m(()=>import("./Tree-3560c798.js").then(n=>n.b),["./Tree-3560c798.js","./UI5Element-427ec721.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-e4481254.js","./utils-ed90fb1b.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./slot-634e3e91.js","./event-97133b94.js","./AriaLabelHelper-43a261ec.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./Keys-3acbae73.js","./ListItem-20b1ed77.js","./MarkedEvents-b83081e9.js","./decline-f2b294b3.js","./Icons-7b82f601.js","./i18n-defaults-80781f7e.js","./ListItemBase-16737f88.js","./ResizeHandler-1fa8a094.js","./ItemNavigation-18222ac6.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./BrowserScrollbar.css-615afd63.js","./debounce-9c2fb7dd.js","./BusyIndicator-46a9aff5.js","./Label-040efebd.js","./Device-208919c6.js","./WrappingType-b81e595a.js","./class-map-5d8e4b2b.js","./i18n-defaults-d66b3d5e.js","./style-map-77d201d2.js","./RadioButton-28647d07.js","./CheckBox-90578acd.js","./accept-a98baca8.js","./Icon-459702a7.js","./Button-04bad9a0.js","./HasPopup-47461347.js","./slim-arrow-right-bbef5919.js","./navigation-right-arrow-d0296b1c.js","./navigation-down-arrow-b7eae25c.js"],import.meta.url));e.displayName="TreeItem";e.defaultProps={additionalTextState:_.None,type:N.Active};try{e.displayName="TreeItem",e.__docgenInfo={description:'The `TreeItem` represents a node in a tree structure, shown as a `List`.\nThis is the item to use inside a `Tree`. You can represent an arbitrary tree structure by recursively nesting tree items.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Tree" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TreeItem",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n**Note:** Use `TreeItem` or `TreeItemCustom`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode. **Note:** While the slot allows custom buttons, to match design guidelines, please use the \`Button\` component. **Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:"Fired when the user clicks on the detail button when type is `Detail`.",name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<TreeItemDomRef, never>) => void"}},additionalText:{defaultValue:null,description:"Defines the `additionalText`, displayed in the end of the tree item.",name:"additionalText",required:!1,type:{name:"string"}},additionalTextState:{defaultValue:{value:"ValueState.None"},description:'Defines the state of the `additionalText`.\nAvailable options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Error"`.',name:"additionalTextState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},text:{defaultValue:null,description:"Defines the text of the tree item.",name:"text",required:!1,type:{name:"string"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},expanded:{defaultValue:null,description:"Defines whether the tree list item will show a collapse or expand icon inside its toggle button.",name:"expanded",required:!1,type:{name:"boolean"}},hasChildren:{defaultValue:null,description:"Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.\n_Note:_ This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons. Set this to `true` for nodes you intend to load lazily, when the user clicks the expand button. It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.",name:"hasChildren",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"If set, an icon will be displayed before the text of the tree list item.",name:"icon",required:!1,type:{name:"string"}},indeterminate:{defaultValue:null,description:"Defines whether the selection of a tree node is displayed as partially selected.\n\n**Note:** The indeterminate state can be set only programmatically and can’t be achieved by user interaction, meaning that the resulting visual state depends on the values of the `indeterminate` and `selected` properties:\n\n*   If a tree node has both `selected` and `indeterminate` set to `true`, it is displayed as partially selected.\n*   If a tree node has `selected` set to `true` and `indeterminate` set to `false`, it is displayed as selected.\n*   If a tree node has `selected` set to `false`, it is displayed as not selected regardless of the value of the `indeterminate` property.\n\n\n**Note:** This property takes effect only when the `Tree` is in `MultiSelect` mode.",name:"indeterminate",required:!1,type:{name:"boolean"}},navigated:{defaultValue:null,description:"The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item.",name:"navigated",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"ListItemType.Active"},description:"Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'}]}},selected:{defaultValue:null,description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const r=u("ui5-tree-item-custom",["accessibleName","additionalTextState","icon","type"],["hideSelectionElement","expanded","hasChildren","indeterminate","navigated","selected"],["content","deleteButton"],["detail-click"],()=>m(()=>import("./Tree-3560c798.js").then(n=>n.c),["./Tree-3560c798.js","./UI5Element-427ec721.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-e4481254.js","./utils-ed90fb1b.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./slot-634e3e91.js","./event-97133b94.js","./AriaLabelHelper-43a261ec.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./Keys-3acbae73.js","./ListItem-20b1ed77.js","./MarkedEvents-b83081e9.js","./decline-f2b294b3.js","./Icons-7b82f601.js","./i18n-defaults-80781f7e.js","./ListItemBase-16737f88.js","./ResizeHandler-1fa8a094.js","./ItemNavigation-18222ac6.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./BrowserScrollbar.css-615afd63.js","./debounce-9c2fb7dd.js","./BusyIndicator-46a9aff5.js","./Label-040efebd.js","./Device-208919c6.js","./WrappingType-b81e595a.js","./class-map-5d8e4b2b.js","./i18n-defaults-d66b3d5e.js","./style-map-77d201d2.js","./RadioButton-28647d07.js","./CheckBox-90578acd.js","./accept-a98baca8.js","./Icon-459702a7.js","./Button-04bad9a0.js","./HasPopup-47461347.js","./slim-arrow-right-bbef5919.js","./navigation-right-arrow-d0296b1c.js","./navigation-down-arrow-b7eae25c.js"],import.meta.url));r.displayName="TreeItemCustom";r.defaultProps={additionalTextState:_.None,type:N.Active};try{r.displayName="TreeItemCustom",r.__docgenInfo={description:'The `TreeItemCustom` represents a node in a tree structure, shown as a `List`.\nThis is the item to use inside a `Tree`. You can represent an arbitrary tree structure by recursively nesting tree items. You can use this item to put any custom content inside the tree item.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Tree" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TreeItemCustom",props:{content:{defaultValue:null,description:`Defines the content of the \`TreeItem\`.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="content"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"content",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},children:{defaultValue:null,description:"Defines the items of the component.\n\n**Note:** Use `TreeItem` or `TreeItemCustom`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode. **Note:** While the slot allows custom buttons, to match design guidelines, please use the \`Button\` component. **Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:"Fired when the user clicks on the detail button when type is `Detail`.",name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<TreeItemCustomDomRef, never>) => void"}},hideSelectionElement:{defaultValue:null,description:"Defines whether the tree list item should display the selection element.",name:"hideSelectionElement",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},additionalTextState:{defaultValue:{value:"ValueState.None"},description:'Defines the state of the `additionalText`.\nAvailable options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Error"`.',name:"additionalTextState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},expanded:{defaultValue:null,description:"Defines whether the tree list item will show a collapse or expand icon inside its toggle button.",name:"expanded",required:!1,type:{name:"boolean"}},hasChildren:{defaultValue:null,description:"Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.\n_Note:_ This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons. Set this to `true` for nodes you intend to load lazily, when the user clicks the expand button. It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.",name:"hasChildren",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"If set, an icon will be displayed before the text of the tree list item.",name:"icon",required:!1,type:{name:"string"}},indeterminate:{defaultValue:null,description:"Defines whether the selection of a tree node is displayed as partially selected.\n\n**Note:** The indeterminate state can be set only programmatically and can’t be achieved by user interaction, meaning that the resulting visual state depends on the values of the `indeterminate` and `selected` properties:\n\n*   If a tree node has both `selected` and `indeterminate` set to `true`, it is displayed as partially selected.\n*   If a tree node has `selected` set to `true` and `indeterminate` set to `false`, it is displayed as selected.\n*   If a tree node has `selected` set to `false`, it is displayed as not selected regardless of the value of the `indeterminate` property.\n\n\n**Note:** This property takes effect only when the `Tree` is in `MultiSelect` mode.",name:"indeterminate",required:!1,type:{name:"boolean"}},navigated:{defaultValue:null,description:"The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item.",name:"navigated",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"ListItemType.Active"},description:"Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'}]}},selected:{defaultValue:null,description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const A="copy",S="M32 192l96-96h224q13 0 22.5 9t9.5 23v352q0 14-9 23t-23 9H65q-14 0-23.5-9T32 480V192zm320 288V128H160v64q0 14-9.5 23t-23.5 9H65v256h287zM159 64l65-64h224q12 0 22 9t10 23v352q0 14-9 23t-23 9h-32v-32h32V32H256v32h-97zm-15 256h128q16 0 16 16 0 6-4.5 11t-11.5 5H144q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5zm-16 80q0-7 5-11.5t11-4.5h128q16 0 16 16 0 6-4.5 11t-11.5 5H144q-6 0-11-5t-5-11z",$=!1,B="SAP-icons-v4",R="@ui5/webcomponents-icons";i(A,{pathData:S,ltr:$,collection:B,packageName:R});const P="copy",D="M409.5 103q33 0 55 22.5t22 54.5v256q0 32-22 54t-55 22h-204q-33 0-55-22t-22-54V180q0-32 22-54.5t55-22.5h204zm26 77q0-11-7.5-18.5t-18.5-7.5h-204q-12 0-19 7.5t-7 18.5v256q0 25 26 25h204q11 0 18.5-7t7.5-18V180zm-77 179q11 0 18.5 7t7.5 18q0 12-7.5 19t-18.5 7h-102q-26 0-26-26 0-25 26-25h102zm0-77q11 0 18.5 7t7.5 19q0 11-7.5 18t-18.5 7h-102q-26 0-26-25 0-26 26-26h102zm26-255q0 11-7.5 18t-18.5 7h-256q-25 0-25 26v306q0 26-26 26-25 0-25-26V78q0-33 22-55t54-22h256q11 0 18.5 7t7.5 19z",F=!1,O="SAP-icons-v5",j="@ui5/webcomponents-icons";i(P,{pathData:D,ltr:F,collection:O,packageName:j});c("sap_horizon");const Y="copy",Q="download-from-cloud",V="M493.037 211.587q17.965 22.955 17.965 55.89 0 17.965-6.986 30.94-2.995 7.985-7.985 14.97l-9.98 13.974q-5.989 6.986-10.48 9.98t-12.475 5.988q-18.963 7.985-33.934 7.985h-13.973v-31.938h13.973q6.986 0 21.957-4.99 4.99-1.996 6.487-2.994t4.491-3.992q3.993-4.99 6.987-9.98t4.99-9.981l1.996-3.993q2.994-5.988 2.994-15.968 0-23.954-10.978-35.93-8.983-11.977-29.942-17.965l-40.92-10.979 21.957-35.93q3.992-6.986 3.992-17.964 0-24.952-16.966-40.92-15.97-15.97-41.919-15.97-20.959 0-35.93 11.977l-32.935 28.944-16.967-39.922q-12.975-27.946-36.928-43.915-22.955-16.966-57.887-16.966-12.974 0-31.937 7.984-16.967 7.984-33.934 22.955-10.979 9.98-20.96 30.94-6.985 13.972-6.985 34.932 0 18.963 8.982 33.933l21.957 36.928-41.918 9.98q-21.957 5.989-32.936 19.962l-.998.998v.998q-12.974 14.97-12.974 35.93 0 8.982 4.99 18.963.998 1.996 4.99 7.984t16.967 16.967q1.996 1.996 12.975 4.99t39.922 2.994v31.938q-22.955 0-42.917-2.994t-30.94-12.975q-23.952-20.959-30.939-35.93T0 267.478q0-34.932 20.96-57.887 18.962-22.956 49.902-30.94-12.975-21.957-12.975-49.902 0-28.944 9.98-48.905 10.979-23.953 27.946-40.92 17.965-16.967 41.918-27.945T183.641 0q44.913 0 75.852 21.957 31.938 21.957 47.907 57.887 22.955-19.961 56.888-19.961 38.924 0 63.876 24.951 26.947 25.95 26.947 63.876 0 18.963-8.982 33.933 27.945 6.987 46.908 28.944zM279.454 502.019Q269.474 512 256.5 512t-21.957-9.98L132.74 401.215q-11.977-11.976 0-22.955 4.99-4.99 10.978-4.99t10.979 4.99l84.834 84.835V192.624q0-15.969 15.969-15.969t15.969 15.969v272.468l86.83-86.83q10.979-10.98 22.955 0 10.979 10.978 0 22.954z",G=!1,J="SAP-icons-v4",K="@ui5/webcomponents-icons";i(Q,{pathData:V,ltr:G,collection:J,packageName:K});const X="download-from-cloud",C="M491 267q9 0 15 5.5t6 15.5q0 26-10 49.5t-27.5 41-41 27.5-49.5 10H107q-22 0-41.5-8.5T32 385 9.5 351 1 309q0-45 30.5-75.5T107 203h2q4-27 17-50.5t32.5-41 44.5-27 53-9.5q10 0 16 6t6 15q0 22-30 22-19 0-37 8t-31.5 21.5-21.5 31-8 36.5q0 17-6 23.5t-15 6.5h-22q-27 0-45.5 18.5T43 309t18.5 45.5T107 373h277q18 0 33.5-6.5t27-17.5 18-25.5T469 294q0-27 22-27zm-207-49q-6-8-6-15 0-9 6-15t15-6 15 6l28 28V54q0-21 21-21t21 21v162l28-28q6-6 15-6 8 0 15 6 6 6 6 15 0 7-6 15l-62 61q-7 9-17 9-12 0-17-9z",Z=!1,ee="SAP-icons-v5",te="@ui5/webcomponents-icons";i(X,{pathData:C,ltr:Z,collection:ee,packageName:te});c("sap_horizon");const ne="download-from-cloud",ae="paste",k="M192 224q0-14 9-23t23-9h224q13 0 22.5 9t9.5 23v256q0 13-9.5 22.5T448 512H224q-14 0-23-9.5t-9-22.5V224zm32 256h224V224H224v256zM32 96q0-14 9.5-23T65 64h65q11-28 38-32 8-14 23-23t33-9q17 0 32 9t23 23q27 4 38 32h67q13 0 22 9t9 23v64h-31V96h-68q-5 12-12.5 22T281 128H166q-15 0-22.5-10T131 96H65v384h95v32H65q-14 0-23.5-9.5T32 480V96zm143 0h96q7 0 11.5-5t4.5-11q0-16-16-16h-15q0-14-9.5-23T224 32q-14 0-23 9t-9 23h-17q-6 0-11 4.5T159 80q0 6 5 11t11 5zm97 224h128q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5zm0 63h128q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5z",oe=!1,ie="SAP-icons-v4",le="@ui5/webcomponents-icons";i(ae,{pathData:k,ltr:oe,collection:ie,packageName:le});const se="paste",z="M427 244q11 0 17.5 6.5T451 268v219q0 11-6.5 17.5T427 511H232q-24 0-24-24V268q0-24 24-24h195zm-25 48H256v171h146V292zm-97 73q-24 0-24-24t24-24h49q11 0 17.5 6.5T378 341t-6.5 17.5T354 365h-49zm0 73q-24 0-24-24t24-24h49q11 0 17.5 6.5T378 414t-6.5 17.5T354 438h-49zm49-316q0 24-25 24H183q-11 0-17.5-6.5T159 122V98h-49v340h25q11 0 17.5 7t6.5 18-6.5 17.5T135 487H86q-11 0-17.5-6.5T62 463V73q0-11 6.5-17.5T86 49h73V25q0-11 6.5-18T183 0h146q25 0 25 25v97zm-49-73h-97v49h97V49z",re=!1,de="SAP-icons-v5",ce="@ui5/webcomponents-icons";i(se,{pathData:z,ltr:re,collection:de,packageName:ce});c("sap_horizon");const me="paste",ue={title:"Data Display / Tree",component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{mode:x.None}},l={render:n=>a(o,{...n,children:[t(e,{expanded:!0,text:"Tree 1",icon:me,selected:!0,children:a(e,{expanded:!0,text:"Tree 1.1",selected:!0,children:[t(e,{text:"Tree 1.1.1"}),t(e,{text:"Tree 1.1.2"})]})}),a(e,{text:"Tree 2",icon:Y,children:[a(e,{text:"Tree 2.1",children:[t(e,{text:"Tree 2.1.1"}),a(e,{text:"Tree 2.1.2",children:[t(e,{text:"Tree 2.1.2.1"}),t(e,{text:"Tree 2.1.2.2"}),t(e,{text:"Tree 2.1.2.3"}),t(e,{text:"Tree 2.1.2.5"})]})]}),t(e,{text:"Tree 2.2"})]}),t(e,{text:"Tree 3 (no icon)"}),t(r,{content:a("div",{style:{display:"flex",alignItems:"center"},children:[t(g,{name:f,style:{marginInlineEnd:"2rem"}}),t(H,{children:"I'm a fully customizable TreeItemCustom!"}),t(U,{children:"Btn"}),t(g,{name:f,style:{marginInlineStart:"2rem"}})]})})]})},s={render:n=>{const[h,E]=y.useState(null),[L,p]=y.useState(!1);return t(W,{active:L,style:{width:"100%"},children:a(o,{...n,onItemToggle:d=>{d.detail.item.dataset.id==="lazychildren"&&!h&&(d.preventDefault(),p(!0),setTimeout(()=>{p(!1),E(a(M,{children:[t(e,{text:"Tree 3.1"}),t(e,{text:"Tree 3.2"})]})),d.detail.item.toggle()},3e3))},children:[a(e,{text:"Has pre-loaded children",children:[t(e,{text:"Tree 1.1"}),t(e,{text:"Tree 1.2"})]}),t(e,{text:"Has no children"}),t(e,{text:"Has children but not yet loaded",hasChildren:!0,icon:ne,"data-id":"lazychildren",children:h})]})})}};var v,T,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <Tree {...args}>
        <TreeItem expanded text="Tree 1" icon={pasteIcon} selected>
          <TreeItem expanded text="Tree 1.1" selected>
            <TreeItem text="Tree 1.1.1" />
            <TreeItem text="Tree 1.1.2" />
          </TreeItem>
        </TreeItem>
        <TreeItem text="Tree 2" icon={copyIcon}>
          <TreeItem text="Tree 2.1">
            <TreeItem text="Tree 2.1.1" />
            <TreeItem text="Tree 2.1.2">
              <TreeItem text="Tree 2.1.2.1" />
              <TreeItem text="Tree 2.1.2.2" />
              <TreeItem text="Tree 2.1.2.3" />
              <TreeItem text="Tree 2.1.2.5" />
            </TreeItem>
          </TreeItem>
          <TreeItem text="Tree 2.2" />
        </TreeItem>
        <TreeItem text="Tree 3 (no icon)" />
        <TreeItemCustom content={<div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
              <Icon name={sunIcon} style={{
          marginInlineEnd: '2rem'
        }} />
              <Text>I'm a fully customizable TreeItemCustom!</Text>
              <Button>Btn</Button>
              <Icon name={sunIcon} style={{
          marginInlineStart: '2rem'
        }} />
            </div>} />
      </Tree>;
  }
}`,...(b=(T=l.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var q,w,I;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [lazyChildren, setLazyChildren] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleItemToggle = e => {
      if (e.detail.item.dataset.id === 'lazychildren' && !lazyChildren) {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setLazyChildren(<>
              <TreeItem text="Tree 3.1" />
              <TreeItem text="Tree 3.2" />
            </>);
          e.detail.item.toggle();
        }, 3000);
      }
    };
    return <BusyIndicator active={loading} style={{
      width: '100%'
    }}>
        <Tree {...args} onItemToggle={handleItemToggle}>
          <TreeItem text="Has pre-loaded children">
            <TreeItem text="Tree 1.1" />
            <TreeItem text="Tree 1.2" />
          </TreeItem>
          <TreeItem text="Has no children" />
          <TreeItem text="Has children but not yet loaded" hasChildren icon={dlCloutIcon} data-id="lazychildren">
            {lazyChildren}
          </TreeItem>
        </Tree>
      </BusyIndicator>;
  }
}`,...(I=(w=s.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const he=["Default","LazyLoading"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Default:l,LazyLoading:s,__namedExportsOrder:he,default:ue},Symbol.toStringTag,{value:"Module"}));export{Ce as C,l as D,s as L,e as T,r as a};
//# sourceMappingURL=Tree.stories-1a75546c.js.map
