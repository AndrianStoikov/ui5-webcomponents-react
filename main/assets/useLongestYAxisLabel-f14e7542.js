import{r as i}from"./index-ebeaab24.js";import{g as l,a as n}from"./defaults-81ac43f8.js";import{b as p}from"./useTooltipFormatter-c7af61f1.js";const u=(r,t)=>i.useMemo(()=>{let a=0;const e=t[0];if(r instanceof Array&&e){const o=s=>t.map(m=>e.formatter(l(s,m.accessor,"")));a=Math.max(...r.map(o).flat().map(p)),a+=8}return a=Math.min(a,n),[a,{marginLeft:a,maxWidth:`calc(100% - ${a+10}px)`}]},[r,t]);export{u};
//# sourceMappingURL=useLongestYAxisLabel-f14e7542.js.map
