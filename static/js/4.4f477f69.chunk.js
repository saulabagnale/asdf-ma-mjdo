(this["webpackJsonpmanganyaa-maouoyasumi-react"]=this["webpackJsonpmanganyaa-maouoyasumi-react"]||[]).push([[4],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},109:function(e,t,a){},111:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(0),r=a(13),o=a(78),s=a(85),i=a(18),l=a(119),d=a(87),u=function(){var e=new Date;e.setSeconds(e.getSeconds()+2),window.sessionStorage.setItem("asdf",e.getTime().toString())},p=a(84),h=a(17),m=(a(104),a(2)),f=function(){var e=Object(c.useContext)(o.a).translations,t=Object(c.useState)((function(){return window.Notification.permission||"default"})),a=Object(n.a)(t,2),r=a[0],s=a[1];function i(){window.Notification?Notification.requestPermission((function(e){return function(e){window.OneSignal&&window.OneSignal.isPushNotificationsEnabled().then((function(e){e||window.OneSignal.push(["registerForPushNotifications"])})),s(e)}(e)})):s("denied")}return Object(m.jsx)("h3",{className:"flipInY",children:"granted"===r?Object(m.jsx)(m.Fragment,{children:e.weWillNotifyYou}):"denied"===r?Object(m.jsx)(m.Fragment,{children:e.activateNotifications}):Object(m.jsx)("button",{className:"headerbtn",type:"button",onClick:i,children:e.weCanNotifyYou})})},j=(a(105),function(e){var t=e.chapterName,a=e.subscribe,n=e.link,r=e.serieNameWithManga,s=Object(c.useContext)(o.a).translations;return Object(m.jsxs)("header",{className:"bg95",children:[Object(m.jsx)("h1",{className:"flipInY ".concat(n?"link":""),children:n?Object(m.jsx)(h.b,{to:n,children:r}):r}),Object(m.jsxs)("h2",{className:"flipInY",children:[s.chapter," ",t,a&&": ".concat(s.notReleasedYet)]}),a&&"Notification"in window&&Object(m.jsx)(f,{})]})}),g=a(107),b=a.n(g),x=a(108),O=a.n(x),v={position:"relative",display:"inline-block",borderRadius:5,userSelect:"none",boxSizing:"border-box",height:10,width:"100%",cursor:"pointer"},y={position:"absolute",borderRadius:5,userSelect:"none",boxSizing:"border-box",top:0,height:"100%",cursor:"pointer"},w={position:"relative",display:"block",content:'""',width:18,height:18,backgroundColor:"#fff",borderRadius:"50%",boxShadow:"0 1px 1px rgba(0,0,0,.5)",userSelect:"none",cursor:"pointer",boxSizing:"border-box"};function N(e){var t=e.touches;if(t&&t.length){var a=t[0];return{x:a.clientX,y:a.clientY}}return{x:e.clientX,y:e.clientY}}var C=function(e){var t=e.axis,a=e.x,n=e.xmin,r=e.xmax,o=e.xstep,s=e.onChange,l=e.styles,d=Object(c.useRef)(null),u=Object(c.useRef)(null),p=Object(c.useRef)({}),h=Object(c.useRef)({});function f(e){var a=e.left;if(s){var c=d.current.getBoundingClientRect().width,i=0;a<0&&(a=0),a>c&&(a=c),"x"!==t&&"xy"!==t||(i=a/c*(r-n)),s({x:(0!==i?parseInt(i/o,10)*o:0)+n,y:0})}}function j(e){e.preventDefault(),f(function(e){var t=N(e),a=t.x+p.current.x-h.current.x,n=t.y+p.current.y-h.current.y;return{left:a,top:n}}(e))}function g(e){e.preventDefault(),document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",j,{passive:!1}),document.removeEventListener("touchend",g),document.removeEventListener("touchcancel",g)}function b(e){e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation();var t=u.current,a=N(e);p.current={x:t.offsetLeft,y:t.offsetTop},h.current={x:a.x,y:a.y},document.addEventListener("mousemove",j),document.addEventListener("mouseup",g),document.addEventListener("touchmove",j,{passive:!1}),document.addEventListener("touchend",g),document.addEventListener("touchcancel",g)}function x(e){e.preventDefault();var t=N(e),a=d.current.getBoundingClientRect();p.current={x:t.x-a.left,y:t.y-a.top},h.current={x:t.x,y:t.y},document.addEventListener("mousemove",j),document.addEventListener("mouseup",g),document.addEventListener("touchmove",j,{passive:!1}),document.addEventListener("touchend",g),document.addEventListener("touchcancel",g),f({left:t.x-a.left,top:t.y-a.top})}var O=function(){var e=(a-n)/(r-n)*100;return e>100&&(e=100),e<0&&(e=0),{top:0,left:e}}(),C={width:"".concat(O.left,"%")},k={position:"absolute",transform:"translate(-50%, -50%)",left:"".concat(O.left,"%"),top:"50%"};return Object(m.jsxs)("div",{ref:d,style:Object(i.a)(Object(i.a)({},v),l.track),onTouchStart:x,onMouseDown:x,children:[Object(m.jsx)("div",{style:Object(i.a)(Object(i.a)(Object(i.a)({},y),l.active),C)}),Object(m.jsx)("div",{ref:u,style:k,onTouchStart:b,onMouseDown:b,onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},children:Object(m.jsx)("div",{style:w})})]})};C.defaultProps={axis:"x",x:50,xmin:0,xmax:100,xstep:1,styles:{}};var k=C;a(106);var M=function(e){var t=e.mangaPageWidth,a=e.setMangaPageWidth,n=e.mode;function c(e){e!==t&&(a(e),localStorage.setItem("mangaPageWidth","".concat(e)))}return Object(m.jsxs)("div",{className:"slider-container bg95 fadeInUp",children:[Object(m.jsxs)("div",{className:"slider-uppersection",children:[Object(m.jsx)("div",{className:"zoom-icon",onClick:function(){return t>10&&c(t-10)},children:Object(m.jsx)(b.a,{})}),Object(m.jsxs)("span",{className:"slider-value-show",children:[t,"%"]}),Object(m.jsx)("div",{className:"zoom-icon",onClick:function(){return t<100&&c(t+10)},children:Object(m.jsx)(O.a,{})})]}),Object(m.jsx)(k,{axis:"x",xstep:10,xmin:10,xmax:100,x:t,onChange:function(e){return c(e.x)},styles:{track:{backgroundColor:"light"===n?"rgb(63,81,181, 0.4)":"rgb(0,0,0, 0.4)"},active:{backgroundColor:"light"===n?"rgb(63,81,181, 1)":"orange"}}})]})},S=a(86),I=a(36),P=a.n(I),W=a(26);var E=function(e){var t=e.fullscreen,a=e.set,n=Object(c.useContext)(o.a).translations;return Object(m.jsxs)("div",{className:"switch-container",children:[Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){e.target.checked?(a.fullscreenOn(),Object(W.b)(),sessionStorage.setItem("fullscreen","true")):(a.fullscreenOff(),Object(W.a)(),sessionStorage.setItem("fullscreen","false"))}}),Object(m.jsx)("span",{className:"slider round switchslider"})]}),Object(m.jsx)(P.a,{className:"switch",title:t?"".concat(n.deactivate," ").concat(n.fullscreen):"".concat(n.activate," ").concat(n.fullscreen)})]})},L=a(35),z=a.n(L);var T=function(e){var t=e.darkmode,a=e.set,n=Object(c.useContext)(o.a).translations;return Object(m.jsxs)("div",{className:"switch-container",children:[Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",checked:!t,onChange:function(e){e.target.checked?a.darkmodeOff():a.darkmodeOn(),localStorage.setItem("darkmode","".concat(!e.target.checked))}}),Object(m.jsx)("span",{className:"slider round switchslider"})]}),Object(m.jsx)(z.a,{className:"switch",title:t?"".concat(n.activate," ").concat(n.lightmode):"".concat(n.activate," ").concat(n.darkmode)})]})},B=a(89),D=a.n(B),R=a(110),Y=a.n(R),U=(a(109),function(){return document&&document.body.classList.remove("scroll-down")});var F=function(e){var t=e.nextChapter,a=e.previousChapter,n=Object(c.useContext)(o.a).translations,r=function(e,n){e.preventDefault();var c="prev"===n?a:t,r=window.sessionStorage.getItem("asdf");r&&Number(r)<(new Date).getTime()&&c.callback()};return Object(m.jsxs)("nav",{className:"otherchapter fadeInUp small",children:[Object(m.jsxs)(h.b,{className:"prevchapter bg95 ".concat(a.name&&a.link?"":"hidden"),to:a.link||!1,title:a.name||!1,onClick:function(e){return r(e,"prev")},onMouseDown:U,children:[Object(m.jsx)(D.a,{alt:a.name}),window.innerWidth>1199&&Object(m.jsx)("span",{children:n.prevChapter})]}),window.innerWidth>1199&&Object(m.jsx)("iframe",{className:"lazy topAdFadeIn","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4154168&output=noscript",src:"",width:"728",height:"90",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0"}),Object(m.jsxs)(h.b,{className:"nextchapter bg95 ".concat(t.name&&t.link?"":"hidden"),to:t.link||!1,title:t.name||!1,onClick:function(e){return r(e,"next")},onMouseDown:U,children:[window.innerWidth>1199&&Object(m.jsx)("span",{children:n.nextChapter}),Object(m.jsx)(Y.a,{alt:t.name})]})]})},A=a(32);a(91);var H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",a=Math.floor((new Date-e)/1e3),n=a/31536e3,c={en:{years:"years",months:"months",days:"days",hours:"hs",minutes:"mins",seconds:"secs"},es:{years:"a\xf1os",months:"meses",days:"dias",hours:"hs",minutes:"mins",seconds:"segs"},pt:{years:"anos",months:"meses",days:"dias",hours:"hs",minutes:"mins",seconds:"segs"}};if(n>1)return"".concat(Math.floor(n)," ").concat(c[t].years);if((n=a/2592e3)>1)return"".concat(Math.floor(n)," ").concat(c[t].months);if((n=a/86400)>1){var r=1===Math.floor(n)?"".concat(Math.floor(n)," ").concat(c[t].days.replace("dias","dia")):"".concat(Math.floor(n)," ").concat(c[t].days);return r}return(n=a/3600)>1?"".concat(Math.floor(n)," ").concat(c[t].hours):(n=a/60)>1?"".concat(Math.floor(n)," ").concat(c[t].minutes):"".concat(Math.floor(a)," ").concat(c[t].seconds)},_=function(e){var t=e.folderName,a=e.mangaName,n=e.orderNumber,s=e.chLink,i=e.mLink,l=e.descriptionImg,d=e.uploadDate,u=e.containerClass,p=void 0===u?"":u,h=e.imgClass,f=void 0===h?"":h,j=Object(c.useContext)(r.a).siteMetadata,g=Object(c.useContext)(o.a).translations,b=j.lang,x="".concat(g.read,' "').concat(a,'" Manga ').concat(g.chapter," ").concat(n),O='"'.concat(a,'" Manga'),v="es"===b?"Hace ":"",y="";"en"===b?y="ago":"pt"===b&&(y="atr\xe1s");var w=function(){s&&localStorage.setItem("lastChChecked-".concat(t),JSON.stringify({url:s,orderNumber:n,mangaName:a,time:(new Date).getTime()}))};return Object(m.jsxs)("div",{className:"ch-c ".concat(p),children:[Object(m.jsx)(A.a,{className:"ch-imgc",to:s||i,onMouseDown:w,title:s?x:O,children:Object(m.jsx)("img",{className:"ch-drimg ".concat(f),"data-src":"https://content.manganyaa.com/file/mnyaaa/".concat(l),src:"",alt:s?x:O,onContextMenu:function(e){return e.preventDefault()}})}),s&&Object(m.jsx)(A.a,{className:"ch-num",to:s,onMouseDown:w,title:s?x:O,children:n}),Object(m.jsx)(A.a,{to:i,title:O,children:Object(m.jsx)("h5",{className:"ch-name",children:a})}),d&&Object(m.jsxs)("p",{children:[v,H(new Date(d),b)," ",y]})]})},q=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current.outerHTML="\x3c!--".concat(e.text,"--\x3e")}),[]),Object(m.jsx)("div",{ref:t})},J=function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),a=t[0],o=t[1],s=Object(c.useContext)(r.a).siteMetadata,l=s.lang,d=s.page;Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/saulabagnale/asdf-ma-jsons/master/lastPopularUpdates-".concat(l,".json")).then((function(e){return e.json()})).then((function(e){var t=Object(r.e)(l,e,!1,!0);o(t)}))}),[l]);var u="popularchs-".concat(l,"-lazy");Object(p.a)(".".concat(u),a);var h=a.map((function(e){return Object(c.createElement)(_,Object(i.a)(Object(i.a)({},e),{},{key:e.folderName,imgClass:u}))})),f=window.innerWidth<700?{minHeight:"30vh"}:{};return Object(m.jsxs)("div",{className:"column bg95 chs-p ".concat(d),style:f,children:[Object(m.jsx)("h3",{children:Object(m.jsx)(A.a,{tabIndex:0,to:"/".concat(l,"/popular/"),style:{textDecoration:"underline"},children:"Popular"})}),Object(m.jsx)(q,{text:"googleoff: all"}),Object(m.jsx)("div",{className:"chs-c",children:h.length>0?h:Object(m.jsx)("div",{className:"loader",style:{margin:"1.25% auto"}})}),Object(m.jsx)(q,{text:"googleon: all"})]})},G={darkmode:function(){return!localStorage.getItem("darkmode")||JSON.parse(localStorage.getItem("darkmode"))},fullscreen:function(){return!!sessionStorage.getItem("fullscreen")&&JSON.parse(sessionStorage.getItem("fullscreen"))},mangaPageWidth:function(){return NaN!==Number(localStorage.getItem("mangaPageWidth"))&&0!==Number(localStorage.getItem("mangaPageWidth"))?Number(localStorage.getItem("mangaPageWidth")):70}},X=a(120),K=a(122),Q=a(123),V=a(124),Z=a(125),$=a(126),ee=a(127),te=a(128),ae=a(129),ne=a(130),ce=a(131),re=a(132),oe=a(133),se=a(134),ie=a(135),le=a(136),de=a(137),ue=(a(111),function(e){var t=e.siteUrl,a=e.fullUrl,r=e.imgs,s=Object(c.useContext)(o.a).translations.share,l=function(e,t){if(t){var a=Object(n.a)(t,3),c=a[0],r=a[1],o=a[2];if(o)return o.props["data-src"];if(r)return r.props["data-src"];if(c)return c.props["data-src"]}return"".concat(e,"/description.jpg")}(t,r),d=[{name:"Facebook",Button:K.a,Icon:Q.a},{name:"Twitter",Button:V.a,Icon:Z.a},{name:"Pinterest",Button:$.a,Icon:ee.a,media:l},{name:"Reddit",Button:te.a,Icon:ae.a},{name:"WhatsApp",Button:ne.a,Icon:ce.a},{name:"Telegram",Button:re.a,Icon:oe.a},{name:"Line",Button:se.a,Icon:ie.a},{name:"Tumblr",Button:le.a,Icon:de.a}];return Object(m.jsxs)("div",{className:"box-wrapper sharebuttons-wrapper bg95",children:[Object(m.jsx)("h5",{children:s}),Object(m.jsx)("div",{className:"box-container sharebuttons-container ",children:d.map((function(e){var t=e.name,n=e.Button,c=e.Icon,r=Object(X.a)(e,["name","Button","Icon"]);return Object(m.jsx)("div",{title:t,children:Object(m.jsx)(n,Object(i.a)(Object(i.a)({url:a},r),{},{className:"sharebutton",children:Object(m.jsx)(c,{round:!0,size:40})}))},t)}))})]})}),pe=function(e){var t=e.toString();return t.includes(".")?"".concat(t.split(".")[0],"-").concat(t.split(".")[1]):t},he=function(e,t,a,n){var c=n.translations,r=n.serie,o=n.siteMetadata,s=o.storage,i=o.lang,l=r.folderName,d={nextChapter:0!==e?t[e-1]:null,previousChapter:t[e+1]?t[e+1]:null},u=d.nextChapter?d.nextChapter.url:null,p=d.nextChapter?"".concat(c.chapter," ").concat(d.nextChapter.orderNumber):null,h=a&&d.nextChapter?function(e,t,a,n,c){for(var r=[],o=0;o<c;o++){var s="".concat(e).concat(t,"/").concat(a,"/").concat(n,"/").concat(o+1,".jpg");r.push(Object(m.jsx)("link",{rel:"prefetch",href:"".concat(s),as:"image"}))}return r}(s.fullPath,l,i,pe(d.nextChapter.orderNumber),d.nextChapter.pages):[],f=d.previousChapter?d.previousChapter.url:null;return{otherChapters:d,nextChapter:{name:p,link:u,imgsPreload:h},previousChapter:{name:d.previousChapter?"".concat(c.chapter," ").concat(d.previousChapter.orderNumber):null,link:f}}},me=function(e,t,a){for(var n=e.pages,c=e.orderNumber,r=e.chapterTitle,o=a.translations,s=a.siteMetadata,i=a.serie,l=s.lang,d=s.storage,u=i.folderName,p=i.serieNameWithManga,h=[],f=[],j=pe(c),g=0;g<n;g++){var b="".concat(u,"|").concat(l,"|").concat(j,"|").concat(g+1);h.push(Object(m.jsx)("img",{className:"chimgs-lazy","data-src":b,src:"".concat(d.fullPath,"placeholder.gif"),onContextMenu:function(e){return e.preventDefault()},alt:"".concat(p," ").concat(o.langName," ").concat(o.chapter," ").concat(r||c," ").concat(o.page," ").concat(g+1)},"".concat(p," ").concat(o.langName," ").concat(o.chapter," ").concat(r||c," ").concat(o.page," ").concat(g+1))),t&&f.push(Object(m.jsx)("link",{rel:"preload",href:b,as:"image"}))}return{components:h,preloads:f}},fe=function(e,t){for(var a=null,n=0;n<(null===t||void 0===t?void 0:t.length);n++){if(t[n].orderNumber===e){a=n;break}}return a},je=a(114),ge=a.n(je),be=(a(113),function(){var e=function(){return window.print()},t=Object(c.useContext)(o.a).translations;return Object(m.jsxs)("div",{className:"box-wrapper downloadchapter-wrapper bg95",children:[Object(m.jsx)("h5",{children:t.downloadChapter}),Object(m.jsx)("div",{className:"box-container",children:Object(m.jsx)("div",{className:"downloadChBtn",role:"button",tabIndex:0,"aria-label":t.translate,onClick:e,onKeyPress:function(t){13!==t.which&&13!==t.keyCode&&13!==t.code||e()},children:Object(m.jsx)(ge.a,{})})})]})}),xe=(a(115),a(116),function(e){var t=e.serie,a=Object(c.useContext)(r.a),h=a.siteMetadata,f=a.siteUrl,g=a.darkmode,b=a.fullscreen,x=a.set,O=Object(c.useContext)(o.a).translations,v=x.darkmodeOn,y=x.darkmodeOff,w=x.fullscreenOn,N=x.fullscreenOff,C=h.lang,k=h.currentPath,I=h.storage,P=h.isMainSite,W=t.folderName,L=t.serieName,z=t.serieNameWithManga,B=t.chapters,D=t.completed,R=P||"Completed"===D?B.list.filter((function(e){return 0!==e.pages})):[B.upcoming].concat(Object(l.a)(B.list.filter((function(e){return 0!==e.pages})))),Y=Object(c.useState)((function(){return G.mangaPageWidth()})),U=Object(n.a)(Y,2),A=U[0],H=U[1],_=g?"dark":"light",q=Number(k.split("/").pop()),X=fe(q,R);null===X&&window.location.replace("/".concat(C));var K=Object(c.useState)(R[X]),Q=Object(n.a)(K,2),V=Q[0],Z=Q[1],$=V.orderNumber,ee=V.chapterTitle,te=V.pages,ae=V.url,ne=ee&&ee.split(":")[1],ce=ne&&ne.trim()?ee:$,re=Object(d.a)(),oe=me(V,re,{translations:{langName:O.langName,chapter:O.chapter,page:O.page},serie:{folderName:W,serieNameWithManga:z},siteMetadata:{lang:C,storage:I}});Object(p.a)(".chimgs-lazy",V),Object(p.a)(".lazy",V),0!==te&&localStorage.setItem("lastChChecked-".concat(W),JSON.stringify({url:ae,orderNumber:$,mangaName:L,time:(new Date).getTime()}));var se=fe(V.orderNumber,R),ie=he(se,R,re,{siteMetadata:{lang:C,storage:I},serie:{folderName:W},translations:{chapter:O.chapter}}),le=ie.otherChapters,de=ie.nextChapter,pe=ie.previousChapter;Object(c.useEffect)((function(){u()}),[]);var je=function(e){history.pushState("","","previous"===e?pe.link.replace("https://manganyaa.com",""):de.link.replace("https://manganyaa.com","")),window.scrollTo({top:0}),u(),Z("previous"===e?Object(i.a)({},le.previousChapter):Object(i.a)({},le.nextChapter))},ge={chapterTitle:ce,nextChapter:{name:de.name,link:de.link,callback:function(){return je("next")}},previousChapter:{name:pe.name,link:pe.link,callback:function(){return je("previous")}}};console.log("otherChaptersProps ",ge);var xe="".concat(f).concat(ae),Oe=Object(m.jsx)(ue,{siteUrl:f,fullUrl:xe,imgs:oe.components},"".concat(ae,"-sharebtns")),ve=Object(m.jsx)(S.a,{page:"chapter",serie:t}),ye=Object(m.jsx)(be,{});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{fullUrl:"".concat(f).concat(k),mode:_,chapterTitle:$,serie:t}),Object(m.jsxs)("main",{className:"page-chapter","data-testfirstchapter":le.previousChapter?"false":"true","data-testlastchapter":le.nextChapter?"false":"true",children:[Object(m.jsx)(j,{chapterName:ce,subscribe:0===te,link:k.split("en"===C?"/chapter":"/capitulo")[0],serieNameWithManga:z},"".concat(ae,"-header")),Object(c.createElement)(F,Object(i.a)(Object(i.a)({},ge),{},{key:"".concat(ae,"-otherchs")})),0!==te&&Object(m.jsxs)("section",{id:"settings",className:"settings-container noprint",children:[Object(m.jsx)("div",{children:Object(m.jsx)(M,{mangaPageWidth:A,setMangaPageWidth:H,mode:_})}),Object(m.jsxs)("div",{className:"switches-container bg95 fadeInUp",children:[Object(m.jsx)(E,{fullscreen:b,set:{fullscreenOn:w,fullscreenOff:N}}),Object(m.jsx)(T,{darkmode:g,set:{darkmodeOn:v,darkmodeOff:y}})]})]},"".concat(ae,"-settings")),Object(m.jsx)("section",{className:"imgsList fadeInUp width-".concat(A||70),children:oe.components},"".concat(ae,"-chlist")),Object(m.jsx)("article",{style:{width:"100vw",display:"flex",justifyContent:"center",marginBottom:"1vh"},children:window.innerWidth<900?Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153962&output=noscript",src:"",width:"300",height:"100",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-mobile"},"".concat(ae,"-ad1")):Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153946&output=noscript",src:"",width:"900",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"},"".concat(ae,"-ad1"))}),Object(m.jsx)(F,Object(i.a)(Object(i.a)({},ge),{},{inferior:!0})),window.innerWidth>1199&&Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("section",{id:"desktop-subchapter",className:"desktop-only bottom-layout",children:[Object(m.jsxs)("div",{style:{width:"72vw"},children:[Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Oe,ye]}),Object(m.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(m.jsx)(J,{})}),window.innerWidth>1199&&Object(m.jsx)("article",{style:{display:"flex",justifyContent:"center",marginTop:"1vh"},children:Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153946&output=noscript",src:"",width:"900",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"},"".concat(ae,"-ad2"))})]}),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[ve,window.innerWidth>1199&&Object(m.jsx)("article",{style:{display:"flex",justifyContent:"center"},children:Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4155050&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"},"".concat(ae,"-ad2"))})]})]})}),window.innerWidth<1200&&Object(m.jsxs)("section",{id:"mobile-subchapter",className:"mobile-only bottom-layout",children:[Oe,Object(m.jsx)("article",{style:{display:"flex",width:"100vw",justifyContent:"center",marginTop:"1vh",marginBottom:"1vh"},children:Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"},"".concat(ae,"-ad3"))}),Object(m.jsx)(J,{}),ve,Object(m.jsx)("article",{style:{display:"flex",width:"100vw",justifyContent:"center",marginTop:"1vh",marginBottom:"1vh"},children:Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"},"".concat(ae,"-ad3"))})]}),Object(m.jsx)("br",{})]})]})}),Oe=a(20),ve=a(12);a(117),t.default=function(){window.scrollTo({top:0});var e=Object(c.useState)({}),t=Object(n.a)(e,2),i=t[0],l=t[1],d=Object(c.useContext)(r.a),u=d.siteMetadata,p=d.siteUrl,h=d.darkmode,f=i.chapters,j=u.currentPath,g=u.isMainSite,b=u.lang,x=h?"dark":"light",O=g?j.split("/")[1]:ve.folderName;return Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/saulabagnale/asdf-ma-jsons/master/series/".concat(O,"/").concat(b,".json")).then((function(e){return e.json()})).then((function(e){var t=e.mangaName,a=e.completed,n=e.chs;l({serieName:t,serieNameWithManga:"".concat(t," Manga"),completed:a,folderName:O,chapters:Object(r.c)(b,O,n,a)})}))}),[b,O]),f?Object(m.jsx)(o.b,{pageTranslations:a(83)["".concat(b,"i18nChapter")],children:Object(m.jsx)(xe,{serie:i})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{fullUrl:"".concat(p).concat(j),mode:x,serie:i}),Object(m.jsx)(Oe.a,{})]})}},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(18),c=a(0),r=a(13),o=a(2),s=Object(c.createContext)();t.b=function(e){var t=e.children,a=e.pageTranslations,i=Object(c.useContext)(r.a).genericTranslations,l={translations:Object(n.a)(Object(n.a)({},i),a)};return Object(o.jsx)(s.Provider,{value:l,children:t})}},83:function(e,t,a){"use strict";a.r(t),a.d(t,"eni18nChapter",(function(){return n})),a.d(t,"esi18nChapter",(function(){return c})),a.d(t,"pti18nChapter",(function(){return r}));var n={weCanNotifyYou:"We can notify you when new chapters get released",weWillNotifyYou:"We will notify you when this chapter gets released",activateNotifications:"If you enable notifications, we can notify you when new chapters get released",notReleasedYet:"Not released yet",langName:"English",page:"Page",share:"Share Chapter",chapterOpinions:"Chapter's Opinions",downloadChapter:"Download Chapter"},c={weCanNotifyYou:"Podemos notificarte cuando nuevos capitulos son publicados",weWillNotifyYou:"Te notificaremos cuando este capitulo sea publicado",activateNotifications:"Si habilitas las notificaciones, podemos notificarte cuando nuevos capitulos son publicados",notReleasedYet:"Aun no publicado",langName:"Espa\xf1ol",page:"Pagina",share:"Compartir Capitulo",chapterOpinions:"Opiniones del Capitulo",downloadChapter:"Descargar Capitulo"},r={weCanNotifyYou:"Podemos notific\xe1-lo quando novos cap\xedtulos forem lan\xe7ados",weWillNotifyYou:"Iremos notific\xe1-lo quando este cap\xedtulo foi publicado",activateNotifications:"Se voc\xea ativar as notifica\xe7\xf5es, podemos notific\xe1-lo quando novos cap\xedtulos forem lan\xe7ados",notReleasedYet:"Ainda n\xe3o publicado",langName:"Portugu\xeas",page:"P\xe1gina",share:"Compartilhar Cap\xedtulo",chapterOpinions:"Opini\xf5es do Cap\xedtulo",downloadChapter:"Baixar Cap\xedtulo"}},84:function(e,t,a){"use strict";var n=a(0),c=a(13);t.a=function(e,t){var a=Object(n.useContext)(c.a).siteMetadata,r=a.storage,o=a.lang,s=a.page,i=a.currentPath;Object(n.useEffect)((function(){if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){var t=[].slice.call(document.querySelectorAll(e));if(t.length>0){var a=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){var n=t.target;!function(e,t,a){if(e.dataset.lazybg)e.style.backgroundImage="url(".concat(e.dataset.src,")");else if(e.dataset.src.includes("/iframe.")||e.dataset.src.includes("/flags/")||e.dataset.src.includes("ogimg")||!e.dataset.src.includes("|"))e.src=e.dataset.src;else{var n="".concat(a.fullPath).concat(e.dataset.src.replaceAll("|","/"),".jpg");e.src=n}e.classList.remove(t.replace(".")),(t.includes("chs-")||t.includes("chimgs-"))&&e.classList.add("fadeIn")}(n,e,r),a.unobserve(n)}}))}));t.forEach((function(e){a.observe(e)}))}}}),[s,i,o,r,t])}},85:function(e,t,a){"use strict";var n=a(0),c=a(90);a(83);var r=a(13),o=a(2),s=function(e,t,a,n,c,r,o,s,i){var l=n?"".concat(a," ").concat(n.split(":")[0]):"";return l?"".concat(i&&"serie"!==s&&"chapter"!==s?"MangaNyaa - ":"").concat(c," ").concat(e," ").concat(l," ").concat(r," ").concat(t," ").concat(o," Online"):"".concat(i&&"serie"!==s&&"chapter"!==s?"MangaNyaa - ":"").concat(c," ").concat(e," ").concat(r," ").concat(t).concat(l," ").concat(o," Online")},i=function(e,t,a){var n={en:"Read ".concat(t," Online Free"),es:"Leer ".concat(t," Online Gratis"),pt:"Leia ".concat(t," Online Gr\xe1tis")};return"home"===a?"MangaNyaa ~ ".concat(n[e]):n[e]},l=function(e,t,a,n,c){var r="chapter"===c&&n?"".concat(a," ").concat(function(e){var t=e.split(":")[1];return!t||!t.trim()||t.includes("released")||t.includes("publicado")||t.includes("lan\xe7ado")?e.split(":")[0]:e}(n)," "):"";return{en:"Read ".concat(t," ").concat(r,"Online Free in English with the best High Quality (Mobile App, Darkmode, Fullscreen, Image Resizing) at Manga Nyaa."),es:"Leer ".concat(t," ").concat(r,"Online Gratis en Espa\xf1ol con la mejor calidad (App Mobile, Modo Oscuro, Pantalla Completa, Ajuste de Imagen) en Manga Nyaa."),pt:"Leia ".concat(t," ").concat(r,"Online Gr\xe1tis em Portugu\xeas com a melhor qualidade (App Mobile, Modo Escuro, Ajuste de Imagem, Tela Cheia) em Manga Nyaa.")}[e]},d=function(e){return{en:"English",es:"Espa\xf1ol",pt:"Portugu\xeas"}[e]},u=function(e){return{en:"en_US",es:"es_ES",pt:"pt_BR"}[e]},p=function(e,t,a,n){if("en"===e){var c=t;"home"!==a||t.includes("/en")||t.includes("/read")?"serie"!==a||t.includes("read-online-free-english")?"chapter"!==a||t.includes("read-online-free-english")?t.includes("/en")||(c=t.replace(".com/",".com/en/")):c=t.replace("/chapter","/read-online-free-english/chapter"):c=t+"/read-online-free-english":c=n[e];var r=c.replace("chapter","capitulo").replace("read","leer").replace("free","gratis").replace("english","espanol").replace("/en","/es"),s=c.replace("chapter","capitulo").replace("read","ler").replace("free","gratis").replace("english","portugues").replace("/en","/pt");return[Object(o.jsx)("link",{rel:"alternate",hrefLang:"es",href:r},r),Object(o.jsx)("link",{rel:"alternate",hrefLang:"pt",href:s},s)]}if("es"===e){var i=t.replace("capitulo","chapter").replace("leer","read").replace("gratis","free").replace("espanol","english").replace("/es","/en"),l=t.replace("leer","ler").replace("espanol","portugues").replace("/es","/pt");return[Object(o.jsx)("link",{rel:"alternate",hrefLang:"en",href:i},i),Object(o.jsx)("link",{rel:"alternate",hrefLang:"pt",href:l},l)]}if("pt"===e){var d=t.replace("capitulo","chapter").replace("ler","read").replace("gratis","free").replace("portugues","english").replace("/pt","/en"),u=t.replace("ler","leer").replace("portugues","espanol").replace("/pt","/es");return[Object(o.jsx)("link",{rel:"alternate",hrefLang:"en",href:d},d),Object(o.jsx)("link",{rel:"alternate",hrefLang:"es",href:u},u)]}return Object(o.jsx)(o.Fragment,{})};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mode:"dark"},t=e.fullUrl,a=e.chapterTitle,h=e.mode,m=e.serie,f=e.preloads,j=void 0===f?[]:f,g=Object(n.useContext)(r.a),b=g.genericTranslations,x=g.siteMetadata,O=g.siteUrl,v=b.chapter,y=b.read,w=b.in,N=b.free,C=x.lang,k=void 0===C?"en":C,M=x.page,S=x.homes,I=x.storage,P=x.isMainSite,W=m||{},E=W.serieNameWithManga,L=void 0===E?"Manga":E,z=W.folderName,T=d(k),B=l(k,L,v,a&&a.toString(),M),D=u(k),R=i(k,L,M),Y=s(L,T,v,a&&a.toString(),y,w,N,M,P),U=("home"===M||"serie"===M||"chapter"===M)&&p(k,t,M,S),F="home"!==M&&P?"".concat(I.fullPath).concat(z,"/description/1.jpg"):"".concat(O,"/ogimg.jpg");return Object(o.jsxs)(c.a,{htmlAttributes:{lang:k,mode:h,page:M},children:[Object(o.jsx)("title",{children:Y}),Object(o.jsx)("meta",{property:"og:title",content:Y}),Object(o.jsx)("meta",{name:"twitter:title",content:Y}),Object(o.jsx)("meta",{name:"description",content:B}),Object(o.jsx)("meta",{property:"og:description",content:B}),Object(o.jsx)("meta",{name:"twitter:description",content:B}),Object(o.jsx)("link",{rel:"manifest",href:"/manifest_".concat(k,".webmanifest")}),U,Object(o.jsx)("meta",{property:"og:locale",content:D}),Object(o.jsx)("meta",{property:"og:type",content:"article"}),Object(o.jsx)("meta",{property:"og:url",content:t}),Object(o.jsx)("meta",{property:"og:site_name",content:R}),Object(o.jsx)("meta",{property:"article:section",content:"Manga"}),Object(o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(o.jsx)("meta",{name:"twitter:image",content:F}),Object(o.jsx)("meta",{property:"og:image",content:F}),Object(o.jsx)("meta",{property:"og:image:secure_url",content:F}),j]})}},86:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(31);var o=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},s=a(13),i=a(78),l=(a(88),a(2));t.a=function(e){var t=e.limit,a=void 0===t?3:t,d=e.page,u=e.serie,p=Object(n.useContext)(s.a).siteMetadata,h=Object(n.useContext)(i.a).translations,m=p.lang,f=p.homes,j=u.serieName,g=function(e,t,a,n){return o(r.filter((function(e){return e.name!==t}))).slice(0,a).map((function(t,a){var r=t.name,o=t.subdomain;return Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsx)("a",{"data-src":"https://".concat(o,".manganyaa.com/ogimg.jpg"),"data-lazybg":!0,className:"other-manga-item ".concat(n," lazy"),href:"https://".concat(o,".manganyaa.com").concat(e),children:Object(l.jsx)("h6",{className:"other-manga-item-text bg70",children:r},"".concat(r,"-h6"))},"".concat(r,"-a")),2===a&&"serie"===n&&window.innerWidth<1200&&Object(l.jsx)("article",{style:{display:"flex",justifyContent:"center",marginBottom:"2.5vh"},children:Object(l.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"})})]},r)}))}(f[m],j,a,d);return Object(l.jsxs)("section",{className:"box-wrapper other-manga-wrapper ".concat(d," bg95 "),children:[Object(l.jsx)("h5",{children:h.otherPopularSeries}),Object(l.jsx)("div",{className:"box-container other-manga-container ".concat(d),children:g})]})}},87:function(e,t,a){"use strict";t.a=function(){var e=!0;if("undefined"!==typeof navigator){var t=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(t){var a=t.effectiveType,n=t.saveData;("slow-2g"===a||"2g"===a||"3g"===a||n)&&(e=!1)}}return e}},88:function(e,t,a){},91:function(e,t,a){}}]);