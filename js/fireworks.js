// build time:Fri Dec 03 2021 10:44:02 GMT+0800 (中国标准时间)
var n=document.createElement("canvas");n.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999";document.body.appendChild(n);var e=n.getContext("2d");var a=30;var t=0;var i=0;var r="click";var o=CONFIG.fireworks;function d(){n.width=window.innerWidth*2;n.height=window.innerHeight*2;n.style.width=window.innerWidth+"px";n.style.height=window.innerHeight+"px";n.getContext("2d").scale(2,2)}function l(n){t=n.clientX||n.touches&&n.touches[0].clientX;i=n.clientY||n.touches&&n.touches[0].clientY}function u(n){var e=anime.random(0,360)*Math.PI/180;var a=anime.random(50,180);var t=[-1,1][anime.random(0,1)]*a;return{x:n.x+t*Math.cos(e),y:n.y+t*Math.sin(e)}}function s(n,a){var t={};t.x=n;t.y=a;t.color=o[anime.random(0,o.length-1)];t.radius=anime.random(16,32);t.endPos=u(t);t.draw=function(){e.beginPath();e.arc(t.x,t.y,t.radius,0,2*Math.PI,true);e.fillStyle=t.color;e.fill()};return t}function c(n,a){var t={};t.x=n;t.y=a;t.color="#FFF";t.radius=.1;t.alpha=.5;t.lineWidth=6;t.draw=function(){e.globalAlpha=t.alpha;e.beginPath();e.arc(t.x,t.y,t.radius,0,2*Math.PI,true);e.lineWidth=t.lineWidth;e.strokeStyle=t.color;e.stroke();e.globalAlpha=1};return t}function h(n){for(var e=0;e<n.animatables.length;e++){n.animatables[e].target.draw()}}function m(n,e){var t=c(n,e);var i=[];for(var r=0;r<a;r++){i.push(s(n,e))}anime.timeline().add({targets:i,x:function(n){return n.endPos.x},y:function(n){return n.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:h}).add({targets:t,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:h},0)}var f=anime({duration:Infinity,update:function(){e.clearRect(0,0,n.width,n.height)}});document.addEventListener(r,function(n){f.play();l(n);m(t,i)},false);d();window.addEventListener("resize",d,false);
//rebuild by hrmmi 