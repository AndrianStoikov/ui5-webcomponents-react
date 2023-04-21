import{j as e}from"./jsx-runtime-ccada58e.js";import{M as h}from"./chunk-PCJTTTQV-132729c9.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-f1f749bf.js";import{c as d}from"./react-jss.esm-2e28eff7.js";import{T as o}from"./ThemingParameters-f4b4144e.js";import{T as m}from"./index-9648799c.js";import"./DomRefTable.module-c544c2ba.js";import"./Import-fb6d5636.js";import{T as p}from"./TableOfContent-3ce373e1.js";import{F as u}from"./Footer-c2c9b607.js";import{u as a}from"./index-4fb8b842.js";import{M as r,a as l}from"./index-b59194f7.js";import"./iframe-e471b753.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./I18nContext-bef5b452.js";import"./ModalsContext-131e4070.js";import"./CssSizeVariables-bd372cde.js";import"./GlobalStyleClasses-7209358d.js";import"./CustomVariables-fd831c35.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./index-2580883a.js";import"./clsx.m-1229b3e0.js";import"./index-7fe1ffa4.js";import"./Label-0e5fa470.js";import"./withWebComponent-791919b7.js";import"./utils-ed90fb1b.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-dc0989fc.js";import"./index-660c1ba1.js";import"./Link-756c9448.js";import"./Icon-b04dccd7.js";import"./Icons-5b18f7d2.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-254d6b69.js";import"./index-c073f447.js";import"./Popover-a5930009.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-4412d83b.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-0dbd5acf.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-d22cbf2f.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./Button-08c55dbf.js";const g={container:{backgroundColor:o.sapBackgroundColor,fontFamily:o.sapFontFamily,height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},text:{color:o.sapNegativeTextColor,fontSize:o.sapFontLargeSize}},y=d(g),c=()=>{const n=y();return e.jsx("div",{className:n.container,children:e.jsx("span",{className:n.text,children:"My Text"})})};c.__docgenInfo={description:"",methods:[],displayName:"MyCustomElement"};function Ie(n={}){const{wrapper:s}=Object.assign({},a(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",strong:"strong","ui5-link":"ui5-link"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Styling"}),`
`,e.jsx(t.h1,{id:"styling",children:"Styling"}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"styling-ui5-web-components-for-react-components",children:"Styling UI5 Web Components for React components"}),`
`,e.jsxs(t.p,{children:["You can change the appearance of the Web Components by using ",e.jsx(t.a,{href:"https://www.w3schools.com/Css/css3_variables.asp",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS Variables"}),`.
Per default, we are injecting the Fiori 3 theme parameters as CSS Variables into the `,e.jsx(t.code,{children:"<head>"}),`.
For example, if you want to change the color of all texts that use the `,e.jsx(t.code,{children:"--sapTextColor"})," variable, you can create an additional ",e.jsx(t.code,{children:"style"})," tag with the following content:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<style>
  * {
    --sapTextColor: limegreen;
  }
</style>
`})}),`
`,e.jsx(r,{hideCloseButton:!0,design:l.Warning,children:"Changing the value of a CSS Variable will affect theming capabilities, as it will be changed for all themes!"}),`
`,e.jsxs(t.p,{children:["As a consequence, all HTML Elements in the subtree where this style was applied are now displaying their texts in ",e.jsx(t.code,{children:"limegreen"})," instead of ",e.jsx(t.code,{children:"#32363a"}),` which would be the default value for Fiori 3.
You can change CSS Variables on any level - in the head, or on every single element by using either CSS classes or element style.`]}),`
`,e.jsxs(t.p,{children:["A full list of all supported CSS Variables can be found ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/packages/base/src/styling/ThemingParameters.ts",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),`
or in the `,e.jsx(t.a,{href:"https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/theming/webapp/index.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"SAPUI5 Theming Parameters Toolbox"}),"."]}),`
`,e.jsx(t.h2,{id:"reuse-global-style-classes",children:"Reuse global style classes"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"ThemeProvider"}),` component is offering global css classes that can be reused in your applications code to help you to achieve a Fiori look-and-feel.
All globally available style classes are tracked in the `,e.jsx(t.code,{children:"GlobalStyleClasses"})," enum which can be imported from ",e.jsx(t.code,{children:'import { GlobalStyleClasses } from "@ui5/webcomponents-react";'}),"."]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"CSS Class"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"sapScrollBar"})}),e.jsx(t.td,{children:"If added to an container that supports scrolling, the scrollbar will be styled according to Fiori guidelines."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"inheritingSapScrollBar"})}),e.jsx(t.td,{children:"If added to a container, the scollbars of the container and of all of its children will be styled according to Fiori guidelines."})]})]})]}),`
`,e.jsx(r,{hideCloseButton:!0,style:{marginBlockEnd:"1rem"},children:`With our next major release (v2.0.0), both style classes will be removed as then the SAP scrollbar will be used per
default for the whole application.`}),`
`,e.jsx(t.h3,{id:"use-default-browser-scrollbar",children:"Use default browser scrollbar"}),`
`,e.jsxs(t.p,{children:["Some components like the ",e.jsx(t.code,{children:"ObjectPage"}),", ",e.jsx(t.code,{children:"DynamicPage"})," and ",e.jsx(t.code,{children:"AnalyticalTable"})," use the CSS class ",e.jsx(t.code,{children:"sapScrollBar"})," by default. To prevent components from using the custom scrollbar, you can pass ",e.jsx(t.code,{children:"data-native-scrollbar"})," as prop."]}),`
`,e.jsx(t.h2,{id:"style-your-own-components",children:"Style your own components"}),`
`,e.jsxs(t.p,{children:[`It's quite likely you have to create some custom components when you are building an app.
In order to reuse our central styling approach, you can import the `,e.jsx(t.code,{children:"ThemingParameters"})," that contain the various CSS variables used in our theming."]}),`
`,e.jsxs(t.p,{children:["If you want to style your components with the ",e.jsx(t.code,{children:"react-jss"})," syntax, you can use the ",e.jsx(t.code,{children:"createUseStyles"}),` styling hook.
`,e.jsx(t.code,{children:"react-jss"})," comes already as a dependency of ",e.jsx(t.code,{children:"@ui5/webcomponents-react"})," to your project - but we recommend adding it to your ",e.jsx(t.code,{children:"package.json"}),` as well.
`,e.jsxs(t.strong,{children:["Please make sure you are installing ",e.jsx(t.code,{children:'"react-jss": "^10.0.0"'})]}),". Previous versions of this library won't work correctly together with our library."]}),`
`,e.jsx(r,{design:l.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[" You can find all ",e.jsx(t.code,{children:"ThemingParameters"})," ",e.jsx(t["ui5-link"],{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-public-utils--page#theming-parameters",target:"_blank",children:" here"})," . If you don't want to use CSS-in-JS library, you can also just use the corresponding CSS variable."]})}),`
`,e.jsx(t.p,{children:"You can then create a custom component by following this recipe:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import React from 'react';
import { createUseStyles } from 'react-jss';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

const styles = {
  container: {
    backgroundColor: ThemingParameters.sapBackgroundColor,
    fontFamily: ThemingParameters.sapFontFamily,
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const useStyles = createUseStyles(styles, { name: 'MyCustomElement' });

const MyCustomElement = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span style={{ color: ThemingParameters.sapNegativeColor, fontSize: ThemingParameters.sapFontLargeSize }}>
        My Text
      </span>
    </div>
  );
};
`})}),`
`,e.jsx(t.p,{children:"This would then be the result:"}),`
`,e.jsx(m,{children:e.jsx(c,{})}),`
`,e.jsxs(t.h2,{id:"applying-styling-via-classname-or-style",children:["Applying styling via ",e.jsx(t.code,{children:"className"})," or ",e.jsx(t.code,{children:"style"})]}),`
`,e.jsxs(t.p,{children:["Almost all components allow setting ",e.jsx(t.code,{children:"className"})," or ",e.jsx(t.code,{children:"style"})," to style the component. For web components, this does ",e.jsx(t.strong,{children:"not"}),` mean that styles are inherited by shadow root elements per default.
Only `,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#inherited_properties",target:"_blank",rel:"nofollow noopener noreferrer",children:"inherited CSS properties"}),` that are not set inside the shadow root or internally passed properties will change the styles of the internal elements.
Another special case are abstract components like the `,e.jsx(t.code,{children:"SuggestionItem"}),". The ",e.jsx(t.code,{children:"ui5-suggestion-item"})," element is mainly there to pass props to the actual component inside the shadow root and is therefore not stylable."]}),`
`,e.jsx(u,{})]})}}export{Ie as default};
//# sourceMappingURL=Styling-97c013c3.js.map
