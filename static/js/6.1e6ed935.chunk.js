(this["webpackJsonpmanganyaa-maouoyasumi-react"]=this["webpackJsonpmanganyaa-maouoyasumi-react"]||[]).push([[6],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t),a.d(t,"en",(function(){return n})),a.d(t,"es",(function(){return r})),a.d(t,"pt",(function(){return i}));var n={lastRead:"Last You Read",lastRelease:"Last Release",upcomingRelease:"Upcoming Release",alternativeNames:"Alternative Names",author:"Author",artist:"Artist",demographic:"Demographic",genre:"Genre",theme:"Theme",status:"Status",description:"Description",completed:"Completed",ongoing:"Ongoing",hiatus:"Paused (Hiatus)",cancelled:"Cancelled"},r={lastRead:"Ultimo Que Leiste",lastRelease:"Ultimo Lanzamiento",upcomingRelease:"Proximo Lanzamiento",alternativeNames:"Nombres alternativos",author:"Autor",artist:"Artista",demographic:"Publico",genre:"Genero",theme:"Tematica",status:"Estado",description:"Descripcion",completed:"Completado",ongoing:"Publicandose",hiatus:"Pausada (Hiatus)",cancelled:"Cancelada"},i={lastRead:"\xdaltimo Que Voc\xea Leu",lastRelease:"\xdaltimo Lan\xe7amento",upcomingRelease:"Pr\xf3ximo Lan\xe7amento",alternativeNames:"Nomes Alternativos",author:"Autor",artist:"Artista",demographic:"P\xfablico",genre:"G\xeanero",theme:"Tem\xe1tica",status:"Estado",description:"Descri\xe7\xe3o",completed:"Completado",ongoing:"Em Publica\xe7\xe3o",hiatus:"Pausada (Hiatus)",cancelled:"Cancelada"}},141:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(7),i=a(0),s=a.n(i),c=a(86),o=a(77),l=a(84),d=a(13),p=(a(94),a(2)),h=function(e){var t=e.link,a=e.serie.serieNameWithManga;return Object(p.jsx)("header",{className:"bg95",children:Object(p.jsx)("h1",{className:"flipInY ".concat(t?"link":""),children:t?Object(p.jsx)("a",{href:t,children:a}):a})})},m=a(85),u=a(17),g=(a(95),a(8));var j=function(e){var t=e.mangaData,a=void 0===t?{}:t,n=Object(i.useContext)(d.a).siteMetadata,r=Object(i.useContext)(o.a).translations,s=n.lang,c=n.currentPath,l=n.isMainSite,h=l?c.split("/")[1]:g.folderName,j="".concat(h,"/description/1"),f=function(e,t){var a=t.toLowerCase().replace(/\s/g,"-");return"/".concat(s,"/").concat(e.toLowerCase(),"/").concat(a)},b=function(e,t){return l?Object(p.jsx)(u.b,{to:f(e,t),className:"underline",children:t}):Object(p.jsx)("a",{href:"https://manganyaa.com".concat(f(e,t)),className:"underline",children:t})},O=Array.isArray(a.alternativeNames)?a.alternativeNames.join("<br>"):a.alternativeNames,x=a.alternativeNames&&Object(p.jsxs)("p",{children:[Object(p.jsxs)("strong",{children:[r.alternativeNames,":"]})," ",O.replace(/<br>/g,"; ")]}),y=Array.isArray(a.author)?a.author.join(", "):a.author,v=a.author&&Object(p.jsxs)("p",{children:[Object(p.jsxs)("strong",{children:[r.author,":"]})," ",y.split(", ").map((function(e,t){return Object(p.jsxs)(p.Fragment,{children:[b("mangaka",e),t+1!==y.split(", ").length?", ":""]})}))]}),w=Array.isArray(a.author)?a.artist.join(", "):a.artist,N=a.artist&&Object(p.jsxs)("p",{children:[Object(p.jsxs)("strong",{children:[r.artist,":"]})," ",w.split(", ").map((function(e,t){return Object(p.jsxs)(p.Fragment,{children:[b("mangaka",e),t+1!==w.split(", ").length?", ":""]})}))]}),C=a.demographic&&r.genre&&Object(p.jsxs)("p",{children:[Object(p.jsxs)("strong",{children:[r.demographic,":"]})," ",b(r.genre,a.demographic)]}),M=Array.isArray(a.genres)?a.genres.join(", "):a.genres,z=a.genres&&r.genre&&Object(p.jsxs)("p",{children:[Object(p.jsxs)("strong",{children:[r.genre,":"]})," ",M.split(", ").map((function(e,t){return Object(p.jsxs)(p.Fragment,{children:[b(r.genre,e),t+1!==M.split(", ").length?", ":""]})}))]}),L=Array.isArray(a.themes)?a.themes.join(", "):a.themes,W=a.themes&&r.genre&&Object(p.jsxs)("p",{children:[Object(p.jsxs)("strong",{children:[r.theme,":"]})," ",L.split(", ").map((function(e,t){return Object(p.jsxs)(p.Fragment,{children:[b(r.genre,e),t+1!==L.split(", ").length?", ":""]})}))]}),k=a.completed&&Object(p.jsxs)("p",{children:[Object(p.jsxs)("strong",{children:[r.status,":"]})," ",r[a.completed.toLowerCase()]]}),A=decodeURIComponent(a.description);"'"!==A[0]&&"`"!==A[0]&&'"'!==A[0]&&"\u2019"!==A[0]||(A=A.slice(1,-1));var P=a.description&&Object(p.jsxs)("p",{children:[Object(p.jsxs)("strong",{children:[r.description,":"]}),Object(p.jsx)("br",{}),A]});return Object(p.jsxs)("section",{children:[Object(p.jsxs)("div",{id:"list-container",className:"description-section bg95",children:[Object(p.jsx)("h2",{children:"Manga Info"}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("img",{src:"https://content.manganyaa.com/file/mnyaaa/".concat(j,".jpg"),alt:"",role:"presentation",onContextMenu:function(e){return e.preventDefault()}}),Object(p.jsxs)("div",{className:"column",children:[x,v,N,C,z,W,k,P]})]})]}),window.innerWidth>1199&&Object(p.jsx)(m.a,{limit:6,page:"serie",serie:a})]})},f=a(98),b=a.n(f),O=a(36),x=a.n(O),y=(a(96),function(){return document&&document.body.classList.remove("scroll-down")}),v=function(e){var t=e.children,a=e.url,n=e.fontSize;return Object(p.jsx)(u.b,{to:a,className:"renderchapter font-".concat(n),onMouseDown:y,children:t},a)};function w(e){var t=e.chapter,a=e.fontSize,n=e.preload,r=void 0!==n&&n,s=e.serieName,c=Object(i.useContext)(d.a).siteMetadata.isMainSite,l=Object(i.useContext)(o.a).translations.chapter,h=window.innerWidth>1199?"40px":"25px",m="".concat(s.replace(/[.,/#!$%^&*;:{}=_`~()]/g,"")," ").concat(l," ").concat(t.orderNumber),u=m.length<29?"default":"small",g=!c&&Object(p.jsx)("img",{alt:"",src:"/libullet.png",width:h,height:h,role:"presentation",style:{height:h,width:h,borderRadius:"50%"}});return Object(p.jsxs)(v,{preload:r,url:t.url,fontSize:a,onMouseDown:function(){return"undefined"!==typeof window&&window.scrollTo({top:0})},children:[g,Object(p.jsx)("span",{className:u,children:m})]})}var N=s.a.memo(w),C=(a(97),function(e){for(var t=e.chaptersList,a=e.folderName,n=e.serieName,s=Object(i.useContext)(o.a).translations,c=Object(i.useState)(null),l=Object(r.a)(c,2),d=l[0],h=l[1],m=function(){if("undefined"===typeof window)return!1;var e=window.localStorage.getItem("lastChChecked-".concat(a));if(e){var t=JSON.parse(e);return{url:t.url,orderNumber:t.orderNumber}}}(),g=function(e){return!d||e.includes(d)&&e[0]===d[0]},j=[],f=0;f<t.length;f++){var O=t[f],y=O.orderNumber;0!==O.pages&&g(y.toString())&&j.push(Object(p.jsx)(N,{chapter:t[f],fontSize:"normal",chapterStr:s.chapter,serieName:n},"renderchapter-".concat(y)))}return Object(p.jsxs)("section",{children:[Object(p.jsxs)("div",{id:"list-container",className:"bg95",children:[Object(p.jsxs)("h2",{children:[Object(p.jsx)("span",{children:t.length})," ",s.chaptersAvailables]}),Object(p.jsxs)(u.b,{className:"last-ch-checked ".concat(m&&"active"),to:!!m&&m.url,children:[s.lastRead,": ",m?m.orderNumber:Object(p.jsx)("div",{className:"no-chapter-icon",children:Object(p.jsx)(b.a,{})})]}),Object(p.jsxs)("label",{htmlFor:"filter-input",className:"mangalinks-filter-container",children:[Object(p.jsx)("div",{className:"filterChapterText",children:s.filterChapters}),Object(p.jsx)(x.a,{}),Object(p.jsx)("input",{id:"filter-input",type:"number",className:"mangalinks-filter",placeholder:"86, 104, 36, etc",onChange:function(e){h(e.target.value)}})]}),Object(p.jsx)("nav",{children:d?Object(p.jsxs)(p.Fragment,{children:[j.reverse(),Object(p.jsx)("iframe",{src:"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4155050&output=noscript",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop",style:{margin:"0 auto"}})]}):j})]}),window.innerWidth>1199&&Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(p.jsxs)("article",{style:{display:"flex",justifyContent:"space-around",marginTop:"1vh",marginBottom:"1vh",width:"107%"},children:[Object(p.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4155050&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"}),window.innerWidth>=1700&&Object(p.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4155050&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"})]}),Object(p.jsxs)("article",{style:{display:"flex",justifyContent:"space-around",marginTop:"1vh",marginBottom:"1vh",width:"107%"},children:[Object(p.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4155050&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"}),window.innerWidth>=1700&&Object(p.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4155050&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"})]})]})]})}),M=(a(99),function(e){var t=e.mangaData,a=e.folderName;return Object(p.jsxs)("div",{className:"content",children:[window.innerWidth>599&&Object(p.jsxs)("article",{className:"topAdFadeIn",style:{display:"flex",justifyContent:"space-around"},children:[Object(p.jsx)("iframe",{src:"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4154168&output=noscript",width:"728",height:"90",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",style:{marginBottom:window.innerWidth>599&&window.innerWidth<1200?"-4.1vh":"-3.6vh"}}),window.innerWidth>1199&&Object(p.jsx)("iframe",{src:"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4154168&output=noscript",width:"728",height:"90",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",style:{marginBottom:"-3.6vh"}})]}),Object(p.jsxs)("div",{className:"mangalinks-section fadeInUp",children:[Object(p.jsx)(j,{mangaData:t,folderName:a}),window.innerWidth<1200&&Object(p.jsx)("article",{style:{display:"flex",justifyContent:"center"},children:Object(p.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153962&output=noscript",src:"",width:"300",height:"100",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-mobile",style:{marginBottom:"1vh",marginTop:"-2px"}})}),t.chapters&&Object(p.jsx)(C,{chaptersList:t.chapters.list,folderName:a,serieName:t.serieName})]})]})}),z=a(20),L=(a(100),a(101),a(82));t.default=function(){window.scrollTo({top:0});var e=Object(i.useContext)(d.a),t=e.siteMetadata,s=e.siteUrl,u=e.darkmode,j=t.currentPath,f=t.isMainSite,b=t.lang,O=f?j.split("/")[1]:g.folderName,x=Object(i.useState)({}),y=Object(r.a)(x,2),v=y[0],w=y[1],N=v.chapters,C=u?"dark":"light",W=[];return Object(c.a)()&&(N&&N.last&&W.push(Object(p.jsx)("link",{rel:"prerender",href:"".concat(N.last.url)})),N&&N.first&&"".concat(N.first.url)),Object(i.useEffect)((function(){var e=new Promise((function(e,t){return fetch("https://raw.githubusercontent.com/saulabagnale/asdf-ma-jsons/master/series/".concat(O,"/desc-").concat(b,".json")).then((function(t){return e(t.json())}))})),t=new Promise((function(e,t){return fetch("https://raw.githubusercontent.com/saulabagnale/asdf-ma-jsons/master/series/".concat(O,"/").concat(b,".json")).then((function(t){return e(t.json())}))}));Promise.all([e,t]).then((function(e){var t=Object(r.a)(e,2),a=t[0],i=t[1];w(Object(n.a)(Object(n.a)({},a),{},{serieName:a.mangaName,serieNameWithManga:"".concat(a.mangaName," Manga"),folderName:O,chapters:Object(d.c)(b,O,i.chs,a.completed)}))}))}),[b,O]),Object(L.a)(".lazy",N),Object(p.jsxs)(o.b,{pageTranslations:a(102)[b],children:[Object(p.jsx)(l.a,{fullUrl:"".concat(s).concat(j),mode:C,preloads:W,serie:v}),v.serieNameWithManga?Object(p.jsxs)("main",{className:"page-home page-chapter",children:[Object(p.jsx)(h,{link:j.split("en"===b?"/chapter":"/capitulo")[0],serie:v}),Object(p.jsx)(M,{folderName:O,mangaData:v}),window.innerWidth<1200&&v.mangaName&&Object(p.jsx)("article",{style:{display:"flex",justifyContent:"center"},children:Object(p.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153962&output=noscript",src:"",width:"300",height:"100",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",style:{marginBottom:"1vh",marginTop:"-2px"},title:"top-banner-mobile"})}),window.innerWidth<1200&&v.mangaName&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m.a,{limit:6,page:"serie",serie:v}),Object(p.jsx)("article",{style:{display:"flex",width:"100vw",justifyContent:"center"},children:Object(p.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",style:{marginTop:"1vh",marginBottom:"1vh"},title:"bottom-banner"})})]})]},"page-serie"):Object(p.jsx)(z.a,{})]})}},77:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(18),r=a(0),i=a(13),s=a(2),c=Object(r.createContext)();t.b=function(e){var t=e.children,a=e.pageTranslations,o=Object(r.useContext)(i.a).genericTranslations,l={translations:Object(n.a)(Object(n.a)({},o),a)};return Object(s.jsx)(c.Provider,{value:l,children:t})}},82:function(e,t,a){"use strict";var n=a(0),r=a(13);t.a=function(e,t){var a=Object(n.useContext)(r.a).siteMetadata,i=a.storage,s=a.lang,c=a.page,o=a.currentPath;Object(n.useEffect)((function(){if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){var t=[].slice.call(document.querySelectorAll(e));if(t.length>0){var a=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){var n=t.target;!function(e,t,a){if(e.dataset.lazybg)e.style.backgroundImage="url(".concat(e.dataset.src,")");else if(e.dataset.src.includes("/iframe.")||e.dataset.src.includes("/flags/")||e.dataset.src.includes("ogimg")||!e.dataset.src.includes("|"))e.src=e.dataset.src;else{var n="".concat(a.fullPath).concat(e.dataset.src.replaceAll("|","/"),".jpg");e.src=n}e.classList.remove(t.replace(".")),(t.includes("chs-")||t.includes("chimgs-"))&&e.classList.add("fadeIn")}(n,e,i),a.unobserve(n)}}))}));t.forEach((function(e){a.observe(e)}))}}}),[c,o,s,i,t])}},83:function(e,t,a){"use strict";a.r(t),a.d(t,"eni18nChapter",(function(){return n})),a.d(t,"esi18nChapter",(function(){return r})),a.d(t,"pti18nChapter",(function(){return i}));var n={weCanNotifyYou:"We can notify you when new chapters get released",weWillNotifyYou:"We will notify you when this chapter gets released",activateNotifications:"If you enable notifications, we can notify you when new chapters get released",notReleasedYet:"Not released yet",langName:"English",page:"Page",share:"Share Chapter",chapterOpinions:"Chapter's Opinions",downloadChapter:"Download Chapter",lastReleases:"Last Releases"},r={weCanNotifyYou:"Podemos notificarte cuando nuevos capitulos son publicados",weWillNotifyYou:"Te notificaremos cuando este capitulo sea publicado",activateNotifications:"Si habilitas las notificaciones, podemos notificarte cuando nuevos capitulos son publicados",notReleasedYet:"Aun no publicado",langName:"Espa\xf1ol",page:"Pagina",share:"Compartir Capitulo",chapterOpinions:"Opiniones del Capitulo",downloadChapter:"Descargar Capitulo",lastReleases:"Ultimos Lanzamientos"},i={weCanNotifyYou:"Podemos notific\xe1-lo quando novos cap\xedtulos forem lan\xe7ados",weWillNotifyYou:"Iremos notific\xe1-lo quando este cap\xedtulo foi publicado",activateNotifications:"Se voc\xea ativar as notifica\xe7\xf5es, podemos notific\xe1-lo quando novos cap\xedtulos forem lan\xe7ados",notReleasedYet:"Ainda n\xe3o publicado",langName:"Portugu\xeas",page:"P\xe1gina",share:"Compartilhar Cap\xedtulo",chapterOpinions:"Opini\xf5es do Cap\xedtulo",downloadChapter:"Baixar Cap\xedtulo",lastReleases:"\xdaltimos Lan\xe7amentos"}},84:function(e,t,a){"use strict";var n=a(0),r=a(90);a(83);var i=a(13),s=a(2),c=function(e,t,a,n,r,i,s,c,o){var l=n?"".concat(a," ").concat(n.split(":")[0]):"";return l?"".concat(o&&"serie"!==c&&"chapter"!==c?"MangaNyaa - ":"").concat(r," ").concat(e," ").concat(l," ").concat(i," ").concat(t," ").concat(s," Online"):"".concat(o&&"serie"!==c&&"chapter"!==c?"MangaNyaa - ":"").concat(r," ").concat(e," ").concat(i," ").concat(t).concat(l," ").concat(s," Online")},o=function(e,t,a){var n={en:"Read ".concat(t," Online Free"),es:"Leer ".concat(t," Online Gratis"),pt:"Leia ".concat(t," Online Gr\xe1tis")};return"home"===a?"MangaNyaa ~ ".concat(n[e]):n[e]},l=function(e,t,a,n,r){var i="chapter"===r&&n?"".concat(a," ").concat(function(e){var t=e.split(":")[1];return!t||!t.trim()||t.includes("released")||t.includes("publicado")||t.includes("lan\xe7ado")?e.split(":")[0]:e}(n)," "):"";return{en:"Read ".concat(t," ").concat(i,"Online Free in English with the best High Quality (Mobile App, Darkmode, Fullscreen, Image Resizing) at Manga Nyaa."),es:"Leer ".concat(t," ").concat(i,"Online Gratis en Espa\xf1ol con la mejor calidad (App Mobile, Modo Oscuro, Pantalla Completa, Ajuste de Imagen) en Manga Nyaa."),pt:"Leia ".concat(t," ").concat(i,"Online Gr\xe1tis em Portugu\xeas com a melhor qualidade (App Mobile, Modo Escuro, Ajuste de Imagem, Tela Cheia) em Manga Nyaa.")}[e]},d=function(e){return{en:"English",es:"Espa\xf1ol",pt:"Portugu\xeas"}[e]},p=function(e){return{en:"en_US",es:"es_ES",pt:"pt_BR"}[e]},h=function(e,t,a,n){if("en"===e){var r=t;"home"!==a||t.includes("/en")||t.includes("/read")?"serie"!==a||t.includes("read-online-free-english")?"chapter"!==a||t.includes("read-online-free-english")?t.includes("/en")||(r=t.replace(".com/",".com/en/")):r=t.replace("/chapter","/read-online-free-english/chapter"):r=t+"/read-online-free-english":r=n[e];var i=r.replace("chapter","capitulo").replace("read","leer").replace("free","gratis").replace("english","espanol").replace("/en","/es"),c=r.replace("chapter","capitulo").replace("read","ler").replace("free","gratis").replace("english","portugues").replace("/en","/pt");return[Object(s.jsx)("link",{rel:"alternate",hrefLang:"es",href:i},i),Object(s.jsx)("link",{rel:"alternate",hrefLang:"pt",href:c},c)]}if("es"===e){var o=t.replace("capitulo","chapter").replace("leer","read").replace("gratis","free").replace("espanol","english").replace("/es","/en"),l=t.replace("leer","ler").replace("espanol","portugues").replace("/es","/pt");return[Object(s.jsx)("link",{rel:"alternate",hrefLang:"en",href:o},o),Object(s.jsx)("link",{rel:"alternate",hrefLang:"pt",href:l},l)]}if("pt"===e){var d=t.replace("capitulo","chapter").replace("ler","read").replace("gratis","free").replace("portugues","english").replace("/pt","/en"),p=t.replace("ler","leer").replace("portugues","espanol").replace("/pt","/es");return[Object(s.jsx)("link",{rel:"alternate",hrefLang:"en",href:d},d),Object(s.jsx)("link",{rel:"alternate",hrefLang:"es",href:p},p)]}return Object(s.jsx)(s.Fragment,{})};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mode:"dark"},t=e.fullUrl,a=e.chapterTitle,m=e.mode,u=e.serie,g=e.preloads,j=void 0===g?[]:g,f=Object(n.useContext)(i.a),b=f.genericTranslations,O=f.siteMetadata,x=f.siteUrl,y=b.chapter,v=b.read,w=b.in,N=b.free,C=O.lang,M=void 0===C?"en":C,z=O.page,L=O.homes,W=O.storage,k=O.isMainSite,A=u||{},P=A.serieNameWithManga,R=void 0===P?"Manga":P,S=A.folderName,B=d(M),I=l(M,R,y,a&&a.toString(),z),T=p(M),E=o(M,R,z),D=c(R,B,y,a&&a.toString(),v,w,N,z,k),H=("home"===z||"serie"===z||"chapter"===z)&&h(M,t,z,L),F="home"!==z&&k?"".concat(W.fullPath).concat(S,"/description/1.jpg"):"".concat(x,"/ogimg.jpg");return Object(s.jsxs)(r.a,{htmlAttributes:{lang:M,mode:m,page:z},children:[Object(s.jsx)("title",{children:D}),Object(s.jsx)("meta",{property:"og:title",content:D}),Object(s.jsx)("meta",{name:"twitter:title",content:D}),Object(s.jsx)("meta",{name:"description",content:I}),Object(s.jsx)("meta",{property:"og:description",content:I}),Object(s.jsx)("meta",{name:"twitter:description",content:I}),Object(s.jsx)("link",{rel:"manifest",href:"/manifest_".concat(M,".webmanifest")}),H,Object(s.jsx)("meta",{property:"og:locale",content:T}),Object(s.jsx)("meta",{property:"og:type",content:"article"}),Object(s.jsx)("meta",{property:"og:url",content:t}),Object(s.jsx)("meta",{property:"og:site_name",content:E}),Object(s.jsx)("meta",{property:"article:section",content:"Manga"}),Object(s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(s.jsx)("meta",{name:"twitter:image",content:F}),Object(s.jsx)("meta",{property:"og:image",content:F}),Object(s.jsx)("meta",{property:"og:image:secure_url",content:F}),j]})}},85:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(30);var s=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},c=a(13),o=a(77),l=(a(87),a(2));t.a=function(e){var t=e.limit,a=void 0===t?3:t,d=e.page,p=e.serie,h=Object(n.useContext)(c.a).siteMetadata,m=Object(n.useContext)(o.a).translations,u=h.lang,g=h.homes,j=p.serieName,f=function(e,t,a,n){return s(i.filter((function(e){return e.name!==t}))).slice(0,a).map((function(t,a){var i=t.name,s=t.subdomain;return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsx)("a",{"data-src":"https://".concat(s,".manganyaa.com/ogimg.jpg"),"data-lazybg":!0,className:"other-manga-item ".concat(n," lazy"),href:"https://".concat(s,".manganyaa.com").concat(e),children:Object(l.jsx)("h6",{className:"other-manga-item-text bg70",children:i},"".concat(i,"-h6"))},"".concat(i,"-a")),2===a&&"serie"===n&&window.innerWidth<1200&&Object(l.jsx)("article",{style:{display:"flex",justifyContent:"center",marginBottom:"2.5vh"},children:Object(l.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"})})]},i)}))}(g[u],j,a,d);return Object(l.jsxs)("section",{className:"box-wrapper other-manga-wrapper ".concat(d," bg95 "),children:[Object(l.jsx)("h5",{children:m.otherPopularSeries}),Object(l.jsx)("div",{className:"box-container other-manga-container ".concat(d),children:f})]})}},86:function(e,t,a){"use strict";t.a=function(){var e=!0;if("undefined"!==typeof navigator){var t=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(t){var a=t.effectiveType,n=t.saveData;("slow-2g"===a||"2g"===a||"3g"===a||n)&&(e=!1)}}return e}},87:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";var n=a(14),r=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),s=(0,n(a(16)).default)(i.createElement("path",{d:"M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"}),"AllInclusive");t.default=s},99:function(e,t,a){}}]);