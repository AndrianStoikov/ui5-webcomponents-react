import{j as I}from"./jsx-runtime-ccada58e.js";import{c as C}from"./clsx.m-1229b3e0.js";import{r as n}from"./index-f1f749bf.js";import{c as w}from"./react-jss.esm-2e28eff7.js";import{u as x,P as k}from"./i18n-defaults-57d9744b.js";import{T as t}from"./ThemingParameters-f4b4144e.js";var o=(e=>(e.Determinate="Determinate",e.Indeterminate="Indeterminate",e))(o||{});const v={"@keyframes scroll":{"0%":{backgroundPosition:"-100% 0"},"100%":{backgroundPosition:"200% 0"}},loader:{position:"relative",height:"0.25rem",width:"100%","&:before":{content:'""',width:"100%",height:"100%",position:"absolute",left:0,backgroundColor:t.sapContent_BusyColor,opacity:.15},"&$loaderDeterminate":{background:`linear-gradient(to right, ${t.sapContent_BusyColor}, ${t.sapContent_BusyColor})`,backgroundRepeat:"repeat-y"},"&$loaderIndeterminate":{background:`linear-gradient(
      to right,
      transparent 0px,
      ${t.sapContent_BusyColor} calc(50% - 2rem),
      ${t.sapContent_BusyColor} calc(50% + 2rem),
      transparent 100%
    )`,backgroundSize:"40%",backgroundRepeat:"repeat-y",animation:"$scroll 1.2s linear infinite"}},loaderDeterminate:{},loaderIndeterminate:{}},L=w(v,{name:"Loader"}),a=n.forwardRef((e,d)=>{const{className:p,type:s,progress:m,slot:u,style:c,delay:r,...y}=e,i=L(),[h,f]=n.useState(r===0),g=C(i.loader,p,i[`loader${s}`]),b=s!==o.Determinate?"40%":m;n.useEffect(()=>{let l;return r>0&&(l=setTimeout(()=>{f(!0)},r)),()=>{clearTimeout(l)}},[]);const _=x("@ui5/webcomponents-react");return h?I.jsx("div",{ref:d,className:g,"data-component-name":"Loader","aria-busy":"true",role:"progressbar",title:_.getText(k),slot:u,style:{...c,backgroundSize:b},...y}):null});a.defaultProps={type:o.Indeterminate,progress:"0px",delay:0};a.displayName="Loader";try{a.displayName="Loader",a.__docgenInfo={description:"The `Loader` signals that an operation is currently being executed. It uses as little space as possible to allow the user to interact with the UI.<br />\nIt can be used to signal a data update on an already existing dataset, or where an expansion will happen.",displayName:"Loader",props:{delay:{defaultValue:{value:"0"},description:"Delay in ms until the Loader will be displayed",name:"delay",required:!1,type:{name:"number"}},type:{defaultValue:{value:"LoaderType.Indeterminate"},description:"Defines the type of the `Loader`.\n__Note:__ If the process completion rate can be detected the `Determinate` type should be used.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Determinate"'},{value:'"Indeterminate"'},{value:'"Determinate"'},{value:'"Indeterminate"'}]}},progress:{defaultValue:{value:"0px"},description:"Defines the progress of the Loader Bar. <br />\n__Note:__ This prop has no effect if used with type `Indeterminate`.",name:"progress",required:!1,type:{name:"Width<string | number>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{a as L,o as a};
//# sourceMappingURL=index-b8a7ec27.js.map
