import{D as _,c as f}from"./DetailHeader-47695dd5.js";import{d as v,l as x,B as y,r as i,b as R,c as V,h as o,f as l,w as m,i as p,_ as D}from"./index-17477c0a.js";const b={class:"flex flex-col mt-3 flex-1"},w={class:"p-4 rounded-2xl bg-white"},T={class:"mt-4"},h={class:"mt-3 min-h-md bg-gray-100 p-3 mb-3"},C=v({__name:"TextRemoveDuplicate",setup(g){const e=x({title:"文本去重",content:"",tranRes:""}),u=()=>{e.content=""},a=y(()=>{let r=e.content.split(`
`),t=new Set(r),n=Array.from(t);return e.tranRes=n.join(`
`),e.tranRes}),d=async()=>{f(e.tranRes)};return(r,t)=>{const n=i("el-input"),c=i("el-button");return R(),V("div",b,[o(_,{title:e.title},null,8,["title"]),l("div",w,[l("div",null,[o(n,{type:"textarea",rows:8,modelValue:e.content,"onUpdate:modelValue":t[0]||(t[0]=s=>e.content=s)},null,8,["modelValue"])]),l("div",T,[o(c,{type:"primary",onClick:d},{default:m(()=>[p("复制结果")]),_:1}),o(c,{type:"danger",onClick:u},{default:m(()=>[p("清空内容")]),_:1})]),l("div",h,[o(n,{type:"textarea",rows:8,modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value=s)},null,8,["modelValue"])])])])}}}),A=D(C,[["__file","D:/3code/14H5/tools-vue-ts/src/components/Tools/TextRemoveDuplicate/TextRemoveDuplicate.vue"]]);export{A as default};
