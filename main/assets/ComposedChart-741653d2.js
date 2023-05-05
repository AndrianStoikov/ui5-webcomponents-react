import{f as B,c as C,d as X,A as te,b as ae,G as re,g as ne,e as q,D as ie,h as oe,B as se,i as le}from"./generateCategoricalChart-d3784237.js";import{u as ue,_ as T,i as D,a as k,b as _,c as ce,d as Z,e as fe}from"./ChartContainer-66d4141c.js";import{i as Y,_ as G,a as I}from"./_baseForOwn-800a0312.js";import{R as d,r as pe}from"./index-ebeaab24.js";import{L as me}from"./Line-01d2d154.js";import{S as he,Z as de}from"./Scatter-de29b5bf.js";import{X as ve,Y as ye}from"./YAxisTicks-02ed21f3.js";var be=["layout","type","stroke","connectNulls","isRange","ref"];function N(e){return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(e)}function Ae(e,t){if(e==null)return{};var n=ge(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ge(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?J(Object(n),!0).forEach(function(r){P(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,U(r.key),r)}}function Oe(e,t,n){return t&&Q(e.prototype,t),n&&Q(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Pe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}function H(e,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},H(e,t)}function Ee(e){var t=we();return function(){var r=F(e),a;if(t){var o=F(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return Se(this,a)}}function Se(e,t){if(t&&(N(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return V(e)}function V(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function we(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},F(e)}function P(e,t,n){return t=U(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e){var t=_e(e,"string");return N(t)==="symbol"?t:String(t)}function _e(e,t){if(N(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(N(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var j=function(e){Pe(n,e);var t=Ee(n);function n(){var r;xe(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),P(V(r),"state",{isAnimationFinished:!0}),P(V(r),"id",ue("recharts-area-")),P(V(r),"handleAnimationEnd",function(){var i=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),Y(i)&&i()}),P(V(r),"handleAnimationStart",function(){var i=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),Y(i)&&i()}),r}return Oe(n,[{key:"renderDots",value:function(a,o){var l=this.props.isAnimationActive,i=this.state.isAnimationFinished;if(l&&!i)return null;var u=this.props,s=u.dot,f=u.points,m=u.dataKey,c=B(this.props),h=B(s,!0),A=f.map(function(v,b){var g=w(w(w({key:"dot-".concat(b),r:3},c),h),{},{dataKey:m,cx:v.x,cy:v.y,index:b,value:v.value,payload:v.payload});return n.renderDotItem(s,g)}),x={clipPath:a?"url(#clipPath-".concat(o,")"):null};return d.createElement(C,L({className:"recharts-area-dots"},x),A)}},{key:"renderHorizontalRect",value:function(a){var o=this.props,l=o.baseLine,i=o.points,u=o.strokeWidth,s=i[0].x,f=i[i.length-1].x,m=a*Math.abs(s-f),c=T(i.map(function(h){return h.y||0}));return D(l)&&typeof l=="number"?c=Math.max(l,c):l&&G(l)&&l.length&&(c=Math.max(T(l.map(function(h){return h.y||0})),c)),D(c)?d.createElement("rect",{x:s<f?s:s-m,y:0,width:m,height:Math.floor(c+(u?parseInt("".concat(u),10):1))}):null}},{key:"renderVerticalRect",value:function(a){var o=this.props,l=o.baseLine,i=o.points,u=o.strokeWidth,s=i[0].y,f=i[i.length-1].y,m=a*Math.abs(s-f),c=T(i.map(function(h){return h.x||0}));return D(l)&&typeof l=="number"?c=Math.max(l,c):l&&G(l)&&l.length&&(c=Math.max(T(l.map(function(h){return h.x||0})),c)),D(c)?d.createElement("rect",{x:0,y:s<f?s:s-m,width:c+(u?parseInt("".concat(u),10):1),height:Math.floor(m)}):null}},{key:"renderClipRect",value:function(a){var o=this.props.layout;return o==="vertical"?this.renderVerticalRect(a):this.renderHorizontalRect(a)}},{key:"renderAreaStatically",value:function(a,o,l,i){var u=this.props,s=u.layout,f=u.type,m=u.stroke,c=u.connectNulls,h=u.isRange;u.ref;var A=Ae(u,be);return d.createElement(C,{clipPath:l?"url(#clipPath-".concat(i,")"):null},d.createElement(X,L({},B(A,!0),{points:a,connectNulls:c,type:f,baseLine:o,layout:s,stroke:"none",className:"recharts-area-area"})),m!=="none"&&d.createElement(X,L({},B(this.props),{className:"recharts-area-curve",layout:s,type:f,connectNulls:c,fill:"none",points:a})),m!=="none"&&h&&d.createElement(X,L({},B(this.props),{className:"recharts-area-curve",layout:s,type:f,connectNulls:c,fill:"none",points:o})))}},{key:"renderAreaWithAnimation",value:function(a,o){var l=this,i=this.props,u=i.points,s=i.baseLine,f=i.isAnimationActive,m=i.animationBegin,c=i.animationDuration,h=i.animationEasing,A=i.animationId,x=this.state,v=x.prevPoints,b=x.prevBaseLine;return d.createElement(te,{begin:m,duration:c,isActive:f,easing:h,from:{t:0},to:{t:1},key:"area-".concat(A),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(g){var p=g.t;if(v){var O=v.length/u.length,S=u.map(function(E,W){var R=Math.floor(W*O);if(v[R]){var M=v[R],$=k(M.x,E.x),K=k(M.y,E.y);return w(w({},E),{},{x:$(p),y:K(p)})}return E}),y;if(D(s)&&typeof s=="number"){var z=k(b,s);y=z(p)}else if(_(s)||ce(s)){var ee=k(b,0);y=ee(p)}else y=s.map(function(E,W){var R=Math.floor(W*O);if(b[R]){var M=b[R],$=k(M.x,E.x),K=k(M.y,E.y);return w(w({},E),{},{x:$(p),y:K(p)})}return E});return l.renderAreaStatically(S,y,a,o)}return d.createElement(C,null,d.createElement("defs",null,d.createElement("clipPath",{id:"animationClipPath-".concat(o)},l.renderClipRect(p))),d.createElement(C,{clipPath:"url(#animationClipPath-".concat(o,")")},l.renderAreaStatically(u,s,a,o)))})}},{key:"renderArea",value:function(a,o){var l=this.props,i=l.points,u=l.baseLine,s=l.isAnimationActive,f=this.state,m=f.prevPoints,c=f.prevBaseLine,h=f.totalLength;return s&&i&&i.length&&(!m&&h>0||!Z(m,i)||!Z(c,u))?this.renderAreaWithAnimation(a,o):this.renderAreaStatically(i,u,a,o)}},{key:"render",value:function(){var a=this.props,o=a.hide,l=a.dot,i=a.points,u=a.className,s=a.top,f=a.left,m=a.xAxis,c=a.yAxis,h=a.width,A=a.height,x=a.isAnimationActive,v=a.id;if(o||!i||!i.length)return null;var b=this.state.isAnimationFinished,g=i.length===1,p=fe("recharts-area",u),O=m&&m.allowDataOverflow||c&&c.allowDataOverflow,S=_(v)?this.id:v;return d.createElement(C,{className:p},O?d.createElement("defs",null,d.createElement("clipPath",{id:"clipPath-".concat(S)},d.createElement("rect",{x:f,y:s,width:h,height:Math.floor(A)}))):null,g?null:this.renderArea(O,S),(l||g)&&this.renderDots(O,S),(!x||b)&&ae.renderCallByParent(this.props,i))}}],[{key:"getDerivedStateFromProps",value:function(a,o){return a.animationId!==o.prevAnimationId?{prevAnimationId:a.animationId,curPoints:a.points,curBaseLine:a.baseLine,prevPoints:o.curPoints,prevBaseLine:o.curBaseLine}:a.points!==o.curPoints||a.baseLine!==o.curBaseLine?{curPoints:a.points,curBaseLine:a.baseLine}:null}}]),n}(pe.PureComponent);P(j,"displayName","Area");P(j,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!re.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});P(j,"getBaseValue",function(e,t,n,r){var a=e.layout,o=e.baseValue,l=t.props.baseValue,i=l??o;if(D(i)&&typeof i=="number")return i;var u=a==="horizontal"?r:n,s=u.scale.domain();if(u.type==="number"){var f=Math.max(s[0],s[1]),m=Math.min(s[0],s[1]);return i==="dataMin"?m:i==="dataMax"||f<0?f:Math.max(Math.min(s[0],s[1]),0)}return i==="dataMin"?s[0]:i==="dataMax"?s[1]:s[0]});P(j,"getComposedData",function(e){var t=e.props,n=e.item,r=e.xAxis,a=e.yAxis,o=e.xAxisTicks,l=e.yAxisTicks,i=e.bandSize,u=e.dataKey,s=e.stackedData,f=e.dataStartIndex,m=e.displayedData,c=e.offset,h=t.layout,A=s&&s.length,x=j.getBaseValue(t,n,r,a),v=!1,b=m.map(function(p,O){var S=ne(p,u),y;A?y=s[f+O]:(y=S,G(y)?v=!0:y=[x,y]);var z=_(y[1])||A&&_(S);return h==="horizontal"?{x:q({axis:r,ticks:o,bandSize:i,entry:p,index:O}),y:z?null:a.scale(y[1]),value:y,payload:p}:{x:z?null:r.scale(y[1]),y:q({axis:a,ticks:l,bandSize:i,entry:p,index:O}),value:y,payload:p}}),g;return A||v?g=b.map(function(p){return h==="horizontal"?{x:p.x,y:!_(I(p,"value[0]"))&&!_(I(p,"y"))?a.scale(I(p,"value[0]")):null}:{x:_(I(p,"value[0]"))?null:r.scale(I(p,"value[0]")),y:p.y}}):h==="horizontal"?g=a.scale(x):g=r.scale(x),w({points:b,baseLine:g,layout:h,isRange:v},c)});P(j,"renderDotItem",function(e,t){var n;return d.isValidElement(e)?n=d.cloneElement(e,t):Y(e)?n=e(t):n=d.createElement(ie,L({},t,{className:"recharts-area-dot"})),n});var Be=oe({chartName:"ComposedChart",GraphicalChild:[me,j,se,he],axisComponents:[{axisType:"xAxis",AxisComp:ve},{axisType:"yAxis",AxisComp:ye},{axisType:"zAxis",AxisComp:de}],formatAxisMap:le});export{j as A,Be as C};
//# sourceMappingURL=ComposedChart-741653d2.js.map
