import{D as g,g as f,c as b}from"./DetailHeader-47695dd5.js";import{d as x,l as N,o as y,r as c,b as U,c as S,h as a,f as d,w as r,i as s,H as w,_}from"./index-17477c0a.js";const C={class:"flex flex-col mt-3 flex-1"},L={class:"p-4 rounded-2xl bg-white"},v={class:"mt-3 mb-3"},R=x({__name:"RandomPassword",setup(z){const e=N({title:"随机密码生成",char:"",pwLen:10,pwNum:5,resStr:"",autosize:{minRows:5},checkedUpper:!0,checkedLower:!0,checkedNum:!0,checkedSign:!1,charNum:"0123456789",charUpper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",charLower:"abcdefghijklmnopqrstuvwxyz",cahrSign:"~!@#$%^&*()_+"}),h=()=>{if(e.char==""){w({message:"包含字符不能为空",type:"warning",duration:1500});return}if(e.pwLen>100){w({message:"生成长度范围在1~100",type:"warning",duration:1500});return}if(e.pwNum>100){w({message:"生成数量范围在1~100",type:"warning",duration:1500});return}e.resStr="";for(let t=1;t<=e.pwNum;t++){let o=`
`;t==e.pwNum&&(o=""),e.resStr+=f(e.char,e.pwLen)+o}},n=(t,o)=>{switch(o){case 0:u(t,/\d+/g,e.charNum);break;case 1:u(t,/[a-z]/g,e.charLower);break;case 2:u(t,/[A-Z]/g,e.charUpper);break;case 3:u(t,/[~!@#$%^&*()_+]/g,e.cahrSign);break;default:e.char="";break}},u=(t,o,i)=>{t==!0?e.char+=i:e.char=e.char.replace(o,"")},V=async t=>{b(t)};return y(()=>{n(e.checkedNum,0),n(e.checkedLower,1),n(e.checkedUpper,2),n(e.checkedSign,3)}),(t,o)=>{const i=c("el-text"),m=c("el-checkbox"),p=c("el-input"),k=c("el-button");return U(),S("div",C,[a(g,{title:e.title},null,8,["title"]),d("div",L,[a(i,null,{default:r(()=>[s("密码组合")]),_:1}),d("div",null,[a(m,{modelValue:e.checkedNum,"onUpdate:modelValue":o[0]||(o[0]=l=>e.checkedNum=l),label:"数字(0-9)",onChange:o[1]||(o[1]=l=>n(l,0))},null,8,["modelValue"]),a(m,{modelValue:e.checkedLower,"onUpdate:modelValue":o[2]||(o[2]=l=>e.checkedLower=l),label:"小写字母(a-z)",onChange:o[3]||(o[3]=l=>n(l,1))},null,8,["modelValue"]),a(m,{modelValue:e.checkedUpper,"onUpdate:modelValue":o[4]||(o[4]=l=>e.checkedUpper=l),label:"大写字母(A-Z)",onChange:o[5]||(o[5]=l=>n(l,2))},null,8,["modelValue"]),a(m,{modelValue:e.checkedSign,"onUpdate:modelValue":o[6]||(o[6]=l=>e.checkedSign=l),label:"其他符号(~!@#$%^&*()-+_=,.)",onChange:o[7]||(o[7]=l=>n(l,3))},null,8,["modelValue"])]),d("div",null,[a(p,{class:"",modelValue:e.char,"onUpdate:modelValue":o[8]||(o[8]=l=>e.char=l)},{prepend:r(()=>[s("包含字符:")]),_:1},8,["modelValue"]),a(p,{modelValue:e.pwLen,"onUpdate:modelValue":o[9]||(o[9]=l=>e.pwLen=l),placeholder:"范围1~100",class:"mt-3",max:"100",type:"number"},{prepend:r(()=>[s("生成长度:")]),_:1},8,["modelValue"]),a(p,{modelValue:e.pwNum,"onUpdate:modelValue":o[10]||(o[10]=l=>e.pwNum=l),placeholder:"范围1~100",class:"mt-3",max:"100",type:"number"},{prepend:r(()=>[s("生成数量:")]),_:1},8,["modelValue"])]),d("div",v,[a(k,{type:"primary",onClick:h},{default:r(()=>[s("生成密码")]),_:1}),a(k,{type:"primary",onClick:o[11]||(o[11]=l=>V(e.resStr))},{default:r(()=>[s("复制全部")]),_:1})]),d("div",null,[a(p,{type:"textarea",autosize:e.autosize,modelValue:e.resStr,"onUpdate:modelValue":o[12]||(o[12]=l=>e.resStr=l)},null,8,["autosize","modelValue"])])])])}}}),D=_(R,[["__file","D:/3code/14H5/tools-vue-ts/src/components/Tools/RandomPassword/RandomPassword.vue"]]);export{D as default};
