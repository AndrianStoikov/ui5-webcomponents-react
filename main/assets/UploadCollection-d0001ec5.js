import{j as e}from"./jsx-runtime-5926aa06.js";import{C as a,A as s}from"./DomRefTable.module-1b539386.js";import{D as d}from"./DocsHeader-a5d8fd1b.js";import{F as c}from"./Footer-cd999e94.js";import"./index-ebeaab24.js";import{M as h,C as r,a as l}from"./chunk-PCJTTTQV-3ae44807.js";import{S as x}from"./SubcomponentsSection-6138f2fc.js";import{C as f,D as p,S as u,U as C}from"./UploadCollection.stories-c940eb18.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-d9639aa3.js";import"./iframe-62076298.js";import"../sb-preview/runtime.js";import"./UI5Element-d19f28b4.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-2e1c5474.js";import"./Icons-d3203353.js";import"./decline-e129c312.js";import"./i18n-defaults-80781f7e.js";import"./information-b0c94f16.js";import"./class-map-519e9c6d.js";import"./Button-b124cb06.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-c65c86f0.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-7dbf9833.js";import"./TableOfContent-801ccff0.js";import"./index-1bdac791.js";import"./Link-9ab31ed2.js";import"./WrappingType-b81e595a.js";import"./index-a085d11d.js";import"./Label-855a552c.js";import"./index-9c09ad76.js";import"./index-828871d8.js";import"./Popover-fe68fced.js";import"./Integer-f7f172c9.js";import"./PopupUtils-565f6d6c.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-8109da93.js";import"./FocusableElements-59b9e9bf.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-388120e7.js";import"./ResizeHandler-d7af0733.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-8e40db2c.js";import"./index-5ec1ccf8.js";import"./index-abc61306.js";import"./Title-64b66bf0.js";import"./ValueState-2c5e5904.js";import"./ListItem-fb1fa31a.js";import"./ListItemBase-94a42b35.js";import"./ItemNavigation-44b1fe71.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-71038705.js";import"./RadioButton-710ba776.js";import"./CheckBox-95047ef2.js";import"./accept-6bd35a89.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-44a405c5.js";import"./Input-51927e2b.js";import"./Suggestions.css-2743800e.js";import"./ResponsivePopoverCommon.css-4f3232f2.js";import"./ValueStateMessage.css-7a219042.js";import"./ProgressIndicator-426f87cb.js";import"./AnimationMode-bffb6259.js";import"./i18n-defaults-217b10b4.js";import"./parameters-bundle.css-deb4e0b1.js";import"./IllustratedMessage-a7b61839.js";const j=`**Since:** 0.9.0

A component to be used within the \`UploadCollection\`.
`;function Ze(n={}){const{wrapper:t}=Object.assign({},m(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",h1:"h1",h3:"h3"},m(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:f}),`
`,e.jsx(d,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(o.h2,{id:"handling-drag-and-drop-of-files",children:"Handling drag and drop of files"}),`
`,e.jsxs(o.p,{children:["Per default, files can be added by dragging them into the ",e.jsx(o.code,{children:"UploadCollection"}),` component.
To use this functionality the `,e.jsx(o.code,{children:"onDrop"})," handler has to be manually adjusted.",e.jsx("br",{}),`
`,e.jsx(o.strong,{children:"Note:"})," Use ",e.jsx(o.code,{children:"event.preventDefault()"})," in the ",e.jsx(o.code,{children:"onDrop"})," handler, otherwise some browsers will open some files in a different tab."]}),`
`,e.jsxs(o.p,{children:["This example shows, how to dynamically render a ",e.jsx(o.code,{children:"UploadCollectionItem"})," by dropping files into the ",e.jsx(o.code,{children:"UploadCollection"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import React, { useState } from 'react';
import { Icon, Text, UploadCollection, UploadCollectionItem } from '@ui5/webcomponents-react';

export const UploadCollectionComponent = () => {
  const [children, setChildren] = useState([]);
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    files.forEach((file) => {
      setChildren((prev) => [
        ...prev,
        <UploadCollectionItem file={file} fileName={file.name} thumbnail={<Icon name="document" />}>
          <Text>Uploaded On: Right now</Text>
        </UploadCollectionItem>
      ]);
    });
  };
  return <UploadCollection onDrop={handleDrop}>{children}</UploadCollection>;
};
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"simulate-upload",children:"Simulate Upload"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(o.h3,{id:"code",children:"Code"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const SimulateUploadComponent = () => {
  const [children, setChildren] = useState([
    <UploadCollectionItem
      file={null}
      fileName={'file-name.txt'}
      thumbnail={<img src="https://sap.github.io/ui5-webcomponents/assets/images/logo.png" />}
    >
      <Text>Uploaded by: Susanne Schmitt · Uploaded On: 2019-04-20</Text>
    </UploadCollectionItem>
  ]);
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    files.forEach((file) => {
      setChildren((prev) => [
        ...prev,
        <UploadCollectionItem file={file} fileName={file.name} thumbnail={<Icon name="document" />}>
          <Text>{\`
Last
modified: \${file.lastModifiedDate} ·
Size: \${(file.size / 1000).toFixed(2)}KB\`}</Text>
        </UploadCollectionItem>
      ]);
    });
  };
  const simulateUpload = () => {
    if (children.length > 0) {
      Children.forEach(children, (child, index) => {
        if (child.props.uploadState === UploadState.Ready) {
          let progress = 0;
          const recTimeout = () => {
            setTimeout(() => {
              progress += Math.floor(Math.random() * 4) + 1;
              setChildren((prev) => {
                const updatedChildren = [...prev];
                updatedChildren[index] = cloneElement(prev[index], {
                  uploadState: UploadState.Uploading,
                  progress: Math.min(progress, 100)
                });
                return updatedChildren;
              });
              if (progress < 100) {
                recTimeout();
              } else {
                setChildren((prev) => {
                  const updatedChildren = [...prev];
                  updatedChildren[index] = cloneElement(prev[index], {
                    uploadState: UploadState.Complete
                  });
                  return updatedChildren;
                });
              }
            }, Math.floor(Math.random() * (1000 - 100 + 1)) + 100);
          };
          recTimeout();
        }
      });
    }
  };
  return (
    <UploadCollection
      onDrop={handleDrop}
      header={
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <Title>Start upload:</Title>
          <Button onClick={simulateUpload}>Upload!</Button>
        </FlexBox>
      }
    >
      {children}
    </UploadCollection>
  );
};
`})}),`
`,e.jsx(l,{children:x}),`
`,e.jsx(o.h2,{id:"uploadcollectionitem",children:"UploadCollectionItem"}),`
`,e.jsx(l,{children:j}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(c,{})]})}}export{Ze as default};
//# sourceMappingURL=UploadCollection-d0001ec5.js.map
