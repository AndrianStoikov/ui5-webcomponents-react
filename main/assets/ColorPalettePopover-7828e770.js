import{j as o,a as r,F as s}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-22ed02aa.js";import{D as c}from"./DocsHeader-0d4087d7.js";import{F as h}from"./Footer-e7c8748d.js";import"./index-f1f749bf.js";import{D as d}from"./DomRefTable-0df29f0e.js";import{M as f,C,a as p,h as P}from"./index-d916227d.js";import{C as u,D as m}from"./ColorPalettePopover.stories-710ab2dc.js";import{S as v}from"./SubcomponentsSection-6138f2fc.js";import{C as b}from"./ColorPaletteItemDescription-2583043f.js";import{C as g}from"./index-49c8b659.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-G4YQS2SV-ea26d85a.js";import"./iframe-a0098a98.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-2095368c.js";import"./UI5Element-4f8793c9.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./decline-e7438d7e.js";import"./Icons-ad6f0d24.js";import"./class-map-5d8e4b2b.js";import"./Button-8fbc19ea.js";import"./Keys-3acbae73.js";import"./Device-208919c6.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-85b0aa49.js";import"./TableOfContent-2179408e.js";import"./index-4954166a.js";import"./WrappingType-b81e595a.js";import"./index-cbfafae0.js";import"./Label-27ec0466.js";import"./Footer.module-c4f3b823.js";import"./index-a801d628.js";import"./Popover-84c1d886.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-2f3b9f5d.js";import"./FocusableElements-c64a83a7.js";import"./ResizeHandler-1dae7180.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./index-5f01baa0.js";import"./CSSColor-bdda6dc0.js";import"./ResponsivePopoverCommon.css-b406725f.js";import"./Title-4c33d979.js";import"./ResponsivePopover-1e5d6f7e.js";import"./Dialog-846d1fb6.js";import"./ValueState-2c5e5904.js";import"./ItemNavigation-4c4dc0f2.js";const w=[{name:"openPopover",visibility:"public",since:"1.0.0-rc.16",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",deprecated:{text:"The method is deprecated in favour of <code>showAt</code>."}},{name:"showAt",visibility:"public",since:"1.1.1",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover."}];function No(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?o(n,Object.assign({},t,{children:o(i,{})})):i();function i(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",em:"em",pre:"pre",h3:"h3"},a(),t.components);return r(s,{children:[o(f,{of:u}),`
`,o(c,{since:"0.20.0"}),`
`,o("br",{}),`
`,o(e.h2,{children:"Example"}),`
`,o(C,{of:m}),`
`,o(e.h2,{children:"Properties"}),`
`,o(l,{of:m}),`
`,o(d,{rows:w}),`
`,o(e.h2,{children:"Opening ColorPalettePopovers"}),`
`,r(e.p,{children:[o(e.code,{children:"ColorPalettePopover"}),"s can only be opened by attaching a ",o(e.code,{children:"ref"})," to the component and then call the corresponding ",o(e.strong,{children:o(e.code,{children:"showAt"})})," method. The method receives the target element - ",r(e.em,{children:["on which the ",o(e.code,{children:"ColorPalettePopover"})," is to be opened"]})," - as parameter."]}),`
`,o(e.pre,{children:o(e.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const popoverRef = useRef();
  const onButtonClick = (e) => {
    popoverRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open ColorPalettePopover</Button>
      <ColorPalettePopover ref={popoverRef}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o(p,{children:v}),`
`,o(e.h2,{children:"ColorPaletteItem"}),`
`,o(p,{children:b}),`
`,o(e.h3,{children:"Properties"}),`
`,o(P,{of:g}),`
`,o(h,{})]})}}export{No as default};
//# sourceMappingURL=ColorPalettePopover-7828e770.js.map
