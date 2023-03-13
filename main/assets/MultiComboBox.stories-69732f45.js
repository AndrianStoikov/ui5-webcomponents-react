import{a as b,j as t}from"./jsx-runtime-670450c2.js";import{_ as d}from"./iframe-6c121fc0.js";import{M as r,a as e}from"./index-058cebc9.js";import{w as c}from"./withWebComponent-e4481254.js";import{V as C}from"./ValueState-ab6838cc.js";const n=c("ui5-mcb-group-item",["text"],[],[],[],()=>d(()=>import("./index-058cebc9.js").then(o=>o.b),["./index-058cebc9.js","./iframe-6c121fc0.js","./UI5Element-427ec721.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-e4481254.js","./utils-ed90fb1b.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./slot-634e3e91.js","./i18n-defaults-da1c0a37.js","./ResizeHandler-1fa8a094.js","./ValueState-2c5e5904.js","./Keys-3acbae73.js","./Integer-f7f172c9.js","./slim-arrow-down-068fe0af.js","./Icons-7b82f601.js","./Device-208919c6.js","./decline-5eb6d937.js","./i18n-defaults-7dff8409.js","./Suggestions.css-faab6178.js","./information-0837f136.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-5167186a.js","./ListItemBase-eee2ba1b.js","./ItemNavigation-18222ac6.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./BrowserScrollbar.css-615afd63.js","./debounce-9c2fb7dd.js","./BusyIndicator-f47be8a3.js","./Label-040efebd.js","./WrappingType-b81e595a.js","./class-map-5d8e4b2b.js","./style-map-77d201d2.js","./Tokenizer-4c6e4728.js","./ScrollEnablement-4353003c.js","./animate-1a16ba20.js","./ResponsivePopover-d8f47bac.js","./PopupsCommon.css-be465885.js","./FocusableElements-7e25663e.js","./MediaRange-25b98f31.js","./Popover-661594f1.js","./Dialog-6c305779.js","./Icon-a9b28f0c.js","./Button-b7bbfa18.js","./MarkedEvents-b83081e9.js","./Title-b986a4bd.js","./StandardListItem-414a5173.js","./ListItem-a65a20e6.js","./RadioButton-c2b6bc1d.js","./CheckBox-9b089db0.js","./accept-a98baca8.js","./HasPopup-47461347.js","./slim-arrow-right-bbef5919.js","./Avatar-ff49e25a.js","./employee-98ce1b38.js","./ResponsivePopoverCommon.css-187e38b6.js","./ValueStateMessage.css-37773c69.js","./Token-3c50d44c.js","./ToggleButton-a9b3674e.js","./ComboBoxFilter-ce703529.js","./ValueState-ab6838cc.js"],import.meta.url));n.displayName="MultiComboBoxGroupItem";try{n.displayName="MultiComboBoxGroupItem",n.__docgenInfo={description:'The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const I={title:"Inputs / MultiComboBox",component:r,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:C.None}},m={render:o=>b(r,{...o,children:[t(e,{text:"Item 1"}),t(e,{text:"Item 2"}),t(e,{text:"Item 3"}),t(e,{text:"Item 4"}),t(e,{text:"Item 5"})]})},i={render:o=>b(r,{...o,children:[t(n,{text:"Asia"}),t(e,{text:"Afghanistan"}),t(e,{text:"China"}),t(e,{text:"India"}),t(e,{text:"Indonesia"}),t(n,{text:"Europe"}),t(e,{text:"Austria"}),t(e,{text:"Bulgaria"}),t(e,{text:"Germany"}),t(e,{text:"Italy"}),t(n,{text:"North America"}),t(e,{text:"Canada"}),t(e,{text:"Granada"}),t(e,{text:"Haiti"}),t(e,{text:"United States"})]})};var a,u,l;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItem text="Item 1" />
        <MultiComboBoxItem text="Item 2" />
        <MultiComboBoxItem text="Item 3" />
        <MultiComboBoxItem text="Item 4" />
        <MultiComboBoxItem text="Item 5" />
      </MultiComboBox>;
  }
}`,...(l=(u=m.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var s,x,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxGroupItem text="Asia"></MultiComboBoxGroupItem>
        <MultiComboBoxItem text="Afghanistan"></MultiComboBoxItem>
        <MultiComboBoxItem text="China"></MultiComboBoxItem>
        <MultiComboBoxItem text="India"></MultiComboBoxItem>
        <MultiComboBoxItem text="Indonesia"></MultiComboBoxItem>
        <MultiComboBoxGroupItem text="Europe"></MultiComboBoxGroupItem>
        <MultiComboBoxItem text="Austria"></MultiComboBoxItem>
        <MultiComboBoxItem text="Bulgaria"></MultiComboBoxItem>
        <MultiComboBoxItem text="Germany"></MultiComboBoxItem>
        <MultiComboBoxItem text="Italy"></MultiComboBoxItem>
        <MultiComboBoxGroupItem text="North America"></MultiComboBoxGroupItem>
        <MultiComboBoxItem text="Canada"></MultiComboBoxItem>
        <MultiComboBoxItem text="Granada"></MultiComboBoxItem>
        <MultiComboBoxItem text="Haiti"></MultiComboBoxItem>
        <MultiComboBoxItem text="United States"></MultiComboBoxItem>
      </MultiComboBox>;
  }
}`,...(p=(x=i.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const M=["Default","Grouping"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Grouping:i,__namedExportsOrder:M,default:I},Symbol.toStringTag,{value:"Module"}));export{y as C,m as D,i as G,n as M};
//# sourceMappingURL=MultiComboBox.stories-69732f45.js.map
