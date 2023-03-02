import{j as i,a as t,F as n}from"./jsx-runtime-670450c2.js";import{a as l}from"./Import-f33ae237.js";import{M as a,C as c}from"./index-a8c6d1d6.js";import{e as s}from"./AnalyticalTable.stories-57beffb1.js";import{u as p}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-G4YQS2SV-7a95a674.js";import"./iframe-a2c24f12.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./delete-0d639d92.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Icons-5bcf1e3f.js";import"./decline-ff534003.js";import"./ListItem-9550e3d3.js";import"./Integer-8010a7ae.js";import"./MarkedEvents-0e37da6f.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./class-map-abcca105.js";import"./FocusableElements-5a723910.js";import"./Keys-50a1cb5a.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./MediaRange-25b98f31.js";import"./style-map-7b3eb5df.js";import"./ListItemBase-ef18a748.js";import"./ItemNavigation-4b509b49.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-21c27087.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-59c61392.js";import"./Label-6707bdfc.js";import"./WrappingType-b81e595a.js";import"./RadioButton-d0c7abe6.js";import"./ValueState-2c5e5904.js";import"./CheckBox-2890456e.js";import"./accept-70258933.js";import"./Button-2e5054c2.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a1b07349.js";import"./settings-259db384.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./i18n-defaults-a62b2e2b.js";import"./I18nContext-bef5b452.js";import"./useIsomorphicId-78860c77.js";import"./useIsRTL-fcdcb328.js";import"./index-99d317a4.js";import"./CssSizeVariables-bd372cde.js";import"./CustomVariables-fd831c35.js";import"./filter-6ced0fd8.js";import"./group-2-2d57a811.js";import"./index-8ff5b4a2.js";import"./Popover-97ca01c1.js";import"./stopPropagation-da74d54e.js";import"./index-6633dd4b.js";import"./CustomListItem-57877d6f.js";import"./index-8c0b7f9e.js";import"./index-e5ea7df7.js";import"./index-1f65844d.js";import"./StandardListItem-cb5818d4.js";import"./Avatar-b22f5314.js";import"./employee-10cd14ab.js";import"./ValueState-ab6838cc.js";import"./index-2930037b.js";import"./Input-a6aac6bd.js";import"./Suggestions.css-1f63061d.js";import"./ResponsivePopoverCommon.css-bc05f183.js";import"./ValueStateMessage.css-6e86a950.js";import"./navigation-down-arrow-131293e3.js";import"./navigation-right-arrow-9e098972.js";import"./useCurrentTheme-cb0d6a4d.js";import"./addCustomCSSWithScoping-b4da4774.js";import"./index-2034a973.js";import"./index-0d4b1695.js";import"./index-f348d651.js";import"./GlobalStyleClasses-7209358d.js";import"./index-2c4be2cb.js";import"./Title-18f6d5a1.js";import"./debounce-5c77766a.js";import"./index-e9f60876.js";import"./slim-arrow-down-f36436a6.js";import"./GroupHeaderListItem-ba035fbc.js";import"./Tokenizer-2c01de3a.js";import"./ScrollEnablement-fd5196de.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-bf5faf8e.js";import"./Dialog-859ab2f5.js";import"./Token-2b1b5395.js";import"./ToggleButton-a83fc587.js";import"./ComboBoxItem-9c4ebead.js";import"./index-ea549b31.js";import"./index-38074a9d.js";import"./InvisibleMessage-7e46d068.js";import"./index-27c3e3e5.js";import"./index-3fb629fa.js";import"./index-011b3eaa.js";function wi(r={}){const{wrapper:e}=Object.assign({},p(),r.components);return e?i(e,Object.assign({},r,{children:i(m,{})})):m();function m(){const o=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre"},p(),r.components);return t(n,{children:[i(a,{title:"Data Display / AnalyticalTable / Plugin: useOnColumnResize"}),`
`,i(o.h1,{children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,i(l,{moduleName:"AnalyticalTableHooks",packageName:"@ui5/webcomponents-react"}),`
`,t(o.p,{children:["The ",i(o.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,i(o.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",i(o.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,t(o.p,{children:[i(o.code,{children:"options"}),":"]}),`
`,t(o.ul,{children:[`
`,t(o.li,{children:[i(o.code,{children:"liveUpdate"}),": If ",i(o.code,{children:"liveUpdate"})," is ",i(o.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",i(o.code,{children:"options.wait"})," delay."]}),`
`,t(o.li,{children:[i(o.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",t(o.strong,{children:["Defaults to ",i(o.code,{children:"100"})]}),". (Only has an effect if ",i(o.code,{children:"liveUpdate"})," is ",i(o.code,{children:"true"}),")"]}),`
`]}),`
`,i(o.h2,{children:"Example"}),`
`,i(c,{sourceState:"none",of:s}),`
`,i(o.pre,{children:i(o.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = (e) => {
    console.log(e.columnWidth, e.header);
  };
  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      tableHooks={[
        AnalyticalTableHooks.useOnColumnResize(handleColumResize, {
          liveUpdate: false,
          wait: 100
        })
      ]}
    />
  );
};
`})})]})}}export{wi as default};
//# sourceMappingURL=PluginOnColumnResize-3cf75b45.js.map
