import{_ as y,aq as te,ar as ie,as as le,r as d,at as ce,af as ae,o as oe,j as W,ao as ue,p as fe,q as pe,k as de,s as ge,n as me}from"./index-f5f7178f.js";const be=(e,n)=>e.filter(r=>n.includes(r)),g=(e,n,r)=>{const t=e.keys[0];Array.isArray(n)?n.forEach((i,s)=>{r((l,u)=>{s<=e.keys.length-1&&(s===0?Object.assign(l,u):l[e.up(e.keys[s])]=u)},i)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:be(e.keys,Object.keys(n))).forEach(s=>{if(e.keys.indexOf(s)!==-1){const l=n[s];l!==void 0&&r((u,m)=>{t===s?Object.assign(u,m):u[e.up(s)]=m},l)}}):(typeof n=="number"||typeof n=="string")&&r((i,s)=>{Object.assign(i,s)},n)};function o(e){return e?`Level${e}`:""}function G(e){return e.unstable_level>0&&e.container}function L(e){return function(r){return`var(--Grid-${r}Spacing${o(e.unstable_level)})`}}function N(e){return function(r){return e.unstable_level===0?`var(--Grid-${r}Spacing)`:`var(--Grid-${r}Spacing${o(e.unstable_level-1)})`}}function q(e){return e.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${o(e.unstable_level-1)})`}const $e=({theme:e,ownerState:n})=>{const r=L(n),t={};return g(e.breakpoints,n.gridSize,(i,s)=>{let l={};s===!0&&(l={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(l={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / ${q(n)}${G(n)?` + ${r("column")}`:""})`}),i(t,l)}),t},ye=({theme:e,ownerState:n})=>{const r={};return g(e.breakpoints,n.gridOffset,(t,i)=>{let s={};i==="auto"&&(s={marginLeft:"auto"}),typeof i=="number"&&(s={marginLeft:i===0?"0px":`calc(100% * ${i} / ${q(n)})`}),t(r,s)}),r},Ge=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=G(n)?{[`--Grid-columns${o(n.unstable_level)}`]:q(n)}:{"--Grid-columns":12};return g(e.breakpoints,n.columns,(t,i)=>{t(r,{[`--Grid-columns${o(n.unstable_level)}`]:i})}),r},xe=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=N(n),t=G(n)?{[`--Grid-rowSpacing${o(n.unstable_level)}`]:r("row")}:{};return g(e.breakpoints,n.rowSpacing,(i,s)=>{var l;i(t,{[`--Grid-rowSpacing${o(n.unstable_level)}`]:typeof s=="string"?s:(l=e.spacing)==null?void 0:l.call(e,s)})}),t},Se=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=N(n),t=G(n)?{[`--Grid-columnSpacing${o(n.unstable_level)}`]:r("column")}:{};return g(e.breakpoints,n.columnSpacing,(i,s)=>{var l;i(t,{[`--Grid-columnSpacing${o(n.unstable_level)}`]:typeof s=="string"?s:(l=e.spacing)==null?void 0:l.call(e,s)})}),t},_e=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return g(e.breakpoints,n.direction,(t,i)=>{t(r,{flexDirection:i})}),r},he=({ownerState:e})=>{const n=L(e),r=N(e);return y({minWidth:0,boxSizing:"border-box"},e.container&&y({display:"flex",flexWrap:"wrap"},e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},{margin:`calc(${n("row")} / -2) calc(${n("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${n("row")} * -1) 0px 0px calc(${n("column")} * -1)`}),(!e.container||G(e))&&y({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},Oe=e=>{const n=[];return Object.entries(e).forEach(([r,t])=>{t!==!1&&t!==void 0&&n.push(`grid-${r}-${String(t)}`)}),n},ve=(e,n="xs")=>{function r(t){return t===void 0?!1:typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number"&&t>0}if(r(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const t=[];return Object.entries(e).forEach(([i,s])=>{r(s)&&t.push(`spacing-${i}-${String(s)}`)}),t}return[]},Ee=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,r])=>`direction-${n}-${r}`):[`direction-xs-${String(e)}`],Ce=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],je=te(),Pe=ie("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function we(e){return le({props:e,name:"MuiGrid",defaultTheme:je})}function Ne(e={}){const{createStyledComponent:n=Pe,useThemeProps:r=we,componentName:t="MuiGrid"}=e,i=d.createContext(void 0),s=(m,a)=>{const{container:x,direction:S,spacing:_,wrap:b,gridSize:h}=m,O={root:["root",x&&"container",b!=="wrap"&&`wrap-xs-${String(b)}`,...Ee(S),...Oe(h),...x?ve(_,a.breakpoints.keys[0]):[]]};return pe(O,v=>de(t,v),{})},l=n(Ge,Se,xe,$e,_e,he,ye),u=d.forwardRef(function(a,x){var S,_,b,h,O,v,k,R;const C=ce(),A=r(a),j=ae(A),E=d.useContext(i),{className:V,children:U,columns:K=12,container:F=!1,component:H="div",direction:I="row",wrap:J="wrap",spacing:P=0,rowSpacing:Q=P,columnSpacing:X=P,disableEqualOverflow:T,unstable_level:f=0}=j,Y=oe(j,Ce);let $=T;f&&T!==void 0&&($=a.disableEqualOverflow);const D={},M={},z={};Object.entries(Y).forEach(([c,p])=>{C.breakpoints.values[c]!==void 0?D[c]=p:C.breakpoints.values[c.replace("Offset","")]!==void 0?M[c.replace("Offset","")]=p:z[c]=p});const Z=(S=a.columns)!=null?S:f?void 0:K,ee=(_=a.spacing)!=null?_:f?void 0:P,ne=(b=(h=a.rowSpacing)!=null?h:a.spacing)!=null?b:f?void 0:Q,re=(O=(v=a.columnSpacing)!=null?v:a.spacing)!=null?O:f?void 0:X,B=y({},j,{level:f,columns:Z,container:F,direction:I,wrap:J,spacing:ee,rowSpacing:ne,columnSpacing:re,gridSize:D,gridOffset:M,disableEqualOverflow:(k=(R=$)!=null?R:E)!=null?k:!1,parentDisableEqualOverflow:E}),se=s(B,C);let w=W.jsx(l,y({ref:x,as:H,ownerState:B,className:fe(se.root,V)},z,{children:d.Children.map(U,c=>{if(d.isValidElement(c)&&ue(c,["Grid"])){var p;return d.cloneElement(c,{unstable_level:(p=c.props.unstable_level)!=null?p:f+1})}return c})}));return $!==void 0&&$!==(E??!1)&&(w=W.jsx(i.Provider,{value:$,children:w})),w});return u.muiName="Grid",u}const qe=Ne({createStyledComponent:ge("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>me({props:e,name:"MuiGrid2"})}),Re=qe;export{Re as G};
