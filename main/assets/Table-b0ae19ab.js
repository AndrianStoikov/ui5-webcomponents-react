import{j as e}from"./jsx-runtime-5926aa06.js";import{C as y}from"./DomRefTable.module-2632e1ef.js";import{D as v}from"./DocsHeader-138dee87.js";import{F as x}from"./Footer-97907968.js";import"./index-ebeaab24.js";import{M as C,C as g,a as l,b as d}from"./chunk-PCJTTTQV-9310cc18.js";import{S as j}from"./SubcomponentsSection-6138f2fc.js";import{d as w,a as R,b as D,c as M}from"./index-2d7ddc49.js";import{_ as P}from"./iframe-b2b8afc3.js";import{a as _,U as O,d as k}from"./UI5Element-1225b968.js";import{e as G,l as f,a as L,b as N,p,c as I,d as E,w as U}from"./withWebComponent-d61dcbbc.js";import{e as F}from"./Icon-c5c4720b.js";import A from"./CheckBox-414bc569.js";import{bl as H}from"./i18n-defaults-254d6b69.js";import{C as $,D as S,G as W}from"./Table.stories-31ab8600.js";import{u as T}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-96e1463a.js";import"./slot-76e48863.js";import"./decline-d268166e.js";import"./Icons-524f4c51.js";import"./i18n-defaults-80781f7e.js";import"./information-b4bc7d32.js";import"./class-map-519e9c6d.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Button-f2c9b4f8.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-3a4d4d43.js";import"./TableOfContent-fb58c555.js";import"./index-fa6436ef.js";import"./Link-c4094736.js";import"./WrappingType-b81e595a.js";import"./index-a355cb59.js";import"./Label-326b72d8.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./index-9c09ad76.js";import"./index-693f73cd.js";import"./Popover-abd2c401.js";import"./Integer-f7f172c9.js";import"./PopupUtils-e5ce8d68.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-02b533b0.js";import"./FocusableElements-fe6ae4c8.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-401cf542.js";import"./ResizeHandler-a7d132d0.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./ItemNavigation-112e3f18.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-d9721fcf.js";import"../sb-preview/runtime.js";import"./ValueState-2c5e5904.js";import"./accept-198406be.js";function B(r,t,n){return G`<tr class="ui5-table-group-row-root" part="group-row" aria-label=${f(this.ariaLabelText)} tabindex="${f(this._tabIndex)}" @focusin="${this._onfocusin}"><td colspan=${f(this.colSpan)}><slot></slot></td></tr>`}_("@ui5/webcomponents-theming","sap_fiori_3",async()=>L);_("@ui5/webcomponents","sap_fiori_3",async()=>N);const z={packageName:"@ui5/webcomponents",fileName:"themes/TableGroupRow.css",content:':host{display:contents}:host([_busy]) .ui5-table-group-row-root{opacity:.72;pointer-events:none}.ui5-table-group-row-root{height:var(--ui5_table_group_row_height);border-style:solid;border-color:var(--sapList_TableGroupHeaderBorderColor);border-width:var(--ui5_table_border_width);background-color:var(--sapList_TableGroupHeaderBackground);color:var(--sapList_TableGroupHeaderTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--ui5_table_group_row_font-weight)}.ui5-table-group-row-root:focus{outline:var(--ui5_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--ui5_table_focus_outline_offset)}td{word-break:break-word;vertical-align:middle;padding:.5rem .25rem .5rem 1rem;text-align:start}'};var s=globalThis&&globalThis.__decorate||function(r,t,n,o){var c=arguments.length,a=c<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,t,n,o);else for(var b=r.length-1;b>=0;b--)(m=r[b])&&(a=(c<3?m(a):c>3?m(t,n,a):m(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},u;let i=u=class extends O{constructor(){super(...arguments),this.selected=!1,this._tabbables=[],this._columnsInfoString=""}get colSpan(){return this._colSpan}get ariaLabelText(){return`${u.i18nBundle.getText(H)} ${this.innerText}. ${this._ariaPosition}`}visibleColCount(){let t=this._columnsInfo.reduce((n,o)=>o.visible?++n:n,0);return this.mode===w.MultiSelect&&t++,t}onBeforeRendering(){!this._columnsInfo||this._columnsInfo.length===0||(this._colSpan=this.visibleColCount())}_onfocusin(t){this.fireEvent("_focused",t)}static async onDefine(){u.i18nBundle=await k("@ui5/webcomponents")}};s([p({type:w,defaultValue:w.None})],i.prototype,"mode",void 0);s([p({type:Object,multiple:!0})],i.prototype,"_columnsInfo",void 0);s([p({defaultValue:"-1"})],i.prototype,"_tabIndex",void 0);s([p({type:Boolean})],i.prototype,"_busy",void 0);s([p({defaultValue:"",noAttribute:!0})],i.prototype,"_ariaPosition",void 0);i=u=s([I({tag:"ui5-table-group-row",styles:z,renderer:E,template:B,dependencies:[A]}),F("_focused")],i);i.define();const V=i,q=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),h=U("ui5-table-group-row",[],[],[],[],()=>P(()=>Promise.resolve().then(()=>q),void 0,import.meta.url));h.displayName="TableGroupRow";try{h.displayName="TableGroupRow",h.__docgenInfo={description:'The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Table" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TableGroupRow",props:{children:{defaultValue:null,description:`Defines the text of the component.
**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const X='The `TableCell` component defines the structure of the data in a single `Table` cell.\n\n### CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `TableCell` exposes the following CSS Shadow Parts:\n\n- cell - Used to style the native `td` element\n',K='The `TableColumn` component allows to define column specific properties that are applied when rendering the `Table` component.\n\n### CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `TableColumn` exposes the following CSS Shadow Parts:\n\n- column - Used to style the native `th` element\n',J=`**Since:** 0.18.0

The \`TableGroupRow\` component represents a group row in the \`Table\`.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TableGroupRow\` exposes the following CSS Shadow Parts:

- group-row - Used to style the native \`tr\` element.
`,Q='The `TableRow` component represents a row in the `Table`.\n\n### CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `TableRow` exposes the following CSS Shadow Parts:\n\n- row - Used to style the native `tr` element\n- popin-row - Used to style the `tr` element when a row pops in\n',Y='## Selection\n\nTo benefit from the selection mechanism of `Table` component, you can use the available selection modes: `SingleSelect` and `MultiSelect`.  \nIn additition to the used mode, you can also specify the `Table-row` type choosing between `Active` or `Inactive`.\n\nIn `SingleSelect` mode, you can select both an `Active` and `Inactive` row via mouse or by pressing the `Space` or `Enter` keys.  \nIn `MultiSelect` mode, you can select both an `Active` and `Inactive` row by pressing the `Space` key when a row is on focus or via mouse click over the selection checkbox of the row. In order to select all the available rows at once, you can use the selection checkbox presented in the table\'s header.\n\n**Note:** Currently, when a column is shown as a pop-in, the visual indication for selection is not presented over it.\n\n## Keyboard Handling\n\n### Fast Navigation\n\nThis component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or `Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up`. In order to use this functionality, you need to import the following module: `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`\n\nFurthermore, you can interact with `Table` via the following keys.\n\n- \\[F7\\] - If focus is on an interactive control inside an item, moves focus to the corresponding item.\n- \\[CTRL\\]+\\[A\\] - Selects all items, if MultiSelect mode is enabled.\n- \\[HOME\\]/\\[END\\] - Focuses the first/last item.\n- \\[PAGEUP\\]/\\[PAGEDOWN\\] - Moves focus up/down by page size (20 items by default).\n- \\[ALT\\]+\\[DOWN\\]/\\[UP\\] - Switches focus between header, last focused item, and More button (if applies) in either direction.\n- \\[SHIFT\\]+\\[DOWN\\]/\\[UP\\] - Selects the next/previous item in a MultiSelect table, if the current item is selected (Range selection). Otherwise, deselects them (Range deselection).\n- \\[SHIFT\\]+\\[HOME\\]/\\[END\\] - Range selection to the first/last item of the List.\n- \\[CTRL\\]+\\[HOME\\]/\\[END\\] - Same behavior as HOME & END.\n';function go(r={}){const{wrapper:t}=Object.assign({},T(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",h3:"h3",pre:"pre"},T(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(C,{of:$}),`
`,e.jsx(v,{}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(g,{of:S}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(y,{of:S}),`
`,e.jsx(l,{children:Y}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"growing-table",children:"Growing Table"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Table"})," with ",e.jsx(o.code,{children:"growing={TableGrowingMode.Scroll}"}),"."]}),`
`,e.jsx(g,{of:W}),`
`,e.jsx(o.h3,{id:"code",children:"Code"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const createRows = (indexOffset) => {
  return new Array(25).fill('').map((_, index) => (
    <TableRow key={\`\${index + indexOffset} - row\`}>
      <TableCell>
        <Label>{index + indexOffset}</Label>
      </TableCell>
      <TableCell>
        <Label>Placeholder</Label>
      </TableCell>
    </TableRow>
  ));
};

const GrowingTable = () => {
  const [rows, setRows] = useState(createRows(1));
  const onLoadMore = () => {
    setRows((prev) => [...prev, ...createRows(prev.length + 1)]);
  };
  return (
    <div style={{ height: '250px', overflow: 'auto' }}>
      <Table
        onLoadMore={onLoadMore}
        growing={TableGrowingMode.Scroll}
        columns={
          <>
            <TableColumn>
              <Label>Column 1</Label>
            </TableColumn>
            <TableColumn>
              <Label>Column 2</Label>
            </TableColumn>
          </>
        }
      >
        {rows}
      </Table>
    </div>
  );
};
`})}),`
`,e.jsx(l,{children:j}),`
`,e.jsx(o.h2,{id:"tablecolumn",children:"TableColumn"}),`
`,e.jsx(d,{of:R}),`
`,e.jsx(l,{children:K}),`
`,e.jsx(o.h2,{id:"tablerow",children:"TableRow"}),`
`,e.jsx(d,{of:D}),`
`,e.jsx(l,{children:Q}),`
`,e.jsx(o.h2,{id:"tablegrouprow",children:"TableGroupRow"}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(l,{children:J}),`
`,e.jsx(o.h2,{id:"tablecell",children:"TableCell"}),`
`,e.jsx(d,{of:M}),`
`,e.jsx(l,{children:X}),`
`,e.jsx(x,{})]})}}export{go as default};
//# sourceMappingURL=Table-b0ae19ab.js.map
