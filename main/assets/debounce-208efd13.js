import{w as l}from"./UI5Element-74c2a827.js";import{r as a}from"./index-ebeaab24.js";import{u as p}from"./useIsomorphicLayoutEffect-38a48652.js";const b="--_ui5_dir",f=r=>{var o,u;if(!r.current)return l();const e=window.document,t=["ltr","rtl"],n=getComputedStyle(r.current).getPropertyValue(b);return t.includes(n)?n==="rtl":t.includes((o=r.current)==null?void 0:o.dir)?((u=r.current)==null?void 0:u.dir)==="rtl":t.includes(e.documentElement.dir)?e.documentElement.dir==="rtl":t.includes(e.body.dir)?e.body.dir==="rtl":l()},E=r=>{const[e,t]=a.useState(l()),n=a.useRef(!1);return p(()=>{n.current=!0,t(f(r));const o=[document.documentElement,document.body,r.current].filter(Boolean),u=new MutationObserver(s=>{s.forEach(c=>{c.attributeName==="dir"&&n.current&&t(f(r))})});return o.forEach(s=>{u.observe(s,{attributes:!0,childList:!1,characterData:!1,attributeFilter:["dir"]})}),()=>{n.current=!1,u.disconnect()}},[n,r.current]),e},m=Date.now||(()=>new Date().getTime()),g=(r,e)=>{let t,n,o,u,s;const c=()=>{const i=m()-n;e>i?t=setTimeout(c,e-i):(t=null,u=r.apply(s,o),t||(o=s=null))},d=function(...i){return s=this,o=i,n=m(),t||(t=setTimeout(c,e)),u};return d.cancel=()=>{clearTimeout(t),t=o=s=null},d};export{g as d,E as u};
//# sourceMappingURL=debounce-208efd13.js.map
