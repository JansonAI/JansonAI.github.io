// build time:Sun Nov 28 2021 20:20:21 GMT+0800 (中国标准时间)
var e=CONFIG.statics.indexOf("//")>0?CONFIG.statics:CONFIG.root;var t={x:"undefined",y:"undefined"};var n=0;var i,a;const o=document.getElementsByTagName("body")[0];const s=document.documentElement;const d=$("#container");const c=$("#loading");const l=$("#nav");const r=$("#header");const f=l.child(".toggle");const u=$("#quick");const h=$("#sidebar");const v=$("#brand");var m=$("#tool"),g,w,C,p;var y=$("#search");var O,k,b;var F=window.innerHeight;var I=window.innerWidth;var N=0,T=window.location.href;var G;const x=lozad("img, [data-background-image]",{loaded:function(e){e.addClass("lozaded")}});const L={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.removeClass("loaded");c.attr("style","display:block");L.lock=false},hide:function(e){if(!CONFIG.loader.start)e=-1;this.timer=setTimeout(this.vanish,e||3e3)},vanish:function(){if(L.lock)return;if(CONFIG.loader.start)transition(c,0);document.body.addClass("loaded");L.lock=true}};const H=function(e){var t=$(".theme .ic");if(e=="dark"){s.attr("data-theme",e);t.removeClass("i-sun");t.addClass("i-moon")}else{s.attr("data-theme",null);t.removeClass("i-moon");t.addClass("i-sun")}};const Y=function(e){if(s.attr("data-theme")=="dark")e="#222";$('meta[name="theme-color"]').attr("content",e)};const M=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){if(e.matches){H("dark")}else{H()}});var e=store.get("theme");if(e){H(e)}else{if(CONFIG.darkmode){H("dark")}}$(".theme").addEventListener("click",function(e){var t=e.currentTarget.child(".ic");var n=o.createChild("div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'});var i=function(){transition(n,{delay:2500,opacity:0},function(){o.removeChild(n)})};if(t.hasClass("i-sun")){var a=function(){n.addClass("dark");H("dark");store.set("theme","dark");i()}}else{n.addClass("dark");var a=function(){n.removeClass("dark");H();store.set("theme","light");i()}}transition(n,1,function(){setTimeout(a,210)})})};const R=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":$('[rel="icon"]').attr("href",e+CONFIG.favicon.hidden);document.title=LOCAL.favicon.hide;if(CONFIG.loader.switch)L.show();clearTimeout(a);break;case"visible":$('[rel="icon"]').attr("href",e+CONFIG.favicon.normal);document.title=LOCAL.favicon.show;if(CONFIG.loader.switch)L.hide(1e3);a=setTimeout(function(){document.title=i},2e3);break}})};const S=function(e){if(!e)return;var t=o.createChild("div",{innerHTML:e,className:"tip"});setTimeout(function(){t.addClass("hide");setTimeout(function(){o.removeChild(t)},300)},3e3)};const A=function(e){O=l.height();k=r.height();b=k+$("#waves").height();if(I!=window.innerWidth)sideBarToggleHandle(null,1);F=window.innerHeight;I=window.innerWidth;h.child(".panels").height(F+"px")};const E=function(e){var i=window.innerHeight;var a=getDocHeight();var o=a>i?a-i:document.body.scrollHeight-i;var s=window.pageYOffset>k;var d=window.pageYOffset>0;if(s){Y("#FFF")}else{Y("#222")}l.toggleClass("show",s);m.toggleClass("affix",d);v.toggleClass("affix",d);h.toggleClass("affix",window.pageYOffset>b&&document.body.offsetWidth>991);if(typeof t.y=="undefined"){t.y=window.pageYOffset}n=t.y-window.pageYOffset;if(n<0){l.removeClass("up");l.toggleClass("down",s)}else if(n>0){l.removeClass("down");l.toggleClass("up",s)}else{}t.y=window.pageYOffset;var c=Math.round(Math.min(100*window.pageYOffset/o,100))+"%";w.child("span").innerText=c;$(".percent").width(c)};const W=function(){if(CONFIG.auto_scroll)store.set(T,t.y)};const z=function(e){var t=window.location.hash;var n=null;if(N){store.del(T);return}if(t)n=$(decodeURI(t));else{n=CONFIG.auto_scroll?parseInt(store.get(T)):0}if(n){pageScroll(n);N=1}if(e&&t&&!N){pageScroll(n);N=1}};const B=function(e,t){var n=o.createChild("textarea",{style:{top:window.scrollY+"px",position:"absolute",opacity:"0"},readOnly:true,value:e});const i=document.getSelection();const a=i.rangeCount>0?i.getRangeAt(0):false;n.select();n.setSelectionRange(0,e.length);n.readOnly=false;var s=document.execCommand("copy");t&&t(s);n.blur();if(a){i.removeAllRanges();i.addRange(a)}o.removeChild(n)};
//rebuild by hrmmi 