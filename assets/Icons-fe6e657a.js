import{g as I,k as N,l as _}from"./UI5Element-427ec721.js";var r;(function(a){a[a.BACKSPACE=8]="BACKSPACE",a[a.TAB=9]="TAB",a[a.ENTER=13]="ENTER",a[a.SHIFT=16]="SHIFT",a[a.CONTROL=17]="CONTROL",a[a.ALT=18]="ALT",a[a.BREAK=19]="BREAK",a[a.CAPS_LOCK=20]="CAPS_LOCK",a[a.ESCAPE=27]="ESCAPE",a[a.SPACE=32]="SPACE",a[a.PAGE_UP=33]="PAGE_UP",a[a.PAGE_DOWN=34]="PAGE_DOWN",a[a.END=35]="END",a[a.HOME=36]="HOME",a[a.ARROW_LEFT=37]="ARROW_LEFT",a[a.ARROW_UP=38]="ARROW_UP",a[a.ARROW_RIGHT=39]="ARROW_RIGHT",a[a.ARROW_DOWN=40]="ARROW_DOWN",a[a.PRINT=44]="PRINT",a[a.INSERT=45]="INSERT",a[a.DELETE=46]="DELETE",a[a.DIGIT_0=48]="DIGIT_0",a[a.DIGIT_1=49]="DIGIT_1",a[a.DIGIT_2=50]="DIGIT_2",a[a.DIGIT_3=51]="DIGIT_3",a[a.DIGIT_4=52]="DIGIT_4",a[a.DIGIT_5=53]="DIGIT_5",a[a.DIGIT_6=54]="DIGIT_6",a[a.DIGIT_7=55]="DIGIT_7",a[a.DIGIT_8=56]="DIGIT_8",a[a.DIGIT_9=57]="DIGIT_9",a[a.A=65]="A",a[a.B=66]="B",a[a.C=67]="C",a[a.D=68]="D",a[a.E=69]="E",a[a.F=70]="F",a[a.G=71]="G",a[a.H=72]="H",a[a.I=73]="I",a[a.J=74]="J",a[a.K=75]="K",a[a.L=76]="L",a[a.M=77]="M",a[a.N=78]="N",a[a.O=79]="O",a[a.P=80]="P",a[a.Q=81]="Q",a[a.R=82]="R",a[a.S=83]="S",a[a.T=84]="T",a[a.U=85]="U",a[a.V=86]="V",a[a.W=87]="W",a[a.X=88]="X",a[a.Y=89]="Y",a[a.Z=90]="Z",a[a.WINDOWS=91]="WINDOWS",a[a.CONTEXT_MENU=93]="CONTEXT_MENU",a[a.TURN_OFF=94]="TURN_OFF",a[a.SLEEP=95]="SLEEP",a[a.NUMPAD_0=96]="NUMPAD_0",a[a.NUMPAD_1=97]="NUMPAD_1",a[a.NUMPAD_2=98]="NUMPAD_2",a[a.NUMPAD_3=99]="NUMPAD_3",a[a.NUMPAD_4=100]="NUMPAD_4",a[a.NUMPAD_5=101]="NUMPAD_5",a[a.NUMPAD_6=102]="NUMPAD_6",a[a.NUMPAD_7=103]="NUMPAD_7",a[a.NUMPAD_8=104]="NUMPAD_8",a[a.NUMPAD_9=105]="NUMPAD_9",a[a.NUMPAD_ASTERISK=106]="NUMPAD_ASTERISK",a[a.NUMPAD_PLUS=107]="NUMPAD_PLUS",a[a.NUMPAD_MINUS=109]="NUMPAD_MINUS",a[a.NUMPAD_COMMA=110]="NUMPAD_COMMA",a[a.NUMPAD_SLASH=111]="NUMPAD_SLASH",a[a.F1=112]="F1",a[a.F2=113]="F2",a[a.F3=114]="F3",a[a.F4=115]="F4",a[a.F5=116]="F5",a[a.F6=117]="F6",a[a.F7=118]="F7",a[a.F8=119]="F8",a[a.F9=120]="F9",a[a.F10=121]="F10",a[a.F11=122]="F11",a[a.F12=123]="F12",a[a.NUM_LOCK=144]="NUM_LOCK",a[a.SCROLL_LOCK=145]="SCROLL_LOCK",a[a.OPEN_BRACKET=186]="OPEN_BRACKET",a[a.PLUS=187]="PLUS",a[a.COMMA=188]="COMMA",a[a.SLASH=189]="SLASH",a[a.DOT=190]="DOT",a[a.PIPE=191]="PIPE",a[a.SEMICOLON=192]="SEMICOLON",a[a.MINUS=219]="MINUS",a[a.GREAT_ACCENT=220]="GREAT_ACCENT",a[a.EQUALS=221]="EQUALS",a[a.SINGLE_QUOTE=222]="SINGLE_QUOTE",a[a.BACKSLASH=226]="BACKSLASH"})(r||(r={}));const W=a=>(a.key?a.key==="Enter":a.keyCode===r.ENTER)&&!A(a),G=a=>(a.key?a.key==="Enter":a.keyCode===r.ENTER)&&k(a,!1,!1,!0),y=a=>(a.key?a.key==="Spacebar"||a.key===" ":a.keyCode===r.SPACE)&&!A(a),H=a=>(a.key?a.key==="Spacebar"||a.key===" ":a.keyCode===r.SPACE)&&k(a,!1,!1,!0),B=a=>(a.key?a.key==="Spacebar"||a.key===" ":a.keyCode===r.SPACE)&&k(a,!0,!1,!1),V=a=>(a.key?a.key==="ArrowLeft"||a.key==="Left":a.keyCode===r.ARROW_LEFT)&&!A(a),b=a=>(a.key?a.key==="ArrowRight"||a.key==="Right":a.keyCode===r.ARROW_RIGHT)&&!A(a),m=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&!A(a),Q=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&!A(a),x=a=>(a.key?a.key==="ArrowLeft"||a.key==="Left":a.keyCode===r.ARROW_LEFT)&&k(a,!0,!1,!1),$=a=>(a.key?a.key==="ArrowRight"||a.key==="Right":a.keyCode===r.ARROW_RIGHT)&&k(a,!0,!1,!1),X=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&k(a,!0,!1,!1),z=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&k(a,!0,!1,!1),j=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&k(a,!1,!1,!0),J=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&k(a,!1,!1,!0),Y=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&k(a,!1,!0,!1),Z=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&k(a,!1,!0,!1),q=a=>(a.key?a.key==="ArrowLeft"||a.key==="Left":a.keyCode===r.ARROW_LEFT)&&k(a,!1,!1,!0),n=a=>(a.key?a.key==="ArrowRight"||a.key==="Right":a.keyCode===r.ARROW_RIGHT)&&k(a,!1,!1,!0),C=a=>(a.key?a.key==="ArrowLeft"||a.key==="Left":a.keyCode===r.ARROW_LEFT)&&k(a,!0,!1,!0),d=a=>(a.key?a.key==="ArrowRight"||a.key==="Right":a.keyCode===r.ARROW_RIGHT)&&k(a,!0,!1,!0),K=a=>(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&k(a,!0,!1,!0),v=a=>(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&k(a,!0,!1,!0),e=a=>(a.key?a.key==="Home":a.keyCode===r.HOME)&&!A(a),aa=a=>(a.key?a.key==="End":a.keyCode===r.END)&&!A(a),ra=a=>(a.key?a.key==="Home":a.keyCode===r.HOME)&&k(a,!0,!1,!1),ka=a=>(a.key?a.key==="Home":a.keyCode===r.HOME)&&k(a,!1,!1,!0),sa=a=>(a.key?a.key==="End":a.keyCode===r.END)&&k(a,!0,!1,!1),Aa=a=>(a.key?a.key==="End":a.keyCode===r.END)&&k(a,!1,!1,!0),ca=a=>(a.key?a.key==="Escape"||a.key==="Esc":a.keyCode===r.ESCAPE)&&!A(a),ia=a=>(a.key?a.key==="Tab":a.keyCode===r.TAB)&&!A(a),fa=a=>(a.key?a.key==="Tab":a.keyCode===r.TAB)&&k(a,!1,!1,!0),Pa=a=>(a.key?a.key==="Backspace":a.keyCode===r.BACKSPACE)&&!A(a),Ea=a=>(a.key?a.key==="Delete":a.keyCode===r.DELETE)&&!A(a),Sa=a=>(a.key?a.key==="Delete":a.keyCode===r.DELETE)&&k(a,!1,!1,!0),Da=a=>(a.key?a.key==="Insert":a.keyCode===r.DELETE)&&k(a,!1,!1,!0),la=a=>(a.key?a.key==="Insert":a.keyCode===r.DELETE)&&k(a,!0,!1,!1),_a=a=>(a.key?a.key==="PageUp":a.keyCode===r.PAGE_UP)&&!A(a),Ta=a=>(a.key?a.key==="PageDown":a.keyCode===r.PAGE_DOWN)&&!A(a),Ua=a=>(a.key?a.key==="PageUp":a.keyCode===r.PAGE_UP)&&k(a,!1,!1,!0),ta=a=>(a.key?a.key==="PageUp":a.keyCode===r.PAGE_UP)&&k(a,!1,!0,!1),Ra=a=>(a.key?a.key==="PageDown":a.keyCode===r.PAGE_DOWN)&&k(a,!1,!1,!0),Ia=a=>(a.key?a.key==="PageDown":a.keyCode===r.PAGE_DOWN)&&k(a,!1,!0,!1),Na=a=>(a.key?a.key==="PageUp":a.keyCode===r.PAGE_UP)&&k(a,!0,!1,!0),Oa=a=>(a.key?a.key==="PageDown":a.keyCode===r.PAGE_DOWN)&&k(a,!0,!1,!0),ua=a=>(a.key?a.key==="+":a.keyCode===r.PLUS)||a.keyCode===r.NUMPAD_PLUS&&!A(a),ha=a=>(a.key?a.key==="-":a.keyCode===r.MINUS)||a.keyCode===r.NUMPAD_MINUS&&!A(a),pa=a=>a.key?O(a)||u(a):a.keyCode===r.F4&&!A(a)||a.keyCode===r.ARROW_DOWN&&k(a,!1,!0,!1),O=a=>a.key==="F4"&&!A(a),oa=a=>(a.key?a.key==="F4":a.keyCode===r.F4)&&k(a,!1,!1,!0),Ma=a=>(a.key?a.key==="F6":a.keyCode===r.F6)&&k(a,!1,!1,!1)||(a.key?a.key==="ArrowDown"||a.key==="Down":a.keyCode===r.ARROW_DOWN)&&k(a,!0,!0,!1),wa=a=>(a.key?a.key==="F6":a.keyCode===r.F6)&&k(a,!1,!1,!0)||(a.key?a.key==="ArrowUp"||a.key==="Up":a.keyCode===r.ARROW_UP)&&k(a,!0,!0,!1),La=a=>(a.key?a.key==="F7":a.keyCode===r.F7)&&!A(a),u=a=>(a.key==="ArrowDown"||a.key==="Down"||a.key==="ArrowUp"||a.key==="Up")&&k(a,!1,!0,!1),Fa=a=>a.key==="Shift"||a.keyCode===r.SHIFT,ga=a=>(a.key==="A"||a.key==="a"||a.which===r.A)&&k(a,!0,!1,!1),Wa=a=>(a.key==="V"||a.key==="v"||a.which===r.V)&&k(a,!0,!1,!1),A=a=>a.shiftKey||a.altKey||T(a),T=a=>!!(a.metaKey||a.ctrlKey),k=(a,s,c,f)=>a.shiftKey===f&&a.altKey===c&&T(a)===s;var P;(function(a){a["SAP-icons"]="SAP-icons-v4",a.horizon="SAP-icons-v5",a["SAP-icons-TNT"]="tnt",a.BusinessSuiteInAppSymbols="business-suite"})(P||(P={}));const U=a=>P[a]?P[a]:a,h=new Map;var i;(function(a){a.SAPIconsV4="SAP-icons-v4",a.SAPIconsV5="SAP-icons-v5",a.SAPIconsTNTV2="tnt-v2",a.SAPIconsTNTV3="tnt-v3",a.SAPBSIconsV1="business-suite-v1",a.SAPBSIconsV2="business-suite-v2"})(i||(i={}));const p=a=>{const s=I(),c=h.get(s);return!a&&c?U(c):o(a)},o=a=>{const s=N("sap_horizon");return a?a==="tnt"?s?i.SAPIconsTNTV3:i.SAPIconsTNTV2:a==="business-suite"?s?i.SAPBSIconsV2:i.SAPBSIconsV1:a:s?i.SAPIconsV5:i.SAPIconsV4},D=new Map,E=_("SVGIcons.registry",new Map),S=_("SVGIcons.promises",new Map),l="ICON_NOT_FOUND",Ga=(a,s)=>{D.set(a,s)},M=async a=>{if(!S.has(a)){if(!D.has(a))throw new Error(`No loader registered for the ${a} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const s=D.get(a);S.set(a,s(a))}return S.get(a)},w=a=>{Object.keys(a.data).forEach(s=>{const c=a.data[s];L(s,{pathData:c.path||c.paths,ltr:c.ltr,accData:c.acc,collection:a.collection,packageName:a.packageName})})},L=(a,s)=>{const c=`${s.collection}/${a}`;E.set(c,{pathData:s.pathData,ltr:s.ltr,accData:s.accData,packageName:s.packageName,customTemplate:s.customTemplate,viewBox:s.viewBox,collection:s.collection})},t=a=>{a.startsWith("sap-icon://")&&(a=a.replace("sap-icon://",""));let s;[a,s]=a.split("/").reverse(),a=a.replace("icon-",""),s&&(s=U(s)),s=p(s);const c=`${s}/${a}`;return{name:a,collection:s,registryKey:c}},ya=a=>{const{registryKey:s}=t(a);return E.get(s)},Ha=async a=>{const{collection:s,registryKey:c}=t(a);let f=l;try{f=await M(s)}catch(R){console.error(R.message)}return f===l?f:(E.has(c)||w(f),E.get(c))};export{G as $,X as A,x as B,$ as C,Wa as D,Da as E,H as F,Pa as G,ra as H,sa as I,ga as J,Sa as K,la as L,B as M,ka as N,Aa as O,C as P,d as Q,Y as R,Z as S,La as T,Ua as U,K as V,Ra as W,v as X,O as Y,Na as Z,Oa as _,wa as a,ta as a0,Ia as a1,oa as a2,ua as a3,ha as a4,Fa as a5,W as b,y as c,ca as d,fa as e,Ha as f,ya as g,L as h,Ma as i,ia as j,pa as k,e as l,aa as m,m as n,Q as o,V as p,b as q,Ga as r,_a as s,Ta as t,j as u,J as v,q as w,n as x,Ea as y,z};
//# sourceMappingURL=Icons-fe6e657a.js.map
