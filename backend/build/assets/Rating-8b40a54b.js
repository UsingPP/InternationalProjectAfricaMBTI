import{t as ne,j as i,l as be,k as Fe,s as D,m as te,_ as l,ai as Re,r as L,n as xe,o as ie,f as se,g as Ve,u as Ce,R as Ae,w as Se,p as U,q as Me}from"./index-91af00a3.js";import{v as Le}from"./visuallyHidden-14c3de6e.js";const He=ne(i.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),je=ne(i.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function we(o){return Fe("MuiRating",o)}const Ee=be("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),O=Ee,ze=["value"],Ie=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function Oe(o,e,t){return o<e?e:o>t?t:o}function $e(o){const e=o.toString().split(".")[1];return e?e.length:0}function J(o,e){if(o==null)return o;const t=Math.round(o/e)*e;return Number(t.toFixed($e(e)))}const Te=o=>{const{classes:e,size:t,readOnly:m,disabled:H,emptyValueFocused:b,focusVisible:h}=o,F={root:["root",`size${te(t)}`,H&&"disabled",h&&"focusVisible",m&&"readOnly"],label:["label","pristine"],labelEmptyValue:[b&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Me(F,we,e)},Ne=D("span",{name:"MuiRating",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${O.visuallyHidden}`]:e.visuallyHidden},e.root,e[`size${te(t.size)}`],t.readOnly&&e.readOnly]}})(({theme:o,ownerState:e})=>l({display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${O.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${O.focusVisible} .${O.iconActive}`]:{outline:"1px solid #999"},[`& .${O.visuallyHidden}`]:Le},e.size==="small"&&{fontSize:o.typography.pxToRem(18)},e.size==="large"&&{fontSize:o.typography.pxToRem(30)},e.readOnly&&{pointerEvents:"none"})),ae=D("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:o},e)=>[e.label,o.emptyValueFocused&&e.labelEmptyValueActive]})(({ownerState:o})=>l({cursor:"inherit"},o.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Pe=D("span",{name:"MuiRating",slot:"Icon",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.icon,t.iconEmpty&&e.iconEmpty,t.iconFilled&&e.iconFilled,t.iconHover&&e.iconHover,t.iconFocus&&e.iconFocus,t.iconActive&&e.iconActive]}})(({theme:o,ownerState:e})=>l({display:"flex",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),pointerEvents:"none"},e.iconActive&&{transform:"scale(1.2)"},e.iconEmpty&&{color:(o.vars||o).palette.action.disabled})),Be=D("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:o=>Re(o)&&o!=="iconActive",overridesResolver:(o,e)=>{const{iconActive:t}=o;return[e.decimal,t&&e.iconActive]}})(({iconActive:o})=>l({position:"relative"},o&&{transform:"scale(1.2)"}));function ke(o){const e=ie(o,ze);return i.jsx("span",l({},e))}function oe(o){const{classes:e,disabled:t,emptyIcon:m,focus:H,getLabelText:b,highlightSelectedOnly:h,hover:F,icon:$,IconContainerComponent:j,isActive:T,itemValue:c,labelProps:w,name:f,onBlur:X,onChange:R,onClick:x,onFocus:N,readOnly:P,ownerState:a,ratingValue:u,ratingValueRounded:W}=o,V=h?c===u:c<=u,B=c<=F,C=c<=H,q=c===W,E=se(),g=i.jsx(Pe,{as:j,value:c,className:U(e.icon,V?e.iconFilled:e.iconEmpty,B&&e.iconHover,C&&e.iconFocus,T&&e.iconActive),ownerState:l({},a,{iconEmpty:!V,iconFilled:V,iconHover:B,iconFocus:C,iconActive:T}),children:m&&!V?m:$});return P?i.jsx("span",l({},w,{children:g})):i.jsxs(L.Fragment,{children:[i.jsxs(ae,l({ownerState:l({},a,{emptyValueFocused:void 0}),htmlFor:E},w,{children:[g,i.jsx("span",{className:e.visuallyHidden,children:b(c)})]})),i.jsx("input",{className:e.visuallyHidden,onFocus:N,onBlur:X,onChange:R,onClick:x,disabled:t,value:c,id:E,type:"radio",name:f,checked:q})]})}const _e=i.jsx(He,{fontSize:"inherit"}),Ue=i.jsx(je,{fontSize:"inherit"});function De(o){return`${o} Star${o!==1?"s":""}`}const Xe=L.forwardRef(function(e,t){const m=xe({name:"MuiRating",props:e}),{className:H,defaultValue:b=null,disabled:h=!1,emptyIcon:F=Ue,emptyLabelText:$="Empty",getLabelText:j=De,highlightSelectedOnly:T=!1,icon:c=_e,IconContainerComponent:w=ke,max:f=5,name:X,onChange:R,onChangeActive:x,onMouseLeave:N,onMouseMove:P,precision:a=1,readOnly:u=!1,size:W="medium",value:V}=m,B=ie(m,Ie),C=se(X),[q,E]=Ve({controlled:V,default:b,name:"Rating"}),g=J(q,a),le=Ce(),[{hover:d,focus:k},z]=L.useState({hover:-1,focus:-1});let A=g;d!==-1&&(A=d),k!==-1&&(A=k);const{isFocusVisibleRef:K,onBlur:ce,onFocus:re,ref:ue}=Ae(),[de,Y]=L.useState(!1),Q=L.useRef(),pe=Se(ue,Q,t),me=n=>{P&&P(n);const s=Q.current,{right:r,left:_}=s.getBoundingClientRect(),{width:S}=s.firstChild.getBoundingClientRect();let M;le.direction==="rtl"?M=(r-n.clientX)/(S*f):M=(n.clientX-_)/(S*f);let p=J(f*M+a/2,a);p=Oe(p,a,f),z(y=>y.hover===p&&y.focus===p?y:{hover:p,focus:p}),Y(!1),x&&d!==p&&x(n,p)},fe=n=>{N&&N(n);const s=-1;z({hover:s,focus:s}),x&&d!==s&&x(n,s)},Z=n=>{let s=n.target.value===""?null:parseFloat(n.target.value);d!==-1&&(s=d),E(s),R&&R(n,s)},ve=n=>{n.clientX===0&&n.clientY===0||(z({hover:-1,focus:-1}),E(null),R&&parseFloat(n.target.value)===g&&R(n,null))},he=n=>{re(n),K.current===!0&&Y(!0);const s=parseFloat(n.target.value);z(r=>({hover:r.hover,focus:s}))},ge=n=>{if(d!==-1)return;ce(n),K.current===!1&&Y(!1);const s=-1;z(r=>({hover:r.hover,focus:s}))},[ye,ee]=L.useState(!1),I=l({},m,{defaultValue:b,disabled:h,emptyIcon:F,emptyLabelText:$,emptyValueFocused:ye,focusVisible:de,getLabelText:j,icon:c,IconContainerComponent:w,max:f,precision:a,readOnly:u,size:W}),v=Te(I);return i.jsxs(Ne,l({ref:pe,onMouseMove:me,onMouseLeave:fe,className:U(v.root,H,u&&"MuiRating-readOnly"),ownerState:I,role:u?"img":null,"aria-label":u?j(A):null},B,{children:[Array.from(new Array(f)).map((n,s)=>{const r=s+1,_={classes:v,disabled:h,emptyIcon:F,focus:k,getLabelText:j,highlightSelectedOnly:T,hover:d,icon:c,IconContainerComponent:w,name:C,onBlur:ge,onChange:Z,onClick:ve,onFocus:he,ratingValue:A,ratingValueRounded:g,readOnly:u,ownerState:I},S=r===Math.ceil(A)&&(d!==-1||k!==-1);if(a<1){const M=Array.from(new Array(1/a));return i.jsx(Be,{className:U(v.decimal,S&&v.iconActive),ownerState:I,iconActive:S,children:M.map((p,y)=>{const G=J(r-1+(y+1)*a,a);return i.jsx(oe,l({},_,{isActive:!1,itemValue:G,labelProps:{style:M.length-1===y?{}:{width:G===A?`${(y+1)*a*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),G)})},r)}return i.jsx(oe,l({},_,{isActive:S,itemValue:r}),r)}),!u&&!h&&i.jsxs(ae,{className:U(v.label,v.labelEmptyValue),ownerState:I,children:[i.jsx("input",{className:v.visuallyHidden,value:"",id:`${C}-empty`,type:"radio",name:C,checked:g==null,onFocus:()=>ee(!0),onBlur:()=>ee(!1),onChange:Z}),i.jsx("span",{className:v.visuallyHidden,children:$})]})]}))}),Ye=Xe;export{Ye as R};
