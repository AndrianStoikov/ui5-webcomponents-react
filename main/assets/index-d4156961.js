import{r as n}from"./index-ebeaab24.js";import{j as s}from"./jsx-runtime-5926aa06.js";import{k as pe}from"./UI5Element-1225b968.js";import{h as ae}from"./Icons-524f4c51.js";import{i as he}from"./slim-arrow-down-1f65eb3e.js";import{i as ge}from"./slim-arrow-up-0dba9086.js";import{T as a}from"./ThemingParameters-7e2e4e30.js";import{e as fe}from"./index-99d317a4.js";import{c as P}from"./clsx.m-1229b3e0.js";import{c as M}from"./react-jss.esm-022ab528.js";import{u as ye,o as G,p as Y,q as K,r as Q}from"./i18n-defaults-a50e66a0.js";import{T as be}from"./index-c018c76a.js";import{B as ve}from"./index-4b6a3614.js";import{s as I}from"./stopPropagation-da74d54e.js";import{f as Se}from"./utils-69f7a0e0.js";import{F as H,b as _e,c as we}from"./index-8330eb1d.js";import{T as Z,a as ee,b as te}from"./index-92bcf5b0.js";import{T as Te}from"./index-9bd8dd10.js";import{u as E}from"./withWebComponent-d61dcbbc.js";import{g as ne}from"./Media-6b270b80.js";import{d as Ce}from"./debounce-4aacbef8.js";const lt=(e,u,r,l,[c,m],{noHeader:g,fixedHeader:v=!1,scrollTimeout:f={current:0}})=>{var C;const[y,B]=n.useState(0),[b,t]=n.useState(0),[i,k]=n.useState(!0),d=n.useRef(0),_=n.useCallback(o=>{const h=d.current<=o.target.scrollTop;d.current=o.target.scrollTop,!(f.current>=performance.now())&&(h&&o.target.scrollTop>=b&&!c?(k(!1),m(!0)):!h&&o.target.scrollTop<=y+Math.max(0,b-y)&&c&&(k(!0),m(!1)))},[b,y,c]);n.useEffect(()=>{r.current&&c!==void 0&&t(r.current.getBoundingClientRect().height)},[c]),n.useEffect(()=>{const o=e.current;return v||o.addEventListener("scroll",_),()=>{o.removeEventListener("scroll",_)}},[_,v]),n.useEffect(()=>{const o=new ResizeObserver(([h])=>{const T=Array.isArray(h.borderBoxSize)?h.borderBoxSize[0]:h.borderBoxSize;B((T==null?void 0:T.blockSize)??h.target.getBoundingClientRect().height)});return u!=null&&u.current&&o.observe(u.current),()=>{o.disconnect()}},[]),n.useEffect(()=>{const o=new ResizeObserver(([h])=>{if(i){const T=Array.isArray(h.borderBoxSize)?h.borderBoxSize[0]:h.borderBoxSize;t((T==null?void 0:T.blockSize)??h.target.getBoundingClientRect().height)}});return r!=null&&r.current&&o.observe(r.current),()=>{o.disconnect()}},[i]);const w=((C=l==null?void 0:l.current)==null?void 0:C.offsetHeight)??33,p=(g?0:y+b)+w;return{topHeaderHeight:y,headerContentHeight:b,anchorBarHeight:w,totalHeaderHeight:p,headerCollapsed:c}},xe="pushpin-off",oe="M454 155q10 9 10 22t-10 23q-9 9-23.5 17t-32 15.5-35 14T331 258q12 37 3.5 76.5T296 403l-90-90L75 443q-11 12-23 0-5-5-5-11t5-11l131-131-91-90q30-30 69-38.5t77 3.5q4-15 10.5-32.5t14-35 16-32.5T296 41q10-9 23-9t22 9zM319 64q-11 11-24 40t-26 71l-10 30-31-9q-22-8-44.5-6T141 203l152 152q11-20 13-42.5t-6-45.5l-10-30 31-10q31-10 51.5-18t33-14.5 18.5-11 8-6.5z",Be=!1,Pe="SAP-icons-v4",ke="@ui5/webcomponents-icons";ae(xe,{pathData:oe,ltr:Be,collection:Pe,packageName:ke});const He="pushpin-off",ie="M300 58q0-11 7.5-18.5T326 32q9 0 18 7l128 129q8 8 8 18 0 11-7.5 18.5T454 212h-32l-52 52-41 165q-5 19-25 19-10 0-18-8l-89-89L76 472q-8 8-18 8-12 0-19-7.5T32 454q0-10 8-18l121-121-89-89q-8-8-8-18 0-8 5.5-15.5T83 183l165-41 52-52V58zm47 57l-68 68q-6 6-11 7l-128 32 150 150 32-128q1-5 7-11l68-68z",De=!1,Ne="SAP-icons-v5",Ae="@ui5/webcomponents-icons";ae(He,{pathData:ie,ltr:De,collection:Ne,packageName:Ae});pe();const qe="pushpin-off",ze={container:{position:"absolute",left:"50%","&:before, &:after":{content:'""',position:"absolute",width:"4rem",top:"50%",height:"0.0625rem"},"&:before":{right:"100%",backgroundImage:`linear-gradient(to left, ${a.sapObjectHeader_BorderColor}, transparent)`},"&:after":{backgroundImage:`linear-gradient(to right, ${a.sapObjectHeader_BorderColor}, transparent)`,left:"100%"}},anchorBarActionButton:{"--_ui5_button_base_min_width":"1.5rem","--_ui5_button_base_height":"1.5rem","--ui5wcr_anchor-btn-center":"calc((var(--_ui5_button_base_min_width) - var(--sapButton_BorderWidth)) / 2)",position:"absolute",insetBlockStart:"calc(-1 * var(--ui5wcr_anchor-btn-center))",insetInlineStart:"calc(50% - var(--ui5wcr_anchor-btn-center))",zIndex:3,"&:not([pressed])":{backgroundColor:a.sapObjectHeader_Background}},anchorBarActionButtonExpandable:{"& + $anchorBarActionButtonPinnable":{insetInlineStart:"calc(50% - var(--ui5wcr_anchor-btn-center) + 1rem)"}},anchorBarActionButtonPinnable:{},anchorBarActionPinnableAndExpandable:{"&$anchorBarActionButtonExpandable":{insetInlineStart:"calc(50% - var(--ui5wcr_anchor-btn-center) - 1rem)"}}},Ie=M(ze,{name:"DynamicPageAnchorBar"}),V=n.forwardRef((e,u)=>{var C;const{showHideHeaderButton:r,headerContentVisible:l,headerContentPinnable:c,headerPinned:m,style:g,a11yConfig:v,setHeaderPinned:f,onPinnedStateChange:y,onToggleHeaderContentVisibility:B,onHoverToggleButton:b}=e,t=Ie(),i=c&&l,k=i&&r,d=n.useCallback(o=>{f(o.target.pressed)},[f]),_=n.useRef(!0);n.useEffect(()=>{!_.current&&typeof y=="function"&&y(m),_.current&&(_.current=!1)},[m]);const w=o=>{B(fe(o,{visible:!l}))},p=ye("@ui5/webcomponents-react");return s.jsxs("section",{"data-component-name":"DynamicPageAnchorBar",style:g,role:((C=v==null?void 0:v.dynamicPageAnchorBar)==null?void 0:C.role)??"navigation",className:r||c?t.container:null,ref:u,children:[r&&s.jsx(ve,{icon:l?ge:he,"data-ui5wcr-dynamic-page-header-action":"",className:P(t.anchorBarActionButton,t.anchorBarActionButtonExpandable,k&&t.anchorBarActionPinnableAndExpandable),onClick:w,onMouseOver:b,onMouseLeave:b,tooltip:p.getText(l?Y:G),accessibleName:p.getText(l?Y:G),"data-component-name":"DynamicPageAnchorBarExpandBtn"}),i&&s.jsx(be,{icon:qe,"data-ui5wcr-dynamic-page-header-action":"",className:P(t.anchorBarActionButton,t.anchorBarActionButtonPinnable),pressed:m,onClick:d,tooltip:p.getText(m?K:Q),accessibleName:p.getText(m?K:Q),"data-component-name":"DynamicPageAnchorBarPinBtn"})]})});V.displayName="DynamicPageAnchorBar";try{V.displayName="DynamicPageAnchorBar",V.__docgenInfo={description:`The dynamic page anchor bar contains the expand/collapse (expands or collapses the header content)
and pin button (pins the content header).`,displayName:"DynamicPageAnchorBar",props:{headerContentVisible:{defaultValue:null,description:"Determines if the header content is visible.",name:"headerContentVisible",required:!0,type:{name:"boolean"}},headerContentPinnable:{defaultValue:null,description:"Determines if the header content is pinnable .",name:"headerContentPinnable",required:!0,type:{name:"boolean"}},showHideHeaderButton:{defaultValue:null,description:"Determines if the hide header button is shown .",name:"showHideHeaderButton",required:!0,type:{name:"boolean"}},headerPinned:{defaultValue:null,description:"Determines if the header is initially pinned .",name:"headerPinned",required:!1,type:{name:"boolean"}},setHeaderPinned:{defaultValue:null,description:"Set the header to the state pinned.",name:"setHeaderPinned",required:!1,type:{name:"(payload: any) => void"}},onToggleHeaderContentVisibility:{defaultValue:null,description:"Toggles the header content to be hidden or visible .",name:"onToggleHeaderContentVisibility",required:!0,type:{name:"(e: any) => void"}},onHoverToggleButton:{defaultValue:null,description:"Highlight title when hovered.",name:"onHoverToggleButton",required:!1,type:{name:"(e: any) => void"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ dynamicPageAnchorBar?: { role?: string; }; }"}},onPinnedStateChange:{defaultValue:null,description:"Fired when the `headerContent` changes its pinned state.",name:"onPinnedStateChange",required:!1,type:{name:"(pinned: boolean) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const N={S:"@container (max-width: 599px)",M:"@container (min-width: 600px) and (max-width: 1023px)",L:"@container (min-width: 1024px) and (max-width: 1439px)",XL:"@container (min-width: 1440px)"},j={[N.S]:{paddingInline:"1rem"},[N.M]:{paddingInline:"2rem"},[N.L]:{paddingInline:"2rem"},[N.XL]:{paddingInline:"3rem"}},x={headerDisplay:"--ui5wcr_DynamicPage_header_display",titleFontSize:"--ui5wcr_DynamicPage_title_fontsize"},ct={dynamicPage:{container:"DynamicPage / inline-size",width:"100%",height:"100%",maxHeight:"100%",position:"relative",whiteSpace:"normal",fontFamily:a.sapFontFamily,backgroundColor:a.sapBackgroundColor,overflowX:"hidden",overflowY:"auto",[x.headerDisplay]:"block",[x.titleFontSize]:a.sapObjectHeader_Title_FontSize},headerCollapsed:{[x.headerDisplay]:"none",[x.titleFontSize]:a.sapObjectHeader_Title_SnappedFontSize,'& $anchorBar > section[role="navigation"]':{top:"-0.025rem"}},header:{extend:j},title:{extend:j},anchorBar:{position:"sticky",boxShadow:a.sapContent_HeaderShadow,height:"1px",zIndex:2,'& > section[role="navigation"]':{top:0}},contentContainer:{extend:j,paddingTop:"1rem",boxSizing:"border-box",width:"100%",height:"auto",fontFamily:a.sapFontFamily,zIndex:0},backgroundStandard:{background:a.sapBackgroundColor},backgroundSolid:{background:a.sapBackgroundColor},backgroundList:{background:a.sapGroup_ContentBackground},backgroundTransparent:{background:"transparent"},footer:{bottom:"0.5rem",margin:"0 0.5rem",left:0,right:0}},Ee={header:{backgroundColor:a.sapObjectHeader_Background,position:"sticky",zIndex:1,paddingTop:"1rem",paddingBottom:"1rem",display:`var(${x.headerDisplay})`,overflow:"hidden"}},je=M(Ee,{name:"DynamicPageHeader"}),R=n.forwardRef((e,u)=>{const{children:r,headerPinned:l,topHeaderHeight:c,className:m,style:g,...v}=e,f=n.useMemo(()=>l?{...g,top:`${c}px`,zIndex:1}:g,[l,c,g]),y=je(),B=P(y.header,m);return s.jsx("div",{ref:u,...v,className:B,"data-component-name":"DynamicPageHeader",style:f,children:r})});R.displayName="DynamicPageHeader";try{R.displayName="DynamicPageHeader",R.__docgenInfo={description:`The dynamic page header contains the header content of the dynamic page.
This component can be collapsed and pinned by the anchorbar.`,displayName:"DynamicPageHeader",props:{headerPinned:{defaultValue:null,description:"Determines if the header is pinned.",name:"headerPinned",required:!1,type:{name:"boolean"}},topHeaderHeight:{defaultValue:null,description:"Determines the height of the top header (dynamic page title).",name:"topHeaderHeight",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Content of the `DynamicPageHeader`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const F=({onClick:e,noHover:u})=>s.jsx("span",{style:{flexGrow:1,height:"100%",cursor:u?"auto":"pointer"},className:"spacer",onClick:e});F.displayName="ToolbarSpacer";try{ToolbarSpacer.displayName="ToolbarSpacer",ToolbarSpacer.__docgenInfo={description:"",displayName:"ToolbarSpacer",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLElement>"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}}}}}catch{}const Oe={container:{flex:"1 1 100%",backgroundColor:a.sapObjectHeader_Background,minHeight:"3rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"sticky",top:0,zIndex:2,cursor:"pointer",'&[data-not-clickable="true"]':{cursor:"unset","&:hover":{backgroundColor:a.sapObjectHeader_Background}},"&:hover":{backgroundColor:a.sapObjectHeader_Hover_Background}},phone:{[x.titleFontSize]:a.sapObjectHeader_Title_SnappedFontSize},breadcrumbs:{minWidth:"50%",padding:"0.5rem 0 0.25rem 0"},titleMainSection:{overflowX:"hidden",flex:"1 1 100%",alignItems:"baseline"},middleSection:{flexGrow:1,width:"100%",overflowX:"hidden"},title:{minWidth:"3rem",overflowX:"hidden",fontFamily:a.sapObjectHeader_Title_FontFamily,color:a.sapObjectHeader_Title_TextColor,fontSize:`var(${x.titleFontSize})`,paddingTop:"0.3125rem",overflowWrap:"break-word",hyphens:"auto","& > *":{fontFamily:a.sapObjectHeader_Title_FontFamily,color:a.sapObjectHeader_Title_TextColor,fontSize:`var(${x.titleFontSize})`,overflowWrap:"break-word",hyphens:"auto"}},subTitle:{color:a.sapObjectHeader_Subtitle_TextColor,fontSize:a.sapFontSize,overflowWrap:"break-word",hyphens:"auto",paddingInlineStart:"0.5rem","& > *":{color:a.sapObjectHeader_Subtitle_TextColor,fontSize:a.sapFontSize,overflowWrap:"break-word",hyphens:"auto"}},subTitleBottom:{marginTop:"0.25rem",paddingInlineStart:0},content:{display:"flex",flexShrink:1.6,paddingInlineStart:"0.5rem"},toolbar:{flex:"1 1.6 100%",cursor:"auto","&:hover":{backgroundColor:"inherit"},"&>:first-child":{height:"100%"}}},Ve=M(Oe,{name:"DynamicPageTitle"}),O=(e,u)=>Se(e,1/0).map(r=>{if(n.isValidElement(r))return n.cloneElement(r,{onClick:l=>{var c,m;typeof((c=r.props)==null?void 0:c.onClick)=="function"&&r.props.onClick(l),(m=u.current)!=null&&m.isOpen()&&!l.defaultPrevented&&u.current.close()}})}),L=n.forwardRef((e,u)=>{var U,W;const{actions:r,breadcrumbs:l,children:c,header:m,subHeader:g,showSubHeaderRight:v,navigationActions:f,className:y,style:B,onToggleHeaderContentVisibility:b,actionsToolbarProps:t,navigationActionsToolbarProps:i,...k}=e,d=Ve(),[_,w]=E(u),[p,C]=n.useState(void 0),o=n.useRef(!1),[h,T]=n.useState(((W=ne((U=w.current)==null?void 0:U.getBoundingClientRect().width))==null?void 0:W.name)==="Phone"),re=P(d.container,h&&d.phone,y),[se,$]=E((t==null?void 0:t.overflowPopoverRef)??null),[le,ce]=E((i==null?void 0:i.overflowPopoverRef)??null);n.useEffect(()=>(o.current=!0,()=>{o.current=!1}),[o]);const{onClick:Re,...de}=k,A=n.useCallback(S=>{typeof(e==null?void 0:e.onClick)=="function"&&e.onClick(S),typeof b=="function"&&!(e!=null&&e["data-not-clickable"])&&b(S)},[e==null?void 0:e.onClick,b,e==null?void 0:e["data-not-clickable"]]);n.useEffect(()=>{const S=Ce(([D])=>{var J;const q=Array.isArray(D.borderBoxSize)?D.borderBoxSize[0]:D.borderBoxSize,z=(q==null?void 0:q.inlineSize)??D.target.getBoundingClientRect().width;T(((J=ne(z))==null?void 0:J.name)==="Phone"),z<1280&&!p&&o.current?C(!0):z>=1280&&p&&o.current&&C(!1)},150),X=new ResizeObserver(S);return w.current&&X.observe(w.current),()=>{S.cancel(),X.disconnect()}},[w.current,p,o]);const me=S=>{I(S),typeof(t==null?void 0:t.onClick)=="function"&&t.onClick(S)},ue=S=>{I(S),typeof(i==null?void 0:i.onClick)=="function"&&i.onClick(S)};return s.jsxs(H,{className:re,style:B,ref:_,"data-component-name":"DynamicPageTitle",onClick:A,...de,children:[(l||f&&p)&&s.jsxs(H,{justifyContent:_e.SpaceBetween,"data-component-name":"DynamicPageTitleBreadcrumbs",children:[l&&s.jsx("div",{className:d.breadcrumbs,onClick:I,children:l}),p&&s.jsxs(Z,{tabIndex:void 0,role:void 0,...i,overflowButton:i==null?void 0:i.overflowButton,className:P(d.toolbar,i==null?void 0:i.className),onClick:ue,"data-component-name":"DynamicPageTitleNavActions",onOverflowChange:i==null?void 0:i.onOverflowChange,overflowPopoverRef:le,design:ee.Auto,toolbarStyle:te.Clear,active:!0,children:[s.jsx(F,{onClick:A,noHover:e==null?void 0:e["data-not-clickable"]}),O(f,ce)]})]}),s.jsxs(H,{alignItems:we.Center,className:d.middleSection,"data-component-name":"DynamicPageTitleMiddleSection",children:[s.jsxs(H,{className:d.titleMainSection,children:[m&&s.jsx("div",{className:d.title,"data-component-name":"DynamicPageTitleHeader",children:m}),g&&v&&s.jsx("div",{className:d.subTitle,"data-component-name":"DynamicPageTitleSubHeader",children:g}),c&&s.jsx("div",{className:d.content,"data-component-name":"DynamicPageTitleContent",children:c})]}),(r||!p&&f)&&s.jsxs(Z,{tabIndex:void 0,role:void 0,...t,overflowButton:t==null?void 0:t.overflowButton,design:ee.Auto,toolbarStyle:te.Clear,active:!0,className:P(d.toolbar,t==null?void 0:t.className),onClick:me,"data-component-name":"DynamicPageTitleActions",onOverflowChange:t==null?void 0:t.onOverflowChange,overflowPopoverRef:se,children:[s.jsx(F,{onClick:A,noHover:e==null?void 0:e["data-not-clickable"]}),O(r,$),!p&&n.Children.count(r)>0&&n.Children.count(f)>0&&s.jsx(Te,{}),!p&&O(f,$)]})]}),g&&!v&&s.jsx(H,{children:s.jsx("div",{className:P(d.subTitle,d.subTitleBottom),"data-component-name":"DynamicPageTitleSubHeader",children:g})})]})});L.displayName="DynamicPageTitle";try{L.displayName="DynamicPageTitle",L.__docgenInfo={description:"The `DynamicPageTitle` component is part of the `DynamicPage` family and is used to serve as title of the `DynamicPage` and `ObjectPage`.\nIt can contain Breadcrumbs, Title, Subtitle, Content, KPIs and Actions.",displayName:"DynamicPageTitle",props:{actions:{defaultValue:null,description:"The `DynamicPageTitle` actions.\n\n__Note:__ When clicking on an action in the overflow popover it closes the popover. You can use `event.preventDefault()` to prevent this.",name:"actions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},breadcrumbs:{defaultValue:null,description:"The `breadcrumbs` displayed in the `DynamicPageTitle` top-left area.\n\n__Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Breadcrumbs` in order to preserve the intended design.",name:"breadcrumbs",required:!1,type:{name:"ReactNode | ReactNode[]"}},children:{defaultValue:null,description:"The content is positioned in the `DynamicPageTitle` middle area",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:"The `header` is positioned in the `DynamicPageTitle` left area.\nUse this prop to display a `Title` (or any other component that serves as a heading).",name:"header",required:!1,type:{name:"ReactNode"}},subHeader:{defaultValue:null,description:"The `subHeader` is positioned in the `DynamicPageTitle` left area below the `header`.\nUse this aggregation to display a component like `Label` or any other component that serves as sub header.",name:"subHeader",required:!1,type:{name:"ReactNode"}},navigationActions:{defaultValue:null,description:"The `DynamicPageTitle` navigation actions.<br />\n*Note*: The `navigationActions` position depends on the control size.\nIf the control size is 1280px or bigger, they are rendered right next to the actions.\nOtherwise, they are rendered in the top-right area, above the actions.\nIf a large number of elements(buttons) are used, there could be visual degradations as the space for the `navigationActions` is limited.\n\n__Note:__ When clicking on an action in the overflow popover it closes the popover. You can use `event.preventDefault()` to prevent this.",name:"navigationActions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},showSubHeaderRight:{defaultValue:null,description:"Display the `subHeader` on the right instead of below the `header`.",name:"showSubHeaderRight",required:!1,type:{name:"boolean"}},actionsToolbarProps:{defaultValue:null,description:'Use this prop to customize the "actions" `Toolbar`.\n\n__Note:__ It is possible to overwrite internal implementations. Please use with caution!',name:"actionsToolbarProps",required:!1,type:{name:'Omit<ToolbarPropTypes, "active" | "design" | "toolbarStyle">'}},navigationActionsToolbarProps:{defaultValue:null,description:'Use this prop to customize the "navigationActions" `Toolbar`.\n\n__Note:__ It is possible to overwrite internal implementations. Please use with caution!',name:"navigationActionsToolbarProps",required:!1,type:{name:'Omit<ToolbarPropTypes, "active" | "design" | "toolbarStyle">'}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{L as D,j as R,R as a,V as b,x as c,ct as s,lt as u};
//# sourceMappingURL=index-d4156961.js.map
