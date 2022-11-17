"use strict";(self["webpackChunk_2641_website"]=self["webpackChunk_2641_website"]||[]).push([[171],{5171:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var s=n(6190),i=n(266),a=n(2118),r=n(9223),o=n(5495),l=n(1713),c=function(){var t=this,e=t._self._c;return e("div",[e(l.Z,{staticClass:"pa-0 ma-0",staticStyle:{background:"#2e0707","z-index":"7"},attrs:{"no-gutters":""}},[e(i.Z,{staticClass:"pa-0 ma-0",attrs:{cols:"12",md:"6"}},[e(o.Z,{staticClass:"pa-0 ma-0 elevation-24",attrs:{"min-height":t.$vuetify.breakpoint.mdAndUp?"calc(100vh - 64px)":"",src:n(7865)}})],1),e(i.Z,{staticStyle:{"max-width":"892.5px"},style:t.$vuetify.breakpoint.mdAndUp?"padding: 75px 150px 25px 150px":"padding: 24px",attrs:{cols:"12",md:"6"}},[e("h2",{staticClass:"text-h2 mb-5"},[t._v("Why sponsor us?")]),e("p",{staticClass:"grey--text mb-6"},[t._v(" We rely on donations from generous people like you. ")]),e(r.Z),e("p",{staticClass:"mt-6"},[t._v(" As you know, all of this takes money. Will you help? FIRST likes to say their high school clubs are the “ultimate sport for the mind.” ")]),e("p",[t._v(' Under strict rules, set timeframes, and limited resources, our team is challenged to secure funds (via sponsorships and fundraisers); design a team "brand"; hone teamwork skills; and build and program an industrial-size robot to play a difficult field game against like-minded competitors. ')]),e("p",[t._v(" The hands-on program embodies Science, Technology, Engineering, and Mathematics (STEM) and promotes career pathways, as well as nurtures leadership, teamwork, public speaking/presenting, and interpersonal/business communications. ")]),e("p",[t._v(" Our program requires a serious amount of funding, most of which is provided by our generous donors. ")]),e("p",[t._v(" Your contribution will enable our members to develop their talents with confidence and helps us offer this unique high school experience as the perfect inspiration and training. ")]),e(s.Z,{staticClass:"mt-2 elevation-24",attrs:{link:"",to:"/contact",large:"",color:"primary"}},[t._v("Sponsor Us Today")])],1)],1),e(a.Z,{staticClass:"pa-0",staticStyle:{"max-width":"1185px"}},[e("div",{staticClass:"text-center",staticStyle:{padding:"75px 0px"}},[e("h2",{staticClass:"text-h2 ma-5"},[t._v("Our Sponsors")]),e("p",{staticClass:"grey--text mb-0 pb-0"},[t._v("for the 2022-23 Season")])])]),e("div",{staticClass:"text-center elevation-24",staticStyle:{background:"#1f2937","z-index":"10"}},[e(a.Z,[e("h4",{staticClass:"text-h4 font-weight-bold my-6 text-center"},[t._v("PLATINUM")]),e(l.Z,[e(i.Z,{staticClass:"text-right",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"mb-4",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.open("https://www.oakrdg.com/")}}},[e("img",{staticStyle:{"max-width":"350px"},attrs:{src:n(7313)}})]),e("div",{staticClass:"mb-4 mr-11",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.open("https://www.busybeaver.com/")}}},[e("img",{staticStyle:{"max-width":"350px"},attrs:{src:n(9128)}})])]),e(i.Z,{staticClass:"text-left",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"mb-4 mt-4",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.open("https://www.levinfurniture.com/")}}},[e("img",{attrs:{src:n(7903)}})]),e("div",{staticClass:"mb-4 mt-12 pt-4",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.open("https://www.nvidia.com/")}}},[e("img",{staticStyle:{"max-width":"350px"},attrs:{src:n(228)}})])])],1)],1)],1),e("div",{staticClass:"text-center elevation-24",staticStyle:{background:"#41320a","z-index":"9"}},[e(a.Z,[e("h4",{staticClass:"text-h4 font-weight-bold my-6 text-center"},[t._v("GOLD")]),e("p",[t._v("The Beeson Family")])])],1),e("div",{staticClass:"text-center elevation-24",staticStyle:{background:"#0c1736","z-index":"8"}},[e(a.Z,[e("h4",{staticClass:"text-h4 font-weight-bold my-6 text-center"},[t._v("BLUE")])])],1)],1)},d=[],u={name:"Sponsors",methods:{open(t){window.open(t)}}},p=u,f=n(1001),g=(0,f.Z)(p,c,d,!1,null,null,null),m=g.exports},1884:function(){},9223:function(t,e,n){n.d(e,{Z:function(){return i}});var s=n(6669),i=s.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},266:function(t,e,n){n(7658),n(1884);var s=n(144),i=n(1767),a=n(5352);const r=["sm","md","lg","xl"],o=(()=>r.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>r.reduce(((t,e)=>(t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>r.reduce(((t,e)=>(t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,n){let s=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");s+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(s+=`-${n}`,s.toLowerCase()):s.toLowerCase()}}const p=new Map;e["Z"]=s.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:s,parent:a}){let r="";for(const i in e)r+=String(e[i]);let o=p.get(r);if(!o){let t;for(t in o=[],d)d[t].forEach((n=>{const s=e[n],i=u(t,n,s);i&&o.push(i)}));const n=o.some((t=>t.startsWith("col-")));o.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),p.set(r,o)}return t(e.tag,(0,i.ZP)(n,{class:o}),s)}})},2118:function(t,e,n){n.d(e,{Z:function(){return r}});n(9027),n(1884);var s=n(144);function i(t){return s.ZP.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:s,children:i}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:a}=s;if(a){s.attrs={};const t=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(s.staticClass+=` ${t.join(" ")}`)}return n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),e(n.tag,s,i)}})}var a=n(1767),r=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:s}){let i;const{attrs:r}=n;return r&&(n.attrs={},i=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,a.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),s)}})},1713:function(t,e,n){n(7658),n(1884);var s=n(144),i=n(1767),a=n(5352);const r=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return r.reduce(((n,s)=>(n[t+(0,a.jC)(s)]=e(),n)),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",(()=>({type:String,default:null,validator:c}))),u=t=>[...o,"space-between","space-around"].includes(t),p=l("justify",(()=>({type:String,default:null,validator:u}))),f=t=>[...o,"space-between","space-around","stretch"].includes(t),g=l("alignContent",(()=>({type:String,default:null,validator:f}))),m={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(g)},h={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,n){let s=h[t];if(null!=n){if(e){const n=e.replace(t,"");s+=`-${n}`}return s+=`-${n}`,s.toLowerCase()}}const y=new Map;e["Z"]=s.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...p,alignContent:{type:String,default:null,validator:f},...g},render(t,{props:e,data:n,children:s}){let a="";for(const i in e)a+=String(e[i]);let r=y.get(a);if(!r){let t;for(t in r=[],m)m[t].forEach((n=>{const s=e[n],i=v(t,n,s);i&&r.push(i)}));r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(a,r)}return t(e.tag,(0,i.ZP)(n,{staticClass:"row",class:r}),s)}})},7313:function(t,e,n){t.exports=n.p+"img/oakridge.ade0b4f1.svg"},7865:function(t,e,n){t.exports=n.p+"img/sponsor.c603a0c5.jpg"},9128:function(t,e,n){t.exports=n.p+"img/busybeaver.3701154d.png"},7903:function(t,e,n){t.exports=n.p+"img/levin.af573dc7.png"},228:function(t,e,n){t.exports=n.p+"img/nvidia.c6be252c.png"}}]);
//# sourceMappingURL=171.7c7e66b2.js.map