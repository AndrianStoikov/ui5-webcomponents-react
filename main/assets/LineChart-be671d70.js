import{j as r}from"./jsx-runtime-5926aa06.js";import{M as m,C as o}from"./chunk-PCJTTTQV-82de9d36.js";import{C as a}from"./DomRefTable.module-0b2187b1.js";import{D as c}from"./DocsHeader-bc067e7a.js";import{F as d}from"./Footer-13a34b41.js";import"./index-ebeaab24.js";import{C as h,D as s,W as l,a as x,b as j,c as f,L as u,d as C,e as g}from"./LineChart.stories-7988a02a.js";import{u as p}from"./index-bda0bad7.js";import"./iframe-296980c2.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./index-0710f4df.js";import"./UI5Element-74c2a827.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-a2964213.js";import"./Icons-94b91597.js";import"./decline-c0e7c267.js";import"./i18n-defaults-80781f7e.js";import"./information-972c65ef.js";import"./class-map-519e9c6d.js";import"./Button-1eb48b4c.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-b9e92427.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-f790e321.js";import"./TableOfContent-de7f28c4.js";import"./index-97303355.js";import"./Link-e0af46e3.js";import"./WrappingType-b81e595a.js";import"./index-800c8d65.js";import"./Label-fcb0092c.js";import"./index-9cb5db6d.js";import"./Popover-2de3a0ad.js";import"./Integer-f7f172c9.js";import"./PopupUtils-db5b49db.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-c4ad8573.js";import"./FocusableElements-20734289.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-362c4d65.js";import"./ResizeHandler-0f082c48.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./DemoProps-9cd0a46b.js";import"./LineChart-e5438c41.js";import"./index-99d317a4.js";import"./YAxisTicks-58c7198d.js";import"./ChartContainer-f208580b.js";import"./index-626dcf2d.js";import"./i18n-defaults-fc88400a.js";import"./I18nContext-cdb50611.js";import"./throttle-6f27c407.js";import"./isString-0886f00f.js";import"./generateCategoricalChart-fe191039.js";import"./index-f50b85d6.js";import"./debounce-208efd13.js";import"./useTooltipFormatter-96153603.js";import"./defaults-712cb667.js";import"./ChartDataLabel-c12e596b.js";import"./staticProps-411b051b.js";import"./useLongestYAxisLabel-714b53ae.js";import"./react-content-loader.es-627d673d.js";import"./Line-e5832b2c.js";function Kr(i={}){const{wrapper:t}=Object.assign({},p(),i.components);return t?r.jsx(t,Object.assign({},i,{children:r.jsx(n,{})})):n();function n(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre",h4:"h4"},p(),i.components);return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:h}),`
`,r.jsx(c,{}),`
`,r.jsx(e.h2,{id:"example",children:"Example"}),`
`,r.jsx(o,{of:s}),`
`,r.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(a,{of:s}),`
`,r.jsx("br",{}),`
`,r.jsx("br",{}),`
`,r.jsx(e.h2,{id:"more-examples",children:"More Examples"}),`
`,r.jsx(e.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,r.jsx(o,{of:l}),`
`,r.jsx(e.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r.jsx(o,{of:x}),`
`,r.jsx(e.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,r.jsx(o,{of:j}),`
`,r.jsx(e.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r.jsx(o,{of:f}),`
`,r.jsx(e.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r.jsx(o,{of:u}),`
`,r.jsx(e.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,r.jsxs(e.p,{children:["You can set a reference line to any value by using the ",r.jsx(e.code,{children:"referenceLine"})," ",r.jsx(e.code,{children:"chartConfig"})," property. ",r.jsx(e.code,{children:"referenceLine"})," accepts all properties described ",r.jsx(e.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r.jsx(e.code,{children:"label"}),",",r.jsx(e.code,{children:"value"})," and ",r.jsx(e.code,{children:"color"})," to preserve the intended design."]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`<LineChart
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
`,r.jsx(o,{of:C}),`
`,r.jsx(e.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,r.jsx(o,{of:g}),`
`,r.jsx(e.h4,{id:"code",children:"Code"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
  return (
    <LineChart
      dataset={bigDataSet}
      dimensions={[{ accessor: 'name' }]}
      measures={[
        {
          accessor: 'users',
          width: 2,
          color: 'url(#colorUsers)'
        }
      ]}
    >
      <defs>
        <linearGradient id="colorUsers" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
    </LineChart>
  );
};
`})}),`
`,r.jsx(d,{})]})}}export{Kr as default};
//# sourceMappingURL=LineChart-be671d70.js.map
