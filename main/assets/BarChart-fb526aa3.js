import{j as o}from"./jsx-runtime-5926aa06.js";import{T as S}from"./ThemingParameters-7e2e4e30.js";import{e as ie}from"./index-99d317a4.js";import{r as A}from"./index-ebeaab24.js";import{a as se,g as T,d as B}from"./defaults-81ac43f8.js";import{u as le,B as ce}from"./useCancelAnimationFallback-2508a77d.js";import{u as de,a as he,C as ue,X as V,c as D,Y as pe,b as me}from"./YAxisTicks-02ed21f3.js";import{u as fe,C as ge}from"./ChartDataLabel-8c953433.js";import{u as be,t as ye,a as Ce,b as xe}from"./staticProps-411b051b.js";import{b as ve,u as ke,a as Ae,r as we,g as I}from"./useTooltipFormatter-c7af61f1.js";import{u as je}from"./useOnClickInternal-c48662e6.js";import{C as Le}from"./ChartContainer-66d4141c.js";import{B as _e}from"./Placeholder-0503e054.js";import{B as Pe,b as Se,C as Ve,L as De,R as Ie,T as Te,a as Be}from"./generateCategoricalChart-d3784237.js";import{u as ze}from"./withWebComponent-d61dcbbc.js";import{u as qe}from"./debounce-4aacbef8.js";const Oe=(s,c)=>A.useMemo(()=>{let d=Array(c.length).fill(0),r=0;if(s instanceof Array&&c){const y=i=>c.map(l=>l.formatter(T(i,l.accessor,"")));s.map(y).forEach(i=>{i.forEach((l,u)=>{d[u]=Math.max(ve(l),d[u])})}),d=d.map(i=>Math.min(se,i)),r=d.reduce((i,l)=>i+l,0)}return[d,{marginLeft:r,maxWidth:`calc(100% - ${r+8}px)`}]},[s,c]),Ye={formatter:B},Re={formatter:B,opacity:1},Ee=s=>({payload:c})=>T(c,s),b=A.forwardRef((s,c)=>{var _,P;const{loading:d,dataset:r,noLegend:y,noAnimation:C,tooltipConfig:i,onDataPointClick:l,onLegendClick:u,onClick:w,style:z,className:q,slot:O,syncId:Y,ChartPlaceholder:R,children:E,...F}=s,t={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:S.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...s.chartConfig},a=t.referenceLine,{dimensions:x,measures:p}=ke(s.dimensions,s.measures,Ye,Re),N=Ae(p),h=x[0],{primaryMeasure:m,secondaryMeasure:K}=we(p,(_=t==null?void 0:t.secondYAxis)==null?void 0:_.dataKey),M=p.map(({accessor:e})=>e),v=t.secondYAxis?M.findIndex(e=>{var n;return e===((n=t.secondYAxis)==null?void 0:n.dataKey)}):0,[H,j]=ze(c),W=be(u),$=fe(h),X=A.useCallback((e,n,f)=>{if(e&&l){const g=e.value.length?e.value[1]-e.value[0]:e.value;l(ie(f,{dataKey:Object.keys(e).filter(k=>k!=="value").find(k=>e[k]===g),value:g,payload:e.payload,dataIndex:n}))}},[l]),G=je(w),U=(r==null?void 0:r.length)>30,J=h==null?void 0:h.accessor,[Q,Z]=Oe(r,x),ee=de(t.margin,t.zoomingTool),[te]=he(j,1),L=qe(j),{isMounted:ae,handleBarAnimationStart:oe,handleBarAnimationEnd:ne}=le(C),{chartConfig:Fe,dimensions:Ne,measures:Ke,...re}=F;return o.jsx(Le,{dataset:r,loading:d,Placeholder:R??_e,ref:H,style:z,className:q,slot:O,resizeDebounce:t.resizeDebounce,...re,children:o.jsxs(ce,{syncId:Y,onClick:G,stackOffset:"sign",margin:ee,layout:"vertical",data:r,barGap:t.barGap,className:typeof l=="function"||typeof w=="function"?"has-click-handler":void 0,children:[o.jsx(ue,{vertical:t.gridVertical,horizontal:t.gridHorizontal,stroke:t.gridStroke}),t.xAxisVisible&&o.jsx(V,{interval:0,type:"number",tick:o.jsx(D,{config:m}),axisLine:t.xAxisVisible,tickLine:ye,tickFormatter:m==null?void 0:m.formatter,height:te,reversed:L,...t.xAxisConfig}),((P=t.secondYAxis)==null?void 0:P.dataKey)&&o.jsx(V,{dataKey:t.secondYAxis.dataKey,axisLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${v%11+1})`},tick:o.jsx(D,{config:K,secondYAxisConfig:{color:t.secondYAxis.color??`var(--sapChart_OrderedColor_${v%11+1})`}}),tickLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${v%11+1})`},label:{value:t.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...t.secondXAxisConfig}),t.yAxisVisible&&x.map((e,n)=>o.jsx(pe,{interval:(e==null?void 0:e.interval)??(U?"preserveStart":0),type:"category",dataKey:e.accessor,tick:o.jsx(me,{config:e}),tickLine:n<1,axisLine:n<1,yAxisId:n,width:Q[n],allowDuplicatedCategory:n===0,orientation:L?"right":"left",...t.yAxisConfig},e.accessor)),ae&&p.map((e,n)=>o.jsxs(Pe,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${n%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${n%11+1})`,barSize:e.width,onClick:X,isAnimationActive:C===!1,onAnimationStart:oe,onAnimationEnd:ne,children:[o.jsx(Se,{data:r,valueAccessor:Ee(e.accessor),content:o.jsx(ge,{config:e,chartType:"bar",position:"insideRight"})}),r.map((f,g)=>o.jsx(Ve,{fill:I(e,f,n),stroke:I(e,f,n)},g))]},e.accessor)),!y&&o.jsx(De,{verticalAlign:t.legendPosition,align:t.legendHorizontalAlign,onClick:W,wrapperStyle:Z}),a&&o.jsx(Ie,{...a,stroke:(a==null?void 0:a.color)??(a==null?void 0:a.stroke),x:(a==null?void 0:a.value)??(a==null?void 0:a.x),label:a==null?void 0:a.label}),(i==null?void 0:i.active)!==!1&&o.jsx(Te,{cursor:Ce,formatter:N,contentStyle:xe,labelFormatter:$,...i}),t.zoomingTool&&o.jsx(Be,{y:10,dataKey:J,tickFormatter:h==null?void 0:h.formatter,stroke:S.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),E]})})});b.defaultProps={noLegend:!1,noAnimation:!1};b.displayName="BarChart";try{b.displayName="BarChart",b.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: bar width, defaults to `auto`\n- `opacity`: bar opacity, defaults to `1`\n- `stackId`: bars with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Position of the legend. Can be one of the following: `"top"`, `"left"`, `"right"`, `"bottom"`\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"ICartesianChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"Props<string | number | (string | number)[], string | number> & { allowEscapeViewBox?: { x?: boolean; y?: boolean; }; reverseDirection?: { x?: boolean; y?: boolean; }; content?: ContentType<string | number | (string | number)[], string | number>; ... 14 more ...; useTranslate3d?: boolean; }"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{b as B};
//# sourceMappingURL=BarChart-fb526aa3.js.map
