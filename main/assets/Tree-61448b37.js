import{j as e}from"./jsx-runtime-5926aa06.js";import{C as p,A as s}from"./DomRefTable.module-a3c89bae.js";import{D as d}from"./DocsHeader-286d1c57.js";import{F as h}from"./Footer-5ceeff78.js";import"./index-ebeaab24.js";import{D as c}from"./DomRefTable-e6dd8118.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as T,C as a,a as o}from"./chunk-PCJTTTQV-833705f6.js";import{C as x,D as m,L as y,T as f,a as g}from"./Tree.stories-5c7bf66f.js";import{u as l}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-488c6444.js";import"./iframe-d954f772.js";import"../sb-preview/runtime.js";import"./UI5Element-1225b968.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-c5c4720b.js";import"./Icons-524f4c51.js";import"./decline-d268166e.js";import"./i18n-defaults-80781f7e.js";import"./information-b4bc7d32.js";import"./class-map-519e9c6d.js";import"./Button-f2c9b4f8.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-eff5e0e0.js";import"./TableOfContent-aeacb6fd.js";import"./index-83e4e94b.js";import"./Link-c4094736.js";import"./WrappingType-b81e595a.js";import"./index-44a97a4c.js";import"./Label-326b72d8.js";import"./index-9c09ad76.js";import"./index-8c4158be.js";import"./Popover-abd2c401.js";import"./Integer-f7f172c9.js";import"./PopupUtils-e5ce8d68.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-02b533b0.js";import"./FocusableElements-fe6ae4c8.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-401cf542.js";import"./ResizeHandler-a7d132d0.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./general-leave-request-ee28f229.js";import"./index-10a8e847.js";import"./BusyIndicator-d9721fcf.js";import"./index-99ea3281.js";import"./index-0e6f47ac.js";import"./Tree-2c155018.js";import"./ValueState-2c5e5904.js";import"./ListItem-6b3e715e.js";import"./ListItemBase-2b377f8a.js";import"./ItemNavigation-112e3f18.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./RadioButton-cf363528.js";import"./CheckBox-414bc569.js";import"./accept-198406be.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a7c9c70c.js";import"./navigation-right-arrow-7037c43a.js";import"./navigation-down-arrow-4786d6bb.js";import"./ValueState-ab6838cc.js";const S=`**Since:** 0.10.0

The \`TreeItem\` represents a node in a tree structure, shown as a \`List\`.  
This is the item to use inside a \`Tree\`. You can represent an arbitrary tree structure by recursively nesting tree items.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TreeItem\` exposes the following CSS Shadow Parts:

- title - Used to style the title of the tree list item
- additionalText - Used to style the additionalText of the tree list item
- icon - Used to style the icon of the tree list item
`,j=`**Since:** 1.7.0

The \`TreeItemCustom\` represents a node in a tree structure, shown as a \`List\`.  
This is the item to use inside a \`Tree\`. You can represent an arbitrary tree structure by recursively nesting tree items. You can use this item to put any custom content inside the tree item.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TreeItemCustom\` exposes the following CSS Shadow Parts:

- title - Used to style the title of the tree list item
- additionalText - Used to style the additionalText of the tree list item
- icon - Used to style the icon of the tree list item
`,C=`## Usage

### When to use:

- To display hierarchically structured items.
- To select one or more items out of a set of hierarchically structured items.

### When not to use:

- To display items not hierarchically strcutured. In this case, use the List component.
- To select one item from a very small number of non-hierarchical items. Select or ComboBox might be more appropriate.
- The hierarchy turns out to have only two levels. In this case, use List with group items.

## Keyboard Handling

The \`Tree\` provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree:

- \\[UP/DOWN\\] - Navigates up and down the tree items that are currently visible.
- \\[RIGHT\\] - Drills down the tree by expanding the tree nodes.
- \\[LEFT\\] - Goes up the tree and collapses the tree nodes.

The user can use the following keyboard shortcuts to perform selection, when the \`mode\` property is in use:

- \\[SPACE\\] - Selects the currently focused item upon keyup.
- \\[ENTER\\] - Selects the currently focused item upon keydown.
`,b=[{name:"walk",visibility:"public",parameters:[{name:"callback",type:"function",optional:!1,description:"function to execute on each node of the tree with 3 arguments: the node, the level and the index"}],description:"Perform Depth-First-Search walk on the tree and run a callback on each node"}];function et(r={}){const{wrapper:n}=Object.assign({},l(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h2:"h2",h1:"h1",h3:"h3",pre:"pre",code:"code"},l(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(T,{of:x}),`
`,e.jsx(d,{since:"0.10.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:m}),`
`,e.jsx(o,{children:C}),`
`,e.jsx(c,{rows:b}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"lazy-load-treeitems",children:"Lazy Load TreeItems"}),`
`,e.jsx(a,{of:y}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const LazyLoadingTree = () => {
  const [lazyChildren, setLazyChildren] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleItemToggle = (e) => {
    if (e.detail.item.dataset.id === 'lazychildren' && !lazyChildren) {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setLazyChildren(
          <>
            <TreeItem text="Tree 3.1" />
            <TreeItem text="Tree 3.2" />
          </>
        );
        e.detail.item.toggle();
      }, 3000);
    }
  };
  return (
    <BusyIndicator active={loading} style={{ width: '100%' }}>
      <Tree onItemToggle={handleItemToggle}>
        <TreeItem text="Has pre-loaded children">
          <TreeItem text="Tree 1.1" />
          <TreeItem text="Tree 1.2" />
        </TreeItem>
        <TreeItem text="Has no children" />
        <TreeItem text="Has children but not yet loaded" hasChildren icon={dlCloutIcon} data-id="lazychildren">
          {lazyChildren}
        </TreeItem>
      </Tree>
    </BusyIndicator>
  );
};
`})}),`
`,e.jsx(o,{children:u}),`
`,e.jsx(t.h2,{id:"treeitem",children:"TreeItem"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(o,{children:S}),`
`,e.jsx(t.h2,{id:"treeitemcustom",children:"TreeItemCustom"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(o,{children:j}),`
`,e.jsx(h,{})]})}}export{et as default};
//# sourceMappingURL=Tree-61448b37.js.map
