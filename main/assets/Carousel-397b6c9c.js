import{a as I,U as C,p as x,A as T,d as k}from"./UI5Element-74c2a827.js";import{e as r,l as o,s as g,a as R,b as N,p as u,c as B,d as A}from"./withWebComponent-d61dcbbc.js";import{c as $,e as L}from"./Icon-a2964213.js";import{s as E}from"./slot-76e48863.js";import{I as p}from"./Integer-f7f172c9.js";import{U as S,q as z,p as D,s as O,o as F}from"./Icons-94b91597.js";import{S as M}from"./ScrollEnablement-4353003c.js";import{R as P}from"./ResizeHandler-0f082c48.js";import{f as V}from"./Device-208919c6.js";import{g as j}from"./AnimationMode-1db0db01.js";import{aN as U,aO as W,aP as X,aQ as H}from"./i18n-defaults-254d6b69.js";import{o as d}from"./class-map-519e9c6d.js";import{s as y}from"./style-map-33b353d0.js";import"./slim-arrow-left-9e64b854.js";import"./slim-arrow-right-b979090e.js";import{B as K}from"./Button-1eb48b4c.js";import q from"./Label-fcb0092c.js";var m;(function(s){s.Content="Content",s.Navigation="Navigation"})(m||(m={}));const h=m;var b;(function(s){s.Default="Default",s.Numeric="Numeric"})(b||(b={}));const w=b;function Q(s,t,e){return r`<section class="ui5-carousel-root" tabindex="0" role="listbox" aria-activedescendant="${o(this.ariaActiveDescendant)}" @focusin="${this._onfocusin}" @keydown=${this._onkeydown} @mouseout="${this._onmouseout}" @mouseover="${this._onmouseover}"><div class="${d(this.classes.viewport)}" part="content"><div class="${d(this.classes.content)}" style="${y(this.styles.content)}">${$(this.items,(i,n)=>i._id||n,(i,n)=>G.call(this,s,t,e,i,n))}</div>${this.showArrows.content?J.call(this,s,t,e):void 0}</div>${this.renderNavigation?Y.call(this,s,t,e):void 0}</div></section> `}function G(s,t,e,i,n){return r`<div id="${o(i.id)}" class="ui5-carousel-item ${o(i.classes)}" style="${y(i.styles)}" role="option" aria-posinset="${o(i.posinset)}" aria-setsize="${o(i.setsize)}" part="item"><slot name="${o(i.item._individualSlot)}" tabindex="${o(i.tabIndex)}"></slot></div>`}function J(s,t,e){return e?r`<div class="ui5-carousel-navigation-arrows"><${g("ui5-button",t,e)} arrow-back tooltip="${o(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></${g("ui5-button",t,e)}><${g("ui5-button",t,e)} arrow-forward tooltip="${o(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></${g("ui5-button",t,e)}></div>`:r`<div class="ui5-carousel-navigation-arrows"><ui5-button arrow-back tooltip="${o(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></ui5-button><ui5-button arrow-forward tooltip="${o(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></ui5-button></div>`}function Y(s,t,e){return r`<div class="${d(this.classes.navigation)}">${this.showArrows.navigation?Z.call(this,s,t,e):void 0}<div class="ui5-carousel-navigation">${this.hidePageIndicator?void 0:tt.call(this,s,t,e)}</div>${this.showArrows.navigation?ot.call(this,s,t,e):void 0}</div>`}function Z(s,t,e){return e?r`<${g("ui5-button",t,e)} arrow-back tooltip="${o(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></${g("ui5-button",t,e)}>`:r`<ui5-button arrow-back tooltip="${o(this.previousPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navPrevButton)}" icon="slim-arrow-left" tabindex="-1" @click=${this._navButtonClick}></ui5-button>`}function tt(s,t,e){return r`${this.isPageTypeDots?et.call(this,s,t,e):st.call(this,s,t,e)}`}function et(s,t,e){return r`${$(this.dots,(i,n)=>i._id||n,(i,n)=>it.call(this,s,t,e,i,n))}`}function it(s,t,e,i,n){return r`<div role="img" aria-label="${o(i.ariaLabel)}" ?active="${i.active}" class="ui5-carousel-navigation-dot"></div>`}function st(s,t,e){return e?r`<${g("ui5-label",t,e)}>${o(this.selectedIndexToShow)}&nbsp;${o(this.ofText)}&nbsp;${o(this.pagesCount)}</${g("ui5-label",t,e)}>`:r`<ui5-label>${o(this.selectedIndexToShow)}&nbsp;${o(this.ofText)}&nbsp;${o(this.pagesCount)}</ui5-label>`}function ot(s,t,e){return e?r`<${g("ui5-button",t,e)} arrow-forward tooltip="${o(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></${g("ui5-button",t,e)}>`:r`<ui5-button arrow-forward tooltip="${o(this.nextPageText)}" class="ui5-carousel-navigation-button ${d(this.classes.navNextButton)}" icon="slim-arrow-right" tabindex="-1" @click=${this._navButtonClick}></ui5-button>`}I("@ui5/webcomponents-theming","sap_fiori_3",async()=>R);I("@ui5/webcomponents","sap_fiori_3",async()=>N);const nt={packageName:"@ui5/webcomponents",fileName:"themes/Carousel.css",content:":host(:not([hidden])){display:inline-block}:host{width:100%;min-width:15.5rem;height:100%}.ui5-carousel-root:focus-visible{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-carousel-root{height:inherit;position:relative;display:flex;flex-direction:column;align-items:center}.ui5-carousel-viewport{width:100%;height:inherit;position:relative;display:flex;flex-direction:column;align-items:flex-start;overflow:hidden}.ui5-carousel-viewport.ui5-carousel-viewport--single{align-items:center}.ui5-carousel-content{height:100%;position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;background:var(--ui5_carousel_background_color);transition:transform .5s cubic-bezier(.46,0,.44,1);will-change:transform}.ui5-carousel-content.ui5-carousel-content-no-animation{transition:none}.ui5-carousel-content.ui5-carousel-content-has-navigation{height:calc(100% - 1rem)}.ui5-carousel-item{height:100%;display:flex;align-items:center;justify-content:center;padding:0 .75rem;box-sizing:border-box;transition:opacity .5s linear;will-change:opacity}.ui5-carousel-item--hidden{opacity:0}.ui5-carousel-navigation-arrows{width:100%;padding:0 .5rem;position:absolute;top:calc(50% - var(--ui5_carousel_button_size)/2);left:0;display:flex;justify-content:space-between;box-sizing:border-box;pointer-events:none}.ui5-carousel-navigation-arrows>[ui5-button]{pointer-events:all}.ui5-carousel-navigation-wrapper{width:100%;height:2.75rem;display:flex;flex-wrap:nowrap;justify-content:center;align-items:center;background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor)}.ui5-carousel-navigation-wrapper.ui5-carousel-navigation-with-buttons{height:3.5rem}.ui5-carousel-navigation-button{width:var(--ui5_carousel_button_size);height:var(--ui5_carousel_button_size);border-radius:50%;box-shadow:none;cursor:pointer;outline-offset:.1rem;--_ui5_button_focused_border_radius:50%}.ui5-carousel-navigation-arrows .ui5-carousel-navigation-button{box-shadow:var(--sapContent_Shadow1)}.ui5-carousel-navigation-button--hidden{visibility:hidden;padding:0}.ui5-carousel-navigation{width:9rem;height:2rem;display:flex;justify-content:center;align-items:center}.ui5-carousel-navigation-dot{width:var(--ui5_carousel_inactive_dot_size);height:var(--ui5_carousel_inactive_dot_size);margin:var(--ui5_carousel_inactive_dot_margin);border-radius:50%;background-color:var(--ui5_carousel_inactive_dot_background);border:var(--ui5_carousel_inactive_dot_border);transition:background-color .1s ease-in}.ui5-carousel-navigation-dot[active]{width:.5rem;height:.5rem;margin:0 .25rem;background-color:var(--ui5_carousel_active_dot_background);border:var(--ui5_carousel_active_dot_border)}"};var l=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,c=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,t,e,i);else for(var _=s.length-1;_>=0;_--)(f=s[_])&&(c=(n<3?f(c):n>3?f(t,e,c):f(t,e))||c);return n>3&&c&&Object.defineProperty(t,e,c),c},v;let a=v=class extends C{static get pageTypeLimit(){return 9}constructor(){super(),this._scrollEnablement=new M(this),this._scrollEnablement.attachEvent("touchend",t=>{this._updateScrolling(t)}),this._onResizeBound=this._onResize.bind(this),this._resizing=!1,this._lastFocusedElements=[],this._orderOfLastFocusedPages=[]}onBeforeRendering(){this.arrowsPlacement===h.Navigation&&(this._visibleNavigationArrows=!0),this.validateSelectedIndex()}onAfterRendering(){this._scrollEnablement.scrollContainer=this.getDomRef(),this._resizing=!1}onEnterDOM(){P.register(this,this._onResizeBound)}onExitDOM(){P.deregister(this,this._onResizeBound)}validateSelectedIndex(){this.isIndexInRange(this._selectedIndex)||(this._selectedIndex=0)}_onResize(){const t=this.effectiveItemsPerPage;this._resizing=!0,this._width=this.offsetWidth,this._itemWidth=Math.floor(this._width/this.effectiveItemsPerPage),this.effectiveItemsPerPage!==t&&this._selectedIndex>this.pagesCount-1&&(this._selectedIndex=this.pagesCount-1,this.fireEvent("navigate",{selectedIndex:this._selectedIndex}))}_updateScrolling(t){t&&(t.isLeft?this.navigateLeft():t.isRight&&this.navigateRight())}async _onkeydown(t){if(S(t)){this._handleF7Key(t);return}t.target===this.getDomRef()&&(z(t)||D(t)?(this.navigateLeft(),await x(),this.getDomRef().focus()):(O(t)||F(t))&&(this.navigateRight(),await x(),this.getDomRef().focus()))}_onfocusin(t){const e=t.target;if(e===this.getDomRef())return;let i=-1;for(let c=0;c<this.content.length;c++)if(this.content[c].contains(e)){i=c;break}if(i===-1)return;this._lastFocusedElements[i]=e;const n=this._orderOfLastFocusedPages.indexOf(i);n===-1?this._orderOfLastFocusedPages.unshift(i):this._orderOfLastFocusedPages.splice(0,0,this._orderOfLastFocusedPages.splice(n,1)[0])}_onmouseout(){this.arrowsPlacement===h.Content&&(this._visibleNavigationArrows=!1)}_onmouseover(){this.arrowsPlacement===h.Content&&(this._visibleNavigationArrows=!0)}_handleF7Key(t){const e=this._lastFocusedElements[this._getLastFocusedActivePageIndex];t.target===this.getDomRef()&&e?e.focus():this.getDomRef().focus()}get _getLastFocusedActivePageIndex(){for(let t=0;t<this._orderOfLastFocusedPages.length;t++){const e=this._orderOfLastFocusedPages[t];if(this.isItemInViewport(e))return e}return this._selectedIndex}navigateLeft(){this._resizing=!1;const t=this._selectedIndex;this._selectedIndex-1<0?this.cyclic&&(this._selectedIndex=this.pagesCount-1):--this._selectedIndex,t!==this._selectedIndex&&this.fireEvent("navigate",{selectedIndex:this._selectedIndex})}navigateRight(){this._resizing=!1;const t=this._selectedIndex;if(this._selectedIndex+1>this.pagesCount-1)if(this.cyclic)this._selectedIndex=0;else return;else++this._selectedIndex;t!==this._selectedIndex&&this.fireEvent("navigate",{selectedIndex:this._selectedIndex})}_navButtonClick(t){t.target.hasAttribute("arrow-forward")?this.navigateRight():this.navigateLeft(),this.focus()}navigateTo(t){this._resizing=!1,this._selectedIndex=t}get items(){return this.content.map((t,e)=>{const i=this.isItemInViewport(e);return{id:`${this._id}-carousel-item-${e+1}`,item:t,tabIndex:i?"0":"-1",posinset:`${e+1}`,setsize:`${this.content.length}`,styles:{width:`${this._itemWidth||0}px`},classes:i?"":"ui5-carousel-item--hidden"}})}get effectiveItemsPerPage(){return this._width?this._width<=640?this.itemsPerPageS:this._width<=1024?this.itemsPerPageM:this.itemsPerPageL:this.itemsPerPageL}isItemInViewport(t){return t>=this._selectedIndex&&t<=this._selectedIndex+this.effectiveItemsPerPage-1}isIndexInRange(t){return t>=0&&t<=this.pagesCount-1}get renderNavigation(){return this.hasManyPages?this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows?!0:!this.hidePageIndicator:!1}get hasManyPages(){return this.pagesCount>1}get styles(){const t=this._itemWidth||0;return{content:{transform:`translateX(${this._isRTL?"":"-"}${this._selectedIndex*t}px`}}}get classes(){return{viewport:{"ui5-carousel-viewport":!0,"ui5-carousel-viewport--single":this.pagesCount===1},content:{"ui5-carousel-content":!0,"ui5-carousel-content-no-animation":this.suppressAnimation,"ui5-carousel-content-has-navigation":this.renderNavigation,"ui5-carousel-content-has-navigation-and-buttons":this.renderNavigation&&this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows},navigation:{"ui5-carousel-navigation-wrapper":!0,"ui5-carousel-navigation-with-buttons":this.renderNavigation&&this.arrowsPlacement===h.Navigation&&!this.hideNavigationArrows},navPrevButton:{"ui5-carousel-navigation-button--hidden":!this.hasPrev},navNextButton:{"ui5-carousel-navigation-button--hidden":!this.hasNext}}}get pagesCount(){const t=this.content.length;return t>this.effectiveItemsPerPage?t-this.effectiveItemsPerPage+1:1}get isPageTypeDots(){return this.pageIndicatorStyle===w.Numeric?!1:this.pagesCount<v.pageTypeLimit}get dots(){const t=[],e=this.pagesCount;for(let i=0;i<e;i++)t.push({active:i===this._selectedIndex,ariaLabel:v.i18nBundle.getText(U,i+1,e)});return t}get showArrows(){const t=this._visibleNavigationArrows&&this.hasManyPages&&V();return{content:!this.hideNavigationArrows&&t&&this.arrowsPlacement===h.Content,navigation:!this.hideNavigationArrows&&t&&this.arrowsPlacement===h.Navigation}}get hasPrev(){return this.cyclic||this._selectedIndex-1>=0}get hasNext(){return this.cyclic||this._selectedIndex+1<=this.pagesCount-1}get suppressAnimation(){return this._resizing||j()===T.None}get _isRTL(){return this.effectiveDir==="rtl"}get selectedIndexToShow(){return this._isRTL?this.pagesCount-(this.pagesCount-this._selectedIndex)+1:this._selectedIndex+1}get ofText(){return v.i18nBundle.getText(W)}get ariaActiveDescendant(){return this.content.length?`${this._id}-carousel-item-${this._selectedIndex+1}`:void 0}get nextPageText(){return v.i18nBundle.getText(X)}get previousPageText(){return v.i18nBundle.getText(H)}get visibleItemsIndices(){const t=[];return this.items.forEach((e,i)=>{this.isItemInViewport(i)&&t.push(i)}),t}static async onDefine(){v.i18nBundle=await k("@ui5/webcomponents")}};l([u({type:Boolean})],a.prototype,"cyclic",void 0);l([u({validator:p,defaultValue:1})],a.prototype,"itemsPerPageS",void 0);l([u({validator:p,defaultValue:1})],a.prototype,"itemsPerPageM",void 0);l([u({validator:p,defaultValue:1})],a.prototype,"itemsPerPageL",void 0);l([u({type:Boolean})],a.prototype,"hideNavigationArrows",void 0);l([u({type:Boolean})],a.prototype,"hidePageIndicator",void 0);l([u({type:w,defaultValue:w.Default})],a.prototype,"pageIndicatorStyle",void 0);l([u({validator:p,defaultValue:0})],a.prototype,"_selectedIndex",void 0);l([u({type:h,defaultValue:h.Content})],a.prototype,"arrowsPlacement",void 0);l([u({validator:p})],a.prototype,"_width",void 0);l([u({validator:p})],a.prototype,"_itemWidth",void 0);l([u({type:Boolean,noAttribute:!0})],a.prototype,"_visibleNavigationArrows",void 0);l([E({default:!0,type:HTMLElement,individualSlots:!0})],a.prototype,"content",void 0);a=v=l([B({tag:"ui5-carousel",languageAware:!0,fastNavigation:!0,renderer:A,styles:nt,template:Q,dependencies:[K,q]}),L("navigate",{detail:{selectedIndex:{type:p}}})],a);a.define();const at=a,yt=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"}));export{h as C,w as a,at as b,yt as c};
//# sourceMappingURL=Carousel-397b6c9c.js.map
