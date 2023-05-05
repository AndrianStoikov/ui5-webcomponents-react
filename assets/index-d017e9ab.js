import{j as m}from"./jsx-runtime-5926aa06.js";import{i as d,a as f,s as h,e as b}from"./information-b4bc7d32.js";import{T as t}from"./ThemingParameters-7e2e4e30.js";import{c as y}from"./clsx.m-1229b3e0.js";import{r as g}from"./index-ebeaab24.js";import{c as _}from"./react-jss.esm-022ab528.js";import{V as o}from"./ValueState-ab6838cc.js";import{B as v}from"./index-4bff5299.js";const w=Object.values(o).reduce((a,s)=>{let e;switch(s){case o.Error:e="Negative";break;case o.Success:e="Success";break;case o.Warning:e="Critical";break;default:e="Neutral"}const n=`&[data-type="${s}"]`,r=`&[data-type="${s}"]:hover`,i=`&[data-type="${s}"]:active`;return{...a,[n]:{color:t[`sapButton_${e}_TextColor`],background:t[`sapButton_${e}_Background`],borderColor:t[`sapButton_${e}_BorderColor`]},[r]:{color:t[`sapButton_${e}_Hover_TextColor`],background:t[`sapButton_${e}_Hover_Background`],borderColor:t[`sapButton_${e}_Hover_BorderColor`]},[i]:{color:t[`sapButton_${e}_Active_TextColor`],background:t[`sapButton_${e}_Active_Background`],borderColor:t[`sapButton_${e}_Active_BorderColor`]}}},{}),B=_({btn:{...w}},{name:"MessageViewButtonStyles"}),N=a=>{switch(a){case o.Error:return b;case o.Success:return h;case o.Warning:return f;default:return d}},l=g.forwardRef((a,s)=>{const{type:e=o.Error,counter:n,className:r,...i}=a,c=B(),u=y(c.btn,r),p=N(e);return m.jsx(v,{ref:s,className:u,icon:p,...i,"data-type":e,children:n>1&&n})});l.displayName="MessageViewButton";try{l.displayName="MessageViewButton",l.__docgenInfo={description:"The `MessageViewButton` can be used for opening a `Popover` containing the `MessageView` component. It should always reflect the message `type` with the highest severity.",displayName:"MessageViewButton",props:{type:{defaultValue:null,description:"Specifies the type of the button.",name:"type",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Success"'}]}},counter:{defaultValue:null,description:`Defines the number of messages for a given message type.

__Note:__ Numbers smaller than 2 are not displayed.`,name:"counter",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"submits",required:!1,type:{name:"boolean"}}}}}catch{}export{l as M};
//# sourceMappingURL=index-d017e9ab.js.map
