// build time:Fri Dec 03 2021 10:44:02 GMT+0800 (中国标准时间)
const e=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const t=function(){return $("main > .inner").offsetHeight};const n=function(e,t,n){if(n){t()}else{var a=document.createElement("script");a.onload=a.onreadystatechange=function(e,n){if(n||!a.readyState||/loaded|complete/.test(a.readyState)){a.onload=a.onreadystatechange=null;a=undefined;if(!n&&t)setTimeout(t,0)}};a.src=e;document.head.appendChild(a)}};const a=function(e,t){var n=CONFIG[e][t];if(n.indexOf("npm")>-1||n.indexOf("gh")>-1||n.indexOf("combine")>-1)return"//cdn.jsdelivr.net/"+n;if(n.indexOf("http")>-1)return n;return statics+n};const i=function(e,t,i){if(LOCAL[e]){n(a("js",e),t||function(){window[e]=true},i||window[e])}};const o=function(e,t){if(window["css"+e])return;if(LOCAL[e]){document.head.createChild("link",{rel:"stylesheet",href:a("css",e)});window["css"+e]=true}};const c=function(e){var t=e.text||e.textContent||e.innerHTML||"";var n=e.parentNode;n.removeChild(e);var a=document.createElement("script");if(e.id){a.id=e.id}if(e.className){a.className=e.className}if(e.type){a.type=e.type}if(e.src){a.src=e.src;a.async=false}if(e.dataset.pjax!==undefined){a.dataset.pjax=""}if(t!==""){a.appendChild(document.createTextNode(t))}n.appendChild(a)};const r=function(e,t,n){var a={targets:typeof t=="number"?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:t||(typeof e=="number"?e:e?e.top()+document.documentElement.scrollTop-siteNavHeight:0),complete:function(){n&&n()}};anime(a)};const s=function(e,t,n){var a={};var i="none";switch(t){case 0:a={opacity:[1,0]};break;case 1:a={opacity:[0,1]};i="block";break;case"bounceUpIn":a={begin:function(t){e.display("block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]};i="block";break;case"shrinkIn":a={begin:function(t){e.display("block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1};i="block";break;case"slideRightIn":a={begin:function(t){e.display("block")},translateX:[100,0],opacity:[0,1]};i="block";break;case"slideRightOut":a={translateX:[0,100],opacity:[1,0]};break;default:a=t;i=t.display;break}anime(Object.assign({targets:e,duration:200,easing:"linear"},a)).finished.then(function(){e.display(i);n&&n()})};const d={get:function(e){return localStorage.getItem(e)},set:function(e,t){localStorage.setItem(e,t);return t},del:function(e){localStorage.removeItem(e)}};
//rebuild by hrmmi 