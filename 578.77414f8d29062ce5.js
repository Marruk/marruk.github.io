"use strict";(self.webpackChunkHelloImMark=self.webpackChunkHelloImMark||[]).push([[578],{578:(Ne,z,v)=>{v.r(z),v.d(z,{HomeModule:()=>_e});var Y=v(466),P=v(158),j={};!function o(i,a,r,_){var M=!!(i.Worker&&i.Blob&&i.Promise&&i.OffscreenCanvas&&i.OffscreenCanvasRenderingContext2D&&i.HTMLCanvasElement&&i.HTMLCanvasElement.prototype.transferControlToOffscreen&&i.URL&&i.URL.createObjectURL);function N(){}function F(n){var t=a.exports.Promise,c=void 0!==t?t:i.Promise;return"function"==typeof c?new c(n):(n(N,N),null)}var t,c,n,s,d,H,A=(n=Math.floor(16.666666666666668),s={},d=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(t=function(p){var l=Math.random();return s[l]=requestAnimationFrame(function m(h){d===h||d+n-1<h?(d=h,delete s[l],p()):s[l]=requestAnimationFrame(m)}),l},c=function(p){s[p]&&cancelAnimationFrame(s[p])}):(t=function(p){return setTimeout(p,n)},c=function(p){return clearTimeout(p)}),{frame:t,cancel:c}),be=function(){var n,t,c={};return function(){if(n)return n;if(!r&&M){var d=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{n=new Worker(URL.createObjectURL(new Blob([d])))}catch(p){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("\u{1f38a} Could not load worker",p),null}!function s(d){function p(l,m){d.postMessage({options:l||{},callback:m})}d.init=function(m){var h=m.transferControlToOffscreen();d.postMessage({canvas:h},[h])},d.fire=function(m,h,x){if(t)return p(m,null),t;var f=Math.random().toString(36).slice(2);return t=F(function(k){function b(g){g.data.callback===f&&(delete c[f],d.removeEventListener("message",b),t=null,x(),k())}d.addEventListener("message",b),p(m,f),c[f]=b.bind(null,{data:{callback:f}})})},d.reset=function(){for(var m in d.postMessage({reset:!0}),c)c[m](),delete c[m]}}(n)}return n}}(),ve={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function u(n,t,c){return function we(n,t){return t?t(n):n}(n&&function ye(n){return null!=n}(n[t])?n[t]:ve[t],c)}function xe(n){return n<0?0:Math.floor(n)}function ke(n,t){return Math.floor(Math.random()*(t-n))+n}function E(n){return parseInt(n,16)}function Ce(n){return n.map(Me)}function Me(n){var t=String(n).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:E(t.substring(0,2)),g:E(t.substring(2,4)),b:E(t.substring(4,6))}}function Oe(n){n.width=document.documentElement.clientWidth,n.height=document.documentElement.clientHeight}function Pe(n){var t=n.getBoundingClientRect();n.width=t.width,n.height=t.height}function Ie(n){var t=n.angle*(Math.PI/180),c=n.spread*(Math.PI/180);return{x:n.x,y:n.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*n.startVelocity+Math.random()*n.startVelocity,angle2D:-t+(.5*c-Math.random()*c),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:n.color,shape:n.shape,tick:0,totalTicks:n.ticks,decay:n.decay,drift:n.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*n.gravity,ovalScalar:.6,scalar:n.scalar}}function R(n,t){var f,c=!n,s=!!u(t||{},"resize"),d=u(t,"disableForReducedMotion",Boolean),l=M&&u(t||{},"useWorker")?be():null,m=c?Oe:Pe,h=!(!n||!l||!n.__confetti_initialized),x="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function k(g,U,S){for(var C=u(g,"particleCount",xe),T=u(g,"angle",Number),O=u(g,"spread",Number),w=u(g,"startVelocity",Number),Ee=u(g,"decay",Number),He=u(g,"gravity",Number),Ue=u(g,"drift",Number),L=u(g,"colors",Ce),Se=u(g,"ticks",Number),Q=u(g,"shapes"),qe=u(g,"scalar"),W=function Te(n){var t=u(n,"origin",Object);return t.x=u(t,"x",Number),t.y=u(t,"y",Number),t}(g),B=C,q=[],ze=n.width*W.x,De=n.height*W.y;B--;)q.push(Ie({x:ze,y:De,angle:T,spread:O,startVelocity:w,color:L[B%L.length],shape:Q[ke(0,Q.length)],ticks:Se,decay:Ee,gravity:He,drift:Ue,scalar:qe}));return f?f.addFettis(q):(f=function Ae(n,t,c,s,d){var m,h,p=t.slice(),l=n.getContext("2d"),x=F(function(f){function k(){m=h=null,l.clearRect(0,0,s.width,s.height),d(),f()}m=A.frame(function b(){r&&!(s.width===_.width&&s.height===_.height)&&(s.width=n.width=_.width,s.height=n.height=_.height),!s.width&&!s.height&&(c(n),s.width=n.width,s.height=n.height),l.clearRect(0,0,s.width,s.height),p=p.filter(function(g){return function Fe(n,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var c=t.tick++/t.totalTicks,s=t.x+t.random*t.tiltCos,d=t.y+t.random*t.tiltSin,p=t.wobbleX+t.random*t.tiltCos,l=t.wobbleY+t.random*t.tiltSin;return n.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-c)+")",n.beginPath(),"circle"===t.shape?n.ellipse?n.ellipse(t.x,t.y,Math.abs(p-s)*t.ovalScalar,Math.abs(l-d)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function Ze(n,t,c,s,d,p,l,m,h){n.save(),n.translate(t,c),n.rotate(p),n.scale(s,d),n.arc(0,0,1,l,m,h),n.restore()}(n,t.x,t.y,Math.abs(p-s)*t.ovalScalar,Math.abs(l-d)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(n.moveTo(Math.floor(t.x),Math.floor(t.y)),n.lineTo(Math.floor(t.wobbleX),Math.floor(d)),n.lineTo(Math.floor(p),Math.floor(l)),n.lineTo(Math.floor(s),Math.floor(t.wobbleY))),n.closePath(),n.fill(),t.tick<t.totalTicks}(l,g)}),p.length?m=A.frame(b):k()}),h=k});return{addFettis:function(f){return p=p.concat(f),x},canvas:n,promise:x,reset:function(){m&&A.cancel(m),h&&h()}}}(n,q,m,U,S)).promise}function b(g){var U=d||u(g,"disableForReducedMotion",Boolean),S=u(g,"zIndex",Number);if(U&&x)return F(function(w){w()});c&&f?n=f.canvas:c&&!n&&(n=function je(n){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=n,t}(S),document.body.appendChild(n)),s&&!h&&m(n);var C={width:n.width,height:n.height};function T(){if(l){var w={getBoundingClientRect:function(){if(!c)return n.getBoundingClientRect()}};return m(w),void l.postMessage({resize:{width:w.width,height:w.height}})}C.width=C.height=null}function O(){f=null,s&&i.removeEventListener("resize",T),c&&n&&(document.body.removeChild(n),n=null,h=!1)}return l&&!h&&l.init(n),h=!0,l&&(n.__confetti_initialized=!0),s&&i.addEventListener("resize",T,!1),l?l.fire(g,C,O):k(g,C,O)}return b.reset=function(){l&&l.reset(),f&&f.reset()},b}function J(){return H||(H=R(null,{useWorker:!0,resize:!0})),H}a.exports=function(){return J().apply(this,arguments)},a.exports.reset=function(){J().reset()},a.exports.create=R}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),j,!1);var $=j.exports.create;const Z=o=>o.reduce((i,a)=>i+`<div class="project__image">\n      <div><div style="background-image: url('${a}')"></div></div>\n    </div>`,""),X=[{slug:"ticketswap",name:"TicketSwap",description:"\n      <p>\n        <strong>TicketSwap</strong> is the safest way to buy and sell second hand tickets. As a Product Designer I'm part of a small design team with big plans.\n      </p>\n    ",iconColor:"#00b6f0",iconPath:"/assets/images/ticketswap-icon.png",links:[{icon:"earth",label:"Web",url:"https://ticketswap.com"},{icon:"apple",label:"App Store",url:"https://apps.apple.com/app/ticketswap-buy-sell-tickets/id932337449"},{icon:"googleplay",label:"Google Play",url:"https://play.google.com/store/apps/details?id=com.ticketswap.ticketswap"}],compact:!0},{slug:"woov",name:"Woov",description:`\n      <p>\n        <strong>Woov</strong> helps visitors and organizers get the most out of events like Mysteryland, DEFQON.1 and ADE. Visitors have an app to find their friends, create a personal timetable and <strike>buy drugs</strike> connect with others. Organizers used a dashboard to send messages and see a real-time heatmap of the terrain.\n      </p>\n      <p>\n        As the Lead UX Designer I was responsible for the experience of users while using Woov\u2019s products (surprise!). Primarily this meant translating ideas all the way into development-ready flows, screens, copy and JIRA tickets. I was also very involved with product management, where my technical input made sure that our wild ideas were never too wild. Whenever there was time left (spoiler alert: there wasn\u2019t) I helped out with development to meet deadlines.\n      </p>\n      <div class="project__images project__images--vertical">\n        ${Z(["/assets/images/woov-timetable.png","/assets/images/woov-map.png","/assets/images/woov-community.png"])}\n      </div>\n      <p>\n        The biggest design challenge at Woov was the base structure of the app. On the one hand we had functionalities per festival like the timetable and map. On the other hand we wanted users to find new events as well. Initially both goals had the same priority, making the experience confusing for the user.\n      </p>\n      <p>\n        Convincing the company to focus on one goal was an important first step with the redesign. Afterwards it was a matter of experimenting and iterating with all the possible navigation structures I could find. Backed by user testing we landed on a workspace-like structure similar to Slack: focus on one festival at a time but with all the others never far away.\n      </p>\n      \x3c!--<p>\n        Another big challenge was designing around the fact that our number one selling point for visitors, finding friends at the festival grounds, didn\u2019t work very well. To see your friend on the map they need to have their location sharing turned on, have battery left, have a signal, have an internet connection and have an operating system in a good mood so the app was able to actually do stuff. While designing I tried to make the location-finding-process as transparent as possible. At every step of the way we show the state of your friend's location and what causes it. I also made sure to always have an action available to the user so they would never feel helpless.\n      </p>--\x3e\n      <div class="project__images project__images--vertical">\n        ${Z(["/assets/images/woov-drawer.png","/assets/images/woov-friend.png","/assets/images/woov-onboarding.png"])}\n      </div>\n      <p>\n        Instead of telling the default story of how I use sketches and wireframes to solve these kinds of challenges I figured it would be more interesting to list a few key points in my way of working:\n      </p>\n      <ul>\n        <li>Making diagrams, flowcharts and spreadsheets are an important part of my design process. I use them heavily to structurize the problem, visualize possible solutions and communicate flows to stakeholders.</li>\n        <li>My technical background helps me a lot while designing. Having an understanding of how code works allows me to make sure that I don\u2019t waste the developers\u2019 time with things that are not worth it.</li>\n        <li>By taking care of the design handoff I learned not to think lightly of non-default states and edge cases. I try to incorporate those as early as possible, avoiding awkward silences after questions like &ldquo;but what if their name is Benedict Cumbersnatch?&rdquo;.</li>\n      </ul>\n      <p>\n        I spent two invaluable years at Woov. Besides a ton of experience as a designer it taught me a lot about what it takes to let a product grow. Thinking of creative solutions to get stuff done, juggling the needs of stakeholders and making compromises were an everyday occurrence. Whenever the dust settled I was proud of the progress we were making and my contribution to it.\n      </p>\n      <p>\n        Users liked it too. During my time at Woov we grew to a million users across 30+ countries and reached a 4.9 rating in both app stores.\n      </p>\n    `,tldr:"\n      Festival app growing out of the startup phase. Lead UX Designer by day, whatever was needed by night. Reached a million users with a 4.9 review score.\n    ",iconColor:"#111213",iconPath:"/assets/images/woov-icon.png",links:[{icon:"apple",label:"App Store",url:"https://apps.apple.com/app/woov/id1580044680"},{icon:"googleplay",label:"Google Play",url:"https://play.google.com/store/apps/details?id=com.woov.festivals"}]},{slug:"trials-report",name:"Trials Report",description:`\n      <p>\n        <strong>Destiny Trials Report</strong> is a webapp for players of the game &ldquo;Destiny 2&rdquo;. In its multiplayer gamemode called Trials of Osiris, two teams of three fight it out for eternal internet glory. With Trials Report, they can lookup their opponents\u2019 stats and weapons to try and get an advantage before the match even starts. And with eternal internet glory at stake, there are a lot of players that do.\n      </p>\n      <p>\n        This fun little side project has clocked 65 million sessions from 10 million users since the first version went live five years ago. I joined the &ldquo;team&rdquo; shortly after, taking charge of everything that is user facing. We are still going strong with 1.8 million sessions a month.\n      </p>\n      <div class="project__images project__images--vertical">\n        ${Z(["/assets/images/trials-player.png","/assets/images/trials-stats.png","/assets/images/trials-search.png"])}\n      </div>\n      <p>\n        Structurizing the data is the big challenge in this project. There is a ton of information to display and we are mostly used as a second screen on a mobile phone. The hierarchy of everything that is being displayed (color, size, placement) has to be spot on to make sure it doesn\u2019t turn into a mess.\n      </p>\n      <p>\n        What I love about this project is that I\u2019m able to put all my skills into it without any budgets, clients or investors to worry about. It\u2019s a lovely playing ground that has given me plenty of experience and knowledge to use in my professional life as well. Oh yeah, and despite being bad at the game I can at least make myself look good.\n      </p>\n    `,tldr:"Popular companion tool for players of the game &ldquo;Destiny 2&rdquo;. Designing and building everything but the backend. 1.8 million sessions a month.",iconColor:"#111213",iconPath:"/assets/images/trials-report-icon.png",links:[{icon:"earth",label:"Web",url:"https://trials.report"},{icon:"apple",label:"App Store",url:"https://apps.apple.com/app/destiny-trials-report/id1602391282"},{icon:"googleplay",label:"Google Play",url:"https://play.google.com/store/apps/details?id=com.plafhop.trialsreport"}]}],D=[{link:"mailto:mark.montvai@gmail.com&subject=Hello!",class:"button--primary",label:"Send me an email"},{link:"/assets/files/CV_MarkMontvai.pdf",label:"Download my resume"},{link:"https://www.instagram.com/drfrizzlemanizzle/",label:"Look at pictures of my cat"},{link:(()=>{const o=(180*Math.random()-90).toFixed(7),i=(360*Math.random()-180).toFixed(7);return`https://www.google.nl/maps/dir//${o},${i}/@${o},${i},6z`})(),label:"Go on an adventure"},{link:"https://www.youtube.com/watch?v=X4pc3IQKZVs",label:"Get emotional"},{callback:o=>{$(void 0,{resize:!0})({colors:["#FF1744","#F50057","#D500F9","#651FFF","#3D5AFE","#2979FF","#00B0FF","#1DE9B6","#00E676","#76FF03","#FFEA00","#FFC400","#FF3D00"],origin:{y:.9,x:.5}})},label:"Endlessly click this button"},{link:"https://www.youtube.com/watch?v=IL9xGDtdnHc",label:'Watch "The Room"'},{link:"https://apod.nasa.gov/apod/random_apod.html",label:"Discover the cosmos"},{callback:()=>{const o=document.createElement("div");o.style.position="fixed",o.style.left="0",o.style.right="0",o.style.top="0",o.style.bottom="0",o.classList.add("center-content"),o.innerHTML='\n        <div style="border-radius: 1rem; overflow: hidden;">\n          <img style="margin-top: -2rem; margin-bottom: -2rem; max-width: 100%;" src="/assets/images/floop.gif" onload="setTimeout(() => window.location.reload(), 700)">\n        </div>\n      ',document.body.append(o),setTimeout(()=>o.style.transform="translateZ(0)",10)},label:"Have a fresh start"}],G=[{link:"mailto:mark.montvai@gmail.com&subject=Hello!",class:"button--primary",label:"Emailing me"},{link:"https://www.instagram.com/drfrizzlemanizzle/",label:"Photos of my cat"}];var e=v(96),y=v(808),V=v(313);let I=(()=>{class o{constructor(a){this.sanitized=a}transform(a){return this.sanitized.bypassSecurityTrustHtml(a)}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(V.H7,16))},o.\u0275pipe=e.Yjl({name:"safeHtml",type:o,pure:!0}),o})();const K=["containerElement"];let ee=(()=>{class o{constructor(a){this.htmlElement=a.nativeElement}ngAfterViewInit(){setTimeout(()=>{this.fullHeight=this.htmlElement.clientHeight,this.htmlElement.style.height="200px"},100)}onExpandClicked(){var a,r,_;null===(_=null===(r=null===(a=this.containerElement)||void 0===a?void 0:a.nativeElement)||void 0===r?void 0:r.classList)||void 0===_||_.add("is-expanded"),this.htmlElement.style.height=this.fullHeight+"px"}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(e.SBq))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-expandable-text"]],viewQuery:function(a,r){if(1&a&&e.Gf(K,7),2&a){let _;e.iGM(_=e.CRH())&&(r.containerElement=_.first)}},inputs:{text:"text"},decls:7,vars:3,consts:[[1,"expandable-text"],["containerElement",""],[1,"expandable-text__content",3,"innerHtml"],[1,"expandable-text__handle","label",3,"click"],[1,"handle-content"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0,1),e._UZ(2,"div",2),e.ALo(3,"safeHtml"),e.TgZ(4,"div",3),e.NdJ("click",function(){return r.onExpandClicked()}),e.TgZ(5,"div",4),e._uU(6," Read the whole story "),e.qZA()()()),2&a&&(e.xp6(2),e.Q6J("innerHtml",e.lcZ(3,1,r.text),e.oJD))},pipes:[I],styles:['[_nghost-%COMP%]{display:block;position:relative;transition:height .3s cubic-bezier(.4,0,.2,1);will-change:height;transform:translate(0)}.expandable-text[_ngcontent-%COMP%]{position:relative;height:100%;overflow:hidden;padding:2rem}.expandable-text[_ngcontent-%COMP%]:before{position:absolute;z-index:1;left:0;right:0;bottom:-1px;height:calc(5rem + 2px);opacity:1;transition:opacity .2s linear;background-color:#fafcfe;content:"";pointer-events:none}.expandable-text[_ngcontent-%COMP%]:after{position:absolute;left:0;right:0;bottom:5rem;height:16rem;opacity:1;transition:opacity .2s linear;background:linear-gradient(to top,#fafcfe 0%,rgba(250,252,254,.738) 19%,rgba(250,252,254,.541) 34%,rgba(250,252,254,.382) 47%,rgba(250,252,254,.278) 56.5%,rgba(250,252,254,.194) 65%,rgba(250,252,254,.126) 73%,rgba(250,252,254,.075) 80.2%,rgba(250,252,254,.042) 86.1%,rgba(250,252,254,.021) 91%,rgba(250,252,254,.008) 95.2%,rgba(250,252,254,.002) 98.2%,rgba(250,252,254,0) 100%);content:"";pointer-events:none}.expandable-text.is-expanded[_ngcontent-%COMP%]:before, .expandable-text.is-expanded[_ngcontent-%COMP%]:after{opacity:0}.expandable-text__handle[_ngcontent-%COMP%]{display:flex;align-items:flex-end;cursor:pointer;position:absolute;left:0;right:0;bottom:0;padding:2rem;opacity:1;z-index:1;transition:opacity .2s linear}.is-expanded[_ngcontent-%COMP%]   .expandable-text__handle[_ngcontent-%COMP%]{opacity:0;pointer-events:none}.handle-content[_ngcontent-%COMP%]{transition:transform .1s linear;color:#6b2e82;font-weight:500;text-shadow:0 0 4px white,0 0 8px white,0 0 12px white}.expandable-text__handle[_ngcontent-%COMP%]:hover   .handle-content[_ngcontent-%COMP%]{transform:translate(.5rem)}']}),o})();function te(o,i){if(1&o&&(e.TgZ(0,"a",11)(1,"small"),e._uU(2),e._UZ(3,"i",12),e.qZA()()),2&o){const a=i.$implicit;e.Q6J("href",a.url,e.LSH),e.xp6(2),e.hij(" ",a.label," ")}}function ne(o,i){if(1&o&&e._UZ(0,"app-expandable-text",13),2&o){const a=e.oxw();e.Q6J("text",a.project.description)}}function oe(o,i){if(1&o&&(e._UZ(0,"div",14),e.ALo(1,"safeHtml")),2&o){const a=e.oxw();e.Q6J("innerHtml",e.lcZ(1,1,a.project.description),e.oJD)}}function ae(o,i){if(1&o&&(e.TgZ(0,"div",15)(1,"strong",16),e._uU(2,"TL;DR"),e.qZA(),e._UZ(3,"div",17),e.ALo(4,"safeHtml"),e.qZA()),2&o){const a=e.oxw();e.xp6(3),e.Q6J("innerHtml",e.lcZ(4,1,a.project.tldr),e.oJD)}}let ie=(()=>{class o{constructor(){}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-project"]],inputs:{project:"project"},decls:13,vars:11,consts:[[1,"project","card"],[1,"project__info"],[1,"project__icon","center-content"],[3,"src","alt"],[1,"project__title"],[1,"project__links"],["target","_blank","rel","noreferrer",3,"href",4,"ngFor","ngForOf"],[1,"project__description"],[3,"text",4,"ngIf"],["class","project__text",3,"innerHtml",4,"ngIf"],["class","project__tldr",4,"ngIf"],["target","_blank","rel","noreferrer",3,"href"],[1,"icon-launch"],[3,"text"],[1,"project__text",3,"innerHtml"],[1,"project__tldr"],[1,"label"],[3,"innerHtml"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div")(5,"h2",4),e._uU(6),e.qZA(),e.TgZ(7,"div",5),e.YNc(8,te,4,2,"a",6),e.qZA()()(),e.TgZ(9,"div",7),e.YNc(10,ne,1,1,"app-expandable-text",8),e.YNc(11,oe,2,3,"div",9),e.qZA(),e.YNc(12,ae,5,3,"div",10),e.qZA()),2&a&&(e.Tol("project--"+r.project.slug),e.xp6(2),e.Udp("background-color",r.project.iconColor),e.xp6(1),e.Q6J("src",r.project.iconPath,e.LSH)("alt",r.project.name+" icon"),e.xp6(3),e.hij(" ",r.project.name," "),e.xp6(2),e.Q6J("ngForOf",r.project.links),e.xp6(2),e.Q6J("ngIf",!0!==r.project.compact),e.xp6(1),e.Q6J("ngIf",!0===r.project.compact),e.xp6(1),e.Q6J("ngIf",r.project.tldr))},directives:[y.sg,y.O5,ee],pipes:[I],styles:[".project[_ngcontent-%COMP%]{margin:3rem 0;transform:translate(0);display:flex;flex-direction:column;overflow:hidden}@media (max-width: 512px){.project[_ngcontent-%COMP%]{border-radius:0}}.project__info[_ngcontent-%COMP%]{padding:2rem 2rem 0;display:flex;align-items:center}@media (max-width: 512px){.project__info[_ngcontent-%COMP%]{padding-bottom:2rem}}.project__title[_ngcontent-%COMP%]{margin:0;line-height:1}.project__icon[_ngcontent-%COMP%]{padding:1.5rem;border-radius:1.25rem;width:8rem;height:8rem;margin-right:2rem}.project--ticketswap[_ngcontent-%COMP%]   .project__icon[_ngcontent-%COMP%]{padding:.75rem}.project__icon[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{display:block;max-width:100%;max-height:100%}.project__links[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:inline-block;margin-right:1rem}@media (max-width: 512px){.project__description[_ngcontent-%COMP%]{order:99}}.project__text[_ngcontent-%COMP%]{padding:2rem}@media (max-width: 512px){.project__text[_ngcontent-%COMP%]{border-top:1px solid #ECEFF1}}.project__tldr[_ngcontent-%COMP%]{display:flex;align-items:flex-start;padding:2rem;border-top:1px solid #ECEFF1}@media (max-width: 512px){.project__tldr[_ngcontent-%COMP%]{display:block;border-bottom:1px solid #ECEFF1}.project__tldr[_ngcontent-%COMP%] > strong[_ngcontent-%COMP%]{display:none}}.project__tldr[_ngcontent-%COMP%] > strong[_ngcontent-%COMP%]{line-height:1.8;flex:0 0 8rem;margin-right:2rem}  .project__images{display:flex;flex-wrap:wrap;margin:3rem calc(-2rem - 2px);border-top:1px solid #ECEFF1;border-bottom:1px solid #ECEFF1}  .project__images .project__image{flex:1 0 auto;border-right:1px solid #ECEFF1;background-color:#f0f5fc}@media (max-width: 512px){  .project__images .project__image:last-child{display:none}}  .project__images .project__image>div{position:relative;padding-bottom:56.25%}  .project__images .project__image>div>div{position:absolute;height:100%;width:100%;background-size:cover;background-position:center center}  .project__images.project__images--vertical .project__image>div{padding-bottom:177.87%}"]}),o})();function re(o,i){if(1&o){const a=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(_){return e.CHM(a),e.oxw().$implicit.callback(_)}),e._uU(1),e.qZA()}if(2&o){const a=e.oxw().$implicit;e.Tol(a.class),e.xp6(1),e.hij(" ",a.label," ")}}function se(o,i){if(1&o&&(e.TgZ(0,"a",15)(1,"span"),e._uU(2),e.qZA(),e._UZ(3,"i",16),e.qZA()),2&o){const a=e.oxw().$implicit;e.Tol(a.class),e.Q6J("href",a.link,e.LSH),e.xp6(2),e.Oqu(a.label)}}function le(o,i){if(1&o&&(e.TgZ(0,"a",17)(1,"span"),e._uU(2),e.qZA()()),2&o){const a=e.oxw().$implicit;e.Tol(a.class),e.Q6J("routerLink",a.routerLink),e.xp6(2),e.Oqu(a.label)}}function ce(o,i){if(1&o&&(e.TgZ(0,"span",10),e.YNc(1,re,2,3,"button",11),e.YNc(2,se,4,4,"a",12),e.YNc(3,le,3,4,"a",13),e.qZA()),2&o){const a=i.$implicit;e.xp6(1),e.Q6J("ngIf",void 0!==a.callback),e.xp6(1),e.Q6J("ngIf",void 0!==a.link),e.xp6(1),e.Q6J("ngIf",void 0!==a.routerLink)}}let pe=(()=>{class o{constructor(){this.actions=D,this.age=Math.floor(((new Date).getTime()-new Date(1990,8,18,14,12).getTime())/31536e6)}ngOnInit(){this.mainText=`The remaining time of my ${this.age} years on this planet were spent making balloon animals, living in The Netherlands with my girlfriend and <a href="https://instagram.com/drfrizzlemanizzle" target="_blank" rel="noreferrer">Dr. Frizzle <i class="icon-launch"></i></a>, playing tennis, organizing an <a href="https://methetbordopschootquiz.github.io/" target="_blank" rel="noreferrer">online sports quiz <i class="icon-launch"></i></a> during the pandemic, supporting Arsenal, designing a <a href="/assets/files/Panini.pdf" target="_blank">Panini sticker album <i class="icon-launch"></i></a> and a transformation as seen below.`,this.actionsText="Which brings us to the end of what I have to tell you. Don\u2019t worry though: there is plenty of other stuff to do!"}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-outro"]],inputs:{actions:"actions",variant:"variant"},decls:13,vars:7,consts:[[1,"inner"],[1,"outro"],[1,"outro__content"],[1,"main-paragraph",3,"innerHtml"],[1,"transformation"],["alt","Small Mark","src","/assets/images/markmetznkleinebakkes.png"],[1,"icon-arrow_right","tertiary-text"],["alt","Big Mark","src","/assets/images/markmetznbakkes.png"],[1,"outro__actions"],["class","outro__action",4,"ngFor","ngForOf"],[1,"outro__action"],["class","button",3,"class","click",4,"ngIf"],["class","button","target","_blank","rel","noreferrer",3,"class","href",4,"ngIf"],["class","button",3,"class","routerLink",4,"ngIf"],[1,"button",3,"click"],["target","_blank","rel","noreferrer",1,"button",3,"href"],[1,"icon-launch"],[1,"button",3,"routerLink"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"p",3),e.ALo(4,"safeHtml"),e.TgZ(5,"div",4),e._UZ(6,"img",5)(7,"i",6)(8,"img",7),e.qZA(),e._UZ(9,"p",3),e.ALo(10,"safeHtml"),e.qZA(),e.TgZ(11,"div",8),e.YNc(12,ce,4,3,"span",9),e.qZA()()()),2&a&&(e.xp6(3),e.Q6J("innerHtml",e.lcZ(4,3,r.mainText),e.oJD),e.xp6(6),e.Q6J("innerHtml",e.lcZ(10,5,r.actionsText),e.oJD),e.xp6(3),e.Q6J("ngForOf",r.actions))},directives:[y.sg,y.O5,P.yS],pipes:[I],styles:["p[_ngcontent-%COMP%]{max-width:480px}.transformation[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:6rem}.transformation[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{border-radius:100%;width:12rem}.transformation[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{margin:1rem}.outro__actions[_ngcontent-%COMP%]{margin-top:2rem}.outro__action[_ngcontent-%COMP%]{margin-right:1rem;margin-bottom:1rem;display:inline-block}@media (max-width: 512px){.outro__action[_ngcontent-%COMP%]{display:block;margin-right:0}.outro__action[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}}"]}),o})();function de(o,i){if(1&o){const a=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(_){return e.CHM(a),e.oxw().$implicit.callback(_)}),e._uU(1),e.qZA()}if(2&o){const a=e.oxw().$implicit;e.Tol(a.class),e.xp6(1),e.hij(" ",a.label," ")}}function me(o,i){if(1&o&&(e.TgZ(0,"a",23)(1,"span"),e._uU(2),e.qZA(),e._UZ(3,"i",14),e.qZA()),2&o){const a=e.oxw().$implicit;e.Tol(a.class),e.Q6J("href",a.link,e.LSH),e.xp6(2),e.Oqu(a.label)}}function ge(o,i){if(1&o&&(e.TgZ(0,"span",19),e.YNc(1,de,2,3,"button",20),e.YNc(2,me,4,4,"a",21),e.qZA()),2&o){const a=i.$implicit;e.xp6(1),e.Q6J("ngIf",a.callback),e.xp6(1),e.Q6J("ngIf",!a.callback)}}function ue(o,i){1&o&&e._UZ(0,"app-project",24),2&o&&e.Q6J("project",i.$implicit)}const he=[{path:"",component:(()=>{class o{constructor(){this.ACTIONS=D,this.SHORTCUT_ACTIONS=G,this.PROJECTS=X,this.isBasecamp=!1,this.age=Math.floor(((new Date).getTime()-new Date(1990,8,18,14,12).getTime())/31536e6)}onShortcutsNudgeClicked(){window.scrollTo({left:0,top:0,behavior:"smooth"})}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:43,vars:3,consts:[[1,"section","section--alternative","shortcuts"],[1,"inner"],[1,"shortcuts__content","center-content"],["class","shortcuts__action",4,"ngFor","ngForOf"],[1,"shortcuts__nudge","label",3,"click"],[1,"icon-arrow_up"],[1,"section"],[1,"intro"],[1,"title","intro__title"],[1,"intro__description"],[1,"projects"],[3,"project",4,"ngFor","ngForOf"],[1,"more-projects"],["href","https://play.google.com/store/apps/details?id=com.plafhop.getshitdone","target","_blank","rel","noreferrer"],[1,"icon-launch"],["href","https://opendata.nu","target","_blank","rel","noreferrer"],["href","https://pubg.report","target","_blank","rel","noreferrer"],[1,"section","section--alternative"],[3,"actions"],[1,"shortcuts__action"],["class","button",3,"class","click",4,"ngIf"],["class","button","target","_blank","rel","noreferrer",3,"class","href",4,"ngIf"],[1,"button",3,"click"],["target","_blank","rel","noreferrer",1,"button",3,"href"],[3,"project"]],template:function(a,r){1&a&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div"),e._uU(4," In that case you are probably interested in"),e._UZ(5,"br"),e.YNc(6,ge,3,2,"span",3),e.qZA()()(),e.TgZ(7,"div",1)(8,"div",4),e.NdJ("click",function(){return r.onShortcutsNudgeClicked()}),e._uU(9," No need for an introduction? "),e._UZ(10,"i",5),e.qZA()()(),e.TgZ(11,"section",6)(12,"div",1)(13,"div",7)(14,"h1",8),e._uU(15," Hello, I'm Mark! "),e.qZA(),e.TgZ(16,"p",9),e._uU(17," I'm a product designer who likes solving problems. "),e.qZA(),e.TgZ(18,"p"),e._uU(19," My design & development experi\xadence, eye for detail and enthusiasm help me do just that. I'm pretty rubbish at curling though, just to keep this intro a bit unbiased. "),e.qZA(),e.TgZ(20,"p"),e._uU(21," These are the things I worked on most recently: "),e.qZA()(),e.TgZ(22,"div",10),e.YNc(23,ue,1,1,"app-project",11),e.qZA(),e.TgZ(24,"div",12)(25,"p"),e._uU(26," But wait, there's more! "),e.qZA(),e.TgZ(27,"p"),e._uU(28," For a hackathon I made an app called "),e.TgZ(29,"a",13),e._uU(30,"Get Shit Done "),e._UZ(31,"i",14),e.qZA(),e._uU(32," that people seem to like, I designed and built the frontend for "),e.TgZ(33,"a",15),e._uU(34,"OpenData "),e._UZ(35,"i",14),e.qZA(),e._uU(36," (a service with a set of APIs to simplify your webforms) and over four million people have used "),e.TgZ(37,"a",16),e._uU(38,"PUBG Report "),e._UZ(39,"i",14),e.qZA(),e._uU(40," to lookup streamer reactions on their efforts in a game. "),e.qZA()()()(),e.TgZ(41,"section",17),e._UZ(42,"app-outro",18),e.qZA()),2&a&&(e.xp6(6),e.Q6J("ngForOf",r.SHORTCUT_ACTIONS),e.xp6(17),e.Q6J("ngForOf",r.PROJECTS),e.xp6(19),e.Q6J("actions",r.ACTIONS))},directives:[y.sg,y.O5,ie,pe],styles:[".shortcuts[_ngcontent-%COMP%]{padding:0}.shortcuts__nudge[_ngcontent-%COMP%]{position:absolute;z-index:1;cursor:pointer;left:0;right:0;top:calc(100% + 2rem);color:#607d8b;text-align:center}@media (max-width: 512px){.shortcuts__nudge[_ngcontent-%COMP%]{color:#b0bec5;top:calc(100% + 1rem)}}.shortcuts__content[_ngcontent-%COMP%]{height:var(--shortcutsHeight);padding-bottom:2rem;text-align:center}.shortcuts__action[_ngcontent-%COMP%]{display:inline-block;margin-top:.5rem}.shortcuts__action[_ngcontent-%COMP%] + .shortcuts__action[_ngcontent-%COMP%]{margin-left:1rem}p[_ngcontent-%COMP%]{max-width:480px}.intro__title[_ngcontent-%COMP%]{padding-top:calc(var(--screenHeight) / 2 - 4rem);margin:0}@media (max-width: 512px){.intro__title[_ngcontent-%COMP%]{padding-top:calc(var(--screenHeight) / 2 - 2rem)}}.intro__description[_ngcontent-%COMP%]{margin-top:5rem;font-size:1.2em}.projects[_ngcontent-%COMP%]{margin:3rem -2rem 6rem}@media (max-width: 512px){.projects[_ngcontent-%COMP%]{margin-bottom:3rem}}.more-projects[_ngcontent-%COMP%]{margin-top:6rem}@media (max-width: 512px){.more-projects[_ngcontent-%COMP%]{margin-top:3rem}}"]}),o})()}];let fe=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[P.Bz.forChild(he)],P.Bz]}),o})(),_e=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[Y.m,fe]]}),o})()}}]);