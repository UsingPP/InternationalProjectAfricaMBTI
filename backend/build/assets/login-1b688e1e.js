import{u as w,r as c,j as e,S as r,G as d,I as y,a as v,L as h,B as I,a2 as b,v as S,a3 as C,T as p,W as L}from"./index-1991390c.js";import{I as k}from"./InputAdornment-23391043.js";import{L as D}from"./LoadingButton-c33fbd81.js";import{C as P}from"./Card-2b826d76.js";import"./CircularProgress-da6e6576.js";function T(){const u=w(),[a,g]=c.useState(!1),[t,i]=c.useState({userid:"",password:""});function l(s){const n={...t};n[s.target.name]=s.target.value,i(n)}const m=async s=>{s.preventDefault(),console.log(t);try{const o=await(await fetch("https://leadershipsurvey.pythonanywhere.com/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();if(console.log(o),o.message==="success"){console.log("로그인성공");const{token:f,name:j}=o;localStorage.setItem("token",f),localStorage.setItem("name",j),window.location.href="/"}else o.message==="ID or password is incorrect"&&(window.alert("ID or password is incorrect"),i({userid:"",password:""}))}catch(n){console.error("오류:",n)}},x=e.jsxs(e.Fragment,{children:[e.jsxs(r,{spacing:3,children:[e.jsx(d,{name:"userid",label:"User ID",value:t.userid,onChange:s=>l(s),required:!0}),e.jsx(d,{value:t.password,name:"password",label:"Password",type:a?"text":"password",onChange:s=>l(s),InputProps:{endAdornment:e.jsx(k,{position:"end",children:e.jsx(y,{onClick:()=>g(!a),edge:"end",children:e.jsx(v,{icon:a?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),e.jsx(r,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{my:3},children:e.jsx(h,{variant:"subtitle2",underline:"hover",children:"Forgot password?"})}),e.jsx(D,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:m,children:"Login"})]});return e.jsxs(I,{sx:{...b({color:S(u.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(C,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),e.jsx(r,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(P,{sx:{p:5,width:1,maxWidth:420},children:[e.jsx(p,{variant:"h4",children:"Sign in"}),e.jsxs(p,{variant:"body2",sx:{mt:2,mb:5},children:["Don’t have an account?",e.jsx(h,{variant:"subtitle2",sx:{ml:.5},href:"/signup",children:"Get started"})]}),x]})})]})}function E(){return e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsx("title",{children:" Login "})}),e.jsx(T,{})]})}export{E as default};