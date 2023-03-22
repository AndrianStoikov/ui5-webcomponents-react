import{j as n,a as G,F as O}from"./jsx-runtime-670450c2.js";import{c as ue}from"./clsx.m-1229b3e0.js";import{r as a}from"./index-f1f749bf.js";import{c as k}from"./react-jss.esm-e54d2f1d.js";import{T}from"./ThemingParameters-f4b4144e.js";import{u as ie}from"./withWebComponent-65cd39a0.js";import{g as j}from"./Media-6b270b80.js";import{T as me}from"./index-9ba110d1.js";import{T as ce}from"./Title-129aeb28.js";import{b as W}from"./CssSizeVariables-bd372cde.js";import{f as pe}from"./utils-ed90fb1b.js";import{L as de}from"./index-814025da.js";import{W as U}from"./WrappingType-b81e595a.js";import{u as fe}from"./useIsomorphicId-78860c77.js";var J=(e=>(e.Solid="Solid",e.Transparent="Transparent",e))(J||{});const _e=k({title:{gridColumn:"1 / span 12",display:"flex",alignItems:"center",height:W.sapWcrFormGroupTitleHeight,lineHeight:W.sapWcrFormGroupTitleHeight,fontFamily:T.sapFontHeaderFamily,color:T.sapGroup_TitleTextColor,fontSize:T.sapFontHeader6Size,fontWeight:"bold",margin:0,marginBlockStart:"1rem"}},{name:"FormGroupTitle"});function E({titleText:e,style:r}){const t=_e();return n("h6",{className:t.title,title:e,"aria-label":e,"data-component-name":"FormGroupTitle",style:r,children:e})}try{E.displayName="FormGroupTitle",E.__docgenInfo={description:"",displayName:"FormGroupTitle",props:{titleText:{defaultValue:null,description:"",name:"titleText",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const be={formContainer:{containerType:"inline-size"},form:{display:"grid",alignItems:"center",rowGap:"0.25rem",columnGap:"0.5rem",gridTemplateColumns:"repeat(calc(12 * var(--ui5wcr_form_columns)), 1fr)","--ui5wcr_form_label_text_align":"end","--ui5wcr_form_content_span":"calc(12 - var(--ui5wcr_form_label_span))","--ui5wcr_form_columns_s":1,"--ui5wcr_form_columns_m":1,"--ui5wcr_form_columns_l":1,"--ui5wcr_form_columns_xl":2,"--ui5wcr_form_label_span_s":12,"--ui5wcr_form_label_span_m":2,"--ui5wcr_form_label_span_l":4,"--ui5wcr_form_label_span_xl":4,"@container (max-width: 599px)":{"--ui5wcr_form_label_span":"var(--ui5wcr_form_label_span_s)","--ui5wcr_form_columns":"var(--ui5wcr_form_columns_s)"},"@container (min-width: 600px) and (max-width: 1023px)":{"--ui5wcr_form_label_span":"var(--ui5wcr_form_label_span_m)","--ui5wcr_form_columns":"var(--ui5wcr_form_columns_m)"},"@container (min-width: 1024px) and (max-width: 1439px)":{"--ui5wcr_form_label_span":"var(--ui5wcr_form_label_span_l)","--ui5wcr_form_columns":"var(--ui5wcr_form_columns_l)"},"@container (min-width: 1440px)":{"--ui5wcr_form_label_span":"var(--ui5wcr_form_label_span_xl)","--ui5wcr_form_columns":"var(--ui5wcr_form_columns_xl)"}},solid:{backgroundColor:T.sapGroup_ContentBackground},transparent:{backgroundColor:"transparent"},formTitle:{borderBlockEnd:`1px solid ${T.sapGroup_TitleBorderColor}`,marginBlockEnd:"1.75rem",gridColumn:"1 / -1"},labelSpan12:{"--ui5wcr_form_content_span":12,"--ui5wcr_form_label_text_align":"start","--ui5wcr_form_label_span":12,rowGap:0}},K=a.createContext({labelSpan:null});function Q(){return a.useContext(K)}const ve=k(be,{name:"Form"}),q=a.forwardRef((e,r)=>{var A;const{as:t="form",backgroundDesign:s=J.Transparent,children:o,columnsS:m=1,columnsM:_=1,columnsL:u=1,columnsXL:c=2,className:I,labelSpanS:N=12,labelSpanM:y=2,labelSpanL:d=4,labelSpanXL:g=4,titleText:w,style:Z,...ee}=e,S=new Map;S.set("Phone",m),S.set("Tablet",_),S.set("Desktop",u),S.set("LargeDesktop",c);const F=new Map;F.set("Phone",N),F.set("Tablet",y),F.set("Desktop",d),F.set("LargeDesktop",g);const[ae,L]=ie(r),[$,re]=a.useState(((A=j())==null?void 0:A.name)??"Desktop"),H=a.useRef($);a.useEffect(()=>{const b=new ResizeObserver(([B])=>{const f=j(B.contentRect.width);f&&H.current!==f.name&&(H.current=f.name,re(f.name))});return L.current&&b.observe(L.current),()=>{b.disconnect()}},[L]);const C=ve(),M=S.get($),te=F.get($),le=a.useMemo(()=>{if(M===1)return o;const b=[],f=a.Children.toArray(o).reduce((i,x,p)=>{const l=Math.floor(p/M);return i[l]??(i[l]=[]),i[l].push(x),i},[]),P=[];f.forEach((i,x)=>{P[x]=Math.max(...i.map(p=>p.type.displayName==="FormItem"?1:a.Children.count(p.props.children)+1))});let v=2;return f.forEach((i,x)=>{const p=P.at(x);i.forEach((l,R)=>{var X;const se={gridColumnStart:R*12+1,gridRowStart:v};(X=l==null?void 0:l.props)!=null&&X.titleText&&b.push(n(E,{titleText:l.props.titleText,style:se},`title-col-${R}-row-${v}`));for(let h=0;h<p;h++){let V;l.type.displayName==="FormGroup"?V=a.Children.toArray(l.props.children).at(h):l.type.displayName==="FormItem"&&h===0&&(V=l),V&&b.push(a.cloneElement(V,{key:`col-${R}-row-${v+h}`,columnIndex:R,rowIndex:v+h+1}))}}),v+=p,p===1&&(v+=1)}),b},[o,M]),ne=ue(C.form,C[s.toLowerCase()],I),oe=t;return n(K.Provider,{value:{labelSpan:te},children:n("div",{className:C.formContainer,suppressHydrationWarning:!0,children:G(oe,{ref:ae,className:ne,style:{...Z,"--ui5wcr_form_label_span_s":N,"--ui5wcr_form_label_span_m":y,"--ui5wcr_form_label_span_l":d,"--ui5wcr_form_label_span_xl":g,"--ui5wcr_form_columns_s":m,"--ui5wcr_form_columns_m":_,"--ui5wcr_form_columns_l":u,"--ui5wcr_form_columns_xl":c},...ee,children:[w&&n(me,{level:ce.H3,className:C.formTitle,children:w}),le]})})})});q.displayName="Form";try{q.displayName="Form",q.__docgenInfo={description:"The `Form` component arranges labels and fields into groups and rows. There are different ways to visualize forms for different screen sizes.\nIt is possible to change the alignment of all labels by setting the CSS `align-items` property, per default all labels are centered.",displayName:"Form",props:{children:{defaultValue:null,description:"Components that are placed into Form.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormGroup` or `FormItem` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},backgroundDesign:{defaultValue:null,description:"Specifies the background color of the Form content.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Solid"'},{value:'"Transparent"'}]}},titleText:{defaultValue:null,description:"Form title",name:"titleText",required:!1,type:{name:"string"}},columnsS:{defaultValue:null,description:`Form columns for small size (\`< 600px\`).
Must be a number between 1 and 12.

Default Value: 1`,name:"columnsS",required:!1,type:{name:"number"}},columnsM:{defaultValue:null,description:`Form columns for medium size (\`600px\` - \`1023px\`).
Must be a number between 1 and 12.

Default Value: 1

__Note__: The number of columns for medium size must not be smaller than the number of columns for small size.`,name:"columnsM",required:!1,type:{name:"number"}},columnsL:{defaultValue:null,description:`Form columns for large size (\`1024px\` - \`1439px\`).
Must be a number between 1 and 12.

Default Value: 1

__Note:__ The number of columns for large size must not be smaller than the number of columns for medium size.`,name:"columnsL",required:!1,type:{name:"number"}},columnsXL:{defaultValue:null,description:`Form columns for extra large size (\`>= 1440px\`).
Must be a number between 1 and 12.

Default Value: 2

__Note:__ The number of columns for extra large size must not be smaller than the number of columns for large size.`,name:"columnsXL",required:!1,type:{name:"number"}},labelSpanS:{defaultValue:null,description:`Default span for labels in small size (\`< 600px\`).
Must be a number between 1 and 12.

Default Value: 12`,name:"labelSpanS",required:!1,type:{name:"number"}},labelSpanM:{defaultValue:null,description:"Default span for labels in medium size (`600px` - `1023px`).\nMust be a number between 1 and 12.\n\nDefault Value: 2",name:"labelSpanM",required:!1,type:{name:"number"}},labelSpanL:{defaultValue:null,description:"Default span for labels in large size (`1024px` - `1439px`).\nMust be a number between 1 and 12.\n\nDefault Value: 4",name:"labelSpanL",required:!1,type:{name:"number"}},labelSpanXL:{defaultValue:null,description:`Default span for labels in extra large size (\`>= 1440px\`).
Must be a number between 1 and 12.

Default Value: 4`,name:"labelSpanXL",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"Sets the components outer HTML tag.\n\n__Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"figure"'},{value:'"style"'},{value:'"slot"'},{value:'"title"'},{value:'"article"'},{value:'"button"'},{value:'"dialog"'},{value:'"form"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"table"'},{value:'"time"'},{value:'"label"'},{value:'"header"'},{value:'"footer"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const he=k({spacer:{height:"1rem",gridColumn:"span 12"}},{name:"FormGroup"}),z=e=>{const{titleText:r,children:t}=e,s=he();return G(O,{children:[n(E,{titleText:r}),t,n("span",{className:s.spacer})]})};z.displayName="FormGroup";try{z.displayName="FormGroup",z.__docgenInfo={description:"The `FormGroup` encapsulates `FormItems` into groups.\n\n__Note:__ `FormGroup` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `titleText` and `children`, especially no `className`, `style` or `ref`.",displayName:"FormGroup",props:{titleText:{defaultValue:null,description:"Title of the FormGroup.",name:"titleText",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Content of the FormGroup.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormItem` in order to preserve the intended design.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}}}}}catch{}const ye=new Set(["CheckBox","RadioButton","Switch","RangeSlider","Slider"]),Y=k({label:{gridColumnEnd:"span var(--ui5wcr_form_label_span)",justifySelf:"var(--ui5wcr_form_label_text_align)",textAlign:"var(--ui5wcr_form_label_text_align)",'&[data-label-span="12"]':{justifySelf:"start",paddingBlockEnd:"0.25rem"},'&:has(+ $content + [data-component-name="FormGroupTitle"])':{paddingBlockEnd:"1rem"},"&:has(+ $content > [ui5-checkbox])":{alignSelf:"center"},"&:has(+ $content > [ui5-radio-button])":{alignSelf:"center"},"&:has(+ $content > [ui5-switch])":{alignSelf:"center"},"&:has(+ $content > [ui5-range-slider])":{alignSelf:"center"},"&:has(+ $content > [ui5-slider])":{alignSelf:"center"}},content:{display:"flex",gridColumnEnd:"span var(--ui5wcr_form_content_span)",'&[data-label-span="12"]':{gridColumnEnd:"span 12",paddingBlockEnd:"0.625rem"},'&:has(+ [data-component-name="FormGroupTitle"])':{paddingBlockEnd:"1rem"}}},{name:"FormItem"});function ge({label:e,style:r}){const t=Y(),{labelSpan:s}=Q();if(typeof e=="string")return n(de,{className:t.label,style:r,wrappingType:U.Normal,"data-label-span":s,children:e?`${e}:`:""});if(a.isValidElement(e)){const{showColon:o,wrappingType:m,className:_,style:u,children:c}=e.props;return a.cloneElement(e,{showColon:o??!0,wrappingType:m??U.Normal,className:`${t.label} ${_??""}`,style:{...r,...u||{}},"data-label-span":s},c??"")}return null}const we=e=>{var r;return typeof e=="string"?e:a.isValidElement(e)&&typeof((r=e.props)==null?void 0:r.children)=="string"?e.props.children:""},D=e=>{var y;const{label:r,children:t,columnIndex:s,rowIndex:o}=e,m=fe(),_=Y(),{labelSpan:u}=Q(),c=(s??0)*12+1,I=s!=null?u===12?c:c+(u??0):void 0,N=u===12?(o??0)+1:o??0;return G(O,{children:[n(ge,{label:r,style:{gridColumnStart:c,gridRowStart:o??void 0,alignSelf:ye.has((y=t==null?void 0:t.type)==null?void 0:y.displayName)?"center":void 0}}),n("div",{className:_.content,style:{gridColumnStart:I,gridRowStart:o!=null?N:void 0},"data-label-span":u,children:pe(t).map((d,g)=>{if(a.isValidElement(d)&&d.type&&d.type.$$typeof!==Symbol.for("react.portal")){const w=we(r);return G(a.Fragment,{children:[a.cloneElement(d,{id:`${m}-${g}`}),n("label",{htmlFor:`${m}-${g}`,style:{display:"none"},"aria-hidden":!0,children:w})]},`${w}-${m}`)}})})]})};D.displayName="FormItem";try{D.displayName="FormItem",D.__docgenInfo={description:"A `FormItem` represents a row in a `Form`. A `FormItem` is a combination of one label and a component associated to this label.\n\n__Note__: The `FormItem` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `label` and `children`, especially no `className`, `style` or `ref`.",displayName:"FormItem",props:{label:{defaultValue:null,description:"Label of the FormItem. Can be either a string or a `Label` component.",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Content of the FormItem. Can be an arbitrary React Node.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}}}}}catch{}export{z as F,D as a,q as b,J as c};
//# sourceMappingURL=index-e810ef57.js.map
