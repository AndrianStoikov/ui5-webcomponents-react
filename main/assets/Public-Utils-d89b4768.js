import{j as e}from"./jsx-runtime-5926aa06.js";import{M as g,S as s}from"./chunk-PCJTTTQV-b18cd884.js";import"./DomRefTable.module-a8c25bc3.js";import{r as h}from"./index-ebeaab24.js";import"./Import-c5529d07.js";import{T as b}from"./TableOfContent-a60010bd.js";import{F as f}from"./Footer-bba9a361.js";import{g as w,c as v}from"./UI5Element-d19f28b4.js";import{F as y,a as C}from"./index-8330eb1d.js";import{T as S}from"./index-562e1433.js";import{T as D}from"./index-9882db35.js";import{T as o}from"./ThemingParameters-7e2e4e30.js";import{M as T}from"./utils-badfc99a.js";import{S as P}from"./index-d28860d0.js";import{O as R}from"./index-b216e9c9.js";import{P as d}from"./index-7edbee94.js";import{L as k}from"./index-ac598def.js";import{u as a}from"./index-bda0bad7.js";import{M,a as O}from"./index-3fc5f916.js";import"./iframe-7d2b1167.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./WrappingType-b81e595a.js";import"./index-dc32954d.js";import"./Link-9ab31ed2.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./Icon-2e1c5474.js";import"./Icons-d3203353.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-254d6b69.js";import"./index-5accd0f3.js";import"./Popover-fe68fced.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./PopupUtils-565f6d6c.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-8109da93.js";import"./FocusableElements-59b9e9bf.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-388120e7.js";import"./ResizeHandler-d7af0733.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./class-map-519e9c6d.js";import"./clsx.m-1229b3e0.js";import"./I18nContext-cdb50611.js";import"./ModalsContext-1c9f64b4.js";import"./CssSizeVariables-bd372cde.js";import"./CustomVariables-fd831c35.js";import"./GlobalStyleClasses-7209358d.js";import"./InvisibleMessage-d2085541.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-931b82cf.js";import"./information-b0c94f16.js";import"./i18n-defaults-80781f7e.js";import"./decline-e129c312.js";import"./ListItemBase-94a42b35.js";import"./ItemNavigation-44b1fe71.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-71038705.js";import"./Label-855a552c.js";import"./ResponsivePopover-5796c25c.js";import"./Dialog-77a1ac4d.js";import"./Button-b124cb06.js";import"./Title-64b66bf0.js";import"./StandardListItem-f085c7c3.js";import"./ListItem-fb1fa31a.js";import"./RadioButton-710ba776.js";import"./CheckBox-95047ef2.js";import"./accept-6bd35a89.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-44a405c5.js";import"./Avatar-9e18acb0.js";import"./employee-1b8c669d.js";import"./ResponsivePopoverCommon.css-4f3232f2.js";import"./ValueStateMessage.css-7a219042.js";import"./ValueState-ab6838cc.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-bffb6259.js";const c={display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"1rem",columnGap:"1rem"},p=[],m=[],F=Object.entries(o).filter(([r,i])=>r.includes("Font")?r.includes("FontUrl")?!0:(p.push([r,i]),!1):r.includes("Color")||r.includes("Shadow")||r.includes("Background")||r.includes("Chart")?(m.push([r,i]),!1):!0),I=r=>{const i={};return r.includes("Family")||r.includes("FontUrl")?i.fontFamily=r:r.includes("Size")?i.fontSize=r:r.includes("Weight"),i},B=r=>{const i={};return r.includes("Shadow")?i.boxShadow=r:i.backgroundColor=r,i},u=({value:r,varKey:i,style:t={}})=>{const[n,x]=h.useReducer(j=>!j,!1);return e.jsxs(y,{direction:C.Column,style:{width:"85%"},children:[e.jsx(S,{title:"Click to show CSS Variable",style:{cursor:"pointer",...t},onClick:x,children:n?r:i}),e.jsx(k,{children:getComputedStyle(document.documentElement).getPropertyValue(`--${i}`)})]},i)},V=r=>{const{varKey:i,value:t}=r;return e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(u,{value:t,varKey:i}),e.jsx("div",{style:{...B(t),borderRadius:"50%",width:"2rem",height:"2rem",minWidth:"2rem",border:`1px solid ${o.sapField_BorderColor}`}})]})},l=r=>{const{varKey:i,value:t,style:n={}}=r;return e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between"},children:e.jsx(u,{value:t,varKey:i,style:n})})},z=()=>{const[r,i]=h.useState(w());return e.jsx(D,{children:e.jsxs("div",{style:{backgroundColor:o.sapBackgroundColor,padding:"1rem",borderRadius:o.sapElement_BorderCornerRadius,boxShadow:o.sapContent_Shadow0},children:[e.jsx(P,{onChange:t=>{const n=t.detail.selectedOption.dataset.value;i(n),v(n)},children:T.map(({title:t,value:n})=>e.jsx(R,{"data-value":n,selected:n===r,children:t},n))}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{headerText:"Colors & Shadows",collapsed:!0,children:e.jsx("div",{style:c,children:m.map(([t,n])=>e.jsx(V,{varKey:t,value:n},t))})}),e.jsx(d,{headerText:"Fonts",collapsed:!0,children:e.jsx("div",{style:{...c,gridTemplateColumns:"repeat(1, minmax(0, 1fr))"},children:p.map(([t,n])=>e.jsx(l,{varKey:t,value:n,style:{...I(n)}},t))})}),e.jsx(d,{headerText:"Others",collapsed:!0,children:e.jsx("div",{style:c,children:F.map(([t,n])=>e.jsx(l,{varKey:t,value:n},t))})})]})})};function Tn(r={}){const{wrapper:i}=Object.assign({},a(),r.components);return i?e.jsx(i,Object.assign({},r,{children:e.jsx(t,{})})):t();function t(){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",pre:"pre"},a(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Public Utils"}),`
`,e.jsx(n.h1,{id:"public-utils",children:"Public Utils"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@ui5/webcomponents-react-base"})," package is providing a couple of utils, which can be used in your application as well."]}),`
`,e.jsx(M,{design:O.Warning,hideCloseButton:!0,children:`Please only use the utils mentioned in this document in your application. All other exports are intended for internal
  use and are not subject to semantic versioning!`}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(b,{}),`
`,e.jsx(n.h2,{id:"device",children:"Device"}),`
`,e.jsx(s,{code:"import { Device } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Device"})," allows you to detect information about the environment where your app is running:"]}),`
`,e.jsx(n.h3,{id:"general-device-information",children:"General Device Information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isIE()"})," - returns ",e.jsx(n.code,{children:"true"})," if running in Internet Explorer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isSafari()"})," - returns ",e.jsx(n.code,{children:"true"})," if running in Safari"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isDesktop()"})," - returns ",e.jsx(n.code,{children:"true"})," if running on desktop devices"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isTablet()"})," - returns ",e.jsx(n.code,{children:"true"})," if running on tablet devices"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.isPhone()"})," - returns ",e.jsx(n.code,{children:"true"})," if running on mobile phone devices"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.supportsTouch()"})," - returns ",e.jsx(n.code,{children:"true"})," if device supports touch"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.getCurrentRange(width?: number)"})," ",e.jsx("br",{}),`
Returns the current media range of the window, or the optionally passed width. `,e.jsx("br",{}),`
Returns: `,e.jsx(n.code,{children:"{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.getOrientation()"})," ",e.jsx("br",{}),`
Returns the current orientation of the device, `,e.jsx(n.code,{children:"{ landscape: boolean, portrait: boolean }"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"event-listeners",children:"Event Listeners"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.attachResizeHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler which will be invoked whenever the window size has changed.
`,e.jsx(n.code,{children:"callback"})," is a function which will be called with ",e.jsx(n.code,{children:"{ height: number, width: number }"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.detachResizeHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached resize handler`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.attachOrientationChangeHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler which will be invoked the orientation of the device has changed e.g., through rotation.
`,e.jsx(n.code,{children:"callback"})," is a function which will be called with ",e.jsx(n.code,{children:"{ landscape: boolean, portrait: boolean }"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.detachOrientationChangeHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached orientation change handler`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.attachMediaHandler(callback)"})," ",e.jsx("br",{}),`
Attach an event handler whenever the window size is matching another media query. `,e.jsx("br",{}),`
The current window size will be matched against the standard SAP Responsive Breakpoints:`]}),`
`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Media Query"}),e.jsx(n.th,{children:"Name"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"(max-width:599px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Phone"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"(min-width:600px) and (max-width:1023px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Tablet"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"(min-width:1024px) and (max-width:1439px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Desktop"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"(min-width:1440px)"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"LargeDesktop"})})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"callback"}),` is a function which will be called with
`,e.jsx(n.code,{children:"{ from: number, to?: number, name: 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop', unit: string }"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device.detachMediaHandler(callback)"})," ",e.jsx("br",{}),`
Detach a previously attached media handler`]}),`
`]}),`
`,e.jsx(n.h2,{id:"theming-parameters",children:"Theming Parameters"}),`
`,e.jsx(s,{code:"import { ThemingParameters } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["By using our ",e.jsx(n.code,{children:"ThemingParameters"}),`, you can define the look and feel of your application without the need to hard-code any
colors. You can e.g. set `,e.jsx(n.code,{children:"ThemingParameters.sapBackgroundColor"})," as a ",e.jsx(n.code,{children:"background-color"}),` and you'll always get the correct
background color for your current theme.`]}),`
`,e.jsx(z,{}),`
`,e.jsx(n.h2,{id:"spacing",children:"Spacing"}),`
`,e.jsx(s,{code:"import { spacing } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"spacing"}),` file is containing all standard margins and paddings that are used in SAP Applications.
You can explore them via the `,e.jsx(n.a,{href:"https://ui5.sap.com/#/entity/sap.ui.core.StandardMargins",target:"_blank",rel:"nofollow noopener noreferrer",children:"UI5 Standard Margins Demo Kit"}),`
and the `,e.jsx(n.a,{href:"https://ui5.sap.com/#/entity/sap.ui.core.ContainerPadding",target:"_blank",rel:"nofollow noopener noreferrer",children:"UI5 Standard Paddings Demo Kit"}),"."]}),`
`,e.jsx(n.h2,{id:"hooks",children:"Hooks"}),`
`,e.jsx(n.h3,{id:"usei18nbundle",children:e.jsx(n.code,{children:"useI18nBundle"})}),`
`,e.jsx(s,{code:"import { useI18nBundle } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useI18nBundle"}),` hook can be used for adding internationalization to your application. Learn more about it in our
`,e.jsx(n.a,{href:"?path=/docs/internationalization--page",children:"Internationalization Guide"}),"."]}),`
`,e.jsx(n.h3,{id:"useviewportrange",children:e.jsx(n.code,{children:"useViewportRange"})}),`
`,e.jsx(s,{code:"import { useViewportRange } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useViewportRange"})," hook is a utility hook based on the ",e.jsx(n.code,{children:"Device.getCurrentRange()"})," and ",e.jsx(n.code,{children:"Device.attachMediaHandler"}),` API.
It will always return a string with the name of the currently active range.`]}),`
`,e.jsx(n.h3,{id:"useresponsivecontentpadding",children:e.jsx(n.code,{children:"useResponsiveContentPadding"})}),`
`,e.jsx(s,{code:"import { useResponsiveContentPadding } from '@ui5/webcomponents-react-base';"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useResponsiveContentPadding"})," hook is a hook generating a style class or a tuple containing the style class and the current range if ",e.jsx(n.code,{children:"returnRangeString"})," is set to ",e.jsx(n.code,{children:"true"}),`.
It adds `,e.jsx(n.code,{children:"padding-left"})," and ",e.jsx(n.code,{children:"padding-right"})," corresponding to the range (retrieved with ",e.jsx(n.code,{children:"Device.getCurrentRange()"}),") of the element."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const YourComponent = (props) => {
  const elementRef = useRef(null);
  const responsivePaddingClass = useResponsiveContentPadding(elementRef.current);
  return (
    <div ref={elementRef} className={responsivePaddingClass}>
      Content
    </div>
  );
};
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// returns the style class as string
const responsivePaddingClass = useResponsiveContentPadding(elementRef.current);
// returns a tuple - the first entry is the style class, the second the current range string
const [responsivePaddingClass, currentRange] = useResponsiveContentPadding(elementRef.current, true);
`})}),`
`,e.jsx(f,{})]})}}export{Tn as default};
//# sourceMappingURL=Public-Utils-d89b4768.js.map
