import{j as e,L as b,S as g,a as w,T as n,B as x,v as W,F as A,P as j,r as f,d as E,W as F}from"./index-0066e548.js";import{b as _}from"./format-time-f0d5a107.js";import{a as G}from"./format-number-4e3fd666.js";import{G as l}from"./Grid2-bde2a67a.js";import{C as N}from"./Card-59dbb394.js";import{C as v}from"./CircularProgress-956d0de6.js";import{C as q}from"./Container-5773a9e4.js";const y="en";function C({data:i,index:a}){console.log(i);const{surveyimg:c,surveytitle:h,surveysubtitle:d,surveyname:s,view:p,comment:u,share:k,completedAt:I}=i,t=a===0,r=a===1||a===2,m="/Results/".concat(s).concat("Result");console.log(m);const L=e.jsx(x,{component:"img",sx:{zIndex:9,width:32,height:32,position:"absolute",left:o=>o.spacing(3),bottom:o=>o.spacing(-2),...(t||r)&&{zIndex:9,top:24,left:24,width:40,height:40}},src:"/assets/icons/ic_check.png"}),P=e.jsx(b,{color:"inherit",variant:"subtitle2",underline:"hover",sx:{height:44,overflow:"hidden",WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical",...t&&{typography:"h5",height:60},...(t||r)&&{color:"common.white"}},href:m,children:h[y]}),T=e.jsx(g,{direction:"row",flexWrap:"wrap",spacing:1.5,justifyContent:"flex-end",sx:{mt:3,color:"text.disabled"},children:[{number:u,icon:"eva:message-circle-fill"},{number:p,icon:"eva:eye-fill"},{number:k,icon:"eva:share-fill"}].map((o,z)=>e.jsxs(g,{direction:"row",sx:{...(t||r)&&{opacity:.48,color:"common.white"}},children:[e.jsx(w,{width:16,icon:o.icon,sx:{mr:.5}}),e.jsx(n,{variant:"caption",children:G(o.number)})]},z))}),R=e.jsx(x,{component:"img",alt:h,src:c,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}}),B=e.jsx(n,{variant:"caption",component:"div",sx:{mb:2,color:"text.disabled",...(t||r)&&{opacity:.48,color:"common.white"}},children:_(I)}),D=e.jsx(A,{color:"paper",src:"/assets/icons/shape-avatar.svg",sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute",color:"background.paper",...(t||r)&&{display:"none"}}});return e.jsx(l,{xs:12,sm:t?12:6,md:t?6:3,children:e.jsxs(N,{children:[e.jsxs(x,{onClick:()=>{window.location.href=m},sx:{position:"relative",pt:"calc(100% * 3 / 4)",...(t||r)&&{pt:"calc(100% * 4 / 3)","&:after":{top:0,content:"''",width:"100%",height:"100%",position:"absolute",bgcolor:o=>W(o.palette.grey[900],.72)}},...t&&{pt:{xs:"calc(100% * 4 / 3)",sm:"calc(100% * 3 / 4.66)"}}},children:[D,L,R]}),e.jsxs(x,{onClick:()=>{window.location.href=m},sx:{p:o=>o.spacing(4,3,3,3),...(t||r)&&{width:1,bottom:0,position:"absolute"}},children:[B,P,e.jsx(n,{noWrap:!0,sx:{color:"#ffffff",fontSize:14},children:d[y]}),T]})]})})}C.propTypes={data:j.object.isRequired,index:j.number};function S(){const[i,a]=f.useState(!0),[c,h]=f.useState({});return f.useEffect(()=>{(async()=>{try{const s=localStorage.getItem("token"),p=await fetch("https://leadershipsurvey.pythonanywhere.com/send_completed_survey_list/",{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"}});if(p.ok){const u=await p.json();h(u),console.log(u),a(!1)}}catch(s){console.error("Error fetching data:",s)}})()},[]),i?e.jsx(l,{xs:12,md:6,lg:4,children:e.jsx(v,{})}):(console.log(c.data.length),e.jsxs(q,{children:[e.jsxs(g,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsx(n,{variant:"h4",children:"Survey List"}),e.jsx(E,{variant:"contained",color:"inherit",href:"/",startIcon:e.jsx(w,{icon:"eva:plus-fill"}),children:"Go Another Survey"})]}),i?e.jsx(v,{}):e.jsxs(e.Fragment,{children:[c.data.length!==0?e.jsxs(l,{container:!0,spacing:3,children:[" ",c.data.map((d,s)=>e.jsx(C,{data:d,index:s},s))]}):e.jsx(l,{container:!0,spacing:3,justifyContent:"center",children:e.jsxs(l,{item:!0,children:[e.jsx(n,{variant:"h3",gutterBottom:!0,sx:{pb:5,pt:10},children:"No Results"}),e.jsx(n,{variant:"subtitle1",gutterBottom:!0,children:"No survey results available."}),e.jsx(b,{href:"/",children:e.jsx(n,{variant:"body1",children:"Please conduct the survey first!"})})]})})," "]})]}))}S.propTypes={};function O(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsx("title",{children:" SurveyResultList "})}),e.jsx(S,{})]})}O.propTypes={};export{O as default};
