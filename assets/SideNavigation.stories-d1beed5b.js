import{j as d}from"./jsx-runtime-5926aa06.js";import{c as ee}from"./calendar-f8571d4d.js";import{U as D,a as w,d as te,k as q}from"./UI5Element-1225b968.js";import{h as b}from"./Icons-524f4c51.js";import{h as ie}from"./home-545c835b.js";import{_ as C}from"./iframe-e3cf4f1d.js";import{p,c as P,e as c,s as r,l as o,a as F,d as oe,w as R}from"./withWebComponent-d61dcbbc.js";import{e as L,c as _}from"./Icon-c5c4720b.js";import{s as k}from"./slot-76e48863.js";import{H as ne}from"./HasPopup-47461347.js";import ae from"./ResponsivePopover-f78e52af.js";import{L as se}from"./ListItemBase-2b377f8a.js";import le from"./StandardListItem-3ab04a00.js";import{T as re,a as ce}from"./Tree-2c155018.js";import{K as de,L as pe,M as me,O as he,Q as ue}from"./i18n-defaults-217b10b4.js";import{s as B}from"./parameters-bundle.css-deb4e0b1.js";var v=globalThis&&globalThis.__decorate||function(a,t,i,e){var n=arguments.length,s=n<3?t:e===null?e=Object.getOwnPropertyDescriptor(t,i):e,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,t,i,e);else for(var h=a.length-1;h>=0;h--)(l=a[h])&&(s=(n<3?l(s):n>3?l(t,i,s):l(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let m=class extends D{get _tooltip(){return this.title||this.text}get _ariaHasPopup(){if(this.parentNode.collapsed&&this.items.length)return ne.Tree}};v([p()],m.prototype,"text",void 0);v([p()],m.prototype,"icon",void 0);v([p({type:Boolean})],m.prototype,"expanded",void 0);v([p({type:Boolean})],m.prototype,"selected",void 0);v([p({type:Boolean})],m.prototype,"wholeItemToggleable",void 0);v([p()],m.prototype,"title",void 0);v([p({type:Boolean})],m.prototype,"_fixed",void 0);v([k({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],m.prototype,"items",void 0);m=v([P("ui5-side-navigation-item"),L("click")],m);m.define();const x=m,ge=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));var T=globalThis&&globalThis.__decorate||function(a,t,i,e){var n=arguments.length,s=n<3?t:e===null?e=Object.getOwnPropertyDescriptor(t,i):e,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,t,i,e);else for(var h=a.length-1;h>=0;h--)(l=a[h])&&(s=(n<3?l(s):n>3?l(t,i,s):l(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let f=class extends D{get _tooltip(){return this.title||this.text}};T([p()],f.prototype,"text",void 0);T([p({type:Boolean})],f.prototype,"selected",void 0);T([p()],f.prototype,"icon",void 0);T([p()],f.prototype,"title",void 0);f=T([P("ui5-side-navigation-sub-item"),L("click")],f);f.define();const E=f,ve=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));function _e(a,t,i){return c`<div class="ui5-sn-root" role="navigation">${this.showHeader?fe.call(this,a,t,i):void 0}${this.items.length?be.call(this,a,t,i):void 0}<div class="ui5-sn-spacer"></div>${this.fixedItems.length?ye.call(this,a,t,i):void 0}</div> `}function fe(a,t,i){return c`<slot name="header"></slot>`}function be(a,t,i){return i?c`<${r("ui5-tree",t,i)} id="ui5-sn-items-tree" class="ui5-sn-items-tree" mode="None" .accessibleRoleDescription="${o(this.ariaRoleDescNavigationList)}" ?_minimal="${o(this.collapsed)}" _toggle-button-end @ui5-item-click="${o(this.handleTreeItemClick)}">${_(this._items,(e,n)=>e._id||n,(e,n)=>O.call(this,a,t,i,e,n))}</${r("ui5-tree",t,i)}>`:c`<ui5-tree id="ui5-sn-items-tree" class="ui5-sn-items-tree" mode="None" .accessibleRoleDescription="${o(this.ariaRoleDescNavigationList)}" ?_minimal="${o(this.collapsed)}" _toggle-button-end @ui5-item-click="${o(this.handleTreeItemClick)}">${_(this._items,(e,n)=>e._id||n,(e,n)=>O.call(this,a,t,i,e,n))}</ui5-tree>`}function O(a,t,i,e,n){return i?c`<${r("ui5-tree-item",t,i)} icon="${o(e.item.icon)}" .associatedItem="${o(e.item)}" text="${o(e.item.text)}" title="${o(e.item._tooltip)}" ?has-children="${e.item.items.length}" ?expanded="${e.item.expanded}" ?selected="${e.selected}" .ariaHaspopup="${o(e.item._ariaHasPopup)}" .accessibleRoleDescription="${o(this.ariaRoleDescNavigationListItem)}" ._fixed="${o(e.item._fixed)}">${this.collapsed?void 0:A.call(this,a,t,i,e,n)}</${r("ui5-tree-item",t,i)}>`:c`<ui5-tree-item icon="${o(e.item.icon)}" .associatedItem="${o(e.item)}" text="${o(e.item.text)}" title="${o(e.item._tooltip)}" ?has-children="${e.item.items.length}" ?expanded="${e.item.expanded}" ?selected="${e.selected}" .ariaHaspopup="${o(e.item._ariaHasPopup)}" .accessibleRoleDescription="${o(this.ariaRoleDescNavigationListItem)}" ._fixed="${o(e.item._fixed)}">${this.collapsed?void 0:A.call(this,a,t,i,e,n)}</ui5-tree-item>`}function A(a,t,i,e,n){return c`${_(e.item.items,(s,l)=>s._id||l,(s,l)=>$e.call(this,a,t,i,s,l))}`}function $e(a,t,i,e,n){return i?c`<${r("ui5-tree-item",t,i)} .associatedItem="${o(e)}" text="${o(e.text)}" title="${o(e._tooltip)}" icon="${o(e.icon)}" ?selected="${e.selected}" .accessibleRoleDescription="${o(this.ariaRoleDescNavigationListItem)}"></${r("ui5-tree-item",t,i)}>`:c`<ui5-tree-item .associatedItem="${o(e)}" text="${o(e.text)}" title="${o(e._tooltip)}" icon="${o(e.icon)}" ?selected="${e.selected}" .accessibleRoleDescription="${o(this.ariaRoleDescNavigationListItem)}"></ui5-tree-item>`}function ye(a,t,i){return i?c`<div><div class="ui5-sn-bottom-content-border"><span></span></div><${r("ui5-tree",t,i)} id="ui5-sn-fixed-items-tree" mode="None" ?_minimal="${o(this.collapsed)}" _toggle-button-end @ui5-item-click="${o(this.handleTreeItemClick)}" .accessibleRoleDescription="${o(this.ariaRoleDescNavigationList)}">${_(this._fixedItems,(e,n)=>e._id||n,(e,n)=>V.call(this,a,t,i,e,n))}</${r("ui5-tree",t,i)}></div>`:c`<div><div class="ui5-sn-bottom-content-border"><span></span></div><ui5-tree id="ui5-sn-fixed-items-tree" mode="None" ?_minimal="${o(this.collapsed)}" _toggle-button-end @ui5-item-click="${o(this.handleTreeItemClick)}" .accessibleRoleDescription="${o(this.ariaRoleDescNavigationList)}">${_(this._fixedItems,(e,n)=>e._id||n,(e,n)=>V.call(this,a,t,i,e,n))}</ui5-tree></div>`}function V(a,t,i,e,n){return i?c`<${r("ui5-tree-item",t,i)} icon="${o(e.item.icon)}" .associatedItem="${o(e.item)}" text="${o(e.item.text)}" title="${o(e.item._tooltip)}" ?has-children="${e.item.items.length}" ?expanded="${e.item.expanded}" ?selected="${e.selected}" .ariaHaspopup="${o(e.item._ariaHasPopup)}" .accessibleRoleDescription="${o(this.ariaRoleDescNavigationListItem)}">${this.collapsed?void 0:H.call(this,a,t,i,e,n)}</${r("ui5-tree-item",t,i)}>`:c`<ui5-tree-item icon="${o(e.item.icon)}" .associatedItem="${o(e.item)}" text="${o(e.item.text)}" title="${o(e.item._tooltip)}" ?has-children="${e.item.items.length}" ?expanded="${e.item.expanded}" ?selected="${e.selected}" .ariaHaspopup="${o(e.item._ariaHasPopup)}" .accessibleRoleDescription="${o(this.ariaRoleDescNavigationListItem)}">${this.collapsed?void 0:H.call(this,a,t,i,e,n)}</ui5-tree-item>`}function H(a,t,i,e,n){return c`${_(e.item.items,(s,l)=>s._id||l,(s,l)=>Ie.call(this,a,t,i,s,l))}`}function Ie(a,t,i,e,n){return i?c`<${r("ui5-tree-item",t,i)} .associatedItem="${o(e)}" text="${o(e.text)}" title="${o(e._tooltip)}" ?selected="${e.selected}" .accessibleRoleDescription="${o(this.ariaRoleDescNavigationListItem)}"></${r("ui5-tree-item",t,i)}>`:c`<ui5-tree-item .associatedItem="${o(e)}" text="${o(e.text)}" title="${o(e._tooltip)}" ?selected="${e.selected}" .accessibleRoleDescription="${o(this.ariaRoleDescNavigationListItem)}"></ui5-tree-item>`}function Se(a,t,i){return i?c`<${r("ui5-responsive-popover",t,i)} vertical-align="Top" class="ui5-side-navigation-popover" aria-labelledby="${o(this._id)}-sideNavigationPopoverText" aria-modal="true" @ui5-after-open="${o(this._onAfterOpen)}"><span id="${o(this._id)}-sideNavigationPopoverText" class="ui5-hidden-text">${o(this.accSideNavigationPopoverHiddenText)}</span><${r("ui5-side-navigation",t,i)} class="ui5-side-navigation-in-popover" @ui5-selection-change="${o(this.handleInnerSelectionChange)}"><${r("ui5-side-navigation-item",t,i)} title="${o(this._popoverContents.mainItem._tooltip)}" text="${o(this._popoverContents.mainItem.text)}" expanded="true" _fixed="true" ?selected="${this._popoverContents.mainItem.selected}" .associatedItem="${o(this._popoverContents.mainItem)}">${_(this._popoverContents.subItems,(e,n)=>e._id||n,(e,n)=>z.call(this,a,t,i,e,n))}</${r("ui5-side-navigation-item",t,i)}></${r("ui5-side-navigation",t,i)}></${r("ui5-responsive-popover",t,i)}>`:c`<ui5-responsive-popover vertical-align="Top" class="ui5-side-navigation-popover" aria-labelledby="${o(this._id)}-sideNavigationPopoverText" aria-modal="true" @ui5-after-open="${o(this._onAfterOpen)}"><span id="${o(this._id)}-sideNavigationPopoverText" class="ui5-hidden-text">${o(this.accSideNavigationPopoverHiddenText)}</span><ui5-side-navigation class="ui5-side-navigation-in-popover" @ui5-selection-change="${o(this.handleInnerSelectionChange)}"><ui5-side-navigation-item title="${o(this._popoverContents.mainItem._tooltip)}" text="${o(this._popoverContents.mainItem.text)}" expanded="true" _fixed="true" ?selected="${this._popoverContents.mainItem.selected}" .associatedItem="${o(this._popoverContents.mainItem)}">${_(this._popoverContents.subItems,(e,n)=>e._id||n,(e,n)=>z.call(this,a,t,i,e,n))}</ui5-side-navigation-item></ui5-side-navigation></ui5-responsive-popover>`}function z(a,t,i,e,n){return i?c`<${r("ui5-side-navigation-sub-item",t,i)} title="${o(e._tooltip)}" text="${o(e.text)}" ?selected="${e.selected}" .associatedItem="${o(e)}"></${r("ui5-side-navigation-sub-item",t,i)}>`:c`<ui5-side-navigation-sub-item title="${o(e._tooltip)}" text="${o(e.text)}" ?selected="${e.selected}" .associatedItem="${o(e)}"></ui5-side-navigation-sub-item>`}w("@ui5/webcomponents-theming","sap_fiori_3",async()=>F);w("@ui5/webcomponents-fiori","sap_fiori_3",async()=>B);const Ne={packageName:"@ui5/webcomponents-fiori",fileName:"themes/SideNavigation.css",content:":host(:not([hidden])){display:inline-block;width:15rem;height:100%;transition:width .25s;--_ui5-tree-toggle-box-width:var(--_ui5_side_navigation_icon_padding);--_ui5_list_item_icon_size:var(--_ui5_side_navigation_icon_size);--_ui5-tree-toggle-icon-size:var(--_ui5_side_navigation_toggle_icon_size);--_ui5_list_item_title_size:var(--sapFontLargeSize);--_ui5_list_item_icon_padding-inline-end:var(--_ui5_side_navigation_icon_padding);--_ui5-tree-indent-step:var(--_ui5_side_navigation_indent_step)}:host([collapsed]){width:var(--_ui5_side_navigation_collapsed_state_width)}:host(.ui5-side-navigation-in-popover) .ui5-sn-root{border-right:none}.ui5-sn-root{height:100%;display:flex;flex-direction:column;box-sizing:border-box;background:var(--sapList_Background);border-right:var(--sapList_BorderWidth) solid var(--sapList_GroupHeaderBorderColor);box-shadow:var(--sapContent_Shadow0)}.ui5-sn-items-tree{overflow:auto}.ui5-sn-bottom-content-border{width:100%;padding:0 1rem;margin:.25rem 0;display:flex;justify-content:center;box-sizing:border-box}:host([collapsed]) .ui5-sn-bottom-content-border{padding:0 .5rem}.ui5-sn-bottom-content-border>span{width:100%;height:.125rem;background:var(--_ui5_side_navigation_separator_backgound)}.ui5-sn-spacer{flex:1;min-height:0}[ui5-tree-item]::part(toggle-icon){color:var(--sapContent_NonInteractiveIconColor);flex-shrink:0}[ui5-tree-item]::part(icon){color:var(--_ui5_side_navigation_icon_color)}"};w("@ui5/webcomponents-theming","sap_fiori_3",async()=>F);w("@ui5/webcomponents-fiori","sap_fiori_3",async()=>B);const Te={packageName:"@ui5/webcomponents-fiori",fileName:"themes/SideNavigationPopover.css",content:".ui5-side-navigation-popover::part(content){padding:0}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-side-navigation-in-popover{--_ui5-tree-toggle-box-width:1rem;--_ui5-tree-indent-step:0;width:auto}"};var I=globalThis&&globalThis.__decorate||function(a,t,i,e){var n=arguments.length,s=n<3?t:e===null?e=Object.getOwnPropertyDescriptor(t,i):e,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,t,i,e);else for(var h=a.length-1;h>=0;h--)(l=a[h])&&(s=(n<3?l(s):n>3?l(t,i,s):l(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s},y;let g=y=class extends D{constructor(){super(...arguments),this._createTreeItem=t=>({item:t,selected:t.items.some(i=>i.selected)&&this.collapsed||t.selected})}get _items(){return this.items.map(this._createTreeItem)}get _fixedItems(){return this.fixedItems.map(this._createTreeItem)}_setSelectedItem(t){this.fireEvent("selection-change",{item:t},!0)&&(this._walk(i=>{i.selected=!1}),t.selected=!0)}_buildPopoverContent(t){this._popoverContents={mainItem:t,mainItemSelected:t.selected&&!t.items.some(i=>i.selected),selectedSubItemIndex:t.items.findIndex(i=>i.selected)+1,subItems:t.items}}async _onAfterOpen(){const t=await this.getPickerTree(),i=this._popoverContents.selectedSubItemIndex;t.focusItemByIndex(i)}get accSideNavigationPopoverHiddenText(){return y.i18nBundle.getText(de)}get ariaRoleDescNavigationList(){let t=pe;return this.collapsed&&(t=me),y.i18nBundle.getText(t)}get ariaRoleDescNavigationListItem(){let t=he;return this.collapsed&&(t=ue),y.i18nBundle.getText(t)}handleTreeItemClick(t){const i=t.detail.item,e=i.associatedItem;if(e instanceof x&&!e.wholeItemToggleable||e instanceof E?e.fireEvent("click"):e.expanded=!e.expanded,!(e.selected&&!this.collapsed))if(this.collapsed&&e instanceof x&&e.items.length){this._buildPopoverContent(e);let n=this._itemsTree;n!==t.target&&(n=this._fixedItemsTree),this.openPicker(n._getListItemForTreeItem(i))}else e.selected||this._setSelectedItem(e)}handleInnerSelectionChange(t){const i=t.detail.item,{associatedItem:e}=i;e.fireEvent("click"),!e.selected&&(this._setSelectedItem(e),this.closePicker())}async getPicker(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}async openPicker(t){(await this.getPicker()).showAt(t)}async closePicker(){(await this.getPicker()).close()}async getPickerTree(){return(await this.getPicker()).querySelector("[ui5-side-navigation]")._itemsTree}get hasHeader(){return!!this.header.length}get showHeader(){return this.hasHeader&&!this.collapsed}get _itemsTree(){return this.getDomRef().querySelector("#ui5-sn-items-tree")}get _fixedItemsTree(){return this.getDomRef().querySelector("#ui5-sn-fixed-items-tree")}_walk(t){this.items.forEach(i=>{t(i),i.items.forEach(e=>{t(e)})}),this.fixedItems.forEach(i=>{t(i),i.items.forEach(e=>{t(e)})})}static async onDefine(){[y.i18nBundle]=await Promise.all([te("@ui5/webcomponents-fiori"),super.onDefine()])}};I([p({type:Boolean})],g.prototype,"collapsed",void 0);I([p({type:Object})],g.prototype,"_popoverContents",void 0);I([k({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],g.prototype,"items",void 0);I([k()],g.prototype,"header",void 0);I([k({type:HTMLElement,invalidateOnChildChange:!0})],g.prototype,"fixedItems",void 0);g=y=I([P({tag:"ui5-side-navigation",fastNavigation:!0,renderer:oe,template:_e,staticAreaTemplate:Se,styles:Ne,staticAreaStyles:Te,dependencies:[se,le,re,ce,ae,x,E]}),L("selection-change",{detail:{item:{type:HTMLElement}}})],g);g.define();const xe=g,we=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"})),N=R("ui5-side-navigation",[],["collapsed"],["fixedItems","header"],["selection-change"],()=>C(()=>Promise.resolve().then(()=>we),void 0,import.meta.url));N.displayName="SideNavigation";try{N.displayName="SideNavigation",N.__docgenInfo={description:`The \`SideNavigation\` is used as a standard menu in applications. It consists of three containers: header (top-aligned), main navigation section (top-aligned) and the secondary section (bottom-aligned).

*   The header is meant for displaying user related information - profile data, avatar, etc.
*   The main navigation section is related to the user’s current work context
*   The secondary section is mostly used to link additional information that may be of interest (legal information, developer communities, external help, contact information and so on).

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SideNavigation" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"SideNavigation",props:{children:{defaultValue:null,description:"Defines the main items of the `SideNavigation`. Use the `SideNavigationItem` component for the top-level items, and the `SideNavigationSubItem` component for second-level items, nested inside the items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},fixedItems:{defaultValue:null,description:'Defines the fixed items at the bottom of the `SideNavigation`. Use the `SideNavigationItem` component for the fixed items, and optionally the `SideNavigationSubItem` component to provide second-level items inside them. **Note:** In order to achieve the best user experience, it is recommended that you keep the fixed items "flat" (do not pass sub-items)\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="fixedItems"`).\nSince you can\'t change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component\'s children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).',name:"fixedItems",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},header:{defaultValue:null,description:`Defines the header of the \`SideNavigation\`.

**Note:** The header is displayed when the component is expanded - the property \`collapsed\` is false;

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onSelectionChange:{defaultValue:null,description:"Fired when the selection has changed via user interaction",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<SideNavigationDomRef, { item: HTMLElement; }>) => void"}},collapsed:{defaultValue:null,description:"Defines whether the `SideNavigation` is expanded or collapsed.",name:"collapsed",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const u=R("ui5-side-navigation-item",["icon","text"],["expanded","selected","wholeItemToggleable"],[],["click"],()=>C(()=>Promise.resolve().then(()=>ge),void 0,import.meta.url));u.displayName="SideNavigationItem";try{u.displayName="SideNavigationItem",u.__docgenInfo={description:'The `SideNavigationItem` is used within `SideNavigation` only. Via the `SideNavigationItem` you control the content of the `SideNavigation`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SideNavigation" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"SideNavigationItem",props:{children:{defaultValue:null,description:"Defines nested items by passing `SideNavigationSubItem` to the default slot.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a click/tap or by using the Enter or Space key.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<SideNavigationItemDomRef, never>) => void"}},expanded:{defaultValue:null,description:"Defines if the item is expanded",name:"expanded",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`Defines the icon of the item.

The SAP-icons font provides numerous options.
See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Defines whether the subitem is selected",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the item.",name:"text",required:!1,type:{name:"string"}},wholeItemToggleable:{defaultValue:null,description:"Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if present). If set to true, pressing the whole item will toggle the sub items, and it won't fire the `onClick` event. By default, only pressing the arrow icon will toggle the sub items & the click event will be fired if the item is pressed outside of the icon.",name:"wholeItemToggleable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const $=R("ui5-side-navigation-sub-item",["icon","text"],["selected"],[],["click"],()=>C(()=>Promise.resolve().then(()=>ve),void 0,import.meta.url));$.displayName="SideNavigationSubItem";try{$.displayName="SideNavigationSubItem",$.__docgenInfo={description:'The `SideNavigationSubItem` is intended to be used inside a `SideNavigationItem` only.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SideNavigation" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"SideNavigationSubItem",props:{onClick:{defaultValue:null,description:"Fired when the component is activated either with a click/tap or by using the Enter or Space key.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<SideNavigationSubItemDomRef, never>) => void"}},icon:{defaultValue:null,description:`Defines the icon of the item.

The SAP-icons font provides numerous options.
See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Defines whether the subitem is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the item.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const qe="chain-link",W="M452 68q13 13 19 29t6 33-6 33.5-19 29.5L334 310q-26 26-62 26-17 0-33-6.5T210 310l-11-11q-3-3-5-6l-4-6 21-21 22 22q16 16 39 16 22 0 40-16l117-118q17-17 17-39.5T429 91l-11-12q-16-16-40-16-23 0-39 16l-75 76h-45l97-98q13-13 29-19.5t33-6.5q37 0 63 26zM236 376h45l-78 78q-25 25-62 25-17 0-33-6t-29-19l-11-12q-26-26-26-62t26-62l100-101q13-13 29-19t33-6q37 0 63 25l11 12 2 2-22 22-26-22q-11-7-28-7-24 0-39 16L90 340q-16 18-16 40t16 40l12 11q16 16 39 16 22 0 40-16z",ke=!1,De="SAP-icons-v4",Ce="@ui5/webcomponents-icons";b(qe,{pathData:W,ltr:ke,collection:De,packageName:Ce});const Pe="chain-link",G="M233 393q8-8 20-8t18 11q8 8 8 19t-8 19l-38 37q-20 20-45.5 30.5T136 512t-50.5-10.5T41 471t-30-45-10-51 10-51 30-45l76-75q20-20 45.5-30.5T214 163t51 10.5 44 30.5q8 8 8 19t-8 19-19 8-19-8q-23-25-56-25t-57 25l-76 75q-25 23-25 56t25 58q23 24 56 24t57-24zM471 41q20 19 30.5 44t10.5 51-10.5 50.5T471 231l-75 75q-21 21-46 31t-51.5 10-51-10-43.5-31q-8-8-8-18.5t8-18.5 18.5-8 18.5 8q11 12 26 18t30.5 6 30.5-6 27-18l76-76q24-23 24-56t-24-58q-23-24-56-24t-58 24l-38 38q-8 8-19 8t-19-8-8-19 8-19l38-38q20-20 45.5-30.5T376 0t51 10.5T471 41z",Re=!1,Le="SAP-icons-v5",Ee="@ui5/webcomponents-icons";b(Pe,{pathData:G,ltr:Re,collection:Le,packageName:Ee});q();const Oe="chain-link",Ae="group",K="M320 512H0v-96q0-27 10-50t27.5-40.5 41-27.5 49.5-10h32q-40 0-68-28t-28-68 28-68 68-28 68 28 28 68-28 68-68 28h32q25 0 46.5 8.5T277 320q6 5 11 11 15 17 23.5 38.5T320 416v96zm-32-32v-64q0-40-28-68t-68-28h-64q-19 0-36.5 7.5t-31 20.5-21 30.5T32 416v64h256zm0-263v-39q29-18 64-18h16q-33 0-56.5-23.5T288 80t23.5-56.5T368 0q34 0 57 23.5T448 80t-23 56.5-57 23.5h16q27 0 50 10t40.5 27.5T502 238t10 50v64H353v-32h127v-32q0-40-28-68t-68-28h-32q-39 0-64 25zM96 192q0 26 19 45t45 19q27 0 45.5-19t18.5-45q0-27-18.5-45.5T160 128q-26 0-45 18.5T96 192zM320 80q0 20 14 34t34 14 34-14 14-34-14-34-34-14-34 14-14 34z",Ve=!1,He="SAP-icons-v4",ze="@ui5/webcomponents-icons";b(Ae,{pathData:K,ltr:Ve,collection:He,packageName:ze});const je="group",Q="M407 251q47 26 76 72t29 104v57q0 28-29 28H143q-13 0-21-7.5t-8-20.5v-29H29q-28 0-28-28v-57q0-42 23-76t59-51q-13-15-19-33.5T58 172q0-24 9-44.5t24.5-36 36-24.5 43.5-9q7 0 13 .5t13 2.5q19-28 49.5-44T313 1q30 0 56 11t45 30.5 30 45 11 55.5q0 32-12.5 60.5T407 251zM313 58q-36 0-60.5 24.5T228 143t24.5 60.5T313 228t60.5-24.5T398 143t-24.5-60.5T313 58zm-145 57q-23 0-39.5 16.5T112 172q0 23 16.5 39.5T168 228h32q-13-17-21-39.5t-8-45.5q0-6 .5-14t2.5-14h-6zM58 399h59q9-69 57-114h-31q-36 0-60.5 24.5T58 370v29zm397 28q0-30-11-55.5t-30-45-45-30.5-56-11-55.5 11-45 30.5-30.5 45-11 55.5v28h284v-28z",Me=!1,Ue="SAP-icons-v5",Fe="@ui5/webcomponents-icons";b(je,{pathData:Q,ltr:Me,collection:Ue,packageName:Fe});q();const Be="group",We="history",X="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-100-20-81.5-55T20 355.5 0 256t20-99.5T74.5 75 156 20 256 0zm0 480q46 0 87-17.5t71.5-48 48-71T480 256q0-46-17.5-87t-48-71.5-71.5-48T256 32q-47 0-87.5 17.5t-71 48-48 71.5T32 256q0 47 17.5 87.5t48 71 71 48T256 480zm144-224q6 0 11 4.5t5 11.5-5 11.5-11 4.5H224V144q0-16 16-16 6 0 11 4.5t5 11.5v112h144z",Ge=!1,Ke="SAP-icons-v4",Qe="@ui5/webcomponents-icons";b(We,{pathData:X,ltr:Ge,collection:Ke,packageName:Qe});const Xe="history",J="M254 0q53 0 99.5 20.5t81.5 55 55 81 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20q-46 0-87.5-15T92 455.5t-56.5-63T3 313q-2-10 3.5-19.5T23 282q10-2 19.5 3.5T54 302q8 35 26.5 64t44.5 50 59 33 70 12q42 0 79.5-16t65-44 44-65.5T459 256t-16-79-43.5-64T335 70t-79-16q-57 0-104.5 28T77 157h82q11 0 18.5 7t7.5 18-7.5 18.5T159 208H31q-11 0-18.5-8T5 182V54q0-11 7.5-18T31 29t18.5 7T57 54v41q35-45 86-70T254 0zm7 105q12 0 19 7.5t7 18.5v118l69 69q8 8 8 18t-8 18-18 8-18-8l-76-77q-8-7-8-18V131q0-11 7-18.5t18-7.5z",Je=!1,Ye="SAP-icons-v5",Ze="@ui5/webcomponents-icons";b(Xe,{pathData:J,ltr:Je,collection:Ye,packageName:Ze});q();const et="history",tt="locate-me",Y="M451.667 43q5-3 9 1.5t2 9.5l-198 395q-3 5-9 4t-6-8V264q0-8-8-8h-182q-6 0-7.5-6t4.5-9z",it=!1,ot="SAP-icons-v4",nt="@ui5/webcomponents-icons";b(tt,{pathData:Y,ltr:it,collection:ot,packageName:nt});const at="locate-me",Z="M299 480q-8 0-14.5-4t-9.5-12l-65-164-162-65q-16-6-16-24 0-17 16-24L445 34q6-2 10-2 10 0 17.5 7.5T480 57q0 6-2 10L323 464q-6 16-24 16z",st=!1,lt="SAP-icons-v5",rt="@ui5/webcomponents-icons";b(at,{pathData:Z,ltr:st,collection:lt,packageName:rt});q();const ct="locate-me",dt={title:"Layouts & Floorplans / SideNavigation",component:N,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}},header:{control:{disable:!0}}},args:{fixedItems:d.jsxs(d.Fragment,{children:[d.jsx(u,{text:"Useful Links",icon:Oe}),d.jsx(u,{text:"History",icon:et})]})}},S={render:a=>d.jsxs(N,{...a,children:[d.jsx(u,{text:"Home",icon:ie}),d.jsxs(u,{text:"People",expanded:!0,icon:Be,children:[d.jsx($,{text:"From My Team"}),d.jsx($,{text:"From Other Teams"})]}),d.jsx(u,{text:"Locations",icon:ct,selected:!0}),d.jsxs(u,{text:"Events",icon:ee,children:[d.jsx($,{text:"Local"}),d.jsx($,{text:"Others"})]})]})};var j,M,U;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    return <SideNavigation {...args}>
        <SideNavigationItem text="Home" icon={homeIcon} />
        <SideNavigationItem text="People" expanded icon={groupIcon}>
          <SideNavigationSubItem text="From My Team" />
          <SideNavigationSubItem text="From Other Teams" />
        </SideNavigationItem>
        <SideNavigationItem text="Locations" icon={locateMeIcon} selected />
        <SideNavigationItem text="Events" icon={calendarIcon}>
          <SideNavigationSubItem text="Local" />
          <SideNavigationSubItem text="Others" />
        </SideNavigationItem>
      </SideNavigation>;
  }
}`,...(U=(M=S.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const pt=["Default"],Ct=Object.freeze(Object.defineProperty({__proto__:null,Default:S,__namedExportsOrder:pt,default:dt},Symbol.toStringTag,{value:"Module"}));export{Ct as C,S as D,u as S,$ as a};
//# sourceMappingURL=SideNavigation.stories-d1beed5b.js.map
