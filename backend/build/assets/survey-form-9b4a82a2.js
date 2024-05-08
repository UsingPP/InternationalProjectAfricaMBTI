import{j as e,S as l,a as v,B as s,T as c,e as $,d as E,P as r,r as _,L,G as Q,W as ee}from"./index-0066e548.js";import{a as te}from"./format-number-4e3fd666.js";import{C as H}from"./Card-59dbb394.js";import{C as U}from"./CardHeader-11ff82aa.js";import{D as J}from"./Divider-1ddc5239.js";import{G as d}from"./Grid-bda02c93.js";import{C as q}from"./CircularProgress-956d0de6.js";const P="23",D=["#ccd1d3","#ff7f50","#ffd700","#00ff7f","#1e90ff"],G=5,z=["mdi:idea","carbon:time-filled","pepicons-print:people"];function K({title:n,subtitle:x,surveyMainImg:f,surveyExplain:p,surveyETA:t,surveyQuestions:u,surveyParticipatedCount:i,currentQuestion:k,setCurrentQuestion:g,...w}){return e.jsxs(H,{...w,sx:{marginTop:2,paddingTop:5},children:[e.jsx(U,{title:e.jsxs(l,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(v,{icon:"ic:twotone-arrow-back-ios",onClick:()=>{window.location.href="/"}}),e.jsx(s,{children:n})]}),subheader:x,sx:{px:"10%",pb:2}}),e.jsx(J,{sx:{borderStyle:"dashed"}}),e.jsxs(d,{container:!0,px:"10%",children:[e.jsx(d,{item:!0,xs:12,children:e.jsx(c,{variant:"h2",sx:{px:5,pt:3,pb:1},children:n})}),e.jsx(d,{item:!0,xs:12,sx:{mb:1},children:e.jsx(c,{variant:"h5",sx:{px:5,pb:1},children:x})}),e.jsx(d,{item:!0,xs:12,sx:{px:5,pb:3},children:e.jsxs(l,{direction:"row",spacing:3,display:"flex",justifyContent:"left",children:[e.jsx($,{variant:"outlined",value:"123",sx:{maxWidth:"250px",flexGrow:1,py:2.5,mb:5,mt:3,textAlign:"center",borderStyle:"dashed",backgroundColor:D[0]+P},children:e.jsxs(l,{direction:"row",justifyContent:"center",display:"flex",spacing:G,children:[e.jsxs(l,{direction:"column",justifyContent:"center",display:"flex",children:[e.jsx(c,{sx:{fontSize:34},children:u}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:"Questions"})]}),e.jsx(l,{direction:"column",justifyContent:"center",display:"flex",children:e.jsx(s,{sx:{mb:1},children:e.jsx(v,{icon:z[0],color:"black",width:40})})})]})},"aa"),e.jsx($,{variant:"outlined",value:"123",sx:{maxWidth:"250px",flexGrow:1,py:2.5,mb:5,mt:3,textAlign:"center",borderStyle:"dashed",backgroundColor:D[0]+P},children:e.jsxs(l,{direction:"row",justifyContent:"center",display:"flex",spacing:G,children:[e.jsxs(l,{direction:"column",justifyContent:"center",display:"flex",children:[e.jsxs(c,{sx:{fontSize:30},children:[t," min"]}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:"Estimated Time"})]}),e.jsx(l,{direction:"column",justifyContent:"center",display:"flex",children:e.jsx(s,{sx:{mb:1},children:e.jsx(v,{icon:z[1],color:"black",width:40})})})]})},"aa"),e.jsx($,{variant:"outlined",value:"123",sx:{maxWidth:"250px",flexGrow:1,py:2.5,mb:5,mt:3,textAlign:"center",borderStyle:"dashed",backgroundColor:D[0]+P},children:e.jsxs(l,{direction:"row",justifyContent:"center",display:"flex",spacing:G,children:[e.jsxs(l,{direction:"column",justifyContent:"center",display:"flex",children:[e.jsx(c,{sx:{fontSize:34},children:te({surveyParticipatedCount:i})}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:"Participated"})]}),e.jsx(l,{direction:"column",justifyContent:"center",display:"flex",children:e.jsx(s,{sx:{mb:1},children:e.jsx(v,{icon:z[2],color:"black",width:40})})})]})},"aa")]})}),e.jsx(d,{item:!0,xs:4,sx:{mb:6},children:e.jsx(s,{component:"img",alt:n,src:f,sx:{objectFit:"cover",ml:5}})}),e.jsx(d,{item:!0,xs:8,sx:{mb:6},children:e.jsx(c,{variant:"body2",sx:{fontSize:"15px",color:"text.secondary",ml:7},children:p})}),e.jsx(d,{item:!0,xs:12,sx:{mb:10},children:e.jsx(l,{direction:"row",justifyContent:"center",children:e.jsx(E,{onClick:()=>g(k+1),variant:"contained",sx:{width:"80%",height:40,fontSize:20,backgroundColor:"black"},children:"Go To Survey!"})})})]})]})}K.propTypes={title:r.string,subtitle:r.string,surveyMainImg:r.string,surveyExplain:r.string,surveyQuestions:r.number,surveyETA:r.number,surveyParticipatedCount:r.number,currentQuestion:r.number,setCurrentQuestion:r.any.isRequired};const M=["#ff0000","#ff7f50","#ffd700","#00ff7f","#1e90ff"],B=50,I=3.3,N="#ffffff";function V({currentQuestion:n,userAnswer:x,requestLanguage:f,subtitle:p,questionobjects:t,surveyname:u,title:i,...k}){const g="/Results/".concat(u).concat("Result"),[w,C]=_.useState(!0);_.useEffect(()=>{const a=localStorage.getItem("token");(async()=>{try{const b=await fetch("https://leadershipsurvey.pythonanywhere.com/save_user_answer/",{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({surveyname_:u,data:x})});if(b.ok){const R=await b.json();console.log(R),C(!1)}}catch(b){console.error("Error fetching data:",b)}})()},[x,u]);const h=[],j=e.jsx(s,{sx:{backgroundColor:"#e9ecec",flexGrow:1,borderRadius:"15px",height:"10px",color:"#e9ecec"},children:"-"});for(let a=0;a<n;a+=1)t[Object.keys(t)[a]].value_type==="int"?h.push(e.jsx(s,{sx:{backgroundColor:M[x[Object.keys(t)[a]]-1],flexGrow:1,borderRadius:"15px",height:"10px",color:M[x[Object.keys(t)[a]]-1]},children:"-"})):h.push(e.jsx(s,{sx:{backgroundColor:"#2ec7c1",flexGrow:1,borderRadius:"15px",height:"10px",color:"#2ec7c1"},children:"-"}));for(let a=0;a<Object.keys(t).length-n;a+=1)h.push(j);const m=[];if(Object.keys(t).length>B)for(let a=0;a<h.length;a+=B)m.push(h.slice(a,a+B));else m.push(h);return console.log(t[Object.keys(t)[0]].question_title),console.log(t[Object.keys(t)[1]]),e.jsxs(H,{...k,sx:{marginTop:2,paddingTop:5},children:[e.jsx(U,{title:e.jsxs(l,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(v,{icon:"ic:twotone-arrow-back-ios",onClick:()=>{window.location.reload()}}),e.jsx(s,{children:i})]}),subheader:p,sx:{px:"10%"}}),e.jsx(l,{direction:"column",children:m.map((a,T)=>e.jsx(l,{direction:"row",spacing:1,sx:{mx:"10%",pt:1,marginBottom:1,justifyContent:"center"},display:"flex",children:a.map((b,R)=>b)},T))}),e.jsx(J,{sx:{borderStyle:"dashed"}}),e.jsxs(s,{sx:{backgroundColor:N,pt:9,pb:9,mt:4,mx:"10%",px:4,mb:25,border:"3px solid #e9ecec",borderRadius:2,display:"flex",minHeight:"400px",flexDirection:"column",alignItems:"center",justifyContent:"center"},position:"relative",children:[w?e.jsx(q,{}):e.jsxs(e.Fragment,{children:[e.jsx(c,{id:"modal-modal-description",textAlign:"center",sx:{mt:2},variant:"h4",children:u}),e.jsxs(c,{id:"modal-modal-title",textAlign:"center",variant:"h2",component:"h2",children:["Thank you for Survey",e.jsx(v,{icon:"el:check",width:40,sx:{ml:3,color:"#01f400 "}})]})]}),e.jsxs(l,{direction:"row",justifyContent:"center",spacing:4,sx:{mt:10},children:[e.jsx(E,{onClick:()=>{window.loacation.href="/"},sx:{width:"100%",mb:5,px:10},variant:"outlined",children:e.jsx(L,{href:"/",sx:{color:"primary",py:1,fontWeight:800,fontSize:"17px"},children:"Go Home"})}),e.jsx(E,{onClick:()=>{window.loacation.href=g},sx:{width:"100%",mb:5,px:10},variant:"contained",children:e.jsx(L,{href:g,sx:{color:"#ffffff",py:1},children:"See results"})})]}),e.jsx(s,{position:"absolute",sx:{zIndex:"-1",backgroundColor:N,width:`calc(100% - ${2*I}%)`,height:"100%",bottom:`calc(${-1*I}%)`,left:`calc(${I}%)`,border:"3px solid #e9ecec",borderRadius:2},children:"shadow"}),e.jsx(s,{position:"absolute",sx:{zIndex:"-2",width:`calc(100% - ${2*2*I}%)`,backgroundColor:N,height:"100%",bottom:`calc(${-1.7*I}%)`,left:`calc(${2*I}%)`,border:"3px solid #e9ecec",borderRadius:2},children:"shadow"})]})]})}V.propTypes={title:r.string,subtitle:r.string,userAnswer:r.array.isRequired,requestLanguage:r.string,surveyname:r.string,questionobjects:r.any.isRequired,currentQuestion:r.number};const oe={emotion:[{name:"Bad",value:1,icon:"ri:emotion-sad-line",color:"#ff0000"},{name:"SoSo",value:2,icon:"ic:baseline-mood-bad",color:"#ff7f50"},{name:"Okay",value:3,icon:"tdesign:emo-emotional",color:"#ffd700"},{name:"Good",value:4,icon:"icon-park-outline:emotion-happy",color:"#00ff7f"},{name:"Perfect",value:5,icon:"fa6-regular:face-laugh-squint",color:"#1e90ff"}],interested:[{name:"Not Interested",value:1,icon:"ri:emotion-sad-line",color:"#ff0000"},{name:"Slightly Interested",value:2,icon:"ic:baseline-mood-bad",color:"#ff7f50"},{name:"Moderately Interested",value:3,icon:"tdesign:emo-emotional",color:"#ffd700"},{name:"Very Interested",value:4,icon:"icon-park-outline:emotion-happy",color:"#00ff7f"},{name:"Strongly Interested",value:5,icon:"fa6-regular:face-laugh-squint",color:"#1e90ff"}],competency_degree:[{name:"Strongly Disagree",value:1,icon:"ri:emotion-sad-line",color:"#ff0000"},{name:"Disagree",value:2,icon:"ic:baseline-mood-bad",color:"#ff7f50"},{name:"Neutral",value:3,icon:"tdesign:emo-emotional",color:"#ffd700"},{name:"Agree",value:4,icon:"icon-park-outline:emotion-happy",color:"#00ff7f"},{name:"Strongly Agree",value:5,icon:"fa6-regular:face-laugh-squint",color:"#1e90ff"}]},ne="23",W=50,O=3.3,F="#ffffff";function X({currentQuestion:n,setCurrentQuestion:x,setUserAnswer:f,userAnswer:p,questionobjects:t,title:u,requestLanguage:i,subtitle:k,surveyname:g,...w}){if(n===Object.keys(t).length){const o=localStorage.getItem("token");(async()=>{try{(await fetch("http://127.0.0.1:8000/send_user_answer/",{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify({surveyname_:g,data:p})})).ok}catch(A){console.error("Error fetching data:",A)}})()}console.log(i),console.log(n);const C=o=>{const S={...p};S[Object.keys(t)[n]]=o,f(S),console.log(123,p,S),x(n+1)},h=[],j=e.jsx(s,{sx:{backgroundColor:"#e9ecec",flexGrow:1,borderRadius:"15px",height:"10px",color:"#e9ecec"},children:"-"});for(let o=0;o<n;o+=1)t[Object.keys(t)[o]].value_type==="int"?h.push(e.jsx(s,{sx:{backgroundColor:"#2ec7c1",flexGrow:1,borderRadius:"15px",height:"10px",color:"#2ec7c1"},children:"-"})):h.push(e.jsx(s,{sx:{backgroundColor:"#2ec7c1",flexGrow:1,borderRadius:"15px",height:"10px",color:"#2ec7c1"},children:"-"}));for(let o=0;o<Object.keys(t).length-n;o+=1)h.push(j);const m=[];if(Object.keys(t).length>W)for(let o=0;o<h.length;o+=W)m.push(h.slice(o,o+W));else m.push(h);console.log(t[Object.keys(t)[0]].question_title),console.log(t[Object.keys(t)[1]]);const a=t[Object.keys(t)[n]],T=a.question_label;console.log(T);const b=T==="stringinput",R=a.question_required,Z=o=>{o.keyCode===13&&(console.log("엔터 키가 눌렸습니다."),C(o.target.value),o.target.value="",x(n+1))};return e.jsxs(H,{...w,sx:{marginTop:2,paddingTop:5},children:[e.jsx(U,{title:e.jsxs(l,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(v,{icon:"ic:twotone-arrow-back-ios",onClick:()=>{window.location.reload()},width:45}),e.jsx(s,{children:e.jsx(c,{variant:"h2",children:u})})]}),subheader:k,sx:{px:"10%"}}),e.jsx(J,{sx:{borderStyle:"dashed",my:1}}),e.jsx(c,{fontSize:13,color:"#ff333f",position:"absolute",left:"10%",children:a.question_notice[i]}),e.jsxs(s,{sx:{backgroundColor:F,pt:2,mt:7,mx:"10%",px:4,mb:10,pb:2,border:"3px solid #e9ecec",borderRadius:2,display:"flex",minHeight:"600px",flexDirection:"column",alignItems:"space-around",justifyContent:"space-between"},position:"relative",children:[e.jsxs(c,{id:"modal-modal-title",textAlign:"center",variant:"h4",component:"h2",children:["👉  ",t[Object.keys(t)[n]].question_title[i]]}),e.jsxs(l,{direction:"column",children:[e.jsx(c,{id:"modal-modal-description",textAlign:"center",variant:"h4",sx:{mt:2,mb:5},children:t[Object.keys(t)[n]].question_basic[i]}),e.jsx(c,{id:"modal-modal-description",textAlign:"center",children:t[Object.keys(t)[n]].question_details[i]})]}),b?e.jsx(s,{sx:{maxWidth:"900px",width:"100%",p:3,pt:4,display:"grid",ml:"50%",transform:"translate(-50%, 0%)"},children:e.jsxs(d,{container:!0,children:[e.jsx(d,{item:!0,xs:8,sx:{pb:5},children:e.jsx(c,{variant:"body1",fontWeight:800,children:"Please enter the value and press Enter Or Click Next Button    👉"})}),e.jsx(d,{item:!0,xs:4,children:e.jsx(E,{color:"info",onClick:()=>{x(n+1)},variant:"contained",fullWidth:!0,children:"Next"})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(Q,{fullWidth:!0,required:R,label:"Answer Here! (≧∇≦)",onKeyDown:Z})})]})}):e.jsx(s,{sx:{maxWidth:"900px",width:"100%",p:3,gap:2.5,display:"grid",gridTemplateColumns:"repeat(5, 1fr)",justifyContent:"center",ml:"50%",transform:"translate(-50%, 0%)"},children:oe[T].map((o,S)=>e.jsxs($,{variant:"outlined",value:o.value,onClick:()=>C(o.value),sx:{py:1.5,textAlign:"center",borderStyle:"dashed",backgroundColor:o.color+ne},children:[e.jsx(s,{sx:{mb:1},children:e.jsx(v,{icon:o.icon,color:o.color,width:32})}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:o.name})]},o.name))}),e.jsx(s,{position:"absolute",sx:{zIndex:"-1",backgroundColor:F,width:`calc(100% - ${2*O}%)`,height:"100%",bottom:`calc(${-1*O}%)`,left:`calc(${O}%)`,border:"3px solid #e9ecec",borderRadius:2},children:"shadow"}),e.jsx(s,{position:"absolute",sx:{zIndex:"-2",width:`calc(100% - ${2*2*O}%)`,backgroundColor:F,height:"100%",bottom:`calc(${-1.7*O}%)`,left:`calc(${2*O}%)`,border:"3px solid #e9ecec",borderRadius:2},children:"shadow"})]}),e.jsx(l,{direction:"column",width:"100%",children:g==="JMLeadershipEvaluationSurvey"?e.jsx(e.Fragment,{children:"."}):e.jsx(e.Fragment,{children:m.map((o,S)=>e.jsx(l,{direction:"row",spacing:1,sx:{mx:"10%",pb:0,marginBottom:1,justifyContent:"center"},display:"flex",children:o.map((A,se)=>A)},S))})})]})}X.propTypes={title:r.string,subtitle:r.string,currentQuestion:r.array.isRequired,userAnswer:r.array.isRequired,questionobjects:r.array.isRequired,setCurrentQuestion:r.any.isRequired,setUserAnswer:r.any.isRequired,requestLanguage:r.string,surveyname:r.string};const re={personal_information1:"",personal_information2:"",personal_information3:"",personal_information4:"",personal_information5:"",personal_information6:"",personal_information7:""},y="en";function Y({surveyname:n}){let x={};n==="PersonalInformationSurvey"&&(x=re);const[f,p]=_.useState(-1),[t,u]=_.useState(x),[i,k]=_.useState({}),[g,w]=_.useState(!0),C=localStorage.getItem("token");return _.useEffect(()=>{(async()=>{try{const j=await fetch("https://leadershipsurvey.pythonanywhere.com/send_to_survey_form/",{method:"POST",headers:{Authorization:`Bearer ${C}`,"Content-Type":"application/json"},body:JSON.stringify({surveyname_:n,language:y})});if(j.ok){const m=await j.json();console.log(m),k(m),w(!1)}}catch(j){console.error("Error fetching data:",j)}})()},[C,n]),g?e.jsx(d,{xs:12,md:6,lg:4,children:e.jsx(q,{})}):(console.log(f),console.log(Object.keys(i.data).length),f<0?e.jsx(d,{xs:12,md:6,lg:4,children:e.jsx(K,{title:i.meta.survey_title[y],subtitle:i.meta.survey_subtitle[y],surveyExplain:i.meta.survey_index_description[y],surveyQuestions:i.meta.question_counts,surveyETA:i.meta.survey_ETAmin,surveyMainImg:i.meta.survey_img,surveyParticipatedCount:i.meta.participated_count,setCurrentQuestion:p,currentQuestion:f})}):f>=Object.keys(i.data).length?e.jsx(d,{xs:12,md:6,lg:4,children:e.jsx(V,{questionobjects:i.data,requestLanguage:y,title:i.meta.survey_title[y],subtitle:i.meta.survey_subtitle[y],currentQuestion:f,userAnswer:t,surveyname:n})}):e.jsx(d,{xs:12,md:6,lg:4,children:e.jsx(X,{questionobjects:i.data,requestLanguage:y,title:i.meta.survey_title[y],subtitle:i.meta.survey_subtitle[y],currentQuestion:f,setCurrentQuestion:p,setUserAnswer:u,userAnswer:t,surveyname:n})}))}Y.propTypes={surveyname:r.string};function ie({surveyname:n}){return e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:e.jsx("title",{children:" Take Survey "})}),e.jsx(Y,{surveyname:n})]})}ie.propTypes={surveyname:r.string};export{ie as default};