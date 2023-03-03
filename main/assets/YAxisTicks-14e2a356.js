import{i as V}from"./_baseForOwn-c7d9bea5.js";import{R as m,r as w}from"./index-f1f749bf.js";import{i as P}from"./ChartContainer-4f7b200f.js";import{f as M}from"./generateCategoricalChart-a8e23c26.js";import{d as W}from"./debounce-5c77766a.js";import{j as A}from"./jsx-runtime-670450c2.js";import{T as L}from"./ThemingParameters-f4b4144e.js";import{t as E,b as j}from"./useTooltipFormatter-9773d8b0.js";import{a as T}from"./defaults-a20972b4.js";var B=["x1","y1","x2","y2","key"];function x(e){return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(e)}function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},z.apply(this,arguments)}function G(e,t){if(e==null)return{};var i=K(e,t),n,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function K(e,t){if(e==null)return{};var i={},n=Object.keys(e),r,a;for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&(i[r]=e[r]);return i}function H(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),i.push.apply(i,n)}return i}function k(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?H(Object(i),!0).forEach(function(n){N(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):H(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,R(n.key),n)}}function Q(e,t,i){return t&&I(e.prototype,t),i&&I(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function U(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},C(e,t)}function Z(e){var t=re();return function(){var n=S(e),r;if(t){var a=S(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return ee(this,r)}}function ee(e,t){if(t&&(x(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return te(e)}function te(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},S(e)}function N(e,t,i){return t=R(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function R(e){var t=ne(e,"string");return x(t)==="symbol"?t:String(t)}function ne(e,t){if(x(e)!=="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t||"default");if(x(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var F=function(e){U(i,e);var t=Z(i);function i(){return J(this,i),t.apply(this,arguments)}return Q(i,[{key:"renderHorizontal",value:function(r){var a=this,o=this.props,s=o.x,u=o.width,c=o.horizontal;if(!r||!r.length)return null;var f=r.map(function(d,l){var h=k(k({},a.props),{},{x1:s,y1:d,x2:s+u,y2:d,key:"line-".concat(l),index:l});return i.renderLineItem(c,h)});return m.createElement("g",{className:"recharts-cartesian-grid-horizontal"},f)}},{key:"renderVertical",value:function(r){var a=this,o=this.props,s=o.y,u=o.height,c=o.vertical;if(!r||!r.length)return null;var f=r.map(function(d,l){var h=k(k({},a.props),{},{x1:d,y1:s,x2:d,y2:s+u,key:"line-".concat(l),index:l});return i.renderLineItem(c,h)});return m.createElement("g",{className:"recharts-cartesian-grid-vertical"},f)}},{key:"renderVerticalStripes",value:function(r){var a=this.props.verticalFill;if(!a||!a.length)return null;var o=this.props,s=o.fillOpacity,u=o.x,c=o.y,f=o.width,d=o.height,l=r.map(function(p){return Math.round(p+u-u)}).sort(function(p,y){return p-y});u!==l[0]&&l.unshift(0);var h=l.map(function(p,y){var g=!l[y+1],v=g?u+f-p:l[y+1]-p;if(v<=0)return null;var b=y%a.length;return m.createElement("rect",{key:"react-".concat(y),x:p,y:c,width:v,height:d,stroke:"none",fill:a[b],fillOpacity:s,className:"recharts-cartesian-grid-bg"})});return m.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},h)}},{key:"renderHorizontalStripes",value:function(r){var a=this.props.horizontalFill;if(!a||!a.length)return null;var o=this.props,s=o.fillOpacity,u=o.x,c=o.y,f=o.width,d=o.height,l=r.map(function(p){return Math.round(p+c-c)}).sort(function(p,y){return p-y});c!==l[0]&&l.unshift(0);var h=l.map(function(p,y){var g=!l[y+1],v=g?c+d-p:l[y+1]-p;if(v<=0)return null;var b=y%a.length;return m.createElement("rect",{key:"react-".concat(y),y:p,x:u,height:v,width:f,stroke:"none",fill:a[b],fillOpacity:s,className:"recharts-cartesian-grid-bg"})});return m.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},h)}},{key:"renderBackground",value:function(){var r=this.props.fill;if(!r||r==="none")return null;var a=this.props,o=a.fillOpacity,s=a.x,u=a.y,c=a.width,f=a.height;return m.createElement("rect",{x:s,y:u,width:c,height:f,stroke:"none",fill:r,fillOpacity:o,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var r=this.props,a=r.x,o=r.y,s=r.width,u=r.height,c=r.horizontal,f=r.vertical,d=r.horizontalCoordinatesGenerator,l=r.verticalCoordinatesGenerator,h=r.xAxis,p=r.yAxis,y=r.offset,g=r.chartWidth,v=r.chartHeight;if(!P(s)||s<=0||!P(u)||u<=0||!P(a)||a!==+a||!P(o)||o!==+o)return null;var b=this.props,O=b.horizontalPoints,_=b.verticalPoints;return(!O||!O.length)&&V(d)&&(O=d({yAxis:p,width:g,height:v,offset:y})),(!_||!_.length)&&V(l)&&(_=l({xAxis:h,width:g,height:v,offset:y})),m.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),c&&this.renderHorizontal(O),f&&this.renderVertical(_),c&&this.renderHorizontalStripes(O),f&&this.renderVerticalStripes(_))}}],[{key:"renderLineItem",value:function(r,a){var o;if(m.isValidElement(r))o=m.cloneElement(r,a);else if(V(r))o=r(a);else{var s=a.x1,u=a.y1,c=a.x2,f=a.y2,d=a.key,l=G(a,B);o=m.createElement("line",z({},M(l),{x1:s,y1:u,x2:c,y2:f,fill:"none",key:d}))}return o}}]),i}(w.PureComponent);N(F,"displayName","CartesianGrid");N(F,"defaultProps",{horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]});var X=function(){return null};X.displayName="XAxis";X.defaultProps={allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",domain:[0,"auto"],padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0};var Y=function(){return null};Y.displayName="YAxis";Y.defaultProps={allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",domain:[0,"auto"],padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1};const pe=(e,t)=>w.useMemo(()=>({right:(e==null?void 0:e.right)??30,top:(e==null?void 0:e.top)??t?40:20,bottom:(e==null?void 0:e.bottom)??20,left:(e==null?void 0:e.left)??10}),[e,t]),q=30,he=(e,t)=>{const[i,n]=w.useState(Array(t).fill(q)),r=w.useRef(i);return w.useEffect(()=>{const a=W(()=>{var f;const s=Array(t).fill(q);(f=e.current)==null||f.querySelectorAll(".xAxis").forEach((d,l)=>{var p;const h=(p=d==null?void 0:d.getBBox())==null?void 0:p.height;h>30&&(s[l]=h)});const u=r.current.length===s.length,c=r.current.every((d,l)=>s[l]===d);u&&c||(r.current=s,n(s))},75),o=new MutationObserver(a);return e.current&&o.observe(e.current,{characterData:!1,characterDataOldValue:!1,attributes:!1,childList:!0,subtree:!0}),()=>{a.cancel(),o.disconnect()}},[e,n,r]),i},D=e=>{const{x:t,y:i,payload:n,config:r,visibleTicksCount:a,width:o,secondYAxisConfig:s,tickFormatter:u,index:c}=e,f=o/a,d=f<=100,l=(u==null?void 0:u(n.value,c))??r.formatter(n.value);let h=l;if(d)h=E(l,11);else if(j(l)>f)for(let p=`${l}`.length;p>0&&(h=E(l,p),!(j(h)<=f));p--);return A("g",{style:{direction:"ltr"},transform:`translate(${t},${i+(s?0:10)})`,children:A("text",{fill:(s==null?void 0:s.color)??L.sapContent_LabelColor,transform:d?"rotate(-35)":void 0,textAnchor:d?"end":"middle",children:h})})};try{D.displayName="XAxisTicks",D.__docgenInfo={description:"",displayName:"XAxisTicks",props:{visibleTicksCount:{defaultValue:null,description:"",name:"visibleTicksCount",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},payload:{defaultValue:null,description:"",name:"payload",required:!1,type:{name:"any"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},secondYAxisConfig:{defaultValue:null,description:"",name:"secondYAxisConfig",required:!1,type:{name:"{ color: string; }"}},tickFormatter:{defaultValue:null,description:"",name:"tickFormatter",required:!1,type:{name:"(value: any, index: number) => string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}const $=e=>{const{x:t,y:i,payload:n,config:r,secondYAxisConfig:a,tickFormatter:o,index:s}=e,u=(o==null?void 0:o(n.value,s))??r.formatter(n.value);let c=u;if(j(u)>T)for(let f=`${u}`.length;f>0&&(c=E(u,f),!(j(c)<=T));f--);return A("g",{transform:`translate(${t},${i+3})`,children:A("text",{fill:(a==null?void 0:a.color)??L.sapContent_LabelColor,textAnchor:a?"start":"end",children:c})})};try{$.displayName="YAxisTicks",$.__docgenInfo={description:"",displayName:"YAxisTicks",props:{x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},payload:{defaultValue:null,description:"",name:"payload",required:!1,type:{name:"any"}},config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},secondYAxisConfig:{defaultValue:null,description:"",name:"secondYAxisConfig",required:!1,type:{name:"{ color: string; }"}},tickFormatter:{defaultValue:null,description:"",name:"tickFormatter",required:!1,type:{name:"(value: any, index: number) => string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}}}catch{}export{F as C,X,Y,he as a,$ as b,D as c,pe as u};
//# sourceMappingURL=YAxisTicks-14e2a356.js.map
