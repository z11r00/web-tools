import{D as f,c as x}from"./DetailHeader-47695dd5.js";import{l as y,g as h}from"./vue-codemirror.esm-80056964.js";import{d as R,l as b,r as d,b as v,c as V,h as n,f as s,j as g,w as c,i,_ as U}from"./index-17477c0a.js";const C={class:"flex flex-col mt-3 flex-1"},k={class:"p-4 rounded-2xl bg-white"},w={class:"mt-4"},D={class:"mt-3 min-h-md bg-gray-100 p-3 mb-3"},N=R({__name:"Unicode",setup(A){const e=b({title:"Unicode转中文",extensions:[y()],content:"",tranRes:""}),r=()=>{e.tranRes=""},u=()=>{r();let t=e.content;t=t.replace(/\\/g,"%"),t=unescape(t),e.tranRes=t},p=()=>{r();for(let t=0;t<e.content.length;t++)if(/^[\u4E00-\u9FA5\uF900-\uFA2D]+$/.test(e.content[t])){let o=e.content.charCodeAt(t).toString(16);e.tranRes+="\\u"+o}else e.tranRes+=e.content[t]},m=async()=>{x(e.tranRes)};return(t,o)=>{const l=d("el-button"),_=d("el-input");return v(),V("div",C,[n(f,{title:e.title},null,8,["title"]),s("div",k,[s("div",null,[n(g(h),{modelValue:e.content,"onUpdate:modelValue":o[0]||(o[0]=a=>e.content=a),placeholder:"",style:{height:"200px"},autofocus:!0,"indent-with-tab":!0,tabSize:2,extensions:e.extensions},null,8,["modelValue","extensions"])]),s("div",w,[n(l,{type:"primary",onClick:u},{default:c(()=>[i("unicode转中文")]),_:1}),n(l,{type:"primary",onClick:p},{default:c(()=>[i("中文转unicode")]),_:1}),n(l,{type:"primary",onClick:m},{default:c(()=>[i("复制结果")]),_:1})]),s("div",D,[n(_,{type:"textarea",rows:8,modelValue:e.tranRes,"onUpdate:modelValue":o[1]||(o[1]=a=>e.tranRes=a)},null,8,["modelValue"])])])])}}}),T=U(N,[["__file","D:/3code/14H5/tools-vue-ts/src/components/Tools/Unicode/Unicode.vue"]]);export{T as default};
