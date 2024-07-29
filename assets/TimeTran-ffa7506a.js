import{d as g,l as U,o as O,m as P,r as n,b as r,c as V,h as a,f as i,w as o,i as s,t as $,j as _,n as B,g as T,v as J,q as j,F as I,e as N,_ as z}from"./index-17477c0a.js";import{J as c,a as D,b as k}from"./time-bfbe2dc8.js";import{D as F,c as H}from"./DetailHeader-47695dd5.js";const M={class:"flex flex-col mt-3 ml-4 flex-1"},q={class:"flex flex-col p-4 rounded-2xl bg-white"},E={class:"flex flex-direction"},G={class:"flex flex-direction mt-4 justify-start"},L={class:"flex flex-direction mt-4 justify-start"},R={class:"p-4 rounded-2xl bg-white mt-5"},A=i("div",{class:"text-xl mt-5 mb-5"},"时间戳",-1),K=g({__name:"TimeTran",setup(Q){const e=U({title:"时间戳转换",nowTime:c(),isPlay:!0,waitTimeStamp:c(),tranTimeStamp:0,waitDate:D(c(),"{y}-{m}-{d} {h}:{i}:{s}"),tranDate:"",chooseTranStampOption:"0",chooseTranDateOption:"0",tranOptions:[{value:"0",label:"毫秒(ms)"},{value:"1",label:"秒(s)"}]});let d;const w=()=>{d||(d=setInterval(()=>{e.nowTime=c()},1e3))},x=()=>{clearInterval(d),d=null};O(()=>{w()}),P(()=>{x()});const v=()=>{e.isPlay==!0?(e.isPlay=!1,x()):(e.isPlay=!0,w())},S=y=>{y=="toStamp"?e.tranTimeStamp=e.chooseTranStampOption=="0"?k(e.waitDate):k(e.waitDate)/1e3:(typeof e.waitTimeStamp=="string"&&(e.waitTimeStamp=parseInt(e.waitTimeStamp)),e.tranDate=D(e.waitTimeStamp,"{y}-{m}-{d} {h}:{i}:{s}"))},b=async()=>{H(""+e.nowTime)};return(y,t)=>{const p=n("el-text"),f=n("el-icon"),m=n("el-button"),u=n("el-input"),h=n("el-option"),C=n("el-select");return r(),V("div",M,[a(F,{title:e.title},null,8,["title"]),i("div",q,[i("div",E,[a(p,{class:"mr-2 w-12"},{default:o(()=>[s("现在")]),_:1}),a(m,{class:"mr-3",link:"",onClick:t[0]||(t[0]=l=>b())},{default:o(()=>[s($(e.nowTime)+" ",1),a(f,{class:"ml-1 mr-1"},{default:o(()=>[a(_(B))]),_:1})]),_:1}),e.isPlay?(r(),T(m,{key:0,type:"danger",link:"",class:"flex items-center",onClick:t[1]||(t[1]=l=>v())},{default:o(()=>[a(f,{class:"mr-1",size:"16"},{default:o(()=>[a(_(J))]),_:1}),s("停止")]),_:1})):(r(),T(m,{key:1,type:"primary",link:"",class:"flex items-center",onClick:t[2]||(t[2]=l=>v())},{default:o(()=>[a(f,{class:"mr-1",size:"16"},{default:o(()=>[a(_(j))]),_:1}),s("开始")]),_:1}))]),i("div",G,[a(p,{class:"mr-2 w-12"},{default:o(()=>[s("时间戳")]),_:1}),a(u,{modelValue:e.waitTimeStamp,"onUpdate:modelValue":t[3]||(t[3]=l=>e.waitTimeStamp=l),class:"h-8 mr-2 w-60 max-w-[30%]",placeholder:"毫秒/秒"},null,8,["modelValue"]),a(m,{class:"mr-2 max-w-[25%]",onClick:t[4]||(t[4]=l=>S("toDate"))},{default:o(()=>[s("转换")]),_:1}),a(u,{modelValue:e.tranDate,"onUpdate:modelValue":t[5]||(t[5]=l=>e.tranDate=l),class:"h-8 w-72 mr-2 max-w-[30%]",placeholder:"北京时间"},null,8,["modelValue"])]),i("div",L,[a(p,{class:"mr-2 w-12"},{default:o(()=>[s("时间")]),_:1}),a(u,{modelValue:e.waitDate,"onUpdate:modelValue":t[6]||(t[6]=l=>e.waitDate=l),class:"h-8 mr-2 w-60 max-w-[30%]"},null,8,["modelValue"]),a(m,{class:"mr-2 max-w-[25%]",onClick:t[7]||(t[7]=l=>S("toStamp"))},{default:o(()=>[s("转换")]),_:1}),a(u,{modelValue:e.tranTimeStamp,"onUpdate:modelValue":t[9]||(t[9]=l=>e.tranTimeStamp=l),value:e.tranTimeStamp==0?"":e.tranTimeStamp,class:"h-8 w-72 mr-2 max-w-[30%]",placeholder:"时间戳"},{prepend:o(()=>[a(C,{modelValue:e.chooseTranStampOption,"onUpdate:modelValue":t[8]||(t[8]=l=>e.chooseTranStampOption=l),placeholder:"Select",class:"w-24"},{default:o(()=>[(r(!0),V(I,null,N(e.tranOptions,l=>(r(),T(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue","value"])])]),i("div",R,[A,a(p,null,{default:o(()=>[s("Unix 时间戳是从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒。")]),_:1})])])}}}),Z=z(K,[["__file","D:/3code/14H5/tools-vue-ts/src/components/Tools/TimeTran/TimeTran.vue"]]);export{Z as default};
