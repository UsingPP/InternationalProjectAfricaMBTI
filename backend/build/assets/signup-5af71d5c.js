import{u as E,r as M,j as e,S as d,B as _,R as v,q as h,U as Y,L as O,a as u,T as b,d as x,W as S}from"./index-e4c90194.js";import{T as a}from"./TextField-7bf38d0c.js";import{G as c}from"./Grid-8a200693.js";import{L as W}from"./LoadingButton-a084c3ff.js";import{C as T}from"./Card-c3f6a303.js";import{D as q}from"./Divider-2d64dca1.js";import"./Select-683676ad.js";import"./Menu-9b0e473f.js";import"./useControlled-4b3cd520.js";import"./useId-7cc60968.js";import"./formControlState-129f4439.js";import"./isMuiElement-78255cb1.js";import"./CircularProgress-cb195e23.js";const F=/^(19[0-9][0-9]|20\d{2})$/,I=/^([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])$/,R=/^(1[0-2]|[1-9]|0[1-9])$/;function L(){const l=E(),[t,f]=M.useState({name:"",birthdate_YY:"",birthdate_MM:"",birthdate_DD:"",userid:"",password:"",passwordConfirm:"",ispasswordMatch:!0,isyearOk:!0,ismonthOk:!0,isdayOk:!0,submitokay:!1,passwordMatchError:"",birYearError:"",birMonthError:"",birDayError:""}),i=m=>{const{name:s,value:o}=m.target,r={...t,[s]:o};s==="passwordConfirm"&&(r.submitokay=!0,r.ispasswordMatch=o===t.password),s.slice(0,-3)==="birthdate"&&(s==="birthdate_YY"&&!F.test(o)?(r.isyearOk=!1,r.birYearError="태어난 년도 4자리를 정확하게 입력하세요."):(r.isyearOk=!0,r.birYearError="",r.submitokay=!0),s==="birthdate_MM"&&!R.test(o)?(r.ismonthOk=!1,r.birMonthError="태어난 월을 정확하게 입력해주세요"):(r.ismonthOk=!0,r.birMonthError="",r.submitokay=!0),s==="birthdate_DD"&&!I.test(o)?(r.isdayOk=!1,r.birDayError="태어난 일을 정확하게 입력해주세요"):(r.birDayError="",r.isdayOk=!0,r.submitokay=!0)),f(r)},y=async m=>{if(m.preventDefault(),["name","birthdate_YY","birthdate_MM","birthdate_DD","userid","password","passwordConfirm"].some(n=>!t[n])){window.alert("Please fill in all required fields.");return}const{birthdate_YY:r,birthdate_MM:w,birthdate_DD:D,...k}=t,C=`${r}/${w}/${D}`,g={...k,birthdate:C};try{console.log(g);const n=await fetch("https://leadershipsurvey.pythonanywhere.com/signup/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}),p=await n.json();p.message==="EXISTS_ID"?(console.log(p),window.alert("The same ID exists")):p.message==="success"?(window.alert("success"),window.location.href="/signin"):console.log("서버오류 : ",n.status)}catch(n){console.error("오류:",n)}},j=e.jsxs(e.Fragment,{children:[e.jsxs(d,{spacing:3,children:[e.jsx(a,{label:"name",name:"name",margin:"dense",required:!0,fullWidth:!0,autoFocus:!0,onChange:i}),e.jsxs(c,{container:!0,children:[e.jsx(c,{item:!0,xs:4,paddingRight:"4px",children:e.jsx(a,{label:"birthyear",name:"birthdate_YY",margin:"dense",required:!0,fullWidth:!0,value:t.birthdate_YY,onChange:i,error:t.isyearOk===!1,helperText:t.birYearError})}),e.jsx(c,{item:!0,xs:4,children:e.jsx(a,{label:"birthmonth",name:"birthdate_MM",margin:"dense",required:!0,fullWidth:!0,value:t.birthdate_MM,onChange:i,error:t.ismonthOk===!1,helperText:t.birMonthError})}),e.jsx(c,{item:!0,xs:4,paddingLeft:"4px",children:e.jsx(a,{label:"birthdate",name:"birthdate_DD",margin:"dense",required:!0,fullWidth:!0,value:t.birthdate_DD,onChange:i,error:t.isdayOk===!1,helperText:t.birDayError})})]}),e.jsx(a,{label:"ID",name:"userid",margin:"dense",required:!0,fullWidth:!0,onChange:i}),e.jsx(a,{label:"PassWord",type:"password",name:"password",required:!0,fullWidth:!0,onChange:i,margin:"dense"}),e.jsx(a,{label:"Password Confirm",type:"password",name:"passwordConfirm",required:!0,fullWidth:!0,margin:"dense",onChange:i,error:t.ispasswordMatch===!1,helperText:t.errormessage})]}),e.jsx(W,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:y,sx:{mt:3},children:"SignIn"})]});return e.jsxs(_,{sx:{...v({color:h(l.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[e.jsx(Y,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),e.jsx(d,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsxs(T,{sx:{p:5,width:1,maxWidth:420},children:[e.jsxs(d,{direction:"row",spacing:2,alignItems:"center",position:"relative",children:[e.jsx(O,{href:"login",children:e.jsx(u,{position:"absolute",sx:{top:9},icon:"ic:twotone-arrow-back-ios"})}),e.jsx(b,{variant:"h4",sx:{pl:2,pb:5},children:"Sign Up"})]}),e.jsxs(d,{direction:"row",spacing:2,children:[e.jsx(x,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:h(l.palette.grey[500],.16)},children:e.jsx(u,{icon:"eva:google-fill",color:"#DF3E30"})}),e.jsx(x,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:h(l.palette.grey[500],.16)},children:e.jsx(u,{icon:"eva:facebook-fill",color:"#1877F2"})}),e.jsx(x,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:h(l.palette.grey[500],.16)},children:e.jsx(u,{icon:"eva:twitter-fill",color:"#1C9CEA"})})]}),e.jsx(q,{sx:{my:3},children:e.jsx(b,{variant:"body2",sx:{color:"text.secondary"},children:"OR"})}),e.jsx("form",{children:j})]})})]})}function Q(){return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx("title",{children:" SignUp "})}),e.jsx(L,{})]})}export{Q as default};
