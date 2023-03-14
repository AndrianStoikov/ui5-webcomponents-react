import{j as L,a as P}from"./jsx-runtime-670450c2.js";import"./chunk-PCJTTTQV-c9aa9957.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{A as B,b as M,c as U}from"./index-1fa72f09.js";import{r as $}from"./index-f1f749bf.js";import{c as F}from"./react-jss.esm-e54d2f1d.js";import{M as R,a as D}from"./index-cef21224.js";import{c as k}from"./_commonjsHelpers-042e6b4d.js";const V=F({tableContainer:{marginTop:"25px","& table":{marginTop:"0 !important"}},strip:{marginBottom:"10px"}}),X=t=>{const{hideHTMLPropsNote:u,noteText:i,hideTabContainer:d,...e}=t,c=V(),f=$.useRef(null);return $.useEffect(()=>{var x,n;const S=(n=(x=f.current)==null?void 0:x.querySelector("#panel-tab-content"))==null?void 0:n.previousElementSibling;d&&S&&(S.style.display="none")},[]),u?L(B,{...e}):P("div",{className:c.tableContainer,ref:f,children:[L(R,{design:D.Information,hideCloseButton:!0,className:c.strip,children:i??"This component supports all HTML attributes."}),L(B,{...e})]})};X.displayName="ArgsTableWithNote";const Z=F({tableContainer:{marginTop:"25px","& table":{marginTop:"0 !important"}},strip:{marginBottom:"10px"}});function xe(t){const{hideHTMLPropsNote:u,noteText:i,...d}=t,e=Z();return u?L(M,{...d}):P("div",{className:e.tableContainer,children:[L(R,{design:D.Information,hideCloseButton:!0,className:e.strip,children:i??"This component supports all HTML attributes."}),L(M,{...d})]})}const ee=F({tableContainer:{marginTop:"25px","& table":{marginTop:"0 !important"}},strip:{marginBottom:"10px"}});function ye(t){const{hideHTMLPropsNote:u,noteText:i,...d}=t,e=ee();return u?L(U,{...d}):P("div",{className:e.tableContainer,children:[L(R,{design:D.Information,hideCloseButton:!0,className:e.strip,children:i??"This component supports all HTML attributes."}),L(U,{...d})]})}var I={},te={get exports(){return I},set exports(t){I=t}},_,z;function re(){return z||(z=1,_={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(t){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(t){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1,tocScrollOffset:0}),_}var O,W;function ne(){return W||(W=1,O=function(t){var u=[].forEach,i=[].some,d=document.body,e,c=!0,f=" ";function S(l,r){var s=r.appendChild(n(l));if(l.children.length){var h=o(l.isCollapsed);l.children.forEach(function(p){S(p,h)}),s.appendChild(h)}}function x(l,r){var s=!1,h=o(s);if(r.forEach(function(p){S(p,h)}),e=l||e,e!==null)return e.firstChild&&e.removeChild(e.firstChild),r.length===0?e:e.appendChild(h)}function n(l){var r=document.createElement("li"),s=document.createElement("a");return t.listItemClass&&r.setAttribute("class",t.listItemClass),t.onClick&&(s.onclick=t.onClick),t.includeTitleTags&&s.setAttribute("title",l.textContent),t.includeHtml&&l.childNodes.length?u.call(l.childNodes,function(h){s.appendChild(h.cloneNode(!0))}):s.textContent=l.textContent,s.setAttribute("href",t.basePath+"#"+l.id),s.setAttribute("class",t.linkClass+f+"node-name--"+l.nodeName+f+t.extraLinkClasses),r.appendChild(s),r}function o(l){var r=t.orderedList?"ol":"ul",s=document.createElement(r),h=t.listClass+f+t.extraListClasses;return l&&(h+=f+t.collapsibleClass,h+=f+t.isCollapsedClass),s.setAttribute("class",h),s}function a(){if(t.scrollContainer&&document.querySelector(t.scrollContainer)){var l;l=document.querySelector(t.scrollContainer).scrollTop}else l=document.documentElement.scrollTop||d.scrollTop;var r=document.querySelector(t.positionFixedSelector);t.fixedSidebarOffset==="auto"&&(t.fixedSidebarOffset=e.offsetTop),l>t.fixedSidebarOffset?r.className.indexOf(t.positionFixedClass)===-1&&(r.className+=f+t.positionFixedClass):r.className=r.className.split(f+t.positionFixedClass).join("")}function C(l){var r=0;return l!==null&&(r=l.offsetTop,t.hasInnerContainers&&(r+=C(l.offsetParent))),r}function g(l){if(t.scrollContainer&&document.querySelector(t.scrollContainer)){var r;r=document.querySelector(t.scrollContainer).scrollTop}else r=document.documentElement.scrollTop||d.scrollTop;t.positionFixedSelector&&a();var s=l,h;if(c&&e!==null&&s.length>0){i.call(s,function(y,H){if(C(y)>r+t.headingsOffset+10){var K=H===0?H:H-1;return h=s[K],!0}else if(H===s.length-1)return h=s[s.length-1],!0});var p=e.querySelector("."+t.activeLinkClass),v=e.querySelector("."+t.linkClass+".node-name--"+h.nodeName+'[href="'+t.basePath+"#"+h.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g,"\\$1")+'"]');if(p===v)return;var E=e.querySelectorAll("."+t.linkClass);u.call(E,function(y){y.className=y.className.split(f+t.activeLinkClass).join("")});var b=e.querySelectorAll("."+t.listItemClass);u.call(b,function(y){y.className=y.className.split(f+t.activeListItemClass).join("")}),v&&v.className.indexOf(t.activeLinkClass)===-1&&(v.className+=f+t.activeLinkClass);var q=v&&v.parentNode;q&&q.className.indexOf(t.activeListItemClass)===-1&&(q.className+=f+t.activeListItemClass);var J=e.querySelectorAll("."+t.listClass+"."+t.collapsibleClass);u.call(J,function(y){y.className.indexOf(t.isCollapsedClass)===-1&&(y.className+=f+t.isCollapsedClass)}),v&&v.nextSibling&&v.nextSibling.className.indexOf(t.isCollapsedClass)!==-1&&(v.nextSibling.className=v.nextSibling.className.split(f+t.isCollapsedClass).join("")),m(v&&v.parentNode.parentNode)}}function m(l){return l&&l.className.indexOf(t.collapsibleClass)!==-1&&l.className.indexOf(t.isCollapsedClass)!==-1?(l.className=l.className.split(f+t.isCollapsedClass).join(""),m(l.parentNode.parentNode)):l}function T(l){var r=l.target||l.srcElement;typeof r.className!="string"||r.className.indexOf(t.linkClass)===-1||(c=!1)}function N(){c=!0}return{enableTocAnimation:N,disableTocAnimation:T,render:x,updateToc:g}}),O}var A,G;function le(){return G||(G=1,A=function(u){var i=[].reduce;function d(n){return n[n.length-1]}function e(n){return+n.nodeName.toUpperCase().replace("H","")}function c(n){if(!(n instanceof window.HTMLElement))return n;if(u.ignoreHiddenElements&&(!n.offsetHeight||!n.offsetParent))return null;const o=n.getAttribute("data-heading-label")||(u.headingLabelCallback?String(u.headingLabelCallback(n.textContent)):n.textContent.trim());var a={id:n.id,children:[],nodeName:n.nodeName,headingLevel:e(n),textContent:o};return u.includeHtml&&(a.childNodes=n.childNodes),u.headingObjectCallback?u.headingObjectCallback(a,n):a}function f(n,o){for(var a=c(n),C=a.headingLevel,g=o,m=d(g),T=m?m.headingLevel:0,N=C-T;N>0&&(m=d(g),!(m&&C===m.headingLevel));)m&&m.children!==void 0&&(g=m.children),N--;return C>=u.collapseDepth&&(a.isCollapsed=!0),g.push(a),g}function S(n,o){var a=o;u.ignoreSelector&&(a=o.split(",").map(function(g){return g.trim()+":not("+u.ignoreSelector+")"}));try{return n.querySelectorAll(a)}catch{return console.warn("Headers not found with selector: "+a),null}}function x(n){return i.call(n,function(a,C){var g=c(C);return g&&f(g,a.nest),a},{nest:[]})}return{nestHeadingsArray:x,selectHeadings:S}}),A}var j,Q;function ae(){return Q||(Q=1,j=function(u){var i=u.tocElement||document.querySelector(u.tocSelector);if(i&&i.scrollHeight>i.clientHeight){var d=i.querySelector("."+u.activeListItemClass);d&&(i.scrollTop=d.offsetTop-u.tocScrollOffset)}}),j}var w={},Y;function se(){if(Y)return w;Y=1,w.initSmoothScrolling=t;function t(i){var d=i.duration,e=i.offset,c=location.hash?x(location.href):location.href;f();function f(){document.body.addEventListener("click",o,!1);function o(a){!S(a.target)||a.target.className.indexOf("no-smooth-scroll")>-1||a.target.href.charAt(a.target.href.length-2)==="#"&&a.target.href.charAt(a.target.href.length-1)==="!"||a.target.className.indexOf(i.linkClass)===-1||u(a.target.hash,{duration:d,offset:e,callback:function(){n(a.target.hash)}})}}function S(o){return o.tagName.toLowerCase()==="a"&&(o.hash.length>0||o.href.charAt(o.href.length-1)==="#")&&(x(o.href)===c||x(o.href)+"#"===c)}function x(o){return o.slice(0,o.lastIndexOf("#"))}function n(o){var a=document.getElementById(o.substring(1));a&&(/^(?:a|select|input|button|textarea)$/i.test(a.tagName)||(a.tabIndex=-1),a.focus())}}function u(i,d){var e=window.pageYOffset,c={duration:d.duration,offset:d.offset||0,callback:d.callback,easing:d.easing||g},f=document.querySelector('[id="'+decodeURI(i).split("#").join("")+'"]')||document.querySelector('[id="'+i.split("#").join("")+'"]'),S=typeof i=="string"?c.offset+(i?f&&f.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):i,x=typeof c.duration=="function"?c.duration(S):c.duration,n,o;requestAnimationFrame(function(m){n=m,a(m)});function a(m){o=m-n,window.scrollTo(0,c.easing(o,e,S,x)),o<x?requestAnimationFrame(a):C()}function C(){window.scrollTo(0,e+S),typeof c.callback=="function"&&c.callback()}function g(m,T,N,l){return m/=l/2,m<1?N/2*m*m+T:(m--,-N/2*(m*(m-2)-1)+T)}}return w}(function(t,u){(function(i,d){t.exports=d(i)})(typeof k<"u"?k:window||k,function(i){var d=re(),e={},c={},f=ne(),S=le(),x=ae(),n,o,a=!!i&&!!i.document&&!!i.document.querySelector&&!!i.addEventListener;if(typeof window>"u"&&!a)return;var C,g=Object.prototype.hasOwnProperty;function m(){for(var r={},s=0;s<arguments.length;s++){var h=arguments[s];for(var p in h)g.call(h,p)&&(r[p]=h[p])}return r}function T(r,s,h){s||(s=250);var p,v;return function(){var E=h||this,b=+new Date,q=arguments;p&&b<p+s?(clearTimeout(v),v=setTimeout(function(){p=b,r.apply(E,q)},s)):(p=b,r.apply(E,q))}}function N(r){try{return r.contentElement||document.querySelector(r.contentSelector)}catch{return console.warn("Contents element not found: "+r.contentSelector),null}}function l(r){try{return r.tocElement||document.querySelector(r.tocSelector)}catch{return console.warn("TOC element not found: "+r.tocSelector),null}}return c.destroy=function(){var r=l(e);r!==null&&(e.skipRendering||r&&(r.innerHTML=""),e.scrollContainer&&document.querySelector(e.scrollContainer)?(document.querySelector(e.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(e.scrollContainer).removeEventListener("resize",this._scrollListener,!1),n&&document.querySelector(e.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),n&&document.removeEventListener("click",this._clickListener,!1)))},c.init=function(r){if(a){e=m(d,r||{}),this.options=e,this.state={},e.scrollSmooth&&(e.duration=e.scrollSmoothDuration,e.offset=e.scrollSmoothOffset,c.scrollSmooth=se().initSmoothScrolling(e)),n=f(e),o=S(e),this._buildHtml=n,this._parseContent=o,this._headingsArray=C,c.destroy();var s=N(e);if(s!==null){var h=l(e);if(h!==null&&(C=o.selectHeadings(s,e.headingSelector),C!==null)){var p=o.nestHeadingsArray(C),v=p.nest;e.skipRendering||n.render(h,v),this._scrollListener=T(function(b){n.updateToc(C),!e.disableTocScrollSync&&x(e);var q=b&&b.target&&b.target.scrollingElement&&b.target.scrollingElement.scrollTop===0;(b&&(b.eventPhase===0||b.currentTarget===null)||q)&&(n.updateToc(C),e.scrollEndCallback&&e.scrollEndCallback(b))},e.throttleTimeout),this._scrollListener(),e.scrollContainer&&document.querySelector(e.scrollContainer)?(document.querySelector(e.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(e.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var E=null;return this._clickListener=T(function(b){e.scrollSmooth&&n.disableTocAnimation(b),n.updateToc(C),E&&clearTimeout(E),E=setTimeout(function(){n.enableTocAnimation()},e.scrollSmoothDuration)},e.throttleTimeout),e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}}}},c.refresh=function(r){c.destroy(),c.init(r||this.options)},i.tocbot=c,c})})(te);const Te=I,ie="_header_1mecl_1",oe="_fixedContainer_1mecl_7",ce="_toc_1mecl_10",Ne={header:ie,fixedContainer:oe,toc:ce},ue="_parameters_d2bas_1",de="_parameterName_d2bas_5",fe="_parameterDetails_d2bas_9",Le={parameters:ue,parameterName:de,parameterDetails:fe};export{xe as A,ye as C,Le as a,X as b,Ne as c,Te as t};
//# sourceMappingURL=DomRefTable.module-4d7c4a87.js.map
