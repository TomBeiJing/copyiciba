(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0df247":"a551e5db","chunk-2d0e5752":"ff9cabb3","chunk-2d22ce43":"7cd77046","chunk-312100d4":"bdbed986"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-312100d4":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0df247":"31d6cfe0","chunk-2d0e5752":"31d6cfe0","chunk-2d22ce43":"31d6cfe0","chunk-312100d4":"2d2fec40"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"347e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("MainTabBar")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tab-bar",{style:t.activeBackgroundColorStyle},[n("tab-bar-item",{attrs:{path:"/home",activeColor:"#ffffff",activeBorderBottom:"tab-bar-item2"}},[n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("词典")])]),n("tab-bar-item",{staticClass:"tab-bar-item-spbox",attrs:{path:"category"}},[n("div",{staticClass:"tab-bar-item-spbox",attrs:{slot:"item-text"},slot:"item-text"},[n("div",[t._v("悦读")]),n("div",{staticClass:"tab-bar-item-sp"},[t._v("双语")])])]),n("tab-bar-item",{attrs:{path:"/cart"}},[n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("听力")])]),n("tab-bar-item",{attrs:{path:"/profile"}},[n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("每日一句")])])],1)},c=[],u=(n("c975"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)}),s=[],l={name:"TabBar"},f=l,d=(n("ac1e"),n("2877")),p=Object(d["a"])(f,u,s,!1,null,"518e5e76",null),h=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[n("div",{class:t.activeClass,style:t.activeStyle},[t._t("item-text")],2)])},b=[],v=(n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"#333"},activeBorderBottom:{type:String,default:"tab-bar-item1"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}},activeClass:function(){return this.isActive?this.activeBorderBottom:""}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=v,y=(n("6acc"),Object(d["a"])(g,m,b,!1,null,"b5f0eac0",null)),k=y.exports,x={name:"MainTabBar",props:{path:String,activeBackgroundColor:{type:String,default:"#000"}},components:{TabBar:h,TabBarItem:k},computed:{isActive:function(){return-1!==this.$route.path.indexOf("/home")},activeBackgroundColorStyle:function(){return this.isActive?{"background-color":this.activeBackgroundColor}:{}}},methods:{}},_=x,C=(n("c4d8"),Object(d["a"])(_,i,c,!1,null,"73694b74",null)),B=C.exports,w={name:"App",components:{MainTabBar:B}},O=w,S=(n("034f"),Object(d["a"])(O,a,o,!1,null,null,null)),j=S.exports,T=(n("d3b7"),n("9bfb")),E=function(){return n.e("chunk-312100d4").then(n.bind(null,"77b8"))},A=function(){return n.e("chunk-2d22ce43").then(n.bind(null,"f4ba"))},P=function(){return n.e("chunk-2d0e5752").then(n.bind(null,"9522"))},$=function(){return n.e("chunk-2d0df247").then(n.bind(null,"893c"))};r["a"].use(T["a"]);var M=[{path:"",redirect:"/home"},{path:"/home",component:E},{path:"/profile",component:$},{path:"/category",component:A},{path:"/cart",component:P}],L=new T["a"]({routes:M}),N=L;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(j)},router:N}).$mount("#app")},"6acc":function(t,e,n){"use strict";var r=n("f747"),a=n.n(r);a.a},7941:function(t,e,n){},"85ec":function(t,e,n){},ac1e:function(t,e,n){"use strict";var r=n("347e"),a=n.n(r);a.a},c4d8:function(t,e,n){"use strict";var r=n("7941"),a=n.n(r);a.a},f747:function(t,e,n){}});
//# sourceMappingURL=app.05d62b6a.js.map