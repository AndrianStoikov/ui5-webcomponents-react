import{j as r}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-3aae12dd.js";import{D as a}from"./DocsHeader-3a88e21b.js";import{F as c}from"./Footer-6762d4d0.js";import"./index-ebeaab24.js";import{M as h,C as i}from"./chunk-PCJTTTQV-7d486809.js";import{C as d,D as m,W as l,a as x,b as j,c as f,L as u,d as g,e as C}from"./ColumnChart.stories-f0a1592b.js";import{u as p}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-3b4878fc.js";import"./iframe-8ae97504.js";import"../sb-preview/runtime.js";import"./UI5Element-b6f0d493.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-bd7f152d.js";import"./Icons-bac066a4.js";import"./decline-e64814d9.js";import"./i18n-defaults-80781f7e.js";import"./information-f9c20ced.js";import"./class-map-6a9bd920.js";import"./Button-37628041.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-ac1c9dde.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-aaf25c56.js";import"./index-cba14cc0.js";import"./Integer-f7f172c9.js";import"./index-749f6614.js";import"./Avatar-a8f74fed.js";import"./ResizeHandler-021ae412.js";import"./employee-a1fe0822.js";import"./index-3b2c9a61.js";import"./index-5aae9b76.js";import"./Link-fd0c7f1f.js";import"./WrappingType-b81e595a.js";import"./index-4c0ab015.js";import"./TableOfContent-83fe3e07.js";import"./index-d865f72a.js";import"./Label-77c4efbc.js";import"./index-9c09ad76.js";import"./index-c864772f.js";import"./index-87ab90f1.js";import"./Popover-ceaaf26b.js";import"./PopupUtils-46fb16e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-27fb56a9.js";import"./FocusableElements-6ebe483a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-99d317a4.js";import"./defaults-2c9b9f54.js";import"./ChartContainer-95c3ad4d.js";import"./index-8fa2e938.js";import"./i18n-defaults-f649c0ce.js";import"./I18nContext-cdb50611.js";import"./throttle-6f27c407.js";import"./isString-0886f00f.js";import"./useCancelAnimationFallback-3eb9ffc4.js";import"./generateCategoricalChart-588d9d9a.js";import"./index-f50b85d6.js";import"./YAxisTicks-07634e6c.js";import"./debounce-86d6d72a.js";import"./useTooltipFormatter-0589a8f4.js";import"./ChartDataLabel-a8253cfe.js";import"./staticProps-411b051b.js";import"./useLongestYAxisLabel-ff42a26c.js";import"./useOnClickInternal-c48662e6.js";import"./react-content-loader.es-627d673d.js";function $r(e={}){const{wrapper:t}=Object.assign({},p(),e.components);return t?r.jsx(t,Object.assign({},e,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),e.components);return r.jsxs(r.Fragment,{children:[r.jsx(h,{of:d}),`
`,r.jsx(a,{}),`
`,r.jsx(o.h2,{id:"example",children:"Example"}),`
`,r.jsx(i,{of:m}),`
`,r.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(s,{of:m}),`
`,r.jsx("br",{}),`
`,r.jsx(o.h2,{id:"more-examples",children:"More Examples"}),`
`,r.jsx(o.h3,{id:"with-custom-color",children:"With custom color"}),`
`,r.jsx(i,{of:l}),`
`,r.jsx(o.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r.jsx(i,{of:x}),`
`,r.jsx(o.h3,{id:"with-stacks",children:"With Stacks"}),`
`,r.jsx(i,{of:j}),`
`,r.jsx(o.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r.jsx(i,{of:f}),`
`,r.jsx(o.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r.jsx(i,{of:u}),`
`,r.jsx(o.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,r.jsxs(o.p,{children:["You can set a reference line to any value by using the ",r.jsx(o.code,{children:"referenceLine"})," ",r.jsx(o.code,{children:"chartConfig"})," property. ",r.jsx(o.code,{children:"referenceLine"})," accepts all properties described ",r.jsx(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r.jsx(o.code,{children:"label"}),",",r.jsx(o.code,{children:"value"})," and ",r.jsx(o.code,{children:"color"})," to preserve the intended design."]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-jsx",children:`<ColumnChart
  {...props}
  chartConfig={{
    referenceLine: {
      color: 'red',
      label: 'MAX',
      value: 650
    }
  }}
/>
`})}),`
`,r.jsx(i,{of:g}),`
`,r.jsx(o.h2,{id:"with-highlighted-measures",children:"With Highlighted Measures"}),`
`,r.jsx(i,{of:C}),`
`,r.jsx(c,{})]})}}export{$r as default};
//# sourceMappingURL=ColumnChart-a6ca17fd.js.map
