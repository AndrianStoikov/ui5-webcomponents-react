import{j as t,a as r,F as c}from"./jsx-runtime-670450c2.js";import{C as u,A as p}from"./DomRefTable.module-e4ad07c3.js";import{D as g}from"./DocsHeader-678e2804.js";import{F as l}from"./Footer-7ad339ac.js";import"./index-f1f749bf.js";import{D as d}from"./DomRefTable-1de239c0.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{M as I,C as m,a as o}from"./chunk-PCJTTTQV-89275622.js";import{S as b,a as S}from"./index-9ca1e497.js";import{S as y,a as v}from"./SuggestionItemDescription-41eb0632.js";import{C as D,D as h,W as w}from"./Input.stories-c14e7e6e.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-28e65851.js";import"./iframe-fb8bab5f.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ba7ce6e.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-4cc780f4.js";import"./TableOfContent-5f1c2966.js";import"./index-8a242109.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-092ab2f3.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-8ddf870e.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./GroupHeaderListItem-d4ea7e0d.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"./ValueState-2c5e5904.js";import"./StandardListItem-ac3f40c5.js";import"./ListItem-83c0fb9e.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-52a56681.js";import"./Avatar-7e1d4e21.js";import"./employee-1bc983a2.js";import"./ValueState-ab6838cc.js";import"./ResponsivePopover-fcaf2b05.js";import"./Dialog-43ec4fb1.js";import"./Title-129aeb28.js";import"./index-a7f6df6d.js";import"./index-9386080d.js";import"./Input-4940ecdf.js";import"./Suggestions.css-154c701b.js";import"./ResponsivePopoverCommon.css-ca4e9b7c.js";import"./ValueStateMessage.css-f5f87de3.js";const M=`## Keyboard Handling

The \`Input\` provides the following keyboard shortcuts:  

*   \\[ESC\\] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
*   \\[ENTER\\] or \\[RETURN\\] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
*   \\[DOWN\\] - Focuses the next matching item in the suggestion list.
*   \\[UP\\] - Focuses the previous matching item in the suggestion list.
*   \\[HOME\\] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
*   \\[END\\] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
*   \\[PAGEUP\\] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
*   \\[PAGEDOWN\\] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.`,C=[{name:"previewItem",readonly:"true",visibility:"public",type:"sap.ui.webc.main.IInputSuggestionItem|null",description:"The suggestion item on preview."},{name:"openPicker",visibility:"public",since:"1.3.0",description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open."}];function ui(e={}){const{wrapper:n}=Object.assign({},a(),e.components);return n?t(n,Object.assign({},e,{children:t(s,{})})):s();function s(){const i=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",strong:"strong"},a(),e.components);return r(c,{children:[t(I,{of:D}),`
`,t(g,{}),`
`,t("br",{}),`
`,t(i.h2,{children:"Example"}),`
`,t(m,{of:h}),`
`,t(i.h2,{children:"Properties"}),`
`,t(u,{of:h}),`
`,t(o,{children:M}),`
`,t(d,{rows:C}),`
`,t("br",{}),`
`,t(i.h1,{children:"More Examples"}),`
`,t("br",{}),`
`,t(i.h2,{children:"Input with customizable SuggestionItem"}),`
`,r(i.p,{children:["The ",t(i.code,{children:"SuggestionItem"})," represents the suggestion item of the ",t(i.code,{children:"Input"})]}),`
`,r(i.p,{children:[t(i.strong,{children:"Note:"})," ",t(i.code,{children:"SuggestionItems"})," will only be displayed if the required module has been imported (",t(i.code,{children:"import '@ui5/webcomponents/dist/features/InputSuggestions.js';"}),`)
and the `,t(i.code,{children:"showSuggestions"})," prop is set to ",t(i.code,{children:"true"}),"."]}),`
`,t(m,{of:w}),`
`,t(o,{children:f}),`
`,t(i.h2,{children:"SuggestionItem"}),`
`,t(p,{hideHTMLPropsNote:!0,of:b}),`
`,t(o,{children:y}),`
`,t(i.h2,{children:"SuggestionGroupItem"}),`
`,t(p,{hideHTMLPropsNote:!0,of:S}),`
`,t(o,{children:v}),`
`,t(l,{})]})}}export{ui as default};
//# sourceMappingURL=Input-a7d31949.js.map
