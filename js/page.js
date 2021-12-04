// build time:Sat Dec 04 2021 15:00:57 GMT+0800 (中国标准时间)
const e=function(){if(!$(".index.wrap"))return;if(!window.IntersectionObserver){$.each(".index.wrap article.item, .index.wrap section.item",function(e){if(e.hasClass("show")===false){e.addClass("show")}})}else{var e=new IntersectionObserver(function(a){a.forEach(function(a){if(a.target.hasClass("show")){e.unobserve(a.target)}else{if(a.isIntersecting||a.intersectionRatio>0){a.target.addClass("show");e.unobserve(a.target)}}})},{root:null,threshold:[.3]});$.each(".index.wrap article.item, .index.wrap section.item",function(a){e.observe(a)});$(".index.wrap .item:first-child").addClass("show")}$.each(".cards .item",function(e,a){["mouseenter","touchstart"].forEach(function(a){e.addEventListener(a,function(a){if($(".cards .item.active")){$(".cards .item.active").removeClass("active")}e.addClass("active")})});["mouseleave"].forEach(function(a){e.addEventListener(a,function(a){e.removeClass("active")})})})};const a=function(){$.each("span.exturl",function(e){var a=document.createElement("a");a.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));a.rel="noopener external nofollow noreferrer";a.target="_blank";a.className=e.className;a.title=e.title||e.innerText;a.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){a.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(a,e)})};const t=function(e){if($(e+" .md img")){vendorCss("fancybox");vendorJs("fancybox",function(){var a=jQuery.noConflict();$.each(e+" p.gallery",function(e){var a=document.createElement("div");a.className="gallery";a.attr("data-height",e.attr("data-height")||220);a.innerHTML=e.innerHTML.replace(/<br>/g,"");e.parentNode.insertBefore(a,e);e.remove()});$.each(e+" .md img:not(.emoji):not(.vemoji)",function(e){var t=a(e);var i,n="image-info";if(!t.is("a img")){var s=t.attr("data-src")||t.attr("src");t.data("safe-src",s);var r=t.wrap('<a class="fancybox" href="'+s+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a");if(!t.is(".gallery img")){r.attr("data-fancybox","default").attr("rel","default")}else{n="jg-caption"}}if(i=e.attr("title")){r.attr("data-caption",i);var c=document.createElement("span");var l=document.createTextNode(i);c.appendChild(l);c.addClass(n);e.insertAfter(c)}});$.each(e+" div.gallery",function(e,t){a(e).justifiedGallery({rowHeight:a(e).data("height")||120,rel:"gallery-"+t}).on("jg.complete",function(){a(this).find("a").each(function(e,a){a.attr("data-fancybox","gallery-"+t)})})});a.fancybox.defaults.hash=false;a(e+" .fancybox").fancybox({loop:true,helpers:{overlay:{locked:false}}})},window.jQuery)}};const i=function(){s();if(!$(".md"))return;t(".post.block");$(".post.block").oncopy=function(e){showtip(LOCAL.copyright);if(LOCAL.nocopy){e.preventDefault();return}var a=$("#copyright");if(window.getSelection().toString().length>30&&a){e.preventDefault();var t="# "+a.child(".author").innerText;var i="# "+a.child(".link").innerText;var n="# "+a.child(".license").innerText;var s=t+"<br>"+i+"<br>"+n+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>");var r=t+"\n"+i+"\n"+n+"\n\n"+window.getSelection().toString().replace(/\r\n/g,"\n");if(e.clipboardData){e.clipboardData.setData("text/html",s);e.clipboardData.setData("text/plain",r)}else if(window.clipboardData){return window.clipboardData.setData("text",r)}}};$.each("li ruby",function(e){var a=e.parentNode;if(e.parentNode.tagName!="LI"){a=e.parentNode.parentNode}a.addClass("ruby")});$.each("ol[start]",function(e){e.style.counterReset="counter "+parseInt(e.attr("start")-1)});$.each(".md table",function(e){e.wrap({className:"table-container"})});$.each(".highlight > .table-container",function(e){e.className="code-container"});$.each("figure.highlight",function(e){var a=e.child(".code-container");var t=e.child("figcaption");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var i=e.child(".copy-btn");if(LOCAL.nocopy){i.remove()}else{i.addEventListener("click",function(e){var t=e.currentTarget;var i="",n="";a.find("pre").forEach(function(e){n+=i+e.innerText;i="\n"});clipBoard(n,function(e){t.child(".ic").className=e?"ic i-check":"ic i-times";t.blur();showtip(LOCAL.copyright)})});i.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.child(".ic").className="ic i-clipboard"},1e3)})}var n=e.child(".breakline-btn");n.addEventListener("click",function(a){var t=a.currentTarget;if(e.hasClass("breakline")){e.removeClass("breakline");t.child(".ic").className="ic i-align-left"}else{e.addClass("breakline");t.child(".ic").className="ic i-align-justify"}});var s=e.child(".fullscreen-btn");var r=function(){e.removeClass("fullscreen");e.scrollTop=0;BODY.removeClass("fullscreen");s.child(".ic").className="ic i-expand"};var c=function(a){var t=a.currentTarget;if(e.hasClass("fullscreen")){r();d&&d();pageScroll(e)}else{e.addClass("fullscreen");BODY.addClass("fullscreen");s.child(".ic").className="ic i-compress";o&&o()}};s.addEventListener("click",c);t&&t.addEventListener("click",c);if(a&&a.find("tr").length>15){a.style.maxHeight="300px";a.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var l=a.child(".show-btn");var o=function(){a.style.maxHeight="";l.addClass("open")};var d=function(){a.style.maxHeight="300px";l.removeClass("open")};l.addEventListener("click",function(e){if(l.hasClass("open")){r();d();pageScroll(a)}else{o()}})}});$.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});$.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var a=$("#qr");if(a.display()==="inline-flex"){transition(a,0)}else{transition(a,1,function(){a.display("inline-flex")})}})});$.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(a){if(e.hasClass("correct")){e.toggleClass("right");e.parentNode.parentNode.addClass("show")}else{e.toggleClass("wrong")}})});$.each(".quiz > p",function(e){e.addEventListener("click",function(a){e.parentNode.toggleClass("show")})});$.each(".quiz > p:first-child",function(e){var a=e.parentNode;var t="choice";if(a.hasClass("true")||a.hasClass("false"))t="true_false";if(a.hasClass("multi"))t="multiple";if(a.hasClass("fill"))t="gap_fill";if(a.hasClass("essay"))t="essay";e.attr("data-type",LOCAL.quiz[t])});$.each(".quiz .mistake",function(e){e.attr("data-type",LOCAL.quiz.mistake)});$.each("div.tags a",function(e){e.className=["primary","success","info","warning","danger"][Math.floor(Math.random()*5)]});$.each(".md div.player",function(e){mediaPlayer(e,{type:e.attr("data-type"),mode:"order",btns:[]}).player.load(JSON.parse(e.attr("data-src"))).fetch()})};const n=function(){var e;$.each("div.tab",function(a,t){if(a.attr("data-ready"))return;var i=a.attr("data-id");var n=a.attr("data-title");var s=$("#"+i);if(!s){s=document.createElement("div");s.className="tabs";s.id=i;s.innerHTML='<div class="show-btn"></div>';var r=s.child(".show-btn");r.addEventListener("click",function(e){pageScroll(s)});a.parentNode.insertBefore(s,a);e=true}else{e=false}var c=s.child(".nav ul");if(!c){c=s.createChild("div",{className:"nav",innerHTML:"<ul></ul>"}).child("ul")}var l=c.createChild("li",{innerHTML:n});if(e){l.addClass("active");a.addClass("active")}l.addEventListener("click",function(e){var t=e.currentTarget;s.find(".active").forEach(function(e){e.removeClass("active")});a.addClass("active");t.addClass("active")});s.appendChild(a);a.attr("data-ready",true)})};const s=function(){var e=$("#comments");if(!e){goToComment.display("none");return}else{goToComment.display("")}if(!window.IntersectionObserver){vendorCss("valine")}else{var a=new IntersectionObserver(function(e,a){var t=e[0];vendorCss("valine");if(t.isIntersecting||t.intersectionRatio>0){transition($("#comments"),"bounceUpIn");a.disconnect()}});a.observe(e)}};const r=function(e){if(CONFIG.search===null)return;if(!siteSearch){siteSearch=BODY.createChild("div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})}var a=instantsearch({indexName:CONFIG.search.indexName,searchClient:algoliasearch(CONFIG.search.appID,CONFIG.search.apiKey),searchFunction:function(e){var a=$(".search-input");if(a.value){e.search()}}});a.on("render",function(){e.refresh($("#search-hits"))});a.addWidgets([instantsearch.widgets.configure({hitsPerPage:CONFIG.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var a=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return a+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(e){var a=e.categories?"<span>"+e.categories.join('<i class="ic i-angle-right"></i>')+"</span>":"";return'<a href="'+CONFIG.root+e.path+'">'+a+e._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);a.start();$.each(".search",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden";transition(siteSearch,"shrinkIn",function(){$(".search-input").focus()})})});const t=function(){document.body.style.overflow="";transition(siteSearch,0)};siteSearch.addEventListener("click",function(e){if(e.target===siteSearch){t()}});$(".close-btn").addEventListener("click",t);window.addEventListener("pjax:success",t);window.addEventListener("keyup",function(e){if(e.key==="Escape"){t()}})};
//rebuild by hrmmi 