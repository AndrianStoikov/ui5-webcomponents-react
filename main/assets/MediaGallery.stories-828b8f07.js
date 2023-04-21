import{j as n}from"./jsx-runtime-ccada58e.js";import{r as se}from"./index-f1f749bf.js";import{_ as K}from"./iframe-e471b753.js";import{k as re,a as S,U as Q}from"./UI5Element-e8adceda.js";import{a as Y,e as m,l as u,s as _,p as s,c as Z,d as ee,w as te}from"./withWebComponent-791919b7.js";import{h as ie,c as x,b as ue}from"./Icons-5b18f7d2.js";import{c as f}from"./Device-208919c6.js";import{I as me,c as z,e as C}from"./Icon-b04dccd7.js";import{s as N}from"./slot-76e48863.js";import{s as ae}from"./parameters-bundle.css-6b4a2ffb.js";import{s as de}from"./style-map-d22cbf2f.js";import{T as he}from"./index-91554aaa.js";import{I as ce,N as pe}from"./ItemNavigation-01761450.js";import{R as q}from"./ResizeHandler-9d370fcd.js";import{M as L}from"./MediaRange-25b98f31.js";import{I as ge}from"./Integer-f7f172c9.js";import{B as ye}from"./Button-08c55dbf.js";import{b as fe}from"./Carousel-99005c8a.js";var D;(function(i){i.Square="Square",i.Wide="Wide"})(D||(D={}));const H=D;var G;(function(i){i.Auto="Auto",i.Vertical="Vertical",i.Horizontal="Horizontal"})(G||(G={}));const p=G;var j;(function(i){i.Left="Left",i.Right="Right"})(j||(j={}));const A=j;var $;(function(i){i.Top="Top",i.Bottom="Bottom"})($||($={}));const k=$,_e="background",oe="M368 192q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm80-160q14 0 23 9t9 23v384q0 14-9 23t-23 9H64q-13 0-22.5-9T32 448V64q0-14 9.5-23T64 32h384zm0 32H64v384h384V64zm-92 288l-58-85 22-43 96 128h-60zm-7 32H94l130-183z",be=!1,ve="SAP-icons-v4",we="@ui5/webcomponents-icons";ie(_e,{pathData:oe,ltr:be,collection:ve,packageName:we});const Ie="background",ne="M168 208q17 0 28.5-12t11.5-28q0-17-11.5-28.5T168 128t-28.5 11.5T128 168q0 16 11.5 28t28.5 12zM405 32q31 0 53 22t22 53v298q0 31-22 53t-53 22H107q-31 0-53-22t-22-53V107q0-31 22-53t53-22h298zM107 83q-10 0-17 7t-7 17v285l91-90q14-14 31-4l40 23 89-90q14-12 29-4l66 32V107q0-10-7-17t-17-7H107zm298 346q10 0 17-7t7-17v-89l-72-35-67 66 17 10q10 5 12.5 15.5T317 392q-6 9-16 11.5t-19-2.5l-86-49-77 77h286z",Te=!1,Me="SAP-icons-v5",He="@ui5/webcomponents-icons";ie(Ie,{pathData:ne,ltr:Te,collection:Me,packageName:He});re();S("@ui5/webcomponents-theming","sap_fiori_3",async()=>Y);S("@ui5/webcomponents-fiori","sap_fiori_3",async()=>ae);const Ae={packageName:"@ui5/webcomponents-fiori",fileName:"themes/MediaGalleryItem.css.ts",content:":host{width:100%;height:100%;position:relative;display:flex}:host([_square]){height:0;padding-top:100%}.ui5-media-gallery-item-root{width:100%;height:100%;display:flex}:host([_square]) .ui5-media-gallery-item-root{position:absolute;top:0;left:0}:host([layout=Wide]) .ui5-media-gallery-item-root{align-items:center}:host([_thumbnail-design]) .ui5-media-gallery-item-root{border:var(--_ui5_media_gallery_thumbnail_border);box-sizing:border-box}:host([_interactive]) .ui5-media-gallery-item-root{cursor:pointer}:host([_thumbnail-design]:not([disabled]):not([selected])) .ui5-media-gallery-item-root:hover{border-color:var(--sapTile_Interactive_BorderColor);background:var(--sapList_Hover_Background)}:host([focused]) .ui5-media-gallery-item-root{outline:var(--_ui5_media_gallery_thumbnail_focus_outline);outline-offset:-1px}:host([_thumbnail-design][selected]) .ui5-media-gallery-item-root{border:var(--_ui5_media_gallery_thumbnail_selected_border)}:host([_thumbnail-design][focused][selected]) .ui5-media-gallery-item-root{outline-offset:-3px}.ui5-media-gallery-item-wrapper{width:100%;height:100%;display:flex;justify-content:center}:host([layout=Wide]) .ui5-media-gallery-item-wrapper{z-index:1}:host([layout=Wide]:not([_thumbnail-design])) .ui5-media-gallery-item-wrapper{height:56.25%}[ui5-icon]{position:absolute;width:4.5rem;height:4.55rem;align-self:center}.ui5-media-gallery-item-mask-layer{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([_thumbnail-design])) .ui5-media-gallery-item-mask-layer{z-index:2;background:var(--sapBaseColor);mix-blend-mode:multiply;opacity:.2;box-shadow:var(--_ui5_media_gallery_item_overlay_box_shadow);pointer-events:none}:host(:not([_thumbnail-design])[layout=Wide]) .ui5-media-gallery-item-mask-layer{z-index:0}:host([disabled]) .ui5-media-gallery-item-mask-layer{z-index:2;background:var(--sapContent_ImagePlaceholderBackground);opacity:.5;cursor:default}::slotted([slot^=thumbnail]),:host([layout=Wide]) ::slotted(*){width:100%;height:100%;object-fit:cover}::slotted(*){max-width:100%;max-height:100%;object-fit:contain;margin:auto}"},ke=(i,e,t)=>m`<div class="ui5-media-gallery-item-root" tabindex="${u(i.effectiveTabIndex)}" data-sap-focus-ref @focusout="${i._onfocusout}" @focusin="${i._onfocusin}" @keydown="${i._onkeydown}" @keyup="${i._onkeyup}" role="${u(i._role)}"><div class="ui5-media-gallery-item-mask-layer"></div><div class="ui5-media-gallery-item-wrapper" style="${de(i.styles.wrapper)}">${i._showBackgroundIcon?Se(i,e,t):void 0}${i._useContent?Ce():void 0}${i._useThumbnail?ze():void 0}</div></div>`,Se=(i,e,t)=>t?m`<${_("ui5-icon",e,t)} name="background"></${_("ui5-icon",e,t)}>`:m`<ui5-icon name="background"></ui5-icon>`,Ce=(i,e,t)=>m`<slot></slot>`,ze=(i,e,t)=>m`<slot name="thumbnail"></slot>`;var h=globalThis&&globalThis.__decorate||function(i,e,t,a){var o=arguments.length,l=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(i,e,t,a);else for(var v=i.length-1;v>=0;v--)(y=i[v])&&(l=(o<3?y(l):o>3?y(e,t,l):y(e,t))||l);return o>3&&l&&Object.defineProperty(e,t,l),l};let r=class extends Q{constructor(){super(),this._monitoredContent=null,this._monitoredThumbnail=null}onEnterDOM(){this._thumbnailDesign=!f(),this._interactive=!f(),this._square=!0}get _thumbnail(){return this.thumbnail.length?this.thumbnail[0]:null}get _content(){return this.content.length?this.content[0]:null}get _isThubmnailAvailable(){return this._thumbnail&&!this._thumbnailNotFound}get _isContentAvailable(){return this._content&&!this._contentImageNotFound}get _useThumbnail(){return this._thumbnailDesign&&this._isThubmnailAvailable}get _useContent(){return!this._useThumbnail&&this._isContentAvailable}get effectiveTabIndex(){return this.disabled?void 0:this._tabIndex}get _showBackgroundIcon(){return this._thumbnailNotFound||this._contentImageNotFound}get styles(){return{wrapper:{height:this.contentHeight}}}get _role(){return this._interactive?"button":void 0}onBeforeRendering(){this._monitorLoadingError()}_monitorLoadingError(){let e,t;this._thumbnailDesign&&this.thumbnail.length&&this._monitoredThumbnail!==this._thumbnail&&(this._thumbnailNotFound=!1,e=this._updateThumbnailLoaded.bind(this),t=this._attachListeners(this._thumbnail,e),t&&(this._monitoredThumbnail=this._thumbnail)),!this._useThumbnail&&this.content.length&&this._monitoredContent!==this._content&&(this._contentImageNotFound=!1,e=this._updateContentImageLoaded.bind(this),t=this._attachListeners(this._content,e),t&&(this._monitoredContent=this._content))}_attachListeners(e,t){const a=e.tagName==="IMG",o=a?e:e.querySelector("img");if(o)return t(o),o.addEventListener("error",()=>{this.contains(o)&&t(o)}),o.addEventListener("load",()=>{this.contains(o)&&t(o)}),!0}_updateContentImageLoaded(e){this._contentImageNotFound=e.naturalHeight===0&&e.naturalWidth===0}_updateThumbnailLoaded(e){this._thumbnailNotFound=e.naturalHeight===0&&e.naturalWidth===0}_onkeydown(e){x(e)&&e.preventDefault(),ue(e)&&this._fireItemClick()}_onkeyup(e){x(e)&&this._fireItemClick()}_onfocusout(){this.focused=!1}_onfocusin(){this.focused=!0}_fireItemClick(){this.fireEvent("click",{item:this})}};h([s({type:Boolean})],r.prototype,"selected",void 0);h([s({type:Boolean})],r.prototype,"disabled",void 0);h([s({type:H,defaultValue:H.Square})],r.prototype,"layout",void 0);h([s({type:Boolean})],r.prototype,"_interactive",void 0);h([s({type:Boolean})],r.prototype,"_square",void 0);h([s({type:Boolean})],r.prototype,"_contentImageNotFound",void 0);h([s({type:Boolean})],r.prototype,"_thumbnailNotFound",void 0);h([s({type:Boolean})],r.prototype,"_thumbnailDesign",void 0);h([s({type:Boolean})],r.prototype,"focused",void 0);h([s()],r.prototype,"_tabIndex",void 0);h([s({noAttribute:!0})],r.prototype,"contentHeight",void 0);h([N({type:HTMLElement,default:!0})],r.prototype,"content",void 0);h([N()],r.prototype,"thumbnail",void 0);r=h([Z({tag:"ui5-media-gallery-item",renderer:ee,styles:Ae,template:ke,dependencies:[me]})],r);r.define();const le=r,De=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));S("@ui5/webcomponents-theming","sap_fiori_3",async()=>Y);S("@ui5/webcomponents-fiori","sap_fiori_3",async()=>ae);const Ge={packageName:"@ui5/webcomponents-fiori",fileName:"themes/MediaGallery.css.ts",content:":host{height:100%}.ui5-media-gallery-display,.ui5-media-gallery-display-wrapper,:host{width:100%}.ui5-media-gallery-root{width:inherit;height:inherit;background:var(--sapBaseColor);display:flex;flex-direction:column;position:relative}:host([menu-vertical-align=Top]) .ui5-media-gallery-root{flex-direction:column-reverse}:host([effective-layout=Horizontal]) .ui5-media-gallery-root{flex-direction:row-reverse}:host([effective-layout=Horizontal][menu-horizontal-align=Right]) .ui5-media-gallery-root{flex-direction:row}.ui5-media-gallery-display-wrapper{display:flex;justify-content:center;position:relative}:host([effective-layout=Horizontal][show-all-thumbnails]) .ui5-media-gallery-display-wrapper{flex-grow:3;flex-basis:0}.ui5-media-gallery-display{position:relative;margin:1rem;display:flex;justify-content:center}.ui5-media-gallery-display [ui5-media-gallery-item]{z-index:1}[ui5-carousel]{width:calc(100% - 2rem)}[ui5-carousel]::part(item){padding:0;overflow:hidden}.ui5-media-gallery-thumbnails-wrapper{margin-block:1rem 0}:host([menu-vertical-align=Top]) .ui5-media-gallery-thumbnails-wrapper{margin-block:0 1rem}:host([effective-layout=Horizontal]) .ui5-media-gallery-thumbnails-wrapper{margin-inline:0 1rem}:host([effective-layout=Horizontal][menu-horizontal-align=Right]) .ui5-media-gallery-thumbnails-wrapper{margin-inline:1rem 0}:host([show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper{overflow-x:auto;overflow-y:hidden}:host([effective-layout=Horizontal][show-all-thumbnails]) .ui5-media-gallery-thumbnails-wrapper{overflow-y:auto;overflow-x:hidden;flex-grow:1;flex-basis:0}.ui5-media-gallery-thumbnails-wrapper ul{height:5rem;display:flex;flex-wrap:nowrap;padding-left:0;margin-top:0;margin-bottom:0;list-style-type:none;padding-inline-start:0}:host([effective-layout=Horizontal]) ul{width:5rem;flex-wrap:wrap}:host([effective-layout=Horizontal][show-all-thumbnails][media-range=M]) ul{width:10rem}:host([effective-layout=Horizontal][show-all-thumbnails][media-range=L]) ul{width:15rem}:host([effective-layout=Horizontal][show-all-thumbnails][media-range=XL]) ul{width:20rem}.ui5-media-gallery-overflow [ui5-button],.ui5-media-gallery-thumbnail{width:4rem;height:4rem;flex-shrink:0}.ui5-media-gallery-overflow [ui5-button]{background:var(--_ui5_media_gallery_overflow_btn_background);color:var(--_ui5_media_gallery_overflow_btn_color);border:var(--_ui5_media_gallery_overflow_btn_border)}.ui5-media-gallery-overflow,.ui5-media-gallery-thumbnail{margin:0 0 0 1rem}:host([menu-vertical-align=Top]) .ui5-media-gallery-overflow,:host([menu-vertical-align=Top]) .ui5-media-gallery-thumbnail{margin:1rem 0 0 1rem}:host([effective-layout=Horizontal]) .ui5-media-gallery-overflow,:host([effective-layout=Horizontal]) .ui5-media-gallery-thumbnail{margin:1rem 0 0 1rem}:host([effective-layout=Horizontal][menu-horizontal-align=Right]) .ui5-media-gallery-overflow,:host([effective-layout=Horizontal][menu-horizontal-align=Right]) .ui5-media-gallery-thumbnail{margin:1rem 1rem 0 0}"},R=(i,e,t)=>m`<div class="ui5-media-gallery-root"><div class="ui5-media-gallery-display-wrapper"><div class="ui5-media-gallery-display" @click="${i._onDisplayAreaClick}">${i._isPhonePlatform?je(i,e,t):$e(i,e,t)}</div></div>${i._showThumbnails?Ne(i,e,t):void 0}</div>`,je=(i,e,t)=>t?m`<${_("ui5-carousel",e,t)} @ui5-navigate="${u(i._onCarouselNavigate)}" hide-navigation-arrows>${z(i._selectableItems,(a,o)=>a._id||o,(a,o)=>V(a))}</${_("ui5-carousel",e,t)}>`:m`<ui5-carousel @ui5-navigate="${u(i._onCarouselNavigate)}" hide-navigation-arrows>${z(i._selectableItems,(a,o)=>a._id||o,(a,o)=>V(a))}</ui5-carousel>`,V=(i,e,t,a,o)=>m`<slot name="${u(i._individualSlot)}"></slot>`,$e=(i,e,t)=>t?m`<${_("ui5-media-gallery-item",e,t)} ?_interactive="${u(i.interactiveDisplayArea)}" ?_square="${u(i._shouldHaveSquareDisplay)}" _tab-index="${u(i._mainItemTabIndex)}"></${_("ui5-media-gallery-item",e,t)}>`:m`<ui5-media-gallery-item ?_interactive="${u(i.interactiveDisplayArea)}" ?_square="${u(i._shouldHaveSquareDisplay)}" _tab-index="${u(i._mainItemTabIndex)}"></ui5-media-gallery-item>`,Ne=(i,e,t)=>m`<div class="ui5-media-gallery-thumbnails-wrapper"><ul>${z(i._visibleItems,(a,o)=>a._id||o,(a,o)=>xe(a,o,i))}${i._showOverflowBtn?qe(i,e,t):void 0}</ul></div>`,xe=(i,e,t,a,o)=>m`<li id="${u(i.id)}" class="ui5-media-gallery-thumbnail" role="option" @click="${t._onThumbnailClick}" @ui5-click="${u(t._onThumbnailClick)}"><slot name="${u(i._individualSlot)}"></slot></li>`,qe=(i,e,t)=>t?m`<li class="ui5-media-gallery-overflow"><${_("ui5-button",e,t)} @click="${i._onOverflowBtnClick}">+${u(i._overflowSize)}</${_("ui5-button",e,t)}></li>`:m`<li class="ui5-media-gallery-overflow"><ui5-button @click="${i._onOverflowBtnClick}">+${u(i._overflowSize)}</ui5-button></li>`;var g=globalThis&&globalThis.__decorate||function(i,e,t,a){var o=arguments.length,l=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(i,e,t,a);else for(var v=i.length-1;v>=0;v--)(y=i[v])&&(l=(o<3?y(l):o>3?y(e,t,l):y(e,t))||l);return o>3&&l&&Object.defineProperty(e,t,l),l},w;const Le={S:1,M:2,L:3,XL:4};let c=w=class extends Q{constructor(){super(),this._onResize=this._updateLayout.bind(this),this._itemNavigation=new ce(this,{navigationMode:pe.Auto,getItemsCallback:()=>this._getFocusableItems()})}onEnterDOM(){!f()&&q.register(this,this._onResize)}onExitDOM(){!f()&&q.deregister(this,this._onResize)}onAfterRendering(){this._updateLayout(),this._updateSelection()}_updateSelection(){let e=this.items.find(t=>t.selected);(!e||!this._isSelectableItem(e))&&(e=this._findSelectableItem()),e&&e!==this._selectedItem&&this._selectItem(e)}_isSelectableItem(e){return!e.disabled&&!e.hidden}_findSelectableItem(){return this.items.find(this._isSelectableItem)}_updateMediaRange(e){this.mediaRange=L.getCurrentRange(L.RANGESETS.RANGE_4STEPS,e)}_updateLayout(){const e=this.getDomRef(),t=e.offsetHeight,a=e.offsetWidth;!a||!t||f()||(this._updateMediaRange(a),this.effectiveLayout=this._infereffectiveLayout(),this._overflowSize=this._calculateOverflowSize(a,t),this._toggleDisplaySquareSize(this._shouldHaveSquareDisplay),this._toggleMainItem9x16size(this._shouldHaveWideDisplay))}_calculateOverflowSize(e,t){const a=w.THUMBNAIL_MARGIN;let o,l;return this.showAllThumbnails?0:(this.effectiveLayout===p.Horizontal?(o=t-a,l=this.showAllThumbnails?Le[this.mediaRange]:1):(o=e-a*2,l=1),this._getOverflowSize(o,l))}_toggleDisplaySquareSize(e){if(this._display.style.width="",e){const t=w.THUMBNAIL_MARGIN,a=this._display.offsetWidth;let o=this.getDomRef().offsetHeight-2*t;this.effectiveLayout===p.Vertical&&(o-=w.THUMBNAIL_HEIGHT+t),a>o&&(this._display.style.width=`${o}px`)}}_toggleMainItem9x16size(e){if(!this._mainItem)return;const t=this._mainItem.offsetWidth,a=e?`${t/16*9}px`:"";this._mainItem.contentHeight=a}_infereffectiveLayout(){return this.layout===p.Auto?this._isPhoneSize?p.Vertical:p.Horizontal:this.layout}_getMaxAllowedThumbnailsInColumn(e){let t=Math.floor(e/w.THUMBNAIL_HEIGHT);return this.showAllThumbnails||(t=Math.min(t,5)),t}_getOverflowSize(e,t){const a=this._getMaxAllowedThumbnailsInColumn(e),o=Math.max(0,this.items.length-a*t);return o===this.items.length||o===0?o:o+1}_getFocusableItems(){if(!this._showThumbnails)return[];const e=this._visibleItems.filter(t=>!t.disabled);return this._overflowBtn&&e.push(this._overflowBtn),e}_selectItem(e,t=!1){e!==this._selectedItem&&(this._selectedItem=e,this._updateSelectedFlag(e),this._itemNavigation.setCurrentItem(e),t&&this.fireEvent("selection-change",{item:e}),f()?this._selectItemOnPhone(e):this._displayContent(e))}_updateSelectedFlag(e){this.items.forEach(t=>{t.selected=!1}),e.selected=!0}_selectItemOnPhone(e){const t=this._selectableItems.indexOf(e),a=this._carousel;a&&a.navigateTo(t)}_displayContent(e){let t;const a=this._mainItem,o=a._content,l=e._content;a._thumbnailDesign=!1,o&&o.remove(),l&&(t=l.cloneNode(!0),a.layout=e.layout,a.appendChild(t))}_onThumbnailClick(e){const a=e.target.closest("[ui5-media-gallery-item]");a.disabled||a!==this._selectedItem&&this._selectItem(a,!0)}_onOverflowBtnClick(){this.fireEvent("overflow-click")}_onDisplayAreaClick(){this.interactiveDisplayArea&&this.fireEvent("display-area-click")}_onCarouselNavigate(e){const t=e.detail.selectedIndex,a=this._selectableItems[t];this.fireEvent("selection-change",{item:a})}get _mainItemTabIndex(){return this.interactiveDisplayArea?0:void 0}get _selectableItems(){return this.items.filter(this._isSelectableItem)}get _carousel(){return this.shadowRoot.querySelector("[ui5-carousel]")}get _display(){return this.shadowRoot.querySelector(".ui5-media-gallery-display")}get _mainItem(){return this.shadowRoot.querySelector(".ui5-media-gallery-display [ui5-media-gallery-item]")}get _overflowBtn(){return this.shadowRoot.querySelector(".ui5-media-gallery-overflow [ui5-button]")}get _visibleItems(){const e=this.items.length-this._overflowSize;return this.items.slice(0,e)}get _isPhonePlatform(){return f()}get _showThumbnails(){return!f()}get _showOverflowBtn(){return this._overflowSize>0}get _isPhoneSize(){return this.mediaRange==="S"}get _mainItemHasWideLayout(){return this._mainItem&&this._mainItem.layout===H.Wide}get _shouldHaveWideDisplay(){return!!this._mainItemHasWideLayout&&this.showAllThumbnails&&this.effectiveLayout===p.Horizontal}get _shouldHaveSquareDisplay(){return!this._shouldHaveWideDisplay}static get THUMBNAIL_HEIGHT(){return 80}static get THUMBNAIL_MARGIN(){return 16}};g([s({type:Boolean})],c.prototype,"showAllThumbnails",void 0);g([s({type:Boolean})],c.prototype,"interactiveDisplayArea",void 0);g([s({type:p,defaultValue:p.Auto})],c.prototype,"layout",void 0);g([s({type:A,defaultValue:A.Left})],c.prototype,"menuHorizontalAlign",void 0);g([s({type:k,defaultValue:k.Bottom})],c.prototype,"menuVerticalAlign",void 0);g([s({type:p,defaultValue:p.Vertical})],c.prototype,"effectiveLayout",void 0);g([s()],c.prototype,"mediaRange",void 0);g([s({validator:ge,noAttribute:!0,defaultValue:0})],c.prototype,"_overflowSize",void 0);g([N({type:HTMLElement,individualSlots:!0,invalidateOnChildChange:!0,default:!0})],c.prototype,"items",void 0);c=w=g([Z({tag:"ui5-media-gallery",renderer:ee,styles:[Ge],template:R,staticAreaTemplate:R,dependencies:[le,ye,fe]}),C("selection-change",{detail:{item:{type:HTMLElement}}}),C("overflow-click"),C("display-area-click")],c);c.define();const Re=c,Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"})),b=te("ui5-media-gallery",["layout","menuHorizontalAlign","menuVerticalAlign"],["interactiveDisplayArea","showAllThumbnails"],[],["display-area-click","overflow-click","selection-change"],()=>K(()=>Promise.resolve().then(()=>Ve),void 0,import.meta.url));b.displayName="MediaGallery";b.defaultProps={layout:p.Auto,menuHorizontalAlign:A.Left,menuVerticalAlign:k.Bottom};try{b.displayName="MediaGallery",b.__docgenInfo={description:`The \`MediaGallery\` component allows the user to browse through multimedia items. Currently, the supported items are images and videos. The items should be defined using the \`MediaGalleryItem\` component. The items are initially displayed as thumbnails. When the user selects a thumbnail, the corresponding item is displayed in larger size.
The component is responsive by default and adjusts the position of the menu with respect to viewport size, but the application is able to further customize the layout via the provided API.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MediaGallery" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"MediaGallery",props:{children:{defaultValue:null,description:`Defines the component items.

**Note:** Only one selected item is allowed.

**Note:** Use the \`MediaGalleryItem\` component to define the desired items.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onDisplayAreaClick:{defaultValue:null,description:`Fired when the display area is clicked.
The display area is the central area that contains the enlarged content of the currently selected item.`,name:"onDisplayAreaClick",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, never>) => void"}},onOverflowClick:{defaultValue:null,description:"Fired when the thumbnails overflow button is clicked.",name:"onOverflowClick",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<MediaGalleryDomRef, { item: HTMLElement; }>) => void"}},interactiveDisplayArea:{defaultValue:null,description:"If enabled, a `onDisplayAreaClick` event is fired when the user clicks or taps on the display area.\nThe display area is the central area that contains the enlarged content of the currently selected item.",name:"interactiveDisplayArea",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:"MediaGalleryLayout.Auto"},description:"Determines the layout of the component.\n\nAvailable options are:\n\n*   `Auto`\n*   `Vertical`\n*   `Horizontal`",name:"layout",required:!1,type:{name:"enum",value:[{value:'"Auto"'},{value:'"Auto"'},{value:'"Vertical"'},{value:'"Horizontal"'},{value:'"Vertical"'},{value:'"Horizontal"'}]}},menuHorizontalAlign:{defaultValue:{value:"MediaGalleryMenuHorizontalAlign.Left"},description:`Determines the horizontal alignment of the thumbnails menu vs. the central display area.

Available options are:

*   \`Left\`
*   \`Right\``,name:"menuHorizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Left"'},{value:'"Right"'}]}},menuVerticalAlign:{defaultValue:{value:"MediaGalleryMenuVerticalAlign.Bottom"},description:`Determines the vertical alignment of the thumbnails menu vs. the central display area.

Available options are:

*   \`Top\`
*   \`Bottom\``,name:"menuVerticalAlign",required:!1,type:{name:"enum",value:[{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},showAllThumbnails:{defaultValue:null,description:"If set to `true`, all thumbnails are rendered in a scrollable container. If `false`, only up to five thumbnails are rendered, followed by an overflow button that shows the count of the remaining thumbnails.",name:"showAllThumbnails",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const d=te("ui5-media-gallery-item",["layout"],["disabled","selected"],["thumbnail"],[],()=>K(()=>Promise.resolve().then(()=>De),void 0,import.meta.url));d.displayName="MediaGalleryItem";d.defaultProps={layout:H.Square};try{d.displayName="MediaGalleryItem",d.__docgenInfo={description:'The `MediaGalleryItem` web component represents the items displayed in the `MediaGallery` web component.\n\n**Note:** `MediaGalleryItem` is not supported when used outside of `MediaGallery`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MediaGallery" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"MediaGalleryItem",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},thumbnail:{defaultValue:null,description:`Defines the content of the thumbnail.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="thumbnail"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"thumbnail",required:!1,type:{name:"UI5WCSlotsNode"}},disabled:{defaultValue:null,description:"Defines whether the component is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},layout:{defaultValue:{value:"MediaGalleryItemLayout.Square"},description:`Determines the layout of the item container.

Available options are:

*   \`Square\`
*   \`Wide\``,name:"layout",required:!1,type:{name:"enum",value:[{value:'"Square"'},{value:'"Square"'},{value:'"Wide"'},{value:'"Wide"'}]}},selected:{defaultValue:null,description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Be={title:"Layouts & Floorplans / MediaGallery",component:b,argTypes:{children:{control:{disable:!0}}},args:{layout:p.Auto,menuHorizontalAlign:A.Left,menuVerticalAlign:k.Bottom}},I={render:i=>n.jsxs(b,{...i,children:[n.jsx(d,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg"})}),n.jsx(d,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg"})}),n.jsx(d,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1022.jpg"})}),n.jsx(d,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1030.jpg"})}),n.jsx(d,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-2002.jpg"})}),n.jsx(d,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-2026.jpg"})})]})},T={render:i=>n.jsxs(b,{...i,children:[n.jsx(d,{thumbnail:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000-small.jpg"}),children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg"})}),n.jsx(d,{disabled:!0,children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg"})})]})},M={render:i=>{const e=se.useRef(null),t=()=>{e.current.show()};return n.jsxs(n.Fragment,{children:[n.jsx(he,{ref:e,children:"Display Area Clicked!"}),n.jsxs(b,{...i,interactiveDisplayArea:!0,onDisplayAreaClick:t,children:[n.jsx(d,{children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg"})}),n.jsx(d,{selected:!0,children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg"})})]})]})}};var B,E,O;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    return <MediaGallery {...args}>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1022.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1030.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-2002.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-2026.jpg" />
        </MediaGalleryItem>
      </MediaGallery>;
  }
}`,...(O=(E=I.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var P,W,F;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    return <MediaGallery {...args}>
        <MediaGalleryItem thumbnail={<img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000-small.jpg" />}>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg" />
        </MediaGalleryItem>
        <MediaGalleryItem disabled>
          <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg" />
        </MediaGalleryItem>
      </MediaGallery>;
  }
}`,...(F=(W=T.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var U,X,J;M.parameters={...M.parameters,docs:{...(U=M.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef(null);
    const handleDisplayAreaClick = () => {
      ref.current.show();
    };
    return <>
        <Toast ref={ref}>Display Area Clicked!</Toast>
        <MediaGallery {...args} interactiveDisplayArea onDisplayAreaClick={handleDisplayAreaClick}>
          <MediaGalleryItem>
            <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1000.jpg" />
          </MediaGalleryItem>
          <MediaGalleryItem selected>
            <img src="https://sap.github.io/ui5-webcomponents/main/assets/images/HT-1010.jpg" />
          </MediaGalleryItem>
        </MediaGallery>
      </>;
  }
}`,...(J=(X=M.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};const Ee=["Default","CustomThumbnail","InteractiveDisplayArea"],ut=Object.freeze(Object.defineProperty({__proto__:null,CustomThumbnail:T,Default:I,InteractiveDisplayArea:M,__namedExportsOrder:Ee,default:Be},Symbol.toStringTag,{value:"Module"}));export{ut as C,I as D,M as I,d as M,T as a};
//# sourceMappingURL=MediaGallery.stories-828b8f07.js.map
