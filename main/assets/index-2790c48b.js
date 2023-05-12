import{_ as n}from"./iframe-296980c2.js";import{B as o}from"./Bar-d7dcdbd1.js";import{w as a}from"./withWebComponent-d61dcbbc.js";const e=a("ui5-bar",["design"],[],["endContent","startContent"],[],()=>n(()=>import("./Bar-d7dcdbd1.js").then(t=>t.b),["./Bar-d7dcdbd1.js","./UI5Element-74c2a827.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-d61dcbbc.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./ResizeHandler-0f082c48.js","./class-map-519e9c6d.js","./parameters-bundle.css-deb4e0b1.js"],import.meta.url));e.displayName="Bar";e.defaultProps={design:o.Header};try{e.displayName="Bar",e.__docgenInfo={description:`The Bar is a container which is primarily used to hold titles, buttons and input elements and its design and functionality is the basis for page headers and footers. The component consists of three areas to hold its content - startContent slot, default slot and endContent slot. It has the capability to center content, such as a title, while having other components on the left and right side.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Bar" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Bar",props:{children:{defaultValue:null,description:"Defines the content in the middle of the bar",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},endContent:{defaultValue:null,description:`Defines the content at the end of the bar

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="endContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"endContent",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},startContent:{defaultValue:null,description:`Defines the content at the start of the bar

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="startContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"startContent",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},design:{defaultValue:{value:"BarDesign.Header"},description:"Defines the component's design.\n\n**Note:** Available options are:\n\n*   `Header`\n*   `Subheader`\n*   `Footer`\n*   `FloatingFooter`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Header"'},{value:'"Subheader"'},{value:'"Footer"'},{value:'"FloatingFooter"'},{value:'"Header"'},{value:'"Subheader"'},{value:'"Footer"'},{value:'"FloatingFooter"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as B};
//# sourceMappingURL=index-2790c48b.js.map
