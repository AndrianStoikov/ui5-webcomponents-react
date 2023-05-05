import{j as t}from"./jsx-runtime-5926aa06.js";import{T as y}from"./ThemingParameters-7e2e4e30.js";import{e as N}from"./index-99d317a4.js";import{r as E}from"./index-ebeaab24.js";import{g as fe,d as H}from"./defaults-81ac43f8.js";import{u as ye,a as be,C as xe,Y as j,b as _,X as L,c as P}from"./YAxisTicks-02ed21f3.js";import{u as Ce,C as W}from"./ChartDataLabel-8c953433.js";import{u as ve,t as Ae,a as we,b as ke}from"./staticProps-411b051b.js";import{u as je}from"./useLongestYAxisLabel-f14e7542.js";import{u as _e}from"./useOnClickInternal-c48662e6.js";import{u as Le,a as Pe,r as Ve,g as B}from"./useTooltipFormatter-c7af61f1.js";import{C as ze}from"./ChartContainer-66d4141c.js";import{C as Ie}from"./react-content-loader.es-627d673d.js";import{C as Te,A as Ye}from"./ComposedChart-741653d2.js";import{R as De,T as Se,L as qe,b as Ke,C as Oe,a as Re,B as Fe}from"./generateCategoricalChart-d3784237.js";import{L as Ne}from"./Line-01d2d154.js";import{u as Ee}from"./withWebComponent-d61dcbbc.js";import{u as We}from"./debounce-4aacbef8.js";const Be=t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"20",y:"20",width:"85",height:"15"}),t.jsx("rect",{x:"20",y:"40",width:"117",height:"15"}),t.jsx("rect",{x:"20",y:"60",width:"67",height:"15"}),t.jsx("rect",{x:"20",y:"80",width:"75",height:"15"}),t.jsx("rect",{x:"20",y:"100",width:"125",height:"15"}),t.jsx("rect",{x:"20",y:"120",width:"60",height:"15"})]}),He=t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),t.jsx("rect",{x:"40",y:"18",width:"15",height:"117"}),t.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),t.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),t.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),t.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]}),Me=t.jsx(t.Fragment,{children:t.jsx("path",{d:"M20 20 L75 40 L85 60 L125 80 L105 100 L90 120 L55 135 L92 120 L107 100 L127 80 L87 60 L77 40 L22 20 Z",fill:"none",strokeWidth:"2"})}),$e=t.jsx(t.Fragment,{children:t.jsx("path",{d:"M20 135 L40 80 L60 70 L80 30 L100 50 L120 65 L135 100 L120 67 L100 52 L80 32 L60 72 L40 82 L20 137 Z",fill:"none",strokeWidth:"2"})}),V=({layout:n,measures:A})=>{const h=new Set(A.map(c=>c.type));return t.jsxs(Ie,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:y.sapContent_ImagePlaceholderBackground,foregroundColor:y.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:y.sapContent_DisabledOpacity,children:[n==="vertical"&&t.jsx("rect",{x:"20",y:"10",width:"1",height:"135"}),n==="horizontal"&&t.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),n==="vertical"&&h.has("bar")&&Be,n==="horizontal"&&h.has("bar")&&He,n==="vertical"&&(h.has("line")||h.has("area"))&&Me,n==="horizontal"&&(h.has("line")||h.has("area"))&&$e]})};try{V.displayName="ComposedChartPlaceholder",V.__docgenInfo={description:"",displayName:"ComposedChartPlaceholder",props:{layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},measures:{defaultValue:null,description:"",name:"measures",required:!0,type:{name:"(IChartMeasure & { type: string; })[]"}}}}}catch{}const Xe={formatter:H},Ue={formatter:H,opacity:1},Ze={line:Ne,bar:Fe,area:Ye},v=E.forwardRef((n,A)=>{var S,q,K;const{loading:h,dataset:c,onDataPointClick:b,noLegend:M,noAnimation:$,tooltipConfig:x,onLegendClick:X,onClick:z,layout:r,style:U,className:Z,slot:G,syncId:J,ChartPlaceholder:Q,children:ee,...te}=n,[ae,I]=Ee(A),a={yAxisLabelsVisible:!0,yAxisVisible:!1,xAxisVisible:!0,gridStroke:y.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,yAxisWidth:null,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},secondXAxisConfig:{},...n.chartConfig},{referenceLine:i}=a,{dimensions:w,measures:d}=Le(n.dimensions,n.measures,Xe,Ue),oe=Pe(d),u=w[0],{primaryMeasure:g,secondaryMeasure:T}=Ve(d,(S=a==null?void 0:a.secondYAxis)==null?void 0:S.dataKey),ie=Ce(u),se=d.map(({accessor:e})=>e),m=a.secondYAxis?se.findIndex(e=>{var s;return e===((s=a.secondYAxis)==null?void 0:s.dataKey)}):0,re=e=>({payload:s})=>fe(s,e),k=(e,s,p)=>{if(typeof b=="function")if(typeof s=="number"){const o=Array.isArray(e==null?void 0:e.value);b(N(p,{value:o?e.value[1]-e.value[0]:e.value,dataIndex:e.index??s,dataKey:o?Object.keys(e).filter(l=>e.value.length?e[l]===e.value[1]-e.value[0]:e[l]===e.value&&l!=="value")[0]:e.dataKey??Object.keys(e).find(l=>e[l]&&e[l]===e.value&&l!=="value"),payload:e.payload}))}else b(N({},{value:Array.isArray(s.value)?s.value[1]-s.value[0]:s.value,dataKey:s.dataKey,dataIndex:s.index,payload:s.payload}))},ne=ve(X),le=_e(z),C=(c==null?void 0:c.length)>30,ce=u==null?void 0:u.accessor,[Y,de]=je(c,r==="vertical"?w:d),he=ye(a.margin,a.zoomingTool),ue=be(I,r==="vertical"?1:n.dimensions.length),D={axisLine:a.yAxisVisible,tickLine:Ae,tickFormatter:g==null?void 0:g.formatter,interval:0},pe=E.useCallback(()=>t.jsx(V,{layout:r,measures:d}),[r,d]),{chartConfig:Ge,dimensions:Je,measures:Qe,...me}=te,f=We(I);return t.jsx(ze,{ref:ae,loading:h,dataset:c,Placeholder:Q??pe,style:U,className:Z,slot:G,resizeDebounce:a.resizeDebounce,...me,children:t.jsxs(Te,{syncId:J,onClick:le,stackOffset:"sign",margin:he,data:c,layout:r,className:typeof b=="function"||typeof z=="function"?"has-click-handler":void 0,children:[t.jsx(xe,{vertical:a.gridVertical,horizontal:a.gridHorizontal,stroke:a.gridStroke}),w.map((e,s)=>{let p;const o={dataKey:e.accessor,interval:(e==null?void 0:e.interval)??(C?"preserveStart":0),tickLine:s<1,axisLine:s<1,allowDuplicatedCategory:s===0};return r==="vertical"?(o.type="category",o.visible=!1,o.hide=!a.yAxisVisible,o.tick=t.jsx(_,{config:e}),o.yAxisId=s,o.width=a.yAxisWidth??Y,p=j,o.orientation=f?"right":"left"):(o.dataKey=e.accessor,o.tick=t.jsx(P,{config:e}),o.hide=!a.xAxisVisible,o.xAxisId=s,o.height=ue[s],p=L,o.reversed=f),t.jsx(p,{...o},e.accessor)}),r==="horizontal"&&t.jsx(j,{...D,yAxisId:"primary",width:a.yAxisWidth??Y,orientation:f?"right":"left",tick:a.yAxisLabelsVisible?t.jsx(_,{config:g}):!1,...a.yAxisConfig}),r==="vertical"&&t.jsx(L,{...D,reversed:f,xAxisId:"primary",type:"number",tick:t.jsx(P,{config:g}),...a.xAxisConfig}),((q=a.secondYAxis)==null?void 0:q.dataKey)&&r==="horizontal"&&t.jsx(j,{dataKey:a.secondYAxis.dataKey,axisLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${m%11+1})`},tick:t.jsx(_,{config:T,secondYAxisConfig:{color:a.secondYAxis.color??`var(--sapChart_OrderedColor_${m%11+1})`}}),tickLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${m%11+1})`},label:{value:a.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:f?"left":"right",interval:0,yAxisId:"secondary",...a.secondYAxisConfig}),((K=a.secondYAxis)==null?void 0:K.dataKey)&&r==="vertical"&&t.jsx(L,{dataKey:a.secondYAxis.dataKey,axisLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${m%11+1})`},tick:t.jsx(P,{config:T,secondYAxisConfig:{color:a.secondYAxis.color??`var(--sapChart_OrderedColor_${m%11+1})`}}),tickLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${m%11+1})`},label:{value:a.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...a.secondXAxisConfig}),i&&t.jsx(De,{...i,stroke:(i==null?void 0:i.color)??(i==null?void 0:i.stroke),y:i!=null&&i.value?r==="horizontal"?i==null?void 0:i.value:void 0:i==null?void 0:i.y,x:i!=null&&i.value?r==="vertical"?i==null?void 0:i.value:void 0:i==null?void 0:i.x,yAxisId:(i==null?void 0:i.yAxisId)??r==="horizontal"?"primary":void 0,xAxisId:(i==null?void 0:i.xAxisId)??r==="vertical"?"primary":void 0,label:i==null?void 0:i.label}),(x==null?void 0:x.active)!==!1&&t.jsx(Se,{cursor:we,formatter:oe,contentStyle:ke,labelFormatter:ie,...x}),!M&&t.jsx(qe,{verticalAlign:a.legendPosition,align:a.legendHorizontalAlign,onClick:ne,wrapperStyle:de}),d==null?void 0:d.map((e,s)=>{var O,R;const p=Ze[e.type],o={isAnimationActive:$===!1};let l="top";switch(e.type){case"line":o.activeDot={onClick:k},o.strokeWidth=e.width,o.strokeOpacity=e.opacity,o.dot=e.showDot??!C;break;case"bar":o.hide=e.hide,o.fillOpacity=e.opacity,o.strokeOpacity=e.opacity,o.barSize=e.width,o.onClick=k,o.stackId=e.stackId??void 0,o.labelPosition=e.stackId?"insideTop":"top",r==="vertical"?l="insideRight":l="insideTop";break;case"area":o.dot=!C,o.fillOpacity=.3,o.strokeOpacity=e.opacity,o.strokeWidth=e.width,o.activeDot={onClick:k};break}return r==="vertical"?o.xAxisId=((O=a.secondYAxis)==null?void 0:O.dataKey)===e.accessor?"secondary":"primary":o.yAxisId=((R=a.secondYAxis)==null?void 0:R.dataKey)===e.accessor?"secondary":"primary",t.jsx(p,{name:e.label??e.accessor,label:e.type==="bar"||C?void 0:t.jsx(W,{config:e,chartType:e.type,position:l}),stroke:e.color??`var(--sapChart_OrderedColor_${s%11+1})`,fill:e.color??`var(--sapChart_OrderedColor_${s%11+1})`,type:"monotone",dataKey:e.accessor,...o,children:e.type==="bar"&&t.jsxs(t.Fragment,{children:[t.jsx(Ke,{data:c,valueAccessor:re(e.accessor),content:t.jsx(W,{config:e,chartType:"column",position:"insideTop"})}),c.map((F,ge)=>t.jsx(Oe,{fill:B(e,F,s),stroke:B(e,F,s)},ge))]})},e.accessor)}),a.zoomingTool&&t.jsx(Re,{y:10,dataKey:ce,tickFormatter:u==null?void 0:u.formatter,stroke:y.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),ee]})})});v.defaultProps={noLegend:!1,noAnimation:!1,layout:"horizontal"};v.displayName="ComposedChart";try{v.displayName="ComposedChart",v.__docgenInfo={description:"The `ComposedChart` enables you to combine different chart types in one chart, e.g. showing bars together with lines.",displayName:"ComposedChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one element in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this element should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n- `type`: string which chart element to show. Possible values: `line`, `bar`, `area`.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this element.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: width of the current chart element, defaults to `1` for `lines` and `20` for bars\n- `opacity`: element opacity, defaults to `1`\n- `stackId`: bars with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},layout:{defaultValue:{value:"horizontal"},description:"layout for showing measures. `horizontal` bars would equal the column chart, `vertical` would be a bar chart.\nDefault Value: `horizontal`",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Position of the legend. Can be one of the following: `"top"`, `"left"`, `"right"`, `"bottom"`\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"ICartesianChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"Props<string | number | (string | number)[], string | number> & { allowEscapeViewBox?: { x?: boolean; y?: boolean; }; reverseDirection?: { x?: boolean; y?: boolean; }; content?: ContentType<string | number | (string | number)[], string | number>; ... 14 more ...; useTranslate3d?: boolean; }"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{v as C};
//# sourceMappingURL=index-c6a95cd8.js.map
