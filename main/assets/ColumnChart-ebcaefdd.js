import{j as r}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-a8c25bc3.js";import{D as a}from"./DocsHeader-74af66af.js";import{F as c}from"./Footer-bba9a361.js";import"./index-ebeaab24.js";import{M as h,C as e}from"./chunk-PCJTTTQV-b18cd884.js";import{C as d,D as m,W as l,a as x,b as j,c as f,L as u,d as g,e as C}from"./ColumnChart.stories-763ef933.js";import{u as p}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-3fc5f916.js";import"./iframe-7d2b1167.js";import"../sb-preview/runtime.js";import"./UI5Element-d19f28b4.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-2e1c5474.js";import"./Icons-d3203353.js";import"./decline-e129c312.js";import"./i18n-defaults-80781f7e.js";import"./information-b0c94f16.js";import"./class-map-519e9c6d.js";import"./Button-b124cb06.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-c5529d07.js";import"./TableOfContent-a60010bd.js";import"./index-dc32954d.js";import"./Link-9ab31ed2.js";import"./WrappingType-b81e595a.js";import"./index-ac598def.js";import"./Label-855a552c.js";import"./index-9c09ad76.js";import"./index-5accd0f3.js";import"./Popover-fe68fced.js";import"./Integer-f7f172c9.js";import"./PopupUtils-565f6d6c.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-8109da93.js";import"./FocusableElements-59b9e9bf.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-388120e7.js";import"./ResizeHandler-d7af0733.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-99d317a4.js";import"./defaults-ed2b4df8.js";import"./ChartContainer-ee3f2a10.js";import"./index-7e4b02e7.js";import"./i18n-defaults-54a5f988.js";import"./I18nContext-cdb50611.js";import"./throttle-6f27c407.js";import"./isString-0886f00f.js";import"./useCancelAnimationFallback-fd0bdcb2.js";import"./generateCategoricalChart-021f4b78.js";import"./index-f50b85d6.js";import"./YAxisTicks-861af679.js";import"./debounce-37a33ffc.js";import"./useTooltipFormatter-cdec22cf.js";import"./ChartDataLabel-f3189ea0.js";import"./staticProps-411b051b.js";import"./useLongestYAxisLabel-4dc57c1a.js";import"./useOnClickInternal-c48662e6.js";import"./react-content-loader.es-627d673d.js";function Kr(i={}){const{wrapper:t}=Object.assign({},p(),i.components);return t?r.jsx(t,Object.assign({},i,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),i.components);return r.jsxs(r.Fragment,{children:[r.jsx(h,{of:d}),`
`,r.jsx(a,{}),`
`,r.jsx(o.h2,{id:"example",children:"Example"}),`
`,r.jsx(e,{of:m}),`
`,r.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(s,{of:m}),`
`,r.jsx("br",{}),`
`,r.jsx(o.h2,{id:"more-examples",children:"More Examples"}),`
`,r.jsx(o.h3,{id:"with-custom-color",children:"With custom color"}),`
`,r.jsx(e,{of:l}),`
`,r.jsx(o.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r.jsx(e,{of:x}),`
`,r.jsx(o.h3,{id:"with-stacks",children:"With Stacks"}),`
`,r.jsx(e,{of:j}),`
`,r.jsx(o.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r.jsx(e,{of:f}),`
`,r.jsx(o.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r.jsx(e,{of:u}),`
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
`,r.jsx(e,{of:g}),`
`,r.jsx(o.h2,{id:"with-highlighted-measures",children:"With Highlighted Measures"}),`
`,r.jsx(e,{of:C}),`
`,r.jsx(c,{})]})}}export{Kr as default};
//# sourceMappingURL=ColumnChart-ebcaefdd.js.map
