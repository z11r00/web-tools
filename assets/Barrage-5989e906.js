import{D as G}from"./DetailHeader-47695dd5.js";import{b as I,c as j,f as i,P as J,Q as K,d as q,M as g,B as f,l as D,o as O,D as Y,S as Z,E as ee,N as te,T as ne,r as $,h as r,w,t as R,U as X,j as ae,i as z,_ as le}from"./index-17477c0a.js";var H=q({name:"vue3-danmaku",components:{},props:{danmus:{type:Array,required:!0,default:()=>[]},channels:{type:Number,default:0},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},useSlot:{type:Boolean,default:!1},debounce:{type:Number,default:100},speeds:{type:Number,default:200},randomChannel:{type:Boolean,default:!1},fontSize:{type:Number,default:18},top:{type:Number,default:4},right:{type:Number,default:0},isSuspend:{type:Boolean,default:!1},extraStyle:{type:String,default:""}},emits:["list-end","play-end","dm-over","dm-out","update:danmus"],setup(l,{emit:e,slots:v}){let c=g(document.createElement("div")),a=g(document.createElement("div"));const h=g(0),N=g(0);let u=0;const b=g(0),L=g(0),p=g(0),C=g(!1),S=g(!1),s=g({}),m=function(o,d,t="modelValue",n){return f({get:()=>o[t],set:k=>{d(`update:${t}`,n?n(k):k)}})}(l,e,"danmus"),y=D({channels:f(()=>l.channels||b.value),autoplay:f(()=>l.autoplay),loop:f(()=>l.loop),useSlot:f(()=>l.useSlot),debounce:f(()=>l.debounce),randomChannel:f(()=>l.randomChannel)}),x=D({height:f(()=>L.value),fontSize:f(()=>l.fontSize),speeds:f(()=>l.speeds),top:f(()=>l.top),right:f(()=>l.right)});function T(){U(),l.isSuspend&&function(){let o=[];a.value.addEventListener("mouseover",d=>{let t=d.target;t.className.includes("dm")||(t=t.closest(".dm")||t),t.className.includes("dm")&&(o.includes(t)||(e("dm-over",{el:t}),t.classList.add("pause"),o.push(t)))}),a.value.addEventListener("mouseout",d=>{let t=d.target;t.className.includes("dm")||(t=t.closest(".dm")||t),t.className.includes("dm")&&(e("dm-out",{el:t}),t.classList.remove("pause"),o.forEach(n=>{n.classList.remove("pause")}),o=[])})}(),y.autoplay&&W()}function U(){if(h.value=c.value.offsetWidth,N.value=c.value.offsetHeight,h.value===0||N.value===0)throw new Error("获取不到容器宽高")}function W(){S.value=!1,u||(u=window.setInterval(()=>function(){if(!S.value&&m.value.length)if(p.value>m.value.length-1){const o=a.value.children.length;y.loop&&(o<p.value&&(e("list-end"),p.value=0),P())}else P()}(),y.debounce))}function P(o){const d=y.loop?p.value%m.value.length:p.value,t=o||m.value[d];let n=document.createElement("div");y.useSlot?n=function(k,_){return Z({render:()=>ee("div",{},[v.dm&&v.dm({danmu:k,index:_})])}).mount(document.createElement("div"))}(t,d).$el:(n.innerHTML=t,n.setAttribute("style",l.extraStyle),n.style.fontSize=`${x.fontSize}px`,n.style.lineHeight=`${x.fontSize}px`),n.classList.add("dm"),a.value.appendChild(n),n.style.opacity="0",te(()=>{x.height||(L.value=n.offsetHeight),y.channels||(b.value=Math.floor(N.value/(x.height+x.top)));let k=function(_){let V=[...Array(y.channels).keys()];y.randomChannel&&(V=V.sort(()=>.5-Math.random()));for(let B of V){const E=s.value[B];if(!E||!E.length)return s.value[B]=[_],_.addEventListener("animationend",()=>s.value[B].splice(0,1)),B%y.channels;for(let F=0;F<E.length;F++){const A=Q(E[F])-10;if(A<=.88*(_.offsetWidth-E[F].offsetWidth)||A<=0)break;if(F===E.length-1)return s.value[B].push(_),_.addEventListener("animationend",()=>s.value[B].splice(0,1)),B%y.channels}}return-1}(n);if(k>=0){const _=n.offsetWidth,V=x.height;n.classList.add("move"),n.dataset.index=`${d}`,n.dataset.channel=k.toString(),n.style.opacity="1",n.style.top=k*(V+x.top)+"px",n.style.width=_+x.right+"px",n.style.setProperty("--dm-scroll-width",`-${h.value+_}px`),n.style.left=`${h.value}px`,n.style.animationDuration=h.value/x.speeds+"s",n.addEventListener("animationend",()=>{Number(n.dataset.index)!==m.value.length-1||y.loop||e("play-end",n.dataset.index),a.value&&a.value.removeChild(n)}),p.value++}else a.value.removeChild(n)})}function Q(o){const d=o.offsetWidth||parseInt(o.style.width),t=o.getBoundingClientRect().right||a.value.getBoundingClientRect().right+d;return a.value.getBoundingClientRect().right-t}function M(){clearInterval(u),u=0,p.value=0}return O(()=>{T()}),Y(()=>{M()}),{container:c,dmContainer:a,hidden:C,paused:S,danmuList:m,getPlayState:function(){return!S.value},resize:function(){U();const o=a.value.getElementsByClassName("dm");for(let d=0;d<o.length;d++){const t=o[d];t.style.setProperty("--dm-scroll-width",`-${h.value+t.offsetWidth}px`),t.style.left=`${h.value}px`,t.style.animationDuration=h.value/x.speeds+"s"}},play:W,pause:function(){S.value=!0},stop:function(){s.value={},a.value.innerHTML="",S.value=!0,C.value=!1,M()},show:function(){C.value=!1},hide:function(){C.value=!0},reset:function(){L.value=0,T()},add:function(o){if(p.value===m.value.length)return m.value.push(o),m.value.length-1;{const d=p.value%m.value.length;return m.value.splice(d,0,o),d+1}},push:function(o){return m.value.push(o),m.value.length-1},insert:P}}});const se={ref:"container",class:"vue-danmaku"};(function(l,e){e===void 0&&(e={});var v=e.insertAt;if(l&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",v==="top"&&c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a),a.styleSheet?a.styleSheet.cssText=l:a.appendChild(document.createTextNode(l))}})(`.vue-danmaku {
  position: relative;
  overflow: hidden;
}
.vue-danmaku .danmus {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.vue-danmaku .danmus.show {
  opacity: 1;
}
.vue-danmaku .danmus.paused .dm.move {
  animation-play-state: paused;
}
.vue-danmaku .danmus .dm {
  position: absolute;
  font-size: 20px;
  color: #ddd;
  white-space: pre;
  transform: translateX(0);
  transform-style: preserve-3d;
}
.vue-danmaku .danmus .dm.move {
  will-change: transform;
  animation-name: moveLeft;
  animation-timing-function: linear;
  animation-play-state: running;
}
.vue-danmaku .danmus .dm.pause {
  animation-play-state: paused;
  z-index: 100;
}
@keyframes moveLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--dm-scroll-width));
  }
}
@-webkit-keyframes moveLeft {
  from {
    -webkit-transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(var(--dm-scroll-width));
  }
}`),H.render=function(l,e,v,c,a,h){return I(),j("div",se,[i("div",{ref:"dmContainer",class:J(["danmus",{show:!l.hidden},{paused:l.paused}])},null,2),K(l.$slots,"default")],512)},H.__file="src/lib/Danmaku.vue";const oe={class:"flex flex-col mt-3 flex-1"},ue={class:"p-4 rounded-2xl bg-white"},de={class:"flex mb-2"},ie={class:"w-72"},re={class:"flex mb-2"},me={class:"w-72 ml-2"},ce={class:"flex mb-2"},pe={class:"w-72 ml-2"},fe={class:"flex mb-2"},ve={class:"flex mb-2"},he=q({__name:"Barrage",setup(l){const e=D({title:"手持弹幕",content:"工具坊",barrage:[],speed:200,textSize:500,textColor:"#FFFFFF",bgColor:"#000000",channels:1,extraStyle:"",danmakuFullStyle:"",isPlay:!1,danmakuFullHeight:"100%",danmakuFullWidth:"100%"}),v=g(null),c=()=>{e.isPlay?(a("visibility: hidden;"),v.value.resize(),v.value.stop(),e.isPlay=!1):(a(),h(),v.value.resize(),v.value.play(),e.isPlay=!0)},a=(N="")=>{e.extraStyle="color: "+e.textColor+";font-size: "+e.textSize+"px",e.danmakuFullStyle="z-index: 99; position: fixed; top: 0px; left: 0px; height:"+e.danmakuFullHeight+"; width:"+e.danmakuFullWidth+"; background-color:"+e.bgColor+";"+N},h=()=>{e.barrage[0]=e.content};return ne(()=>{a("visibility: hidden;")}),(N,u)=>{const b=$("el-text"),L=$("el-input"),p=$("el-slider"),C=$("el-color-picker"),S=$("el-button");return I(),j("div",oe,[r(G,{title:e.title},null,8,["title"]),r(ae(H),{ref_key:"danmakuFullRef",ref:v,danmus:e.barrage,"onUpdate:danmus":u[0]||(u[0]=s=>e.barrage=s),loop:"",autoplay:!1,speeds:e.speed,channels:e.channels,extraStyle:e.extraStyle,style:X(e.danmakuFullStyle),onDblclick:c,useSlot:!0},{dm:w(({danmu:s})=>[i("div",{class:"",style:X(e.extraStyle)},[i("span",null,R(s),1)],4)]),_:1},8,["danmus","speeds","channels","extraStyle","style"]),i("div",ue,[i("div",de,[r(b,{class:"w-20"},{default:w(()=>[z("弹幕内容:")]),_:1}),i("div",ie,[r(L,{modelValue:e.content,"onUpdate:modelValue":u[1]||(u[1]=s=>e.content=s),type:"textarea",rows:"3"},null,8,["modelValue"])])]),i("div",re,[r(b,{class:"w-20"},{default:w(()=>[z("播放速度:")]),_:1}),i("div",me,[r(p,{modelValue:e.speed,"onUpdate:modelValue":u[2]||(u[2]=s=>e.speed=s),min:1,max:500},null,8,["modelValue"])])]),i("div",ce,[r(b,{class:"w-20"},{default:w(()=>[z("文字大小:")]),_:1}),i("div",pe,[r(p,{modelValue:e.textSize,"onUpdate:modelValue":u[3]||(u[3]=s=>e.textSize=s),min:12,max:1e3},null,8,["modelValue"])])]),i("div",fe,[r(b,{class:"w-20"},{default:w(()=>[z("文字颜色:")]),_:1}),i("div",null,[r(C,{modelValue:e.textColor,"onUpdate:modelValue":u[4]||(u[4]=s=>e.textColor=s),size:"large",onChange:u[5]||(u[5]=s=>a())},null,8,["modelValue"])])]),i("div",ve,[r(b,{class:"w-20"},{default:w(()=>[z("背景颜色:")]),_:1}),i("div",null,[r(C,{modelValue:e.bgColor,"onUpdate:modelValue":u[6]||(u[6]=s=>e.bgColor=s),size:"large",onChange:u[7]||(u[7]=s=>a())},null,8,["modelValue"])])]),i("div",null,[r(S,{onClick:c,type:"primary",class:"mr-3"},{default:w(()=>[z(R(e.isPlay==!1?"播放":"暂停"),1)]),_:1}),r(b,null,{default:w(()=>[z("双击可退出弹幕")]),_:1})])])])}}});const xe=le(he,[["__scopeId","data-v-aef8368d"],["__file","D:/3code/14H5/tools-vue-ts/src/components/Tools/Barrage/Barrage.vue"]]);export{xe as default};
