import{r as I,j as e,P as t,S as w,I as U,a as x,b as V,M as y,c as q,B as j,d as K,L as J,T as b,u as D,s as H,e as X,W as Q}from"./index-abd9d734.js";import{f}from"./index-cb482739.js";import{C as u}from"./Card-78dc38aa.js";import{C as g}from"./CardHeader-d5f3e52b.js";import{F as Y}from"./FormControlLabel-bcd6d8e6.js";import{C as Z}from"./Checkbox-2dd24fe9.js";import{f as ee,a as te}from"./format-time-f0d5a107.js";import{D as se}from"./Divider-d3b3e92d.js";import{T as re,t as ie,a as ae,b as ne,c as oe,d as le,e as ce,A as v}from"./app-widget-summary-b9028a30.js";import{f as _,a as de}from"./format-number-3a232342.js";import{u as T,C}from"./use-chart-108f1275.js";import{C as pe}from"./Container-7cd488f7.js";import{G as p}from"./Grid2-0758946b.js";import"./formControlState-fcb6e587.js";import"./useControlled-d6e93d8b.js";import"./isMuiElement-6efd92b7.js";function $({title:s,subheader:i,list:a,...n}){const[r,d]=I.useState(["2"]),c=l=>{const h=r.includes(l)?r.filter(o=>o!==l):[...r,l];d(h)};return e.jsxs(u,{...n,children:[e.jsx(g,{title:s,subheader:i}),a.map(l=>e.jsx(G,{task:l,checked:r.includes(l.id),onChange:()=>c(l.id)},l.id))]})}$.propTypes={list:t.array,subheader:t.string,title:t.string};function G({task:s,checked:i,onChange:a}){const[n,r]=I.useState(null),d=S=>{r(S.currentTarget)},c=()=>{r(null)},l=()=>{c(),console.info("MARK COMPLETE",s.id)},h=()=>{c(),console.info("SHARE",s.id)},o=()=>{c(),console.info("EDIT",s.id)},m=()=>{c(),console.info("DELETE",s.id)};return e.jsxs(e.Fragment,{children:[e.jsxs(w,{direction:"row",alignItems:"center",sx:{pl:2,pr:1,py:1,"&:not(:last-of-type)":{borderBottom:S=>`dashed 1px ${S.palette.divider}`},...i&&{color:"text.disabled",textDecoration:"line-through"}},children:[e.jsx(Y,{control:e.jsx(Z,{checked:i,onChange:a}),label:s.name,sx:{flexGrow:1,m:0}}),e.jsx(U,{color:n?"inherit":"default",onClick:d,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]}),e.jsxs(V,{open:!!n,anchorEl:n,onClose:c,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsxs(y,{onClick:l,children:[e.jsx(x,{icon:"eva:checkmark-circle-2-fill",sx:{mr:2}}),"Mark Complete"]}),e.jsxs(y,{onClick:o,children:[e.jsx(x,{icon:"solar:pen-bold",sx:{mr:2}}),"Edit"]}),e.jsxs(y,{onClick:h,children:[e.jsx(x,{icon:"solar:share-bold",sx:{mr:2}}),"Share"]}),e.jsxs(y,{onClick:m,sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold",sx:{mr:2}}),"Delete"]})]})]})}G.propTypes={checked:t.bool,onChange:t.func,task:t.object};function F({title:s,subheader:i,list:a,...n}){return e.jsxs(u,{...n,children:[e.jsx(g,{title:s,subheader:i}),e.jsx(q,{children:e.jsx(w,{spacing:3,sx:{p:3,pr:0},children:a.map(r=>e.jsx(N,{news:r},r.id))})}),e.jsx(se,{sx:{borderStyle:"dashed"}}),e.jsx(j,{sx:{p:2,textAlign:"right"},children:e.jsx(K,{size:"small",color:"inherit",endIcon:e.jsx(x,{icon:"eva:arrow-ios-forward-fill"}),children:"View all"})})]})}F.propTypes={title:t.string,subheader:t.string,list:t.array.isRequired};function N({news:s}){const{image:i,title:a,description:n,postedAt:r}=s;return e.jsxs(w,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(j,{component:"img",alt:a,src:i,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0}}),e.jsxs(j,{sx:{minWidth:240,flexGrow:1},children:[e.jsx(J,{color:"inherit",variant:"subtitle2",underline:"hover",noWrap:!0,children:a}),e.jsx(b,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:n})]}),e.jsx(b,{variant:"caption",sx:{pr:3,flexShrink:0,color:"text.secondary"},children:ee(r)})]})}N.propTypes={news:t.shape({image:t.string,title:t.string,description:t.string,postedAt:t.instanceOf(Date)})};function R({title:s,subheader:i,list:a,...n}){return e.jsxs(u,{...n,children:[e.jsx(g,{title:s,subheader:i}),e.jsx(re,{sx:{m:0,p:3,[`& .${ie.root}:before`]:{flex:0,padding:0}},children:a.map((r,d)=>e.jsx(M,{item:r,lastTimeline:d===a.length-1},r.id))})]})}R.propTypes={list:t.array,subheader:t.string,title:t.string};function M({item:s,lastTimeline:i}){const{type:a,title:n,time:r}=s;return e.jsxs(ae,{children:[e.jsxs(ne,{children:[e.jsx(oe,{color:a==="order1"&&"primary"||a==="order2"&&"success"||a==="order3"&&"info"||a==="order4"&&"warning"||"error"}),i?null:e.jsx(le,{})]}),e.jsxs(ce,{children:[e.jsx(b,{variant:"subtitle2",children:n}),e.jsx(b,{variant:"caption",sx:{color:"text.disabled"},children:te(r)})]})]})}M.propTypes={item:t.object,lastTimeline:t.bool};const A=400,E=72,he=H(C)(({theme:s})=>({height:A,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:E,borderTop:`dashed 1px ${s.palette.divider}`,top:`calc(${A-E}px) !important`}}));function W({title:s,subheader:i,chart:a,...n}){const r=D(),{colors:d,series:c,options:l}=a,h=c.map(m=>m.value),o=T({chart:{sparkline:{enabled:!0}},colors:d,labels:c.map(m=>m.label),stroke:{colors:[r.palette.background.paper]},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:m=>_(m),title:{formatter:m=>`${m}`}}},plotOptions:{pie:{donut:{labels:{show:!1}}}},...l});return e.jsxs(u,{...n,children:[e.jsx(g,{title:s,subheader:i,sx:{mb:5}}),e.jsx(he,{dir:"ltr",type:"pie",series:h,options:o,width:"100%",height:280})]})}W.propTypes={chart:t.object,subheader:t.string,title:t.string};function L({title:s,subheader:i,chart:a,...n}){const{labels:r,colors:d,series:c,options:l}=a,h=T({colors:d,plotOptions:{bar:{columnWidth:"16%"}},fill:{type:c.map(o=>o.fill)},labels:r,xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:o=>typeof o<"u"?`${o.toFixed(0)} visits`:o}},...l});return e.jsxs(u,{...n,children:[e.jsx(g,{title:s,subheader:i}),e.jsx(j,{sx:{p:3,pb:1},children:e.jsx(C,{dir:"ltr",type:"line",series:c,options:h,width:"100%",height:364})})]})}L.propTypes={chart:t.object,subheader:t.string,title:t.string};function B({title:s,subheader:i,list:a,...n}){return e.jsxs(u,{...n,children:[e.jsx(g,{title:s,subheader:i}),e.jsx(j,{sx:{p:3,gap:2,display:"grid",gridTemplateColumns:"repeat(2, 1fr)"},children:a.map(r=>e.jsxs(X,{variant:"outlined",sx:{py:2.5,textAlign:"center",borderStyle:"dashed"},children:[e.jsx(j,{sx:{mb:.5},children:r.icon}),e.jsx(b,{variant:"h6",children:de(r.value)}),e.jsx(b,{variant:"body2",sx:{color:"text.secondary"},children:r.name})]},r.name))})]})}B.propTypes={title:t.string,subheader:t.string,list:t.array.isRequired};const k=400,O=72,xe=H(C)(({theme:s})=>({height:k,"& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject":{height:"100% !important"},"& .apexcharts-legend":{height:O,borderTop:`dashed 1px ${s.palette.divider}`,top:`calc(${k-O}px) !important`}}));function P({title:s,subheader:i,chart:a,...n}){const r=D(),{series:d,colors:c,categories:l,options:h}=a,o=T({colors:c,stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,position:"bottom",horizontalAlign:"center"},xaxis:{categories:l,labels:{style:{colors:[...Array(6)].map(()=>r.palette.text.secondary)}}},...h});return e.jsxs(u,{...n,children:[e.jsx(g,{title:s,subheader:i,sx:{mb:5}}),e.jsx(xe,{dir:"ltr",type:"radar",series:d,options:o,width:"100%",height:340})]})}P.propTypes={chart:t.object,subheader:t.string,title:t.string};function z({title:s,subheader:i,chart:a,...n}){const{colors:r,series:d,options:c}=a,l=d.map(o=>o.value),h=T({colors:r,tooltip:{marker:{show:!1},y:{formatter:o=>_(o),title:{formatter:()=>""}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:d.map(o=>o.label)},...c});return e.jsxs(u,{...n,children:[e.jsx(g,{title:s,subheader:i}),e.jsx(j,{sx:{mx:3},children:e.jsx(C,{dir:"ltr",type:"bar",series:[{data:l}],options:h,width:"100%",height:364})})]})}z.propTypes={chart:t.object,subheader:t.string,title:t.string};function me(){return e.jsxs(pe,{maxWidth:"xl",children:[e.jsx(b,{variant:"h4",sx:{mb:5},children:"Hi, Welcome back 👋"}),e.jsxs(p,{container:!0,spacing:3,children:[e.jsx(p,{xs:12,sm:6,md:3,children:e.jsx(v,{title:"Weekly Sales",total:714e3,color:"success",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_bag.png"})})}),e.jsx(p,{xs:12,sm:6,md:3,children:e.jsx(v,{title:"New Users",total:1352831,color:"info",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_users.png"})})}),e.jsx(p,{xs:12,sm:6,md:3,children:e.jsx(v,{title:"Item Orders",total:1723315,color:"warning",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_buy.png"})})}),e.jsx(p,{xs:12,sm:6,md:3,children:e.jsx(v,{title:"Bug Reports",total:234,color:"error",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_message.png"})})}),e.jsx(p,{xs:12,md:6,lg:8,children:e.jsx(L,{title:"Website Visits",subheader:"(+43%) than last year",chart:{labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],series:[{name:"Team A",type:"column",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",fill:"gradient",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]}})}),e.jsx(p,{xs:12,md:6,lg:4,children:e.jsx(W,{title:"Current Visits",chart:{series:[{label:"America",value:4344},{label:"Asia",value:5435},{label:"Europe",value:1443},{label:"Africa",value:4443}]}})}),e.jsx(p,{xs:12,md:6,lg:8,children:e.jsx(z,{title:"Conversion Rates",subheader:"(+43%) than last year",chart:{series:[{label:"Italy",value:400},{label:"Japan",value:430},{label:"China",value:448},{label:"Canada",value:470},{label:"France",value:540},{label:"Germany",value:580},{label:"South Korea",value:690},{label:"Netherlands",value:1100},{label:"United States",value:1200},{label:"United Kingdom",value:1380}]}})}),e.jsx(p,{xs:12,md:6,lg:4,children:e.jsx(P,{title:"Current Subject",chart:{categories:["English","History","Physics","Geography","Chinese","Math"],series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}]}})}),e.jsx(p,{xs:12,md:6,lg:8,children:e.jsx(F,{title:"News Update",list:[...Array(5)].map((s,i)=>({id:f.string.uuid(),title:f.person.jobTitle(),description:f.commerce.productDescription(),image:`/assets/images/covers/cover_${i+1}.jpg`,postedAt:f.date.recent()}))})}),e.jsx(p,{xs:12,md:6,lg:4,children:e.jsx(R,{title:"Order Timeline",list:[...Array(5)].map((s,i)=>({id:f.string.uuid(),title:["1983, orders, $4220","12 Invoices have been paid","Order #37745 from September","New order placed #XF-2356","New order placed #XF-2346"][i],type:`order${i+1}`,time:f.date.past()}))})}),e.jsx(p,{xs:12,md:6,lg:4,children:e.jsx(B,{title:"Traffic by Site",list:[{name:"FaceBook",value:323234,icon:e.jsx(x,{icon:"eva:facebook-fill",color:"#1877F2",width:32})},{name:"Google",value:341212,icon:e.jsx(x,{icon:"eva:google-fill",color:"#DF3E30",width:32})},{name:"Linkedin",value:411213,icon:e.jsx(x,{icon:"eva:linkedin-fill",color:"#006097",width:32})},{name:"Twitter",value:443232,icon:e.jsx(x,{icon:"eva:twitter-fill",color:"#1C9CEA",width:32})}]})}),e.jsx(p,{xs:12,md:6,lg:8,children:e.jsx($,{title:"Tasks",list:[{id:"1",name:"Create FireStone Logo"},{id:"2",name:"Add SCSS and JS files if required"},{id:"3",name:"Stakeholder Meeting"},{id:"4",name:"Scoping & Estimations"},{id:"5",name:"Sprint Showcase"}]})})]})]})}function De(){return e.jsxs(e.Fragment,{children:[e.jsx(Q,{children:e.jsx("title",{children:" Dashboard | Minimal UI "})}),e.jsx(me,{})]})}export{De as default};
