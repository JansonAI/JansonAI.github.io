// build time:Wed Dec 01 2021 00:49:12 GMT+0800 (中国标准时间)
const e=function(e,a){if(sideBar.hasClass("on")){sideBar.removeClass("on");menuToggle.removeClass("close");if(a){sideBar.style=""}else{transition(sideBar,"slideRightOut")}}else{if(a){sideBar.style=""}else{transition(sideBar,"slideRightIn",function(){sideBar.addClass("on");menuToggle.addClass("close")})}}};const a=function(){var e=sideBar.child(".inner");var a=sideBar.find(".panel");if(sideBar.child(".tab")){e.removeChild(sideBar.child(".tab"))}var t=document.createElement("ul"),n="active";t.className="tab";["contents","related","overview"].forEach(function(e){var a=sideBar.child(".panel."+e);if(a.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){if(e=="contents"){showContents.display("none")}return}if(e=="contents"){showContents.display("")}var r=document.createElement("li");var i=document.createElement("span");var s=document.createTextNode(a.attr("data-title"));i.appendChild(s);r.appendChild(i);r.addClass(e+" item");if(n){a.addClass(n);r.addClass(n)}else{a.removeClass("active")}r.addEventListener("click",function(e){var a=event.currentTarget;if(a.hasClass("active"))return;sideBar.find(".tab .item").forEach(function(e){e.removeClass("active")});sideBar.find(".panel").forEach(function(e){e.removeClass("active")});sideBar.child(".panel."+a.className.replace(" item","")).addClass("active");a.addClass("active")});t.appendChild(r);n=""});if(t.childNodes.length>1){e.insertBefore(t,e.childNodes[0]);sideBar.child(".panels").style.paddingTop=""}else{sideBar.child(".panels").style.paddingTop=".625rem"}};const t=function(){var e=$.all(".contents li");if(e.length<1){return}var a=Array.prototype.slice.call(e)||[];var t=null;a=a.map(function(e,a){var n=e.child("a.toc-link");var i=$(decodeURI(n.attr("href")));if(!i)return;var s=i.child("a.anchor");var l=function(e){e.preventDefault();var n=$(decodeURI(e.currentTarget.attr("href")));t=a;pageScroll(n,null,function(){r(a);t=null})};n.addEventListener("click",l);s&&s.addEventListener("click",function(e){l(e);clipBoard(CONFIG.hostname+"/"+LOCAL.path+e.currentTarget.attr("href"))});return i});var n=sideBar.child(".contents.panel");var r=function(t,r){var i=e[t];if(!i)return;if(i.hasClass("current")){return}$.each(".toc .active",function(e){e&&e.removeClass("active current")});a.forEach(function(e){e&&e.removeClass("active")});i.addClass("active current");a[t]&&a[t].addClass("active");var s=i.parentNode;while(!s.matches(".contents")){if(s.matches("li")){s.addClass("active");var l=$(s.child("a.toc-link").attr("href"));if(l){l.addClass("active")}}s=s.parentNode}if(getComputedStyle(sideBar).display!="none"&&n.hasClass("active")){pageScroll(n,i.offsetTop-n.offsetHeight/4)}};var i=function(e){var t=0;var n=e[t];if(n.boundingClientRect.top>0){t=a.indexOf(n.target);return t===0?0:t-1}for(;t<e.length;t++){if(e[t].boundingClientRect.top<=0){n=e[t]}else{return a.indexOf(n.target)}}return a.indexOf(n.target)};var s=function(){if(!window.IntersectionObserver)return;var e=new IntersectionObserver(function(e,a){var n=i(e)+(diffY<0?1:0);if(t===null){r(n)}},{rootMargin:"0px 0px -100% 0px",threshold:0});a.forEach(function(a){a&&e.observe(a)})};s()};const n=function(){pageScroll(0)};const r=function(){pageScroll(parseInt(Container.height()))};const i=function(){pageScroll($("#comments"))};const s=function(){$.each(".menu .item:not(.title)",function(e){var a=e.child("a[href]");var t=e.parentNode.parentNode;if(!a)return;var n=a.pathname===location.pathname||a.pathname===location.pathname.replace("index.html","");var r=!CONFIG.root.startsWith(a.pathname)&&location.pathname.startsWith(a.pathname);var i=a.hostname===location.hostname&&(n||r);e.toggleClass("active",i);if(e.parentNode.child(".active")&&t.hasClass("dropdown")){t.removeClass("active").addClass("expand")}else{t.removeClass("expand")}})};
//rebuild by hrmmi 