import{j as s,a as T}from"./jsx-runtime-670450c2.js";import{d as F,e as y,f as P,g as H,h as w,j as A}from"./UI5Element-386cb3f6.js";import{T as o}from"./ThemingParameters-f4b4144e.js";import{c as x,T as k}from"./react-jss.esm-e54d2f1d.js";import{g as O}from"./I18nContext-bef5b452.js";import{r as i}from"./index-f1f749bf.js";import{r as f}from"./index-96c5f47c.js";import{M as h}from"./ModalsContext-131e4070.js";import{C as R,a as j}from"./CssSizeVariables-bd372cde.js";import{G as m}from"./GlobalStyleClasses-7209358d.js";import{C as e}from"./CustomVariables-fd831c35.js";import{u as $}from"./useIsomorphicLayoutEffect-a838da4a.js";const v=(r,a)=>({...r,...a.payload});function u({children:r}){const[a,n]=i.useReducer(v,{}),l=i.useRef({}),t=i.useRef(!1),c=i.useCallback(()=>Promise.all(Object.keys(l.current).map(d=>F(d))).then(d=>{const p=d.reduce((g,C)=>({...g,[C.packageName]:C}),{});t.current&&n({payload:p})}),[]),_=i.useCallback((d,p)=>{l.current[d]=p,c()},[]);i.useEffect(()=>(t.current=!0,y(c),()=>{t.current=!1,P(c)}),[]);const b=O();return s(b.Provider,{value:{i18nBundles:a,setI18nBundle:_},children:r})}try{u.displayName="I18nProvider",u.__docgenInfo={description:"",displayName:"I18nProvider",props:{}}}catch{}const M=(r,a)=>{switch(a.type){case"set":return[...r,a.payload];case"reset":return r.filter(n=>n.id!==a.payload.id);default:return r}};function B({children:r}){const[a,n]=i.useReducer(M,[]),l=i.useRef(!1);return!l.current&&typeof window<"u"&&(window["@ui5/webcomponents-react"]??(window["@ui5/webcomponents-react"]={}),window["@ui5/webcomponents-react"].ModalsContext=h,window["@ui5/webcomponents-react"].setModal=n,l.current=!0),T(h.Provider,{value:{setModal:n},children:[a.map(t=>{if(t!=null&&t.Component)return f.createPortal(i.createElement(t.Component,{...t.props,ref:t.ref,key:t.id,"data-id":t.id}),t.container??document.body)}),r]})}try{B.displayName="ModalsProvider",B.__docgenInfo={description:"",displayName:"ModalsProvider",props:{}}}catch{}const G={[e.ActionSheetHeaderBoxShadow]:"none",[e.ActionSheetMobileHeaderBackground]:"transparent",[e.ActionSheetMobileHeaderBorderRadius]:"0",[e.ActionSheetMobileHeaderBoxShadow]:"none",[e.ActionSheetMobileHeaderTextColor]:o.sapContent_ContrastTextColor,[e.AnalyticalTableHeaderActiveTextColor]:o.sapList_HeaderTextColor,[e.AnalyticalTableHeaderBorderWidth]:"0.0625rem",[e.AnalyticalTableHeaderFontFamily]:o.sapFontFamily,[e.AnalyticalTableOuterBorderBlock]:`1px solid ${o.sapList_BorderColor}`,[e.AnalyticalTableOuterBorderInline]:`1px solid ${o.sapList_BorderColor}`,[e.ObjectPageSectionBorderTop]:`0.0625rem solid ${o.sapGroup_TitleBorderColor}`,[e.ObjectPageSectionTitleFontFamily]:o.sapFontFamily,[e.ObjectPageSectionTitleHeight]:"2.25rem",[e.ObjectPageSectionTitleLineHeight]:"2.25rem",[e.ObjectPageSectionTitleTextDecoration]:"none",[e.ObjectPageSubSectionBackgroundColor]:"transparent",[e.ObjectPageSubSectionBorderRadius]:"0",[e.ObjectPageSubSectionPaddingBlockStart]:"2rem",[e.SplitterBarBorderFix]:`${o.sapContent_FocusWidth} solid ${o.sapContent_FocusColor}`,[e.SplitterBarBorderFocus]:`${o.sapContent_FocusWidth} solid ${o.sapContent_FocusColor}`,[e.SplitterBarBorderStyle]:"none",[e.SplitterBarOutline]:"none",[e.SplitterContentBorderColor]:o.sapHighlightColor,[e.SplitterIconColor]:o.sapButton_Lite_TextColor,[e.ToolbarFocusOutline]:`${o.sapContent_FocusWidth} ${o.sapContent_FocusStyle} ${o.sapContent_FocusColor}`,[e.ToolbarFocusShadow]:"none"},z={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow,[e.SplitterBarBorderFocus]:`.0625rem dotted ${o.sapContent_FocusColor}`,[e.SplitterBarBorderFix]:`.0625rem dotted ${o.sapContent_FocusColor}`},E={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow},I={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow},D={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow,[e.SplitterBarBorderFocus]:`.0625rem dotted ${o.sapContent_FocusColor}`,[e.SplitterBarBorderFix]:`.0625rem dotted ${o.sapContent_FocusColor}`},L={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow,[e.SplitterBarBorderFocus]:`.0625rem dotted ${o.sapContent_FocusColor}`,[e.SplitterBarBorderFix]:`.0625rem dotted ${o.sapContent_FocusColor}`},N={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow,[e.SplitterContentBorderColor]:o.sapGroup_ContentBorderColor,[e.SplitterBarBorderStyle]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarOutline]:`0.15rem dotted ${o.sapGroup_ContentBorderColor}`,[e.SplitterBarBorderFocus]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarBorderFix]:"none"},W={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow,[e.SplitterContentBorderColor]:o.sapGroup_ContentBorderColor,[e.SplitterBarBorderStyle]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarOutline]:`0.15rem dotted ${o.sapGroup_ContentBorderColor}`,[e.SplitterBarBorderFocus]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarBorderFix]:"none"},U={[e.ActionSheetHeaderBoxShadow]:o.sapContent_HeaderShadow,[e.ActionSheetMobileHeaderBackground]:o.sapPageHeader_Background,[e.ActionSheetMobileHeaderBorderRadius]:o.sapPopover_BorderCornerRadius,[e.ActionSheetMobileHeaderBoxShadow]:o.sapContent_Shadow2,[e.ActionSheetMobileHeaderTextColor]:o.sapPageHeader_TextColor,[e.AnalyticalTableHeaderFontFamily]:o.sapFontBoldFamily,[e.AnalyticalTableOuterBorderBlock]:"none",[e.AnalyticalTableOuterBorderInline]:"none",[e.ObjectPageSectionBorderTop]:"none",[e.ObjectPageSectionTitleFontFamily]:o.sapFontBoldFamily,[e.ObjectPageSectionTitleHeight]:"2.75rem",[e.ObjectPageSectionTitleLineHeight]:"4rem",[e.ObjectPageSubSectionBackgroundColor]:o.sapGroup_ContentBackground,[e.ObjectPageSubSectionBorderRadius]:o.sapElement_BorderCornerRadius,[e.ObjectPageSubSectionPaddingBlockStart]:"0.5rem",[e.SplitterContentBorderColor]:o.sapGroup_ContentBorderColor,[e.ToolbarFocusOutline]:"none",[e.ToolbarFocusShadow]:`inset 0 0 0 0.125rem ${o.sapContent_FocusColor}`},V={[e.ActionSheetHeaderBoxShadow]:o.sapContent_HeaderShadow,[e.ActionSheetMobileHeaderBackground]:o.sapPageHeader_Background,[e.ActionSheetMobileHeaderBorderRadius]:o.sapPopover_BorderCornerRadius,[e.ActionSheetMobileHeaderBoxShadow]:o.sapContent_Shadow2,[e.ActionSheetMobileHeaderTextColor]:o.sapPageHeader_TextColor,[e.AnalyticalTableHeaderFontFamily]:o.sapFontBoldFamily,[e.AnalyticalTableOuterBorderBlock]:"none",[e.AnalyticalTableOuterBorderInline]:"none",[e.ObjectPageSectionTitleFontFamily]:o.sapFontBoldFamily,[e.ObjectPageSectionTitleLineHeight]:"4rem",[e.ObjectPageSectionTitleHeight]:"2.75rem",[e.ObjectPageSectionBorderTop]:"none",[e.ObjectPageSubSectionBackgroundColor]:o.sapGroup_ContentBackground,[e.ObjectPageSubSectionBorderRadius]:o.sapElement_BorderCornerRadius,[e.ObjectPageSubSectionPaddingBlockStart]:"0.5rem",[e.SplitterContentBorderColor]:o.sapGroup_ContentBorderColor,[e.ToolbarFocusOutline]:"none",[e.ToolbarFocusShadow]:`inset 0 0 0 0.125rem ${o.sapContent_FocusColor}`},q={[e.ObjectPageSectionTitleFontFamily]:o.sapFontBoldFamily,[e.ObjectPageSectionTitleTextDecoration]:`underline ${o.sapList_SelectionBorderColor}`,[e.ObjectPageSectionBorderTop]:"none",[e.ObjectPageSubSectionBackgroundColor]:o.sapGroup_ContentBackground,[e.ObjectPageSubSectionBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetHeaderBoxShadow]:o.sapContent_HeaderShadow,[e.ActionSheetMobileHeaderBackground]:o.sapPageHeader_Background,[e.ActionSheetMobileHeaderBorderRadius]:o.sapPopover_BorderCornerRadius,[e.ActionSheetMobileHeaderBoxShadow]:o.sapContent_Shadow2,[e.ActionSheetMobileHeaderTextColor]:o.sapPageHeader_TextColor,[e.SplitterContentBorderColor]:o.sapGroup_ContentBorderColor,[e.SplitterBarBorderStyle]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarOutline]:`0.15rem dotted ${o.sapGroup_ContentBorderColor}`,[e.SplitterBarBorderFocus]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarBorderFix]:"none",[e.AnalyticalTableHeaderFontFamily]:o.sapFontBoldFamily,[e.AnalyticalTableHeaderActiveTextColor]:o.sapContent_ContrastTextColor,[e.AnalyticalTableHeaderBorderWidth]:"0.188rem",[e.AnalyticalTableOuterBorderInline]:"none"},J={[e.ObjectPageSectionTitleFontFamily]:o.sapFontBoldFamily,[e.ObjectPageSectionTitleTextDecoration]:`underline ${o.sapList_SelectionBorderColor}`,[e.ObjectPageSectionBorderTop]:"none",[e.ObjectPageSubSectionBackgroundColor]:o.sapGroup_ContentBackground,[e.ObjectPageSubSectionBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetHeaderBoxShadow]:o.sapContent_HeaderShadow,[e.ActionSheetMobileHeaderBackground]:o.sapPageHeader_Background,[e.ActionSheetMobileHeaderBorderRadius]:o.sapPopover_BorderCornerRadius,[e.ActionSheetMobileHeaderBoxShadow]:o.sapContent_Shadow2,[e.ActionSheetMobileHeaderTextColor]:o.sapPageHeader_TextColor,[e.SplitterContentBorderColor]:o.sapGroup_ContentBorderColor,[e.SplitterBarBorderStyle]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarOutline]:`0.15rem dotted ${o.sapGroup_ContentBorderColor}`,[e.SplitterBarBorderFocus]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarBorderFix]:"none",[e.AnalyticalTableHeaderFontFamily]:o.sapFontBoldFamily,[e.AnalyticalTableHeaderActiveTextColor]:o.sapContent_ContrastTextColor,[e.AnalyticalTableHeaderBorderWidth]:"0.188rem",[e.AnalyticalTableOuterBorderInline]:"none"},K={"@global":{[`.${m.inheritingSapScrollBar} *:not([data-native-scrollbar])`]:{"&::-webkit-scrollbar":{backgroundColor:o.sapScrollBar_TrackColor,"&:horizontal":{height:o.sapScrollBar_Dimension},"&:vertical":{width:o.sapScrollBar_Dimension}},"&::-webkit-scrollbar-thumb":{backgroundColor:o.sapScrollBar_FaceColor,borderRadius:"0.25rem","&:hover":{backgroundColor:o.sapScrollBar_Hover_FaceColor},"&:horizontal":{height:o.sapScrollBar_Dimension},"&:vertical":{width:o.sapScrollBar_Dimension}},"&::-webkit-scrollbar-corner":{backgroundColor:o.sapScrollBar_TrackColor}},[`.${m.sapScrollBar}:not([data-native-scrollbar])`]:{"&::-webkit-scrollbar":{backgroundColor:o.sapScrollBar_TrackColor,"&:horizontal":{height:o.sapScrollBar_Dimension},"&:vertical":{width:o.sapScrollBar_Dimension}},"&::-webkit-scrollbar-thumb":{backgroundColor:o.sapScrollBar_FaceColor,borderRadius:"0.25rem","&:hover":{backgroundColor:o.sapScrollBar_Hover_FaceColor},"&:horizontal":{height:o.sapScrollBar_Dimension},"&:vertical":{width:o.sapScrollBar_Dimension}},"&::-webkit-scrollbar-corner":{backgroundColor:o.sapScrollBar_TrackColor}},":root":{extend:[R,G]},["[data-ui5-compact-size], .ui5-content-density-compact, .sapUiSizeCompact"]:{extend:j},'[data-sap-theme="sap_belize"]':z,'[data-sap-theme="sap_belize_hcb"]':E,'[data-sap-theme="sap_belize_hcw"]':I,'[data-sap-theme="sap_fiori_3"]':D,'[data-sap-theme="sap_fiori_3_dark"]':L,'[data-sap-theme="sap_fiori_3_hcb"]':N,'[data-sap-theme="sap_fiori_3_hcw"]':W,'[data-sap-theme="sap_horizon"]':U,'[data-sap-theme="sap_horizon_dark"]':V,'[data-sap-theme="sap_horizon_hcb"]':q,'[data-sap-theme="sap_horizon_hcw"]':J}},Q=x(K,{name:"ThemeProvider"}),S=r=>{const{children:a}=r;return Q(),$(()=>{document.documentElement.setAttribute("data-sap-theme",H());const n=l=>{document.documentElement.setAttribute("data-sap-theme",l)};return w(n),()=>{A(n)}},[]),s(k,{theme:o,children:s(u,{children:s(B,{children:a})})})};S.displayName="ThemeProvider";try{S.displayName="ThemeProvider",S.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch{}export{S as T};
//# sourceMappingURL=index-b69f2a30.js.map
