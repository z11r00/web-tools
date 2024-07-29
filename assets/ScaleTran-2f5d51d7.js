import{d as S,l as B,r as d,b as m,c as b,h as r,f,w as u,F as C,e as M,g,i as w,t as I,j as D,I as H,J as N,K as U,H as p,_ as A}from"./index-17477c0a.js";import{D as E,c as F}from"./DetailHeader-47695dd5.js";import{a as L,b as j,c as z,d as J}from"./verify-9152def5.js";function K(t){for(var e="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",a="";t>0;){var i=t%58;a=e[i]+a,t=Math.floor(t/58)}return a}function R(t){for(var e="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",a=0,i,c=0;c<t.length;c++)i=e.indexOf(t[c]),a=a*58+i;return a}function q(t){for(var e="";t>0;){var a=t%62;e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a)+e;var t=Math.floor(t/62)}return e}function G(t){for(var e=0,a=0;a<t.length;a++)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(t.charAt(a))*Math.pow(62,t.length-a-1);return e}function P(t){var e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/",a="";do a=e[t%64]+a,t=Math.floor(t/64);while(t>0);return a}function Q(t){for(var e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/",a=0,i,c=0;c<t.length;c++)i=e.indexOf(t[c]),a+=i*Math.pow(64,t.length-c-1);return a}const W={class:"flex flex-col mt-3 flex-1"},X={class:"p-4 rounded-2xl bg-white"},Y={class:"flex"},Z={class:"mr-2 w-full"},$={class:"mt-3 min-h-md bg-gray-100 p-3 mb-3 flex flex-col"},ee={class:"flex items-center"},te={class:"mr-1"},ae=S({__name:"ScaleTran",setup(t){const e=B({title:"常用进制转换",content:"",chooseTranOptions:"10",tranOptions:[{value:"2",label:"2进制",tranValue:"",desc:""},{value:"8",label:"8进制",tranValue:"",desc:""},{value:"10",label:"10进制",tranValue:"",desc:""},{value:"16",label:"16进制",tranValue:"",desc:""},{value:"32",label:"32进制",tranValue:"",desc:"数字 + 大写字母，不包含 ILOU 字符"},{value:"58",label:"58进制",tranValue:"",desc:"数字 + 大小写字母，不包含 0OlI 字符"},{value:"62",label:"62进制",tranValue:"",desc:"数字 + 大小写字母"},{value:"64",label:"64进制",tranValue:"",desc:"数字 + 大小写字母以及两个特殊字符 +/"}]}),a=(n,o)=>{let l=0;switch(o){case 58:l=R(n);break;case 62:l=G(n);break;case 64:l=Q(n);break;default:p({message:"参数错误",type:"warning",duration:1500})}return l},i=(n,o)=>{let l="";switch(o){case 58:l=K(n);break;case 62:l=q(n);break;case 64:l=P(n);break;default:p({message:"参数错误",type:"warning",duration:1500})}return l},c=()=>e.content?e.chooseTranOptions=="2"&&L(e.content)==!1?(p({message:"不是二进制值",type:"warning",duration:1500}),!1):e.chooseTranOptions=="8"&&j(e.content)==!1?(p({message:"不是八进制值",type:"warning",duration:1500}),!1):e.chooseTranOptions=="10"&&z(e.content)==!1?(p({message:"不是十进制值",type:"warning",duration:1500}),!1):e.chooseTranOptions=="16"&&J(e.content)==!1?(p({message:"不是十六进制值",type:"warning",duration:1500}),!1):!0:(p({message:"请输入转换数值",type:"warning",duration:1500}),!1),T=()=>{if(!c())return;let n,o=parseInt(e.chooseTranOptions,10);o<=36?n=parseInt(e.content,o):n=a(e.content,o);for(let l in e.tranOptions){let _=parseInt(e.tranOptions[l].value,10);_<=36?e.tranOptions[l].tranValue=n.toString(_):e.tranOptions[l].tranValue=i(n,_)}},V=async n=>{F(e.tranOptions[n].tranValue)};return(n,o)=>{const l=d("el-option"),_=d("el-select"),x=d("el-input"),h=d("el-button"),y=d("el-icon"),O=d("el-tooltip"),v=d("el-table-column"),k=d("el-table");return m(),b("div",W,[r(E,{title:e.title},null,8,["title"]),f("div",X,[f("div",Y,[f("div",Z,[r(x,{modelValue:e.content,"onUpdate:modelValue":o[1]||(o[1]=s=>e.content=s)},{prepend:u(()=>[r(_,{modelValue:e.chooseTranOptions,"onUpdate:modelValue":o[0]||(o[0]=s=>e.chooseTranOptions=s),placeholder:"Select",class:"w-24"},{default:u(()=>[(m(!0),b(C,null,M(e.tranOptions,s=>(m(),g(l,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),r(h,{type:"primary",onClick:o[2]||(o[2]=s=>T())},{default:u(()=>[w("转换")]),_:1})]),f("div",$,[r(k,{data:e.tranOptions,border:"",style:{width:"100%"}},{default:u(()=>[r(v,{prop:"label",label:"进制",width:"120"},{default:u(s=>[f("div",ee,[f("span",te,I(s.row.label),1),s.row.desc!=""?(m(),g(O,{key:0,class:"box-item",effect:"dark",content:s.row.desc,placement:"top-start"},{default:u(()=>[r(y,null,{default:u(()=>[r(D(H))]),_:1})]),_:2},1032,["content"])):N("",!0)])]),_:1}),r(v,{prop:"tranValue",label:"结果"}),r(v,{prop:"",label:"操作",width:"60"},{default:u(s=>[r(h,{link:"",type:"primary",size:"small",onClick:U(ne=>V(s.$index),["prevent"])},{default:u(()=>[w(" 复制 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])])])}}}),re=A(ae,[["__file","D:/3code/14H5/tools-vue-ts/src/components/Tools/ScaleTran/ScaleTran.vue"]]);export{re as default};
